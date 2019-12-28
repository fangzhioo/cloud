package com.yue.blog.portal.service.Impl;

import com.google.common.base.Preconditions;
import com.yue.blog.common.constant.RedisConstants;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogUserDOMapper;
import com.yue.blog.dao.model.BlogUserDO;
import com.yue.blog.dao.model.BlogUserDOExample;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.BlogUserBO;
import com.yue.blog.portal.pojo.bo.BlogUserRegisterBO;
import com.yue.blog.portal.service.RedisService;
import com.yue.blog.portal.service.UsersService;
import com.yue.blog.portal.utils.BlogUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UsersServiceImpl implements UsersService {

    @Autowired
    private BlogUserDOMapper blogUserDOMapper;
    @Autowired
    private RedisService redisService;

    @Override
    public BlogUserBO getById(Integer id) {
        Preconditions.checkNotNull(id, ErrorCodeEnum.ERROR_10001);
        BlogUserDO BlogUserDO = blogUserDOMapper.selectByPrimaryKey(id);
        return DOBOConvertor.doToBO(BlogUserDO);
    }

    @Override
    public BlogUserBO login(String username, String password) {
        Preconditions.checkNotNull(username, ErrorCodeEnum.ERROR_10003);
        BlogUserDOExample example = new BlogUserDOExample();
        BlogUserDOExample.Criteria criteria = example.createCriteria();
        criteria.andUsernameEqualTo(username);
        long count = blogUserDOMapper.countByExample(example);
        Preconditions.checkState(count > 0,ErrorCodeEnum.ERROR_10001);
        String pwd = BlogUtils.SHA256encode(password);
        criteria.andPasswordEqualTo(pwd);
        List<BlogUserDO> usersDOList = blogUserDOMapper.selectByExample(example);
        Preconditions.checkState(usersDOList.size() > 0 ,ErrorCodeEnum.ERROR_10002);
        return DOBOConvertor.doToBO(usersDOList.get(0));
    }

    @Override
    public int register(BlogUserRegisterBO blogUserRegisterBo) {
        Preconditions.checkNotNull(blogUserRegisterBo.getUsername(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogUserRegisterBo.getPassword(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogUserRegisterBo.getPhone(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogUserRegisterBo.getCode(),ErrorCodeEnum.ERROR_99998);
        // 验证码校验
        String realCode = redisService.get(RedisConstants.AUTH_CODE_PREFIX + blogUserRegisterBo.getPhone());
        Preconditions.checkNotNull(realCode,ErrorCodeEnum.ERROR_10007);
        Preconditions.checkState(realCode.equals(blogUserRegisterBo.getCode()),ErrorCodeEnum.ERROR_10005);
        // 校验用户是否存在
        BlogUserDOExample example = new BlogUserDOExample();
        example.createCriteria()
                .andUsernameEqualTo(blogUserRegisterBo.getUsername())
                .andPhoneEqualTo(blogUserRegisterBo.getPhone());
        long count = blogUserDOMapper.countByExample(example);
        Preconditions.checkState(count == 0,ErrorCodeEnum.ERROR_10004);
        BlogUserDO usersDO = new BlogUserDO();
        usersDO.setUsername(blogUserRegisterBo.getUsername());
        usersDO.setPhone(blogUserRegisterBo.getPhone());
        usersDO.setEmail("1020@qq.com");
        usersDO.setPassword(BlogUtils.SHA256encode(blogUserRegisterBo.getPassword()));
        return blogUserDOMapper.insertSelective(usersDO);
    }

    @Override
    public String getCode(String phone) {
        Preconditions.checkNotNull(phone,ErrorCodeEnum.ERROR_99998);
        String captcha = BlogUtils.getCaptcha();
        String key = RedisConstants.AUTH_CODE_PREFIX + phone;
        redisService.set(key,captcha);
        redisService.expire(key,RedisConstants.AUTH_CODE_EXPIRE_SECONDS);
        return captcha;
    }

}

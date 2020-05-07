package com.fangzhi.cloud.sso.dao.mapper;

import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.dao.model.CloudUserExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CloudUserMapper {
    long countByExample(CloudUserExample example);

    int deleteByExample(CloudUserExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(CloudUser record);

    int insertSelective(CloudUser record);

    List<CloudUser> selectByExample(CloudUserExample example);

    CloudUser selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") CloudUser record, @Param("example") CloudUserExample example);

    int updateByExample(@Param("record") CloudUser record, @Param("example") CloudUserExample example);

    int updateByPrimaryKeySelective(CloudUser record);

    int updateByPrimaryKey(CloudUser record);

    CloudUser loginByUsernameAndPassword(CloudUser record);

}

package com.fangzhi.cloud.blog.controller;

import com.fangzhi.cloud.blog.pojo.vo.BlogArticle;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
public class MainController {
    @Autowired
    private HttpServletRequest request;

    @GetMapping("/")
    public String root(Model model){
        try {
            SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
            if(ssoUser==null){
                ssoUser = new SSOUser();
            }
            model.addAttribute("userId", ssoUser.getUserId());
            model.addAttribute("nickname",ssoUser.getNickName());
            return "index";
        }catch (Exception e){
            model.addAttribute("userId", 0);
            model.addAttribute("nickname", "guest");
            return "index";
        }

    }

    @GetMapping("/publish")
    public String publish(){
        return "publish";
    }

    @GetMapping("/currentUser")
    @ResponseBody
    public SSOUser currentUser(){
        SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
        return ssoUser;
    }

//    @GetMapping("/article/{id}")
//    @ResponseBody
//    public BlogArticle getArticleById(@PathVariable("id") String articleId){
//        BlogArticle article = new BlogArticle();
//        article.setId(articleId);
//        article.setTitle("title");
//        return article;
//    }
//
//    @Resource
//    private RestTemplate restTemplate;
//    @Value("${service-url.nacos-cloud-sso-service}")
//    private String nacosCloudSSOUrl;
//
//    @GetMapping("/getAuthor")
//    public String getAuthor(@RequestParam("id") String id){
//        // 调用sso中的服务
//        return restTemplate.getForObject(nacosCloudSSOUrl+"/user/"+ id,String.class);
//    }
}

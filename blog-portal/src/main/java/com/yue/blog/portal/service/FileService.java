package com.yue.blog.portal.service;

import com.yue.blog.portal.pojo.bo.AliyunOSSPolicyBO;
import com.yue.blog.portal.pojo.bo.BlogFileBO;
import com.yue.blog.portal.pojo.dto.BlogFileSearch;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileService {

    AliyunOSSPolicyBO policy();

    BlogFileBO uploadOSSFile(MultipartFile file);

    List<Object> listOSSFile();

    List<BlogFileBO> listFile(BlogFileSearch search);

    boolean deleteFile(String fileKey);

    boolean asyncFile(BlogFileBO fileBo);
}

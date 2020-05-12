package com.fangzhi.cloud.blog;

import com.fangzhi.cloud.common.util.AvatarUtil;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class BlogApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void avatarTest() {
        try {
            int id = "fangzhi".hashCode();
            System.out.println("fangzhi 的hashcode为：" + id);
            String base64Avatar = AvatarUtil.createBase64Avatar(id);
            System.out.println("\n======生成头像为：====\n");
            System.out.println(base64Avatar);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}

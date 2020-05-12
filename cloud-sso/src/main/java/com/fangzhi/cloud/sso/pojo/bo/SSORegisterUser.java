package com.fangzhi.cloud.sso.pojo.bo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SSORegisterUser {
    private String username;
    private String password;
    private String confirmPassword;
    private String nickname;
}

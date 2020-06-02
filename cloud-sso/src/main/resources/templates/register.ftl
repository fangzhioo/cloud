<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>SSO统一认证中心</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="icon" href="/favicon.png" type="image/x-icon" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/index.css" />
</head>
<body>

<div id="particles-js">
    <form action="${request.contextPath}/doRegister" method="post">
        <div class="login">
            <div class="login-top">
                SSO注册中心
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="https://www.17sucai.com/preview/869565/2018-09-18/css3Signin/img/name.png"/></div>
                <div class="login-center-input">
                    <input type="text" name="username" value="" placeholder="请输入您的用户名" onfocus="this.placeholder=''" onblur="this.placeholder='登陆用户名'"/>
                    <div class="login-center-input-text">用户名</div>
                </div>
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="https://www.17sucai.com/preview/869565/2018-09-18/css3Signin/img/name.png"/></div>
                <div class="login-center-input">
                    <input type="text" name="nickname" value="" placeholder="请输入您的昵称" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的昵称'"/>
                    <div class="login-center-input-text">昵称</div>
                </div>
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="https://www.17sucai.com/preview/869565/2018-09-18/css3Signin/img/password.png"/></div>
                <div class="login-center-input">
                    <input type="password" name="password" value="" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
                    <div class="login-center-input-text">密码</div>
                </div>
            </div>
            <div class="login-center clearfix">
                <div class="login-center-img"><img src="https://www.17sucai.com/preview/869565/2018-09-18/css3Signin/img/password.png"/></div>
                <div class="login-center-input">
                    <input type="password" name="confirmPassword" value="" placeholder="请确认您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请确认您的密码'"/>
                    <div class="login-center-input-text">确认密码</div>
                </div>
            </div>

            <#if errorMsg?exists>
                <div class="login-center clearfix textover">
                    <p style="color: red;">${errorMsg}</p>
                </div>
            </#if>
            <div style="text-align: center">
                <button class="login-button" type="submit">提交注册</button>
            </div>
        </div>
    </form>
    <div class="sk-rotating-plane"></div>
</div>

<!-- scripts -->
<script src="js/particles.js"></script>
<script src="js/index.js"></script>

</body>
</html>
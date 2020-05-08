<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>统一认证中心</title>

</head>
<body class="hold-transition login-page">

<div class="login-box">
    <div class="login-logo">
        <a><b>XXL</b>SSO</a>
    </div>
    <form action="${request.contextPath}/doLogin" method="post">
        <div class="login-box-body">
            <p class="login-box-msg">统一认证中心</p>
            <div class="form-group has-feedback">
                <input type="text" name="username" class="form-control" placeholder="Please input username." value="fangzhi" maxlength="50" >
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" name="password" class="form-control" placeholder="Please input password." value="1234567" maxlength="50" >
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <#if errorMsg?exists>
            <p style="color: red;">${errorMsg}</p>
        </#if>

        <div class="row">
            <div class="col-xs-8">
                <div class="checkbox icheck">
                    <label>
                        <input type="checkbox" name="remember" >记住密码
                    </label>
                </div>
            </div><!-- /.col -->
            <div class="col-xs-4">
                <input type="hidden" name="redirect_url" value="${redirect_url!''}" />
                <button type="submit" class="btn btn-primary btn-block btn-flat">Login</button>
            </div>
        </div>
</div>
</form>
</div>

</body>
</html>
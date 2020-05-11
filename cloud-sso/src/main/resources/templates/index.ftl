<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>SSO统一认证中心</title>
</head>
<body style="display: flex; justify-content: center;">
   <div style="padding-left: 20px;padding-top: 80px;">
       <div>
           <h2>欢迎👏，${nickName}</h2>
       </div>
       <div>
           <p>
               <span>用户ID： </span>
               <span>${userId}</span>
           </p>
           <p>
               <span>用户名称：</span>
               <span>${userName}</span>
           </p>
           <p>
               <span>本次登陆：</span>
               <span>${expireFreshTime}</span>
           </p>
           <p>
               <span>登陆版本：</span>
               <span>${version}</span>
           </p>
       </div>
       <div style="display: flex">
           <a href="/logout" style="margin-right: 30px;"><h3>登出</h3></a>
           <a href="/register"><h3>注册</h3></a>
       </div>
   </div>
</body>
</html>
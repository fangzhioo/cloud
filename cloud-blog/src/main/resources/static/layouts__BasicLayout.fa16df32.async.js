(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"2Fcx":function(e,a,t){e.exports={container:"container___1Rq3A"}},bsDN:function(e,a,t){e.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O",name:"name___2eduw"}},bx7e:function(e,a,t){"use strict";t.r(a);var n=t("uicd"),r=t("XGJZ"),c=t("9SZC"),l=t("ZZRV"),o=t.n(l),u=t("9kvl"),i=t("FR5j"),s=t("/rVR"),m=(t("xjfw"),t("ElPs")),p=(t("OaC4"),t("l7xQ")),d=(t("PYkJ"),t("RXRa")),h=(t("GSFG"),t("fqfc")),f=t("MjEU"),g=t("Bk2R"),b=t("Rtfb"),v=t("Yx6r"),E=t("k95W"),_=t("Z16q"),k=t("N97y"),y=(t("zzHK"),t("GRmQ")),N=t("RqRT"),R=t("iczh"),j=t.n(R),C=t("2Fcx"),O=t.n(C),x=function(e){var a=e.overlayClassName,t=Object(N["a"])(e,["overlayClassName"]);return o.a.createElement(y["a"],Object(n["a"])({overlayClassName:j()(O.a.container,a)},t))},w=x,z=t("bsDN"),D=t.n(z),S=function(e){Object(b["a"])(t,e);var a=Object(v["a"])(t);function t(){var e;Object(f["a"])(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=a.call.apply(a,[this].concat(r)),e.onMenuClick=function(a){var t=a.key;if("logout"!==t)u["d"].push("/account/".concat(t));else{var n=e.props.dispatch;n&&n({type:"user/fetchUserLogout"})}},e.handleLogin=function(){var a=e.props.dispatch;a&&a({type:"user/fetchUserLogin"})},e}return Object(g["a"])(t,[{key:"render",value:function(){var e=this.props,a=e.currentUser,t=void 0===a?{avatar:"",nickName:""}:a,n=e.menu,r=e.loading,c=void 0!==r&&r,l=o.a.createElement(h["a"],{className:D.a.menu,selectedKeys:[],onClick:this.onMenuClick},n&&o.a.createElement(h["a"].Item,{key:"center"},o.a.createElement(E["a"],null),"\u4e2a\u4eba\u4e2d\u5fc3"),n&&o.a.createElement(h["a"].Item,{key:"settings"},o.a.createElement(_["a"],null),"\u4e2a\u4eba\u8bbe\u7f6e"),n&&o.a.createElement(h["a"].Divider,null),o.a.createElement(h["a"].Item,{key:"logout"},o.a.createElement(k["a"],null),"\u9000\u51fa\u767b\u5f55"));return t&&void 0!==t.userId?o.a.createElement(p["a"],{spinning:c},o.a.createElement(w,{overlay:l},o.a.createElement("span",{className:"".concat(D.a.action," ").concat(D.a.account)},o.a.createElement(d["a"],{size:"small",className:D.a.avatar,src:t.avatar,alt:"avatar"}),o.a.createElement("span",{className:D.a.name},t.nickName)))):o.a.createElement("span",{className:"".concat(D.a.action," ").concat(D.a.account)},o.a.createElement(m["a"],{onClick:this.handleLogin,type:"link"},"\u767b\u9646"))}}]),t}(o.a.Component),U=Object(u["a"])((function(e){var a=e.user,t=e.loading;return{currentUser:a.currentUser,loading:t.effects["user/currentUser"]}}),null,null,{forwardRef:!0})(S),V=(t("Niek"),t("BSw4")),M=(t("9M95"),t("Iiwt")),T=t("iNbU"),A=t("fXbq"),I=t("P24d"),F=t("RYWf"),K=t("j5Qg"),P=t.n(K),W=function(e){var a=e.className,t=e.defaultValue,n=e.onVisibleChange,r=e.placeholder,c=(e.open,e.defaultOpen),u=Object(N["a"])(e,["className","defaultValue","onVisibleChange","placeholder","open","defaultOpen"]),i=Object(l["useRef"])(null),s=Object(F["a"])(t,{value:e.value,onChange:e.onChange}),m=Object(A["a"])(s,2),p=m[0],d=m[1],h=Object(F["a"])(c||!1,{value:e.open,onChange:n}),f=Object(A["a"])(h,2),g=f[0],b=f[1],v=j()(P.a.input,Object(T["a"])({},P.a.show,g));return o.a.createElement("div",{className:j()(a,P.a.headerSearch),onClick:function(){b(!0),g&&i.current&&i.current.focus()},onTransitionEnd:function(e){var a=e.propertyName;"width"!==a||g||n&&n(g)}},o.a.createElement(I["a"],{key:"Icon",style:{cursor:"pointer"}}),o.a.createElement(V["a"],{key:"AutoComplete",className:v,value:p,style:{height:28,marginTop:-6},options:u.options,onChange:d},o.a.createElement(M["a"],{ref:i,defaultValue:t,"aria-label":r,placeholder:r,onKeyDown:function(e){"Enter"===e.key&&u.onSearch&&u.onSearch(p)},onBlur:function(){b(!1)}})))},Z=W,q=t("vvXl"),B=t("rFY1"),L=t.n(B),Y=function(e){var a=e.className,t=Object(u["c"])(),n=function(e){var a=e.key;return Object(u["f"])(a)},r=["zh-CN"],c={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},l={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddfa\ud83c\uddf8","pt-BR":"\ud83c\udde7\ud83c\uddf7"},i=o.a.createElement(h["a"],{className:L.a.menu,selectedKeys:[t],onClick:n},r.map((function(e){return o.a.createElement(h["a"].Item,{key:e},o.a.createElement("span",{role:"img","aria-label":c[e]},l[e])," ",c[e])})));return o.a.createElement(w,{overlay:i,placement:"bottomRight"},o.a.createElement("span",{className:j()(L.a.dropDown,a)},o.a.createElement(q["a"],{title:"\u8bed\u8a00"})))},G=Y,J=function(e){var a=e.theme,t=e.layout,n=D.a.right;return"dark"===a&&"topmenu"===t&&(n="".concat(D.a.right,"  ").concat(D.a.dark)),o.a.createElement("div",{className:n},o.a.createElement(Z,{className:"".concat(D.a.action," ").concat(D.a.search),placeholder:"\u7ad9\u5185\u641c\u7d22",defaultValue:"umi ui",options:[{label:"umi",value:"umi ui"},{label:"ant",value:"Ant Design"}],onSearch:function(e){console.log("input",e)}}),o.a.createElement(U,null),o.a.createElement(G,{className:D.a.action}))},Q=Object(u["a"])((function(e){var a=e.settings;return{theme:a.navTheme,layout:a.layout}}),null,null,{forwardRef:!0})(J),X=t("mxmt"),H=t.n(X),$=function(e){return e},ee=o.a.createElement(c["a"],{copyright:"xxxxxxxxxx",links:[{key:"Ant Design Pro",title:"Ant Design Pro",href:"",blankTarget:!0},{key:"github",title:o.a.createElement(s["a"],null),href:"",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"",blankTarget:!0}]}),ae=function(e){var a=e.dispatch,t=e.children,l=e.settings,s=function(e){a&&a({type:"global/changeLayoutCollapsed",payload:e})},m=Object(u["g"])(),p=m.formatMessage;return o.a.createElement(c["c"],Object(n["a"])({logo:H.a,formatMessage:p,menuHeaderRender:function(e,a){return o.a.createElement(i["a"],{to:"/"},e,a)},onCollapse:s,menuItemRender:function(e,a){return e.isUrl||e.children||!e.path?a:o.a.createElement(i["a"],{to:e.path},a)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:p({id:"menu.home"})}].concat(Object(r["a"])(e))},itemRender:function(e,a,t,n){var r=0===t.indexOf(e);return r?o.a.createElement(i["a"],{to:n.join("/")},e.breadcrumbName):o.a.createElement("span",null,e.breadcrumbName)},footerRender:function(){return ee},menuDataRender:$,disableContentMargin:!0,rightContentRender:function(){return o.a.createElement(Q,null)}},e,l),t)};a["default"]=Object(u["a"])((function(e){var a=e.global,t=e.settings;return{collapsed:a.collapsed,settings:t}}))(ae)},j5Qg:function(e,a,t){e.exports={headerSearch:"headerSearch___RN1il",input:"input___3Vzpl",show:"show___VZRKu"}},mxmt:function(e,a,t){e.exports=t.p+"static/logo.2dcb37cf.svg"},rFY1:function(e,a,t){e.exports={menu:"menu___25uep",dropDown:"dropDown___2mKz9"}}}]);
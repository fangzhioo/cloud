(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{GV2H:function(e,t,a){"use strict";a.r(t);a("oeA4");var n=a("MS9U"),r=(a("FbBM"),a("9v9F")),c=a("fXbq"),o=a("ZZRV"),i=a.n(o),l=(a("jGWh"),a("F7r9")),s=(a("PYkJ"),a("RXRa")),u=(a("lmH+"),a("UyQo")),d=a("VrcO"),m=a.n(d),f=a("oYyW"),v=a("GH19"),p=a("+Cj8"),E=function(e){var t=e.icon,a=e.text;return i.a.createElement(u["a"],null,i.a.createElement(t),a)},b=function(e){var t=e.dataSource,a=void 0===t?[]:t,n=e.loading,r=void 0!==n&&n,c=e.over,o=void 0!==c&&c,u=e.onInfinite,d=void 0===u?function(){return null}:u,b=function(){d&&d()};return i.a.createElement(m.a,{initialLoad:!1,pageStart:0,loadMore:b,hasMore:!o,useWindow:!0},i.a.createElement(l["b"],{dataSource:a,loading:r,itemLayout:"vertical",renderItem:function(e){return i.a.createElement(l["b"].Item,{key:e.email,actions:[i.a.createElement(E,{icon:f["a"],text:"156",key:"list-vertical-star-o"}),i.a.createElement(E,{icon:v["a"],text:"156",key:"list-vertical-like-o"}),i.a.createElement(E,{icon:p["a"],text:"2",key:"list-vertical-message"})],extra:i.a.createElement("img",{width:272,alt:"logo",src:"https://i.picsum.photos/id/".concat(e.dob.age,"/544/336.jpg")})},i.a.createElement(l["b"].Item.Meta,{avatar:i.a.createElement(s["a"],{src:e.picture.thumbnail}),title:"".concat(e.name.title," ").concat(e.name.first," ").concat(e.name.last),description:i.a.createElement("div",null,e.registered.date)}),i.a.createElement("div",{style:{wordBreak:"break-all",whiteSpace:"normal"}},JSON.stringify(e.location)))}}))},h=b,g="https://randomuser.me/api/?results=10",w=function(){var e=Object(o["useState"])([]),t=Object(c["a"])(e,2),a=t[0],l=t[1],s=Object(o["useState"])(!1),u=Object(c["a"])(s,2),d=u[0],m=u[1],f=function(){console.log("handleInfinite"),m(!0),fetch(g,{headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){var t=a.concat(e.results);l(t),m(!1)}))};return Object(o["useEffect"])((function(){f()}),[]),i.a.createElement(n["a"],{bordered:!1},i.a.createElement(r["a"],null),i.a.createElement(h,{dataSource:a,loading:d,over:a.length>100,onInfinite:f}))};t["default"]=w}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"/qDX":function(e,t,n){e.exports={"ant-typography":"ant-typography","ant-typography-secondary":"ant-typography-secondary","ant-typography-warning":"ant-typography-warning","ant-typography-danger":"ant-typography-danger","ant-typography-disabled":"ant-typography-disabled","ant-typography-ellipsis":"ant-typography-ellipsis","ant-typography-copy":"ant-typography-copy","ant-typography-edit":"ant-typography-edit","ant-typography-expand":"ant-typography-expand","ant-typography-copy-success":"ant-typography-copy-success","ant-typography-edit-content":"ant-typography-edit-content","ant-typography-edit-content-confirm":"ant-typography-edit-content-confirm","ant-typography-ellipsis-single-line":"ant-typography-ellipsis-single-line","ant-typography-ellipsis-multiple-line":"ant-typography-ellipsis-multiple-line"}},CWS2:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("Telt");var o=r(n("Tckk"));n("Pwec");var a=r(n("CtXQ"));n("lUTK");var i=r(n("BvKs"));n("T2oS");var l=r(n("W9HT")),c=r(n("2Taf")),u=r(n("vZ4D")),s=r(n("l4Ni")),p=r(n("ujKo")),f=r(n("MhPg")),d=n("Y2fQ"),y=r(n("q1tI")),h=n("Hg0r"),m=r(n("3a4m")),b=r(n("uZXw")),g=r(n("h3zL")),v=function(e){function t(){var e;return(0,c.default)(this,t),e=(0,s.default)(this,(0,p.default)(t).apply(this,arguments)),e.onGuestMenuClick=function(e){var t=e.key;"login"===t&&m.default.push("/user/login")},e.onMenuClick=function(t){var n=t.key;if("logout"!==n)m.default.push("/account/".concat(n));else{var r=e.props.dispatch;r&&r({type:"login/logout"})}},e}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,n=void 0===t?{avatar:"",username:""}:t,r=e.currentUserLoading;if(r)return y.default.createElement(l.default,{size:"small",style:{marginLeft:8,marginRight:8}});if(n&&n.username){var c=y.default.createElement(i.default,{className:g.default.menu,selectedKeys:[],onClick:this.onMenuClick},y.default.createElement(i.default.Item,{key:"center"},y.default.createElement(a.default,{type:"user"}),y.default.createElement(d.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),y.default.createElement(i.default.Item,{key:"settings"},y.default.createElement(a.default,{type:"setting"}),y.default.createElement(d.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),y.default.createElement(i.default.Divider,null),y.default.createElement(i.default.Item,{key:"logout"},y.default.createElement(a.default,{type:"logout"}),y.default.createElement(d.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"})));return y.default.createElement(b.default,{overlay:c},y.default.createElement("span",{className:"".concat(g.default.action," ").concat(g.default.account)},y.default.createElement(o.default,{size:"small",className:g.default.avatar,src:n.avatar,alt:"avatar"}),y.default.createElement("span",{className:g.default.name},n.username)))}var u=y.default.createElement(i.default,{className:g.default.menu,selectedKeys:[],onClick:this.onGuestMenuClick},y.default.createElement(i.default.Item,{key:"login"},y.default.createElement(a.default,{type:"user"}),"\u767b\u9646"));return y.default.createElement(b.default,{overlay:u},y.default.createElement("span",{className:"".concat(g.default.action," ").concat(g.default.account)},y.default.createElement(o.default,{size:"small",className:g.default.avatar,src:"'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'",alt:"avatar"}),y.default.createElement("span",{className:g.default.name},"Guest")))}}]),t}(y.default.Component),E=(0,h.connect)(function(e){var t=e.user,n=e.loading;return{currentUser:t.currentUser,currentUserLoading:n.effects["user/fetchCurrent"]}})(v);t.default=E},Fw9o:function(e,t,n){"use strict";var r=n("tAuX"),o=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("5NDa");var a=o(n("5rEg"));n("O3gP");var i=o(n("lrIw"));n("Pwec");var l=o(n("CtXQ")),c=o(n("eHn4")),u=o(n("Y/ft")),s=o(n("2Taf")),p=o(n("vZ4D")),f=o(n("l4Ni")),d=o(n("ujKo")),y=o(n("MhPg")),h=r(n("q1tI")),m=o(n("TSYQ")),b=o(n("sEfC")),g=o(n("G3lK")),v=function(e){function t(e){var n;return(0,s.default)(this,t),n=(0,f.default)(this,(0,d.default)(t).call(this,e)),n.inputRef=null,n.onKeyDown=function(e){"Enter"===e.key&&n.debouncePressEnter()},n.onChange=function(e){if("string"===typeof e){var t=n.props,r=t.onSearch,o=t.onChange;n.setState({value:e}),r&&r(e),o&&o(e)}},n.enterSearchMode=function(){var e=n.props.onVisibleChange;e(!0),n.setState({searchMode:!0},function(){var e=n.state.searchMode;e&&n.inputRef&&n.inputRef.focus()})},n.leaveSearchMode=function(){n.setState({searchMode:!1})},n.debouncePressEnter=function(){var e=n.props.onPressEnter,t=n.state.value;e(t||"")},n.state={searchMode:e.defaultOpen,value:e.defaultValue},n.debouncePressEnter=(0,b.default)(n.debouncePressEnter,500,{leading:!0,trailing:!1}),n}return(0,y.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.defaultValue,o=t.placeholder,s=(t.open,(0,u.default)(t,["className","defaultValue","placeholder","open"])),p=this.state,f=p.searchMode,d=p.value;delete s.defaultOpen;var y=(0,m.default)(g.default.input,(0,c.default)({},g.default.show,f));return h.default.createElement("span",{className:(0,m.default)(n,g.default.headerSearch),onClick:this.enterSearchMode,onTransitionEnd:function(t){var n=t.propertyName;if("width"===n&&!f){var r=e.props.onVisibleChange;r(f)}}},h.default.createElement(l.default,{type:"search",key:"Icon"}),h.default.createElement(i.default,Object.assign({key:"AutoComplete"},s,{className:y,value:d,onChange:this.onChange}),h.default.createElement(a.default,{ref:function(t){e.inputRef=t},defaultValue:r,"aria-label":o,placeholder:o,onKeyDown:this.onKeyDown,onBlur:this.leaveSearchMode})))}}],[{key:"getDerivedStateFromProps",value:function(e){return"open"in e?{searchMode:e.open}:null}}]),t}(h.Component);t.default=v,v.defaultProps={defaultActiveFirstOption:!1,onPressEnter:function(){},onSearch:function(){},onChange:function(){},className:"",placeholder:"",dataSource:[],defaultOpen:!1,onVisibleChange:function(){}}},G3lK:function(e,t,n){e.exports={headerSearch:"antd-pro-components-header-search-index-headerSearch",input:"antd-pro-components-header-search-index-input",show:"antd-pro-components-header-search-index-show"}},"O/iA":function(e,t,n){e.exports={"ant-select-auto-complete":"ant-select-auto-complete","ant-select":"ant-select","ant-select-selection":"ant-select-selection","ant-select-selection__rendered":"ant-select-selection__rendered","ant-select-selection__placeholder":"ant-select-selection__placeholder","ant-select-selection--single":"ant-select-selection--single","ant-select-search--inline":"ant-select-search--inline","ant-select-allow-clear":"ant-select-allow-clear","ant-input":"ant-input","ant-select-lg":"ant-select-lg","ant-select-sm":"ant-select-sm","ant-input-group":"ant-input-group","ant-select-search__field":"ant-select-search__field","ant-input-affix-wrapper":"ant-input-affix-wrapper"}},O3gP:function(e,t,n){"use strict";n.r(t);n("cIOH"),n("O/iA"),n("OaEy"),n("5NDa")},bx7e:function(e,t,n){"use strict";var r=n("tAuX"),o=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("gWZ8"));n("Pwec");var i=o(n("CtXQ"));n("tU7J");var l=o(n("wFql")),c=o(n("p0pE"));n("+L6B");var u=o(n("2/Rp"));n("J+/v");var s=o(n("MoRW")),p=o(n("Hx5s")),f=r(n("q1tI")),d=o(n("wY1l")),y=n("Hg0r"),h=n("Y2fQ"),m=o(n("eTk0")),b=o(n("sgkG")),g=n("c+yx"),v=o(n("mxmt")),E=f.default.createElement(s.default,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:f.default.createElement(u.default,{type:"primary"},f.default.createElement(d.default,{to:"/user/login"},"Go Login"))}),O=function e(t){return t.map(function(t){var n=(0,c.default)({},t,{children:t.children?e(t.children):[]});return m.default.check(t.authority,n,null)})},C=f.default.createElement("div",{style:{padding:40,backgroundColor:"#FFF"}},f.default.createElement(l.default.Title,{level:2,style:{textAlign:"center"}},f.default.createElement(i.default,{type:"smile",theme:"twoTone"})," Ant Design Pro"," ",f.default.createElement(i.default,{type:"heart",theme:"twoTone",twoToneColor:"#eb2f96"})," You")),w=function(){return C},S=function(e){var t=e.dispatch,n=e.children,r=e.settings,o=e.location,i=void 0===o?{pathname:"/"}:o;(0,f.useEffect)(function(){},[]);var l=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},c=(0,g.getAuthorityFromRouter)(e.route.routes,i.pathname||"/")||{authority:void 0};return f.default.createElement(p.default,Object.assign({logo:v.default,menuHeaderRender:function(e,t){return f.default.createElement(d.default,{to:"/"},e,t)},onCollapse:l,menuItemRender:function(e,t){return e.isUrl||e.children?t:f.default.createElement(d.default,{to:e.path},t)},breadcrumbRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[{path:"/",breadcrumbName:(0,h.formatMessage)({id:"menu.home",defaultMessage:"Home"})}].concat((0,a.default)(e))},itemRender:function(e,t,n,r){var o=0===n.indexOf(e);return o?f.default.createElement(d.default,{to:r.join("/")},e.breadcrumbName):f.default.createElement("span",null,e.breadcrumbName)},footerRender:w,menuDataRender:O,formatMessage:h.formatMessage,rightContentRender:function(){return f.default.createElement(b.default,null)}},e,r),f.default.createElement(m.default,{authority:c.authority,noMatch:E},n))},j=(0,y.connect)(function(e){var t=e.global,n=e.settings;return{collapsed:t.collapsed,settings:n}})(S);t.default=j},h3zL:function(e,t,n){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},lrIw:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("LdHM"),a=n("TSYQ"),i=n.n(a);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var b=function(e){function t(){var e;return u(this,t),e=f(this,y(t).apply(this,arguments)),e.saveRef=function(t){var n=e.props.children.ref;"function"===typeof n&&n(t)},e}return h(t,e),p(t,[{key:"render",value:function(){return r["cloneElement"](this.props.children,c(c({},this.props),{ref:this.saveRef}),null)}}]),t}(r["Component"]),g=n("5rEg"),v=n("2fM7"),E=n("H84U");function O(e){return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function P(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function N(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function M(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}n.d(t,"default",function(){return R});var R=function(e){function t(){var e;return S(this,t),e=P(this,_(t).apply(this,arguments)),e.saveSelect=function(t){e.select=t},e.getInputElement=function(){var t=e.props.children,n=t&&r["isValidElement"](t)&&t.type!==o["b"]?r["Children"].only(e.props.children):r["createElement"](g["default"],null),a=w({},n.props);return delete a.children,r["createElement"](b,a,n)},e.renderAutoComplete=function(t){var n,a,l=t.getPrefixCls,c=e.props,u=c.prefixCls,s=c.size,p=c.className,f=void 0===p?"":p,d=c.notFoundContent,y=c.optionLabelProp,h=c.dataSource,m=c.children,b=l("select",u),g=i()((n={},C(n,"".concat(b,"-lg"),"large"===s),C(n,"".concat(b,"-sm"),"small"===s),C(n,f,!!f),C(n,"".concat(b,"-show-search"),!0),C(n,"".concat(b,"-auto-complete"),!0),n)),E=r["Children"].toArray(m);return a=E.length&&M(E[0])?m:h?h.map(function(e){if(r["isValidElement"](e))return e;switch(O(e)){case"string":return r["createElement"](o["b"],{key:e},e);case"object":return r["createElement"](o["b"],{key:e.value},e.text);default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}}):[],r["createElement"](v["a"],w({},e.props,{className:g,mode:v["a"].SECRET_COMBOBOX_MODE_DO_NOT_USE,optionLabelProp:y,getInputElement:e.getInputElement,notFoundContent:d,ref:e.saveSelect}),a)},e}return N(t,e),x(t,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){return r["createElement"](E["a"],null,this.renderAutoComplete)}}]),t}(r["Component"]);R.Option=o["b"],R.OptGroup=o["a"],R.defaultProps={transitionName:"slide-up",optionLabelProp:"children",choiceTransitionName:"zoom",showSearch:!1,filterOption:!1}},sgkG:function(e,t,n){"use strict";var r=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("Pwec");var o=r(n("CtXQ"));n("5Dmo");var a=r(n("3S7+")),i=r(n("q1tI")),l=n("Hg0r"),c=n("Y2fQ"),u=r(n("CWS2")),s=r(n("Fw9o")),p=r(n("trCS")),f=r(n("h3zL")),d=function(e){var t=e.theme,n=e.layout,r=f.default.right;return"dark"===t&&"topmenu"===n&&(r="".concat(f.default.right,"  ").concat(f.default.dark)),i.default.createElement("div",{className:r},i.default.createElement(s.default,{className:"".concat(f.default.action," ").concat(f.default.search),placeholder:(0,c.formatMessage)({id:"component.globalHeader.search"}),defaultValue:"umi ui",dataSource:["javascript","spring boot"],onSearch:function(e){console.log("input",e)},onPressEnter:function(e){console.log("enter",e)}}),i.default.createElement(a.default,{title:(0,c.formatMessage)({id:"component.globalHeader.help"})},i.default.createElement("a",{target:"_blank",href:"https://pro.ant.design/docs/getting-started",rel:"noopener noreferrer",className:f.default.action},i.default.createElement(o.default,{type:"question-circle-o"}))),i.default.createElement(u.default,null),i.default.createElement(p.default,{className:f.default.action}))},y=(0,l.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(d);t.default=y},tU7J:function(e,t,n){"use strict";n.r(t);n("cIOH"),n("/qDX"),n("5Dmo"),n("5NDa")},"wEI+":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n("q1tI"),o=n("MR/8"),a=n("YMnH"),i=n("H84U");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var b=["getPopupContainer","rootPrefixCls","getPrefixCls","renderEmpty","csp","autoInsertSpaceInButton","locale","pageHeader"];r["Component"]},wFql:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n("TSYQ"),a=n.n(o),i=n("H84U"),l=n("6CfX");function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){"function"===typeof e?e(t):"object"===c(e)&&e&&"current"in e&&(e.current=t)}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){u(t,e)})}}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}var O,C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},w=function(e,t){var n=e.prefixCls,o=e.component,c=void 0===o?"article":o,u=e.className,p=e["aria-label"],f=e.setContentRef,d=e.children,y=C(e,["prefixCls","component","className","aria-label","setContentRef","children"]),h=t;return f&&(Object(l["a"])(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),h=s(t,f)),r["createElement"](i["a"],null,function(e){var t=e.getPrefixCls,o=c,i=t("typography",n);return r["createElement"](o,E({className:a()(i,u),"aria-label":p,ref:h},y),d)})};if(r["forwardRef"])O=r["forwardRef"](w),O.displayName="Typography";else{var S=function(e){function t(){var e;return f(this,t),e=h(this,b(t).apply(this,arguments)),e.state={},e}return g(t,e),y(t,[{key:"render",value:function(){return r["createElement"](w,this.props)}}]),t}(r["Component"]);O=S}var j=O,x=j,P=n("VCL8"),k=n("Zm9Q"),_=n("m+aA"),N=n("+QRC"),T=n.n(N),M=n("BGR+"),R=n("t23M"),I=n.n(R),H=n("wEI+"),A=n("YMnH"),D=n("gDlH"),K=n("oHiP"),F=n("R3zJ"),U=n("CtXQ"),z=n("3S7+"),L=n("4IlW"),V=n("whJP");function Q(e){return Q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t&&B(e.prototype,t),n&&B(e,n),e}function G(e,t){return!t||"object"!==Q(t)&&"function"!==typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function J(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}var $=function(e){function t(){var e;return X(this,t),e=G(this,Y(t).apply(this,arguments)),e.inComposition=!1,e.state={current:""},e.onChange=function(t){var n=t.target.value;e.setState({current:n.replace(/[\r\n]/g,"")})},e.onCompositionStart=function(){e.inComposition=!0},e.onCompositionEnd=function(){e.inComposition=!1},e.onKeyDown=function(t){var n=t.keyCode;e.inComposition||(e.lastKeyCode=n)},e.onKeyUp=function(t){var n=t.keyCode,r=t.ctrlKey,o=t.altKey,a=t.metaKey,i=t.shiftKey,l=e.props.onCancel;e.lastKeyCode!==n||e.inComposition||r||o||a||i||(n===L["a"].ENTER?e.confirmChange():n===L["a"].ESC&&l())},e.onBlur=function(){e.confirmChange()},e.confirmChange=function(){var t=e.state.current,n=e.props.onSave;n(t.trim())},e.setTextarea=function(t){e.textarea=t},e}return J(t,e),q(t,[{key:"componentDidMount",value:function(){this.textarea&&this.textarea.focus()}},{key:"render",value:function(){var e=this.state.current,t=this.props,n=t.prefixCls,o=t["aria-label"],i=t.className,l=t.style;return r["createElement"]("div",{className:a()(n,"".concat(n,"-edit-content"),i),style:l},r["createElement"](V["a"],{ref:this.setTextarea,value:e,onChange:this.onChange,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onCompositionStart:this.onCompositionStart,onCompositionEnd:this.onCompositionEnd,onBlur:this.onBlur,"aria-label":o,autoSize:!0}),r["createElement"](U["default"],{type:"enter",className:"".concat(n,"-edit-content-confirm")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue,r=e.value,o={prevValue:r};return n!==r&&(o.current=r),o}}]),t}(r["Component"]);Object(P["polyfill"])($);var ee,te=$,ne=n("i8i4"),re=1,oe=3,ae=8,ie={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function le(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}function ce(e){var t=Array.prototype.slice.apply(e);return t.map(function(t){return"".concat(t,": ").concat(e.getPropertyValue(t),";")}).join("")}function ue(e){var t=[];return e.forEach(function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)}),t}var se=function(e,t,n,o,a){ee||(ee=document.createElement("div"),ee.setAttribute("aria-hidden","true"),document.body.appendChild(ee));var i=window.getComputedStyle(e),l=ce(i),c=le(i.lineHeight),u=c*(t+1)+le(i.paddingTop)+le(i.paddingBottom);ee.setAttribute("style",l),ee.style.position="fixed",ee.style.left="0",ee.style.height="auto",ee.style.minHeight="auto",ee.style.maxHeight="auto",ee.style.top="-999999px",ee.style.zIndex="-1000",ee.style.textOverflow="clip",ee.style.whiteSpace="normal",ee.style.webkitLineClamp="none";var s=ue(Object(k["a"])(n));function p(){return ee.offsetHeight<u}if(Object(ne["render"])(r["createElement"]("div",{style:ie},r["createElement"]("span",{style:ie},s),r["createElement"]("span",{style:ie},o)),ee),p())return Object(ne["unmountComponentAtNode"])(ee),{content:n,text:ee.innerHTML,ellipsis:!1};var f=Array.prototype.slice.apply(ee.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(e){var t=e.nodeType;return t!==ae}),d=Array.prototype.slice.apply(ee.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(ne["unmountComponentAtNode"])(ee);var y=[];ee.innerHTML="";var h=document.createElement("span");ee.appendChild(h);var m=document.createTextNode(a);function b(e){h.insertBefore(e,m)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=Math.floor((n+r)/2),i=t.slice(0,a);if(e.textContent=i,n>=r-1)for(var l=r;l>=n;l-=1){var c=t.slice(0,l);if(e.textContent=c,p())return l===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:c}}return p()?g(e,t,a,r,a):g(e,t,n,a,o)}function v(e,t){var n=e.nodeType;if(n===re)return b(e),p()?{finished:!1,reactNode:s[t]}:(h.removeChild(e),{finished:!0,reactNode:null});if(n===oe){var r=e.textContent||"",o=document.createTextNode(r);return b(o),g(o,r)}return{finished:!1,reactNode:null}}return h.appendChild(m),d.forEach(function(e){ee.appendChild(e)}),f.some(function(e,t){var n=v(e,t),r=n.finished,o=n.reactNode;return o&&y.push(o),r}),{content:y,text:ee.innerHTML,ellipsis:!0}};function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fe(e){return he(e)||ye(e)||de()}function de(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function ye(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function he(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function me(e){return me="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function ge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t,n){return t&&ve(e.prototype,t),n&&ve(e,n),e}function Oe(e,t){return!t||"object"!==me(t)&&"function"!==typeof t?Ce(e):t}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function we(e){return we=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},we(e)}function Se(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&je(e,t)}function je(e,t){return je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},je(e,t)}var xe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Pe=Object(F["a"])("webkitLineClamp"),ke=Object(F["a"])("textOverflow");function _e(e,t){var n=e.mark,o=e.code,a=e.underline,i=e["delete"],l=e.strong,c=t;function u(e,t){e&&(c=r["createElement"](t,{},c))}return u(l,"strong"),u(a,"u"),u(i,"del"),u(o,"code"),u(n,"mark"),c}var Ne="...",Te=function(e){function t(){var e;return ge(this,t),e=Oe(this,we(t).apply(this,arguments)),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.onExpandClick=function(){var t=e.getEllipsis(),n=t.onExpand;e.setState({expanded:!0}),n&&n()},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable(),r=n.onChange;r&&r(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(){var t=e.props,n=t.children,r=t.copyable,o=be({},"object"===me(r)?r:null);void 0===o.text&&(o.text=String(n)),T()(o.text||""),e.setState({copied:!0},function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setContentRef=function(t){e.content=t},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable(),r=n.onStart;t&&r&&r(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){K["a"].cancel(e.rafId),e.rafId=Object(K["a"])(function(){e.syncEllipsis()})},e}return Se(t,e),Ee(t,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),K["a"].cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=e||this.props,r=n.editable;return r?be({editing:t},"object"===me(r)?r:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=e||this.props,n=t.ellipsis;return n?be({rows:1,expandable:!1},"object"===me(n)?n:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,o=this.getEllipsis(),a=o.rows,i=o.expandable;return!(n||r||i||!e)&&(1===a?ke:Pe)}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,o=this.getEllipsis(),a=o.rows,i=this.props.children;if(a&&!(a<0)&&this.content&&!r&&!this.canUseCSSEllipsis()){Object(l["a"])(Object(k["a"])(i).every(function(e){return"string"===typeof e}),"Typography","`ellipsis` should use string as children only.");var c=se(Object(_["a"])(this.content),a,i,this.renderOperations(!0),Ne),u=c.content,s=c.text,p=c.ellipsis;t===s&&n===p||this.setState({ellipsisText:s,ellipsisContent:u,isEllipsis:p})}}},{key:"renderExpand",value:function(e){var t=this.getEllipsis(),n=t.expandable,o=this.props.prefixCls,a=this.state,i=a.expanded,l=a.isEllipsis;return n&&(e||!i&&l)?r["createElement"]("a",{key:"expand",className:"".concat(o,"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},this.expandStr):null}},{key:"renderEdit",value:function(){var e=this.props,t=e.editable,n=e.prefixCls;if(t)return r["createElement"](z["default"],{key:"edit",title:this.editStr},r["createElement"](D["a"],{ref:this.setEditRef,className:"".concat(n,"-edit"),onClick:this.onEditClick,"aria-label":this.editStr},r["createElement"](U["default"],{role:"button",type:"edit"})))}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props,n=t.copyable,o=t.prefixCls;if(n){var i=e?this.copiedStr:this.copyStr;return r["createElement"](z["default"],{key:"copy",title:i},r["createElement"](D["a"],{className:a()("".concat(o,"-copy"),e&&"".concat(o,"-copy-success")),onClick:this.onCopyClick,"aria-label":i},r["createElement"](U["default"],{role:"button",type:e?"check":"copy"})))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.prefixCls,o=e.className,a=e.style;return r["createElement"](te,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:n,className:o,style:a})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter(function(e){return e})}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,o=t.isEllipsis,i=t.expanded,l=this.props,c=l.component,u=l.children,s=l.className,p=l.prefixCls,f=l.type,d=l.disabled,y=l.style,h=xe(l,["component","children","className","prefixCls","type","disabled","style"]),m=this.getEllipsis(),b=m.rows,g=Object(M["default"])(h,["prefixCls","editable","copyable","ellipsis","mark","underline","mark","code","delete","underline","strong"].concat(fe(H["a"]))),v=this.canUseCSSEllipsis(),E=1===b&&v,O=b&&b>1&&v,C=u,w=null;return b&&o&&!i&&!v&&(w=String(u),C=r["createElement"]("span",{title:String(u),"aria-hidden":"true"},n,Ne)),C=_e(this.props,C),r["createElement"](A["a"],{componentName:"Text"},function(t){var n,o=t.edit,i=t.copy,l=t.copied,u=t.expand;return e.editStr=o,e.copyStr=i,e.copiedStr=l,e.expandStr=u,r["createElement"](I.a,{onResize:e.resizeOnNextFrame,disabled:!b},r["createElement"](x,be({className:a()(s,(n={},pe(n,"".concat(p,"-").concat(f),f),pe(n,"".concat(p,"-disabled"),d),pe(n,"".concat(p,"-ellipsis"),b),pe(n,"".concat(p,"-ellipsis-single-line"),E),pe(n,"".concat(p,"-ellipsis-multiple-line"),O),n)),style:be(be({},y),{WebkitLineClamp:O?b:null}),component:c,ref:e.setContentRef,"aria-label":w},g),C,e.renderOperations()))})}},{key:"render",value:function(){var e=this.getEditable(),t=e.editing;return t?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(l["a"])(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),t}(r["Component"]);Te.defaultProps={children:""},Object(P["polyfill"])(Te);var Me=Object(i["c"])({prefixCls:"typography"})(Te);function Re(){return Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Re.apply(this,arguments)}function Ie(e){return Ie="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(e)}var He=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ae=function(e){var t=e.ellipsis,n=He(e,["ellipsis"]);return Object(l["a"])("object"!==Ie(t),"Typography.Text","`ellipsis` only supports boolean value."),r["createElement"](Me,Re({},n,{ellipsis:!!t,component:"span"}))},De=Ae,Ke=n("2W6z"),Fe=n.n(Ke),Ue=n("CWQg");function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}var Le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Ve=Object(Ue["b"])(1,2,3,4),Qe=function(e){var t,n=e.level,o=void 0===n?1:n,a=Le(e,["level"]);return-1!==Ve.indexOf(o)?t="h".concat(o):(Fe()(!1,"Title only accept `1 | 2 | 3 | 4` as `level` value."),t="h1"),r["createElement"](Me,ze({},a,{component:t}))},Xe=Qe;function Be(){return Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}var qe=function(e){return r["createElement"](Me,Be({},e,{component:"div"}))},Ge=qe,We=x;We.Text=De,We.Title=Xe,We.Paragraph=Ge;t["default"]=We}}]);
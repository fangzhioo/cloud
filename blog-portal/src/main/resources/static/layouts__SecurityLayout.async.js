(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0jlH":function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r("2Taf")),a=n(r("vZ4D")),i=n(r("l4Ni")),o=n(r("ujKo")),d=n(r("MhPg")),s=n(r("q1tI")),l=r("Hg0r"),c=r("ArA+"),f=r("s4NR"),p=n(r("bIAK")),h=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,i.default)(this,(0,o.default)(t).apply(this,arguments)),e.state={isReady:!1},e}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=this.props.dispatch;e&&e({type:"user/fetchCurrent"})}},{key:"render",value:function(){var e=this.state.isReady,t=this.props,r=t.children,n=t.loading,u=t.currentUser,a=u&&void 0!==u.uid,i=(0,f.stringify)({redirect:window.location.href});return!a&&n||!e?s.default.createElement(p.default,null):a?r:s.default.createElement(c.Redirect,{to:"/user/login?".concat(i)})}}]),t}(s.default.Component),v=(0,l.connect)(function(e){var t=e.user,r=e.loading;return{currentUser:t.currentUser,loading:r.models.user}})(h);t.default=v}}]);
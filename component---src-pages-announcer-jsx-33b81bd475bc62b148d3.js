(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9/5/":function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt");var o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,f=Math.max,v=Math.min,b=function(){return s.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var o,i,r,u,c,a,l=0,s=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,c=setTimeout(g,t),s?O(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=r}function g(){var e=b();if(h(e))return w(e);c=setTimeout(g,function(e){var n=t-(e-a);return d?v(n,r-(e-l)):n}(e))}function w(e){return c=void 0,y&&o?O(e):(o=i=void 0,u)}function E(){var e=b(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===c)return j(a);if(d)return c=setTimeout(g,t),O(a)}return void 0===c&&(c=setTimeout(g,t)),u}return t=p(t)||0,m(n)&&(s=!!n.leading,r=(d="maxWait"in n)?f(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=a=i=c=void 0},E.flush=function(){return void 0===c?u:w(b())},E}}).call(this,n("yLpj"))},BEHJ:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),r=n("jZt+"),u=n("ZXmc"),c=(n("DQA+"),n("DQUT")),a=n("qKvR"),l=function(e){var t=e.handleUpdateFunc;return Object(a.d)(c.DebounceInput,{minLength:2,debounceTimeout:300,forceNotifyByEnter:!1,element:"textarea",onChange:function(e){return t(e.target.value)}})},s=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(a.d)("form",{onSubmit:function(e){e.preventDefault()}},Object(a.d)("div",null,"Enter text here",Object(a.d)("br",null),Object(a.d)(l,{handleUpdateFunc:function(e){n(!0),setTimeout((function(){n(!1)}),3e3)}})),Object(a.d)("div",{className:"updateUI"},Object(a.d)("div",{className:"toast "+(t?"updating":null)},Object(a.d)("span",null,"Form saved"))))},d=function(){return Object(a.d)(i.a.Fragment,null)};t.default=function(){return Object(a.d)(r.a,null,Object(a.d)(u.a,{title:"Live Regions",keywords:["javascript","accessibility","react"]}),Object(a.d)("div",null,Object(a.d)("h2",null,"Live Region Demo"),Object(a.d)("section",{className:"two-col"},Object(a.d)("div",null,Object(a.d)("h3",null,"Inaccessible async form demo  [",Object(a.d)("a",{href:"https://github.com/marcysutton/gatsby-a11y-workshop/tree/master/src/components/bad/async-form.js","aria-label":"accessible demo source"},"source"),"]"),Object(a.d)(s,null)),Object(a.d)("div",null,Object(a.d)("h3",null,"More accessible async form demo"),Object(a.d)(d,null)))))}},"DQA+":function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("qKvR");t.a=function(e){e.children;return Object(r.d)(i.a.Fragment,null)}},DQUT:function(e,t,n){"use strict";var o=n("iaYz").DebounceInput;o.DebounceInput=o,e.exports=o},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Building Accessible Sites with Gatsby"}}}}')},iaYz:function(e,t,n){"use strict";n("hHhE"),n("/SS/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("V+eJ"),n("rE2o"),n("ioFf"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=r(n("q1tI")),i=r(n("9/5/"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}(this,d(t).call(this,e)),b(f(n),"onChange",(function(e){e.persist();var t=n.state.value,o=n.props.minLength;n.setState({value:e.target.value},(function(){var i=n.state.value;i.length>=o?n.notify(e):t.length>i.length&&n.notify(l({},e,{target:l({},e.target,{value:""})}))}))})),b(f(n),"onKeyDown",(function(e){"Enter"===e.key&&n.forceNotify(e);var t=n.props.onKeyDown;t&&(e.persist(),t(e))})),b(f(n),"onBlur",(function(e){n.forceNotify(e);var t=n.props.onBlur;t&&(e.persist(),t(e))})),b(f(n),"createNotifier",(function(e){if(e<0)n.notify=function(){return null};else if(0===e)n.notify=n.doNotify;else{var t=(0,i.default)((function(e){n.isDebouncing=!1,n.doNotify(e)}),e);n.notify=function(e){n.isDebouncing=!0,t(e)},n.flush=function(){return t.flush()},n.cancel=function(){n.isDebouncing=!1,t.cancel()}}})),b(f(n),"doNotify",(function(){var e=n.props.onChange;e.apply(void 0,arguments)})),b(f(n),"forceNotify",(function(e){var t=n.props.debounceTimeout;if(n.isDebouncing||!(t>0)){n.cancel&&n.cancel();var o=n.state.value,i=n.props.minLength;o.length>=i?n.doNotify(e):n.doNotify(l({},e,{target:l({},e.target,{value:o})}))}})),n.isDebouncing=!1,n.state={value:e.value||""};var o=n.props.debounceTimeout;return n.createNotifier(o),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,o=t.debounceTimeout,i=e.debounceTimeout,r=e.value,u=this.state.value;void 0!==n&&r!==n&&u!==n&&this.setState({value:n}),o!==i&&this.createNotifier(o)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,i=n.element,r=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),u=n.forceNotifyOnBlur,a=n.onKeyDown,s=n.onBlur,d=n.inputRef,f=c(n,["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"]),v=this.state.value;e=r?{onKeyDown:this.onKeyDown}:a?{onKeyDown:a}:{},t=u?{onBlur:this.onBlur}:s?{onBlur:s}:{};var b=d?{ref:d}:{};return o.default.createElement(i,l({},f,{onChange:this.onChange,value:v},e,{},t,{},b))}}])&&s(n.prototype,r),a&&s(n,a),t}(o.default.PureComponent);t.DebounceInput=m,b(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},"jZt+":function(e,t,n){"use strict";var o=n("IRj2"),i=(n("q1tI"),n("Wbzz")),r=n("qKvR"),u=function(e){var t=e.siteTitle;return Object(r.d)("header",{className:"globalHeader"},Object(r.d)("ul",{className:"skip-link"},Object(r.d)("li",null,Object(r.d)("a",{href:"#main"},"Skip to main"))),Object(r.d)("h1",null,Object(r.d)(i.Link,{to:"/"},t)))};u.defaultProps={siteTitle:""};var c=u,a=n("4Qxb"),l=n.n(a),s=function(){return Object(r.d)("nav",{className:"nav "+l.a.nav},Object(r.d)("h2",{className:"visually-hidden"},"Navigation"),Object(r.d)("ul",{id:"navigation",tabIndex:"-1"},Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/"},"App Home")),Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/slides"},"Slide deck")),Object(r.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(r.d)("h3",{className:"navHeading "+l.a.navHeading},"Demos"),Object(r.d)("ul",{id:"page-navigation"},Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/dropdown"},"Dropdown")),Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/announcer"},"Announcer")),Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/layout"},"Layout")),Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/animation"},"Animation")),Object(r.d)("li",null,Object(r.d)(i.Link,{to:"/enhanced-tablist"},"Enhanced Tablist")))),Object(r.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(r.d)("h3",{className:"navHeading "+l.a.navHeading},"Concepts"),Object(r.d)("ul",null,Object(r.d)("li",null,"Focus management"),Object(r.d)("li",null,"Announcements"),Object(r.d)("li",null,"Semantic HTML"),Object(r.d)("li",null,"Unobtrusive motion"),Object(r.d)("li",null,"Progressive enhancement")))))};n("w/ju"),n("lfCk"),t.a=function(e){var t=e.children,n=o.data;return Object(r.d)("div",{className:"js-workshop-app"},Object(r.d)(c,{siteTitle:n.site.siteMetadata.title}),Object(r.d)(s,null),Object(r.d)("main",{className:"app",id:"main"},t))}},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function a(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&u(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"==document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,c;r(e.target)&&(t||(n=e.target,o=n.type,"INPUT"==(c=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&u(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1,window.clearTimeout(o)}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}}]);
//# sourceMappingURL=component---src-pages-announcer-jsx-33b81bd475bc62b148d3.js.map
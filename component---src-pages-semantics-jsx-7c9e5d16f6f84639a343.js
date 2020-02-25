(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Construyendo Sitios Accesibles con Gatsby"}}}}')},WVLC:function(e,t,n){"use strict";n.r(t);n("q1tI");var i=n("jZt+"),d=n("ZXmc"),o=n("qKvR");t.default=function(){return Object(o.d)(i.a,null,Object(o.d)(d.a,{title:"Semantics",keywords:["javascript","accessibility","react"]}),Object(o.d)("div",null))}},"jZt+":function(e,t,n){"use strict";var i=n("IRj2"),d=(n("q1tI"),n("Wbzz")),o=n("qKvR"),a=function(e){var t=e.siteTitle;return Object(o.d)("header",{className:"globalHeader"},Object(o.d)("ul",{className:"skip-link"},Object(o.d)("li",null,Object(o.d)("a",{href:"#main"},"Skip to main"))),Object(o.d)("h1",null,Object(o.d)(d.Link,{to:"/"},t)))};a.defaultProps={siteTitle:""};var c=a,s=n("4Qxb"),u=n.n(s),l=function(){return Object(o.d)("nav",{className:"nav "+u.a.nav},Object(o.d)("h2",{className:"visually-hidden"},"Navigation"),Object(o.d)("ul",{id:"navigation",tabIndex:"-1"},Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/"},"App Home")),Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/slides"},"Slide deck")),Object(o.d)("li",{className:"navItemGroup "+u.a.navItemGroup+" "},Object(o.d)("h3",{className:"navHeading "+u.a.navHeading},"Demos"),Object(o.d)("ul",{id:"page-navigation"},Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/dropdown"},"Dropdown")),Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/announcer"},"Announcer")),Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/layout"},"Layout")),Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/animation"},"Animation")),Object(o.d)("li",null,Object(o.d)(d.Link,{to:"/enhanced-tablist"},"Enhanced Tablist")))),Object(o.d)("li",{className:"navItemGroup "+u.a.navItemGroup+" "},Object(o.d)("h3",{className:"navHeading "+u.a.navHeading},"Concepts"),Object(o.d)("ul",null,Object(o.d)("li",null,"Focus management"),Object(o.d)("li",null,"Announcements"),Object(o.d)("li",null,"Semantic HTML"),Object(o.d)("li",null,"Unobtrusive motion"),Object(o.d)("li",null,"Progressive enhancement")))))};n("w/ju"),n("lfCk"),t.a=function(e){var t=e.children,n=i.data;return Object(o.d)("div",{className:"js-workshop-app"},Object(o.d)(c,{siteTitle:n.site.siteMetadata.title}),Object(o.d)(l,null),Object(o.d)("main",{className:"app",id:"main"},t))}},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,i=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function a(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function s(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&a(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"==document.visibilityState&&(n&&(t=!0),s())}),!0),s(),e.addEventListener("focus",(function(e){var n,i,c;o(e.target)&&(t||(n=e.target,i=n.type,"INPUT"==(c=n.tagName)&&d[i]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&a(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1,window.clearTimeout(i)}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}}]);
//# sourceMappingURL=component---src-pages-semantics-jsx-7c9e5d16f6f84639a343.js.map
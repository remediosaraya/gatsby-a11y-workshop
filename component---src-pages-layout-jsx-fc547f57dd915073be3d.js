(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"DQA+":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),i=n("qKvR");t.a=function(e){e.children;return Object(i.d)(a.a.Fragment,null)}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Construyendo Sitios Accesibles con Gatsby"}}}}')},ONq6:function(e,t,n){"use strict";n.r(t);n("q1tI");var o=n("jZt+"),a=n("ZXmc"),i=(n("DQA+"),n("qKvR"));t.default=function(){return Object(i.d)(o.a,null,Object(i.d)(a.a,{title:"Semantics",keywords:["javascript","accessibility","react"]}),Object(i.d)("div",null,Object(i.d)("h2",null,"Semantics and CSS layout"),Object(i.d)("p",null,"CSS layouts are modern now. You can use CSS Grid and HTML5! Inspect these semantic layouts in DevTools and screen readers. Play with the rotor/elements list, heading navigation, "),Object(i.d)("p",null,Object(i.d)("strong",null,"[",Object(i.d)("a",{href:"https://github.com/marcysutton/gatsby-a11y-workshop/blob/master/src/pages/layout.jsx"},"page source"),"]")),Object(i.d)("div",{className:"semantic-layout"},Object(i.d)("div",{"data-el":"div",className:"grid-wrap-2"},Object(i.d)("div",{"data-el":"div"},Object(i.d)("div",{className:"heading level-3"},"DIVs all the way down"),Object(i.d)("div",{"data-el":"div",className:"fake-list"},Object(i.d)("div",null,Object(i.d)("div",null,Object(i.d)("a",{href:"#"},"Turkey")),Object(i.d)("div",null,Object(i.d)("a",{href:"#"},"Gooberface"))))),Object(i.d)("div",{"data-el":"div"},Object(i.d)("p",null,"Doggo ipsum stop it fren borking doggo shoober floofs, very jealous pupper thicc. Pats smol borking doggo with a long snoot for pats blop pupper, borking doggo wrinkler. Lotsa pats big ol pupper h*ck heckin angery woofer pupper, blop heckin mlem.")))),Object(i.d)("section",{className:"semantic-layout","data-el":"section [role=region]"},Object(i.d)("div",{"data-el":"div",className:"grid-wrap-2"},Object(i.d)("header",{"data-el":"header role=[header]"},Object(i.d)("h3",null,"HTML5 and CSS Grid Layout"),Object(i.d)("nav",{"data-el":"nav role[nav]"},Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)("a",{href:"#"},"Cheddarino")),Object(i.d)("li",null,Object(i.d)("a",{href:"#"},"Sweet Pupper"))))),Object(i.d)("article",{"data-el":"article role=[group]"},Object(i.d)("h3",null,"Maximum borkdrive"),Object(i.d)("p",null,"Very hand that feed shibe puggorino very taste wow.  Maximum borkdrive much ruin diet very hand that feed shibe very taste wow long water shoob doge doggo heckin, shoober ruff shoob wrinkler bork much ruin diet. he made many woofs woofer. Wow such tempt mlem very hand that feed shibe porgo, wrinkler shoob. Vvv puggo doggorino very good spot such treat length boy puggo, woofer heckin angery woofer wow very biscit pupperino very taste wow."))))))}},"jZt+":function(e,t,n){"use strict";var o=n("IRj2"),a=(n("q1tI"),n("Wbzz")),i=n("qKvR"),d=function(e){var t=e.siteTitle;return Object(i.d)("header",{className:"globalHeader"},Object(i.d)("ul",{className:"skip-link"},Object(i.d)("li",null,Object(i.d)("a",{href:"#main"},"Skip to main"))),Object(i.d)("h1",null,Object(i.d)(a.Link,{to:"/"},t)))};d.defaultProps={siteTitle:""};var c=d,s=n("4Qxb"),l=n.n(s),r=function(){return Object(i.d)("nav",{className:"nav "+l.a.nav},Object(i.d)("h2",{className:"visually-hidden"},"Navigation"),Object(i.d)("ul",{id:"navigation",tabIndex:"-1"},Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/"},"App Home")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/slides"},"Slide deck")),Object(i.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(i.d)("h3",{className:"navHeading "+l.a.navHeading},"Demos"),Object(i.d)("ul",{id:"page-navigation"},Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/dropdown"},"Dropdown")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/announcer"},"Announcer")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/layout"},"Layout")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/animation"},"Animation")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/enhanced-tablist"},"Enhanced Tablist")))),Object(i.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(i.d)("h3",{className:"navHeading "+l.a.navHeading},"Concepts"),Object(i.d)("ul",null,Object(i.d)("li",null,"Focus management"),Object(i.d)("li",null,"Announcements"),Object(i.d)("li",null,"Semantic HTML"),Object(i.d)("li",null,"Unobtrusive motion"),Object(i.d)("li",null,"Progressive enhancement")))))};n("w/ju"),n("lfCk"),t.a=function(e){var t=e.children,n=o.data;return Object(i.d)("div",{className:"js-workshop-app"},Object(i.d)(c,{siteTitle:n.site.siteMetadata.title}),Object(i.d)(r,null),Object(i.d)("main",{className:"app",id:"main"},t))}},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function s(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"==document.visibilityState&&(n&&(t=!0),s())}),!0),s(),e.addEventListener("focus",(function(e){var n,o,c;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"==(c=n.tagName)&&a[o]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1,window.clearTimeout(o)}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}}]);
//# sourceMappingURL=component---src-pages-layout-jsx-fc547f57dd915073be3d.js.map
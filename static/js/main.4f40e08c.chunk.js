(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},232:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(85),o=n.n(a),i=(n(100),n(101),n(19)),s=n(3),u=n(23),j=n(238),l=new Map([["2020-legacy-code-case-study","https://raw.githubusercontent.com/green-john/blog/main/blogs/2020-legacy-code-case-study"],["2020-my-journey-through-the-functional-world","https://raw.githubusercontent.com/green-john/blog/main/blogs/2020-journey-functional-world"]]),b=n(86),h=n.n(b),d=(n(232),n(2));function f(){var e=function(e){var t,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],o=r[1],i=null!==(t=l.get(e))&&void 0!==t?t:"";return Object(c.useEffect)((function(){var e;o(""),""!==i&&fetch((e=i,"".concat(e,"/README.md"))).then((function(e){e.text().then((function(e){o(e)}))}))}),[i]),a}(Object(s.f)().blogName);return""===e?Object(d.jsx)(j.a,{description:"Nothing here"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{marginLeft:"16px"},className:"backToHome",children:Object(d.jsx)(i.b,{to:"/",children:"\u2190 Home"})}),Object(d.jsx)("div",{className:"blogWrapper",children:Object(d.jsx)(h.a,{children:e})})]})}n(235);function g(){var e=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=Array.from(l.entries(),(function(e){var t,n=Object(u.a)(e,2);return t=n[0],{url:n[1],displayName:t.split("-").slice(1).join(" ").trim().toLowerCase().replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})),linkTarget:t}}));r(e)}),[]),n}();return Object(d.jsxs)("div",{className:"homeWrapper",children:[Object(d.jsx)("h1",{children:"My Blog"}),e.map((function(e,t){return Object(d.jsx)("p",{children:Object(d.jsx)(i.b,{to:"/blogs/"+e.linkTarget,children:e.displayName})},t)}))]})}var p=function(){return Object(d.jsx)(i.a,{basename:"/",children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/blogs/:blogName",children:Object(d.jsx)(f,{})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(g,{})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,239)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),m()}},[[236,1,2]]]);
//# sourceMappingURL=main.4f40e08c.chunk.js.map
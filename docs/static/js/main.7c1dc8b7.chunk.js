(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(8),i=n.n(c),s=n(2),u=n(10),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{action:"",onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)},placeholder:"Ingrese un anime",autoFocus:!0})})},j=n(7),d=n(6),l=n.n(d),p=n(9),m=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"w96qRFI3PbHoipqO9YaDTyfOo0SPwNlF",e.next=4,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("w96qRFI3PbHoipqO9YaDTyfOo0SPwNlF"));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,r=a.data,c=r.map((function(e){return{id:e.id,title:e.title?e.title:"Sin T\xedtulo",url:e.images.downsized_medium.url?e.images.downsized_medium.url:"No existe esta imagen"}})),e.abrupt("return",c);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"animate__animated animate__fadeIn card",children:[Object(a.jsx)("h4",{children:t}),Object(a.jsx)("img",{src:n,alt:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){m(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[i&&Object(a.jsx)("h4",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t.toUpperCase()}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(r.createElement)(b,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))})]})},O=function(){var e=Object(r.useState)(["naruto"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)(f,{category:e},e)}))})]})};n(17);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7c1dc8b7.chunk.js.map
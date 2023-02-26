"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[577],{326:function(n,e,t){t.d(e,{Z:function(){return l}});t(791);var r,i=t(689),a=t(168),o=t(87),u=t(444),c=(0,u.ZP)(o.OL)(r||(r=(0,a.Z)(["\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n\n  font-size: 34px;\n  font-weight: 400;\n\n  &:hover,\n  :focus {\n    color: #d0451b;\n  }\n"]))),s=t(184);var d,f=function(n){var e=n.id,t=n.title,r=(0,i.TH)();return(0,s.jsx)("li",{children:(0,s.jsx)(c,{to:"/movies/".concat(e),state:{from:r},children:t})},e)},p=u.ZP.ul(d||(d=(0,a.Z)(["\n  display: flex;\n  background: #ffffff;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1200px;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n"])));var l=function(n){var e=n.movies;return(0,s.jsx)(p,{children:e.map((function(n){return(0,s.jsx)(f,{title:n.title,id:n.id},n.id)}))})}},577:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,a,o,u=t(439),c=t(791),s=t(930),d=t(87),f=t(689),p=t(168),l=t(444),x=l.ZP.div(r||(r=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  width: 600px;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  box-shadow: inset 0px 1px 0px 0px #cf866c;\n  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);\n  background-color: #d0451b;\n  border-radius: 3px;\n  border: 1px solid #942911;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=l.ZP.form(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),h=l.ZP.input(a||(a=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),m=l.ZP.button(o||(o=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 68px;\n  height: 30px;\n  border: 0;\n\n  background-size: 40%;\n\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),v=t(184);var b=function(n){var e=n.setSearchParams;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(x,{children:(0,v.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e({moviesname:t.elements.moviesname.value}),t.reset()},children:[(0,v.jsx)(h,{type:"text",name:"moviesname"}),(0,v.jsx)(m,{type:"submit",children:"Search"})]})})})},Z=t(326);var w=function(){var n=(0,c.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,d.lr)(),a=(0,u.Z)(i,2),o=a[0],p=a[1],l=o.get("moviesname");return(0,c.useEffect)((function(){""!==l&&null!==l&&(0,s.Rn)(l).then(r)}),[l]),t&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{setSearchParams:p}),(0,v.jsx)(Z.Z,{movies:t}),(0,v.jsx)(f.j3,{})]})}},930:function(n,e,t){t.d(e,{Rn:function(){return g},Sb:function(){return l},k4:function(){return p},nB:function(){return f},vQ:function(){return x}});var r=t(861),i=t(439),a=t(757),o=t.n(a),u=t(912),c=t(791),s="5c631b44b992ee7cf944461a6248f299",d=u.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:s,language:"en-US",size:20}}),f=function(){var n=(0,c.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)([]),o=(0,i.Z)(a,2),u=o[0],s=o[1];return(0,c.useEffect)((function(){r(!0),d.get("/trending/movie/day").then((function(n){s(n.data.results),r(!1)}))}),[]),[u,t]};function p(n){var e=(0,c.useState)(!1),t=(0,i.Z)(e,2),r=t[0],a=t[1],o=(0,c.useState)({}),u=(0,i.Z)(o,2),s=u[0],f=u[1],p=(0,c.useState)(!1),l=(0,i.Z)(p,2),x=l[0],g=l[1];return(0,c.useEffect)((function(){a(!0),d.get("/movie/".concat(n)).then((function(n){f(n.data),g(!0),a(!1)}))}),[n]),{loading:r,movie:s,done:x}}function l(n){var e=(0,c.useState)(!1),t=(0,i.Z)(e,2),r=t[0],a=t[1],o=(0,c.useState)({}),u=(0,i.Z)(o,2),s=u[0],f=u[1],p=(0,c.useState)(!1),l=(0,i.Z)(p,2),x=l[0],g=l[1];return(0,c.useEffect)((function(){a(!0),d.get("/movie/".concat(n,"/credits")).then((function(n){f(n.data.cast),g(!0),a(!1)}))}),[n]),{loading:r,cast:s,done:x}}function x(n){var e=(0,c.useState)(!1),t=(0,i.Z)(e,2),r=t[0],a=t[1],o=(0,c.useState)({}),u=(0,i.Z)(o,2),s=u[0],f=u[1],p=(0,c.useState)(!1),l=(0,i.Z)(p,2),x=l[0],g=l[1];return(0,c.useEffect)((function(){a(!0),d.get("/movie/".concat(n,"/reviews")).then((function(n){f(n.data.results),g(!0),a(!1)}))}),[n]),{loading:r,reviews:s,done:x}}var g=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("/".concat("search/movie","?api_key=",s,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=577.c49e5f54.chunk.js.map
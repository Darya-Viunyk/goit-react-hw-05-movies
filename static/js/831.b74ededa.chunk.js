"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[831],{831:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,o,a,c,s,u=e(439),d=e(930),f=e(791),l=e(168),p=e(87),x=e(444),g=(0,x.ZP)(p.OL)(r||(r=(0,l.Z)(["\n  box-shadow: inset 0px 1px 0px 0px #cf866c;\n  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);\n  background-color: #d0451b;\n  border-radius: 3px;\n  border: 1px solid #942911;\n\n  cursor: pointer;\n  color: #ffffff;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-size: 13px;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #854629;\n  width: 100px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);\n    background-color: #bc3315;\n  }\n  &:focus {\n    position: relative;\n    top: 1px;\n  }\n"]))),v=x.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: auto;\n  margin-left: auto;\n  width: 1200px;\n  gap: 20px;\n"]))),h=x.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: auto;\n  margin-left: auto;\n  width: 1200px;\n  gap: 20px;\n"]))),m=x.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 400px;\n  background-color: #ffffff;\n  margin-left: 50px;\n"]))),b=x.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n"]))),Z=x.ZP.h2(s||(s=(0,l.Z)(["\n  color: black;\n  font-size: 44px;\n  font-weight: 400;\n"]))),w=e(689),j=e(184);var k=function(){var n=(0,w.UO)().id,t=(0,w.TH)(),e=(0,f.useState)((function(){var n;return null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from})),r=(0,u.Z)(e,1)[0],i=(0,d.k4)(n),o=i.loading,a=i.movie,c=i.done,s=a.title,l=a.release_date,p=a.overview,x=a.genres,k=a.poster_path,S=a.vote_average;if(!o&&!c)return null;if(o)return(0,j.jsx)("h3",{children:"Loading..."});if(!o&&c){var y="https://image.tmdb.org/t/p/w500".concat(k),_=l.slice(0,4),P="".concat(s," (").concat(_,")"),E=x.map((function(n){return n.name})).join(", ");return(0,j.jsxs)(h,{children:[(0,j.jsx)(g,{to:r||"/",state:"HomeSubPage",children:"Back"}),(0,j.jsxs)(b,{children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:y,alt:"",width:400})}),(0,j.jsxs)(m,{children:[(0,j.jsx)(Z,{children:P}),(0,j.jsx)("p",{children:p}),(0,j.jsx)("p",{children:E}),(0,j.jsx)("p",{children:S})]})]}),(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{to:"cast",children:"Cast"}),(0,j.jsx)(g,{to:"reviews",children:"Reviews"})]}),(0,j.jsx)(w.j3,{})]})}}},930:function(n,t,e){e.d(t,{Rn:function(){return g},Sb:function(){return p},k4:function(){return l},nB:function(){return f},vQ:function(){return x}});var r=e(861),i=e(439),o=e(757),a=e.n(o),c=e(912),s=e(791),u="5c631b44b992ee7cf944461a6248f299",d=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:u,language:"en-US",size:20}}),f=function(){var n=(0,s.useState)(!1),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,s.useState)([]),a=(0,i.Z)(o,2),c=a[0],u=a[1];return(0,s.useEffect)((function(){r(!0),d.get("/trending/movie/day").then((function(n){u(n.data.results),r(!1)}))}),[]),[c,e]};function l(n){var t=(0,s.useState)(!1),e=(0,i.Z)(t,2),r=e[0],o=e[1],a=(0,s.useState)({}),c=(0,i.Z)(a,2),u=c[0],f=c[1],l=(0,s.useState)(!1),p=(0,i.Z)(l,2),x=p[0],g=p[1];return(0,s.useEffect)((function(){o(!0),d.get("/movie/".concat(n)).then((function(n){f(n.data),g(!0),o(!1)}))}),[n]),{loading:r,movie:u,done:x}}function p(n){var t=(0,s.useState)(!1),e=(0,i.Z)(t,2),r=e[0],o=e[1],a=(0,s.useState)({}),c=(0,i.Z)(a,2),u=c[0],f=c[1],l=(0,s.useState)(!1),p=(0,i.Z)(l,2),x=p[0],g=p[1];return(0,s.useEffect)((function(){o(!0),d.get("/movie/".concat(n,"/credits")).then((function(n){f(n.data.cast),g(!0),o(!1)}))}),[n]),{loading:r,cast:u,done:x}}function x(n){var t=(0,s.useState)(!1),e=(0,i.Z)(t,2),r=e[0],o=e[1],a=(0,s.useState)({}),c=(0,i.Z)(a,2),u=c[0],f=c[1],l=(0,s.useState)(!1),p=(0,i.Z)(l,2),x=p[0],g=p[1];return(0,s.useEffect)((function(){o(!0),d.get("/movie/".concat(n,"/reviews")).then((function(n){f(n.data.results),g(!0),o(!1)}))}),[n]),{loading:r,reviews:u,done:x}}var g=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.get("/".concat("search/movie","?api_key=",u,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=831.b74ededa.chunk.js.map
"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[751],{2751:function(n,e,t){t.r(e),t.d(e,{default:function(){return Rn}});var r,i,o,a,l,s,c,d,f,p,x,u,h,g,m,b,v,j,y,w,Z,F,k,z,S,T,C,D,B,A,q,O=t(9439),I=t(2791),U=t(9434),E=t(4289),L=t(5218),N=t(4054),_=t(168),H=t(6487),P=t(1087),Q=t(9126),X=(0,H.default)(P.rU)(r||(r=(0,_.Z)(["\n  text-decoration: none;\n  box-sizing: border-box;\n\n  position: fixed;\n  top: 420px;\n  right: 5px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n\n  color: #ffffff;\n  font-weight: 600;\n\n  width: 80px;\n  height: 80px;\n  padding: 20px 17px;\n  // padding-top: 20px;\n  // padding-right: 17px;\n  // padding-bottom: 16px;\n  // padding-left: 18px;\n\n  font-size: 12px;\n  color: #fff;\n\n  background: var(--btn-bg-color);\n  border: none;\n  border-radius: 40px;\n  box-shadow: 3px 8px 14px 0px #88c6fd30;\n\n  z-index: 1;\n\n  transition: background var(--duration) var(--cubic);\n\n  &:hover,\n  &:focus {\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    position: static;\n    translate: 0 0;\n\n    gap: 8px;\n\n    width: 129px;\n    height: 40px;\n    padding: 8px 18px;\n    border-radius: 40px;\n\n    font-size: 16px;\n  }\n"]))),M=(0,H.default)(Q.B8K)(i||(i=(0,_.Z)(["\n  width: 24px;\n  height: 24px;\n  color: #ffffff;\n"]))),Y=(0,H.default)(Q.L3d)(o||(o=(0,_.Z)(["\n  width: 24px;\n  height: 24px;\n  color: #ffffff;\n"]))),K=t(184),R=function(n){var e=n.text,t=n.path,r=n.onClick,i=(0,N.i)(),o=(0,O.Z)(i,1)[0];return(0,K.jsxs)(X,{to:t,onClick:r,children:[o<768&&(0,K.jsx)(M,{}),e,o>=768&&(0,K.jsx)(Y,{})]})},G=t(4733),J=[{filter:"sell",path:"sell"},{filter:"lost/found",path:"lost-found"},{filter:"in good hands",path:"for-free"},{filter:"favorite ads",path:"favorite"},{filter:"my ads",path:"my-pets"}],V=(0,H.default)(P.OL)(a||(a=(0,_.Z)(["\n  display: block;\n  text-decoration: none;\n  color: inherit;\n\n  position: relative;\n\n  padding: 8px 16px;\n\n  color: var(--btn-bg-color);\n  font-weight: 500;\n\n  background: var(--labels-bg-color);\n  border: none;\n  border-radius: 40px;\n\n  transition: color var(--duration) var(--cubic),\n    background var(--duration) var(--cubic);\n\n  &:hover,\n  &:focus {\n    color: var(--label-active-color);\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  }\n\n  &.active {\n    color: #fef9f9;\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  }\n"]))),W=H.default.ul(l||(l=(0,_.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n\n  padding: 0;\n  list-style: none;\n  margin: 0;\n\n  @media screen and (min-width: 768px) {\n    gap: 12px;\n  }\n"]))),$=function(n){var e=n.onFilterChange,t=(0,U.v9)(E.Qb),r=J.map((function(n,r){var i=n.filter,o=n.path;return(t||"favorite ads"!==i)&&(t||"my ads"!==i)?(0,K.jsx)("li",{children:(0,K.jsx)(V,{to:"/notices/".concat(o),onClick:function(){e(i)},children:i})},r):null}));return(0,K.jsx)(W,{children:r})},nn=t(398),en=t(4942),tn=t(1413),rn=t(8172),on=t(6221),an=t(6856),ln=t(6487).styled,sn=ln.div(s||(s=(0,_.Z)(["\n  position: absolute;\n  top: 40px;\n  right: 0;\n  width: 152px;\n\n  padding: 8px;\n  background-color: #ffffff;\n\n  border-radius: 20px;\n  z-index: 10;\n"]))),cn=ln.h2(c||(c=(0,_.Z)(["\n  margin-bottom: 8px;\n\n  text-align: left;\n\n  font-family: var(--main-font);\n  font-weight: 700;\n\n  font-size: 16px;\n  color: var(--btn-bg-color);\n  user-select: none;\n"]))),dn=ln.ul(d||(d=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n"]))),fn=ln.li(f||(f=(0,_.Z)(["\n  width: 100%;\n"]))),pn=ln.div(p||(p=(0,_.Z)(["\n  font-family: var(--secondary-font);\n  font-weight: 400;\n  line-height: 1.3;\n  background-color: var(--labels-bg-color);\n\n  border-radius: 20px;\n  overflow: hidden;\n"]))),xn=ln.div(x||(x=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 14px;\n\n  cursor: pointer;\n"]))),un=ln.h3(u||(u=(0,_.Z)(["\n  text-align: left;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--btn-bg-color);\n  user-select: none;\n"]))),hn=ln.ul(h||(h=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n\n  margin-top: -7px;\n  padding-bottom: 7px;\n"]))),gn=ln.li(g||(g=(0,_.Z)(["\n  width: 100%;\n"]))),mn=ln.label(m||(m=(0,_.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 100%;\n\n  padding: 7px 14px;\n\n  gap: 16px;\n  cursor: pointer;\n"]))),bn=ln.input(b||(b=(0,_.Z)(["\n  display: none;\n"]))),vn=ln.p(v||(v=(0,_.Z)(["\n  font-size: 14px;\n  color: var(--btn-bg-color);\n  user-select: none;\n"]))),jn=t(4373),yn=(0,H.styled)(jn.OId).withConfig({shouldForwardProp:function(n){return"isOpen"!==n}})(j||(j=(0,_.Z)(["\n  font-size: 20px;\n  fill: var(--btn-bg-color);\n\n  transform: ",";\n"])),(function(n){return n.isOpen?"rotateX(180deg)":""})),wn=function(n){var e=n.setFiltersState,t=(0,I.useState)(!1),r=(0,O.Z)(t,2),i=r[0],o=r[1],a=(0,U.v9)(rn.vU),l=(0,I.useState)(a),s=(0,O.Z)(l,2),c=s[0],d=s[1],f=(0,U.I0)(),p=function(n){var t=n.target.name,r=!c[t],i="",o="";switch(t){case"less1":o="1";break;case"moreThen1":o="2";break;case"moreThen2":o="3";break;default:o=""}var l=c.less1,s=c.moreThen1,p=c.moreThen2;i=l||s||p||!r?l&&r&&"moreThen1"===t?"":l&&r&&"moreThen2"===t?"4":l&&s&&r||s&&r&&"less1"===t?"":s&&r&&"moreThen2"===t?"2":s&&p&&r?"":p&&r&&"less1"===t?"4":p&&r&&"moreThen1"===t?"2":l&&p&&r?"":l&&s&&!r&&"less1"===t?"2":l&&s&&!r&&"moreThen1"===t?"1":l&&p&&!r&&"less1"===t?"3":l&&p&&!r&&"moreThen2"===t?"1":s&&p&&!r&&"moreThen1"===t?"3":s&&p&&!r&&"moreThen2"===t||l&&s&&p&&!r&&"less1"===t?"2":l&&s&&p&&!r&&"moreThen1"===t?"4":"":"".concat(o),d((function(n){return(0,tn.Z)((0,tn.Z)({},n),{},(0,en.Z)({},t,r))})),f((0,on.r)((0,tn.Z)((0,tn.Z)({},a),{},(0,en.Z)({},t,r)))),e((function(n){return(0,tn.Z)((0,tn.Z)({},n),{},{age:i})}))};return(0,K.jsxs)(pn,{children:[(0,K.jsxs)(xn,{onClick:function(n){o(!i)},children:[(0,K.jsx)(yn,{isOpen:i}),(0,K.jsx)(un,{children:"By age"})]}),i&&(0,K.jsxs)(hn,{children:[(0,K.jsxs)(gn,{children:[(0,K.jsxs)(mn,{htmlFor:"less1",children:[c.less1?(0,K.jsx)(an.wBz,{fontSize:"20",fill:"#54ADFF"}):(0,K.jsx)(an.FlD,{fontSize:"20",fill:"#54ADFF"}),(0,K.jsx)(vn,{children:"3-12 m"})]}),(0,K.jsx)(bn,{type:"checkbox",id:"less1",name:"less1",value:c.less1,onChange:p})]}),(0,K.jsxs)(gn,{children:[(0,K.jsxs)(mn,{htmlFor:"moreThen1",children:[c.moreThen1?(0,K.jsx)(an.wBz,{fontSize:"20",fill:"#54ADFF"}):(0,K.jsx)(an.FlD,{fontSize:"20",fill:"#54ADFF"}),(0,K.jsx)(vn,{children:"up to 1 year"})]}),(0,K.jsx)(bn,{type:"checkbox",id:"moreThen1",name:"moreThen1",value:c.moreThen1,onChange:p})]}),(0,K.jsxs)(gn,{children:[(0,K.jsxs)(mn,{htmlFor:"moreThen2",children:[c.moreThen2?(0,K.jsx)(an.wBz,{fontSize:"20",fill:"#54ADFF"}):(0,K.jsx)(an.FlD,{fontSize:"20",fill:"#54ADFF"}),(0,K.jsx)(vn,{children:"up to 2 year"})]}),(0,K.jsx)(bn,{type:"checkbox",id:"moreThen2",name:"moreThen2",value:c.moreThen2,onChange:p})]})]})]})},Zn=function(n){var e=n.setFiltersState,t=(0,I.useState)(!1),r=(0,O.Z)(t,2),i=r[0],o=r[1],a=(0,U.v9)(rn.vU),l=(0,I.useState)(a),s=(0,O.Z)(l,2),c=s[0],d=s[1],f=(0,U.I0)(),p=function(n){var t=n.target.name,r="",i=!c[t],o=c.male,l=c.female;r=!i||o||l?!i&&l&&o&&"female"===t?"male":!i&&l&&o&&"male"===t?"female":"":t,d((function(n){return(0,tn.Z)((0,tn.Z)({},n),{},(0,en.Z)({},t,i))})),f((0,on.r)((0,tn.Z)((0,tn.Z)({},a),{},(0,en.Z)({},t,i)))),e((function(n){return(0,tn.Z)((0,tn.Z)({},n),{},{sex:r})}))};return(0,K.jsxs)(pn,{children:[(0,K.jsxs)(xn,{onClick:function(n){o(!i)},children:[(0,K.jsx)(yn,{isOpen:i}),(0,K.jsx)(un,{children:"By gender"})]}),i&&(0,K.jsxs)(hn,{children:[(0,K.jsxs)(gn,{children:[(0,K.jsxs)(mn,{htmlFor:"female",children:[c.female?(0,K.jsx)(an.wBz,{fontSize:"20",fill:"#54ADFF"}):(0,K.jsx)(an.FlD,{fontSize:"20",fill:"#54ADFF"}),(0,K.jsx)(vn,{children:"female"})]}),(0,K.jsx)(bn,{type:"checkbox",id:"female",name:"female",value:c.female,onChange:p})]}),(0,K.jsxs)(gn,{children:[(0,K.jsxs)(mn,{htmlFor:"male",children:[c.male?(0,K.jsx)(an.wBz,{fontSize:"20",fill:"#54ADFF"}):(0,K.jsx)(an.FlD,{fontSize:"20",fill:"#54ADFF"}),(0,K.jsx)(vn,{children:"male"})]}),(0,K.jsx)(bn,{type:"checkbox",id:"male",name:"male",value:c.male,onChange:p})]})]})]})},Fn=function(n){var e=n.setFiltersState;return(0,K.jsxs)(sn,{children:[(0,K.jsx)(cn,{children:"Filters"}),(0,K.jsxs)(dn,{children:[(0,K.jsx)(fn,{children:(0,K.jsx)(wn,{setFiltersState:e})}),(0,K.jsx)(fn,{children:(0,K.jsx)(Zn,{setFiltersState:e})})]})]})},kn=t(458),zn=H.default.div(y||(y=(0,_.Z)(["\n  position: relative;\n"]))),Sn=H.default.button(w||(w=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  width: 40px;\n  height: 40px;\n  padding: 9px 8px 7px;\n  color: var(--btn-bg-color);\n  font-weight: 700;\n\n  background: var(--labels-bg-color);\n  border: none;\n  border-radius: 50%;\n\n  transition: color var(--duration) var(--cubic),\n    background var(--duration) var(--cubic);\n\n  &:hover,\n  &:focus {\n    color: var(--label-active-color);\n    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    min-width: 152px;\n\n    background: transparent;\n    border-width: 2px;\n    border-color: var(--btn-bg-color);\n    border-style: solid;\n    border-radius: 40px;\n\n    font-size: 16px;\n  }\n"]))),Tn=(0,H.default)(kn.wrD)(Z||(Z=(0,_.Z)(["\n  fill: var(--btn-bg-color);\n  width: 24px;\n  height: 24px;\n  stroke-width: 0.5;\n  transition: fill var(--duration) var(--cubic);\n\n  &:hover,\n  &:focus {\n    fill: var(--label-active-color);\n  }\n"]))),Cn=function(){var n=(0,N.i)(),e=(0,O.Z)(n,1)[0],t=(0,I.useState)(!1),r=(0,O.Z)(t,2),i=r[0],o=r[1],a=(0,I.useState)({}),l=(0,O.Z)(a,2),s=l[0],c=l[1],d=(0,U.I0)();(0,I.useEffect)((function(){0!==Object.keys(s).length&&d((0,nn.C3)(s))}),[d,s]);var f=(0,I.useRef)(null);(0,I.useEffect)((function(){var n=function(n){f.current&&!f.current.contains(n.target)&&o(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[]);return(0,K.jsxs)(zn,{ref:f,children:[(0,K.jsxs)(Sn,{id:"filtersBtn",type:"button",name:"filterBtn","aria-label":"Show filters",onClick:function(n){o(!i)},children:[e>=768&&"Filter"," ",(0,K.jsx)(Tn,{name:"filterBtnIcon"})]}),i&&(0,K.jsx)(Fn,{setFiltersState:c})]})},Dn=t(7689),Bn=t(1213),An=H.default.form(F||(F=(0,_.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 0 auto;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 40px;\n  }\n"]))),qn=H.default.input(k||(k=(0,_.Z)(["\n  width: 100%;\n  max-height: 44px;\n\n  padding-top: 14px;\n  padding-bottom: 13px;\n  padding-left: 20px;\n\n  color: var(--text-input-color);\n\n  background-color: #fff;\n  border-radius: 24px;\n  border: none;\n  outline: none;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n\n  transition: box-shadow var(--duration) var(--cubic);\n\n  &:focus,\n  &:hover {\n    box-shadow: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);\n  }\n\n  &::placeholder {\n    font-size: 14px;\n    font-style: var(--secondary-font);\n  }\n"]))),On=H.default.button.withConfig({shouldForwardProp:function(n){return"query"!==n}})(z||(z=(0,_.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: transparent;\n  border: none;\n\n  transform: ",";\n\n  transition: transform var(--duration) var(--cubic);\n"])),(function(n){return n.query&&"translateX(-27px)"})),In=(0,H.default)(kn.w75)(S||(S=(0,_.Z)(["\n  color: var(--btn-bg-color);\n  width: 24px;\n  height: 24px;\n  stroke-width: 0.35;\n"]))),Un=(0,H.default)(On).withConfig({shouldForwardProp:function(n){return"query"!==n}})(T||(T=(0,_.Z)(["\n  right: 13px;\n\n  transform: translateX(0);\n  opacity: ",";\n\n  transition: opacity var(--duration) var(--cubic);\n"])),(function(n){return n.query?1:0})),En=(0,H.default)(Bn.ySC)(C||(C=(0,_.Z)(["\n  color: var(--header-items-color);\n  width: 24px;\n  height: 24px;\n"]))),Ln=t(9776),Nn=function(n){var e=n.handleSearch,t=(0,U.I0)(),r=(0,Dn.TH)(),i=(0,I.useState)(""),o=(0,O.Z)(i,2),a=o[0],l=o[1],s=(0,Dn.UO)().categoryName;return(0,K.jsxs)(An,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget.elements.query.value;"/news"===r.pathname?e(i):t((0,nn.Tj)({category:s,input:i}))},children:[(0,K.jsx)(qn,{type:"text",name:"query",id:"searchQuery",placeholder:"Search",onChange:function(n){var e=n.target.value;l(e)},value:a}),(0,K.jsx)(On,{type:"submit","aria-label":"Submit",query:a,children:(0,K.jsx)(In,{})}),(0,K.jsx)(Un,{type:"button",onClick:function(){l(""),"/news"===r.pathname?t((0,Ln.d)("?page=".concat(1,"&limit=9"))):t((0,nn._H)("?category=".concat(s)))},query:a,"aria-label":"Discard query",children:(0,K.jsx)(En,{})})]})},_n=t(4259),Hn=H.default.div(D||(D=(0,_.Z)(["\n  width: 100%;\n  height: 100%;\n  padding-top: 40px;\n  scroll-behavior: smooth;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 80px;\n  }\n"]))),Pn=H.default.h2(B||(B=(0,_.Z)(["\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),Qn=H.default.div(A||(A=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 16px;\n  }\n"]))),Xn=H.default.div(q||(q=(0,_.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  margin-top: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    gap: 80px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0;\n\n    width: 100%;\n  }\n"]))),Mn=t(7658),Yn=t(5667),Kn=t(4630),Rn=function(){var n=(0,U.v9)(E.Qb),e=(0,U.v9)(rn.xU),t=(0,I.useState)(!1),r=(0,O.Z)(t,2),i=r[0],o=r[1],a=(0,U.I0)(),l=(0,Dn.UO)().categoryName,s=(0,U.v9)(rn.h6),c=(0,I.useState)(1),d=(0,O.Z)(c,2),f=d[0],p=d[1];return(0,I.useEffect)((function(){n&&a((0,nn.bM)()),"favorite"!==l&&"my-pets"!==l?a((0,nn._H)("?category=".concat(l,"&page=").concat(f))):"favorite"===l&&n?a((0,nn.lZ)("?page=".concat(f))):"my-pets"===l&&n&&a((0,nn.Zz)("?page=".concat(f)))}),[l,a,n,f]),(0,K.jsxs)(K.Fragment,{children:[e&&(0,K.jsx)(Kn.Z,{}),(0,K.jsxs)(Hn,{children:[(0,K.jsx)(Pn,{children:"Find your favorite pet"}),(0,K.jsx)(Nn,{}),(0,K.jsxs)(Xn,{children:[(0,K.jsx)($,{onFilterChange:function(n){p(1),Yn.NY.scrollToTop()}}),(0,K.jsxs)(Qn,{children:[(0,K.jsx)(Cn,{}),n?(0,K.jsx)(R,{text:"Add pet",path:"/add-pet"}):(0,K.jsx)(R,{text:"Add pet",onClick:function(){return o(!0)}}),i&&(0,K.jsx)(_n.Z,{open:i,handleClose:function(){return o(!1)}})]})]}),(0,K.jsx)(G.default,{}),(0,K.jsx)(L.x7,{}),s>8&&(0,K.jsx)(Mn.Z,{count:Math.ceil(s/8),size:"large",variant:"outlined",color:"primary",showFirstButton:!0,showLastButton:!0,page:f,onChange:function(n,e){p(e),Yn.NY.scrollToTop()},style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"100px"}})]})]})}}}]);
//# sourceMappingURL=751.ccc396b1.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{34304:function(e,t,r){"use strict";r.r(t);var n=r(91761),o=r(22875),s=r(61108),i=r.n(s),a=r(50543),l=r(55634),c=r(73882),u=r(24481),d=(r(82541),r(72654)),p=r(8798),m=r.n(p),f=r(48411),g=r(6161),h=r(5751),x=r(97454),y=r(53087),b=r(22685),w=r(4196),v=r(79470),_=r(43111),j=r(63442),N=r(76154),k=r.n(N),P=r(72105),Z=r(18960),F=r(57440),I=r(42087);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,l.useRouter)(),t=e.query.redirect,r=(0,u.Z)().t,s=e.locale,p=(0,c.useContext)(f.Z),N=p.setUserValue,C=p.user,A=(0,c.useState)(""),S=A[0],O=A[1],B=(0,c.useState)(!0),L=B[0],R=B[1],W=(0,c.useState)(""),T=(W[0],W[1]),q=(0,c.useState)(!0),D=(q[0],q[1]),M=(0,c.useState)(!1),U=M[0],V=M[1],z=(0,c.useState)(!1),X=(z[0],z[1],(0,c.useState)({})),H=(X[0],X[1]),$=(0,c.useState)(""),K=($[0],$[1],(0,c.useState)(!1)),Q=(K[0],K[1],(0,c.useState)({password:!0,confirmPassword:!0})),G=Q[0],J=Q[1],Y=(0,v.Z)(),ee=((0,Z.Z)(Y.breakpoints.up("md")),(0,c.useState)({email:!1,password:!1,confirmPassword:!1})),te=ee[0],re=ee[1],ne=k().object({email:k().string().pattern(new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/)).required().messages({"string.empty":"Email is required","string.pattern.base":"Invalid Email"}),password:k().string().custom((function(e,t){return e.length>=8?e:t.message("At least 8 charachter")})).required().messages({"string.empty":"Password is required"}),confirmPassword:k().string().required().valid(k().ref("password")).label("confirm password").options({messages:{"any.only":"{{#label}} does not match"}}),firstName:k().string().required().messages({"string.empty":"First Name is required"}),lastName:k().string().required().messages({"string.empty":"Last Name is required"})}),oe=(0,_.cI)({resolver:(0,P.L)(ne)}),se=oe.register,ie=oe.handleSubmit,ae=oe.getValues,le=(oe.watch,oe.formState.errors),ce=function(){var r=(0,n.Z)(i().mark((function r(n){var o,s,a,l,c;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(V(!0),!n||L){r.next=32;break}return r.prev=2,r.next=5,(0,g.N$)(n.firstName,n.lastName,n.email,n.password,S);case 5:if("object"!==typeof(o=r.sent).email&&"array"!==typeof o.email||(d.A.notify("".concat(o.email),{duration:3,type:"error",targetId:"toast-comp-3",position:"top",title:"Error Notification!"}),V(!1)),"object"!==typeof o.password&&"array"!==typeof o.password||(d.A.notify("".concat(o.password),{duration:3,type:"error",targetId:"toast-comp-3",position:"top",title:"Error Notification!"}),V(!1)),!("object"!==typeof o.email&&"array"!==typeof o.email||"object"!==typeof o.password&&"array"!==typeof o.password&&""!==firstName&&""!==lastName&&""!==email&&""!==password)){r.next=22;break}return localStorage.setItem("token.refresh",o.token_response.refresh),localStorage.setItem("token.access",o.token_response.access),r.next=13,(0,h.D)();case 13:return s=r.sent,H(s.data),N(),T(s.data.email),r.next=19,(0,g.lF)(s.data.id);case 19:V(!1),e.push(t||"/"),d.A.notify("We sent a 6 digit code to your Email, please check your inbox",{duration:3,type:"success",targetId:"toast-comp-3",position:"top",title:"Success!"});case 22:V(!1),r.next=32;break;case 25:r.prev=25,r.t0=r.catch(2),V(!1),console.log(r.t0),null!==r.t0&&void 0!==r.t0&&null!==(a=r.t0.response)&&void 0!==a&&a.data.email&&(d.A.notify("".concat(r.t0.response.data.email[0]),{duration:3,type:"error",targetId:"toast-comp-3",position:"top",title:"Error Notification!"}),V(!1)),null!==r.t0&&void 0!==r.t0&&null!==(l=r.t0.response)&&void 0!==l&&l.data.detail&&(d.A.notify("".concat(r.t0.response.data.detail),{duration:3,type:"error",targetId:"toast-comp-3",position:"top",title:"Error Notification!"}),V(!1)),null!==r.t0&&void 0!==r.t0&&null!==(c=r.t0.response)&&void 0!==c&&c.data.password&&(d.A.notify("".concat(r.t0.response.data.password[0]),{duration:3,type:"error",targetId:"toast-comp-3",position:"top",title:"Error Notification!"}),V(!1));case 32:case"end":return r.stop()}}),r,null,[[2,25]])})));return function(e){return r.apply(this,arguments)}}(),ue=function(e,t){re(E(E({},te),{},(0,o.Z)({},e,t)))},de=function(e){return{"& .MuiFilledInput-root":{border:"1px solid #dcdcdc",overflow:"hidden",borderRadius:"10px",backgroundColor:"light"===Y.palette.mode?"#fff":"#2b2b2b",transition:Y.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",borderColor:le[e]?"red":"#0038FF"}}}},pe=function(e,t){return{disableUnderline:!0,onFocus:function(t){return ue(e,!0)},onBlurCapture:function(t){""===ae()[e]&&ue(e,!1)},startAdornment:t?(0,I.jsx)(y.Z,{position:"start",children:(0,I.jsx)("img",{alt:e,src:t,style:{marginTop:"-16px"}})}):null,endAdornment:"password"===e||"confirmPassword"===e?(0,I.jsx)(y.Z,{position:"end",children:(0,I.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:function(){return function(e){return J(E(E({},G),{},(0,o.Z)({},e,!G[e])))}(e)},onMouseDown:function(){return function(e){return J(E(E({},G),{},(0,o.Z)({},e,!G[e])))}(e)},children:(0,I.jsx)(j.Z,{})})}):null}},me=function(e,t){return{shrink:te[e],style:{color:te[e]?"":"#2E536B",fontWeight:600,marginLeft:t?0:"36px"}}};return(0,c.useEffect)((function(){C&&D(null===C||void 0===C?void 0:C.is_email_verified)}),[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d.I,{align:"right",position:"top",id:"toast-comp-3"}),(0,I.jsxs)("div",{className:m().container,style:"ir"===s?{direction:"ltr"}:{},children:[(0,I.jsxs)("div",{className:m().col,children:[(0,I.jsx)("h1",{style:"ir"===s?{textAlign:"right"}:{},children:r("common:registerHeading")}),(0,I.jsx)("h4",{style:"ir"===s?{textAlign:"right"}:{},children:r("common:registerDescription")}),(0,I.jsxs)("button",{className:m().googleAuthBtn,onClick:function(){return window.location.replace("https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=".concat(window.location.origin,"/auth/oauth2/google&state=/&prompt=consent&response_type=code&client_id=696364929615-frl6151jgggmi923lu0clb4utsprbodl.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline"))},children:[(0,I.jsx)("img",{style:"ir"===s?{marginLeft:"7px"}:{},src:"/images/google-auth.png",alt:""}),r("common:googleLabel")]}),(0,I.jsx)("p",{className:m().lineBreak,children:"ir"===s?"\u06cc\u0627":"or"}),(0,I.jsxs)("form",{onSubmit:ie(ce),autoComplete:"off",children:[(0,I.jsxs)("div",{style:{marginBottom:"10px",display:"flex",justifyContent:"space-between"},children:[(0,I.jsx)("div",{style:"ir"==s?{width:"48%",direction:"rtl"}:{width:"48%"},children:(0,I.jsx)(w.Z,E(E({sx:de("firstName"),error:!!le.firstName},se("firstName")),{},{fullWidth:!0,type:"text",label:(0,I.jsxs)(I.Fragment,{children:[r("common:firstName"),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),variant:"filled",InputLabelProps:me("firstName",!0),InputProps:pe("firstName"),helperText:(null===le||void 0===le?void 0:le.firstName)&&le.firstName.message}))}),(0,I.jsx)("div",{style:"ir"==s?{width:"48%",direction:"rtl"}:{width:"48%"},children:(0,I.jsx)(w.Z,E(E({sx:de("lastName"),error:!!le.lastName},se("lastName")),{},{fullWidth:!0,type:"text",label:(0,I.jsxs)(I.Fragment,{children:[r("common:lastName"),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),variant:"filled",InputLabelProps:me("lastName",!0),InputProps:pe("lastName"),helperText:(null===le||void 0===le?void 0:le.lastName)&&le.lastName.message}))})]}),(0,I.jsx)("div",{style:{marginBottom:"15px"},children:(0,I.jsx)(w.Z,E(E({sx:de("email"),error:!!le.email},se("email")),{},{fullWidth:!0,type:"email",label:(0,I.jsxs)(I.Fragment,{children:[r("common:reqProgramEmailInput"),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),variant:"filled",InputLabelProps:me("email"),InputProps:pe("email","/images/email.svg"),helperText:(null===le||void 0===le?void 0:le.email)&&le.email.message}))}),(0,I.jsx)("div",{className:m().inputField,style:{marginBottom:"15px"},children:(0,I.jsx)(w.Z,E(E({sx:de("password"),error:!!le.password},se("password")),{},{fullWidth:!0,type:G.password?"password":"text",label:(0,I.jsxs)(I.Fragment,{children:[r("common:passLabel"),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),variant:"filled",InputLabelProps:me("password"),InputProps:pe("password","/images/password.svg"),helperText:(null===le||void 0===le?void 0:le.password)&&(null===le||void 0===le?void 0:le.password.message)}))}),(0,I.jsx)("div",{className:m().inputField,style:{marginBottom:"15px"},children:(0,I.jsx)(w.Z,E(E({sx:de("confirmPassword"),error:!!le.confirmPassword},se("confirmPassword")),{},{fullWidth:!0,type:!0===G.confirmPassword?"password":"text",label:(0,I.jsxs)(I.Fragment,{children:[r("common:confirmPassLabel"),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),variant:"filled",InputLabelProps:me("confirmPassword"),InputProps:pe("confirmPassword","/images/password.svg"),helperText:(null===le||void 0===le?void 0:le.confirmPassword)&&le.confirmPassword.message}))}),(0,I.jsx)("div",{className:m().inputField,style:{marginBottom:"15px"},children:(0,I.jsx)(F.Kr,{MenuProps:{style:{height:"300px"}},sx:{"& .MuiFilledInput-root":{border:"1px solid #E6E6E6",overflow:"hidden",borderRadius:"10px",backgroundColor:"light"===Y.palette.mode?"#fff":"#2b2b2b",transition:Y.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",borderColor:L?"red":"#0038FF"}},"&.MuiTelInput-MenuItem ":{top:"180px",backgroundColor:"red",height:"300px"}},dir:"ltr",name:"tel",fullWidth:!0,value:S,error:L,onChange:function(e){O(e),(0,F.Cs)(e)?R(!1):R(!0)},focusOnSelectCountry:!0,defaultCountry:"IR",variant:"filled",label:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{style:{fontWeight:"600",color:"#2E536B"},children:r("common:phone_num")}),(0,I.jsx)("span",{style:{color:"red"},children:" *"})]}),InputLabelProps:{shrink:te.tel,style:{direction:"ir"===s?"rtl":"ltr",color:te.tel?"":"#2E536B",fontWeight:400,right:25,transformOrigin:"ir"===s&&"top right"}},InputProps:{disableUnderline:!0,onFocus:function(e){return ue("tel",!0)},onBlurCapture:function(e){""===ae().tel&&ue("tel",!1)}},helperText:L&&r("common:phone_num_error")})}),(0,I.jsx)("div",{style:{marginBottom:"15px"},children:(0,I.jsx)(x.Z,{size:"large",type:"submit",fullWidth:!0,variant:"contained",loading:U,sx:{height:"50px"},children:r("common:register")})})]}),(0,I.jsxs)("p",{className:"".concat(m().switchLink),children:[r("common:haveAnAccount")," ",(0,I.jsx)(a.default,{passHref:!0,href:"/auth/login",children:(0,I.jsx)("span",{children:r("common:registered")})})]})]}),(0,I.jsx)("div",{className:"".concat(m().col),children:(0,I.jsx)("img",{src:"/images/auth-background.png",alt:""})})]})]})}},6161:function(e,t,r){"use strict";r.d(t,{lF:function(){return l},N$:function(){return c},s8:function(){return u},V0:function(){return d}});var n=r(91761),o=r(61108),s=r.n(o),i=r(17924),a=r(30334),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i.Z.getCodeVerification,{user:t,verification_type:"email"});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(t,r,n,o,l){var c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(i.Z.signup,{acceptPolicy:!0,first_name:t,last_name:r,email:n,password:o,phone_number:l,receive_marketing_email:!1});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,o,s){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||""===t||null===t){e.next=5;break}return e.next=3,a.Z.post(i.Z.verifyAccount,{user:r,verification_code:"".concat(t),verification_type:"email"});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.patch("/users/auth/accounts/".concat(t,"/"),{phone_number:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},94542:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register",function(){return r(34304)}])},8798:function(e){e.exports={verifyContainer:"Register_verifyContainer__2Wrgt",content:"Register_content__26UTa",container:"Register_container__2vSuc",col:"Register_col__4TIlQ",switchLink:"Register_switchLink__ScXWP",googleAuthBtn:"Register_googleAuthBtn__3VkLD",lineBreak:"Register_lineBreak__E_wNy",inputField:"Register_inputField__1fo-o",passEye:"Register_passEye__3R4Ip",backContainer:"Register_backContainer__1U04X",backButton:"Register_backButton__2sNtv"}}},function(e){e.O(0,[674,7255,9510,1689,5605,8175,5104,1100,2654,9774,2888,179],(function(){return t=94542,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
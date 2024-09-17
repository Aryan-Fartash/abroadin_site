(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5963],{75963:function(e,n,r){"use strict";r.d(n,{Z:function(){return ce}});var t=r(91761),i=r(22875),l=r(61108),o=r.n(l),a=r(73882),s=r(55634),c=r(24481),d=r(82826),u=r(34325),p=r(47402),x=r(22685),m=r(26410),f=r(41173),h=r(87459),g=r(43486),v=r(96450),j=r(66354),b=r(29242),Z=r(380),y=r(81984),C=r(90034),_=r(40113),k=r(43111),S=r(48411),w=r(55799),P=r(76312),I=r.n(P),E=r(37414),D=r(63731),O=r(43769),z=r(42087);function F(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function W(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?F(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var M=function(e){var n=e.majors,r=e.disciplines,t=e.mobile,i=e.modal,l=e.disciplineFilter,o=e.countries,P=e.filteredDisciplines,F=(0,s.useRouter)(),M=F.query,N=(0,a.useState)([]),R=N[0],B=N[1],U=(0,a.useState)([]),A=U[0],L=U[1],T=(0,a.useState)([]),q=T[0],V=T[1],J=(0,a.useState)([]),H=J[0],G=J[1],$=(0,a.useState)(""),K=$[0],Q=$[1],X=(0,a.useState)(""),Y=X[0],ee=X[1],ne=(0,a.useState)(!0),re=ne[0],te=ne[1],ie=(0,a.useState)(!0),le=ie[0],oe=ie[1],ae=(0,w.Z)(),se=(0,a.useContext)(S.Z).setUserValue,ce=(0,c.Z)().t,de=(0,k.cI)({defaultValues:{levels:[],schools:[],major:[]}}),ue=de.control,pe=de.handleSubmit,xe=de.reset,me=de.setValue,fe=[{label:"Bachelor",value:"Bachelor"},{label:"Master",value:"Master"},{label:"PhD",value:"Ph.D"}],he=[{label:"University",value:"University"},{label:"College",value:"College"}],ge={PaperProps:{style:{maxHeight:224,width:250}}};return(0,a.useEffect)((function(){var e=localStorage.getItem("token.access");e&&se(e)}),[]),(0,a.useEffect)((function(){var e,n,r,t;M&&(B(""!==M.disciplines&&M.disciplines?null===(e=M.disciplines)||void 0===e?void 0:e.split(",").map((function(e){return parseInt(e)})):[]),L(""!==M.majors&&M.majors?null===(n=M.majors)||void 0===n?void 0:n.split(",").map((function(e){return parseInt(e)})):[]),Q(parseInt(M.country)||""),ee(parseInt(M.deadline)||""),G([parseInt(M.minapp)||0,parseInt(M.maxapp)||300]),V([parseInt(M.mintuition)||0,parseInt(M.maxtuition)||12e4]),me("levels",(null===(r=M.levels)||void 0===r?void 0:r.split(","))||[]),me("schools",(null===(t=M.school)||void 0===t?void 0:t.split(","))||[]))}),[M]),(0,z.jsxs)("form",{onSubmit:pe((function(e){F.push({pathname:"/explore",query:W(W({},F.query),{},{country:K,disciplines:R.toString(),majors:A.toString(),deadline:Y,school:"undefined"!==e.schools[0]?e.schools.toString():"",levels:"undefined"!==e.levels[0]?e.levels.toString():"",mintuition:q[0],maxtuition:q[1],minapp:H[0],maxapp:H[1],page:1})}),t&&i()})),className:I().form,style:{border:t?"none":null},children:[t&&(0,z.jsxs)(u.Z,{elevation:1,sx:{display:"flex",justifyContent:"space-between",p:"16px 24px",position:"sticky",top:0,background:"#fff",borderRadius:"12px 12px 0 0",zIndex:3},children:[(0,z.jsx)(p.Z,{fontWeight:500,children:ce("explore:filters")}),(0,z.jsx)(x.Z,{onClick:i,sx:{p:0},children:(0,z.jsx)(O.Z,{fontSize:"small"})})]}),(0,z.jsxs)("div",{className:I().filterContainer,onClick:function(){return te((function(e){return!e}))},children:[(0,z.jsx)(p.Z,{color:"primary",children:"School Filters"}),re?(0,z.jsx)(x.Z,{sx:{p:0},children:(0,z.jsx)(E.Z,{color:"primary"})}):(0,z.jsx)(x.Z,{color:"primary",sx:{p:0},children:(0,z.jsx)(D.Z,{})})]}),(0,z.jsx)(m.Z,{flexItem:!0}),(0,z.jsx)(f.Z,{in:re,children:(0,z.jsxs)("div",{style:{padding:"16px 24px"},children:[(0,z.jsxs)("div",{className:I().selectContainer,children:[(0,z.jsx)(h.Z,{htmlFor:"name-multiple",children:ce("explore:country")}),(0,z.jsx)(g.Z,{fullWidth:!0,labelId:"country-select",id:"country-select",value:K,onChange:function(e){var n=e.target.value;Q(n)},input:(0,z.jsx)(v.Z,{disableUnderline:!0,id:"select-country"}),displayEmpty:!0,renderValue:function(e){var n;return""===e?(0,z.jsx)(p.Z,{fontSize:13,children:ce("explore:choose")}):(0,z.jsx)("div",{className:I().inputChips,children:(0,z.jsx)(j.Z,{size:"small",sx:{backgroundColor:"#C6D2FE",borderRadius:"6px"},label:null===o||void 0===o||null===(n=o.find((function(e){return e.id===K})))||void 0===n?void 0:n.name},e)})},MenuProps:ge,children:o.map((function(e){return(0,z.jsx)(b.Z,{value:e.id,children:e.name.split(" ").slice(1).join(" ")},e.id)}))})]}),(0,z.jsx)(m.Z,{flexItem:!0,sx:{marginTop:"16px"}}),(0,z.jsxs)("div",{className:I().flexColumn,children:[(0,z.jsx)(p.Z,{fontSize:12,mt:"32px",children:ce("explore:schoolType")}),(0,z.jsx)(k.Qr,{name:"schools",control:ue,render:function(e){return(0,z.jsx)(z.Fragment,{children:he.map((function(n){var r;return(0,z.jsx)(Z.Z,{label:n.label,control:(0,z.jsx)(y.Z,{value:n.value,checked:null===(r=e.field.value)||void 0===r?void 0:r.some((function(e){return e===n.value})),onChange:function(n,r){r?e.field.onChange([].concat((0,d.Z)(e.field.value),[n.target.value])):e.field.onChange(e.field.value.filter((function(e){return e!==n.target.value})))}})},n.value)}))})}})]})]})}),(0,z.jsx)(m.Z,{flexItem:!0}),(0,z.jsxs)("div",{className:I().filterContainer,onClick:function(){return oe((function(e){return!e}))},children:[(0,z.jsx)(p.Z,{color:"primary",children:"Program Filters"}),le?(0,z.jsx)(x.Z,{color:"primary",sx:{p:0},children:(0,z.jsx)(E.Z,{})}):(0,z.jsx)(x.Z,{color:"primary",sx:{p:0},children:(0,z.jsx)(D.Z,{})})]}),(0,z.jsx)(m.Z,{flexItem:!0}),(0,z.jsx)(f.Z,{in:le,children:(0,z.jsxs)("div",{style:{padding:"16px 24px"},children:[(0,z.jsxs)("div",{className:I().flexColumn,children:[(0,z.jsx)(p.Z,{fontSize:12,mt:"16px",children:ce("explore:level")}),(0,z.jsx)(k.Qr,{name:"levels",control:ue,render:function(e){return(0,z.jsx)(z.Fragment,{children:fe.map((function(n){var r;return(0,z.jsx)(Z.Z,{label:n.label,control:(0,z.jsx)(y.Z,{value:n.value,checked:null===(r=e.field.value)||void 0===r?void 0:r.some((function(e){return e===n.value})),onChange:function(n,r){r?e.field.onChange([].concat((0,d.Z)(e.field.value),[n.target.value])):e.field.onChange(e.field.value.filter((function(e){return e!==n.target.value})))}})},n.value)}))})}})]}),(0,z.jsxs)("div",{className:I().selectContainer,children:[(0,z.jsx)(h.Z,{htmlFor:"name-multiple",children:ce("explore:dicsipline")}),(0,z.jsx)(g.Z,{fullWidth:!0,labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,label:ce("explore:dicsipline"),value:R,onChange:function(e){var n=e.target.value;l(n),B("string"===typeof n?n.split(","):n)},placeholder:"sss",input:(0,z.jsx)(v.Z,{disableUnderline:!0,id:"select-discipline"}),displayEmpty:!0,renderValue:function(e){return e.length>0?(0,z.jsx)("div",{className:I().inputChips,children:null===e||void 0===e?void 0:e.map((function(e){var n,t;return(0,z.jsx)(j.Z,{size:"small",sx:{backgroundColor:"#C6D2FE",borderRadius:"6px"},label:null!==r&&void 0!==r&&null!==(n=r.find((function(n){return n.id===e})))&&void 0!==n&&n.name?null===(t=r.find((function(n){return n.id===e})))||void 0===t?void 0:t.name:"Unknown Discipline"},e)}))}):(0,z.jsx)(p.Z,{fontSize:13,children:ce("explore:choose")})},MenuProps:ge,children:r.map((function(e){return(0,z.jsxs)(b.Z,{value:e.id,children:[(0,z.jsx)(y.Z,{checked:(null===R||void 0===R?void 0:R.indexOf(e.id))>-1,size:"small"}),(0,z.jsx)(p.Z,{fontSize:12,children:e.name})]},e.id)}))})]}),(0,z.jsxs)("div",{className:I().selectContainer,children:[(0,z.jsx)(h.Z,{htmlFor:"name-multiple",children:ce("explore:majors")}),(0,z.jsx)(g.Z,{fullWidth:!0,labelId:"majors-select",id:"majors-select",multiple:!0,value:A,onChange:function(e){var r=e.target.value,t=r.map((function(e){return n.find((function(n){return n.id===parseInt(e)})).discipline_id}));P(t),L("string"===typeof r?r.split(","):r)},input:(0,z.jsx)(v.Z,{disableUnderline:!0,id:"select-majors"}),displayEmpty:!0,renderValue:function(e){return e.length>0?(0,z.jsx)("div",{className:I().inputChips,children:null===e||void 0===e?void 0:e.map((function(e){var r,t;return(0,z.jsx)(j.Z,{size:"small",sx:{backgroundColor:"#C6D2FE",borderRadius:"6px"},label:null!==n&&void 0!==n&&null!==(r=n.find((function(n){return n.id===e})))&&void 0!==r&&r.name?null===(t=n.find((function(n){return n.id===parseInt(e)})))||void 0===t?void 0:t.name:"Unknown Major"},e)}))}):(0,z.jsx)(p.Z,{fontSize:13,children:ce("explore:choose")})},MenuProps:ge,children:null===n||void 0===n?void 0:n.map((function(e){return(0,z.jsxs)(b.Z,{value:e.id,children:[(0,z.jsx)(y.Z,{checked:(null===A||void 0===A?void 0:A.indexOf(e.id))>-1,size:"small"}),(0,z.jsx)(p.Z,{fontSize:12,children:e.name})]},e.id)}))})]}),(0,z.jsxs)("div",{className:I().selectContainer,children:[(0,z.jsx)(h.Z,{htmlFor:"name-multiple",children:ce("explore:deadline")}),(0,z.jsx)(g.Z,{fullWidth:!0,labelId:"deadline-select",id:"deadline-select",value:Y,onChange:function(e){var n=e.target.value;ee(n)},input:(0,z.jsx)(v.Z,{disableUnderline:!0,id:"select-dealine"}),displayEmpty:!0,renderValue:function(e){return""!==e?(0,z.jsx)("div",{className:I().inputChips,children:(0,z.jsx)(j.Z,{size:"small",sx:{backgroundColor:"#C6D2FE",borderRadius:"6px"},label:ae[e-1].name},e)}):(0,z.jsx)(p.Z,{fontSize:13,children:ce("explore:choose")})},MenuProps:ge,children:ae.map((function(e){return(0,z.jsx)(b.Z,{value:e.id,children:e.name},e.id)}))})]}),(0,z.jsx)(p.Z,{m:"24px 0",fontWeight:500,fontSize:12,children:ce("explore:tution")}),(0,z.jsx)("div",{style:{padding:"8px 16px"},children:(0,z.jsx)(C.ZP,{sx:{"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"},"& .MuiSlider-valueLabelOpen":{opacity:.7}}},max:12e4,min:0,value:q,onChange:function(e,n){V(n)},valueLabelDisplay:"auto",marks:[{value:0,label:"0 $"},{value:12e4,label:"120000 $"}]})}),(0,z.jsx)(p.Z,{m:"24px 0",fontWeight:500,fontSize:12,children:ce("explore:application")}),(0,z.jsx)("div",{style:{padding:"8px 16px"},children:(0,z.jsx)(C.ZP,{sx:{"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&:before":{display:"none"}},"& .MuiSlider-valueLabelOpen":{opacity:.7}},max:300,min:0,value:H,onChange:function(e,n){G(n)},valueLabelDisplay:"auto",marks:[{value:0,label:"0 $"},{value:300,label:"300 $"}]})})]})}),(0,z.jsxs)("footer",{children:[(0,z.jsx)(_.Z,{size:"medium",variant:"outlined",fullWidth:!0,onClick:function(){B([]),L([]),Q(""),ee(""),G([0,300]),V([0,12e4]),xe(),P(null),t&&i(),F.push("/explore")},children:ce("explore:clearFilter")}),(0,z.jsx)(_.Z,{size:"medium",type:"submit",variant:"contained",fullWidth:!0,children:ce("explore:applyFilter")})]})]})},N=r(81256),R=r(15899),B=r(10393),U=r(48820),A=r(18960),L=r(79470),T=r(25510),q=r(15436),V=r(4196),J=r(53087),H=r(81018),G=r(19749),$=r(15770),K=r(14332),Q=r(94888),X=r(56982),Y=r(3914),ee=r(33589),ne=r(46396),re=r(49620),te=r(12576),ie=r(50543),le=function(e){var n,r,i,l,d,f,h=e.data,g=e.modalClick,v=(0,a.useState)(h.is_saved),b=v[0],Z=v[1],y=(0,a.useContext)(S.Z).isLogedin,C=(0,c.Z)().t,k=(0,s.useRouter)().locale,w=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){Z((function(e){return!e}));try{b?(0,te.AG)(h.id):(0,te.J$)(h.id)}catch(n){console.log(n.response.detail)}}else g("save");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,z.jsxs)(u.Z,{elevation:0,sx:{mt:{lg:"24px",md:"24px",xs:"0"},mb:{lg:"0",md:"0",xs:"24px"},display:"flex",boxShadow:"0px 4px 18px 0px rgba(57, 57, 57, 0.08)",flexDirection:{lg:"row",md:"column",xs:"column"}},children:[(0,z.jsxs)("div",{style:{padding:"32px",flex:3},children:[(0,z.jsxs)(q.ZP,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,z.jsxs)(p.Z,{fontSize:14,fontWeight:500,mb:1,children:[h.degree_type," | ",h.attendance.map((function(e){return e}))]}),(0,z.jsx)(x.Z,{onClick:w,sx:{display:{xs:"block",md:"block",lg:"none"}},children:(0,z.jsx)("img",{src:"/images/".concat(b?"bookmarked-blue":"bookmark",".svg"),alt:""})})]}),(0,z.jsx)(q.ZP,{sx:{mb:{md:"16px",xs:"24px"}},children:(0,z.jsxs)(p.Z,{component:"span",fontSize:22,color:"primary",lineHeight:1.8,children:[(0,z.jsx)(ie.default,{href:"/panel/programs/".concat(h.id),children:(0,z.jsx)("a",{style:"ir"===k?{marginLeft:"16px"}:{marginRight:"16px"},children:h.title})}),y&&h.admission_chance&&(0,z.jsx)(j.Z,{sx:"Poor Match"===h.admission_chance?{backgroundColor:"#ffefef",color:"#f03738",borderRadius:"6px"}:"Fair Match"===h.admission_chance?{backgroundColor:"#eef5ff",color:"#11232f",borderRadius:"6px"}:"Very Good Match"===h.admission_chance&&{backgroundColor:"#ebf9eb",color:"#3cc13b",borderRadius:"6px"},label:h.admission_chance})]})}),(0,z.jsxs)(q.ZP,{sx:{gap:{md:"8px",xs:"8px",lg:"16px"},margin:"0",display:"flex",flexDirection:{lg:"row",md:"column",xs:"column"}},children:[h.program_fees.map((function(e,n){return"tuition_fee"===e.type&&(0,z.jsxs)(p.Z,{fontSize:14,color:"#2E536B",children:[["CAD","USD"].includes(e.currency)?"$ ":"\u20ac ",(0,z.jsx)("strong",{children:"".concat(e.amount?e.amount:C("explore:programUnknown"))})," ",C("explore:tutionperyear")]},n)})),(0,z.jsx)(m.Z,{orientation:"vertical",flexItem:!0,sx:{borderRightWidth:2,background:"black"}}),h.program_fees.map((function(e,n){return"application_fee"===e.type&&(0,z.jsxs)(p.Z,{fontSize:14,color:"#2E536B",children:[(0,z.jsx)("strong",{children:"".concat(e.amount?e.amount:C("explore:programUnknown")," ")}),C("explore:applcationfee")]},n)})),(0,z.jsx)(m.Z,{orientation:"vertical",flexItem:!0,sx:{borderRightWidth:2,background:"black"}}),(0,z.jsx)(p.Z,{fontSize:14,color:"#2E536B",children:(0,z.jsx)("strong",{children:"".concat(""!==h.duration?h.duration:C("explore:programUnknown"))})})]}),(0,z.jsxs)(q.ZP,{sx:{display:{xs:"flex",md:"flex",lg:"none"},gap:"4px",alignItems:"center",color:"#2E536B",flexWrap:"wrap",mt:"16px"},children:[(0,z.jsx)(p.Z,{fontSize:14,fontWeight:500,children:null===h.dead_lines_and_start_date?"Unknown":null!==h&&void 0!==h&&null!==(n=h.dead_lines_and_start_date)&&void 0!==n&&n.no_deadline?"No Deadline":null===h||void 0===h||null===(r=h.dead_lines_and_start_date)||void 0===r?void 0:r.deadline}),(0,z.jsx)(p.Z,{fontSize:14,children:C("explore:programDeadline")}),(0,z.jsx)(m.Z,{flexItem:!0,sx:{borderBottomWidth:2,width:"26px",alignSelf:"flex-end"}}),(0,z.jsx)(p.Z,{fontSize:14,fontWeight:500,children:null===h.dead_lines_and_start_date?"Unknown":new Date(null===h||void 0===h||null===(i=h.dead_lines_and_start_date)||void 0===i?void 0:i.start_date).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}),(0,z.jsx)(p.Z,{fontSize:14,children:C("explore:programStarts")})]}),(0,z.jsxs)(q.ZP,{sx:{alignItems:"center",gap:"8px",marginTop:"24px",display:"flex"},children:[(0,z.jsx)("img",{src:h.university.picture?h.university.picture:"/images/University-logo.png",alt:"uni",width:"40px"}),(0,z.jsx)(p.Z,{fontWeight:500,sx:{textDecoration:"underline"},my:"8px",children:(0,z.jsx)(ie.default,{href:"/panel/university/".concat(h.university.id),children:h.university.name})})]}),(0,z.jsx)(_.Z,{sx:{display:{xs:"block",md:"block",lg:"none"},mt:"24px",height:"41px"},disableElevation:!0,fullWidth:!0,variant:"contained",color:"warning",onClick:g,children:C("explore:estimateChance")})]}),(0,z.jsx)(m.Z,{orientation:"vertical",flexItem:!0,sx:{borderRightWidth:1}}),(0,z.jsxs)(q.ZP,{sx:{flex:1,padding:{lg:"32px 16px",md:"16px 16px"},display:{lg:"flex",md:"none"},justifyContent:"space-between",flexDirection:"column"},children:[(0,z.jsxs)(q.ZP,{sx:{display:{xs:"none",md:"none",lg:"flex"},justifyContent:"space-between"},children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(p.Z,{children:null===h.dead_lines_and_start_date?"Unknown":null!==h&&void 0!==h&&null!==(l=h.dead_lines_and_start_date)&&void 0!==l&&l.no_deadline?"No Deadline":null===h||void 0===h||null===(d=h.dead_lines_and_start_date)||void 0===d?void 0:d.deadline}),(0,z.jsx)(p.Z,{fontSize:14,color:"#2E536B",children:C("explore:programDeadline")})]}),(0,z.jsx)(m.Z,{flexItem:!0,sx:{width:"15px",borderBottomWidth:"3px",alignSelf:"center"}}),(0,z.jsxs)("div",{children:[(0,z.jsx)(p.Z,{children:null===h.dead_lines_and_start_date?"Unknown":new Date(null===h||void 0===h||null===(f=h.dead_lines_and_start_date)||void 0===f?void 0:f.start_date).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}),(0,z.jsx)(p.Z,{fontSize:14,color:"#2E536B",children:C("explore:programStarts")})]})]}),(0,z.jsxs)(q.ZP,{sx:{display:{xs:"none",md:"none",lg:"flex"},gap:"16px",flexDirection:"column"},children:[(0,z.jsxs)(_.Z,{fullWidth:!0,variant:"outlined",color:"primary",onClick:w,sx:{gap:"8px"},children:[(0,z.jsx)("img",{src:"/images/".concat(y&&b?"bookmarked-blue":"bookmark",".svg"),alt:"save"}),C(y&&b?"explore:programBookmarked":"explore:programBookmark")]}),(0,z.jsx)(_.Z,{disableElevation:!0,fullWidth:!0,variant:"contained",color:"warning",onClick:g,children:C("explore:estimateChance")})]})]})]},h.id)},oe=r(90535);function ae(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function se(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var ce=function(){var e,n=(0,s.useRouter)(),r=n.query,l=n.locale,d=(0,k.cI)({defaultValues:{program:""}}),f=d.register,Z=d.getValues,y=d.formState.errors,C=d.handleSubmit,w=d.setValue,P=d.watch,E=(0,a.useState)(!0),D=E[0],O=E[1],F=(0,a.useState)(!0),W=F[0],ie=F[1],ae=(0,a.useState)([]),ce=ae[0],de=ae[1],ue=(0,a.useState)([]),pe=ue[0],xe=ue[1],me=(0,a.useState)(!1),fe=me[0],he=me[1],ge=(0,a.useState)(1),ve=ge[0],je=ge[1],be=(0,a.useState)(0),Ze=be[0],ye=be[1],Ce=(0,a.useState)({program:""!==P("program")}),_e=Ce[0],ke=Ce[1],Se=(0,a.useState)(!1),we=Se[0],Pe=Se[1],Ie=(0,a.useState)(!1),Ee=Ie[0],De=Ie[1],Oe=(0,a.useState)(!1),ze=Oe[0],Fe=Oe[1],We=(0,a.useState)(""),Me=We[0],Ne=We[1],Re=(0,a.useState)(""),Be=Re[0],Ue=Re[1],Ae=(0,a.useState)([]),Le=Ae[0],Te=Ae[1],qe=(0,a.useState)([]),Ve=qe[0],Je=qe[1],He=(0,L.Z)(),Ge=(0,c.Z)().t,$e=(0,A.Z)(He.breakpoints.up("md")),Ke=(0,a.useContext)(S.Z).isLogedin,Qe=function(e){var n=[{id:1,name:"Agriculture & Forestry"},{id:2,name:"Applied Sciences & Professions"},{id:3,name:"Arts, Design & Architecture"},{id:4,name:"Business & Management"},{id:5,name:"Computer Science & IT"},{id:6,name:"Education & Training"},{id:7,name:"Engineering & Technology"},{id:8,name:"Environmental Studies & Earth Sciences"},{id:9,name:"Hospitality, Leisure & Sports"},{id:10,name:"Humanities"},{id:11,name:"Journalism & Media"},{id:12,name:"Law"},{id:13,name:"Medicine & Health"},{id:14,name:"Natural Sciences & Mathematics"},{id:15,name:"Social Sciences"},{id:16,name:"chooos"}];if(e&&e.length>0){var r=new Set(e),t=n.filter((function(e){return r.has(e.id)}));Je(t)}else Je(n)},Xe=[{id:0,name:"None",value:""},{id:1,name:"Lowest Tuition Fee",value:"ascending"},{id:2,name:"Highest Tuition Fee",value:"descending"}],Ye=function(){var e=(0,t.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,te.Zq)();case 3:n=e.sent,Te(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),en=function(){var e=(0,t.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.p.get("".concat("https://api.abroadin.com","/data/account/discipline-categories/?&discipline=").concat(n||""));case 3:r=e.sent,de(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),nn=function(){var e=(0,t.Z)(o().mark((function e(){var n,t,i,l,a,s,c,d,u,p,x,m,f,h,g,v;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!0),xe([]),ye(0),Pe(!1),n=r.country,t=r.disciplines,i=r.majors,l=r.deadline,a=r.school,s=r.levels,c=r.mintuition,d=r.maxtuition,u=r.minapp,p=r.maxapp,x=r.search,m=r.sort,e.prev=5,!Ke){e.next=12;break}return e.next=9,(0,te.Jb)();case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0={RA_experience:!1,TA_experience:!1,academic_break:null,educations:[],language_certificates:[],powerful_recommendation:!1,publications:[],related_work_experience:null,target_country:null};case 13:return h=e.t0,g={search:x||"",target_levels:s?s.split(","):[],school_types:a?a.split(","):[],disciplines:t?null===t||void 0===t?void 0:t.split(",").map((function(e){return parseInt(e)})):[],discipline_categories:i?null===i||void 0===i?void 0:i.split(",").map((function(e){return parseInt(e)})):[],deadline:l||"",min_tuition_fee:c?parseInt(c):null,max_tuition_fee:d?parseInt(d):null,min_application_fee:u?parseInt(u):null,max_application_fee:p?parseInt(p):null,sort:m||"",countries:n?[parseInt(n)]:[]},e.next=17,(0,te.fK)(r.page?r.page:1,g,se(se({},h),{},{target_country:null===h||void 0===h||null===(f=h.target_country)||void 0===f?void 0:f.id}));case 17:v=e.sent,ye(v.count),xe(v.results),O(!1),e.next=29;break;case 23:e.prev=23,e.t1=e.catch(5),console.log(e.t1),O(!1),Pe(!0),xe([]);case 29:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(){return e.apply(this,arguments)}}(),rn={PaperProps:{style:{maxHeight:224,width:250}}},tn=function(e,n){ke(se(se({},_e),{},(0,i.Z)({},e,n)))};return(0,a.useEffect)((function(){nn(),r.page?je(parseInt(r.page)):je(1),r.search?w("program",r.search):w("program",""),r.sort?Ne(r.sort):Ne(""),he(!1),""===P("program")?tn("program",!1):tn("program",!0)}),[r]),(0,a.useEffect)((function(){Qe(),Ye(),en(),window.scroll({top:0,left:0,behavior:"instant"})}),[]),(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(oe.Z,{children:[(0,z.jsx)("div",{className:I().header}),(0,z.jsxs)(T.Z,{maxWidth:"lg",sx:{direction:"ir"===l?"rtl":"ltr",marginTop:$e?"150px":"70px",zIndex:3,position:"relative",marginBottom:"80px",padding:!$e&&0},children:[(0,z.jsx)(q.ZP,{mb:"16px",children:(0,z.jsx)(u.Z,{elevation:0,sx:{height:"87px",padding:"32px",display:{xs:"none",md:"flex"},alignItems:"center"},children:(0,z.jsx)(p.Z,{fontSize:"20px",fontWeight:500,children:Ge("explore:headingText")})})}),W&&$e&&(0,z.jsx)(re.Z,{close:function(){return ie(!W)}}),(0,z.jsxs)("div",{className:I().flexGeneral,children:[(0,z.jsx)(q.ZP,{component:"aside",sx:{flex:1,display:{sm:"none",md:"block",xs:"none"}},children:(0,z.jsx)(u.Z,{elevation:0,sx:{borderRadius:"12px",maxWidth:"300px",minWidth:"250px"},children:(0,z.jsx)(M,{disciplines:Ve,filteredDisciplines:Qe,majors:ce,disciplineFilter:en,countries:Le})})}),(0,z.jsxs)("main",{style:{flex:3},children:[(0,z.jsxs)(u.Z,{elevation:0,sx:{p:"16px",borderRadius:{xs:"32px 32px 0 0",md:"16px"},mt:{xs:"32px",md:0}},children:[(0,z.jsx)(p.Z,{fontSize:"20px",fontWeight:500,mb:"24px",sx:{display:{xs:"block",md:"none"},mt:"16px"},children:Ge("explore:headingText")}),(0,z.jsxs)("form",{onSubmit:C((function(e){n.push({pathname:"/explore",query:se(se({},n.query),{},{search:e.program,page:1})})})),style:{display:"flex",gap:"32px",justifyContent:"space-between"},children:[(0,z.jsx)(q.ZP,{sx:{width:{xs:"100%",md:"35%"}},children:(0,z.jsx)(V.Z,se(se({fullWidth:!0},f("program")),{},{error:!!y.program,InputProps:{endAdornment:(0,z.jsx)(J.Z,{position:"start",sx:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px"},children:(0,z.jsx)(x.Z,{type:"submit",sx:{ml:"ir"===l&&"8px",backgroundColor:"#0038FF",borderRadius:"8px",":hover":{backgroundColor:"#052ab0"}},children:(0,z.jsx)(Y.Z,{color:"warning"})})}),disableUnderline:!0,onFocus:function(e){return tn("program",!0)},onBlurCapture:function(e){""===Z().program?tn("program",!1):tn("program",!0)}},variant:"filled",label:(0,z.jsx)(z.Fragment,{children:(0,z.jsx)("span",{style:{marginRight:"ir"===l&&"2px",marginLeft:"ir"!==l&&"2px"},children:Ge("explore:programLabel")})}),sx:(e="program",{"& .MuiFilledInput-root":{border:"1px solid lightgray",overflow:"hidden",borderRadius:"10px",backgroundColor:"light"===He.palette.mode?"#fff":"#2b2b2b",transition:He.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&.Mui-focused":{backgroundColor:"#fff",borderColor:y[e]?"red":"#0038FF"}}}),InputLabelProps:function(e){return{shrink:_e[e],style:{color:_e[e]?"":"#2E536B",fontWeight:400,right:25,top:_e[e]?0:1,transformOrigin:"ir"===l&&"top right"}}}("program"),helperText:(null===y||void 0===y?void 0:y.program)&&y.program.message}))}),(0,z.jsx)(q.ZP,{sx:{display:{xs:"none",md:"block"},width:"35%"},children:(0,z.jsxs)("div",{className:I().sortContainer,style:{marginBottom:0},children:[(0,z.jsx)(h.Z,{htmlFor:"name-multiple",children:Ge("explore:sort")}),(0,z.jsx)(g.Z,{fullWidth:!0,labelId:"chip-label",id:"chip",label:Ge("explore:sort"),value:Me,onChange:function(e){var r=e.target.value;Ne(r),n.push({pathname:"/explore",query:se(se({},n.query),{},{sort:r})})},input:(0,z.jsx)(v.Z,{disableUnderline:!0,id:"select-sort"}),displayEmpty:!0,renderValue:function(e){var n;return""===e?(0,z.jsx)(p.Z,{fontSize:14,children:Ge("explore:choose")}):(0,z.jsx)("div",{className:I().inputChips,children:(0,z.jsx)(j.Z,{size:"small",sx:{backgroundColor:"#C6D2FE",borderRadius:"6px"},label:null===Xe||void 0===Xe||null===(n=Xe.find((function(e){return e.value===Me})))||void 0===n?void 0:n.name},e)})},MenuProps:rn,children:Xe.map((function(e){return(0,z.jsx)(b.Z,{value:e.value,children:(0,z.jsx)(p.Z,{children:e.name})},e.id)}))})]})})]})]}),!$e&&(0,z.jsxs)("div",{style:{flexDirection:"row",display:"flex",padding:"16px 0",gap:"16px",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[(0,z.jsxs)(_.Z,{size:"large",variant:"contained",color:"white",disableElevation:!0,sx:{width:"163px",height:"45px",gap:"8px",boxShadow:"0px 5px 15px 0px rgba(4, 9, 77, 0.05)"},onClick:function(){return Fe(!0)},children:[(0,z.jsx)(Q.Z,{})," ",Ge("explore:filters")]}),(0,z.jsxs)(_.Z,{size:"large",variant:"contained",color:"white",disableElevation:!0,sx:{width:"163px",height:"45px",gap:"8px",boxShadow:"0px 5px 15px 0px rgba(4, 9, 77, 0.05)"},onClick:function(){return De(!0)},children:[(0,z.jsx)(X.Z,{})," ",Ge("explore:sorting")]})]}),D?(0,z.jsx)(u.Z,{elevation:0,sx:{display:"flex",alignItems:"center",justifyContent:"center",p:"16px",mt:"24px"},children:(0,z.jsx)(H.Z,{sx:{textAlign:"center"}})}):we?(0,z.jsx)(u.Z,{className:I().programContainer,children:(0,z.jsx)(p.Z,{fontWeight:500,fontSize:24,children:"Something went wrong"})}):0===pe.length?(0,z.jsxs)(u.Z,{className:I().programContainer,children:[(0,z.jsx)("img",{src:"/images/cry-face.png",alt:"notfound"}),(0,z.jsx)("h4",{children:"No Results Found ..."}),(0,z.jsx)(_.Z,{variant:"contained",onClick:function(){n.push("/explore")},children:"Clear All Filters"})]}):(0,z.jsxs)(z.Fragment,{children:[pe.map((function(e){return(0,z.jsx)(le,{data:e,modalClick:function(e){Ue(e),he(!0)}},e.id)})),(0,z.jsx)("div",{className:I().flexCenter,style:{marginTop:"16px",padding:"16px"},children:(0,z.jsx)(N.Z,{size:$e?"medium":"small",count:Math.floor(Ze/10)+(Ze%10===0?0:1),color:"primary",page:ve,onChange:function(e,t){n.push({pathname:"/explore",query:se(se({},r),{},{page:t})})},renderItem:function(e){return(0,z.jsx)(G.Z,se({slots:{previous:"ir"===l?ne.Z:null,next:"ir"===l?ee.Z:null}},e))}})})]}),(0,z.jsx)($.Z,{anchor:"bottom",open:Ee,onClose:function(){return De(!1)},onOpen:function(){return De(!0)},PaperProps:{elevation:1,style:{borderRadius:"16px 16px 0 0"}},children:(0,z.jsxs)(K.Z,{sx:{padding:"16px",display:"flex",gap:"16px",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},children:[(0,z.jsx)(p.Z,{fontSize:18,fontWeight:500,children:"Sorting"}),(0,z.jsx)(m.Z,{}),(0,z.jsx)(_.Z,{onClick:function(){De(!1),n.push({pathname:"/explore",query:se(se({},n.query),{},{sort:"ascending"})})},children:(0,z.jsx)(p.Z,{children:"Lowest Tuition Fee"})}),(0,z.jsx)(m.Z,{}),(0,z.jsx)(_.Z,{onClick:function(){De(!1),n.push({pathname:"/explore",query:se(se({},n.query),{},{sort:"descending"})})},children:(0,z.jsx)(p.Z,{children:"Highest Tuition Fee"})})]})}),(0,z.jsx)($.Z,{anchor:"bottom",open:ze,onClose:function(){return Fe(!1)},onOpen:function(){return Fe(!0)},children:(0,z.jsx)(K.Z,{sx:{padding:"0",display:"flex",gap:"16px",flexDirection:"column",height:"100svh",direction:"ir"===l?"rtl":"ltr"},children:(0,z.jsx)(M,{disciplineFilter:en,disciplines:Ve,filteredDisciplines:Qe,majors:ce,mobile:!0,modal:function(){return Fe(!1)},countries:Le})})})]})]}),fe&&(0,z.jsx)(R.Z,{fixedSize:!0,canShow:fe,setCanShow:function(e){return he(e)},children:(0,z.jsx)(B.Z,{redirectionPath:{path:"/explore",button:Be}})})]})]})})}},49620:function(e,n,r){"use strict";var t=r(15436),i=r(40113),l=r(2121),o=r(24481),a=r(42087);n.Z=function(e){var n=(0,o.Z)().t;return(0,a.jsxs)(t.ZP,{sx:{background:"linear-gradient(139.77deg, #1430c1 14.82%, #0038ff 85.18%)",borderRadius:"20px",color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:{xs:"16px",sm:"32px"},gap:"16px",flexDirection:{xs:"column",sm:"row"}},children:[(0,a.jsxs)(t.ZP,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(i.Z,{variant:"text",onClick:e.close,sx:{alignSelf:{xs:"flex-end",sm:"center"}},children:(0,a.jsx)("img",{src:"/images/close-btn-white.svg",alt:"close-btn"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:n("common:estimateHeading")}),(0,a.jsx)("p",{children:n("common:estimateDescription")})]})]}),(0,a.jsx)(t.ZP,{children:(0,a.jsx)(i.Z,{variant:"contained",color:"white",disableElevation:!0,children:(0,a.jsx)(l.default,{href:"/consulting",children:n("common:estimateBtn")})})})]})}},55799:function(e,n,r){"use strict";var t=r(4682),i={January:"February",February:"March",March:"April",April:"May",May:"June",June:"July",July:"August",August:"September",September:"October",October:"November",November:"December",December:"January"};n.Z=function(){for(var e=(new Date).toLocaleString("en-US",{year:"numeric",month:"long"}).split(" "),n=(0,t.Z)(e,2),r=n[0],l=n[1],o=[],a=1;a<=24;a++)o.push({id:a,name:[l,r].join("-")}),"December"===r&&(l=parseInt(l)+1),r=i[r];return o}},90535:function(e,n,r){"use strict";var t=r(82461),i=r(58979),l=r(42087);n.Z=function(e){var n=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{mainLayout:!0}),n,(0,l.jsx)(i.Z,{})]})}},12576:function(e,n,r){"use strict";r.d(n,{fK:function(){return s},J$:function(){return c},AG:function(){return d},Jb:function(){return u},Zq:function(){return p}});var t=r(91761),i=r(61108),l=r.n(i),o=r(17924),a=r(30334),s=function(){var e=(0,t.Z)(l().mark((function e(n,r,t){var i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("".concat(o.Z.explorePrograms,"?page=").concat(n),{program_filters:r,chancing_filters:t});case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(o.Z.bookmarkProgram,{program:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(l().mark((function e(n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete(o.Z.removeBookmarkProgram,{data:{program:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/analyze/form/user-chance-params/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/data/account/countries/");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},76312:function(e){e.exports={header:"Explore_header__AOoCC",flexGeneral:"Explore_flexGeneral__17cYe",flexCenter:"Explore_flexCenter__27KNU",flexColumn:"Explore_flexColumn__23e5S",programContainer:"Explore_programContainer__1tRT_",form:"Explore_form__X15IA",filterContainer:"Explore_filterContainer__1P-sr",selectContainer:"Explore_selectContainer__2x-Q4",sortContainer:"Explore_sortContainer__22RRf",inputChips:"Explore_inputChips__1dmEC"}}}]);
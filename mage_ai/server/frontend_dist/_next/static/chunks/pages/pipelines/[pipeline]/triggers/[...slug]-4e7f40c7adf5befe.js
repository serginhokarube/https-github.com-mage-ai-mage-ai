(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{49894:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(82684),i=t(60328),o=t(67971),c=t(10919),l=t(86673),s=t(19711),u=t(10503),a=t(46313),d=t(23831),p=t(49125),h=a.default.div.withConfig({displayName:"indexstyle__ErrorPopupStyle",componentId:"sc-aqfw6f-0"})(["bottom:0;left:0;max-height:100vh;max-width:100vw;overflow:auto;padding:","px;position:fixed;z-index:100;",""],p.iI*p.cd,(function(e){return"\n    background-color: ".concat((e.theme.background||d.Z.background).page,";\n    border-right: 1px solid ").concat((e.theme.accent||d.Z.accent).negative,";\n    border-top: 1px solid ").concat((e.theme.accent||d.Z.accent).negative,";\n  ")})),f=t(28598);var g=function(e){var n=e.displayMessage,t=e.errors,a=e.onClose,d=e.response,p=(0,r.useState)(!1),g=p[0],m=p[1],x=t.messages,j=((null===d||void 0===d?void 0:d.error)||{}).errors;return(0,f.jsxs)(h,{children:[(0,f.jsx)(o.Z,{justifyContent:"flex-end",children:(0,f.jsx)(i.Z,{iconOnly:!0,noBorder:!0,noPadding:!0,onClick:a,title:"Close errors",children:(0,f.jsx)(u.x8,{})})}),(0,f.jsxs)(l.Z,{mt:1,children:[(0,f.jsx)(s.ZP,{bold:!0,large:!0,children:"Error"}),n&&(0,f.jsx)(l.Z,{mt:1,children:(0,f.jsx)(s.ZP,{default:!0,children:n})}),(null===x||void 0===x?void 0:x.length)&&(0,f.jsx)(l.Z,{mt:1,children:x.map((function(e){return(0,f.jsx)(s.ZP,{default:!0,monospace:!0,dangerouslySetInnerHTML:{__html:e.replaceAll(" ","&nbsp;")}},e)}))})]}),j&&(0,f.jsxs)(l.Z,{mt:3,children:[(0,f.jsxs)(s.ZP,{bold:!0,large:!0,children:["Stack trace (",(0,f.jsxs)(c.Z,{muted:!0,onClick:function(){return m((function(e){return!e}))},preventDefault:!0,children:[g?"hide":"show"," stack trace"]}),")"]}),g&&(0,f.jsx)(l.Z,{mt:1,children:j.map((function(e){return(0,f.jsx)(s.ZP,{default:!0,monospace:!0,dangerouslySetInnerHTML:{__html:e.replaceAll(" ","&nbsp;")}},e)}))})]})]})}},97496:function(e,n,t){"use strict";var r=t(12691),i=t.n(r),o=t(34376),c=t.n(o),l=t(60328),s=t(93461),u=t(10919),a=t(47409),d=t(17903),p=t(19711),h=t(10503),f=t(49125),g=t(28598);n.Z=function(e){var n=e.onClickRow,t=e.pipeline,r=e.pipelineRuns,o=((t||{}).uuid,[null,1,2,1,2,null]),m=[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return n&&(o.push(null),m.push({label:function(){return""},uuid:"action"})),(0,g.jsx)(d.Z,{columnFlex:o,columns:m,onClickRow:n,rows:r.map((function(e){var t=e.block_runs_count,r=e.completed_at,o=e.created_at,d=e.id,m=e.pipeline_schedule_id,x=e.pipeline_schedule_name,j=e.pipeline_uuid,v=e.status,b=[(0,g.jsx)(p.ZP,{monospace:!0,default:!0,children:o}),(0,g.jsx)(p.ZP,{danger:a.V.FAILED===v,default:a.V.CANCELLED===v,info:a.V.INITIAL===v,monospace:!0,success:a.V.COMPLETED===v,warning:a.V.RUNNING===v,children:v}),(0,g.jsx)(i(),{as:"/pipelines/".concat(j,"/triggers/").concat(m),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,g.jsx)(u.Z,{bold:!0,sameColorAsText:!0,children:x})}),(0,g.jsx)(p.ZP,{default:!0,monospace:!0,children:t}),(0,g.jsx)(p.ZP,{default:!0,monospace:!0,children:r||"-"}),(0,g.jsx)(l.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(j,"/logs?pipeline_run_id[]=").concat(d))},children:(0,g.jsx)(h.B4,{default:!0,size:2*f.iI})})];return n&&b.push((0,g.jsx)(s.Z,{flex:1,justifyContent:"flex-end",children:(0,g.jsx)(h._Q,{default:!0,size:2*f.iI})})),b})),uuid:"pipeline-runs"})}},70543:function(e,n,t){"use strict";t.d(n,{b:function(){return r}});var r="edit"},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(46313),i=t(23831),o=t(3055),c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},47409:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});var r=t(66050).V},22673:function(e,n,t){"use strict";var r=t(82684),i=t(73199),o=t.n(i),c=t(71735),l=t(46313),s=t(65292),u=t(23831),a=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,i=e.showLineNumbers,h=e.small,f=e.source,g=e.wrapLines,m=(0,r.useContext)(l.ThemeContext);return(0,p.jsx)(o(),{source:f,renderers:{code:function(e){var r=e.value;return(0,p.jsx)(c.Z,{customStyle:{backgroundColor:(m.background||u.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:h?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(m.content||u.Z.content).muted},language:n,showLineNumbers:i,style:s._4,useInlineStyles:!0,wrapLines:g,children:r})}}})}},69323:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Se}});var r,i=t(12757),o=t(77837),c=t(82394),l=t(38860),s=t.n(l),u=t(82684),a=t(83455),d=t(60328),p=t(87758),h=t(34744),f=t(67971),g=t(87372),m=t(88182),x=t(97496),j=t(93348),v=t(86673),b=t(17903),Z=t(19711),y=t(41374),P=t(2850),O=t(49125),w=t(10503),S=t(59920),_=t(24224);!function(e){e.AWS="aws_event"}(r||(r={}));var k=[{label:function(){return"AWS"},uuid:r.AWS}],I=(0,_.HK)(k,(function(e){return e.uuid})),C=t(58122),E=t(47452),D=t(7715),T=t(96510),N=t(66653),M=t(28598);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e){var n=e.fetchPipelineSchedule,t=e.pipeline,r=e.pipelineSchedule,o=e.variables,c=(t||{}).uuid,l=r||{},s=l.id,_=l.event_matchers,k=l.name,A=l.schedule_interval,z=l.start_time,H=l.status,V=l.variables,F=void 0===V?{}:V,U=y.ZP.pipeline_runs.pipeline_schedules.list(s).data,R=(0,u.useMemo)((function(){return(null===U||void 0===U?void 0:U.pipeline_runs)||[]}),[U]),B=(0,u.useMemo)((function(){return(0,M.jsx)(x.Z,{pipeline:t,pipelineRuns:R})}),[t,R]),W=(0,a.Db)((function(e){return y.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),q=(0,i.Z)(W,2),J=q[0],Y=q[1].isLoading,G=(0,u.useMemo)((function(){return j.fq.ACTIVE===H}),[H]),K=(0,u.useMemo)((function(){return(0,E.s)(r)}),[r]),X=(0,u.useMemo)((function(){var e={default:!0,size:1.5*O.iI},n=[[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.VW,L({},e)),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Trigger type"})]}),(0,M.jsx)(Z.ZP,{monospace:!0,children:K})],[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.rs,L({},e)),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Status"})]}),(0,M.jsx)(Z.ZP,{danger:!G,monospace:!0,success:G,children:H})]];return A&&n.push([(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.Pf,L({},e)),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Frequency"})]}),(0,M.jsx)(Z.ZP,{monospace:!0,children:A})]),z&&n.push([(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.aw,L({},e)),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Start date"})]}),(0,M.jsx)(Z.ZP,{monospace:!0,children:z})]),(0,M.jsx)(b.Z,{columnFlex:[null,1],rows:n})}),[G,A,z,K]),Q=(0,u.useMemo)((function(){return F||{}}),[F]),$=(0,u.useMemo)((function(){var e,n=[];return(0,D.Qr)(Q)?n=(0,C.wx)(o,(function(e){return"global"===e.uuid})):Object.entries(Q).forEach((function(e){var t=(0,i.Z)(e,2),r=t[0],o=t[1];n.push({uuid:r,value:(0,C.FS)(o)})})),"undefined"!==typeof n&&null!==(e=n)&&void 0!==e&&e.length?(0,M.jsx)(b.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,t=e.value;return[(0,M.jsx)(Z.ZP,{default:!0,monospace:!0,children:n}),(0,M.jsx)(Z.ZP,{monospace:!0,children:t})]}))}):null}),[F,o]),ee=(0,u.useMemo)((function(){return(0,M.jsx)(b.Z,{columnFlex:[null,1],columns:[{uuid:"Provider"},{uuid:"Event"}],rows:null===_||void 0===_?void 0:_.map((function(e){var n=e.event_type,t=e.name;return[(0,M.jsx)(Z.ZP,{default:!0,monospace:!0,children:I[n].label()}),(0,M.jsx)(Z.ZP,{monospace:!0,children:t})]}))})}),[_]);return(0,M.jsxs)(m.Z,{before:(0,M.jsxs)(P.M,{children:[(0,M.jsxs)(v.Z,{mb:O.HN,pt:O.cd,px:O.cd,children:[(0,M.jsxs)(v.Z,{mb:O.cd,children:[j.c0.SCHEDULE===K&&(0,M.jsx)(w.kO,{size:5*O.iI}),j.c0.EVENT===K&&(0,M.jsx)(w.Jp,{size:5*O.iI}),!K&&(0,M.jsx)(w.VW,{size:5*O.iI})]}),(0,M.jsx)(g.Z,{children:k})]}),(0,M.jsx)(v.Z,{px:O.cd,children:(0,M.jsx)(g.Z,{level:5,children:"Settings"})}),(0,M.jsx)(h.Z,{light:!0,mt:1,short:!0}),X,(null===_||void 0===_?void 0:_.length)>=1&&(0,M.jsxs)(v.Z,{my:O.HN,children:[(0,M.jsx)(v.Z,{px:O.cd,children:(0,M.jsx)(g.Z,{level:5,children:"Events"})}),(0,M.jsx)(h.Z,{light:!0,mt:1,short:!0}),ee]}),$&&(0,M.jsxs)(v.Z,{my:O.HN,children:[(0,M.jsx)(v.Z,{px:O.cd,children:(0,M.jsx)(g.Z,{level:5,children:"Runtime variables"})}),(0,M.jsx)(h.Z,{light:!0,mt:1,short:!0}),$]})]}),beforeWidth:34*O.iI,breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(c,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return k},linkProps:{as:"/pipelines/".concat(c,"/triggers/").concat(s),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],buildSidekick:function(e){return(0,M.jsx)(p.Z,L(L({},e),{},{noStatus:!0}))},pageName:S.M.TRIGGERS,pipeline:t,subheader:(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(d.Z,{beforeIcon:G?(0,M.jsx)(w.dz,{size:2*O.iI}):(0,M.jsx)(w.Py,{inverted:!0,size:2*O.iI}),danger:G,loading:Y,onClick:function(e){(0,N.j)(e),J({id:s,status:G?j.fq.INACTIVE:j.fq.ACTIVE})},outline:!0,success:!G,children:G?"Pause trigger":"Start trigger"}),(0,M.jsx)(v.Z,{mr:O.cd}),(0,M.jsx)(d.Z,{linkProps:{as:"/pipelines/".concat(c,"/triggers/").concat(s,"/edit"),href:"/pipelines/[pipeline]/triggers/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit trigger"})]}),title:function(){return k},uuid:"triggers/detail",children:[(0,M.jsx)(v.Z,{mt:O.cd,px:O.cd,children:(0,M.jsx)(g.Z,{level:5,children:"Pipeline runs"})}),(0,M.jsx)(h.Z,{light:!0,mt:O.cd,short:!0}),B]})},H=t(77555),V=t(44495),F=t(34376),U=t(47999),R=t(22673),B=t(49894),W=t(93461),q=t(10919),J=t(26304),Y=t(46313),G=t(23831),K=t(2005),X=t(31012),Q=["children","large","lineHeight","ordered"];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=(0,Y.css)([""," "," "," "," "," "," "," "," "," ",""],(function(e){return!e.muted&&"\n    color: ".concat((e.theme.content||G.Z.content).default,";\n  ")}),(function(e){return e.muted&&"\n    color: ".concat((e.theme.content||G.Z.content).muted,";\n  ")}),(function(e){return e.inverted&&"\n    color: ".concat((e.theme.content||G.Z.content).inverted,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return!e.monospace&&"\n    font-family: ".concat(K.ry,";\n  ")}),(function(e){return e.monospace&&"\n    font-family: ".concat(K.Vp,";\n  ")}),(function(e){return e.large&&"\n    ".concat(X.x_,"\n  ")}),(function(e){return!e.large&&!e.small&&"\n    ".concat(X.i3,"\n  ")}),(function(e){return e.small&&"\n    ".concat(X.J5,"\n  ")}),(function(e){return e.lineHeight&&"\n    line-height: ".concat(e.lineHeight,"px !important;\n  ")})),te=Y.default.ul.withConfig({displayName:"List__UnorderedListStyle",componentId:"sc-1f6yhbi-0"})(["",""],ne),re=Y.default.ol.withConfig({displayName:"List__OrderedListStyle",componentId:"sc-1f6yhbi-1"})(["",""],ne),ie=Y.default.li.withConfig({displayName:"List__ListItemStyle",componentId:"sc-1f6yhbi-2"})(["",""],(function(e){return e.large&&e.marginTop&&"\n    margin-top: ".concat(1*O.iI,"px;\n  ")}));var oe=function(e){var n=e.children,t=e.large,r=e.lineHeight,i=e.ordered,o=(0,J.Z)(e,Q),c=i?re:te;return(0,M.jsx)(c,ee(ee({large:t,lineHeight:r},o),{},{children:u.Children.map(n,(function(e,n){return(0,M.jsx)(ie,ee(ee({large:t,marginTop:n>=1},o),{},{children:u.cloneElement(e)}),e.props.key)}))}))},ce=t(55378),le=t(82944),se=t(69898),ue=["checked","onCheck"];function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var pe=Y.default.label.withConfig({displayName:"ToggleSwitch__ToggleSwitchStyle",componentId:"sc-179r5zs-0"})([""," position:relative;display:inline-block;width:","px;min-width:","px;height:",'px;& input[type="checkbox"]{display:none;}& span{position:absolute;cursor:',";background-color:",";border-radius:13px;",';top:0;right:0;bottom:0;left:0;transition:background-color 0.2s ease;}& span::before{position:absolute;content:"";left:2px;top:2px;width:22px;height:22px;background-color:#787A85;border-radius:50%;transition:transform 0.3s ease;}& input[type="checkbox"]:checked + span::before{transform:translateX(20px);}',""],se.p,46,46,26,(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?G.Z.monotone.white:G.Z.monotone.black}),(function(e){return e.disabled&&"border: 1px solid ".concat(G.Z.monotone.grey200)}),(function(e){return!e.disabled&&'\n    & input[type="checkbox"]:checked + span {\n      background-color: #6AA1E0;\n    }\n\n    & input[type="checkbox"]:checked + span::before {\n      background-color: '.concat(G.Z.monotone.white,";\n    }\n  ")})),he=function(e,n){var t=e.checked,r=e.onCheck,i=(0,J.Z)(e,ue);return(0,M.jsx)(se.Z,de(de({},i),{},{input:(0,M.jsxs)(pe,de(de({},i),{},{noBackground:!0,noBorder:!0,children:[(0,M.jsx)("input",{checked:t,type:"checkbox"}),(0,M.jsx)("span",{onClick:function(){return r((function(e){return!e}))}})]})),noBackground:!0,ref:n}))},fe=u.forwardRef(he),ge=t(73942),me=Y.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],ge.TR,14*O.iI,O.cd*O.iI,O.cd*O.iI,40*O.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||G.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||G.Z.interactive).linkPrimary,";\n  ")})),xe=Y.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;",""],ge.n_,O.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||G.Z.interactive).defaultBackground,";\n  ")}));function je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?je(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var be=[{label:function(){return"Schedule"},description:function(){return"This pipeline will run continuously on an interval or just once."},uuid:j.c0.SCHEDULE},{label:function(){return"Event"},description:function(){return"This pipeline will run when a specific event occurs"},uuid:j.c0.EVENT}];var Ze=function(e){var n=e.fetchPipelineSchedule,t=e.pipeline,r=e.pipelineSchedule,o=e.variables,l=(0,F.useRouter)(),s=null===t||void 0===t?void 0:t.uuid,p=null===r||void 0===r?void 0:r.id,x=(0,u.useState)(null),P=x[0],I=x[1],D=(0,u.useState)([]),N=D[0],A=D[1],L=(0,u.useState)(!1),z=L[0],J=L[1],Y=(0,u.useState)({}),G=Y[0],K=Y[1],X=(0,u.useState)(r),Q=X[0],$=X[1],ee=(0,u.useState)(!1),ne=ee[0],te=ee[1],re=Q||{},ie=re.name,se=re.schedule_interval,ue=(re.schedule_type,re.start_time),ae=re.variables,de=void 0===ae?{}:ae,pe=(0,u.useState)(null),he=pe[0],ge=pe[1],je=(0,u.useState)(null),Ze=je[0],ye=je[1],Pe=(0,u.useState)("00:00"),Oe=Pe[0],we=Pe[1],Se=y.ZP.event_rules.detail("aws").data,_e=(0,u.useMemo)((function(){return(null===Se||void 0===Se?void 0:Se.event_rules)||[]}),[Se]),ke=(0,u.useMemo)((function(){return(0,_.HK)(_e,(function(e){return e.name}))}),[_e]),Ie=(0,a.Db)(y.ZP.pipeline_schedules.useUpdate(p),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(){n(),l.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(s,"/triggers/").concat(p))},onErrorCallback:function(e,n){return I({errors:n,response:e})}})}}),Ce=(0,i.Z)(Ie,2),Ee=Ce[0],De=Ce[1].isLoading,Te=(0,u.useMemo)((function(){return de||{}}),[de]);(0,u.useEffect)((function(){if(ue){var e=ue.split(" ")[1],n=new Date(ue),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());ye(new Date(t)),we(e.substring(0,5))}}),[ue]),(0,u.useEffect)((function(){Te&&Object.keys(Te).length>0&&J(!0)}),[Te]),(0,u.useEffect)((function(){if(o){var e=(0,C.wx)(o,(function(e){return"global"===e.uuid}));K(z?null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.uuid,r=n.value;return ve(ve({},e),{},(0,c.Z)({},t,Te[t]||r))}),{}):null)}}),[z]),(0,u.useEffect)((function(){r&&(A(r.event_matchers),$(r),ge((0,E.s)(r)))}),[r]);var Ne=(0,u.useCallback)((function(){var e=Ze&&Oe?"".concat(Ze.toISOString().split("T")[0]," ").concat(Oe,":00"):null,n={event_matchers:N,name:ie,schedule_interval:se,start_time:e,variables:(0,C.e7)(G)};Ee({pipeline_schedule:n})}),[Ze,N,ie,G,se,Oe,Ee]),Me=(0,u.useMemo)((function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(v.Z,{mb:2,px:O.cd,children:[(0,M.jsx)(g.Z,{children:"Settings"}),(0,M.jsx)(Z.ZP,{muted:!0,children:"Configure schedule details."})]}),(0,M.jsx)(h.Z,{light:!0,short:!0}),(0,M.jsx)(b.Z,{columnFlex:[null,1],rows:[[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.KJ,{default:!0,size:1.5*O.iI}),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Trigger name"})]}),(0,M.jsx)(le.Z,{monospace:!0,onChange:function(e){e.preventDefault(),$((function(n){return ve(ve({},n),{},{name:e.target.value})}))},placeholder:"Name this trigger",value:ie})],[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.Pf,{default:!0,size:1.5*O.iI}),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Frequency"})]}),(0,M.jsxs)(ce.Z,{monospace:!0,onChange:function(e){e.preventDefault(),$((function(n){return ve(ve({},n),{},{schedule_interval:e.target.value})}))},placeholder:"Choose the frequency to run",value:se,children:[!se&&(0,M.jsx)("option",{value:""}),Object.values(j.U5).map((function(e){return(0,M.jsx)("option",{value:e,children:e},e)}))]})],[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.aw,{default:!0,size:1.5*O.iI}),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Start date and time"})]}),(0,M.jsxs)(W.Z,{flexDirection:"column",children:[(0,M.jsx)(le.Z,{monospace:!0,onClick:function(){return te((function(e){return!e}))},placeholder:"YYYY-MM-DD HH:MM",value:Ze?"".concat(Ze.toISOString().split("T")[0]," ").concat(Oe):""}),(0,M.jsx)("div",{style:{position:"absolute",zIndex:100},children:(0,M.jsx)(U.Z,{disableEscape:!0,onClickOutside:function(){return te(!1)},open:ne,children:(0,M.jsxs)(xe,{children:[(0,M.jsx)(V.ZP,{onChange:ye,value:Ze}),(0,M.jsx)(v.Z,{mb:2}),(0,M.jsx)(le.Z,{label:"Time (UTC)",monospace:!0,onChange:function(e){e.preventDefault(),we(e.target.value)},paddingVertical:12,value:Oe})]})})})]})]]})]})}),[Ze,Q,ne,Oe]),Ae=(0,u.useCallback)((function(e,n){A((function(t){return Object.entries(n).forEach((function(n){var r=(0,i.Z)(n,2),o=r[0],c=r[1];t[e][o]=c})),(0,H.Z)(t)}))}),[A]),Le=(0,u.useMemo)((function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(v.Z,{mb:O.cd,px:O.cd,children:[(0,M.jsx)(g.Z,{children:"Settings"}),(0,M.jsx)(Z.ZP,{muted:!0,children:"Configure trigger details."})]}),(0,M.jsx)(h.Z,{light:!0,short:!0}),(0,M.jsx)(b.Z,{columnFlex:[null,1],rows:[[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(w.KJ,{default:!0,size:1.5*O.iI}),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(Z.ZP,{default:!0,children:"Trigger name"})]}),(0,M.jsx)(le.Z,{monospace:!0,onChange:function(e){e.preventDefault(),$((function(n){return ve(ve({},n),{},{name:e.target.value})}))},placeholder:"Name this trigger",value:ie})]]}),(0,M.jsxs)(v.Z,{mb:2,mt:5,px:O.cd,children:[(0,M.jsx)(g.Z,{children:"Events"}),(0,M.jsxs)(Z.ZP,{muted:!0,children:["Add 1 or more event that will trigger this pipeline to run.",(0,M.jsx)("br",{}),"If you add more than 1 event, this pipeline will trigger if any of the events are received."]}),(0,M.jsxs)(v.Z,{mt:O.Mq,children:[(0,M.jsx)(Z.ZP,{bold:!0,large:!0,children:"AWS events"}),(0,M.jsxs)(Z.ZP,{muted:!0,children:["In order to retrieve all the possible AWS events you can trigger your pipeline from,",(0,M.jsx)("br",{}),"you\u2019ll need to set 3 environment variables (",(0,M.jsx)(q.Z,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html",openNewWindow:!0,underline:!0,children:"more info here"}),"):"]}),(0,M.jsx)(v.Z,{mt:1,children:(0,M.jsxs)(oe,{monospace:!0,ordered:!0,children:[(0,M.jsx)(Z.ZP,{monospace:!0,children:"AWS_REGION_NAME"}),(0,M.jsx)(Z.ZP,{monospace:!0,children:"AWS_ACCESS_KEY_ID"}),(0,M.jsx)(Z.ZP,{monospace:!0,children:"AWS_SECRET_ACCESS_KEY"})]})})]})]}),(0,M.jsx)(h.Z,{light:!0,short:!0}),(null===N||void 0===N?void 0:N.length)>=1&&(0,M.jsx)(b.Z,{alignTop:!0,columnFlex:[1,1,2,null],columns:[{uuid:"Provider"},{uuid:"Event"},{uuid:"Pattern"},{label:function(){return""},uuid:"delete"}],rows:null===N||void 0===N?void 0:N.map((function(e,n){var t=e.event_type,r=e.name,i=e.pattern,o=e.id||"".concat(t,"-").concat(r,"-").concat(n,"-").concat(JSON.stringify(i)),c=[];return i&&JSON.stringify(i,null,2).split("\n").forEach((function(e){c.push("    ".concat(e))})),[(0,M.jsxs)(ce.Z,{monospace:!0,onChange:function(e){return Ae(n,{event_type:e.target.value})},placeholder:"Event provider",value:t||"",children:[!t&&(0,M.jsx)("option",{value:""}),k.map((function(e){var n=e.label,t=e.uuid;return(0,M.jsx)("option",{value:t,children:n()},t)}))]},"event-provider-".concat(o)),(0,M.jsxs)(ce.Z,{monospace:!0,onChange:function(e){var t,r=e.target.value,i=null===(t=ke[r])||void 0===t?void 0:t.event_pattern;Ae(n,{name:r,pattern:i?JSON.parse(i):null})},placeholder:"Event name",value:r,children:[!r&&(0,M.jsx)("option",{value:""}),_e.map((function(e){var n=e.name;return(0,M.jsx)("option",{value:n,children:n},n)}))]},"event-name-".concat(o)),i&&(0,M.jsx)(R.Z,{language:"json",small:!0,source:c.join("\n")}),(0,M.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return A((function(e){return(0,_.oM)(e,n)}))},children:(0,M.jsx)(w.rF,{default:!0,size:2*O.iI})})]}))}),(0,M.jsx)(v.Z,{p:O.cd,children:(0,M.jsx)(d.Z,{beforeIcon:(0,M.jsx)(w.mm,{size:2*O.iI}),onClick:function(){return A((function(e){return e.concat({})}))},outline:!0,children:"Add event matcher"})})]})}),[N,_e,ie]),ze=(0,u.useMemo)((function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(v.Z,{mr:2,children:(0,M.jsx)(fe,{checked:z,onCheck:J})}),(0,M.jsx)(Z.ZP,{monospace:!0,muted:!0,children:"Overwrite global variables"})]}),z&&G&&Object.entries(G).length>0&&(0,M.jsx)(v.Z,{mt:2,children:(0,M.jsx)(b.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(G).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,M.jsx)(Z.ZP,{default:!0,monospace:!0,children:t}),(0,M.jsx)(le.Z,{borderless:!0,monospace:!0,onChange:function(e){e.preventDefault(),K((function(n){return ve(ve({},n),{},(0,c.Z)({},t,e.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:r})]}))})})]})}),[z,G,J]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(m.Z,{after:(0,M.jsx)(v.Z,{p:O.cd,children:ze}),breadcrumbs:[{label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(s,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{label:function(){return null===r||void 0===r?void 0:r.name},linkProps:{as:"/pipelines/".concat(s,"/triggers/").concat(p),href:"/pipelines/[pipeline]/triggers/[...slug]"}}],pageName:S.M.TRIGGERS,pipeline:t,subheader:(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(d.Z,{loading:De,onClick:function(){return Ne()},outline:!0,primary:!0,children:"Save changes"}),(0,M.jsx)(v.Z,{mr:1}),(0,M.jsx)(d.Z,{noHoverUnderline:!0,linkProps:{href:"/pipelines/[pipeline]/triggers/[...slug]",as:"/pipelines/".concat(s,"/triggers/").concat(p)},outline:!0,sameColorAsText:!0,children:"Cancel"})]}),title:function(){return"Edit ".concat(null===r||void 0===r?void 0:r.name)},uuid:"triggers/edit",children:[(0,M.jsxs)(v.Z,{p:O.cd,children:[(0,M.jsxs)(v.Z,{mb:2,children:[(0,M.jsx)(g.Z,{children:"Trigger type"}),(0,M.jsx)(Z.ZP,{muted:!0,children:"How would you like this pipeline to be triggered?"})]}),(0,M.jsx)(f.Z,{children:be.map((function(e){var n=e.label,t=e.description,r=e.uuid,i=he===r,o=he&&!i;return(0,M.jsx)(d.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return ge(r)},children:(0,M.jsx)(me,{selected:i,children:(0,M.jsxs)(f.Z,{alignItems:"center",children:[(0,M.jsx)(W.Z,{children:(0,M.jsx)("input",{checked:i,type:"radio"})}),(0,M.jsx)(v.Z,{mr:O.cd}),(0,M.jsxs)(W.Z,{alignItems:"flex-start",flexDirection:"column",children:[(0,M.jsx)(g.Z,{default:!i&&!o,bold:!0,level:5,muted:!i&&o,children:n()}),(0,M.jsx)(Z.ZP,{default:!i&&!o,leftAligned:!0,muted:o,children:t()})]})]})})},r)}))})]}),(0,M.jsxs)(v.Z,{mt:5,children:[j.c0.SCHEDULE===he&&Me,j.c0.EVENT===he&&Le]})]}),P&&(0,M.jsx)(B.Z,ve(ve({},P),{},{onClose:function(){return I(null)}}))]})},ye=t(70543);function Pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Pe(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function we(e){var n=e.pipelineScheduleId,t=e.pipelineUUID,r=e.subpath,i=y.ZP.variables.pipelines.list(t).data,o=null===i||void 0===i?void 0:i.variables,c=y.ZP.pipeline_schedules.detail(n,{include_event_matchers:!0}),l=c.data,s=c.mutate,u=null===l||void 0===l?void 0:l.pipeline_schedule,a=y.ZP.pipelines.detail(t).data,d=Oe(Oe({},null===a||void 0===a?void 0:a.pipeline),{},{uuid:t});return ye.b===r?(0,M.jsx)(Ze,{fetchPipelineSchedule:s,pipeline:d,pipelineSchedule:u,variables:o}):(0,M.jsx)(z,{fetchPipelineSchedule:s,pipeline:d,pipelineSchedule:u,variables:o})}we.getInitialProps=function(){var e=(0,o.Z)(s().mark((function e(n){var t,r,o,c,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.query,r=t.pipeline,o=t.slug,!Array.isArray(o)){e.next=5;break}return c=(0,i.Z)(o,2),l=c[0],u=c[1],e.abrupt("return",{pipelineScheduleId:l,pipelineUUID:r,subpath:u});case 5:return e.abrupt("return",{pipelineUUID:r});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Se=we},95488:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers/[...slug]",function(){return t(69323)}])}},function(e){e.O(0,[5339,2083,6776,7875,7619,4495,2874,3903,7578,5981,5584,7758,91,3694,9774,2888,179],(function(){return n=95488,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
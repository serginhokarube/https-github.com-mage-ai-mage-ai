(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7803],{66757:function(n,e,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function l(n,e){return 1===arguments.length?u(n):s(n,e)}function u(n){const e=c.getItem(n);return o(e)}function s(n,e){try{return c.setItem(n,JSON.stringify(e)),!0}catch(t){return!1}}l.set=s,l.get=u,l.remove=function(n){return c.removeItem(n)},l.clear=function(){return c.clear()},l.backend=function(n){return n&&(c=n),c},l.on=i.on,l.off=i.off,n.exports=l},94178:function(n){"use strict";n.exports=function(n){const e=function(n){try{return JSON.parse(n)}catch(e){return n}}(n);return void 0===e?null:e}},19319:function(n){"use strict";var e={};n.exports={getItem:function(n){return n in e?e[n]:null},setItem:function(n,t){return e[n]=t,!0},removeItem:function(n){return!!(n in e)&&delete e[n]},clear:function(){return e={},!0}}},67240:function(n,e,t){"use strict";var r=t(94178),o={};function i(n){n||(n=t.g.event);var e=o[n.key];e&&e.forEach((function(e){e(r(n.newValue),r(n.oldValue),n.url||n.uri)}))}n.exports={on:function(n,e){o[n]?o[n].push(e):o[n]=[e],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(n,e){var t=o[n];t.length>1?t.splice(t.indexOf(e),1):o[n]=[]}}},17903:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),l=t(67971),u=t(10919),s=t(86673),a=t(19711),d=t(46261),f=t(9518),p=t(23831),m=t(49125),v=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return n.columnBorders&&"\n    border-collapse: separate;\n  "})),h=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),b=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(m.iI/2,"px ").concat(m.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(m.iI,"px ").concat(2*m.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),x=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),g=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],b,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),j=t(28598);function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=function(n){var e=n.alignTop,t=n.buildLinkProps,r=n.columnBorders,o=n.columnFlex,f=n.columnMaxWidth,p=n.columns,m=void 0===p?[]:p,b=n.compact,Z=n.isSelectedRow,k=n.noBorder,I=n.noHeader,w=n.onClickRow,_=n.rows,P=n.stickyFirstColumn,N=n.stickyHeader,O=n.uuid,E=n.wrapColumns,C=(0,c.useMemo)((function(){return o.reduce((function(n,e){return n+(e||0)}),0)}),o),M=(0,c.useCallback)((function(n){if(o[n]){var e=Math.round(o[n]/C*100);return"".concat(e,"%")}return null}),[]),S=(0,c.useMemo)((function(){return null===_||void 0===_?void 0:_.map((function(n,o){var c=null===t||void 0===t?void 0:t(o),l=n.map((function(t,i){return(0,j.jsx)(g,{alignTop:e,columnBorders:r,compact:b,last:i===n.length-1,maxWidth:null===f||void 0===f?void 0:f(i),noBorder:k,selected:null===Z||void 0===Z?void 0:Z(o),stickyFirstColumn:P&&0===i,width:M(i),wrapColumns:E,children:t},"".concat(O,"-row-").concat(o,"-cell-").concat(i))})),s=(0,j.jsx)(h,{noHover:!(c||w),onClick:w?function(){return w(o)}:null,children:l},"".concat(O,"-row-").concat(o));return c?(0,j.jsx)(i(),y(y({},c),{},{passHref:!0,children:(0,j.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:s})})):s}))}),[e,t,M,f,m,b,Z,k,w,_]);return(0,j.jsxs)(v,{columnBorders:r,children:[(null===m||void 0===m?void 0:m.length)>=1&&!I&&(0,j.jsx)(h,{noHover:!0,children:m.map((function(n,e){return(0,j.jsx)(x,{columnBorders:r,compact:b,last:e===m.length-1,noBorder:k,sticky:N,children:(0,j.jsxs)(l.Z,{alignItems:"center",children:[(0,j.jsx)(a.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,j.jsx)(s.Z,{ml:"4px",children:(0,j.jsx)(d.Z,{appearBefore:!0,label:(0,j.jsx)(a.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(O,"-col-").concat(n.uuid,"-").concat(e))}))}),S]})}},66050:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running"}(r||(r={}))},47409:function(n,e,t){"use strict";t.d(e,{D:function(){return c},V:function(){return i}});var r,o=t(82394),i=t(66050).V,c=(r={},(0,o.Z)(r,i.CANCELLED,"Cancelled"),(0,o.Z)(r,i.COMPLETED,"Done"),(0,o.Z)(r,i.FAILED,"Failed"),(0,o.Z)(r,i.INITIAL,"Ready"),(0,o.Z)(r,i.RUNNING,"Running"),r)},89745:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return tn}});var r=t(77837),o=t(38860),i=t.n(o),c=t(82684),l=t(38965),u=t(12757),s=t(82394),a=t(93461),d=t(67971),f=t(87372),p=t(47409),m=t(86673),v=t(54283),h=t(19711),b=t(23831),x=t(10503),g=t(9518),j=t(73942),Z=t(2005),y=t(49125),k=t(31012),I=g.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-15svh8z-0"})(["border-radius:","px;margin:","px;overflow:hidden;"," "," "," "," "," "," &:hover{"," "," "," "," ","}"],j.n_,y.cd*y.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||b.Z.background).panel,";\n    border: 1px solid ").concat((n.theme.borders||b.Z.borders).dark,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(n){return n.selected&&n.danger&&"\n    border-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n  ")}),(function(n){return n.selected&&n.primary&&"\n    border-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.default&&"\n    border-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n  ")}),(function(n){return n.selected&&n.success&&"\n    border-color: ".concat((n.theme.background||b.Z.background).success,";\n  ")}),(function(n){return n.selected&&n.warning&&"\n    border-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n  ")}),(function(n){return n.danger&&"\n      border-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n    ")}),(function(n){return n.primary&&"\n      border-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n    ")}),(function(n){return n.default&&"\n      border-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n    ")}),(function(n){return n.success&&"\n      border-color: ".concat((n.theme.background||b.Z.background).success,";\n    ")}),(function(n){return n.warning&&"\n      border-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n    ")})),w=(0,g.css)([""," "," "," "," ",""],(function(n){return n.danger&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n  ")}),(function(n){return n.primary&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.success&&"\n    background-color: ".concat((n.theme.background||b.Z.background).success,";\n  ")}),(function(n){return n.warning&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n  ")})),_=g.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-15svh8z-1"})([""," ",";border-radius:","px;display:inline-block;font-family:",";padding:6px;"," "," "," "," "," ",""],w,k.iD,j.D7,Z.ry,(function(n){return n.danger&&"\n    color: ".concat((n.theme.content||b.Z.content).active,";\n  ")}),(function(n){return n.primary&&"\n    color: ".concat((n.theme.content||b.Z.content).active,";\n  ")}),(function(n){return(n.default||n.success)&&"\n  "}),(function(n){return n.default&&"\n    color: ".concat((n.theme.content||b.Z.content).default,";\n  ")}),(function(n){return n.success&&"\n    color: ".concat((n.theme.content||b.Z.content).inverted,";\n  ")}),(function(n){return n.warning&&"\n    color: ".concat((n.theme.content||b.Z.content).inverted,";\n  ")})),P=g.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-15svh8z-2"})([""," display:flex;height:auto;width:3px;",""],w,(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n  ")})),N=t(90211),O=t(92083),E=t.n(O),C=t(66050),M=t(24224);function S(n){var e;return Object.keys((null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{}).sort()}function D(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=null,i=null,c=null,l=null,s={},a=(null===n||void 0===n?void 0:n.block_runs)||[],d=(null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{},f=(null===n||void 0===n||null===(t=n.metrics)||void 0===t?void 0:t.pipeline)||{},p=L(n);return Object.entries(d).forEach((function(n){var e,t=(0,u.Z)(n,2),a=t[0],d=t[1];if(!r||r===a){var m,v=d||{},h=v.destinations,b=void 0===h?{records_affected:null,records_inserted:null,records_updated:null}:h,x=v.sources,g=void 0===x?{records:null}:x,j=p[a]||[];if(r&&r===a&&j.every((function(n){var e=n.status;return C.V.COMPLETED===e}))&&null===o&&(o=0),null!==f&&void 0!==f&&null!==(e=f[a])&&void 0!==e&&e.record_counts)null===o&&(o=0),o+=Number(null===f||void 0===f||null===(m=f[a])||void 0===m?void 0:m.record_counts);else null!==g&&void 0!==g&&g.records&&(null===o&&(o=0),o+=Number(g.records));null!==b&&void 0!==b&&b.records_updated?(null===c&&(c=0),c+=Number(b.records_updated),null===l&&(l=0),l+=Number(b.records_updated)):null!==b&&void 0!==b&&b.records_inserted?(null===c&&(c=0),c+=Number(b.records_inserted),null===i&&(i=0),i+=Number(b.records_inserted)):null!==b&&void 0!==b&&b.records_affected&&(null===c&&(c=0),c+=Number(b.records_affected)),["destinations","sources"].forEach((function(n){var e=d[n]||{};null!==e&&void 0!==e&&e.error&&(s[a]||(s[a]={}),s[a][n]={error:null===e||void 0===e?void 0:e.error,errors:null===e||void 0===e?void 0:e.errors,message:null===e||void 0===e?void 0:e.message})}))}})),null===a||void 0===a||a.forEach((function(n){var e=n.block_uuid,t=n.metrics,r=n.status;if(C.V.FAILED===r&&null!==t&&void 0!==t&&t.error&&e){var o=e.split(":"),i=(0,u.Z)(o,3),c=(i[0],i[1]);i[2];s[c]||(s[c]={}),s[c][""]=t.error}})),{errors:s,records:o,recordsInserted:i,recordsProcessed:c,recordsUpdated:l}}function L(n){var e=n.block_runs,t={};return null===e||void 0===e||e.forEach((function(n){var e=n.block_uuid.split(":"),r=(0,u.Z)(e,3),o=(r[0],r[1]);r[2];t[o]||(t[o]=[]),t[o].push(n)})),t}function V(n){var e=L(n),t={};return Object.entries(e).forEach((function(n){var e=(0,u.Z)(n,2),r=e[0],o=e[1],i=o.filter((function(n){var e=n.status;return C.V.COMPLETED===e})),c=i.map((function(n){var e=n.completed_at,t=n.started_at,r=E().utc(e),o=E().utc(t);return r.diff(o,"second")})),l=i.length,s=o.length;t[r]={completed:l,runtime:c.length>=1?(0,M.Sm)(c)/c.length:null,total:s}})),t}function T(n){var e=n.block_runs,t=(null===e||void 0===e?void 0:e.length)||1,r=function(n){var e=(null===n||void 0===n?void 0:n.block_runs)||[];return null===e||void 0===e?void 0:e.filter((function(n){var e=n.status;return C.V.COMPLETED===e}))}(n).length||0;return r/t}function A(n){var e=n.completed_at,t=n.block_runs,r=void 0===t?[]:t,o=n.status;if(null===r||void 0===r||!r.length)return 0;var i=E().utc();if(e)i=E().utc(e);else if([p.V.CANCELLED,p.V.FAILED].includes(o)){var c=(0,M.YC)(r,(function(n){return n.started_at}),{ascending:!1})[0];i=E().utc(c.updated_at)}var l=E().utc(n.created_at);return i.diff(l,"second")}function R(n,e){var t,r,o,i,c,l=L(n),u=V(n),s=(null===n||void 0===n?void 0:n.metrics)||{blocks:null,pipeline:null},a=s.blocks||{},d=s.pipeline||{},f=(a[e],d[e],u[e]||{completed:null,total:null}),p=f.completed,m=f.total,v=p&&m?p/m:0,h=l[e]||[],b=h.every((function(n){var e=n.status;return C.V.COMPLETED===e})),x=(0,M.YC)(h,(function(n){return n.updated_at}),{ascending:!1})[0],g=null===(t=(0,M.YC)(h,(function(n){return n.started_at}),{ascending:!0})[0])||void 0===t?void 0:t.started_at;b?r=null===(c=(0,M.YC)(h,(function(n){return n.completed_at}),{ascending:!1})[0])||void 0===c?void 0:c.completed_at:x&&(i=null===x||void 0===x?void 0:x.updated_at);var j=b?E().utc(r||i):E().utc(),Z=E().utc(g);return{completed:p,completedAt:r,done:b,progress:v,runtime:o=j.diff(Z,"second"),startedAt:g,status:null===x||void 0===x?void 0:x.status,timeText:(0,N.zf)(o),total:m,updatedAt:i}}var B=t(28598);function z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function F(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var U=function(n){var e=n.onSelect,t=n.pipelineRun,r=n.selected,o=(t.block_runs,t.created_at),i=t.status,l=(0,c.useMemo)((function(){return(null===t||void 0===t?void 0:t.metrics)||{blocks:{},destination:null,pipeline:{},source:null}}),[t]),s=((0,c.useMemo)((function(){return l.blocks||{}}),[l]),(0,c.useMemo)((function(){return l.pipeline||{}}),[l])),g=l.destination,j=l.source,Z=(0,c.useMemo)((function(){return Object.keys(s).length}),[s]),k=(0,c.useMemo)((function(){return D(t)}),[t]),w=k.errors,O=k.records,E=k.recordsProcessed,C=(0,c.useMemo)((function(){return T(t)}),[t]),M=(0,c.useMemo)((function(){return[p.V.COMPLETED].includes(i)}),[i]),S=(0,c.useMemo)((function(){return{danger:p.V.FAILED===i,default:p.V.INITIAL===i,primary:p.V.RUNNING===i,success:M,warning:p.V.CANCELLED===i}}),[M,i]),L=(0,c.useMemo)((function(){if(t){var n=A(t);return(0,N.zf)(n)}}),[t]);return(0,B.jsx)(I,F(F({},S),{},{onClick:function(){return e(r?null:t.id)},selected:r,children:(0,B.jsxs)(d.Z,{fullHeight:!0,justifyContent:"space-between",children:[(0,B.jsx)(P,F({},S)),(0,B.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,B.jsxs)(m.Z,{ml:3,py:3,children:[(0,B.jsx)(f.Z,{bold:!0,level:5,monospace:!0,children:o}),(0,B.jsx)(m.Z,{fullWidth:!1,mt:2,children:(0,B.jsx)(_,F(F({},S),{},{children:(0,B.jsxs)(d.Z,{alignItems:"center",children:[M&&(0,B.jsx)(x.Jr,{inverted:!0,size:2*y.iI}),[p.V.INITIAL,p.V.RUNNING].includes(i)&&(0,B.jsx)(v.Z,{color:p.V.INITIAL!==i?b.Z.monotone.white:null,inverted:p.V.INITIAL===i,small:!0}),"\xa0",p.V.RUNNING===i&&(0,B.jsxs)(B.Fragment,{children:["\xa0",Math.round(100*C),"%"]}),![p.V.INITIAL,p.V.RUNNING].includes(i)&&p.D[i],p.V.INITIAL===i&&"Starting"]})}))}),Object.values(w).length>=1&&(0,B.jsx)(m.Z,{mt:1,children:Object.entries(w).map((function(n,e){var t=(0,u.Z)(n,2),r=t[0];t[1];return(0,B.jsxs)(h.ZP,{monospace:!0,muted:!0,small:!0,children:[r," stream failed"]},r)}))})]})}),(0,B.jsxs)(a.Z,{flex:1,children:[(0,B.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,B.jsxs)(m.Z,{ml:3,py:3,children:[(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Rows processed"}),(0,B.jsx)(h.ZP,{monospace:!0,children:E>=1?(0,N.x6)(E):"-"})]}),(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Rows remaining"}),(0,B.jsx)(h.ZP,{monospace:!0,children:O>=1&&O>=E?(0,N.x6)(O-E):"-"})]}),p.V.RUNNING!==i&&(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Runtime"}),(0,B.jsx)(h.ZP,{monospace:!0,children:L})]})]})}),(0,B.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,B.jsxs)(m.Z,{ml:3,py:3,children:[(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Source"}),(0,B.jsx)(h.ZP,{monospace:!0,children:j||"-"})]}),(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Destination"}),(0,B.jsx)(h.ZP,{monospace:!0,children:g||"-"})]}),(0,B.jsxs)(m.Z,{mb:1,children:[(0,B.jsx)(h.ZP,{bold:!0,muted:!0,small:!0,children:"Streams"}),(0,B.jsx)(h.ZP,{monospace:!0,children:Z>=1?(0,N.x6)(Z):"-"})]})]})})]})]})}))},G=t(34376),H=t(60328),W=t(10919),Y=t(17903),J=g.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1thr560-0"})(["display:flex;flex:1;"," "," ",""],(function(n){return n.even&&n.fill&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).cyan,";\n  ")}),(function(n){return n.even&&!n.fill&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).cyanTransparent,";\n  ")}),(function(n){return"\n    height: ".concat((n.small?1:2)*y.iI,"px;\n  ")})),X=t(66653);var q=function(n){var e=n.onClickRow,t=n.pipelineRun,r=n.selectedStream,o=(0,G.useRouter)(),i=(0,c.useState)(null),l=i[0],s=i[1],a=(0,c.useState)(null),v=a[0],b=a[1],g=(0,c.useMemo)((function(){return t?L(t):{}}),[t]),j=(0,c.useMemo)((function(){return t?V(t):{}}),[t]),Z=(0,c.useMemo)((function(){var n=0,e=[],t=[];if(Object.entries(j).forEach((function(r){var o=(0,u.Z)(r,2),i=(o[0],o[1]),c=i.completed,l=i.runtime,s=i.total;null===l?t.push(i):(e.push(l),n+=l*(s-c))})),0===e.length)return null;var r=(0,M.Sm)(e)/e.length;return t.forEach((function(e){var t=e.completed,o=e.total;n+=r*(o-t)})),n}),[j]),k=(0,c.useMemo)((function(){return r?j[r]:null}),[j,r]),I=(0,c.useMemo)((function(){if(r&&j){var n=j[r]||{},e=n.completed,o=n.total;if(o>=1)return e/o}else if(t)return T(t);return 0}),[k,t,r]),w=(0,c.useMemo)((function(){return(0,B.jsx)(d.Z,{children:(0,M.w6)(101).map((function(n,e){return(0,B.jsx)(J,{fill:I>0&&Math.round(100*I)>=e,even:e%2===0},e)}))})}),[I]),_=(0,c.useMemo)((function(){if(r){var n=g[r]||[],e=n.every((function(n){var e=n.status;return C.V.COMPLETED===e})),o=(0,M.YC)(n,(function(n){return n.updated_at}),{ascending:!1})[0],i=null===o||void 0===o?void 0:o.status,c=k||{},l=c.completed,u=c.runtime,s=c.total;if(e)return"Sync complete for ".concat(r);if([C.V.CANCELLED,C.V.FAILED].includes(i))return p.D[i];if(u&&s>=1){var a=Math.ceil(u*(s-l)/60);return"".concat((0,N._6)("minute",a,!0)," to completion")}return"Estimating time remaining for stream..."}if(p.V.COMPLETED===(null===t||void 0===t?void 0:t.status))return"Sync complete";if(t){if([p.V.CANCELLED,p.V.FAILED].includes(null===t||void 0===t?void 0:t.status))return p.D[null===t||void 0===t?void 0:t.status];if(p.V.INITIAL===(null===t||void 0===t?void 0:t.status))return"Initializing sync (this can take several minutes)";if(null===Z)return"Estimating time remaining...";var d=Math.ceil(Z/60);return"".concat((0,N._6)("minute",d,!0)," to completion")}return"Select a sync"}),[g,Z,k,t,r]),P=(0,c.useMemo)((function(){return t&&r?R(t,r):{completed:null,completedAt:null,done:null,progress:null,runtime:null,startedAt:null,status:null,timeText:null,total:null,updatedAt:null}}),[t,r]);(0,c.useEffect)((function(){var n;if(t){var e=A(t);s(e),n=setInterval((function(){return s((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[t]),(0,c.useEffect)((function(){var n;if(t&&r&&P){var e=null===P||void 0===P?void 0:P.runtime;b(e),n=setInterval((function(){return b((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[t,r,P]);var O=(0,c.useMemo)((function(){if(t){if(r)return null===P||void 0===P?void 0:P.timeText;var n=A(t);return(0,N.zf)(n)}}),[t,r,P]),E=(0,c.useMemo)((function(){var n=Math.floor(l%86400/3600),e=Math.floor(l%3600/60),t=Math.floor(l%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),t>=10?String(t):"0".concat(t)].join(":")}),[l]),z=(0,c.useMemo)((function(){var n=Math.floor(v%86400/3600),e=Math.floor(v%3600/60),t=Math.floor(v%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),t>=10?String(t):"0".concat(t)].join(":")}),[v]),F=(0,c.useMemo)((function(){return t?D(t):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[t]),U=F.errors,q=F.records,K=F.recordsInserted,Q=F.recordsProcessed,$=F.recordsUpdated,nn=(0,c.useMemo)((function(){return t&&r?D(t,r):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[t,r]),en=(0,c.useMemo)((function(){var n=r?null===nn||void 0===nn?void 0:nn.records:q,e=r?null===nn||void 0===nn?void 0:nn.recordsInserted:K,t=r?null===nn||void 0===nn?void 0:nn.recordsProcessed:Q,o=r?null===nn||void 0===nn?void 0:nn.recordsUpdated:$,i=[{label:"Rows fetched",value:null===n?"-":(0,N.x6)(n)}];return null===e&&null===o?i.push({label:"Rows processed",value:null===t?"-":(0,N.x6)(t)}):null!==e?i.push({label:"Rows inserted",value:(0,N.x6)(e)}):null!==o&&i.push({label:"Rows updated",value:(0,N.x6)(o)}),i.map((function(n){var e=n.label,t=n.value;return(0,B.jsxs)("div",{children:[(0,B.jsx)(h.ZP,{bold:!0,large:!0,muted:!0,children:e}),(0,B.jsx)(h.ZP,{headline:!0,children:t})]},e)}))}),[q,nn,K,Q,$,O,E,status]),tn=(0,c.useMemo)((function(){if(!t)return(0,B.jsx)("div",{});var n=(null===t||void 0===t?void 0:t.metrics)||{blocks:null,pipeline:null},i=(n.blocks,n.pipeline,S(t));return(0,B.jsx)(Y.Z,{columnFlex:[null,null,null,null,null,null],columns:[{uuid:"Stream"},{uuid:"Start"},{uuid:"End"},{uuid:"Time"},{uuid:"Progress"},{uuid:"Logs"}],isSelectedRow:function(n){return r&&r===i[n]},onClickRow:e,rows:i.map((function(n){var e=R(t,n),r=(e.completed,e.completedAt),i=e.done,c=e.progress,l=e.startedAt,u=e.status,s=e.timeText,a=(e.total,!!U[n]);return[(0,B.jsx)(h.ZP,{danger:a,default:!a,monospace:!0,children:n},"stream"),(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:l?l.split(".")[0]:"-"},"started_at"),(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:r?r.split(".")[0]:"-"},"completed_at"),(0,B.jsx)(h.ZP,{default:!0,children:[C.V.INITIAL,C.V.RUNNING].includes(u)?"-":s},"runtime"),(0,B.jsxs)("div",{children:[i&&(0,B.jsx)(x.Jr,{default:!0,size:2*y.iI}),!i&&(0,B.jsx)(d.Z,{children:(0,M.w6)(51).map((function(n,e){return(0,B.jsx)(J,{fill:c>0&&Math.round(50*c)>=e,even:e%2===0,small:!0},e)}))})]},"progress"),(0,B.jsx)(H.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(n){o.push("/pipelines/".concat(t.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(t.id)),(0,X.j)(n)},children:(0,B.jsx)(x.B4,{default:!0,size:2*y.iI})},"logs")]})),uuid:"{pipelineRun?.id}-streams-table"})}),[U,j,t,r]),rn=(0,c.useMemo)((function(){var n,e,o,i,c,l,s,a;if(t&&r){var d=(null===t||void 0===t?void 0:t.metrics)||{blocks:null,destination:null,pipeline:null,source:null},f=null===d||void 0===d||null===(n=d.pipeline)||void 0===n||null===(e=n[r])||void 0===e||null===(o=e.bookmarks)||void 0===o?void 0:o[r],p=null===d||void 0===d||null===(i=d.blocks)||void 0===i||null===(c=i[r])||void 0===c||null===(l=c.destinations)||void 0===l||null===(s=l.state)||void 0===s||null===(a=s.bookmarks)||void 0===a?void 0:a[r];if(f||p){var m=Array.from(new Set(Object.keys(f||{}).concat(Object.keys(p||{})))).sort(),v=[];m.forEach((function(n){var e=[(0,B.jsx)(h.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[f,p].forEach((function(t,r){t&&e.push((0,B.jsx)(h.ZP,{monospace:!0,small:!0,children:t[n]},"".concat(n,"-").concat(r)))})),v.push(e)}));var b=[{label:function(){return""},uuid:"column"}];return[[null===d||void 0===d?void 0:d.source,"source",f],[null===d||void 0===d?void 0:d.destination,"destination",p]].forEach((function(n){var e=(0,u.Z)(n,3),t=e[0],r=e[1];e[2]&&b.push({uuid:"".concat(t," (").concat(r,")")})})),(0,B.jsx)(Y.Z,{columnFlex:[null,1,1],columns:b,rows:v,uuid:"".concat(r,"-bookmark-table")})}}}),[t,r]),on=(0,c.useMemo)((function(){var n,e,o,i,c,l;if(t&&r){var s=(null===t||void 0===t?void 0:t.metrics)||{blocks:null,destination:null,pipeline:null,source:null},a=null===s||void 0===s||null===(n=s.blocks)||void 0===n||null===(e=n[r])||void 0===e||null===(o=e.sources)||void 0===o?void 0:o.record,d=null===s||void 0===s||null===(i=s.blocks)||void 0===i||null===(c=i[r])||void 0===c||null===(l=c.destinations)||void 0===l?void 0:l.record;if(a||d){var f=Object.keys(d||a||{}).sort(),p=[];f.forEach((function(n){var e=[(0,B.jsx)(h.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[a,d].forEach((function(t,r){if(t){var o=t[n],i="object"===typeof o;e.push((0,B.jsxs)(h.ZP,{monospace:!0,small:!0,textOverflow:!0,whiteSpaceNormal:!0,wordBreak:!0,children:[i&&(0,B.jsx)("pre",{children:JSON.stringify(o,null,2)}),!i&&o]},"".concat(n,"-").concat(r)))}})),p.push(e)}));var m=[{label:function(){return""},uuid:"column"}];return[[null===s||void 0===s?void 0:s.source,"source",a],[null===s||void 0===s?void 0:s.destination,"destination",d]].forEach((function(n){var e=(0,u.Z)(n,3),t=e[0],r=e[1];e[2]&&m.push({uuid:"".concat(t," (").concat(r,")")})})),(0,B.jsx)(Y.Z,{columnFlex:[null,1,1],columns:m,rows:p.map((function(n){return n.map((function(n){return(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:n},n)}))})),uuid:"".concat(r,"-bookmark-table")})}}}),[t,r]),cn=(0,c.useMemo)((function(){var n,e,o,i,c,l,u=null===t||void 0===t||null===(n=t.metrics)||void 0===n||null===(e=n.blocks)||void 0===e?void 0:e[r];return(null===u||void 0===u||null===(o=u.sources)||void 0===o||null===(i=o.block_tags)||void 0===i?void 0:i.destination_table)||(null===u||void 0===u||null===(c=u.destinations)||void 0===c||null===(l=c.block_tags)||void 0===l?void 0:l.destination_table)}),[t,r]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(m.Z,{p:3,children:[r&&(0,B.jsx)(m.Z,{mb:3,children:(0,B.jsxs)(d.Z,{alignItems:"center",children:[(0,B.jsx)(W.Z,{block:!0,onClick:function(){return o.push("/pipelines/".concat(t.pipeline_uuid,"/syncs?pipeline_run_id=").concat(t.id))},preventDefault:!0,children:(0,B.jsxs)(d.Z,{alignItems:"center",children:[(0,B.jsx)(x.Xd,{default:!0,size:1.5*y.iI}),(0,B.jsx)(m.Z,{mr:1}),(0,B.jsx)(h.ZP,{default:!0,children:"Syncs"})]})}),(0,B.jsx)(m.Z,{mx:1,children:(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:"/"})}),(0,B.jsx)(h.ZP,{bold:!0,monospace:!0,children:r})]})}),(0,B.jsxs)(d.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(m.Z,{my:1,mr:2,children:(0,B.jsx)(f.Z,{level:5,muted:!t,children:_})}),t&&(0,B.jsx)(H.Z,{small:!0,onClick:function(){return o.push("/pipelines/".concat(t.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(t.id))},children:"Logs"})]}),(0,B.jsx)(m.Z,{mt:2,children:w}),t&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(m.Z,{mt:3,children:(0,B.jsxs)(d.Z,{justifyContent:"space-between",children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(h.ZP,{bold:!0,large:!0,muted:!0,children:"Runtime"}),(0,B.jsxs)(h.ZP,{headline:!0,children:[r&&[C.V.INITIAL,C.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&z,r&&![C.V.INITIAL,C.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&(null===P||void 0===P?void 0:P.timeText),!r&&[p.V.INITIAL,p.V.RUNNING].includes(null===t||void 0===t?void 0:t.status)&&E,!r&&![p.V.INITIAL,p.V.RUNNING].includes(null===t||void 0===t?void 0:t.status)&&O]})]}),en]})}),Object.values(U).length>=1&&(0,B.jsxs)(m.Z,{mt:3,children:[(0,B.jsx)(f.Z,{level:5,muted:!0,children:"Errors"}),Object.entries(U).map((function(n,e){var t=(0,u.Z)(n,2),o=t[0],i=t[1];return(!r||r===o)&&(0,B.jsx)(m.Z,{mt:e>=1?1:0,children:Object.entries(i).map((function(n){var e=(0,u.Z)(n,2),t=e[0],r=e[1],i=r.error,c=r.errors,l=r.message;return(0,B.jsxs)("div",{children:[(0,B.jsxs)(h.ZP,{monospace:!0,children:[o,!!t&&(0,B.jsxs)(h.ZP,{inline:!0,monospace:!0,muted:!0,children:["\xa0(",t,")"]}),": ",(0,B.jsx)(h.ZP,{default:!0,inline:!0,monospace:!0,children:i})]}),(0,B.jsx)(h.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:l}),c.map((function(n){return(0,B.jsx)(h.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:n},n)}))]},"".concat(o,"-").concat(t))}))},o)}))]})]})]}),t&&!r&&(0,B.jsx)(m.Z,{my:3,children:tn}),t&&r&&(0,B.jsxs)(B.Fragment,{children:[cn&&(0,B.jsx)(m.Z,{my:3,children:(0,B.jsxs)(m.Z,{px:3,children:[(0,B.jsx)(f.Z,{level:5,children:"Table name"}),(0,B.jsx)(m.Z,{mt:1,children:(0,B.jsx)(h.ZP,{default:!0,monospace:!0,children:cn})})]})}),rn&&(0,B.jsxs)(m.Z,{my:3,children:[(0,B.jsx)(m.Z,{px:3,children:(0,B.jsx)(f.Z,{level:5,children:"Bookmarks"})}),(0,B.jsx)(m.Z,{px:1,children:rn})]}),on&&(0,B.jsxs)(m.Z,{my:3,children:[(0,B.jsx)(m.Z,{px:3,children:(0,B.jsx)(f.Z,{level:5,children:"Sample row"})}),(0,B.jsx)(m.Z,{px:1,children:on})]})]})]})},K=t(41374),Q=t(59920),$=t(33766),nn=t(59e3);function en(n){var e=n.pipeline,t=e.uuid,r=K.ZP.pipeline_runs.list({_limit:20,_offset:0,pipeline_uuid:t},{refreshInterval:5e3}),o=r.data,i=(r.mutate,(0,c.useMemo)((function(){return(null===o||void 0===o?void 0:o.pipeline_runs)||[]}),[o])),u=(0,nn.iV)(),s=(0,c.useState)(null),a=s[0],d=s[1],f=(0,c.useState)(null),p=f[0],m=f[1];(0,c.useEffect)((function(){null!==u&&void 0!==u&&u.pipeline_run_id?m(null===i||void 0===i?void 0:i.find((function(n){return n.id===Number(u.pipeline_run_id)}))):p&&m(null),null!==u&&void 0!==u&&u.stream?d(u.stream):a&&d(null)}),[i,u,p,a]);var v=(0,c.useCallback)((function(){var n=p?S(p):[];return(0,B.jsx)(q,{onClickRow:function(e){var t=n[e];(0,$.u)({stream:a===t?null:t})},pipelineRun:p,selectedStream:a})}),[p,a]),h=(0,c.useMemo)((function(){var n="/pipelines/".concat(t,"/syncs");p&&(n="".concat(n,"?pipeline_run_id=").concat(p.id));var e=[{label:function(){return"Syncs"},linkProps:a?{as:n,href:"/pipelines/[pipeline]/syncs"}:null}];return a&&e.push({label:function(){return a}}),e}),[p,a]);return(0,B.jsx)(l.Z,{breadcrumbs:h,buildSidekick:v,pageName:Q.M.SYNCS,pipeline:e,title:function(n){var e=n.name;return"".concat(e," syncs")},uuid:"".concat(Q.M.TRIGGERS,"_").concat(t),children:i.map((function(n){var e=(null===p||void 0===p?void 0:p.id)===n.id;return(0,B.jsx)(U,{onSelect:function(n){return(0,$.u)({pipeline_run_id:n,stream:null})},pipelineRun:n,selected:e},n.id)}))})}en.getInitialProps=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var tn=en},33766:function(n,e,t){"use strict";t.d(e,{u:function(){return a}});var r=t(12757),o=t(82394),i=t(34376),c=t.n(i),l=t(59e3);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.replaceParams,i=t.pushHistory,u=o?{}:(0,l.iV)();e=window.location.pathname;var a=i?c().push:c().replace,d=s(s({},u),n);Object.entries(n).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],o=e[1];"undefined"!==typeof o&&null!==o||delete d[t]}));var f=(0,l.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(e.split("?")[0]).concat(f);return a(c().router.pathname,p,{shallow:!0})}},59416:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/syncs",function(){return t(89745)}])}},function(n){n.O(0,[4259,2212,7689,1374,714,4247,7343,8965,9774,2888,179],(function(){return e=59416,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
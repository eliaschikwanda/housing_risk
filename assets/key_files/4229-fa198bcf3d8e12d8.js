(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4229],{78261:function(e,t,r){"use strict";var l=r(15190),i=r.n(l);let n={"fire-community-risk":[{colors:["#445563","#FEF0C8","#FFBE2E","#E66F0E","#D54309","#632713"],labels:["Minimal","Minor","Moderate","Major","Severe","Extreme"],title:"Risk levels"}],"pdp-fire-community-risk":[{colors:["#FFBE2E","#F3971E","#E66F0E","#9C3D10","#632713"],labels:["Minor","Moderate","Major","Severe","Extreme"],title:"Risk levels"}],"fire-current-future-probability":[{colors:[i()("#fef0c8").alpha(.65).toString(),i()("#FFBE2E").alpha(.65).toString(),i()("#f3971e").alpha(.65).toString(),i()("#e66f0e").alpha(.65).toString(),i()("#D54309").alpha(.65).toString(),i()("#632713").alpha(.65).toString()],labels:["<0.1%","0.5%","1%","2%","5%+"],title:"% likelihood of being in wildfire",labelAlignment:"right"}],"wildfire-flame-likelihood":[{colors:[i()("#fef0c8").alpha(.65).toString(),i()("#FFBE2E").alpha(.65).toString(),i()("#f3971e").alpha(.65).toString(),i()("#e66f0e").alpha(.65).toString(),i()("#D54309").alpha(.65).toString(),i()("#632713").alpha(.65).toString()],labels:["<0.1%","0.5%","1%","2%","5%+"],title:"Wildfire flame likelihood"}],"fire-current-future-ember-exposure":[{colors:[i()("#fef0c8").alpha(.65).toString(),i()("#FFBE2E").alpha(.65).toString(),i()("#f3971e").alpha(.65).toString(),i()("#e66f0e").alpha(.65).toString(),i()("#D54309").alpha(.65).toString(),i()("#632713").alpha(.65).toString()],labels:["<0.1%","0.5%","1%","2%","5%+"],title:"Ember likelihood"}],"fire-current-future-average-intensity":[{colors:[i()("#FEF0C8").alpha(.65).toString(),i()("#FFBE2E").alpha(.65).toString(),i()("#F3971E").alpha(.65).toString(),i()("#E66F0E").alpha(.65).toString(),i()("#D54309").alpha(.65).toString(),i()("#632713").alpha(.65).toString()],labels:["0","2","4","8","12","20+"],title:"Average expected flame length (ft.)"}],"fire-current-future-max-intensity":[{colors:[i()("#FEF0C8").alpha(.65).toString(),i()("#FFBE2E").alpha(.65).toString(),i()("#F3971E").alpha(.65).toString(),i()("#E66F0E").alpha(.65).toString(),i()("#D54309").alpha(.65).toString(),i()("#632713").alpha(.65).toString()],labels:["0","2","4","8","12","20+"],title:"Max expected flame length (ft.)"}],"flood-community-risk":[{colors:["#445563","#A1D3FF","#58B4FF","#2672DE","#222FBF","#212463"],labels:["Minimal","Minor","Moderate","Major","Severe","Extreme"],title:"Risk levels"}],"pdp-flood-community-risk":[{colors:["#58B4FF","#2491FF","#2672DE","#222FBF","#212463"],labels:["Minor","Moderate","Major","Severe","Extreme"],title:"Property Risk levels"}],"flood-current-future":[{colors:[i()("#A1D3FF").alpha(.65).toString(),i()("#58B4FF").alpha(.65).toString(),i()("#2672DE").alpha(.65).toString(),i()("#222FBF").alpha(.65).toString(),i()("#212463").alpha(.65).toString()],labels:["0","0.5","1","2","3+"],title:"Depth of flooding (ft.)"}],"heat-current-future-hot-days":[{colors:[i()("#FEE0D8").alpha(.65).toString(),i()("#FFD3C6").alpha(.65).toString(),i()("#FFB8A3").alpha(.65).toString(),i()("#FC8871").alpha(.65).toString(),i()("#F75565").alpha(.65).toString(),i()("#E13759").alpha(.65).toString(),i()("#C11154").alpha(.65).toString(),i()("#9F0F46").alpha(.65).toString(),i()("#8A1B36").alpha(.65).toString(),i()("#561420").alpha(.65).toString()],labels:["","6","7","8","12","16","20","24","28","32+"],title:"Days above {hotTemperature}℉"}],"heat-current-future-max-temp":[{colors:[i()("#FEE0D8").alpha(.65).toString(),i()("#FFD3C6").alpha(.65).toString(),i()("#FFB8A3").alpha(.65).toString(),i()("#FC8871").alpha(.65).toString(),i()("#F75565").alpha(.65).toString(),i()("#E13759").alpha(.65).toString(),i()("#C11154").alpha(.65).toString(),i()("#9F0F46").alpha(.65).toString(),i()("#8A1B36").alpha(.65).toString(),i()("#561420").alpha(.65).toString()],labels:["","80","83","86","89","92","95","98","104","110+"],title:"Max temperature (F\xba)"}],"wind-historic":[{colors:[i()("#D2EEEF").alpha(.65).toString(),i()("#A5DDDF").alpha(.65).toString(),i()("#79CCD0").alpha(.65).toString(),i()("#4DBBC0").alpha(.65).toString(),i()("#1FAAB0").alpha(.65).toString(),i()("#178084").alpha(.65).toString(),i()("#105558").alpha(.65).toString(),i()("#082B2C").alpha(.65).toString()],labels:["50","60","80","100","120","140","160","180+"],title:"3-second wind gust speed (mph)"}],"wind-current-future":[{colors:[i()("#D2EEEF").alpha(.65).toString(),i()("#A5DDDF").alpha(.65).toString(),i()("#79CCD0").alpha(.65).toString(),i()("#4DBBC0").alpha(.65).toString(),i()("#1FAAB0").alpha(.65).toString(),i()("#178084").alpha(.65).toString(),i()("#105558").alpha(.65).toString(),i()("#082B2C").alpha(.65).toString()],labels:["50","60","80","100","120","140","160","180+"],title:"3-second wind gust speed (mph)"}],"air-quality-unhealthy-days":[{colors:[i()("#EBD2EF").alpha(.65).toString(),i()("#D7A5DF").alpha(.65).toString(),i()("#C479D0").alpha(.65).toString(),i()("#B04CC0").alpha(.65).toString(),i()("#9C1FB0").alpha(.65).toString(),i()("#751784").alpha(.65).toString(),i()("#4E1058").alpha(.65).toString(),i()("#27082C").alpha(.65).toString()],labels:["0","3","5","8","11","15","19","23+"],title:"Number of unhealthy days per year"}],"heat-locality-risk":[{colors:[i()("#FEE0D8").alpha(.65).toString(),i()("#FFB8A3").alpha(.65).toString(),i()("#FC8871").alpha(.65).toString(),i()("#F75565").alpha(.65).toString(),i()("#C11154").alpha(.65).toString(),i()("#561420").alpha(.65).toString()],labels:["Minimal","Minor","Moderate","Major","Severe","Extreme"],title:"Heat Locality Risk"}],"wind-locality-risk":[{colors:[i()("#D2EEEF").alpha(.65).toString(),i()("#A5DDDF").alpha(.65).toString(),i()("#79CCD0").alpha(.65).toString(),i()("#178084").alpha(.65).toString(),i()("#082b2c").alpha(.65).toString()],labels:["Minor","Moderate","Major","Severe","Extreme"],title:"Wind Locality Risk"}],"air-locality-risk":[{colors:[i()("#D7A5DF").alpha(.65).toString(),i()("#C479D0").alpha(.65).toString(),i()("#9C1FB0").alpha(.65).toString(),i()("#751784").alpha(.65).toString(),i()("#27082C").alpha(.65).toString()],labels:["Minor","Moderate","Major","Severe","Extreme"],title:"Air Locality Risk"}]};t.Z=n},14960:function(e,t,r){"use strict";let l=(0,r(94660).Ue)(e=>({inView:!0,notInView:()=>e({inView:!1}),onReset:()=>e({inView:!0})}));t.Z=l},26466:function(e,t,r){"use strict";let l=(0,r(94660).Ue)(e=>({inView:null,onView:t=>e({inView:t}),onNotInView:()=>e({inView:null})}));t.Z=l},21428:function(e,t,r){"use strict";function l(e){if((null==e?void 0:e.length)>0&&Array.isArray(e)){let t=null==e?void 0:e.find(e=>(null==e?void 0:e.relativeYear)===0);return null==t?void 0:t.count}return"0"}function i(e){if((null==e?void 0:e.length)>0&&Array.isArray(e)){let t=null==e?void 0:e.find(e=>(null==e?void 0:e.relativeYear)===30);return null==t?void 0:t.count}return"0"}function n(e,t){if((null==e?void 0:e.length)>0&&Array.isArray(e)&&t){let r=e.find(e=>(null==e?void 0:e.relativeYear.toString())===t.toString());if(r&&void 0!==r.point||0===r.point)return r.point}return"UNKNOWN"}function a(e,t){if(!e||!e.length||0===e.length)return"0";let r=t||"30",l=e.find(e=>e.relativeYear===parseInt(r));return l&&l.count?l.count:""}function o(e){var t,r,l;if(!e||"object"!=typeof e)return"";let i=null==e?void 0:null===(t=e.totalProperties)||void 0===t?void 0:t.totalCount;if(!i)return"";let n=a(null==e?void 0:null===(l=e.fire)||void 0===l?void 0:null===(r=l.probability)||void 0===r?void 0:r.count);return n?n/i*100:""}function s(e){return("string"==typeof e&&(e=parseFloat(e)),isNaN(e)||!e)?"UNKNOWN":e<2.1?"low":e>2&&e<9.1?"medium":e>9?"high":"UNKNOWN"}r.d(t,{Rs:function(){return a},Y$:function(){return o},a$:function(){return i},fn:function(){return n},qX:function(){return s},zJ:function(){return l}})},51448:function(e,t,r){"use strict";function l(e){if(!e||Array.isArray(e))return"UNKNOWN";let t=(null==e?void 0:e.month)||null,r=(null==e?void 0:e.year)||null,l={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[null==t?void 0:t.toString()];return l&&r?"".concat(l,", ").concat(r):!l&&r?"".concat(r):"UNKNOWN"}function i(e,t){if(!e||!Array.isArray(e))return"UNKNOWN";if(Array.isArray(e)&&0===e.length)return"0";let r=e.filter(e=>e.relativeYear===parseInt(t)&&100===e.returnPeriod);return r&&r.reduce((e,t)=>t.mid+e,0)}function n(e){if(!e||!Array.isArray(e))return"UNKNOWN";if(Array.isArray(e)&&0===e.length)return"0";let t=e.filter(e=>0===e.relativeYear&&100===e.returnPeriod);return t&&t.reduce((e,t)=>t.mid+e,0)}function a(e){if(!e||!Array.isArray(e))return"UNKNOWN";if(Array.isArray(e)&&0===e.length)return"0";let t=e.filter(e=>30===e.relativeYear&&100===e.returnPeriod);return t&&t.reduce((e,t)=>t.mid+e,0)}function o(e,t){if(e&&Array.isArray(e)&&e.length>0){let r=e.filter(e=>(null==e?void 0:e.depth)&&e.depth>0),i=r.length>0?r.reduce((e,t)=>(null==e?void 0:e.year)>(null==t?void 0:t.year)?e:t):null==e?void 0:e.reduce((e,t)=>(null==e?void 0:e.year)>(null==t?void 0:t.year)?e:t);switch(i&&t){case"name":return(null==i?void 0:i.name)&&(null==i?void 0:i.name)||"UNKNOWN";case"date":return(null==i?void 0:i.month)&&(null==i?void 0:i.year)&&l(i)||"UNKNOWN";case"affectedProperties":return(null==i?void 0:i.affectedProperties)&&(null==i?void 0:i.affectedProperties)||"UNKNOWN";case"depth":return(null==i?void 0:i.depth)&&(null==i?void 0:i.depth)||"UNKNOWN";default:return i}}return"UNKNOWN"}function s(e){var t,r;if(!e||"object"!=typeof e)return"";let l=null==e?void 0:null===(t=e.totalProperties)||void 0===t?void 0:t.totalCount;if(!l)return"";let i=null==e?void 0:null===(r=e.totalAtRiskFlood)||void 0===r?void 0:r.totalCount;return i?i/l*100:""}r.d(t,{Ov:function(){return i},YK:function(){return a},cE:function(){return o},p6:function(){return l},r8:function(){return n},wb:function(){return s}})},42518:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var l=r(86838),i=r(2265);function n(){let{unlocked:e}=(0,i.useContext)(l.$);return{isUnlocked:e}}},86838:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});let l=(0,r(2265).createContext)({unlocked:!1})},89954:function(e,t,r){"use strict";function l(e){return("string"==typeof e&&(e=parseFloat(e)),isNaN(e))?e:Math.round(621371e-9*e)}r.d(t,{a:function(){return l}})},79171:function(e,t,r){"use strict";function l(e){return e>0&&e<13?["January","February","March","April","May","June","July","August","September","October","November","December"][e-1]:null}r.d(t,{R:function(){return l}})},17216:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var l=r(57437),i=r(2265),n=r(63650),a=r(54440),o=r.n(a),s=r(10700),c=r(61396),d=r.n(c),u=r(70281),h=r(77662),f=r(15191).default,p=r(14960),x=r(69354),m=r(98745);let v=e=>{let{color:t="defaultColor"}=e,r="#2C3740";return"white"===t&&(r="#FFFFFF"),"disabled"===t&&(r="#d1d6d9"),(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19.7071 9.21435L11.707 0.32546C11.5672 0.170068 11.389 0.0642393 11.1951 0.0213589C11.0011 -0.0215216 10.8 0.000471821 10.6173 0.0845578C10.4346 0.168644 10.2784 0.311046 10.1686 0.493755C10.0587 0.676463 10 0.891272 10 1.11102V5.04982C7.26832 5.33076 4.72927 6.7342 2.87974 8.98551C1.0302 11.2368 0.00330851 14.1739 2.93404e-09 17.2221V18.8888C-1.59013e-05 19.1196 0.0646265 19.3446 0.184953 19.5327C0.30528 19.7207 0.47532 19.8625 0.671469 19.9383C0.867618 20.0141 1.08014 20.0202 1.27954 19.9557C1.47894 19.8912 1.65531 19.7593 1.78418 19.5784C2.76383 18.2839 3.96584 17.2192 5.31998 16.4467C6.67412 15.6742 8.15324 15.2093 9.67093 15.0791C9.72073 15.0721 9.84573 15.0612 10 15.0504V18.8888C10 19.1085 10.0587 19.3234 10.1686 19.5061C10.2784 19.6888 10.4346 19.8312 10.6173 19.9153C10.8 19.9993 11.0011 20.0213 11.1951 19.9785C11.389 19.9356 11.5672 19.8298 11.707 19.6744L19.7071 10.7855C19.7999 10.6823 19.8736 10.5599 19.9239 10.4251C19.9741 10.2903 20 10.1458 20 9.99991C20 9.85401 19.9741 9.70954 19.9239 9.57475C19.8736 9.43996 19.7999 9.3175 19.7071 9.21435ZM12 16.2065V13.8888C12.0001 13.7429 11.9742 13.5984 11.924 13.4636C11.8737 13.3287 11.8001 13.2062 11.7072 13.103C11.6143 12.9999 11.5041 12.918 11.3828 12.8622C11.2614 12.8064 11.1314 12.7777 11 12.7777C10.7451 12.7777 9.70413 12.8325 9.43851 12.8721C6.74309 13.148 4.17737 14.2858 2.05177 16.1479C2.2929 13.6972 3.33919 11.4314 4.99028 9.78443C6.64137 8.13749 8.78121 7.22515 11 7.22213C11.1314 7.22217 11.2614 7.19345 11.3828 7.13763C11.5041 7.0818 11.6143 6.99996 11.7072 6.89678C11.8001 6.79359 11.8737 6.67109 11.924 6.53627C11.9742 6.40144 12.0001 6.25694 12 6.11102V3.79331L17.586 9.99991L12 16.2065Z",fill:r})})},g=e=>{let{color:t="defaultColor"}=e,r="#2C3740";return"white"===t&&(r="#FFFFFF"),"disabled"===t&&(r="#d1d6d9"),(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M19.32 2.27671L13.32 0.0558532H13.25C13.2034 0.0506582 13.1565 0.0506582 13.11 0.0558532H12.88H12.75H12.68L7 2.22118L1.32 0.0558532C1.16962 0.000788865 1.00961 -0.0138312 0.853138 0.013196C0.69667 0.0402231 0.548219 0.108125 0.420003 0.211313C0.290762 0.31349 0.185268 0.448348 0.112238 0.604745C0.039208 0.761141 0.000736953 0.934589 3.33353e-06 1.11076V16.6567C-0.000537828 16.8895 0.0648223 17.1166 0.186845 17.3059C0.308868 17.4952 0.481382 17.6371 0.680003 17.7116L6.68 19.9325C6.88145 20.0054 7.09855 20.0054 7.3 19.9325L13 17.8227L18.68 19.988C18.7862 20.004 18.8938 20.004 19 19.988C19.2091 19.9913 19.4132 19.917 19.58 19.777C19.7092 19.6748 19.8147 19.54 19.8878 19.3836C19.9608 19.2272 19.9993 19.0537 20 18.8776V3.33161C20.0005 3.09882 19.9352 2.87172 19.8132 2.68242C19.6911 2.49312 19.5186 2.3512 19.32 2.27671ZM6 17.3341L2 15.8572V2.65425L6 4.13112V17.3341ZM12 15.8572L8 17.3341V4.13112L12 2.65425V15.8572ZM18 17.3341L14 15.8572V2.65425L18 4.13112V17.3341Z",fill:r})})};var C=r(81722),j=r(59600),b=r(11448),S=r(42518);let w=e=>{let{}=e;return(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M10 4.04201C8.35161 2.56337 6.2144 1.74695 4 1.75001C2.948 1.75001 1.938 1.93001 1 2.26201V16.512C1.96362 16.172 2.97816 15.9989 4 16C6.305 16 8.408 16.867 10 18.292M10 4.04201C11.6483 2.56328 13.7856 1.74686 16 1.75001C17.052 1.75001 18.062 1.93001 19 2.26201V16.512C18.0364 16.172 17.0218 15.9989 16 16C13.7856 15.997 11.6484 16.8134 10 18.292M10 4.04201V18.292",stroke:"#445563",strokeWidth:"2"})})};var N=r(84057),y=r(24033),F=e=>{let{heroMode:t,mapPage:r}=e,{user:a}=(0,b.Z)(),{isUnlocked:c}=(0,S.Z)(),[F,k]=(0,i.useState)(!1),E=(0,u.Z)(),M=(0,h.Z)(),A=(0,C.Z)(),D=(0,j.Z)(),L=(0,p.Z)(),{propertyReader:B,isLoading:V}=(0,n.default)(),Z=B&&(null==B?void 0:B.name())||null,P=B&&(null==B?void 0:B._baseUrl)||null,O=!!(0,y.useSearchParams)().get("share"),W=null==B?void 0:B.isPropertyExcluded();if((0,i.useEffect)(()=>{L.inView&&F&&k(!1),L.inView||F||k(!0)},[L]),W)return null;let T=e=>{if(null==e?void 0:e.user){if(c){E.onOpen();return}D.onOpen();return}A.setStep({screen:"start",disabled:!1}),A.onOpen()},R=e=>{if((null==e?void 0:e.user)||O){if(c){var t,r,l;if((null==e?void 0:null===(r=e.user)||void 0===r?void 0:null===(t=r.subscription)||void 0===t?void 0:t.activeSubscription)||(null==e?void 0:null===(l=e.user)||void 0===l?void 0:l.userGroup)||O){M.onOpen();return}D.onOpen()}D.onOpen();return}A.setStep({screen:"start",disabled:!1}),A.onOpen()};if(t)return(0,l.jsxs)("div",{className:"flex flex-row text-2xl font-bold text-white items-center gap-4 p-2 lg:hidden",children:[(0,l.jsx)("button",{onClick:()=>{T(a),(0,N.$)("Edited Property Details","Action Bar Hero Mode")},disabled:V,children:(0,l.jsx)(m.v,{color:V?"disabled":"white"})}),(0,l.jsx)("button",{onClick:()=>{R(a),(0,N.$)("Share Property","Action Bar Hero Mode")},disabled:V,children:(0,l.jsx)(v,{color:V?"disabled":"white"})}),(0,l.jsx)(d(),{href:"/".concat(P,"/maps"),passHref:!0,children:(0,l.jsx)("button",{disabled:V,onClick:()=>(0,N.$)("Map View","Action Bar Hero Mode"),children:(0,l.jsx)(g,{color:V?"disabled":"white"})})})]});let U=(0,l.jsxs)("div",{className:o()(" flex gap-4 flex-row items-center justify-end text-xs",V?"text-riskfactor-400":"text-riskfactor-600"),children:[(0,l.jsxs)("button",{className:"flex items-center gap-2",onClick:()=>{T(a),(0,N.$)("Edited Property Details","Action Bar")},disabled:V,children:[(0,l.jsx)(m.v,{color:V?"disabled":void 0}),(0,l.jsx)("p",{children:"Edit Property Details"})]}),(0,l.jsxs)("button",{className:"flex items-center gap-2",onClick:()=>{R(a),(0,N.$)("Share Property","Action Bar")},disabled:V,children:[(0,l.jsx)(v,{color:V?"disabled":void 0}),(0,l.jsx)("p",{className:"text-center",children:"Share"})]}),(0,l.jsx)(d(),{href:"/".concat(P,"/maps"),passHref:!0,children:(0,l.jsxs)("button",{className:"flex items-center gap-2",onClick:()=>(0,N.$)("Map View","Action Bar"),disabled:V,children:[(0,l.jsx)(g,{color:V?"disabled":void 0}),(0,l.jsx)("p",{children:"Map View"})]})})]}),$=(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"sticky top-0 left-0 z-10 col-span-12 mx-auto bg-white pt-4 md:w-full",children:(0,l.jsxs)("div",{className:"justify-between mx-auto flex items-center",children:[V?(0,l.jsx)(s.Z,{color:"black"}):(0,l.jsx)("p",{className:"font-bold text-ellipsis overflow-hidden whitespace-nowrap",children:Z}),(0,l.jsxs)("div",{className:"flex gap-x-4 text-xs ml-2 mt-1",children:[(0,l.jsxs)("a",{className:"flex cursor-pointer items-center gap-2",onClick:()=>{R(a),(0,N.$)("Share Property","Map Action Bar")},children:[(0,l.jsx)(v,{}),(0,l.jsx)("p",{className:"hidden md:block",children:"Share"})]}),(0,l.jsxs)(d(),{href:"/".concat(P),className:"flex cursor-pointer items-center gap-2",onClick:()=>(0,N.$)("Report View","Map Action Bar"),children:[(0,l.jsx)(w,{}),(0,l.jsx)("p",{className:"hidden md:block",children:"Report View"})]})]})]})})});return(0,l.jsx)(l.Fragment,{children:r?$:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"sticky top-0 left-0 z-30 col-span-12 mx-auto hidden bg-white py-4 md:w-full lg:block",children:[(0,l.jsx)("div",{className:"col-span-12",children:(0,l.jsxs)("div",{className:o()("mx-auto flex items-center",F?"justify-between":"mt-0.5 justify-end"),children:[V?(0,l.jsx)(s.Z,{color:"black"}):(0,l.jsx)("p",{className:o()("font-bold",{invisible:!F}),children:Z}),U]})}),(0,l.jsx)(x.u,{show:F,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",children:(0,l.jsx)("div",{className:"absolute col-span-12 pt-4 bg-white w-full",children:(0,l.jsx)(f,{})})})]}),(0,l.jsxs)("div",{className:o()("fixed top-0 left-0 z-30 mx-auto block w-full border-b-[1px] border-riskfactor-300 bg-white transition-transform duration-300 ease-in lg:hidden",L.inView?"opacity-0 pointer-events-none":""),children:[(0,l.jsxs)("div",{className:"text-riskfactor-500 flex w-full flex-row items-center justify-between p-2 text-sm font-bold sm:text-base md:justify-end",children:[V?(0,l.jsx)(s.Z,{color:"black"}):(0,l.jsx)("p",{className:"text-ellipsis overflow-hidden whitespace-nowrap font-bold md:hidden",children:Z}),(0,l.jsxs)("div",{className:"flex flex-row min-w-fit text-2xl font-bold items-center gap-4 p-2 lg:hidden",children:[(0,l.jsx)("a",{className:"hover:cursor-pointer",onClick:()=>{T(a),(0,N.$)("Edit Property","Action Bar")},children:(0,l.jsx)(m.v,{})}),(0,l.jsx)("a",{className:"hover:cursor-pointer",onClick:()=>{R(a),(0,N.$)("Share Property","Action Bar")},children:(0,l.jsx)(v,{})}),(0,l.jsx)(d(),{className:"hover:cursor-pointer",href:"/".concat(P,"/maps"),onClick:()=>(0,N.$)("Map View","Action Bar"),children:(0,l.jsx)(g,{})})]})]}),(0,l.jsx)("div",{className:"absolute col-span-12 pt-4 bg-white w-full px-2",children:(0,l.jsx)(f,{})})]})]})})}},83304:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var l=r(57437);r(2265);var i=r(84516),n=e=>{let{className:t}=e;return(0,l.jsx)("div",{className:"relative mx-auto grid max-w-7xl grid-cols-12 px-4",children:(0,l.jsx)("div",{className:"md:col-start-1 md:col-span-12 col-span-12 pb-10",children:(0,l.jsx)("div",{className:(0,i.m)("my-6 h-px w-full bg-riskfactor-300 ",t)})})})}},15191:function(e,t,r){"use strict";r.r(t);var l=r(57437),i=r(25356),n=r.n(i),a=r(54440),o=r.n(a),s=r(26466),c=r(24033),d=r(84057),u=r(63650);let h=[{name:"Flood Factor",key:"flood"},{name:"Fire Factor",key:"fire"},{name:"Wind Factor",key:"wind"},{name:"Air Factor",key:"air"},{name:"Heat Factor",key:"heat"}],f=e=>{let{factor:t,active:r,isMapsPage:i}=e,n=(0,c.usePathname)(),a="h-full text-".concat(t.key,"factor-500 font-semibold border-b-2 pb-2 border-").concat(t.key,"factor-500"),s="h-full text-riskfactor-500 border-b-transparent pb-2 hover:border-b-2 hover:border-".concat(t.key,"factor-500 hover:text-").concat(t.key,"factor-500"),u=n.split("/");u.splice(-1,1),u.push(t.key);let h=u.join("/"),f=i?h:"#".concat(t.key);return(0,l.jsx)("li",{className:"flex h-full items-center justify-center pr-8",children:(0,l.jsx)("a",{href:f,className:o()(r?a:s),onClick:()=>(0,d.$)(t.name,"Factor Nav",f),children:t.name})})};t.default=e=>{let{isMapsPage:t=!1}=e,r=(0,s.Z)(),i=(0,c.useParams)(),{propertyReader:a,isLoading:d}=(0,u.default)();if(d)return null;let p=(0,l.jsx)("ul",{className:o()("flex","cursor-pointer text-riskfactor-500 hover:text-riskfactor-700 inline-flex items-center text-md font-medium justify-center","border-floodfactor-500"),children:h.map(e=>{if(null==a?void 0:a.isPerilExcluded(e.key))return null;let n=e.key===r.inView;if(t){let{peril:t=[]}=i||{};t.indexOf(e.key)>-1&&(n=!0)}return(0,l.jsx)(f,{factor:e,active:n,isMapsPage:t},"".concat(t?"maps":"report","-").concat(e.key))})});return t?(0,l.jsx)(e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"scrollbar-hide mx-auto w-full scroll-smooth whitespace-nowrap ".concat(n().slider),children:(0,l.jsx)("div",{className:"col-span-12",children:(0,l.jsx)("div",{className:"flex h-10 pt-2",children:t})})})},{children:p}):(0,l.jsx)(e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"scrollbar-hide border-b mx-auto w-full scroll-smooth whitespace-nowrap ".concat(n().slider),children:(0,l.jsx)("div",{className:"col-span-12",children:(0,l.jsx)("div",{className:"flex h-10",children:(0,l.jsx)("div",{className:"flex w-full",children:t})})})})},{children:p})}},56266:function(e,t,r){"use strict";r.d(t,{p:function(){return i}});var l=r(57437);let i=e=>{let{color:t="#C11154"}=e;return(0,l.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 30 30",fill:t,xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M0.95193 12.0559C2.4728 12.331 4.02522 12.4841 5.57751 12.4841C8.37187 12.5152 11.1662 11.9638 13.7737 10.922V16.0353L15.605 16.8929L16.226 17.1991L16.2272 10.9231C18.8348 11.9637 21.629 12.4853 24.4233 12.4541C25.9758 12.4541 27.5282 12.301 29.0489 12.0259C29.5146 11.9338 29.887 11.5666 29.9804 11.1073C30.0738 10.6169 29.8251 10.1576 29.4213 9.91363C27.3716 8.78092 25.6337 7.1889 24.2983 5.28934C24.0496 4.92214 23.6773 4.67693 23.2431 4.61593C22.809 4.55493 22.3432 4.64703 22.0012 4.92214C20.262 6.14695 18.3372 7.12656 16.2889 7.77008V5.93285C17.8729 5.25945 18.6175 3.45211 17.9347 1.89127C17.2216 0.298058 15.389 -0.406457 13.8062 0.237062C12.2223 0.88058 11.4776 2.7178 12.1604 4.27865C12.4709 5.01305 13.0603 5.59557 13.8062 5.90177V7.739C11.7565 7.09548 9.83173 6.14698 8.06228 4.89106C7.72026 4.61595 7.25453 4.52386 6.82035 4.58485C6.38617 4.64585 6.0126 4.89106 5.7652 5.25826C4.42988 7.18759 2.66037 8.74837 0.580438 9.91225C0.146258 10.1575 -0.0720739 10.6466 0.0213196 11.106C0.113496 11.5964 0.485834 11.9648 0.951559 12.0557L0.95193 12.0559Z",fill:t}),(0,l.jsx)("path",{d:"M16.2602 28.7753V23.876L13.7764 22.7433V28.7752C13.7764 29.4486 14.3355 30 15.0183 30C15.7011 30 16.2602 29.4486 16.2602 28.7752V28.7753Z",fill:t}),(0,l.jsx)("path",{d:"M17.1904 17.5984L20.0466 18.9154C21.5372 18.0578 22.0332 16.1906 21.1649 14.7207C20.8544 14.2004 20.3887 13.771 19.8295 13.4959C19.2704 13.1287 18.4942 13.2818 18.1219 13.8332C17.7495 14.3846 17.9048 15.1501 18.4639 15.5173C18.5573 15.5783 18.6507 15.6393 18.7744 15.6704C19.0849 15.8235 19.2401 16.2218 19.0849 16.528C19.023 16.65 18.8981 16.7732 18.7744 16.8342L17.1904 17.5984Z",fill:t}),(0,l.jsx)("path",{d:"M10.2032 26.3867C10.8558 26.6008 11.5689 26.2647 11.7872 25.6212C11.974 25.0698 11.7557 24.4885 11.2596 24.1823C10.9491 24.0292 10.7939 23.6309 10.9491 23.3247C11.011 23.2027 11.1359 23.0795 11.2596 23.0185L12.8436 22.2841L9.98739 20.9672C8.49682 21.8248 8.0008 23.6919 8.86916 25.1618C9.14811 25.6822 9.64415 26.1116 10.2033 26.3867L10.2032 26.3867Z",fill:t}),(0,l.jsx)("path",{d:"M11.26 15.7006C11.9125 15.4865 12.2848 14.8131 12.0677 14.1696C11.8506 13.5261 11.1678 13.1589 10.5153 13.373C10.4219 13.4041 10.2982 13.4651 10.2048 13.5261C8.6524 14.2605 7.99988 16.0678 8.71425 17.5989C9.02473 18.2424 9.5523 18.7627 10.2048 19.0689L13.7754 20.7219L18.7431 23.0496C19.0536 23.2027 19.2088 23.601 19.0536 23.9072C18.9917 24.0292 18.8668 24.1524 18.7431 24.2134C18.0906 24.4275 17.7183 25.1009 17.9354 25.7444C18.1525 26.3879 18.8353 26.7551 19.4878 26.541C19.5812 26.5099 19.7049 26.4489 19.7983 26.3879C21.3507 25.6535 22.0032 23.8462 21.2888 22.3151C20.9783 21.6716 20.4508 21.1513 19.7983 20.8451L14.8305 18.5485L11.26 16.8955C10.9495 16.7424 10.7942 16.3441 10.9495 16.0379C11.0125 15.8836 11.1047 15.7616 11.26 15.7006Z",fill:t})]})}},98745:function(e,t,r){"use strict";r.d(t,{v:function(){return i}});var l=r(57437);r(2265);let i=e=>{let{color:t="defaultColor"}=e,r="#2C3740";return"white"===t&&(r="#FFFFFF"),"disabled"===t&&(r="#d1d6d9"),(0,l.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M16.8898 3.11019L17.5969 2.40309L17.5969 2.40309L16.8898 3.11019ZM5.41667 17.5296V18.5296C5.68188 18.5296 5.93624 18.4242 6.12377 18.2367L5.41667 17.5296ZM2.5 17.5296H1.5C1.5 18.0819 1.94772 18.5296 2.5 18.5296V17.5296ZM2.5 14.5537L1.79289 13.8466C1.60536 14.0341 1.5 14.2885 1.5 14.5537H2.5ZM14.6506 3.8173C15.0737 3.39423 15.7596 3.39423 16.1827 3.8173L17.5969 2.40309C16.3928 1.19897 14.4405 1.19897 13.2364 2.40309L14.6506 3.8173ZM16.1827 3.8173C16.6057 4.24037 16.6057 4.9263 16.1827 5.34937L17.5969 6.76358C18.801 5.55946 18.801 3.6072 17.5969 2.40309L16.1827 3.8173ZM16.1827 5.34937L4.70956 16.8225L6.12377 18.2367L17.5969 6.76358L16.1827 5.34937ZM5.41667 16.5296H2.5V18.5296H5.41667V16.5296ZM13.2364 2.40309L1.79289 13.8466L3.20711 15.2608L14.6506 3.8173L13.2364 2.40309ZM1.5 14.5537V17.5296H3.5V14.5537H1.5ZM11.9864 5.0673L14.9327 8.01358L16.3469 6.59937L13.4006 3.65309L11.9864 5.0673Z",fill:r})})}},36081:function(e,t,r){"use strict";var l=r(57437),i=r(54440),n=r.n(i);t.Z=e=>{let{legendColors:t,legendLabels:r,hasWhitespace:i,hasGradient:a,legendHeader:o,labelsInsideLegend:s=!1,labelAlignment:c,hasArrows:d=!1,leftArrowText:u,rightArrowText:h,hasMargin:f}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:n()({"py-5":f}),children:[(0,l.jsx)("div",{className:"text-riskfactor-600 pb-2 text-xs font-bold md:text-sm md:font-semibold",children:o}),d&&(0,l.jsxs)("div",{className:"flex flex-row justify-center py-3 text-riskfactor-600 lg:pt-0",children:[(0,l.jsxs)("span",{className:"mr-8 flex flex-row md:mr-4",children:["← ",u&&u]}),(0,l.jsxs)("span",{className:"flex flex-row",children:[h&&h," →"]})]}),a&&t&&(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"relative flex h-5 w-full flex-row",children:(0,l.jsx)("div",{style:{background:"linear-gradient(90deg, ".concat(t),width:"100%",height:"100%"}})}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)("div",{className:"flex w-full justify-between",children:r&&r.length>0&&r.map(e=>(0,l.jsx)("span",{className:"ml-0 w-auto",children:e},e))})})]}),t&&!a&&s&&(0,l.jsx)("div",{className:"relative flex h-5 w-full flex-row items-center justify-center",children:t&&t.map((e,r)=>(0,l.jsxs)("div",{className:"relative h-full w-full",children:[(0,l.jsx)("div",{className:"relative h-full w-full",style:{backgroundColor:e},children:t&&t.length>0&&""!==t[r]&&(0,l.jsx)("span",{className:"mx-auto flex h-full w-full items-center justify-center text-xs text-riskfactor-50",children:t[r]})}),i&&(0,l.jsx)("div",{className:"h-full w-5 bg-white"})]},"".concat(r).concat(e)))}),t&&!a&&!s&&(0,l.jsx)("div",{className:n()("w-full flex h-2 flex-row"),children:t&&t.map((e,t)=>(0,l.jsxs)("div",{className:"w-full",style:{backgroundColor:e},children:[(0,l.jsx)("div",{className:"h-full ".concat(i?"w-0.5 bg-riskfactor-50":"")}),r&&r.length>0&&""!==r[t]&&(0,l.jsx)("span",{className:n()("relative text-xs py-1",{"justify-start flex":"left"===c,"justify-center":"center"===c,"flex translate-x-4 justify-end items-end text-end":"right"===c,"flex justify-around":"between"===c}),children:r[t]})||null]},"".concat(t).concat(e)))})]})})}},64302:function(e,t,r){"use strict";r.d(t,{Bq:function(){return o},w$:function(){return u},J8:function(){return h},aL:function(){return c},nt:function(){return f},ai:function(){return p},qP:function(){return s}});var l=r(89954);let i=(e,t)=>{if(!e)return e;let r=e;return Object.keys(t||{}).forEach(e=>{r=r.replace(RegExp("{".concat(e,"}"),"g"),t[e])}),r};var n=r(10329),a=r(51448);let o=(e,t)=>e<10?parseInt("".concat(t,"0").concat(e)):parseInt("".concat(t).concat(e)),s=(e,t,r)=>e.sort((e,l)=>r?e[t]>l[t]?-1:1:e[t]>l[t]?1:-1),c=e=>{let{month:t,year:r,name:l}=e;return"".concat((0,a.p6)({month:t,year:r})).concat(l?": ".concat(l):": N/A")},d=e=>{if(e){let t=parseFloat((0,n.NM)((0,n.RX)(e.toString()),1));return isNaN(t)||t===1/0?e:t}return 0},u=(e,t,r)=>[{stat:null==e?void 0:e.area,statTitle:i(null==t?void 0:t.leftStatContent,r)},{stat:(0,l.a)(null==e?void 0:e.distance),statTitle:i(null==t?void 0:t.middleStatContent,r)},{stat:null==e?void 0:e.eventAffectedProperties,statTitle:i(null==t?void 0:t.rightStatContent,r)}],h=(e,t,r,l)=>{var n;if(!e)return[];let a=null==l?void 0:null===(n=l.historic)||void 0===n?void 0:n.find(t=>(null==t?void 0:t.eventId)===(null==e?void 0:e.eventId));return[{stat:d(null==e?void 0:e.depth),suffix:"ft",statTitle:i(null==t?void 0:t.leftStatContent,r)},{stat:null==a?void 0:a.affectedProperties,statTitle:i(null==t?void 0:t.middleStatContent,r)},{stat:null==e?void 0:e.affectedProperties,statTitle:i(null==t?void 0:t.rightStatContent,r)}]},f=(e,t,r)=>e?[{stat:"".concat(((null==e?void 0:e.localWindSpeed)*1.28).toFixed()," mph"),statTitle:"Estimated max wind gust speed nearby",shouldWrapStat:!1},{stat:null==e?void 0:e.affectedProperties,statTitle:i(null==t?void 0:t.middleStatContent,r)}]:[],p=e=>{var t,r;return e?[{stat:(null==e?void 0:null===(t=e.category)||void 0===t?void 0:t.name)||"Tornado",statTitle:"Rating based on ".concat((null==e?void 0:null===(r=e.category)||void 0===r?void 0:r.name.length)===3?"Enhanced":""," Fujita Scale")},{stat:(null==e?void 0:e.damages)?"$".concat(null==e?void 0:e.damages):"Unknown",statTitle:"Total loss in damages"}]:[]}},56551:function(e,t,r){"use strict";r.d(t,{h:function(){return s}});var l=r(2265),i=r(59824),n=r(64302);let a={"Properties affected":"affectedProperties",Date:"date",Distance:"distance",Size:"area",Speed:"speed",Type:"eventType",Depth:"depth"},o=e=>{let{events:t,isDescending:r=!0,sortOrder:l="Date",perPage:i=10}=e,o=[],s=[...(0,n.qP)(t,a[l],r)];for(;s.length;)o.push(s.splice(0,i));return o},s=e=>{let{events:t,perPage:r=10,peril:n,tableSortOrder:a,isAscending:s}=e,[c,d]=(0,l.useState)(0),[u,h]=(0,l.useState)(o({events:t})),[f,p]=(0,l.useState)(!0),[x,m]=(0,l.useState)(0);(0,l.useEffect)(()=>{h(o({events:t,isDescending:f,sortOrder:a||i.T[n][x],perPage:r})),s&&p(!1),d(0)},[f,x,r,a,s]);let v=(0,l.useCallback)(()=>{c<u.length-1&&d(c+1)},[u.length,c]),g=(0,l.useCallback)(()=>{c>0&&d(c-1)},[c]),C=u.length-1,j=c*r+1,b=Math.min(j+r-1,t.length);return{isDescending:f,nextPage:v,pages:u,pagination:{isFirstPage:0===c,isLastPage:c===C,pageFirstItemNumber:j,pageIndex:c,pageLastItemNumber:b,totalResults:t.length},previousPage:g,setIsDescending:p,setSortOrder:m,sortOrder:x}}},59824:function(e,t,r){"use strict";r.d(t,{T:function(){return l}});let l={wind:["Date","Speed","Properties affected"],flood:["Date","Size","Distance","Properties affected"],fire:["Distance","Date","Size","Properties affected"],heat:["Date","Size","Distance","Properties affected"]}},73101:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var l=r(57437),i=r(54440),n=r.n(i),a=r(97099),o=e=>{let{image:t,text:r,activeWhen:i,activeIndex:o}=e;return(0,l.jsxs)("div",{className:n()("flex flex-col items-center",{"opacity-30":void 0===o||void 0===i||i>o},{"opacity-100":void 0!==o&&void 0!==i&&i<=o}),children:[(0,l.jsx)("div",{className:"mx-auto justify-center",children:(0,l.jsx)(a.Z,{image:t})}),r&&(0,l.jsx)("figcaption",{className:"mt-2.5 text-center text-xxs leading-3 ",children:r})]})},s=r(89303),c=r(75867),d=e=>{let{statTitle:t,showStatTitle:r=!1,change:i,prefix:a,suffix:d,stat:u,secondaryPrefix:h,secondaryStat:f,image:p,link:x,secondarySuffix:m,isLargeStat:v=!1,numbersWithCommas:g=!0,isCentered:C=!1,isMediumStat:j,header:b,hasHeaderDivider:S=!1,subtext:w,isBoldHeader:N=!1,isFlexCol:y=!1,shouldWrapStat:F=!1,isCardStat:k=!1,isStatLeftAligned:E=!1,isRiskOverview:M=!1,isLineThrough:A=!1,isStatGreyOut:D=!1,statExtraClass:L="",subTextLeftAligned:B=!1}=e,V="0",Z="number"==typeof u&&u>999999;return u&&g&&(V=(0,c.x)(u),Z&&(V=(0,s.R)(u,2))),u&&!g&&(V=u.toString()),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:n()("flex",{"justify-center":C,"flex-col":y}),children:[p&&(0,l.jsx)("div",{className:"icon container w-auto px-5 pt-2 pb-6",children:(0,l.jsx)(o,{image:p})}),b&&(0,l.jsx)("div",{className:n()("p-1",{"font-bold":N,"py-0":y}),children:(0,l.jsx)("div",{className:n()("headerWrapper text-md pb-4",{"border-b border-riskfactor-300":S},{"pb-0":y}),children:b&&b})}),(0,l.jsxs)("div",{className:n()("pr-1",{"items-center":C}),children:[t&&r&&(0,l.jsx)("div",{className:"text-base",children:t}),(0,l.jsxs)("div",{className:n()(L,"font-semibold p-1 items-end flex",{"flex-wrap":F,"text-lg":!v&&!j,"text-lg md:text-2xl":j,"text-2xl md:text-3xl":v,"pl-3":C,"text-2xl sm:text-3xl":k,"sm:text-2xl":Z,"pl-0":E,"flex-wrap whitespace-nowrap":M,"line-through":A,"text-riskfactor-400":D}),children:[a&&a,V,(0,l.jsx)("span",{className:n()("text-md px-1",{"-mr-0":C}),children:d}),h&&h,f&&(0,c.x)(f),m&&(0,l.jsx)("span",{className:"text-base -mr-5 px-1",children:m}),i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"".concat(f?"pl-2":""," text-xs text-green-500"),children:"↑"}),(0,l.jsx)("span",{className:"pl-1 text-xs text-green-600",children:i})]})]}),w&&(0,l.jsx)("div",{className:n()("text-riskfactor-400",{"pl-1":!B,"pl-0":B}),children:w})]})]}),x&&(0,l.jsx)("div",{className:"link container w-auto bg-gray-50 py-4",children:(0,l.jsx)("a",{href:x.url,target:x.target,className:"block pl-4 text-sm leading-5",children:x.title})})||null]})}},24447:function(e,t,r){"use strict";var l=r(73101);t.Z=l.Z},25356:function(e){e.exports={slider:"FactorNav_slider__VT_cw",hideShareButton:"FactorNav_hideShareButton__85kyj"}}}]);
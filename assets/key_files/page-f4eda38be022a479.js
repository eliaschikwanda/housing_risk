(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9902,7701,2343,4065,6622],{14847:function(e,t,r){Promise.resolve().then(r.bind(r,93857)),Promise.resolve().then(r.bind(r,97215)),Promise.resolve().then(r.bind(r,64562)),Promise.resolve().then(r.bind(r,76871))},93857:function(e,t,r){"use strict";r.r(t),r.d(t,{LocalityDetailsPage:function(){return c}});var n=r(57437),o=r(2265),l=r(12867),a=r(26795),i=r(11448);let c=e=>{let[t,r]=(0,o.useState)(null),{localityReaderRaw:c}=e,{locality:u}=e,{peril:s}=e,{user:d,sessionStatus:f}=(0,i.Z)({required:!1});return(0,o.useEffect)(()=>{let e=setTimeout(()=>{if(c&&t!==(null==c?void 0:c.fsid)&&"loading"!==f){let e=new a.v(c,u);l.co.track(l.rM.PAGE_VIEW,{content_group:"ldp",content_group2:u||null,content_group4:s||null,extras:{floodFactor:(null==e?void 0:e.getScore("flood"))||null,fireFactor:(null==e?void 0:e.getScore("fire"))||null,heatFactor:(null==e?void 0:e.getScore("heat"))||null,windFactor:(null==e?void 0:e.getScore("wind"))||null},item_id:e.fsid,item_name:e.name(),user_id:null==d?void 0:d.userId}),r(c.fsid)}},500);return()=>clearTimeout(e)},[t,c,f]),(0,n.jsx)(o.Fragment,{})};t.default=c},64562:function(e,t,r){"use strict";r.r(t);var n=r(57437),o=r(42444);t.default=function(e){return(0,n.jsx)(o.p,{...e})}},76871:function(e,t,r){"use strict";r.r(t);var n=r(57437),o=r(10329),l=r(54440),a=r.n(l),i=r(25356),c=r.n(i);t.default=e=>{let{basePath:t,currentFactor:r}=e,l=(0,n.jsx)(n.Fragment,{children:["flood","fire","wind","air","heat"].map(e=>{let l="h-full text-".concat(e,"factor-500 font-semibold border-b-2 pb-2 border-").concat(e,"factor-500"),i="h-full text-riskfactor-500 border-b-transparent pb-2 hover:border-b-2 hover:border-".concat(e,"factor-500 hover:text-").concat(e,"factor-500 font-medium");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("a",{href:"".concat(t,"/").concat(e),className:a()(e===r?l:i),children:(0,n.jsxs)("p",{className:"text-".concat(e,"factor-500 whitespace-nowrap"),children:[(0,o.kC)(e)," Factor"]},"".concat(e))})})})});return(0,n.jsx)("div",{className:"mb-6 border-b bg-white",children:(0,n.jsx)("div",{className:"scrollbar-hide w-full scroll-smooth ".concat(c().slider),children:(0,n.jsx)("div",{className:"flex w-full gap-x-8",children:l})})})}},42444:function(e,t,r){"use strict";r.d(t,{p:function(){return l}});var n=r(2265),o=r(70165);let l=({children:e,options:t,state:r})=>(!function(e,t={}){let r=(0,o.NL)({context:t.context}),l=n.useRef(t);l.current=t,n.useMemo(()=>{e&&function(e,t,r){if("object"!=typeof t||null===t)return;let n=e.getMutationCache(),o=e.getQueryCache(),l=t.mutations||[],a=t.queries||[];l.forEach(t=>{var o;n.build(e,{...null==r?void 0:null==(o=r.defaultOptions)?void 0:o.mutations,mutationKey:t.mutationKey},t.state)}),a.forEach(({queryKey:t,state:n,queryHash:l})=>{var a;let i=o.get(l);if(i){if(i.state.dataUpdatedAt<n.dataUpdatedAt){let{fetchStatus:e,...t}=n;i.setState(t)}return}o.build(e,{...null==r?void 0:null==(a=r.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:l},{...n,fetchStatus:"idle"})})}(r,e,l.current)},[r,e])}(r,t),e)}},function(e){e.O(0,[4762,5250,2288,3240,6691,4516,4103,2041,1578,3520,9286,3534,2619,4198,9373,4059,4229,7567,7215,2971,9119,4255,1744],function(){return e(e.s=14847)}),_N_E=e.O()}]);
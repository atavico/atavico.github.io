exports.id=559,exports.ids=[559],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},5132:(e,t)=>{"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",a="fast-refresh",c="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(n||(n={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2842:(e,t,n)=>{"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8796),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3500:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let r=n(167),o=n(997),u=r._(n(6689)),l=n(4813),f=n(5853),i=n(5058),a=n(5782),c=n(8878),s=n(5469),d=n(7443),p=n(1487),b=n(2842),y=n(1412),_=n(5132);function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let P=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:P,children:h,prefetch:O=null,passHref:E,replace:A,shallow:g,scroll:j,locale:C,onClick:T,onMouseEnter:R,onTouchStart:m,legacyBehavior:x=!1,...M}=e;n=h,x&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let I=u.default.useContext(s.RouterContext),S=u.default.useContext(d.AppRouterContext),L=null!=I?I:S,N=!I,U=!1!==O,k=null===O?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:G,as:K}=u.default.useMemo(()=>{if(!I){let e=v(i);return{href:e,as:P?v(P):e}}let[e,t]=(0,l.resolveHref)(I,i,!0);return{href:e,as:P?(0,l.resolveHref)(I,P):t||e}},[I,i,P]),F=u.default.useRef(G),H=u.default.useRef(K);x&&(r=u.default.Children.only(n));let w=x?r&&"object"==typeof r&&r.ref:t,[D,V,q]=(0,p.useIntersection)({rootMargin:"200px"}),z=u.default.useCallback(e=>{(H.current!==K||F.current!==G)&&(q(),H.current=K,F.current=G),D(e),w&&("function"==typeof w?w(e):"object"==typeof w&&(w.current=e))},[K,w,G,q,D]);u.default.useEffect(()=>{},[K,G,V,C,U,null==I?void 0:I.locale,L,N,k]);let B={ref:z,onClick(e){x||"function"!=typeof T||T(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,a,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?u.default.startTransition(d):d()}(e,L,G,K,A,g,j,C,N)},onMouseEnter(e){x||"function"!=typeof R||R(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e)},onTouchStart:function(e){x||"function"!=typeof m||m(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e)}};if((0,a.isAbsoluteUrl)(K))B.href=K;else if(!x||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,b.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);B.href=t||(0,y.addBasePath)((0,c.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return x?u.default.cloneElement(r,B):(0,o.jsx)("a",{...M,...B,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1487:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(6689),o=n(6078),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(a||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},7443:(e,t,n)=>{"use strict";e.exports=n(7093).vendored.contexts.AppRouterContext},1664:(e,t,n)=>{e.exports=n(3500)}};
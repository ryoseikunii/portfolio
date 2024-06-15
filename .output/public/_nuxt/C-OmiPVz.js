import{u as C,n as N,r as S,s as A,v as E,x as T,y as U,h as I,z as j,A as R,q as _,B as D,C as F,D as h,E as k,F as O,G as V,H,I as z,J as M}from"./DQwlWcx4.js";async function w(a,n=C()){const{path:s,matched:f}=n.resolve(a);if(!f.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(s)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>w(a,n));n._routePreloaded.add(s);const r=f.map(i=>{var t;return(t=i.components)==null?void 0:t.default}).filter(i=>typeof i=="function");for(const i of r){const t=Promise.resolve(i()).catch(()=>{}).finally(()=>e.splice(e.indexOf(t)));e.push(t)}await Promise.all(e)}const $=(...a)=>a.find(n=>n!==void 0);function G(a){const n=a.componentName||"NuxtLink";function s(e,r){if(!e||a.trailingSlash!=="append"&&a.trailingSlash!=="remove")return e;if(typeof e=="string")return q(e,a.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:q(i,a.trailingSlash)}}function f(e){const r=C(),i=H(),t=h(()=>{const p=e.to||e.href||"";return s(p,r.resolve)}),u=h(()=>typeof t.value=="string"&&k(t.value,{acceptRelative:!0})),g=h(()=>{var p;return typeof t.value=="object"?((p=r.resolve(t.value))==null?void 0:p.href)??null:t.value&&!e.external&&!u.value?s(O(i.app.baseURL,t.value),r.resolve):t.value}),v=_("RouterLink"),x=v&&typeof v!="string"?v.useLink:void 0,o=x==null?void 0:x({...e,to:t.value}),b=h(()=>e.target&&e.target!=="_self"),d=h(()=>e.external||b.value?!0:typeof t.value=="object"?!1:t.value===""||u.value);return{to:t,hasTarget:b,isAbsoluteUrl:u,isExternal:d,href:g,isActive:(o==null?void 0:o.isActive)??h(()=>t.value===r.currentRoute.value.path),isExactActive:(o==null?void 0:o.isExactActive)??h(()=>t.value===r.currentRoute.value.path),route:(o==null?void 0:o.route)??h(()=>r.resolve(t.value)),async navigate(){await V(g.value,{replace:e.replace,external:e.external})}}}return N({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:f,setup(e,{slots:r}){const i=C(),{to:t,href:u,navigate:g,isExternal:v,hasTarget:x,isAbsoluteUrl:o}=f(e),b=S(!1),d=S(null),p=c=>{var m;d.value=e.custom?(m=c==null?void 0:c.$el)==null?void 0:m.nextElementSibling:c==null?void 0:c.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Q()){const m=A();let y,l=null;E(()=>{const L=J();T(()=>{y=U(()=>{var P;(P=d==null?void 0:d.value)!=null&&P.tagName&&(l=L.observe(d.value,async()=>{l==null||l(),l=null;const B=typeof t.value=="string"?t.value:i.resolve(t.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",B).catch(()=>{}),!v.value&&w(t.value,i).catch(()=>{})]),b.value=!0}))})})}),I(()=>{y&&j(y),l==null||l(),l=null})}return()=>{var y;if(!v.value){const l={ref:p,to:t.value,activeClass:e.activeClass||a.activeClass,exactActiveClass:e.exactActiveClass||a.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(b.value&&(l.class=e.prefetchedClass||a.prefetchedClass),l.rel=e.rel||void 0),R(_("RouterLink"),l,r.default)}const c=e.target||null,m=$(e.noRel?"":e.rel,a.externalRelAttribute,o.value||x.value?"noopener noreferrer":"")||null;return e.custom?r.default?r.default({href:u.value,navigate:g,get route(){if(!u.value)return;const l=new URL(u.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return D(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:m,target:c,isExternal:v.value,isActive:!1,isExactActive:!1}):null:R("a",{ref:d,href:u.value||null,rel:m,target:c},(y=r.default)==null?void 0:y.call(r))}}})}const K=G(F);function q(a,n){const s=n==="append"?z:M;return k(a)&&!a.startsWith("http")?a:s(a,!0)}function J(){const a=A();if(a._observer)return a._observer;let n=null;const s=new Map,f=(r,i)=>(n||(n=new IntersectionObserver(t=>{for(const u of t){const g=s.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&g&&g()}})),s.set(r,i),n.observe(r),()=>{s.delete(r),n.unobserve(r),s.size===0&&(n.disconnect(),n=null)});return a._observer={observe:f}}function Q(){const a=navigator.connection;return!!(a&&(a.saveData||/2g/.test(a.effectiveType)))}export{K as _};

(()=>{"use strict";const n=()=>{return n=void 0,t=void 0,o=function*(){return c={params:{results:"10"}},n=void 0,t=void 0,o=function*(){const{params:n}=c||{};try{return(yield fetch(`https://randomuser.me/api?${new URLSearchParams(n)}`,Object.assign({method:"GET"},c))).json()}catch(n){console.error(n)}},new((e=void 0)||(e=Promise))((function(c,a){function i(n){try{s(o.next(n))}catch(n){a(n)}}function r(n){try{s(o.throw(n))}catch(n){a(n)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,r)}s((o=o.apply(n,t||[])).next())}));var n,t,e,o,c},new((e=void 0)||(e=Promise))((function(c,a){function i(n){try{s(o.next(n))}catch(n){a(n)}}function r(n){try{s(o.throw(n))}catch(n){a(n)}}function s(n){var t;n.done?c(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,r)}s((o=o.apply(n,t||[])).next())}));var n,t,e,o};class t extends HTMLElement{constructor(n){super();const t=this.attachShadow({mode:"open"});if(!n)return;const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column";const o=document.createElement("p");o.textContent=`${n.name.title} ${n.name.first} ${n.name.last}`,o.style.margin="0px";const c=document.createElement("p");c.textContent=n.gender,e.appendChild(o),e.appendChild(c),t.appendChild(e)}}var e,o;customElements.define("user-component",t),o=function*(){const e=yield n();if(e)for(const n of e.results){const e=new t(n);document.body.appendChild(e)}},new((e=void 0)||(e=Promise))((function(n,t){function c(n){try{i(o.next(n))}catch(n){t(n)}}function a(n){try{i(o.throw(n))}catch(n){t(n)}}function i(t){var o;t.done?n(t.value):(o=t.value,o instanceof e?o:new e((function(n){n(o)}))).then(c,a)}i((o=o.apply(void 0,[])).next())}))})();
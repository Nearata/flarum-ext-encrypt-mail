(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";function e(t,o){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},e(t,o)}t.r(o);const n=flarum.core.compat["common/Component"];var r=t.n(n);const a=flarum.core.compat["common/components/Button"];var c=t.n(a);const i=flarum.core.compat["common/components/FieldSet"];var l=t.n(i);const s=flarum.core.compat["common/utils/Stream"];var u=t.n(s);const p=flarum.core.compat["forum/app"];var f=t.n(p),y=function(t){var o,n;function r(){for(var o,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(o=t.call.apply(t,[this].concat(n))||this).loading=void 0,o.content=void 0,o}n=t,(o=r).prototype=Object.create(n.prototype),o.prototype.constructor=o,e(o,n);var a=r.prototype;return a.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=!1,this.content=u()(f().session.user.attribute("nearataEncryptMailPublicKey"))},a.oncreate=function(o){t.prototype.oncreate.call(this,o)},a.view=function(t){var o=f().translator.trans("nearata-encrypt-mail.forum.settings.field_label");return m(l(),{className:"Settings-nearataEncryptMailPublicKey",label:o},m("textarea",{class:"FormControl",rows:"10",autocomplete:"off",bidi:this.content}),m(c(),{className:"Button Button--primary",type:"submit",onclick:this.onSubmit.bind(this),loading:this.loading},f().translator.trans("nearata-encrypt-mail.forum.settings.save_changes")))},a.onSubmit=function(t){var o=this,e=f().session.user.attribute("nearataEncryptMailPublicKey");this.content()!==e&&(this.loading=!0,f().request({url:f().forum.attribute("apiUrl")+"/nearata/encryptMail/updatePublicKey",method:"POST",body:{publicKey:this.content()}}).then((function(){return location.reload()})).catch((function(){o.loading=!1,m.redraw()})))},r}(r());const d=flarum.core.compat["common/extend"],b=flarum.core.compat["forum/components/SettingsPage"];var h=t.n(b);f().initializers.add("nearata-encrypt-mail",(function(){(0,d.extend)(h().prototype,"settingsItems",(function(t){t.add("nearataEncryptMailPublicKey",y.component())}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map
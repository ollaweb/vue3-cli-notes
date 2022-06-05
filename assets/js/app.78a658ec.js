(function(){"use strict";var t={6227:function(t,e,n){var r=n(9242),i=n(678),o=n(3396);function s(t,e,n,r,i,s){const l=(0,o.up)("Form"),a=(0,o.up)("List");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(a)],64)}const l={class:"note-form__wrapper"},a=(0,o._)("button",{class:"btn btnPrimary",type:"submit"},"Add new note",-1);function c(t,e,n,i,s,c){const u=(0,o.up)("TagsList");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("form",{class:"note-form",onSubmit:e[1]||(e[1]=(0,r.iM)(((...t)=>c.onSubmit&&c.onSubmit(...t)),["prevent"]))},[(0,o.wy)((0,o._)("textarea",{required:"","onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),placeholder:"Type your note"},null,512),[[r.nr,s.value]]),(0,o.Wm)(u,{items:c.getTags},null,8,["items"]),a],32)])}var u=n(7139);const d={class:"tags-list"},v=["onClick"];function g(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:(0,u.C_)(["tag-item",{isActive:n.isActive,isPreview:n.isPreview}]),key:t,onClick:e=>s.onTagClick(t)},(0,u.zw)(t),11,v)))),128))])}var h={props:{items:{type:Array,required:!0},isActive:{type:Boolean,default:!1},isPreview:{type:Boolean,default:!1}},methods:{onTagClick(t){event.target.closest(".note-form")&&event.target.classList.toggle("isActive")}}},m=n(89);const p=(0,m.Z)(h,[["render",g]]);var f=p,w={components:{TagsList:f},data(){return{value:""}},computed:{getTags(){return this.$store.getters.getTags}},methods:{onSubmit(){const t=this.value.trim(),e=document.querySelector(".note-form").querySelectorAll(".tag-item"),n=Array.from(e).filter((t=>t.classList.contains("isActive"))),r=n.map((t=>t.textContent));this.$store.dispatch("addNote",{title:t,activeTags:r}).then((()=>this.value="")).then((()=>document.querySelectorAll(".tag-item").forEach((t=>t.classList.remove("isActive"))))).catch((t=>console.log(t)))}}};const y=(0,m.Z)(w,[["render",c]]);var _=y;const k={class:"notes-list"},b={class:"note-header"},x=["onClick"],C={class:"note-footer"};function G(t,e,n,r,i,s){const l=(0,o.up)("Search"),a=(0,o.up)("TagsList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.getNotes,(t=>((0,o.wg)(),(0,o.iD)("div",{class:(0,u.C_)(["note-item",{grid:s.getGrid}]),key:t.id},[(0,o._)("div",b,[(0,o._)("p",null,(0,u.zw)(t.title),1),(0,o._)("p",{style:{cursor:"pointer"},onClick:e=>s.onRemove(t.id)},"✕",8,x)]),(0,o._)("div",C,[t.tags&&t.tags.length>0?((0,o.wg)(),(0,o.j4)(a,{key:0,isPreview:"",items:t.tags},null,8,["items"])):(0,o.kq)("",!0)])],2)))),128))])],64)}const T={class:"wrapper__search"},D=(0,o.uE)('<div class="search"><div class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div></div>',1),N={class:"notes-show"},S=(0,o.uE)('<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',6),L=[S],O=(0,o.Uk)(". "),A=(0,o._)("rect",{x:"3",y:"3",width:"7",height:"7"},null,-1),j=(0,o._)("rect",{x:"14",y:"3",width:"7",height:"7"},null,-1),F=(0,o._)("rect",{x:"14",y:"14",width:"7",height:"7"},null,-1),H=(0,o._)("rect",{x:"3",y:"14",width:"7",height:"7"},null,-1),W=[A,j,F,H];function Z(t,e,n,i,s,l){return(0,o.wg)(),(0,o.iD)("div",T,[D,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Find your note",onInput:e[0]||(e[0]=(...t)=>l.onSearch&&l.onSearch(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t)},null,544),[[r.nr,s.value]]),(0,o._)("div",N,[((0,o.wg)(),(0,o.iD)("svg",{class:(0,u.C_)({active:!l.getGrid}),onClick:e[2]||(e[2]=(...t)=>l.onFalseGrid&&l.onFalseGrid(...t)),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},L,2)),O,((0,o.wg)(),(0,o.iD)("svg",{class:(0,u.C_)({active:l.getGrid}),onClick:e[3]||(e[3]=(...t)=>l.onTrueGrid&&l.onTrueGrid(...t)),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},W,2))])])}var $={data(){return{value:""}},computed:{getGrid(){return this.$store.getters.getGrid}},methods:{onTrueGrid(){this.$store.dispatch("trueGrid")},onFalseGrid(){this.$store.dispatch("falseGrid")},onSearch(){this.$store.dispatch("searchNote",this.value)}}};const U=(0,m.Z)($,[["render",Z]]);var P=U,V={components:{TagsList:f,Search:P},mounted(){this.$store.getters.checkLocalStorage},computed:{getNotes(){return this.$store.getters.getNotes},getGrid(){return this.$store.getters.getGrid}},methods:{onRemove(t){this.$store.dispatch("removeNote",t)}}};const Y=(0,m.Z)(V,[["render",G]]);var q=Y,z={components:{Form:_,List:q}};const B=(0,m.Z)(z,[["render",s]]);var E=B;const I=(0,o._)("h1",{class:"title"},"В этом приложении",-1),K=(0,o._)("ul",{class:"list-items"},[(0,o._)("li",null,"🔥 Полная настройка шаблона на vue CLI;"),(0,o._)("li",null,"🔥 VUEX + Vue 3;"),(0,o._)("li",null,"Создание глобальных конфигов;"),(0,o._)("li",null,"Передача данных между компонентами;"),(0,o._)("li",null,"Разделение логики по компонентам;"),(0,o._)("li",null,"Локальное хранилише;"),(0,o._)("li",null,"Фильтрация элементов;")],-1);function M(t,e){return(0,o.wg)(),(0,o.iD)(o.HY,null,[I,K],64)}const J={},R=(0,m.Z)(J,[["render",M]]);var X=R;const Q={class:"title"};function tt(t,e){return(0,o.wg)(),(0,o.iD)("h1",Q,"404 Not Found")}const et={},nt=(0,m.Z)(et,[["render",tt]]);var rt=nt;const it=(0,i.r5)(),ot=(0,i.p7)({history:it,routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:X},{path:"/:CatchAll(.*)",name:"404",component:rt}]});var st=ot,lt=n(65);const at=t=>{const e=localStorage.getItem(t);if(e&&2!==e.length)return JSON.parse(e)},ct=(t,e)=>localStorage.setItem(t,JSON.stringify(e));var ut=n(5936),dt=n.n(ut);const vt=(0,lt.MT)({state:{notes:[{id:dt()(),title:"Learn Vue 3",tags:["work"]},{id:dt()(),title:"Finish Course",tags:["work","home"]},{id:dt()(),title:"Visit Museum",tags:["travel"]}],tags:["home","work","travel"],grid:!1,search:""},mutations:{addNote(t,{title:e,activeTags:n}){const r={id:dt()(),title:e.trim(),tags:n};t.notes.push(r),ct("notes",t.notes)},removeNote(t,e){t.notes.splice(t.notes.findIndex((t=>t.id===e)),1),ct("notes",t.notes)},trueGrid(t){t.grid=!0},falseGrid(t){t.grid=!1},searchNote(t,e){t.search=e.trim().toLowerCase()}},actions:{addNote({commit:t},{title:e,activeTags:n}){t("addNote",{title:e,activeTags:n})},removeNote({commit:t},e){t("removeNote",e)},trueGrid({commit:t}){t("trueGrid")},falseGrid({commit:t}){t("falseGrid")},searchNote({commit:t},e){t("searchNote",e)}},getters:{checkLocalStorage(t){if(at("notes")){const e=at("notes");return t.notes=e}return t.notes},getNotes(t){return t.search?t.notes.filter((e=>{if(-1!==e.title.toLowerCase().indexOf(t.search))return e})):t.notes},getTags(t){return t.tags},getGrid(t){return t.grid}}}),gt={class:"wrapper"},ht={class:"container"},mt={class:"wrapper-content"};function pt(t,e,n,r,i,s){const l=(0,o.up)("Header"),a=(0,o.up)("router-view"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",gt,[(0,o._)("div",ht,[(0,o.Wm)(l),(0,o._)("main",mt,[(0,o.Wm)(a)]),(0,o.Wm)(c)])])}const ft={class:"navbar"},wt={class:"container"},yt={class:"navbar-content"},_t={class:"navbar-list"};function kt(t,e,n,r,i,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",ft,[(0,o._)("div",wt,[(0,o._)("div",yt,[(0,o.Wm)(l,{class:"navbar-logo",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(i.title),1)])),_:1}),(0,o._)("ul",_t,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.links,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"navbar-item",key:t.alias},[(0,o.Wm)(l,{class:"navbar-link",to:t.url},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.title),1)])),_:2},1032,["to"])])))),128))])])])])])}const bt={dev:!0},xt=(bt.dev,{title:"Notes"}),Ct=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}];var Gt={data(){return{title:xt.title,links:Ct}}};const Tt=(0,m.Z)(Gt,[["render",kt]]);var Dt=Tt,Nt=n.p+"assets/img/github.83d361dc.svg";const St={class:"footer"},Lt={class:"container"},Ot={class:"navbar-list"},At=(0,o._)("li",null,[(0,o._)("a",{class:"navbar-link",target:"_blank",href:"https://github.com/ollaweb/vue3-cli-notes"},[(0,o.Uk)("visit my repo "),(0,o._)("img",{src:Nt,alt:"github"})])],-1),jt=(0,o._)("ul",{class:"navbar-list",style:{"margin-top":"14px"}},[(0,o._)("li",{class:"navbar-item",style:{opacity:"0.6","font-size":"14px"}},[(0,o._)("a",{href:"https://tocode.ru",class:"navbar-link"},'Сделано на курсе "Vue.js 3"')])],-1);function Ft(t,e,n,r,i,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",St,[(0,o._)("div",Lt,[(0,o._)("ul",Ot,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.links,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"navbar-item",key:t.alias},[(0,o.Wm)(l,{class:"navbar-link",to:t.url},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.title),1)])),_:2},1032,["to"])])))),128)),At]),jt])])}var Ht={data(){return{links:Ct}}};const Wt=(0,m.Z)(Ht,[["render",Ft]]);var Zt=Wt,$t={components:{Header:Dt,Footer:Zt}};const Ut=(0,m.Z)($t,[["render",pt]]);var Pt=Ut;const Vt=(0,r.ri)(Pt);Vt.use(vt),Vt.use(st),Vt.mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var l=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(l=!1,o<s&&(s=o));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/vue3-cli-notes/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],l=r[1],a=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var u=a(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkvue3_cli_template"]=self["webpackChunkvue3_cli_template"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6227)}));r=n.O(r)})();
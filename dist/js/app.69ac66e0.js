(function(t){function e(e){for(var o,a,l=e[0],u=e[1],s=e[2],d=0,i=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&i.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);b&&b(e);while(i.length)i.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1422:function(t,e,n){"use strict";n("187b")},"187b":function(t,e,n){},5095:function(t,e,n){"use strict";n("9462")},5476:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["t"])("data-v-2b28f347");Object(o["k"])("data-v-2b28f347");var c={style:{display:"flex"}},a={class:"left"},l=Object(o["g"])("Add Content "),u=Object(o["g"])("Show Content"),s={key:0,class:"right"};Object(o["j"])();var b=r((function(t,e,n,b,d,i){var f=Object(o["n"])("the-header"),p=Object(o["n"])("base-button"),j=Object(o["n"])("test-fold");return Object(o["i"])(),Object(o["d"])(o["a"],null,[Object(o["h"])(f,{"v-slot":i.theTitle},{default:r((function(){return[Object(o["g"])(Object(o["p"])(i.theTitle),1)]})),_:1},8,["v-slot"]),Object(o["h"])("div",c,[Object(o["h"])("div",a,[Object(o["h"])(p,{onClick:e[1]||(e[1]=function(t){return i.toglleComponent("add-content")}),class:i.theContent},{default:r((function(){return[l]})),_:1},8,["class"]),Object(o["h"])(p,{onClick:e[2]||(e[2]=function(t){return i.toglleComponent("test-fold")}),class:i.theTest},{default:r((function(){return[u]})),_:1},8,["class"]),(Object(o["i"])(),Object(o["d"])(o["b"],null,[(Object(o["i"])(),Object(o["d"])(Object(o["o"])(d.myCompocont),{onPersonContent:i.adderContent,onDeleteContact:i.deleter,myPersons:d.persons},null,8,["onPersonContent","onDeleteContact","myPersons"]))],1024))]),i.shower?(Object(o["i"])(),Object(o["d"])("div",s,[Object(o["h"])(j,{onPersonContent:i.adderContent,onDeleteContact:i.deleter,myPersons:d.persons},null,8,["onPersonContent","onDeleteContact","myPersons"])])):Object(o["e"])("",!0)])],64)})),d=(n("7db0"),n("159b"),Object(o["t"])("data-v-5f89b39a"));Object(o["k"])("data-v-5f89b39a");var i=Object(o["g"])("Delete");Object(o["j"])();var f=d((function(t,e,n,r,c,a){var l=Object(o["n"])("base-button");return Object(o["i"])(),Object(o["d"])("div",null,[(Object(o["i"])(!0),Object(o["d"])(o["a"],null,Object(o["l"])(n.myPersons,(function(t){return Object(o["i"])(),Object(o["d"])("ul",{key:t.id},[Object(o["h"])("li",null,[Object(o["h"])("h1",null,Object(o["p"])(t.f_name),1)]),Object(o["h"])("li",null,[Object(o["h"])("h2",null,Object(o["p"])(t.l_name),1)]),Object(o["h"])("li",null,[Object(o["h"])("h3",null,Object(o["p"])(t.age),1)]),Object(o["h"])("li",null,[Object(o["h"])("h4",null,Object(o["p"])(t.stat),1)]),Object(o["h"])("li",null,[Object(o["h"])("h5",null,Object(o["p"])(t.city),1)]),Object(o["h"])(l,{class:"red",onClick:function(e){return a.deleter(t.id)}},{default:d((function(){return[i]})),_:2},1032,["onClick"])])})),128))])})),p={props:["myPersons"],data:function(){return{persons:this.myPersons}},methods:{deleter:function(t){this.$emit("delete-contact",t)}}};n("5095");p.render=f,p.__scopeId="data-v-5f89b39a";var j=p,O=Object(o["t"])("data-v-4dfb78f8");Object(o["k"])("data-v-4dfb78f8");var h=Object(o["f"])('<div class="firstHalf" data-v-4dfb78f8><label for="first_name" data-v-4dfb78f8>First Name</label><br data-v-4dfb78f8><br data-v-4dfb78f8><label for="last_name" data-v-4dfb78f8>Last Name</label><br data-v-4dfb78f8><br data-v-4dfb78f8><label for="age" data-v-4dfb78f8>age</label><br data-v-4dfb78f8><br data-v-4dfb78f8><label for="stat" data-v-4dfb78f8>Stat</label><br data-v-4dfb78f8><br data-v-4dfb78f8><label for="city" data-v-4dfb78f8>City</label><br data-v-4dfb78f8><br data-v-4dfb78f8></div>',1),v={class:"half"},m=Object(o["h"])("br",null,null,-1),C=Object(o["h"])("br",null,null,-1),y=Object(o["h"])("br",null,null,-1),_=Object(o["h"])("br",null,null,-1),g=Object(o["h"])("br",null,null,-1),P=Object(o["h"])("br",null,null,-1),w=Object(o["h"])("br",null,null,-1),k=Object(o["h"])("br",null,null,-1),x=Object(o["h"])("br",null,null,-1),S=Object(o["h"])("br",null,null,-1),T=Object(o["g"])("Submit");Object(o["j"])();var q=O((function(t,e,n,r,c,a){var l=Object(o["n"])("base-button");return Object(o["i"])(),Object(o["d"])("div",null,[Object(o["h"])("form",{onSubmit:e[6]||(e[6]=Object(o["s"])((function(){return a.addContent&&a.addContent.apply(a,arguments)}),["prevent"]))},[h,Object(o["h"])("div",v,[Object(o["r"])(Object(o["h"])("input",{id:"first_name",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.personContent.f_name=t})},null,512),[[o["q"],c.personContent.f_name]]),m,C,Object(o["r"])(Object(o["h"])("input",{id:"last_name",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.personContent.l_name=t})},null,512),[[o["q"],c.personContent.l_name]]),y,_,Object(o["r"])(Object(o["h"])("input",{id:"age",type:"number","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.personContent.age=t})},null,512),[[o["q"],c.personContent.age]]),g,P,Object(o["r"])(Object(o["h"])("input",{id:"stat",type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.personContent.stat=t})},null,512),[[o["q"],c.personContent.stat]]),w,k,Object(o["r"])(Object(o["h"])("input",{id:"city",type:"text","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.personContent.city=t})},null,512),[[o["q"],c.personContent.city]]),x,S,Object(o["h"])(l,{class:"radius sub"},{default:O((function(){return[T]})),_:1})])],32)])})),D=(n("a9e3"),{data:function(){return{personContent:{f_name:"",l_name:"",age:Number,stat:"",city:""}}},methods:{addContent:function(){this.$emit("person-content",this.personContent.f_name,this.personContent.l_name,this.personContent.age,this.personContent.stat,this.personContent.city),this.personContent.f_name="",this.personContent.l_name="",this.personContent.age=null,this.personContent.stat="",this.personContent.city=""}},emits:["person-content"]});n("6cac");D.render=q,D.__scopeId="data-v-4dfb78f8";var U=D,V={name:"App",components:{"test-fold":j,"add-content":U},data:function(){return{myCompocont:"add-content",persons:[]}},computed:{shower:function(){return"add-content"===this.myCompocont},theTitle:function(){return"add-content"===this.myCompocont?"Add Content":"Show Content"},theContent:function(){return"add-content"===this.myCompocont?"actived":null},theTest:function(){return"test-fold"===this.myCompocont?"actived":null}},methods:{deleter:function(t){var e=this,n=this.persons.find((function(e){return e.id===t})),o=n.id,r=[];this.persons.forEach((function(t){t.id!==o&&r.push(t),e.persons=r}))},toglleComponent:function(t){this.myCompocont=t},adderContent:function(t,e,n,o,r){var c=0;0!==this.persons.length&&(c=this.persons.length),this.persons.unshift({id:c,f_name:t,l_name:e,age:n,stat:o,city:r})}}};n("87f3");V.render=b,V.__scopeId="data-v-2b28f347";var I=V,M={class:"btn"};function $(t,e,n,r,c,a){return Object(o["i"])(),Object(o["d"])("button",M,[Object(o["m"])(t.$slots,"default")])}var A={};n("edcb");A.render=$;var N=A,B=Object(o["t"])("data-v-0df62327");Object(o["k"])("data-v-0df62327");var J={class:"title"};Object(o["j"])();var E=B((function(t,e,n,r,c,a){return Object(o["i"])(),Object(o["d"])("div",J,[Object(o["h"])("h1",null,[Object(o["m"])(t.$slots,"default",{},void 0,!0)])])})),F={data:function(){return{}}};n("1422");F.render=E,F.__scopeId="data-v-0df62327";var H=F,L=Object(o["c"])(I);L.component("BaseButton",N),L.component("the-header",H),L.mount("#app")},"638f":function(t,e,n){},"6cac":function(t,e,n){"use strict";n("8746")},8746:function(t,e,n){},"87f3":function(t,e,n){"use strict";n("5476")},9462:function(t,e,n){},edcb:function(t,e,n){"use strict";n("638f")}});
//# sourceMappingURL=app.69ac66e0.js.map
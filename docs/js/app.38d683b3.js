(function(e){function t(t){for(var n,a,i=t[0],l=t[1],c=t[2],d=0,b=[];d<i.length;d++)a=i[d],s[a]&&b.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/scorecard/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b14":function(e,t,r){"use strict";var n=r("3bf7"),s=r.n(n);s.a},"251c":function(e,t,r){},"3bf7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("a481"),r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=r("9f7b"),o=r("8c4f"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{variant:"secondary",type:"dark",toggleable:"md"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-navbar-brand",{attrs:{href:"#"}},[e._v(e._s(e.currentGameName))]),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"},on:{click:e.newGame}},[e._v("New Game")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Select Game",right:""}},[r("b-dropdown-item",[r("router-link",{attrs:{to:"/fiesty"}},[e._v("Fiesty Dice")])],1),r("b-dropdown-item",[r("router-link",{attrs:{to:"/qwaxx"}},[e._v("Qwaxx")])],1)],1)],1)],1)],1),r("b-container",{staticClass:"mt-5 mb-5",attrs:{id:"cont"}},[r("b-row",[r("b-col",{attrs:{lg:"1",md:"0",sm:"0"}}),r("b-col",{attrs:{lg:"10",md:"12",sm:"12"}},[r("router-view")],1),r("b-col",{attrs:{lg:"1",md:"0",sm:"0"}})],1)],1)],1)},i=[],l=(r("7f7f"),{data:{currentGame:null,games:{}},newGame:function(){this.data.currentGame.newGame()}}),c={name:"App",data:function(){return{shared:l.data}},computed:{currentGameName:function(){return this.shared.currentGame?this.shared.currentGame.name:"Select Game"}},methods:{newGame:function(){l.newGame()}}},u=c,d=(r("892d"),r("2877")),b=Object(d["a"])(u,a,i,!1,null,"71f386c4",null),f=b.exports,m=(r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-row",[r("b-col",[r("b-card",{attrs:{"no-body":""}},[r("b-container",{staticClass:"text-center"},[r("Row",{ref:"rowRed",staticClass:"pb-2 pt-2",attrs:{id:"red",color:"danger"},on:{mark:function(t){e.mark("red",t)}}}),r("Row",{ref:"rowYellow",staticClass:"pb-2",attrs:{id:"yellow",color:"warning"},on:{mark:function(t){e.mark("yellow",t)}}}),r("hr",{staticClass:"my-1 py-1"}),r("Row",{ref:"rowGreen",staticClass:"pb-2",attrs:{id:"green",color:"success",reverse:!0},on:{mark:function(t){e.mark("green",t)}}}),r("Row",{ref:"rowBlue",staticClass:"pb-2",attrs:{id:"blue",color:"primary",reverse:!0},on:{mark:function(t){e.mark("blue",t)}}})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{attrs:{disabled:!0,variant:"danger"}},[e._v(e._s(e.totalRed))]),r("b-button",{attrs:{disabled:!0,variant:"warning"}},[e._v(e._s(e.totalYellow))]),r("b-button",{attrs:{disabled:!0,variant:"success"}},[e._v(e._s(e.totalGreen))]),r("b-button",{attrs:{disabled:!0,variant:"primary"}},[e._v(e._s(e.totalBlue))])],1),r("b-button-group",{staticClass:"ml-3",attrs:{size:"lg"}},[r("b-button",{attrs:{variant:"outline-secondary"},on:{click:e.strike}},[e._v("Strike "+e._s(e.strikes))])],1),r("b-button-group",{staticClass:"float-right",attrs:{size:"lg"}},[r("b-button",{attrs:{variant:"outline-success",disabled:!0}},[e._v(e._s(e.total))])],1)],1)])],1)],1)],1)],1)}),h=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-button-group",[e._l(this.numbers,function(t,n){return r("b-button",{key:n,attrs:{variant:e.varientNumber(t),disabled:e.disabledNumber(t)},on:{click:function(r){e.mark(t)}}},[e._v("\n    "+e._s(t.display)+"\n  ")])}),r("b-button",{attrs:{variant:e.varientLock()},on:{click:e.lock}},[e._v("\n    X\n  ")])],2)},k=[],v={props:{id:String,color:String,reverse:Boolean},beforeMount:function(){if(this.reverse)for(var e=0;e<this.numbers.length;e++)this.numbers[e].display=""+(12-e)},methods:{disabledNumber:function(e){return this.locked||e.key<this.highest||this.marks<e.required},varientNumber:function(e){return e.marked?this.color:"outline-"+this.color},varientLock:function(){return this.locked?"secondary":"outline-secondary"},lock:function(){this.locked=!this.locked},mark:function(e){e.marked=!e.marked,12==e.key&&(this.locked=e.marked),this.$emit("mark",this.marks),document.activeElement.blur()},newGame:function(){this.locked=!1;for(var e=0;e<this.numbers.length;e++)this.numbers[e].marked=!1}},computed:{highest:function(){for(var e=0,t=0;t<this.numbers.length;t++)this.numbers[t].marked&&(e=this.numbers[t].key);return e},marks:function(){for(var e=0,t=0;t<this.numbers.length;t++)this.numbers[t].marked&&e++;return this.numbers[this.numbers.length-1].marked&&e++,e}},data:function(){return{name:"Quacks",locked:!1,numbers:[{key:2,display:"2",marked:!1,required:0},{key:3,display:"3",marked:!1,required:0},{key:4,display:"4",marked:!1,required:0},{key:5,display:"5",marked:!1,required:0},{key:6,display:"6",marked:!1,required:0},{key:7,display:"7",marked:!1,required:0},{key:8,display:"8",marked:!1,required:0},{key:9,display:"9",marked:!1,required:0},{key:10,display:"10",marked:!1,required:0},{key:11,display:"11",marked:!1,required:0},{key:12,display:"12",marked:!1,required:5}]}}},y=v,g=(r("dd13"),Object(d["a"])(y,p,k,!1,null,"762b2b8a",null)),w=g.exports,_={components:{Row:w},methods:{mark:function(e,t){this.$set(this.marks,e,t),this.saveGame()},strike:function(){this.strikes++},saveGame:function(){},newGame:function(){this.marks={},this.strikes=0,this.$refs.rowRed.newGame(),this.$refs.rowYellow.newGame(),this.$refs.rowGreen.newGame(),this.$refs.rowBlue.newGame()},score:function(e){return e<=0?0:1==e?1:this.score(e-1)+e}},computed:{totalRed:function(){return this.marks["red"]?this.score(this.marks["red"]):0},totalYellow:function(){return this.marks["yellow"]?this.score(this.marks["yellow"]):0},totalGreen:function(){return this.marks["green"]?this.score(this.marks["green"]):0},totalBlue:function(){return this.marks["blue"]?this.score(this.marks["blue"]):0},total:function(){return this.totalRed+this.totalYellow+this.totalGreen+this.totalBlue-5*this.strikes}},mounted:function(){this.store.currentGame=this,this.store.games["qwaxx"]=this},data:function(){return{name:"Qwaxx",store:l.data,marks:{},strikes:0}}},G=_,S=(r("7af3"),Object(d["a"])(G,m,h,!1,null,null,null)),x=S.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-row",[r("b-col",[r("b-card",{attrs:{"no-body":""}},[e._l(this.rows,function(t,n){return r("Row",{key:n,ref:"row",refInFor:!0,attrs:{label:t.label,description:t.description,initialScore:t.score},on:{score:function(t){e.score(n,t)}}})}),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("div",{staticClass:"float-left"},[r("b-input-group",{attrs:{size:"lg"}},[r("b-input-group-prepend",[r("div",{staticClass:"input-group-text border-success text-success bg-light rounded"},[r("b",[e._v(e._s(e.total()))])])])],1)],1),r("div",{staticClass:"float-right"},[r("b-input-group",{attrs:{size:"lg"}},[r("b-input-group-prepend",[r("div",{staticClass:"input-group-text bg-light border-primary"},[e.rolls>1?r("span",[e._v(e._s(e.rolls)+" Left")]):1==e.rolls?r("span",[e._v(e._s(e.rolls)+" Left!")]):r("span",[e._v("No Rolls!")])])]),r("b-input-group-append",[r("b-button",{attrs:{disabled:e.rolls<=0,variant:"primary"},on:{click:e.roleTaken}},[e._v("   -   ")]),r("b-button",{attrs:{disabled:e.rolls>=30,variant:"outline-primary"},on:{click:e.roleTakenBack}},[e._v("+")])],1)],1)],1)])],2)],1)],1)],1)},q=[],C=r("db0c"),O=r.n(C),$=r("f499"),j=r.n($),N=(r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-input-group",[r("b-input-group-prepend",[r("div",{staticClass:"input-group-text"},[e._v(e._s(e.label))])]),r("b-form-input",{attrs:{type:"number",placeholder:e.description},on:{change:e.changeScore},model:{value:e.score,callback:function(t){e.score=t},expression:"score"}}),null!=e.score&&""!=e.score?[r("span",{staticClass:"fas fa-check form-control-feedback",staticStyle:{color:"green"}})]:e._e()],2)}),B=[],P={props:{label:String,description:String,initialScore:Number},data:function(){return{score:null}},beforeMount:function(){this.initialScore>=0&&(this.score=this.initialScore)},methods:{changeScore:function(){this.setScore(this.score),document.activeElement.blur()},setScore:function(e){this.score=e,this.$emit("score",this.score)},newGame:function(){this.setScore(null)}}},E=P,T=(r("0b14"),Object(d["a"])(E,N,B,!1,null,"2af34787",null)),M=T.exports,z={components:{Row:M},methods:{score:function(e,t){this.rows[e].score=null==t||""==t?null:Number(t),this.saveGame()},roleTaken:function(){this.rolls--,this.saveGame()},roleTakenBack:function(){this.rolls++,this.saveGame()},saveGame:function(){var e=j()({rolls:this.rolls,rows:this.rows});localStorage.setItem("fiesty",e)},newGame:function(){for(var e=0;e<this.rows.length;e++)this.$refs.row[e].newGame();this.rolls=30},bonus:function(){return 5*this.rolls},total:function(){return this.bonus()+O()(this.rows).reduce(function(e,t){return e+t.score},0)}},mounted:function(){if(l.data.currentGame=this,l.data.games["qwacks"]=this,localStorage.getItem("fiesty"))try{for(var e=JSON.parse(localStorage.getItem("fiesty")),t=0;t<this.rows.length;t++)null!=e.rows[t].score&&this.$refs.row[t].setScore(e.rows[t].score);this.rolls=e.rolls}catch(r){localStorage.removeItem("fiesty")}},data:function(){return{name:"Fiesty Dice",rolls:30,rows:[{key:0,label:"6",score:null,description:"Red doubles, 75 for 6 (50 any other)"},{key:1,label:"5",score:null,description:"Red doubles, 75 for 6 (50 any other)"},{key:2,label:"4",score:null,description:"Red doubles, 75 for 6 (50 any other)"},{key:3,label:"3",score:null,description:"Red doubles, 50 for 6 (25 any other)"},{key:4,label:"2",score:null,description:"Red doubles, 50 for 6 (25 any other)"},{key:5,label:"1",score:null,description:"Red doubles, 50 for 6 (25 any other)"},{key:6,label:"Run",score:null,description:"21 Points - red eligible"},{key:7,label:"Set",score:null,description:"2|2|2, 3|3, 4|2 - red eligible"},{key:8,label:"Sum",score:null},{key:9,label:"Red",score:null,description:"10 Points per red number"}]}}},I=z,Y=Object(d["a"])(I,R,q,!1,null,null,null),L=Y.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]),n["a"].use(o["a"]);var F=new o["a"]({routes:[{path:"/qwaxx",component:x},{path:"/fiesty",component:L}]});new n["a"]({router:F,render:function(e){return e(f)}}).$mount("#app"),"/"==F.currentRoute.path&&F.replace("/fiesty")},"7af3":function(e,t,r){"use strict";var n=r("eb31"),s=r.n(n);s.a},"892d":function(e,t,r){"use strict";var n=r("be86"),s=r.n(n);s.a},be86:function(e,t,r){},dd13:function(e,t,r){"use strict";var n=r("251c"),s=r.n(n);s.a},eb31:function(e,t,r){}});
//# sourceMappingURL=app.38d683b3.js.map
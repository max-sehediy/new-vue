(function(t){function e(e){for(var s,c,n=e[0],o=e[1],l=e[2],d=0,p=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,n=1;n<i.length;n++){var o=i[n];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var s={},a={app:0},r=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=s,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(i,s,function(e){return t[e]}.bind(null,s));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"01f3":function(t,e,i){},"034f":function(t,e,i){"use strict";var s=i("85ec"),a=i.n(s);a.a},"05a6":function(t,e,i){},"253e":function(t,e,i){"use strict";var s=i("dcd0"),a=i.n(s);a.a},5440:function(t,e,i){"use strict";var s=i("6d90"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],c={name:"App",components:{}},n=c,o=(i("034f"),i("2877")),l=Object(o["a"])(n,a,r,!1,null,null,null),u=l.exports,d=i("289d"),p=(i("5abe"),i("8c4f")),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("header-section"),i("div",{staticClass:"container"},[i("div",{staticClass:"columns"},[i("filter-section",{staticClass:"culumn is-one-quarter"}),i("products",{staticClass:"culumn"})],1)]),i("footer-section")],1)},m=[],v=i("5530"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",[i("template",{slot:"brand"},[i("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[i("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])],1),i("template",{slot:"start"},[i("b-navbar-item",[i("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),i("b-navbar-item",[i("router-link",{attrs:{to:"/CreateProduct"}},[t._v(" Створити новий продукт ")])],1),i("b-navbar-item",{attrs:{href:"#"}},[t._v(" Контакти ")])],1),i("div",{}),i("template",{slot:"end"},[i("b-navbar-item",{attrs:{tag:"div"}},[i("section",{staticClass:"search"},[i("b-input",{attrs:{type:"text",placeholder:"Пошук по назві продукта",icon:"search","icon-pack":"fas"},model:{value:t.searchTitleText,callback:function(e){t.searchTitleText=e},expression:"searchTitleText"}}),i("b-button",{attrs:{type:"is-success"},on:{click:function(e){return t.serchTitle()}}},[t._v("Пошук")])],1),i("div",{staticClass:"buttons"},[i("a",{staticClass:"button is-primary"},[i("strong",[t._v("Sign up")])]),i("a",{staticClass:"button is-light"},[t._v(" Log in")])])])],1)],2)},b=[],g=i("2f62"),C={name:"HeaderSection",data:function(){return{searchTitleText:null}},methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["filterTitle"])),{},{serchTitle:function(){this.filterTitle(this.searchTitleText)}})},_=C,y=(i("253e"),Object(o["a"])(_,h,b,!1,null,"c424a8f6",null)),w=y.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"content has-text-centered"},[i("p",[i("strong",[t._v("Bulma")]),t._v(" by "),i("a",{attrs:{href:"https://jgthms.com"}},[t._v("Jeremy Thomas")]),t._v(". The source code is licensed "),i("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content is licensed "),i("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(". ")])])])}],O={name:"FooterSection"},j=O,T=Object(o["a"])(j,P,x,!1,null,"70f95a1c",null),S=T.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},t._l(t.getFilterProductList,(function(t){return i("div",{key:t.id,staticClass:"columns"},[i("product-card",{attrs:{id:t.id,title:t.title,subtitle:t.subtitle,img:t.img,category:t.category,price:t.price}})],1)})),0)},k=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[i("div",{staticClass:"tile is-child notification"},[i("figure",{staticClass:"image",on:{click:function(e){return t.getToCard()}}},[i("img",{attrs:{src:t.img,alt:"Oops"}})]),i("div",{staticClass:"tile notification is-child is-warning"},[i("p",{staticClass:"title is-5 notification is-success",on:{click:function(e){return t.getToCard()}}},[t._v(" "+t._s(t.title)+" ")]),i("p",{staticClass:"content"},[t._v(t._s(t.subtitle))]),i("p",{staticClass:"has-text-right"},[t._v("Категорія:")]),i("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.category))]),i("p",{staticClass:"subtitle is-6"},[t._v("Ціна: "+t._s(t.showPrice))])])])])},$=[],E=(i("fb6a"),i("a9e3"),i("d3b7"),i("25f0"),{name:"ProductCard",props:{title:{type:String,default:""},subtitle:{type:String,default:""},id:{type:[Number,String],default:null},img:{type:String,default:""},category:{type:String,default:""},price:{type:[Number,String],default:"not available"}},computed:{showPrice:function(){var t=this.price.toString();return t[0]+" "+t.slice(1)}},methods:{getToCard:function(){this.$router.push({name:"card",params:{product_id:this.id}})}}}),D=E,F=(i("7ce7"),Object(o["a"])(D,N,$,!1,null,"7bcd1289",null)),I=F.exports,M={name:"Products",components:{ProductCard:I},data:function(){return{}},computed:Object(v["a"])(Object(v["a"])({},Object(g["c"])(["showProductList","getFilterProductList","getFilterProductList"])),{},{whatSeeUser:function(){return this.getFilterProductList.length?this.getFilterProductList:this.showProductList}})},V=M,A=(i("5440"),Object(o["a"])(V,L,k,!1,null,"44ccd69e",null)),H=A.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[i("b-field",{attrs:{label:"Фільтр по ціні"}},[i("b-slider",{attrs:{min:t.minPrice,max:t.maxPrice,step:10,ticks:""},model:{value:t.numbers,callback:function(e){t.numbers=e},expression:"numbers"}})],1),i("b-field",{attrs:{label:"Фільтр по категорії"}}),i("b-field",[i("b-select",{staticClass:"is-large",attrs:{placeholder:"Default"}},t._l(t.categoryFilter,(function(t){return i("option",{key:t,domProps:{value:t}})})),0)],1)],1)},U=[],q=(i("4de4"),i("a630"),i("d81d"),i("6062"),i("3ca3"),i("ddb0"),i("2909")),B={data:function(){return{numbers:[],min:null}},computed:Object(v["a"])(Object(v["a"])({},Object(g["c"])(["showProductList"])),{},{minPrice:function(){var t=this.showProductList.map((function(t){return isNaN(t.price)?0:t.price}));return Math.min.apply(Math,Object(q["a"])(t.filter((function(t){return t>0}))))},maxPrice:function(){var t=this.showProductList.map((function(t){return isNaN(t.price)?0:t.price}));return Math.max.apply(Math,Object(q["a"])(t.filter((function(t){return t>0}))))},categoryFilter:function(){var t=this.showProductList.map((function(t){return t.category})),e=new Set(t);return Array.from(e)}}),methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["filterPrice"])),{},{filterPriceSet:function(t){this.filterPrice(t)}})},R=B,z=(i("73cd"),Object(o["a"])(R,J,U,!1,null,"5cfed131",null)),G=z.exports,Y={name:"Home",components:{HeaderSection:w,FooterSection:S,Products:H,FilterSection:G},data:function(){return{products:[],testArr:null}},methods:Object(v["a"])({},Object(g["b"])(["loadDate"])),mounted:function(){this.loadDate(this)}},K=Y,Z=(i("edbf"),Object(o["a"])(K,f,m,!1,null,"6c70e4db",null)),Q=Z.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header-section"),i("div",{staticClass:"container"},[i("product-card-view",{attrs:{productCardData:t.showProduct}})],1),i("footer-section")],1)},X=[],tt=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-parent"},[i("div",{staticClass:"tile is-child"},[i("img",{attrs:{src:t.productCardData.img,alt:"Oops"}})]),i("div",{staticClass:"tile is-child box"},[i("p",{staticClass:"title is-4"},[t._v("Name: "+t._s(t.productCardData.title))]),i("p",{staticClass:"content is-5"},[t._v(t._s(t.productCardData.description))])])])}),et=[],it={name:"ProductCardView",props:{productCardData:{type:Object}}},st=it,at=Object(o["a"])(st,tt,et,!1,null,"4be7f224",null),rt=at.exports,ct={name:"Card",components:{HeaderSection:w,FooterSection:S,ProductCardView:rt},computed:Object(v["a"])(Object(v["a"])({},Object(g["c"])(["showProductList"])),{},{showProduct:function(){var t=this;return this.showProductList.find((function(e){return e.id==t.$route.params.product_id}))}})},nt=ct,ot=Object(o["a"])(nt,W,X,!1,null,"1bc3c536",null),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("header-section"),i("div",{staticClass:"container"},[i("div",{staticClass:"columns p-4"},[i("div",{staticClass:"column is-one-quarter mx-6"},[i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Name :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input is-success",class:[t.title?"is-success":"is-danger"],attrs:{type:"text",placeholder:"name ",autocomplete:"off"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("div",{staticClass:"control"},[i("p",{staticClass:"help",class:[t.title?"is-hidden ":"is-danger"]},[t._v(" This name is invalid ")])])]),t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],staticClass:"input is-success",class:[t.subtitle?"is-success":"is-danger"],attrs:{type:"text",placeholder:"Subtitle (короткий опис)"},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}}),i("div",{staticClass:"control"},[i("p",{staticClass:"help",class:[t.subtitle?"is-hidden ":"is-danger"]},[t._v(" This subtitle is invalid ")])]),t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"input is-success",class:[t.category?"is-success":"is-danger"],attrs:{type:"text",placeholder:"category"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}}),i("div",{staticClass:"control"},[i("p",{staticClass:"help",class:[t.category?"is-hidden ":"is-danger"]},[t._v(" This category is invalid ")])]),t._m(2),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"input is-success",class:[t.price?"is-success":"is-danger"],attrs:{type:"text",placeholder:"price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}}),i("div",{staticClass:"control"},[i("p",{staticClass:"help",class:[t.price?"is-hidden ":"is-danger"]},[t._v(" This price is invalid ")])]),t._m(3),i("input",{directives:[{name:"model",rawName:"v-model",value:t.img,expression:"img"}],staticClass:"input",class:[t.img?"is-success":"is-danger"],attrs:{type:"text",placeholder:"Image URL - 'http...'"},domProps:{value:t.img},on:{input:function(e){e.target.composing||(t.img=e.target.value)}}}),i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"textarea mt-3",attrs:{placeholder:"Description (повний опис продукції)"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._m(4),i("input",{directives:[{name:"model",rawName:"v-model",value:t.features[0],expression:"features[0]"}],staticClass:"input is-info mt-2",attrs:{type:"text"},domProps:{value:t.features[0]},on:{input:function(e){e.target.composing||t.$set(t.features,0,e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.features[1],expression:"features[1]"}],staticClass:"input is-info mt-2",attrs:{type:"text"},domProps:{value:t.features[1]},on:{input:function(e){e.target.composing||t.$set(t.features,1,e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.features[2],expression:"features[2]"}],staticClass:"input is-info mt-2",attrs:{type:"text"},domProps:{value:t.features[2]},on:{input:function(e){e.target.composing||t.$set(t.features,2,e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.features[3],expression:"features[3]"}],staticClass:"input is-info mt-2",attrs:{type:"text"},domProps:{value:t.features[3]},on:{input:function(e){e.target.composing||t.$set(t.features,3,e.target.value)}}}),i("div",{staticClass:"field mt-3 p-2"},[i("a",{staticClass:"button is-success has-text-weight-medium",on:{click:function(e){return t.addNewProduct()}}},[t._v("Save")])])]),i("div",{staticClass:"column is-one-quarter mx-6 card"},[i("div",{staticClass:"tile is-child notification"},[i("figure",{staticClass:"img"},[i("img",{attrs:{src:t.img,alt:"Oops"}})]),i("div",{staticClass:"tile notification is-child is-warning"},[i("p",{staticClass:"title is-5 notification is-success"},[t._v(" "+t._s(t.title)+" ")]),i("p",{staticClass:"content"},[t._v(t._s(t.subtitle))]),i("strong",{staticClass:"subtitle is-4"},[t._v("Категорія:")]),i("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.category))]),i("p",{staticClass:"subtitle is-6"},[t._v("Ціна: "+t._s(t.showPrice))])])]),i("button",{staticClass:"button p-4 is-success",on:{click:function(e){return t.test()}}},[t._v("go")])])])])],1)},dt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Subtitle (короткий опис):")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Category:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Price:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Image:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"field mt-4"},[i("label",{staticClass:"label"},[t._v("Технічні характеристики:")])])}],pt=(i("a4d3"),i("e01a"),{name:"NewProduct",components:{HeaderSection:w},data:function(){return{title:null,subtitle:null,category:null,price:null,img:null,description:null,features:[]}},computed:Object(v["a"])(Object(v["a"])({},Object(g["c"])(["showProductList"])),{},{showPrice:function(){if(!this.price)return"You must enter a price";var t=this.price.toString();return t.length>3?t[0]+" "+t.slice(1):t}}),methods:Object(v["a"])(Object(v["a"])({},Object(g["b"])(["addProduct","testTest","addTest"])),{},{addNewProduct:function(){var t=this.features,e=this.title,i=this.description,s=this.price,a=this.img,r=this.category,c=this.subtitle;this.addProduct({self:this,productData:{title:e,price:s,img:a,category:r,subtitle:c,description:i,features:t}})},test:function(){this.addTest()}})}),ft=pt,mt=(i("f042"),Object(o["a"])(ft,ut,dt,!1,null,"e9801f9e",null)),vt=mt.exports;s["a"].use(p["a"]);var ht=[{path:"/",name:"home",component:Q},{path:"/card/:product_id",name:"card",component:lt,props:!0},{path:"/CreateProduct",name:"createproduct",component:vt}],bt=new p["a"]({mode:"history",routes:ht}),gt=bt,Ct=(i("4160"),i("caad"),i("2532"),i("159b"),i("2591"));s["a"].use(g["a"]);var _t=new g["a"].Store({state:{filter:{title:null,price:null},productCardView:[],productList:[]},mutations:{setProductsList:function(t,e){t.productList=Object(q["a"])(e)},filterTitelText:function(t,e){t.filter.title=e},setCardView:function(t,e){t.productCardView=[],t.productCardView=t.productList.find((function(t){return t.id==e}))},addNewProduct:function(t,e){t.productList.push(e)}},actions:{loadDate:function(t){var e=t.commit,i=Ct["a"].firestore();i.collection("products").get().then((function(t){var i=[];t.forEach((function(t){i.push(Object(v["a"])({id:t.id},t.data()))})),e("setProductsList",i)}))},addProduct:function(t,e){var i=t.dispatch,s=e.productData;console.log("productData"),console.log(s);var a=Ct["a"].firestore();a.collection("products").doc().set({title:s.title,subtitle:s.subtitle,category:s.category,price:s.price,image:s.image,description:s.description,features:s.features}).then((function(){console.log("Document successfully written!"),i("loadData")})).catch((function(t){console.error("Error writing document: ",t)}))},filterTitle:function(t,e){var i=t.commit;i("filterTitelText",e)},filterPrice:function(t,e){var i=t.commit;i("priceFilter",e)},addTest:function(t){var e=t.dispatch,i=Ct["a"].firestore();i.collection("products").add({name:"Tokyo",country:"Japan"}).then((function(t){console.log("Document written with ID: ",t.id),e("loadDate")})).catch((function(t){console.error("Error adding document: ",t)}))}},getters:{showProductList:function(t){return t.productList},getCardView:function(t){return t.productCardView},getFilterProductList:function(t){return t.productList.filter((function(e){return(null===t.filter.title||e.title.toLowerCase().includes(t.filter.title))&&(null===t.filter.price||e.price===t.filter.price)}))},getTestArr:function(t){return t.testArr}},modules:{}}),yt=_t;i("e71f");var wt={apiKey:"AIzaSyDc28RkiEpHnMJ86u0VIUlqdcJ6UaT2Gmc",authDomain:"senk-shop.firebaseapp.com",databaseURL:"https://senk-shop.firebaseio.com",projectId:"senk-shop",storageBucket:"senk-shop.appspot.com",messagingSenderId:"922421284905",appId:"1:922421284905:web:fd2dd3afaaf05f2fad0c38",measurementId:"G-N9EHZP10M3"};Ct["a"].initializeApp(wt),Ct["a"].analytics(),s["a"].prototype.$firebase=Ct["a"],s["a"].use(d["a"]),s["a"].config.productionTip=!1,new s["a"]({store:yt,router:gt,render:function(t){return t(u)}}).$mount("#app")},"6d90":function(t,e,i){},"73cd":function(t,e,i){"use strict";var s=i("01f3"),a=i.n(s);a.a},"7ce7":function(t,e,i){"use strict";var s=i("c40c"),a=i.n(s);a.a},"85ec":function(t,e,i){},a194:function(t,e,i){},c40c:function(t,e,i){},dcd0:function(t,e,i){},edbf:function(t,e,i){"use strict";var s=i("05a6"),a=i.n(s);a.a},f042:function(t,e,i){"use strict";var s=i("a194"),a=i.n(s);a.a}});
//# sourceMappingURL=app.1b7cc89b.js.map
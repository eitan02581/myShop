(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},o={app:0},a=[];function c(e){return i.p+"js/"+({BoughtItems:"BoughtItems",ReceivedList:"ReceivedList"}[e]||e)+"."+{BoughtItems:"6734c21d",ReceivedList:"4ff056fd"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={BoughtItems:1,ReceivedList:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var n="css/"+({BoughtItems:"BoughtItems",ReceivedList:"ReceivedList"}[e]||e)+"."+{BoughtItems:"62bd190e",ReceivedList:"dd63e3c9"}[e]+".css",o=i.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete s[e],l.parentNode.removeChild(l),r(a)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){s[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",f.name="ChunkLoadError",f.type=n,f.request=s,r[1](f)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/myShop/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"275f":function(e,t,r){},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"4cee":function(e,t,r){"use strict";var n=r("c547"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view")],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"NavBar"},[r("router-link",{attrs:{to:"/"}},[r("md-button",{staticClass:"option"},[e._v("bougth items")])],1),r("router-link",{attrs:{to:"/ReceivedList"}},[r("md-button",{staticClass:"option"},[e._v("received items")])],1)],1)},c=[],i={name:"NavBar",props:{},mixins:[],components:{},data:function(){return{}},created:function(){},methods:{},computed:{},watch:{}},u=i,d=(r("4cee"),r("2877")),f=Object(d["a"])(u,a,c,!1,null,"159953f8",null),l=f.exports,m={name:"app",props:{},mixins:[],components:{NavBar:l},data:function(){return{currencyInterval:null}},created:function(){var e=this;this.$store.dispatch({type:"initAppData"}),this.$store.dispatch({type:"getCurrency"}),this.currencyInterval=setInterval((function(){e.$store.dispatch({type:"getCurrency"})}),window.myConfig.fetchCurrencyInterval)},beforeDestroy:function(){clearInterval(this.currencyInterval)},methods:{},computed:{},watch:{}},b=m,p=(r("5c0b"),Object(d["a"])(b,s,o,!1,null,null,null)),h=p.exports,j=r("9483");Object(j["a"])("".concat("/myShop/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var g=r("8c4f");n["default"].use(g["a"]);var v=[{path:"/",name:"BoughtItems",component:function(){return r.e("BoughtItems").then(r.bind(null,"1ad5"))}},{path:"/ReceivedList",name:"ReceivedList",component:function(){return r.e("ReceivedList").then(r.bind(null,"7a27"))}}],y=new g["a"]({mode:"history",base:"/myShop/",routes:v}),w=y,k=(r("4de4"),r("4160"),r("159b"),r("96cf"),r("1da1")),I=r("2f62"),B=r("bc3a"),N=r.n(B);function S(){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t=8,r="",n=0;n<t;n++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}var z=[{id:S(),name:"surfboard",storeName:"Billabong",img:"https://www.circle-one.co.uk/wp-content/uploads/2017/09/Razor-6ft3-matt-blue.jpg",price:400,estDeliver:160777221e4,isReceived:!1},{id:S(),name:"wax",storeName:"Billabong",img:"https://surfhouse.co.il/wp-content/uploads/2017/11/sexwax1-760x721.png",price:3,estDeliver:160777221e4,isReceived:!1},{id:S(),name:"wetsuit",storeName:"Billabong",img:"https://cdn.watersportsoutlet.com/images/33998-Mystic-Mens-Brand-3mm-Back-Zip-Shorty-Wetsuit-200070---Navy.jpg",price:300,estDeliver:160042821e4,isReceived:!1},{id:S(),name:"roller",storeName:"yoga4u",img:"https://bilder.hula-hoop-shop.eu/media/image/product/6390/md/yogarolle-mit-massagenoppen-fitnessrolle-rechteck-fr01.jpg",price:20,estDeliver:160518021e4,isReceived:!1},{id:S(),name:"yoga carpet",storeName:"yoga4u",img:"https://berlinbpictureblob.blob.core.windows.net/pictures/0015903_yoga-mat-kurma-sadhana-lite-grip_550.png",price:40,estDeliver:159999621e4,isReceived:!1}],R=[{id:S(),storeName:"Billabong",img:"https://www.foxgroup.co.il/filestock/img/thumb_1479110774-07.jpg",orderdItems:0},{id:S(),storeName:"yoga4u",img:"https://toppng.com/uploads/preview/yoga-symbols-yoga-symbol-11562880459o7f1qqvlfs.png",orderdItems:0}];n["default"].use(I["a"]);var C=new I["a"].Store({state:{bougthItems:[],receivedItems:[],store:null,stores:[],ShekelToDollarCurrency:null},mutations:{setStores:function(e){e.stores=R},setBoughItems:function(e){e.bougthItems=z},updateBoughtItemStatus:function(e,t){var r=t.itemId;e.bougthItems.forEach((function(e){e.id===r&&(e.isReceived=!0)}))},moveBoughtItemToReceivedItem:function(e,t){var r=t.item;e.bougthItems=e.bougthItems.filter((function(e){return e.id!==r.id})),e.receivedItems.push(r)},setShekelToDollarCurrency:function(e,t){var r=t.curr;e.ShekelToDollarCurrency=r}},actions:{initAppData:function(e){var t=e.commit;t({type:"setBoughItems",bougthItems:z})},getCurrency:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function r(){var n,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,N.a.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS");case 4:return s=r.sent,o=s.data.rates.ILS,n({type:"setShekelToDollarCurrency",curr:o}),r.abrupt("return",o);case 10:r.prev=10,r.t0=r["catch"](1),t._vm.$swal({type:"error",title:"Unable to get currecny"});case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getBoughtItems:function(e){var t=e.state;return t.bougthItems},onReceivedItem:function(e,t){var r=e.commit,n=t.item;r({type:"updateBoughtItemStatus",itemId:n.id}),r({type:"moveBoughtItemToReceivedItem",item:n})},getReceivedItems:function(e){var t=e.state;return t.receivedItems},getStores:function(e){var t=e.commit;return t({type:"setStores",stores:R}),R}},getters:{stores:function(e){return e.stores.forEach((function(t){t.orderdItems=0,e.receivedItems.forEach((function(e){e.storeName===t.storeName&&t.orderdItems++})),e.bougthItems.forEach((function(e){e.storeName===t.storeName&&t.orderdItems++}))})),e.stores}},modules:{}}),x=r("c1df"),L=r.n(x);n["default"].filter("time",(function(e){return L()(e).format("DD/MM/YYYY")})),n["default"].filter("fullTime",(function(e){return L()(e).format("LLL")})),n["default"].filter("commingUp",(function(e){var t=(new Date).getTime();return console.log(e-t),L()(e-t).endOf("day").fromNow()}));r("a02c");var O=r("43f9"),D=r.n(O),_=(r("51de"),r("e094"),r("5886"));r("4413"),r("275f");n["default"].use(D.a),n["default"].use(_["a"]),n["default"].config.productionTip=!1,new n["default"]({router:w,store:C,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},"9c0c":function(e,t,r){},a02c:function(e,t){window.myConfig={fetchCurrencyInterval:1e4}},c547:function(e,t,r){}});
//# sourceMappingURL=app.a334880d.js.map
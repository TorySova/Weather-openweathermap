(this["webpackJsonpmy-weather"]=this["webpackJsonpmy-weather"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},4:function(e,t,a){e.exports={main:"Weather_main__-bMzg",logo:"Weather_logo__2YqFT",searchWrap:"Weather_searchWrap__KzBKa",search:"Weather_search__3pCJR",input:"Weather_input__1rr0Z",button:"Weather_button__3K-aR",contentWrap:"Weather_contentWrap__1mLgG"}},5:function(e,t,a){e.exports={weatherWrap:"DataWeather_weatherWrap__3ZXf6",temp:"DataWeather_temp__3yNYq",cityName:"DataWeather_cityName__3XzV1",description:"DataWeather_description__38Qrk",feels_like:"DataWeather_feels_like__3QYbP",error:"DataWeather_error__1Vkaj"}},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(8),s=a.n(i),l=(a(30),a(31),a(24)),o=a(3),u=a(7),d=a(22),h=a.n(d).a.create({baseURL:"http://api.openweathermap.org/"}),j=function(e){return h.get("data/2.5/weather?q=".concat(e,"&appid=").concat("1b787d6883c1ca1bb99d157ad0052edb","&lang=ru&units=metric"))},b={data:{weather:[],main:{temp:null,feels_like:null,temp_min:null,temp_max:null,pressure:null,humidity:null},wind:{speed:null,deg:null},clouds:{all:null},dt:null,sys:{type:null,id:null,country:"",sunrise:null,sunset:null},timezone:null,id:null,name:"",cod:null},error:""},p=function(e){return{type:"SEARCH/ERROR",error:e}},m=a(5),_=a.n(m),O=function(){var e=Object(o.c)((function(e){return e.weather.data.name})),t=Object(o.c)((function(e){return e.weather.error})),a=Object(o.c)((function(e){return e.weather.data.main.temp})),r=Object(o.c)((function(e){return e.weather.data.main.feels_like})),c=Object(o.c)((function(e){return e.weather.data.weather.map((function(e){return e.description}))}));return Object(n.jsx)("div",{className:_.a.weatherWrap,children:t?Object(n.jsx)("div",{className:_.a.error,children:t}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:_.a.cityName,children:e}),Object(n.jsx)("div",{className:_.a.description,children:c}),Object(n.jsx)("div",{className:_.a.temp,children:a&&Math.round(a)+"\xb0"}),r?Object(n.jsxs)("div",{className:_.a.feels_like,children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",r&&Math.round(r)+"\xb0"]}):""]})})},f=a(4),x=a.n(f),g=a.p+"static/media/\u2014Pngtree\u2014search vector icon_4017384.03f83f02.png",v=a.p+"static/media/pngwing.com.9c0997cc.png",w=function(){var e=Object(o.b)(),t=Object(r.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=function(){e(function(e){return function(t){return j(e).then((function(e){t({type:"SET_CITY_NAME",newData:e.data}),t(p(""))})).catch((function(){t(p("\u041e\u0439! \u041f\u043e\u0445\u043e\u0436\u0435 \u0442\u044b \u0432\u0432\u0435\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"))}))}}(c)),i("")};return Object(n.jsxs)("div",{className:x.a.main,children:[Object(n.jsxs)("div",{className:x.a.searchWrap,children:[Object(n.jsxs)("div",{className:x.a.logo,children:[Object(n.jsx)("img",{src:v,alt:"logo"}),Object(n.jsx)("div",{children:"your weather"})]}),Object(n.jsxs)("div",{className:x.a.search,children:[Object(n.jsx)("input",{className:x.a.input,value:c,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&s()}}),Object(n.jsx)("div",{className:x.a.button,onClick:s,children:Object(n.jsx)("img",{src:g})})]})]}),Object(n.jsx)("div",{className:x.a.contentWrap,children:Object(n.jsx)(O,{})})]})},N=function(){var e=(new Date).toLocaleTimeString();return Object(n.jsx)("div",{className:"App",children:e<"18"?Object(n.jsx)("div",{className:"day",children:Object(n.jsx)(w,{})}):Object(n.jsx)("div",{className:"night",children:Object(n.jsx)(w,{})})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},y=a(6),k=a(23),R=Object(y.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY_NAME":return Object(u.a)(Object(u.a)({},e),{},{data:t.newData});case"SEARCH/ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});default:return e}}}),C=Object(y.d)(R,Object(y.a)(k.a)),D=C;window.store=C,s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(o.a,{store:D,children:Object(n.jsx)(N,{})})}),document.getElementById("root")),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.dbe04724.chunk.js.map
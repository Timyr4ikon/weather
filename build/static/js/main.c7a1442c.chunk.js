(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{51:function(n,t,e){},58:function(n,t,e){},60:function(n,t,e){},78:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(2),a=e(11),c=e.n(a),o=(e(51),e(14)),u=e(8),s=e.n(u),l=e(12),d=e(6),b=(e(58),e(3)),p=e(4),j=e(5),f=e(37),x=e(38),h=e(0),g=e(42),O=e(21),m=e(80),v=(e(60),"CURRENTDATA/CURRENT_REQUEST"),y="CURRENTDATA/CURRENT_SUCCESS",w="CURRENTDATA/CURRENT_FAILURE",C=e(19),k=e.n(C),z=function(n){return k()({method:"get",url:"https://api.openweathermap.org".concat(n)})},T=function(n){return k()({method:"get",url:"https://api.openweathermap.org/geo/1.0/direct?q=".concat(n,"&limit=5&appid=da84c3e9bf9be159cb8a175d21f9898a")})},R=function(n,t){return k()({method:"get",url:"https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(t,"&appid=da84c3e9bf9be159cb8a175d21f9898a")})},D=function(n,t){return function(){var e=Object(l.a)(s.a.mark((function e(r){var i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:v}),e.prev=1,i="/data/2.5/onecall?lat=".concat(n,"&lon=").concat(t,"&exclude=minutely&units=metric&appid=","da84c3e9bf9be159cb8a175d21f9898a"),e.next=5,z(i);case 5:return a=e.sent,console.log(a),e.abrupt("return",r({type:y,payload:a.data}));case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),r({type:w,payload:e.t0&&e.t0.message?e.t0.message:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()},S=e(15),E={error:null,response:null,isError:null,isBusy:!1},A=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(S.a)(Object(S.a)({},n),{},{isBusy:!0,response:null});case y:return Object(S.a)(Object(S.a)({},n),{},{isBusy:!1,response:t.payload});case w:return Object(S.a)(Object(S.a)({},n),{},{isBusy:!1,isError:t.payload,response:null});default:return n}},I="SET_CURRENT_LOCATION",M=function(n,t,e,r){return{type:I,payload:{city:n,country:t,lat:e,lon:r}}},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{city:null,country:null,lat:null,lon:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{city:t.payload.city,country:t.payload.country,lat:t.payload.lat,lon:t.payload.lon};default:return n}},_="ADD_NEW_CITY",F="REMOVE_CITY",N=function(n){return{type:_,payload:n}},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return n.length<1?t.payload:[t.payload].concat(Object(o.a)(n));case F:var e=n.slice(0);return e.splice(t.payload,1),Object(o.a)(e);default:return n}},B=function(n,t){localStorage.setItem(n,t)},L=function(n){return localStorage.getItem(n)};function J(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px black solid;\n    border-radius: 20px;\n    margin-bottom: 10px;\n"]);return J=function(){return n},n}function P(){var n=Object(b.a)(["\n    border-bottom: 1px black solid;\n    width: 100%;\n    cursor: pointer;\n    &:last-child {\n        border-bottom: none;\n    }\n    &:hover{\n        text-decoration: underline;\n    }\n    p{\n        padding: 7px;\n        margin: 0;\n    }\n"]);return P=function(){return n},n}function Y(){var n=Object(b.a)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.75);\n    z-index: 10;\n"]);return Y=function(){return n},n}function H(){var n=Object(b.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    border-radius: 50%;\n    padding: 0;\n"]);return H=function(){return n},n}function q(){var n=Object(b.a)(["\n    position: absolute;\n    border: 1px solid rgb(204, 204, 204);\n    background: rgb(255, 255, 255);\n    overflow: auto;\n    border-radius: 4px;\n    outline: none;\n    padding: 20px;\n    width: 80%;\n    right: 50%;\n    transform: translate(50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    input{\n        width: 80%;\n        margin-bottom: 10px;\n    }\n    button{\n        background-color: white;\n        border: 1px solid;\n        border-radius: 5px;\n    }\n"]);return q=function(){return n},n}var K=function(n){n.isModal;var t=n.setIsModal,e=Object(i.useState)([]),a=Object(j.a)(e,2),c=a[0],o=a[1],u=Object(i.useState)(""),b=Object(j.a)(u,2),p=b[0],f=b[1],x=Object(i.useState)({}),h=Object(j.a)(x,2),g=h[0],O=h[1],m=Object(i.useState)(!1),v=Object(j.a)(m,2),y=(v[0],v[1]),w=Object(d.b)(),C=function(){t(!1)},k=function(){var n=Object(l.a)(s.a.mark((function n(t){var e,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,T(t);case 4:return e=n.sent,r=e.data.map((function(n){return{name:n.name,lat:n.lat,lon:n.lon,country:n.country}})),n.abrupt("return",r);case 9:return n.prev=9,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),z=function(n,t){var e=Object(i.useState)(n),r=Object(j.a)(e,2),a=r[0],c=r[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){c(n)}),t);return function(){clearTimeout(e)}}),[n]),a}(p,500);Object(i.useEffect)((function(){z&&(y(!0),k(z).then((function(n){o(n),y(!1)})))}),[z]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(X,{children:Object(r.jsxs)(Q,{children:[Object(r.jsx)(V,{onClick:C,children:"X"}),Object(r.jsx)("input",{type:"text",value:p,onChange:function(n){f(n.target.value)}}),c.length>=1?Object(r.jsx)(Z,{children:c.map((function(n,t){return Object(r.jsx)(G,{onClick:function(){return function(n,t){O({city:n.name,country:n.country,latitude:n.lat,longtitude:n.lon}),f(""),o([c[t]])}(n,t)},children:Object(r.jsxs)("p",{children:[n.name,", ",n.country]})},t)}))}):Object(r.jsx)(r.Fragment,{children:" "}),Object(r.jsx)("button",{disabled:Object.keys(g).length<1,onClick:function(){w(M(g.city,g.country,g.latitude,g.longtitude)),C()},children:"Add to list"})]})})})},Q=p.a.div(q()),V=p.a.button(H()),X=p.a.div(Y()),G=p.a.div(P()),Z=p.a.div(J());function $(){var n=Object(b.a)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0,0,0,0.4);\n    z-index: 15\n"]);return $=function(){return n},n}function nn(){var n=Object(b.a)(["\n    background: linear-gradient(0deg, rgba(34,193,195,0.8) 0%, rgba(253,187,45,0.8) 100%);\n    border: 1px black solid;\n    z-index: 5;\n    border-radius: 10px;\n    width: 180px;\n    position: absolute;\n    left: 20px;\n    top: 35px;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: space-around;\n    div{\n        width: 100%;\n        height: 100%;\n        box-sizing: content-box;\n        padding: 10px 0;\n        border-bottom: 1px black solid;\n        display: flex;\n        justify-content: space-around;\n        &:last-child{\n            border-bottom: none;\n        }\n        p {\n            margin: 0;\n            cursor: pointer;\n            &:hover{\n                text-decoration: underline;\n            }\n        }\n        button {\n            background-color: white;\n            border: 1px black solid;\n            border-radius: 5px;\n            cursor: pointer;\n            &:hover{\n                background-color: rgba(227, 57, 0, 0.5);\n            }\n        }\n    }\n"]);return nn=function(){return n},n}function tn(){var n=Object(b.a)(["\n    background: linear-gradient(0deg, rgba(34,193,195,0.8) 0%, rgba(253,187,45,0.8) 100%);\n    border: 1px black solid;\n    z-index: 5;\n    border-radius: 10px;\n    height: 70px;\n    width: 180px;\n    position: absolute;\n    right: 20px;\n    top: 35px;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: space-around;\n    div{\n        width: 100%;\n        height: 100%;\n        box-sizing: content-box;\n        cursor: pointer;\n        border-bottom: 1px black solid;\n        &:last-child{\n            border-bottom: none;\n        }\n        p {\n            margin: 0;\n        }\n        &:hover{\n            text-decoration: underline;\n        }\n    }\n"]);return tn=function(){return n},n}function en(){var n=Object(b.a)(["\n    position: absolute;\n    left: 20px;\n    color: white;\n    font-size: 15px;\n    cursor: pointer;\n    &:hover {\n        text-decoration: underline;\n    }\n    @media (max-width: 768px) {\n        font-size: 12px;\n    }\n"]);return en=function(){return n},n}function rn(){var n=Object(b.a)(["\n    position: absolute;\n    right: 20px;\n    color: white;\n    font-size: 15px;\n    cursor: pointer;\n    &:hover {\n        text-decoration: underline;\n    }\n    @media (max-width: 768px) {\n        font-size: 12px;\n    }\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n    font-weight: 600;\n    font-size: 19px;\n    font-style: italic;\n    color: white;\n"]);return an=function(){return n},n}function cn(){var n=Object(b.a)(["\n    position: relative;\n    background: linear-gradient(90deg, rgba(224,226,0,0.7) 0%, rgba(204,128,12,0.7) 22%, rgba(6,12,160,0.7) 54%, rgba(2,208,216,0.7) 81%, rgba(0,212,255,0.7) 100%);\n    height: 35px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 10px;\n"]);return cn=function(){return n},n}var on=function(n){if(n.length>10){var t=n.split(", ");return t[0].length>10?t[0].slice(0,8)+"...":t[0]}return n},un=function(){var n=Object(i.useState)(!1),t=Object(j.a)(n,2),e=t[0],a=t[1],c=Object(f.a)(),u=Object(i.useState)(!1),b=Object(j.a)(u,2),p=b[0],v=b[1],y=Object(i.useState)(!1),w=Object(j.a)(y,2),C=w[0],k=w[1],z=Object(i.useState)("Not chosen"),T=Object(j.a)(z,2),S=T[0],E=T[1],A=Object(d.b)(),I=Object(d.c)((function(n){return n.CurrentLocationReducer})),U=Object(d.c)((function(n){return n.CitiesFolder}));function _(){return(_=Object(l.a)(s.a.mark((function n(t){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===t.latitude||void 0===t.longitude){n.next=12;break}return n.prev=1,n.next=4,R(t.latitude,t.longitude);case 4:e=n.sent,A(M(e.data.name,e.data.sys.country,t.latitude,t.longitude)),A(D(t.latitude,t.longitude)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var W=function(n,t,e){if(U.length>1){var r=L("CitiesDataWeatherApp"),i=[];if(r.includes(" / ")){var a=r.split(" / ").map((function(n){var t=n.split(", ");return{latitude:t[0],longitude:t[1],city:t[2],country:t[3]}}));i.push.apply(i,Object(o.a)(a))}else{var c=r.split(", ");i.push({latitude:c[0],longitude:c[1],city:c[2],country:c[3]})}var u=i.filter((function(e){return e.latitude+""!==n+""&&e.longitude+""!==t+""})).map((function(n){return"".concat(n.latitude,", ").concat(n.longitude,", ").concat(n.city,", ").concat(n.country)}));B("CitiesDataWeatherApp",u.join(" / ")),A(function(n){return{type:F,payload:n}}(e))}};Object(i.useEffect)((function(){null!==I.city&&null!==I.country&&E("".concat(I.city,", ").concat(I.country))}),[I,U]);var J=function(n){"back"===n.target.id&&(v(!1),a(!1))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(sn,{children:[Object(r.jsx)(ln,{children:"Weather App"}),Object(r.jsxs)(dn,{onClick:function(){a((function(n){return!n})),v(!1)},children:[Object(r.jsx)(h.b.Provider,{value:{size:"13px",style:{marginRight:"5px"}},children:Object(r.jsx)(g.a,{})}),Object(r.jsx)("span",{children:on(S)})]}),Object(r.jsxs)(bn,{onClick:function(){v((function(n){return!n})),a(!1)},children:[Object(r.jsx)(h.b.Provider,{value:{size:"13px",style:{marginRight:"5px"}},children:Object(r.jsx)(O.a,{})}),Object(r.jsx)("span",{children:"Cities List"})]}),Object(r.jsx)(m.a,{in:e,timeout:1e3,classNames:"header_animation",children:e?Object(r.jsx)(fn,{onClick:J,id:"back",children:Object(r.jsxs)(pn,{children:[x.isMobile?Object(r.jsx)("div",{onClick:function(){c.error?alert("No geolocation, sorry."):function(n){_.apply(this,arguments)}(c)},children:Object(r.jsx)("p",{children:"Use current location"})}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{onClick:function(){k(!0),a(!1)},children:Object(r.jsx)("p",{children:"Use location from input"})}),Object(r.jsx)("div",{onClick:function(){if(function(){var n=!0;return U.length>1?U.map((function(t){return t.lat+""===I.lat+""&&t.lon+""===I.lon+""?(n=!1,t):t})):U[0].lat+""===I.lat+""&&U[0].lon+""===I.lon+""&&(n=!1),n}()){A(N(I));var n=L("CitiesDataWeatherApp");B("CitiesDataWeatherApp","".concat(I.lat,", ").concat(I.lon,", ").concat(I.city,", ").concat(I.country," / ").concat(n)),a(!1),v(!0)}else alert("This location is already saved")},children:Object(r.jsx)("p",{children:"Save this location"})})]})}):Object(r.jsx)(r.Fragment,{})}),Object(r.jsx)(m.a,{in:p,timeout:1e3,classNames:"header_animation",children:p&&U.length>=1?Object(r.jsx)(fn,{onClick:J,id:"back",children:Object(r.jsx)(jn,{children:U.map((function(n,t){return Object(r.jsxs)("div",{id:t,children:[Object(r.jsx)("p",{onClick:function(){var t;A(M((t=n).city,t.country,t.lat,t.lon))},children:on("".concat(n.city,", ").concat(n.country))}),U.length>1?Object(r.jsx)("button",{onClick:function(){return W(n.lat,n.lon,t)},children:"Delete"}):Object(r.jsx)(r.Fragment,{})]},t)}))})}):Object(r.jsx)(r.Fragment,{})})]}),C?Object(r.jsx)(K,{isModal:C,setIsModal:k}):Object(r.jsx)(r.Fragment,{})]})},sn=p.a.nav(cn()),ln=p.a.div(an()),dn=p.a.div(rn()),bn=p.a.div(en()),pn=p.a.div(tn()),jn=p.a.div(nn()),fn=p.a.div($()),xn=e(25);function hn(){var n=Object(b.a)(["\n    background-color: #da00f7;\n\tanimation-delay: 0.3s;\n"]);return hn=function(){return n},n}function gn(){var n=Object(b.a)(["\n    background-color: #00dbf9;\n\tanimation-delay: 0.2s;\n"]);return gn=function(){return n},n}function On(){var n=Object(b.a)(["\n    background-color: var(--red)ff0062;\n\tanimation-delay: 0.1s;\n"]);return On=function(){return n},n}function mn(){var n=Object(b.a)(["\n    background-color: #feb60a;\n"]);return mn=function(){return n},n}function vn(){var n=Object(b.a)(["\n    width: 3vw;\n\theight: 3vw;\n\tborder-radius: 100%;\n\tmargin: 2vw;\n\tbackground-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);\n\tanimation: bounce 1.5s 0.5s linear infinite;\n    @keyframes bounce {\n        0%, 50%, 100% {\n            transform: scale(1);\n            filter: blur(0px);\n        }\n        25% {\n            transform: scale(0.6);\n            filter: blur(0px);\n        }\n        75% {\n            filter: blur(0px);\n            transform: scale(1.4);\n        }\n    }\n"]);return vn=function(){return n},n}function yn(){var n=Object(b.a)(["\n    display: flex;\n\tjustify-content: center;\n\talign-items: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);return yn=function(){return n},n}var wn=function(){return Object(r.jsxs)(Cn,{children:[Object(r.jsx)(zn,{}),Object(r.jsx)(Tn,{}),Object(r.jsx)(Rn,{}),Object(r.jsx)(Dn,{})]})},Cn=p.a.div(yn()),kn=p.a.div(vn()),zn=Object(p.a)(kn)(mn()),Tn=Object(p.a)(kn)(On()),Rn=Object(p.a)(kn)(gn()),Dn=Object(p.a)(kn)(hn());function Sn(){var n=Object(b.a)(["\n    margin: 0;\n    font-size: 10px;\n"]);return Sn=function(){return n},n}function En(){var n=Object(b.a)(["\n    ",";\n"]);return En=function(){return n},n}function An(){var n=Object(b.a)(["\n    margin: 0;\n    font-size: 12px;\n    @media (max-width: 768px) {\n        font-size: 10px;\n   }\n"]);return An=function(){return n},n}function In(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    div{\n        display: flex;\n        padding-top: 10px;\n        p{\n            font-size: 10px;\n            margin: 0 0 0 5px;\n        }\n    }\n"]);return In=function(){return n},n}function Mn(){var n=Object(b.a)(["\n    ",";\n    color: #b5b5b5;\n"]);return Mn=function(){return n},n}function Un(){var n=Object(b.a)(["\n    grid-area: wind;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h4{\n        margin: 0 0 5px 0;\n    }\n    div{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        width: 100%;\n        p{\n            margin: 0;\n            display: inline-block;\n            font-size: 20px;\n        }\n    }\n    \n"]);return Un=function(){return n},n}function _n(){var n=Object(b.a)(["\n    grid-area: hum;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h4{\n        margin: 0;\n        margin-bottom: 5px;\n    }\n    p {\n        margin: 0;\n        font-size: 20px;\n    }\n"]);return _n=function(){return n},n}function Fn(){var n=Object(b.a)(["\n    grid-area: press;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h4{\n        margin: 0;\n        margin-bottom: 5px;\n    }\n    p {\n        margin: 0;\n        font-size: 20px;\n    }\n"]);return Fn=function(){return n},n}function Nn(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    grid-area: sun;\n    margin-bottom: 5px;\n    div{\n        display: flex;\n        margin: 0 10px;\n        align-items: center;\n        h4 {\n            margin: 0;\n            font-weight: 500;\n            font-size: 12px;\n        }\n        p{\n            margin: 0;\n            margin-left: 5px;\n            font-size: 15px;\n            @media (max-width: 768px) {\n                font-size: 10px;\n            }\n        }\n    }\n"]);return Nn=function(){return n},n}function Wn(){var n=Object(b.a)(['\n    grid-area: infoData;\n    display: grid;\n    grid-template: \n        "sun sun sun"\n        "press hum wind" / 1fr 1fr 1fr\n   ;\n   @media (max-width: 768px) {\n      grid-template: \n            "sun sun"\n            "press hum"\n            "wind wind" / 1fr 1fr;\n   }\n']);return Wn=function(){return n},n}function Bn(){var n=Object(b.a)(["\n    grid-area: daysInfo;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    padding-top: 30px;\n    @media (max-width: 768px) {\n      grid-template-columns: repeat(4, 1fr);\n      grid-row-gap: 20px;\n   }\n"]);return Bn=function(){return n},n}function Ln(){var n=Object(b.a)(["\n    grid-area: mainInfo;\n    h3{\n        margin: 0;\n        font-size: 16px;\n    }\n    p{\n        margin: 0;\n        font-size: 14px;\n    }\n\n"]);return Ln=function(){return n},n}function Jn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    h4{\n        margin: 0;\n        margin-left: 10px;\n    }\n    p{\n        margin: 0;\n    }\n"]);return Jn=function(){return n},n}function Pn(){var n=Object(b.a)(["\n    margin: 0;\n    font-size: 50px;\n    display: flex;\n    justify-content: start;\n    p{\n        margin: 0;\n    }\n"]);return Pn=function(){return n},n}function Yn(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Yn=function(){return n},n}function Hn(){var n=Object(b.a)(["\n    position: relative;\n    grid-area: iconWeather;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Hn=function(){return n},n}function qn(){var n=Object(b.a)(['\n    width: 80%;\n    max-width: 715px;\n    margin: 0 auto;\n    padding: 15px;\n    border-radius: 20px;\n    background: rgba(255, 255, 255, 0.3);\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.3);\n    display: grid;\n    grid-template: \n        "mainInfo mainInfo mainInfo"\n        "iconWeather infoData infoData"\n        "daysInfo daysInfo daysInfo";\n   position: relative;\n   min-height: 120px;\n   @media (max-width: 768px) {\n      grid-template: \n            "mainInfo"\n            "iconWeather"\n            "infoData"\n            "daysInfo"\n            "daysInfo";\n    }\n']);return qn=function(){return n},n}var Kn=["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"],Qn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vn=function(n){return"https://openweathermap.org/img/wn/".concat(n,"@2x.png")},Xn=function(n){return new Date(+"".concat(n,"000"))},Gn=function(n){var t=n+"";return 1===t.length?"0"+t:n},Zn=function(){var n=Object(d.c)((function(n){return n.CurrentDataReducer})),t=Object(d.c)((function(n){return n.CurrentLocationReducer})),e=Object(i.useState)(!0),a=Object(j.a)(e,2),c=a[0],o=a[1],u=Object(i.useState)(null),s=Object(j.a)(u,2),l=s[0],b=s[1],p=Object(i.useState)(null),f=Object(j.a)(p,2),x=f[0],g=f[1];return Object(i.useEffect)((function(){null===n.response||n.isBusy||null!==n.isError?o(!0):(g(n.response.current),b(n.response.daily.map((function(n,t){var e=Kn[Xn(n.dt).getUTCDay()],i=Qn[Xn(n.dt).getUTCMonth()],a=Xn(n.dt).getUTCDate(),c=Xn(n.dt).getUTCFullYear();return Object(r.jsxs)(bt,{children:[Object(r.jsx)(pt,{children:e}),Object(r.jsx)(pt,{children:"".concat(i," ").concat(a," ").concat(c)}),Object(r.jsx)(jt,{src:Vn(n.weather[0].icon),size:45}),Object(r.jsx)(ft,{children:"Min ".concat(Math.round(n.temp.min),"\xb0C")}),Object(r.jsx)(ft,{children:"Max ".concat(Math.round(n.temp.max),"\xb0C")}),Object(r.jsxs)("div",{children:[Object(r.jsx)(dt,{deg:n.wind_deg-45,size:15}),Object(r.jsx)("p",{children:"".concat(n.wind_speed," m/s")})]})]},t)}))),o(!1))}),[n]),Object(r.jsx)($n,{children:c?Object(r.jsx)(wn,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(it,{children:[Object(r.jsx)("h3",{children:"".concat(t.city,", ").concat(t.country)}),Object(r.jsx)("p",{children:"".concat(Kn[Xn(x.dt).getUTCDay()],", ").concat(Qn[Xn(x.dt).getUTCMonth()]," ").concat(Xn(x.dt).getUTCDate()," ").concat(Xn(x.dt).getUTCFullYear())}),Object(r.jsx)("p",{children:x.weather[0].main})]}),Object(r.jsxs)(nt,{children:[Object(r.jsx)(jt,{src:Vn(x.weather[0].icon),size:120}),Object(r.jsxs)(tt,{children:[Object(r.jsx)(et,{children:Object(r.jsxs)("p",{children:[Math.round(x.temp),"\xb0C"]})}),Object(r.jsxs)(rt,{children:[Object(r.jsx)("h4",{children:"Feels"}),Object(r.jsxs)("p",{children:[Math.round(x.feels_like),"\xb0C"]})]})]})]}),Object(r.jsxs)(ct,{children:[Object(r.jsxs)(ot,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(h.b.Provider,{value:{size:"22px",color:"#ffdd00"},children:Object(r.jsx)(xn.a,{})}),Object(r.jsx)("h4",{children:"Sunrise at"}),Object(r.jsx)("p",{children:"".concat(Xn(x.sunrise).getHours(),":").concat(Gn(Xn(x.sunrise).getMinutes()))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(h.b.Provider,{value:{size:"22px",color:"#e38202"},children:Object(r.jsx)(xn.b,{})}),Object(r.jsx)("h4",{children:"Sunset at"}),Object(r.jsx)("p",{children:"".concat(Xn(x.sunset).getHours(),":").concat(Xn(x.sunset).getMinutes())})]})]}),Object(r.jsxs)(ut,{children:[Object(r.jsx)("h4",{children:"Pressure"}),Object(r.jsxs)("p",{children:[x.pressure,"mm"]})]}),Object(r.jsxs)(st,{children:[Object(r.jsx)("h4",{children:"Humidity"}),Object(r.jsxs)("p",{children:[x.humidity,"%"]})]}),Object(r.jsxs)(lt,{children:[Object(r.jsx)("h4",{children:"Wind"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(dt,{deg:x.wind_deg-45,size:30}),Object(r.jsxs)("p",{children:[x.wind_speed," m/s"]})]})]})]}),Object(r.jsx)(at,{children:l})]})})},$n=p.a.div(qn()),nt=p.a.div(Hn()),tt=p.a.div(Yn()),et=p.a.div(Pn()),rt=p.a.div(Jn()),it=p.a.div(Ln()),at=p.a.div(Bn()),ct=p.a.div(Wn()),ot=p.a.div(Nn()),ut=p.a.div(Fn()),st=p.a.div(_n()),lt=p.a.div(Un()),dt=Object(p.a)(O.b)(Mn(),(function(n){return"transform: rotate(".concat(n.deg,"deg);\n    height: ").concat(n.size,"px")})),bt=p.a.div(In()),pt=p.a.p(An()),jt=p.a.img(En(),(function(n){return"height: ".concat(n.size,"px")})),ft=p.a.p(Sn());function xt(){var n=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    min-height: 100vh;\n    background: linear-gradient(230deg, rgba(224,226,0,0.3) 0%, rgba(204,128,12,0.3) 22%, rgba(6,12,160,0.3) 54%, rgba(2,208,216,0.3) 81%, rgba(0,212,255,0.3) 100%);\n    @media (max-width: 768px) {\n        padding-bottom: 15px;\n    }\n"]);return xt=function(){return n},n}var ht=function(){var n=Object(d.c)((function(n){return n})),t=n.CurrentLocationReducer,e=n.CurrentDataReducer,a=Object(d.b)();return Object(i.useEffect)((function(){null===t.lat||null===t.lon||e.isBusy||a(D(t.lat,t.lon))}),[t,a]),Object(r.jsxs)(gt,{children:[Object(r.jsx)(un,{}),Object(r.jsx)(Zn,{})]})},gt=p.a.div(xt());var Ot=function(){var n=Object(d.b)(),t=function(){var t=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"get",url:"https://api.ipgeolocation.io/ipgeo?apiKey=d7fecb0bfb804e30be825b994af40147"}).then((function(t){if(void 0!==!t.data.error){var e=[];B("CitiesDataWeatherApp","".concat(t.data.latitude,", ").concat(t.data.longitude,", ").concat(t.data.city,", ").concat(t.data.country_name)),e.push({lat:t.data.latitude,lon:t.data.longitude,city:t.data.city,country:t.data.country_name}),console.log("cities at App",e),n(N(e)),n(M(t.data.city,t.data.country_name,t.data.latitude,t.data.longitude)),n(D(t.data.latitude,t.data.longitude))}}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=L("CitiesDataWeatherApp");if(void 0===e||null===e)t();else{var r=[];if(e.includes(" / ")){var i=e.split(" / ").map((function(n){var t=n.split(", ");return{lat:t[0],lon:t[1],city:t[2],country:t[3]}}));r.push.apply(r,Object(o.a)(i))}else{var a=e.split(", ");r.push({lat:a[0],lon:a[1],city:a[2],country:a[3]})}console.log(r),n(N(r)),n(M(r[0].city,r[0].country,r[0].lat,r[0].lon)),n(D(r[0].lat,r[0].lon))}})),Object(r.jsx)(ht,{})},mt=e(13),vt=e(43),yt=e(44),wt=Object(mt.combineReducers)({CurrentDataReducer:A,CurrentLocationReducer:U,CitiesFolder:W}),Ct=Object(mt.createStore)(wt,Object(yt.composeWithDevTools)(Object(mt.applyMiddleware)(vt.a)));c.a.render(Object(r.jsx)(d.a,{store:Ct,children:Object(r.jsx)(Ot,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c7a1442c.chunk.js.map
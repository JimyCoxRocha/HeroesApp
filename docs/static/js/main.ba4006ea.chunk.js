(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{35:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a.n(c),s=a(18),n=a.n(s),i=a(5),o=Object(c.createContext)(),l=a(3),h="[auth] login",j="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h:return Object(l.a)(Object(l.a)({},r.payload),{},{logged:!0});case j:return{logged:!1};default:return e}},d=a(9),b=a(2),m=function(){return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pageBefore",r=arguments.length>1?arguments[1]:void 0;localStorage.setItem(e,r)},function(e){return localStorage.getItem(e)}]},p=a(0),O=function(e){var r=e.history,a=Object(c.useContext)(o).dispatch,t=m(),s=Object(i.a)(t,2)[1];return Object(p.jsxs)("div",{className:"container mt-5",children:[Object(p.jsx)("h1",{children:"Login Screen"}),Object(p.jsx)("hr",{}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=s("lastPath")||"/";a({type:h,payload:{name:"Jimy"}}),r.replace(e)},children:"Login"})]})},v=a(14),x=a(11),f=a.n(x),g=function(e){var r=e.isAuthenticated,a=e.component,c=Object(v.a)(e,["isAuthenticated","component"]),t=m();return(0,Object(i.a)(t,1)[0])("lastPath",c.location.pathname),Object(p.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(p.jsx)(a,Object(l.a)({},e)):Object(p.jsx)(b.a,Object(l.a)({to:"/login"},e))}}))};g.protoTypes={isAuthenticated:f.a.bool.isRequired,component:f.a.func.isRequired};var C=function(e){var r=e.component,a=e.isAuthenticated.logged,c=Object(v.a)(e,["component","isAuthenticated"]);return Object(p.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a?Object(p.jsx)(b.a,Object(l.a)({to:"/marvel"},e)):Object(p.jsx)(r,Object(l.a)({},e))}}))},N=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],_=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),t=e.first_appearance,s=e.characters;return Object(p.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(p.jsxs)("div",{className:"row no-gutters",children:[Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:a})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body p-2",children:[Object(p.jsx)("h5",{className:"card-title",children:a}),Object(p.jsx)("p",{className:"card-text",children:c}),c!==s&&Object(p.jsxs)("p",{className:"card-text",children:[s," "]}),Object(p.jsx)("p",{className:"card-text",children:Object(p.jsx)("small",{className:"text-muted",children:t})}),Object(p.jsx)(d.b,{to:"./hero/".concat(r),children:"M\xe1s..."})]})})]})})},y=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return N.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(p.jsx)("div",{className:"card-columns animate__animated animate__fadeIn ",children:a.map((function(e){return Object(p.jsx)(_,Object(l.a)({},e),e.id)}))})},S=function(){var e=m();return(0,Object(i.a)(e,1)[0])("pageBefore","DcScreen"),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"DC Screen"}),Object(p.jsx)(y,{publisher:"DC Comics"})]})},M=function(e){var r=e.history,a=m(),t=Object(i.a)(a,2)[1],s=Object(b.i)().heroId,n=Object(c.useMemo)((function(){return e=s,N.find((function(r){return r.id===e}));var e}),[s]);if(!n)return Object(p.jsx)(b.a,{to:"/"});var o=n.superhero,l=n.publisher,h=n.alter_ego,j=n.first_appearance,u=n.characters;return Object(p.jsxs)("div",{clas:"row mt-5",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("img",{src:"../assets/heroes/".concat(s,".jpg"),className:"img-thumbnail",alt:o})}),Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsxs)("h3",{children:[" ",o," "]}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"Alter ego: "})," ",h]}),Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"Publisher: "})," ",l]}),Object(p.jsxs)("li",{className:"list-group-item",children:[" ",Object(p.jsx)("b",{children:"First appearance: "})," ",j]})]}),Object(p.jsx)("h5",{children:" Characters: "}),Object(p.jsxs)("p",{children:[" ",u]}),Object(p.jsx)("button",{className:"btn btn-outline-info",onClick:function(){var e=function(e){return"Marvel Comics"===e?"marvel":"dc"}(l);"SearchScreen"===t("pageBefore")?r.goBack():r.push("/".concat(e))},children:"Return"})]})]})},k=function(){var e=m();return(0,Object(i.a)(e,1)[0])("pageBefore","MarvelScreen"),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Marvel Screen"}),Object(p.jsx)(y,{publisher:"Marvel Comics"})]})},D=a(20),w=a.n(D),B=a(13),A=function(e){var r=e.history,a=m();(0,Object(i.a)(a,1)[0])("pageBefore","SearchScreen");var t=Object(b.h)(),s=w.a.parse(t.search).q,n=void 0===s?"":s,o=function(e){var r=Object(c.useState)(e),a=Object(i.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(B.a)({},r.name,r.value)))},function(r){s(e)}]}({search:n}),h=Object(i.a)(o,2),j=h[0],u=h[1],d=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),N.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))}(n)}),[n]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"SearchScreen"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-5",children:[Object(p.jsx)("h4",{children:"Search Form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",autoComplete:"off",name:"search",value:j.search,onChange:u}),Object(p.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",onClick:function(e){e.preventDefault(),r.push("?q=".concat(j.search))},children:"Search..."})]})]}),Object(p.jsxs)("div",{className:"col-7",children:[Object(p.jsx)("h4",{children:" Results "}),Object(p.jsx)("hr",{}),""===n&&Object(p.jsx)("div",{className:"alert alert-info",children:"Search a Hero"}),""!==n&&0===d.length&&Object(p.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",n]}),d.map((function(e){return Object(p.jsx)(_,Object(l.a)({},e),e.id)}))]})]})]})},J=function(){var e=Object(c.useContext)(o),r=e.user.name,a=e.dispatch,t=Object(b.g)();return Object(p.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(p.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(p.jsx)("div",{className:"navbar-collapse",children:Object(p.jsxs)("div",{className:"navbar-nav",children:[Object(p.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(p.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(p.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(p.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("p",{className:"nav-item nav-link text-info",children:r}),Object(p.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){t.push("/login"),a({type:j})},children:"Logout"})]})})]})},F=function(e){var r=e.history;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(J,{history:r})," ",Object(p.jsx)("div",{className:"container mt-2",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/marvel",component:k}),Object(p.jsx)(b.b,{exact:!0,path:"/hero/:heroId",component:M}),Object(p.jsx)(b.b,{exact:!0,path:"/dc",component:S}),Object(p.jsx)(b.b,{exact:!0,path:"/search",component:A}),Object(p.jsx)(b.a,{to:"/marvel"})]})})]})},T=function(){var e=Object(c.useContext)(o).user;return Object(p.jsxs)(d.a,{children:[" ",Object(p.jsx)("div",{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(C,{path:"/login",component:O,isAuthenticated:e}),Object(p.jsx)(g,{path:"/",component:F,isAuthenticated:e.logged})]})})]})},R=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(c.useReducer)(u,{},R),r=Object(i.a)(e,2),a=r[0],t=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(p.jsx)("div",{children:Object(p.jsx)(o.Provider,{value:{user:a,dispatch:t},children:Object(p.jsx)(T,{})})})};n.a.render(Object(p.jsx)(t.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ba4006ea.chunk.js.map
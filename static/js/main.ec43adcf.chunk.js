(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{85:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(26),i=a.n(n),r=a(10),s=a(17),o=a(58),c=a(0),l=(a(85),a(138)),d=a(135),u=a(139),m=a(144),j=a(136),b=a(132),h=a(134),p=a(141),x=a(66),O=a.n(x),f=a(2),v=function(e){var t=e.user,a=t.email,n=t.name;return Object(f.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},y=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(f.jsxs)("article",{"data-id":a,className:O()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(f.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(f.jsx)(v,{user:r})]})},S=function(e){var t=e.todos;return Object(f.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(f.jsx)(y,{todo:e},e.id)}))})},I=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function _(e,t){return e.find((function(e){return e.id===t}))||null}var g=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:_(I,e.userId)})}));function N(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))}var C=function(){var e="Choose a user",t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],i=a[1],o=Object(c.useState)(e),x=Object(r.a)(o,2),O=x[0],v=x[1],y=Object(c.useState)(!1),C=Object(r.a)(y,2),T=C[0],k=C[1],w=Object(c.useState)(!1),B=Object(r.a)(w,2),D=B[0],A=B[1],M=Object(c.useState)(g),L=Object(r.a)(M,2),P=L[0],K=L[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(l.a,{sx:{padding:"24px"},elevation:5,children:[Object(f.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(f.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(t){if(t.preventDefault(),O===e&&k(!0),""===n&&A(!0),O!==e&&""!==n){var a=_(I,+O);K((function(e){return[].concat(Object(s.a)(e),[{id:N(e)+1,title:n,completed:!1,userId:a?a.id:null,user:a}])})),i(""),v(e)}},className:"App__form",children:[Object(f.jsxs)(d.a,{sx:{marginBottom:"32px",width:"300px"},error:D,children:[Object(f.jsx)(u.a,{error:D,label:"Title: ",id:"titleInput",name:"titleInput",type:"text","data-cy":"titleInput",value:n,onChange:function(e){i(e.currentTarget.value),A(!1)},placeholder:"Title"}),D&&Object(f.jsx)(m.a,{sx:{position:"absolute",bottom:"-20px"},children:"Please enter a title"})]}),Object(f.jsxs)(d.a,{sx:{marginBottom:"32px",width:"300px"},error:T,children:[Object(f.jsx)(j.a,{id:"demo-simple-select-label",children:"User: "}),Object(f.jsxs)(b.a,{labelId:"demo-simple-select-label",value:O,label:"User",id:"userSelect",name:"userSelect","data-cy":"userSelect",onChange:function(e){v(e.target.value),k(!1)},children:[Object(f.jsx)(h.a,{value:e,disabled:!0,children:e}),I.map((function(e){return Object(f.jsx)(h.a,{value:e.id,children:e.name},e.id)}))]}),T&&Object(f.jsx)(m.a,{sx:{position:"absolute",bottom:"-20px"},children:"Please choose a user"})]}),Object(f.jsx)(p.a,{sx:{display:"block"},type:"submit",variant:"contained","data-cy":"submitButton",color:D||T?"error":"primary",children:"Add"})]}),Object(f.jsx)(S,{todos:P})]})})};i.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.ec43adcf.chunk.js.map
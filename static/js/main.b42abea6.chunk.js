(this.webpackJsonpmymm=this.webpackJsonpmymm||[]).push([[0],{101:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(91),r=a.n(c),i=(a(101),a(2)),l=a(3),u=a(5),o=a(6),d=a(10),j=a(7),b=a(16),m=a.n(b),h=a(28),p=a(29),O=a.n(p);function x(){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://612537b63c91fb0017e729e6.mockapi.io/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return N.apply(this,arguments)}function N(){return(N=Object(h.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://612537b63c91fb0017e729e6.mockapi.io/users/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("https://612537b63c91fb0017e729e6.mockapi.io/users/"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(m.a.mark((function e(t,a){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("https://612537b63c91fb0017e729e6.mockapi.io/users/"+t,a);case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://612537b63c91fb0017e729e6.mockapi.io/users/",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=a(1),q=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={users:[]},e.componentDidMount=function(){x().then((function(t){e.setState({users:t.data})})).catch((function(e){alert("get users error")}))},e.deleteUser=function(t){y(t.id).then((function(){var a=e.state.users,s=a.indexOf(t);a.splice(s,1),e.setState({users:a})})).catch((function(e){alert("api delete requerst error")}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(A.jsxs)("div",{className:"all-users",children:[Object(A.jsx)("h2",{children:"users"}),this.state.users.length>0?Object(A.jsx)("ul",{children:this.state.users.map((function(t){return Object(A.jsxs)("li",{className:"row justify-content-center",children:[Object(A.jsx)("span",{className:"col-12 text-center col-md-5 text-md-start mb-1",children:t.name})," ","  ",Object(A.jsx)("span",{className:"col-12 col-sm-4 text-center col-md-2 text-md-start mb-1",children:Object(A.jsxs)(d.b,{className:"btn btn-primary",to:"/cloudusers2/users/"+t.id,children:["view \xa0",Object(A.jsx)("i",{className:"far fa-eye"})]})}),Object(A.jsx)("span",{className:"col-12 col-sm-4 text-center col-md-2 text-md-start mb-1",children:Object(A.jsxs)(d.b,{className:"btn btn-success",to:"/cloudusers2/users/edit/"+t.id,children:["edit \xa0",Object(A.jsx)("i",{className:"far fa-edit"})]})}),Object(A.jsx)("span",{className:"col-12 col-sm-4 text-center col-md-2 text-md-start mb-1",children:Object(A.jsxs)("span",{className:"btn btn-danger",onClick:function(){return e.deleteUser(t)},children:["delete \xa0",Object(A.jsx)("i",{className:"fas fa-trash-alt"})]})})]},t.id)}))}):Object(A.jsx)("h4",{style:{textAlign:"center"},children:"No users to show"}),Object(A.jsx)("div",{className:"adduser-div",children:Object(A.jsx)("span",{children:Object(A.jsxs)(d.b,{className:"btn btn-warning",to:"/cloudusers2/users/create/",children:["add user \xa0",Object(A.jsx)("i",{className:"far fa-plus-square"})]})})})]})}}]),a}(s.Component);var F=function(e){return Object(A.jsx)("div",{className:"user-conrainer",children:Object(A.jsxs)("div",{className:"conatiner",children:[Object(A.jsxs)("h2",{children:["user: ",e.user.name]}),Object(A.jsxs)("div",{className:"overlay",children:[Object(A.jsxs)("div",{children:["name: ",e.user.name]}),Object(A.jsxs)("div",{children:["email: ",e.user.email]}),Object(A.jsxs)("div",{children:["city: ",e.user.address.city]}),Object(A.jsxs)("div",{children:["company name: ",e.user.company.name]})]}),Object(A.jsx)("div",{className:"back",children:Object(A.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.history.back()},children:"back to all users"})})]})})},U=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:{name:"",email:"",address:{city:""},company:{name:""}}},e.componentDidMount=function(){f(e.props.match.params.userId).then((function(t){e.setState({user:t.data})})).catch((function(e){return alert("get user error")}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsx)(F,{user:this.state.user})})}}]),a}(s.Component),I=a(20),M=a(35);function D(e){var t=M.a().shape({name:M.b().required(),email:M.b().email().required(),username:M.b().required()});return Object(A.jsx)(I.d,{enableReinitialize:!0,initialValues:e.values,onSubmit:e.onSubmit,validationSchema:t,children:function(e){return Object(A.jsxs)(I.c,{className:"form",autoComplete:"off",children:[e.values.id?null:Object(A.jsx)(j.a,{when:e.dirty,message:"are you want to leave this page without add user"}),Object(A.jsxs)("div",{className:"input-container ic1",children:[Object(A.jsx)(I.b,{name:"name",id:"firstname",className:"input",placeholder:" "}),Object(A.jsx)("div",{className:"cut cut-short"}),Object(A.jsx)("label",{htmlFor:"firstname",className:"placeholder",children:"Name"}),Object(A.jsx)(I.a,{name:"name"})]}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"input-container ic2",children:[Object(A.jsx)(I.b,{name:"email",id:"lastname",className:"input",placeholder:" "}),Object(A.jsx)("div",{className:"cut cut-short"}),Object(A.jsx)("label",{htmlFor:"lastname",className:"placeholder",children:"Email"}),Object(A.jsx)(I.a,{name:"email"})]}),Object(A.jsx)("hr",{}),Object(A.jsxs)("div",{className:"input-container ic2",children:[Object(A.jsx)(I.b,{name:"username",id:"email",className:"input",placeholder:" "}),Object(A.jsx)("div",{className:"cut"}),Object(A.jsx)("label",{htmlFor:"email",className:"placeholder",children:"user name"}),Object(A.jsx)(I.a,{name:"username"})]}),Object(A.jsx)("button",{type:"submit",className:"submit btn btn-primary",children:e.values.id?"Edit":"Add"})]})}})}var T=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:{name:"mm",email:"",username:"",address:{city:""},company:{name:""}}},e.componentDidMount=function(){f(e.props.match.params.userId).then((function(t){e.setState({user:t.data})})).catch((function(e){return alert("get user error")}))},e.updateUser=function(t){var a=e.state.user.id;t.name===e.state.user.name&&t.email===e.state.user.email&&t.username===e.state.user.username?alert("you dont edit any think (there are same name, email and username)"):g(a,t).then((function(){alert("user edited success"),e.props.history.push("/#cloudusers2/users")})).catch((function(e){alert("edit user error")}))},e.handelback=function(){window.history.back()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"container-edituser",children:[Object(A.jsx)("h2",{children:"edit user"}),Object(A.jsx)(D,{values:this.state.user,onSubmit:this.updateUser}),Object(A.jsx)("div",{className:"back",children:Object(A.jsx)(d.b,{className:"btn btn-secondary",to:"/cloudusers2/users/",children:"back to all users"})})]})}}]),a}(s.Component),E=a(26),L=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:{name:"",email:"",username:"",address:{city:""},company:{name:""}}},e.addUser=function(t){e.setState({user:Object(E.a)({},t)}),S(t).then((function(){alert("add user success"),e.setState({user:Object(E.a)(Object(E.a)({},e.state.user),{},{name:"",email:"",username:""})})})).catch((function(e){alert("add user error")}))},e.handelback=function(){document.querySelector('a[href="#cloudusers2/users/create/"]').classList.remove("active"),document.querySelector('a[href="#cloudusers2/users/"]').classList.add("active")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"create-user",children:[Object(A.jsx)("h2",{children:"add user"}),Object(A.jsx)(D,{values:this.state.user,onSubmit:this.addUser}),Object(A.jsx)("div",{className:"back",children:Object(A.jsx)("span",{onClick:this.handelback,children:Object(A.jsx)(d.b,{className:"btn btn-secondary",to:"/cloudusers2/users/",children:"back to all users"})})})]})}}]),a}(s.Component),P=function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"404, Not Found"}),Object(A.jsxs)("p",{children:["No Match For ",e.location.pathname]})]})};var B=function(e){var t=function(e){return Object(A.jsx)(d.c,Object(E.a)(Object(E.a)({exact:!0,className:"nav-link",activeClassName:"active"},e),{},{children:e.children}))};return Object(A.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(A.jsxs)("div",{className:"container-fluid",children:[Object(A.jsx)(d.b,{className:"ml3 navbar-brand",to:"/cloudusers2",children:"MUSTAFA SAAD"}),Object(A.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(A.jsx)("span",{className:"navbar-toggler-icon"})}),Object(A.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(A.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(t,{to:"/cloudusers2",children:"Home"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(t,{to:"/cloudusers2/users/",children:"Users"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(t,{to:"/cloudusers2/users/create/",children:"create user"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(t,{to:"/cloudusers2/about/",children:"About"})})]})})]})})},H=(a(224),function(){return Object(A.jsx)("div",{className:"home",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"overlay",children:[Object(A.jsx)("h2",{children:"Home page"}),Object(A.jsx)("div",{children:"this app created using react, you can get, add, edit and delet any user you want, And all this is done by http ajax request / api (mock api). if you add or edit user application will send http ajax request to api and If there is any problem or error, it will appear as alert and if you want to see requests (get, delete, put, post) when get or edit or delet or add user you can open inspect then network"})]})})})}),J=function(){return Object(A.jsx)("div",{className:"about-us",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"overlay",children:[Object(A.jsx)("h2",{children:"About Us"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("p",{children:"Name: Mustafa Ahmed Saad"}),Object(A.jsx)("p",{children:"Email: mustafasaad19970@gmail.com"}),Object(A.jsx)("p",{children:"Phone: 01007107894"})]})]})})})},z=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)(d.a,{hashType:"noslash",children:[Object(A.jsx)(B,{}),Object(A.jsxs)(j.d,{children:[Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2",exact:!0,component:H}),Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2/users/",exact:!0,component:q}),Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2/about/",component:J}),Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2/users/create/",exact:!0,component:L}),Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2/users/:userId",exact:!0,component:U}),Object(A.jsx)(j.b,{className:"nav-link",path:"/cloudusers2/users/edit/:userId",exact:!0,component:T}),Object(A.jsx)(j.b,{className:"nav-link",path:"/",component:H}),Object(A.jsx)(j.b,{className:"nav-link",component:P})]})]})})}}]),a}(s.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(z,{})}),document.getElementById("root")),R()}},[[225,1,2]]]);
//# sourceMappingURL=main.b42abea6.chunk.js.map
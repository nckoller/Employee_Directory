(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{26:function(e,t,r){},3:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(2),n=r.n(s),o=r(15),c=r.n(o),l=(r(26),r(5)),i=r(16),d=r(17),m=r(20),p=r(19);r(3);function u(e){return console.log("CARD PROPS",e),Object(a.jsx)("div",{className:"col-sm-4 employee-card",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img-top photo",src:e.employeeArr.photo,alt:"Employee"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title employee-name",children:[e.employeeArr.firstName," ",e.employeeArr.lastName]}),Object(a.jsxs)("p",{className:"card-text",children:["Email: ",e.employeeArr.email]}),Object(a.jsxs)("p",{className:"card-text",children:["Phone: ",e.employeeArr.phoneNumber]}),Object(a.jsxs)("p",{className:"card-text",children:["Username: ",e.employeeArr.username]})]})]})})}r(6);function j(e){return console.log("employee grid props",e),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"card-deck",children:e.employeeArr.map((function(e){return Object(a.jsx)(u,{employeeArr:e})}))})})}function b(e){var t=e.handleSearchChange;return Object(a.jsx)("div",{children:Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by name",onChange:function(e){return t(e)}})})})}function h(e){e.handleSortSelection;return Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Sort Alphabetically By"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(a.jsx)("button",{className:"dropdown-item",type:"button",children:"First Name"}),Object(a.jsx)("button",{className:"dropdown-item",type:"button",children:"Last Name"}),Object(a.jsx)("button",{className:"dropdown-item",type:"button",children:"Username"})]})]})}function y(){return Object(a.jsxs)("header",{className:"jumbotron header-text",children:[Object(a.jsx)("h1",{children:"Staff Directory"}),Object(a.jsx)(b,{}),Object(a.jsx)(h,{})]})}var f=function(e){Object(m.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).filterBy=function(){var e=a.state.parsedEmployeeArr.filter((function(e){return(e.firstName.toLowerCase()+" "+e.lastName.toLowerCase()).includes(a.state.filterBy)}));console.log("filtered",e),a.setState({parsedEmployeeArr:e})},a.sortBy=function(){console.log("sortBy",a.state.sortBy);var e=Object(l.a)(a.state.parsedEmployeeArr);e.sort((function(e,t){return e[a.state.sortBy]>t[a.state.sortBy]?1:-1})),a.setState({parsedEmployeeArr:e})},a.state={employeeArr:e.data,parsedEmployeeArr:Object(l.a)(e.data),filterBy:"",sortBy:"lastName"},console.log("constructor end"),a}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.sortBy()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y,{}),Object(a.jsx)(j,{employeeArr:this.state.parsedEmployeeArr}),"This is some test text"]})}}]),r}(n.a.Component),O=r(18),x=r.n(O);x.a.get("https://randomuser.me/api/?results=75&nat=us").then((function(e){!function(e){c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{data:e})}),document.getElementById("root"))}(e.data.results.map((function(e){return{firstName:e.name.first,lastName:e.name.last,email:e.email,username:e.login.username,phoneNumber:e.phone,photo:e.picture.large}})))}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d6452bba.chunk.js.map
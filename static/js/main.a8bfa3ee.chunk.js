(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{26:function(e,t,r){},3:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),s=r.n(n),c=r(15),o=r.n(c),l=(r(26),r(5)),i=r(16),d=r(17),m=r(20),u=r(19);r(3);function p(e){return Object(a.jsx)("div",{className:"col-lg-4 employee-card",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img-top photo",src:e.employeeArr.photo,alt:"Employee"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title employee-name",children:[e.employeeArr.firstName," ",e.employeeArr.lastName]}),Object(a.jsxs)("p",{className:"card-text",children:["Email: ",e.employeeArr.email]}),Object(a.jsxs)("p",{className:"card-text",children:["Phone: ",e.employeeArr.phoneNumber]}),Object(a.jsxs)("p",{className:"card-text",children:["Username: ",e.employeeArr.username]})]})]})})}r(6);function h(e){return console.log("employee grid props",e),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"card-deck",children:e.employeeArr.map((function(e){return Object(a.jsx)(p,{employeeArr:e})}))})})}function j(e){var t=e.handleSearchChange;return Object(a.jsx)("div",{children:Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by name",onChange:function(e){return t(e)}})})})}function b(e){var t=e.handleSortSelection;return Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Sort Alphabetically By"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu2",children:[Object(a.jsx)("button",{className:"dropdown-item",type:"button",value:"firstName",onClick:function(e){return t(e)},children:"First Name"}),Object(a.jsx)("button",{className:"dropdown-item",type:"button",value:"lastName",onClick:function(e){return t(e)},children:"Last Name"}),Object(a.jsx)("button",{className:"dropdown-item",type:"button",value:"username",onClick:function(e){return t(e)},children:"Username"})]})]})}function y(e){var t=e.handleSearchChange,r=e.handleSortSelection;return Object(a.jsxs)("header",{className:"jumbotron header-text",children:[Object(a.jsx)("h1",{children:"Staff Directory"}),Object(a.jsx)(j,{handleSearchChange:t}),Object(a.jsx)(b,{handleSortSelection:r})]})}var f=function(e){Object(m.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleSearchChange=function(e){var t=e.target.value;a.setState({filterBy:t},(function(){a.filterBy()}))},a.handleSortSelection=function(e){var t=e.target.value;a.setState({sortBy:t},(function(){a.sortBy()}))},a.filterBy=function(){var e=a.state.employeeArr.filter((function(e){return(e.firstName.toLowerCase()+" "+e.lastName.toLowerCase()).includes(a.state.filterBy)}));a.setState({parsedEmployeeArr:e})},a.sortBy=function(){var e=Object(l.a)(a.state.parsedEmployeeArr);e.sort((function(e,t){return e[a.state.sortBy]>t[a.state.sortBy]?1:-1})),a.setState({parsedEmployeeArr:e})},a.state={employeeArr:e.data,parsedEmployeeArr:Object(l.a)(e.data),filterBy:"",sortBy:""},a}return Object(d.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(y,{handleSearchChange:this.handleSearchChange,handleSortSelection:this.handleSortSelection}),Object(a.jsx)(h,{employeeArr:this.state.parsedEmployeeArr})]})}}]),r}(s.a.Component),O=r(18),x=r.n(O);x.a.get("https://randomuser.me/api/?results=75&nat=us").then((function(e){!function(e){o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{data:e})}),document.getElementById("root"))}(e.data.results.map((function(e){return{firstName:e.name.first,lastName:e.name.last,email:e.email,username:e.login.username,phoneNumber:e.phone,photo:e.picture.large}})))}))}},[[44,1,2]]]);
//# sourceMappingURL=main.a8bfa3ee.chunk.js.map
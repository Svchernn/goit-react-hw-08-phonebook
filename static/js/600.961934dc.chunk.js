"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[600],{2600:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(4942),a=t(1413),s=t(9439),i=t(2791),c=t(9434),l=t(30),o={name:"",number:""},u=t(3932),d="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",h="ContactForm_input__Bl93P",_=t(184),f=function(){var e=(0,i.useState)((0,a.Z)({},o)),n=(0,s.Z)(e,2),t=n[0],f=n[1],x=(0,c.I0)();(0,i.useEffect)((function(){x((0,l.CL)())}),[x]);var b=function(e){var n=e.target,t=n.name,s=n.value;f((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,s))}))},j=function(e){var n=e.name,t=e.number;x((0,l.v6)({name:n,number:t}))},v=t.name,p=t.number;return(0,_.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),j((0,a.Z)({},t)),f((0,a.Z)({},o))},children:[(0,_.jsxs)("label",{className:m,children:["Name",(0,_.jsx)("input",{className:h,onChange:b,type:"text",name:"name",value:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:m,children:["Number",(0,_.jsx)("input",{className:h,onChange:b,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)(u.Z,{children:"Add contacts"})]})},x=t(8790),b=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var r=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(r)}))},j=function(e){return e.contacts.loading},v=t(9e3),p="ContactList_table__GN5S1",N="ContactList_itemBtn__b1tdW",C=function(){var e=(0,c.v9)(b),n=(0,c.I0)();return(0,c.v9)(j)?(0,_.jsx)(x.Z,{}):(0,_.jsx)(_.Fragment,{children:e.length>0?(0,_.jsx)("table",{className:p,children:(0,_.jsx)("tbody",{children:e.map((function(e,t){var r=e.id,a=e.name,s=e.number;return(0,_.jsxs)("tr",{children:[(0,_.jsxs)("td",{children:[t+1,"."]}),(0,_.jsx)("td",{valign:"bottom",children:(0,_.jsx)("span",{role:"img",children:(0,_.jsx)(v.AJ5,{})})}),(0,_.jsx)("td",{children:a}),(0,_.jsx)("td",{children:s}),(0,_.jsx)("td",{children:(0,_.jsx)("button",{className:N,onClick:function(){return function(e){n((0,l.in)(e))}(r)},type:"button",children:"Delete"})})]},r)}))})}):(0,_.jsx)("p",{children:"No contacts!"})})},g=function(e){return e.filter},Z=t(5653),y="Filter_form__wVnxJ",F="Filter_label__vEd1E",w="Filter_input__N7T3z",k=function(){var e=(0,c.v9)(g),n=(0,c.I0)();return(0,_.jsxs)("form",{className:y,children:[(0,_.jsx)("label",{className:F,children:"Find contacts by name"}),(0,_.jsx)("input",{className:w,value:e,name:"filter",onChange:function(e){var t=e.target;n((0,Z.T)(t.value))},pleceholder:"Find by name"})]})},A="Section_section__Z2PLw",L="Section_title__SLHvV",S=function(e){var n=e.title,t=e.children;return(0,_.jsxs)("div",{className:A,children:[(0,_.jsx)("h2",{className:L,children:n}),t]})},z=function(){return(0,_.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"#010101"},children:[(0,_.jsx)(S,{title:"Phonebook",children:(0,_.jsx)(f,{})}),(0,_.jsxs)(S,{title:"Contacts",children:[(0,_.jsx)(k,{}),(0,_.jsx)(C,{})]})]})}},3932:function(e,n,t){t.d(n,{Z:function(){return s}});var r="Button_button__urlvE",a=t(184),s=function(e){var n=e.children,t=e.type,s=void 0===t?"submit":t;return(0,a.jsx)("button",{type:s,className:r,children:n})}}}]);
//# sourceMappingURL=600.961934dc.chunk.js.map
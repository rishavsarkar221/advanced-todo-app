(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(19),r=n.n(i),s=(n(25),n(13)),u=n(4),j=n(1),o=function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t.list}),Object(j.jsx)("button",{onClick:function(){t.deleteNote(t.id)},children:"Delete"}),Object(j.jsx)("button",{onClick:function(){t.pinNote(t.list,t.id)},children:"Pin"})]})},b=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),i=n[0],r=n[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.submit(i),r("")},children:[Object(j.jsx)("input",{type:"text",onChange:function(t){r(t.target.value)},value:i,placeholder:"Add a Task"}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})},a=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),i=n[0],r=n[1];return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",onChange:function(e){r(e.target.value),t.filterNotes(i)},placeholder:"Search Lists"})})},l=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),i=n[0],r=n[1],s=Object(c.useState)(t.lists),l=Object(u.a)(s,2),d=l[0],O=l[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{submit:t.submitHandler}),Object(j.jsx)("br",{}),Object(j.jsx)(a,{filterNotes:function(e){r(e),O(t.lists.filter((function(t){return t.toUpperCase().includes(i.toUpperCase())})))}}),0===t.lists.length&&Object(j.jsx)("h1",{children:"No Lists to Display"}),d.map((function(e,n){return Object(j.jsx)(o,{id:n,deleteNote:t.deleteNote,list:e,pinNote:t.pinNote},n)}))]})},d=function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t.value}),Object(j.jsx)("button",{onClick:function(){t.unpinNote(t.id)},children:"Unpin"})]})},O=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),i=n[0],r=n[1];return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",onChange:function(e){r(e.target.value),t.filterNotes(i)},placeholder:"Search Pinned Lists"})})},f=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),i=n[0],r=n[1],s=Object(c.useState)(t.pinnedLists),o=Object(u.a)(s,2),b=o[0],a=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(O,{filterNotes:function(e){r(e),a(t.pinnedLists.filter((function(t){return t.toUpperCase().includes(i.toUpperCase())})))}}),0===t.pinnedLists.length&&Object(j.jsx)("h1",{children:"No Pinned Notes as of now"}),b.map((function(e,n){return Object(j.jsx)(d,{value:e,id:n,unpinNote:t.unpinNoteHandler},n)}))]})},p=n(11),x=n(2),h=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),b=o[0],a=o[1],d=function(t){i((function(e){return[t].concat(Object(s.a)(e))}))},O=function(t){i((function(e){return e.filter((function(e,n){return t!==n}))}))},h=function(t,e){a((function(e){return[t].concat(Object(s.a)(e))})),i((function(t){return t.filter((function(t,n){return e!==n}))}))},v=function(t){a((function(e){return e.filter((function(e,n){return t!==n}))})),i((function(e){return[b[t]].concat(Object(s.a)(e))}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(p.b,{to:"/",children:"Home"}),Object(j.jsx)("br",{}),Object(j.jsx)(p.b,{to:"/pinned",children:"Pinned"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",component:function(){return Object(j.jsx)(l,{lists:n,deleteNote:O,submitHandler:d,pinNote:h})}}),Object(j.jsx)(x.a,{exact:!0,path:"/pinned",component:function(){return Object(j.jsx)(f,{pinnedLists:b,unpinNoteHandler:v})}})]})]})};r.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.11db8772.chunk.js.map
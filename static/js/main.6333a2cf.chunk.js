(this["webpackJsonpto-do-list-app"]=this["webpackJsonpto-do-list-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=(a(15),a(16),a(9)),i=a(2),o=a(8),u=a.n(o),m=Object(n.createContext)(),d=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),l=Object(i.a)(a,2),r=l[0],o=l[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);var d=Object(n.useState)(null),f=Object(i.a)(d,2),E=f[0],k=f[1];return c.a.createElement(m.Provider,{value:{tasks:r,addTask:function(e){o([].concat(Object(s.a)(r),[{title:e,id:u()()}]))},removeTask:function(e){o(r.filter((function(t){return t.id!==e})))},clearList:function(){o([])},findItem:function(e){var t=r.find((function(t){return t.id===e}));k(t)},editTask:function(e,t){var a=r.map((function(a){return a.id===t?{title:e,id:t}:a}));console.log(a),o(a),k(null)},editItem:E}},e.children)};function f(e){var t=e.task,a=Object(n.useContext)(m),l=a.removeTask,r=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title," "),c.a.createElement("div",null,c.a.createElement("button",{className:"btn-delete task-btn",onClick:function(){return l(t.id)}},c.a.createElement("i",{className:"fas fa-trash-alt"}))," ",c.a.createElement("button",{className:"btn-edit task-btn",onClick:function(){r(t.id)}},c.a.createElement("i",{className:"fas fa-pen"}))))}function E(){var e=Object(n.useContext)(m).tasks;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(f,{task:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"No Tasks"))}function k(){var e=Object(n.useContext)(m),t=e.addTask,a=e.clearList,l=e.editItem,r=e.editTask,s=Object(n.useState)(""),o=Object(i.a)(s,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){d(null!==l?l.title:"")}),[l]),c.a.createElement("div",null,c.a.createElement("form",{className:"form"},c.a.createElement("input",{type:"text",className:"task-input",placeholder:"Add Task..",value:u,onChange:function(e){d(e.target.value)}}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn",onClick:function(e){e.preventDefault(),l?r(u,l.id):(t(u),d(""))}},l?"Edit Task":"Add Task"),c.a.createElement("button",{type:"submit",className:"btn clear-btn",onClick:function(e){e.preventDefault(),a()}},"Clear Task"))))}function v(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"To Do List")))}var b=function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(v,null),c.a.createElement(k,null),c.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.6333a2cf.chunk.js.map
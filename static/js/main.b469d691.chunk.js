(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(7),r=c.n(a),s=(c(13),c(0));function o(){return Object(s.jsx)("nav",{className:" green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#!",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#!",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer  green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var j=c(8),d=c(1),u=c(3);function b(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,c=e.name,n=e.description,i=e.price,a=e.full_background,r=e.addToBascket,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:a,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:c,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," \u0440\u0443\u0431."]})]})]})]})}function O(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBascket,i=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{addToBascket:i}),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing here"})}function m(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,i=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:i,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})}function p(e){var t=e.id,c=e.name,n=e.price,i=e.quantity,a=e.removeFromBasket,r=void 0===a?Function.prototype:a,o=e.incQuantity,l=void 0===o?Function.prototype:o,j=e.decQuantity,d=void 0===j?Function.prototype:j;return Object(s.jsxs)("li",{className:"collection-item",children:[c," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return d(t)},children:"remove"})," ","x ",i," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"})," ","= ",n*i," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}function x(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,i=void 0===n?Function.prototype:n,a=e.removeFromBasket,r=void 0===a?Function.prototype:a,o=e.incQuantity,l=void 0===o?Function.prototype:o,j=e.decQuantity,u=void 0===j?Function.prototype:j,b=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(s.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:r,incQuantity:l,decQuantity:u}),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b," \u0440\u0443\u0431."]}),Object(s.jsx)("li",{className:"collection-item ",children:Object(s.jsx)("button",{"btn-small":!0,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})}function f(e){var t=e.name,c=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var e=setTimeout(a,2e3);return function(){clearInterval(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function v(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),r=Object(u.a)(a,2),o=r[0],l=r[1],h=Object(n.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(n.useState)(!1),g=Object(u.a)(N,2),k=g[0],F=g[1],q=Object(n.useState)(""),B=Object(u.a)(q,2),S=B[0],w=B[1],Q=function(){F(!k)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"eb132622-370a625b-d975f9ac-ef017c7e"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(m,{quantity:v.length,handleBasketShow:Q}),o?Object(s.jsx)(b,{}):Object(s.jsx)(O,{goods:c,addToBascket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});y([].concat(Object(j.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));y(n)}w(e.name)}}),k&&Object(s.jsx)(x,{order:v,handleBasketShow:Q,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));y(t)},incQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));y(t)},decQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=0?c:0})}return t}));y(t)}}),S&&Object(s.jsx)(f,{name:S,closeAlert:function(){w("")}})]})}var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b469d691.chunk.js.map
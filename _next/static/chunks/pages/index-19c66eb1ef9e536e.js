(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3104:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4638)}])},4638:function(e,n,t){"use strict";t.r(n),t.d(n,{Index:function(){return te},default:function(){return re}});var r=t(4637),i=t(9496),a=t(8253),o=new Worker(new URL(t.p+t.u(997),t.b));(0,a.vI)();var s=t(7634),c=(0,s.k)(void 0),l=(0,i.createContext)(void 0),u=c.Provider,d=function(e){return(0,s.S)(c,e)},f=l.Provider,m=function(){return(0,i.useContext)(l)},h=t(1626);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.memo((function(e){var n=e.active,t=e.children,i=e.className,a=e.disabled,o=e.onClick,s=e.variant,c=void 0===s?"secondary":s,l=y(e,["active","children","className","disabled","onClick","variant"]);return(0,r.jsx)("button",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}({disabled:a,onClick:function(e){a||null===o||void 0===o||o(e)},className:(0,h.Z)("border border-gray-700 border-solid cursor-pointer px-3 relative",n&&"bg-blue-700 text-white","primary"===c&&"bg-blue-700 text-white","danger"===c&&"bg-red-900 text-white",a&&"opacity-50",i)},l,{children:t}))}));function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var j=i.memo((function(e){var n=e.children,t=e.className,i=b(e,["children","className"]);return(0,r.jsx)("div",x({className:(0,h.Z)(t)},i,{children:n}))})),w=i.memo((function(e){var n=e.children,t=e.className,i=e.active,a=e.onClick,o=b(e,["children","className","active","onClick"]);return(0,r.jsx)("button",x({onClick:function(e){i||null===a||void 0===a||a(e)},className:(0,h.Z)("cursor-pointer px-3 py-1 border-b-2 border-opacity-0 border-blue-600",i&&"border-opacity-100",t)},o,{children:n}))})),N=t(9328),C=function(){var e=d((function(e){return e.messages})).slice(-3);return(0,r.jsx)("div",{className:"w-full p-4 text-gray-300 border",children:e.map((function(n,t){return(0,r.jsx)("p",{className:(0,h.Z)(t===e.length-2&&"text-gray-500",t===e.length-1&&"text-gray-900"),children:n},n)}))})},k=t(3683);function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var n=e.className,t=m(),i=O((0,k.Z)()({initial:"inactive",states:{inactive:{on:{RESET:"requiresConfirmation"}},requiresConfirmation:{on:{CONFIRM:"reset",CANCEL:"inactive"}},reset:{on:{INACTIVE:"inactive"},effect:function(e){t({type:"RESET_GAME"}),e("INACTIVE")}}}}),2),a=i[0],o=i[1];return(0,r.jsxs)("div",{className:n,children:["inactive"===a.value&&(0,r.jsx)(p,{variant:"danger",onClick:function(){o("RESET")},children:"Reset"}),"requiresConfirmation"===a.value&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{variant:"danger",onClick:function(){o("CONFIRM")},children:"Confirm Reset"}),(0,r.jsx)(p,{onClick:function(){o("CANCEL")},children:"Cancel"})]})]})},A=t(567),Z=t(2863),I=t(1344),S=t(6955),P=t.n(S),_=new Date(1997,7,29,2,14,0),M=(0,A.Z)(_,{days:30}),T=function(e){var n=e.className,t=d((function(e){return e.time})),i=d((function(e){return e.things})),a=(0,Z.Z)((0,I.Z)(M,t),"MMMM d, yyyy hh:mm bb");return(0,r.jsxs)("div",{className:n,children:["It is ",a,".",(0,r.jsxs)("p",{children:["You have"," ",P()(i).format({thousandSeparated:!0})," ","things."]})]})},B=[{key:"buyClothes",name:"Buy more clothes",description:"I really don't have enough clothes. I should buy some more.",max:1,costs:{desperation:0,money:0},effect:{type:"add",unlock:"buyClothes"},flavorTexts:{1:"I found a pretty good online store."},requirements:{time:(0,N.Z)(120),desperation:0,money:0}},{key:"autoClothes",name:"Plan out clothing in advance",description:"I don't have that many clothes. I could just wear the same sort of thing each day.",max:1,costs:{desperation:0,money:0},effect:{type:"add",unlock:"autoClothes"},flavorTexts:{1:"Done"},requirements:{time:(0,N.Z)(120),desperation:0,money:0}}],D=t(8462),R=t(2699),U=(0,N.Z)(24),F=new Date(1997,7,29,2,14,0),L=(0,A.Z)(F,{days:30}),q=function(){var e=d((function(e){return e.timeline})),n=(0,i.useState)(void 0),t=n[0],a=n[1],o=(0,R.groupBy)(e,(function(e){return Math.floor(e.time/U)})),s=void 0!==t?o[t]:void 0;return(0,r.jsxs)("div",{children:[(0,r.jsx)("ul",{children:(0,R.range)(0,30).map((function(e){var n=o[e];return(0,r.jsx)(p,{onClick:function(){a(t!==e?e:void 0)},variant:n?"primary":"secondary",children:e},e)}))}),void 0!==s&&(0,r.jsx)("ul",{children:s.map((function(e){return(0,r.jsxs)("li",{children:[(0,Z.Z)((0,D.Z)(L,{seconds:e.time/1e3}),"hh:mm bb")," ",G(e.action)]},e.time)}))})]})},G=function(e){switch(e.type){case"BUY_UPGRADE":return"Buy upgrade: ".concat(function(e){var n=B.find((function(n){return n.key===e}));if(!n)throw new Error("Could not find an upgrade with key: ".concat(e));return n}(e.payload.key).name)}},Y=function(e){var n,t=e.className,a=d((function(e){return null!==(n=e.stats)&&void 0!==n?n:{}})),o=d((function(e){return e.upgrades})),s=m(),c=(0,i.useMemo)((function(){return B.filter((function(e){return a.desperation>=e.costs.desperation&&a.money>=e.costs.money}))}),[a.desperation,a.money]);return(0,r.jsxs)("section",{className:(0,h.Z)("flex flex-col gap-2",t),children:[(0,r.jsx)("h2",{className:"sr-only",children:"Upgrades"}),c.map((function(e){var n,t=null!==(n=o[e.key])&&void 0!==n?n:0,i=e.flavorTexts[t];return(0,r.jsxs)("div",{className:"grid grid-cols-[auto,1fr] gap-x-2",children:[(0,r.jsxs)(p,{disabled:t===e.max,"aria-label":"Buy ".concat(e.name),onClick:function(){s({type:"BUY_UPGRADE",payload:{key:e.key}})},children:["Buy (",t,")"]}),(0,r.jsx)("div",{children:e.name}),i&&(0,r.jsx)("p",{className:"col-start-2",children:i})]},e.key)}))]})},V=t(7189),X=t.n(V);function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Q=function(e){var n=e.className;return(0,r.jsxs)("div",{className:(0,h.Z)("w-[80px] relative h-[400px] overflow-hidden",n),children:[(0,r.jsx)(H,{className:"absolute top-0 left-0 w-full h-full"}),(0,r.jsx)(W,{className:"absolute top-0 left-0 w-full h-full"})]})},W=function(e){var n=e.className,t=-(120*((d((function(e){return e.time}))%(0,N.Z)(24)/(0,N.Z)(1)-6)/6)-60);return(0,r.jsx)("div",{className:(0,h.Z)("flex items-center justify-center",n),style:{transform:"translate(25%, ".concat(t,"%)")},children:(0,r.jsx)("div",{className:"w-8 h-8 bg-yellow-300 rounded-full filter blur-md"})})},H=function(e){var n=e.children,t=e.className,i=d((function(e){return e.time})),a=z(J(i),2),o=a[0],s=a[1];return(0,r.jsx)("div",{className:(0,h.Z)("flex items-center justify-center",t),style:{background:"linear-gradient(".concat(s,", ").concat(o,")")},children:n})},J=function(e){var n,t=e%(0,N.Z)(24)/(0,N.Z)(1),r=K.findIndex((function(e){return e.time>t})),i=Math.max(r-1,0),a=Math.min(i+1,K.length-1),o=K[i],s=K[a];if(s.time===o.time)n=0;else{var c=s.time-o.time;n=(t-o.time)/c}return[X()(o.low,s.low,n),X()(o.high,s.high,n)]},K=[{time:0,low:"#000000",high:"#000000"},{time:5,low:"#000000",high:"#000000"},{time:6,low:"#E67B09",high:"#112044"},{time:7,low:"#E79617",high:"#536875"},{time:8,low:"#FADA77",high:"#343E56"},{time:9,low:"#E2D7A9",high:"#343E61"},{time:10,low:"#ABC3BF",high:"#314C87"},{time:12,low:"#8DBACD",high:"#3A6DAE"},{time:18,low:"#6FACC7",high:"#085997"},{time:19,low:"#B59A6D",high:"#6C778A"},{time:20,low:"#42677B",high:"#3372A1"},{time:21,low:"#13203C",high:"#000924"},{time:22,low:"#000000",high:"#000000"},{time:24,low:"#000000",high:"#000000"}],$=function(){var e=d((function(e){return e.time})),n=d((function(e){return e.upgrades.buyClothes})),t=(0,i.useState)("upgrades"),a=t[0],o=t[1],s=(0,i.useMemo)((function(){return(0,r.jsx)("div",{className:"min-h-screen bg-gray-50",children:(0,r.jsxs)("div",{className:"grid py-4 mx-auto max-w-[1100px] grid-cols-[400px_1fr_60px]",style:{gridTemplateAreas:'\n            "status main window"\n            "timeline timeline timeline"\n            "messages messages messages"\n          '},children:[(0,r.jsxs)("aside",{className:"[grid-area:status]",children:[(0,r.jsx)(T,{className:"mb-3"}),(0,r.jsx)(E,{})]}),(0,r.jsxs)("main",{className:"[grid-area:main]",children:[(0,r.jsxs)(j,{children:[(0,r.jsx)(w,{active:"upgrades"===a,onClick:function(){return o("upgrades")},children:"Upgrades"}),n&&(0,r.jsx)(w,{active:"shop"===a,onClick:function(){return o("shop")},children:"Shop"})]}),(0,r.jsx)("div",{className:"grid",children:(0,r.jsx)("div",{className:"relative z-10 p-4",children:"upgrades"===a&&(0,r.jsx)(Y,{})})})]}),(0,r.jsx)(Q,{className:"[grid-area:window] "}),(0,r.jsx)("div",{className:"[grid-area:messages]",children:(0,r.jsx)(C,{})}),(0,r.jsx)("div",{className:"[grid-area:timeline]",children:(0,r.jsx)(q,{})})]})})}),[n,a]);return(0,r.jsx)("div",{className:e%(0,N.Z)(24)>(0,N.Z)(8)?"light":"dark",children:s})},ee=(0,r.jsx)($,{}),ne=function(){var e=function(){var e=(0,i.useState)(void 0),n=e[0],t=e[1];o.onmessage=function(e){var r=e.data;"INITIAL"!==r.type?t((0,a.QE)(n,r.payload)):t(r.payload)};var r=(0,i.useCallback)((function(e){null===o||void 0===o||o.postMessage(e)}),[]);return(0,i.useMemo)((function(){return{dispatch:r,state:n}}),[r,n])}(),n=e.state,t=e.dispatch;return n?(0,r.jsx)(u,{value:n,children:(0,r.jsx)(f,{value:t,children:ee})}):(0,r.jsx)("div",{children:"Loading..."})},te=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1];return(0,i.useEffect)((function(){t(!0)}),[]),n?(0,r.jsx)(ne,{}):(0,r.jsx)("div",{children:"Loading..."})},re=te}},function(e){e.O(0,[201,418,774,888,179],(function(){return n=3104,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
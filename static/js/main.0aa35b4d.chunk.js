(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{64:function(e,t,n){e.exports=n(79)},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(52),c=n.n(l),o=(n(72),n(73),n(14)),i=n(13),u=n(5),m=n(126),s=n(131),f=n(127),E=n(121),d=n(129),p=n(124),b=(n(74),n(132)),g=n(123),h=n(128),v=Object(u.a)("li")(function(e){return{margin:e.theme.spacing(.5)}});function y(){var e=a.useState([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=a.useState(String),c=Object(i.a)(l,2),u=c[0],y=c[1],k=a.useState(!1),C=Object(i.a)(k,2),N=C[0],S=C[1],j=a.useState(),w=Object(i.a)(j,2),x=w[0],O=w[1];return a.createElement("div",null,a.createElement("hr",{className:"marginedHR"}),a.createElement(E.a,{id:"namesInput",variant:"filled",label:"Enter name",color:"secondary",value:u,onChange:function(e){return y(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(r(function(e){return[].concat(Object(o.a)(e),[{key:u,label:u}])}),y(""))}}),a.createElement(s.a,{id:"chipsPaper",sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul"},n.map(function(e){return a.createElement(v,{key:e.key},a.createElement(m.a,{label:e.label,color:"secondary",avatar:a.createElement(f.a,null,e.label[0]),onDelete:(t=e,function(){t&&r(function(e){return e.filter(function(e){return e.key!==t.key})})})}));var t})),a.createElement("hr",{className:"marginedHR"}),a.createElement(h.a,{container:!0},a.createElement(h.a,{item:!0,xs:6},a.createElement(b.a,null,a.createElement(g.a,{control:a.createElement(p.a,null),label:"Delete name on getting picked",labelPlacement:"start",checked:N,onChange:function(e){return S(!N)}}))),a.createElement(h.a,{item:!0,xs:4},a.createElement(d.a,{variant:"contained",size:"large",onClick:function(){var e=n[Math.floor(Math.random()*n.length)];O(e),N&&r(function(t){return t.filter(function(t){return t.key!==e.key})})}}," Pick a Name "))),a.createElement("div",{className:"centreGridCell"},a.createElement("h1",{id:"pickedName"},x?x.label:"")))}var k=n(130);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{className:"outerCard"},r.a.createElement("h1",null,"Wheel of Misfortune"),r.a.createElement(y,null)),r.a.createElement(k.a,{className:"footer"},r.a.createElement("p",null," Developed by ",r.a.createElement("a",{href:"https://github.com/d4nielcosta"},"Daniel Costa"))))},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),N()}},[[64,1,2]]]);
//# sourceMappingURL=main.0aa35b4d.chunk.js.map
(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(7),o=c.n(a),n=c(2),s=c(3),r=c(5),d=c(4),l=c(1),i=c.n(l),u=(c(13),c(14),c(8)),b=c.n(u),j=c(0),m=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this.props,t=e.item,c=e.selectedGood,a=e.addGood,o=e.removeItem;return Object(j.jsx)("td",{children:t===c?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:o,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return a(t)},children:"+"})})}}]),c}(i.a.Component),h=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this.props,t=e.goods,c=e.selectedGood,a=e.addGood,o=e.removeItem;return Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":e===c}),children:[Object(j.jsx)(m,{item:e,selectedGood:c,addGood:a,removeItem:o}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})}}]),c}(i.a.Component),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:""},e.addItem=function(t){e.setState({selectedGood:t})},e.removeItem=function(){e.setState({selectedGood:""})},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[t?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button","aria-label":"clear btn",className:"delete ml-3",onClick:function(){e.removeItem()}})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)(h,{goods:O,addGood:this.addItem,removeItem:this.removeItem,selectedGood:this.state.selectedGood})})]})}}]),c}(i.a.Component);o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ed0bdca9.chunk.js.map
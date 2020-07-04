(this["webpackJsonpcity-search"]=this["webpackJsonpcity-search"]||[]).push([[0],{20:function(e,t,n){e.exports=n(45)},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=(n(25),n(2)),l=n.n(o),u=n(7),s=n(18),p=n(3),m=n(4),h=n(6),d=n(5),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"rgba(255,255,255, 0.90)",padding:"20px",margin:"50px",boxShadow:"0px 0px 20px 0px rgba(0,0,0,0.75)",borderRadius:"10px",textAlign:"center"}},r.a.createElement("h1",null,"CitySearch"))}}]),n}(r.a.Component),b=function(e){var t=e.onChange,n=e.onSubmit;return r.a.createElement("div",{className:"input-form",style:{marginTop:"1vh",textAlign:"center"}},r.a.createElement("div",{style:{paddingRight:"1px"}},r.a.createElement("label",{style:{paddingRight:"10px"}},"Enter a city: "),r.a.createElement("input",{placeholder:"Try Los Angeles",onChange:t,id:"zip",onKeyPress:function(e){"Enter"===e.key&&n(e)}})),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return n(e)}},"Search by city"))},f=function(e){var t=e.cities;return t?r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{className:"card border-dark mb-3",style:{width:"18rem",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{className:"card-text",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/place/"+e},r.a.createElement("div",{style:{textAlign:"center"}},e))))}))):r.a.createElement("div",null)},v=n(19),y=n.n(v),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(s.a)({},e.target.id,e.target.value))},a.onSubmitZip=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.getZipSearch(a.state.zip.toUpperCase()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getZipSearch=function(e){y.a.get("https://ctp-zip-api.herokuapp.com/city/".concat(e)).then((function(e){e.data&&a.setState({cities:e.data})}))},a.state={zipcode:null,cities:null},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.zipcode){e.next=2;break}return e.abrupt("return",this.getZipSearch(this.state.zipcode));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(b,{onSubmit:this.onSubmitZip,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(f,{cities:this.state.cities}))}}]),n}(a.Component);n(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.483ae70b.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.281e5f7b.png"},function(e,t,a){e.exports=a.p+"static/media/icon-category.c6acdec0.png"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(7),r=a.n(l),c=a(1),i=a(2),o=a(4),m=a(3),d=a(5),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e,t){a.setState({render:e})},a.renderSubComp=function(){switch(a.state.render){case"openactivity":return n.a.createElement("div",null,"Progress Updated!");default:return""}},a.onClose=function(e){a.props.onClose&&a.props.onClose(e),a.setState({render:!1})},a.addPlus=function(e){if(e>0)return"+"},a.addClass=function(e){if(!e)return" out "},a.state={render:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?n.a.createElement("div",{className:this.addClass(this.props.show)+" modal absolute top-0 left-0 right-0 bottom-0 bg-gradient-blue light-blue san-serif center tc"},n.a.createElement("div",{className:"w-100 center"},n.a.createElement("section",{className:"bg-gradient-blue-title"},n.a.createElement("div",{className:"flex justify-center items-center pt5"},n.a.createElement("button",{className:"f3 fw4 no-underline grow v-mid light-blue bg-transparent br3 bn ph2 pv1 absolute right-2 top-2 open-sans",onClick:function(t){e.onClose(t)}},"x"),n.a.createElement("div",{className:"pa0 tl nb4 mt2"},n.a.createElement("img",{src:this.props.data.categoryicon,className:"dib w4 icon-category",alt:"{this.props.data.title}"})),n.a.createElement("div",{className:"pa3 tl nb3 mt0"},n.a.createElement("h1",{className:"ma0 pb2 f3-l f4-m f4-s fw6 light-blue"},this.props.data.title),n.a.createElement("span",null,n.a.createElement("label",{className:"light-purple"},this.props.data.category," | ")," ",this.props.data.subtitle)))),n.a.createElement("section",{className:"bg-gradient-blue-content pt5"},n.a.createElement("div",{className:"mw8 w-100 center"},n.a.createElement("h2",{className:"f3-l f4-m f4-s fw6 pb5"},"Activity updates"),n.a.createElement("div",{className:"dt center w5"},n.a.createElement("div",{className:"dtc w-50 nowrap tl f5"},n.a.createElement("span",{className:"f4 icon-clock pl2"},this.props.data.totaldays)," days"),n.a.createElement("div",{className:"dtc w-50 nowrap tr f4"},n.a.createElement("span",{className:"light-purple f3"},this.addPlus(this.props.data.deltadays),this.props.data.deltadays)," days")),n.a.createElement("div",{className:"dt center w5"},n.a.createElement("div",{className:"dtc w-50 nowrap tl f5"},n.a.createElement("span",{className:"f4 icon-arrow-up pl2"},this.props.data.totalxp)," XP"),n.a.createElement("div",{className:"dtc w-50 nowrap tr f4"},n.a.createElement("span",{className:"light-purple f3"},this.addPlus(this.props.data.deltaxp),this.props.data.deltaxp)," XP")),n.a.createElement("div",{className:"h2 mt4 mb0 f5 light-purple"},this.renderSubComp()),n.a.createElement("button",{className:"primary-button f4 no-underline grow v-mid white bg-transparent bw1 ba1 b--light-blue br3 ph4 pv3 mb3 mt1",onClick:function(){e.handleSubmit("openactivity")}},"Continue"),n.a.createElement("div",{className:"mt3 az-progress-bar"},n.a.createElement("span",{className:"b1 br-100 ma2 pa1 bg-light-blue dib"}),n.a.createElement("span",{className:"b1 br-100 ma2 pa1 bg-light-purple dib"}),n.a.createElement("span",{className:"b1 br-100 ma2 pa1 bg-light-blue dib"})))))):null}}]),t}(s.Component);p.defaultProps={totaldays:287,deltadays:26,totalxp:3244,deltaxp:-420,activityUpdateStatus:"",title:"Bachelor of Communications (Media)",subtitle:"Bachelor Degree",category:"Education",categoryicon:"[IMG]"};var u=p,b=(a(15),a(8)),h=a.n(b),g=a(9),f=a.n(g),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showModal=function(e){a.setState({show:!a.state.show})},a.state={show:!1,totaldays:287,deltadays:26,totalxp:3244,deltaxp:-420,activityUpdateStatus:"",title:"Bachelor of Communications (Media)",subtitle:"Bachelor Degree",category:"Education",categoryicon:f.a},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"page vh-100 bg-gradient-blue dt w-100 bg-right no-repeat cover relative open-sans"},n.a.createElement("header",null,n.a.createElement("div",{className:"cover bg-left bg-center bg-image"},n.a.createElement("div",{className:"bg-black-80 pb5 pb6-m pb7-l"},n.a.createElement("nav",{className:"dt w-100 mw8 center"},n.a.createElement("div",{className:"dtc w2 v-mid pa3"},n.a.createElement("a",{href:"/",className:"dib w3 h3 pa1 grow-large"},n.a.createElement("img",{src:h.a,className:"logo",alt:"AAZ"})))),n.a.createElement("div",{className:"tc mt4 mt5-m mt6-l ph3"},n.a.createElement("h1",{className:"f2 f1-l fw2 white-90 mb0 lh-title"},"Student's Portal"),n.a.createElement("h2",{className:"fw1 f3 white-80 mt3 mb4"},"Connect to real employment experiences"),n.a.createElement("button",{className:"primary-button f4 no-underline grow v-mid bg-dark-gray white ba b--light-blue br3 ph4 pv3 mb3",onClick:function(t){e.showModal()}},"Activity updates"),n.a.createElement("div",{className:this.state.show?"modal-active":""},n.a.createElement(u,{data:this.state,onClose:this.showModal,show:this.state.show})))))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.cb098b37.chunk.js.map
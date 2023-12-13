(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[135],{12975:function(e,t,r){"use strict";r.r(t);var n=r(85893),s=r(809),a=r.n(s),c=r(92447),o=r(74047),i=r(52700),l=r(4706),u=r(8127),d=r(44102),p=r(20775),h=r(26265),f=r(67294),m=r(35766),Z=r(39445),v=r(60416),g=r(5573),y=r(68788),N=r(48237),G=r(66670),w=r(38108),E=r(3542);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var s=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,d.Z)(this,r)}}var x=function(e){(0,u.Z)(r,e);var t=k(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),(0,h.Z)((0,l.Z)(e),"state",{doctorAddr:"",loading:"",errorMessage:""}),(0,h.Z)((0,l.Z)(e),"onSubmit",function(){var t=(0,c.Z)(a().mark((function t(r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),e.setState({loading:!0,errorMessage:""}),t.prev=2,t.next=5,E.Z.eth.getAccounts();case 5:return n=t.sent,t.next=8,w.Z.methods.givePermission(e.state.doctorAddr).send({from:n[0]});case 8:alert("Permission Granted Successfully!"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.setState({errorMessage:t.t0.message});case 14:e.setState({loading:!1,doctorAddr:""});case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()),e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this;return(0,n.jsx)(G.Z,{children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(Z.Z,{as:"h2",content:"Allow Access",subheader:"Give doctor or patient permission to view records"}),(0,n.jsx)(v.Z,{fluid:!0,placeholder:"Doctor's Ethereum Address",value:this.state.doctorAddr,onChange:function(t){return e.setState({doctorAddr:t.target.value})}}),(0,n.jsx)("br",{}),(0,n.jsxs)(g.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,children:[(0,n.jsx)(y.Z,{error:!0,header:"Oops!",content:this.state.errorMessage}),(0,n.jsx)(N.Z,{primary:!0,loading:this.state.loading,children:"Approve"})]})]})})}}]),r}(f.Component);t.default=x},54695:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/approve-doctor",function(){return r(12975)}])},68788:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var n=r(22122),s=r(93552),a=r(55288),c=r(86010),o=r(67294),i=r(92063),l=r(28935),u=r(12519),d=r(92248),p=r(25071),h=r(65382);function f(e){var t=e.children,r=e.className,s=e.content,a=(0,c.Z)("content",r),i=(0,l.Z)(f,e),p=(0,u.Z)(f,e);return o.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}f.handledProps=["as","children","className","content"],f.propTypes={};var m=f;function Z(e){var t=e.children,r=e.className,s=e.content,a=(0,c.Z)("header",r),i=(0,l.Z)(Z,e),p=(0,u.Z)(Z,e);return o.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,p.u5)(Z,(function(e){return{content:e}}));var v=Z,g=r(36744);function y(e){var t=e.children,r=e.className,s=e.content,a=(0,c.Z)("content",r),i=(0,l.Z)(y,e),p=(0,u.Z)(y,e);return o.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}y.handledProps=["as","children","className","content"],y.propTypes={},y.defaultProps={as:"li"},y.create=(0,p.u5)(y,(function(e){return{content:e}}));var N=y;function G(e){var t=e.children,r=e.className,s=e.items,a=(0,c.Z)("list",r),i=(0,l.Z)(G,e),p=(0,u.Z)(G,e);return o.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?(0,g.Z)(s,N.create):t)}G.handledProps=["as","children","className","items"],G.propTypes={},G.defaultProps={as:"ul"},G.create=(0,p.u5)(G,(function(e){return{items:e}}));var w=G,E=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).handleDismiss=function(e){var r=t.props.onDismiss;r&&r(e,t.props)},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,r=e.attached,s=e.children,f=e.className,Z=e.color,g=e.compact,y=e.content,N=e.error,G=e.floating,E=e.header,k=e.hidden,x=e.icon,A=e.info,P=e.list,_=e.negative,b=e.onDismiss,D=e.positive,K=e.size,S=e.success,j=e.visible,C=e.warning,T=(0,c.Z)("ui",Z,K,(0,i.lG)(g,"compact"),(0,i.lG)(N,"error"),(0,i.lG)(G,"floating"),(0,i.lG)(k,"hidden"),(0,i.lG)(x,"icon"),(0,i.lG)(A,"info"),(0,i.lG)(_,"negative"),(0,i.lG)(D,"positive"),(0,i.lG)(S,"success"),(0,i.lG)(j,"visible"),(0,i.lG)(C,"warning"),(0,i.sU)(r,"attached"),"message",f),M=b&&o.createElement(h.Z,{name:"close",onClick:this.handleDismiss}),R=(0,l.Z)(t,this.props),O=(0,u.Z)(t,this.props);return d.kK(s)?o.createElement(O,(0,n.Z)({},R,{className:T}),M,h.Z.create(x,{autoGenerateKey:!1}),(!(0,a.Z)(E)||!(0,a.Z)(y)||!(0,a.Z)(P))&&o.createElement(m,null,v.create(E,{autoGenerateKey:!1}),w.create(P,{autoGenerateKey:!1}),(0,p.BU)(y,{autoGenerateKey:!1}))):o.createElement(O,(0,n.Z)({},R,{className:T}),M,s)},t}(o.Component);E.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"],E.propTypes={},E.Content=m,E.Header=v,E.List=w,E.Item=N}},function(e){e.O(0,[774,543,756,218,670,888,179],(function(){return t=54695,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
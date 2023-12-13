(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{69999:function(e,t,r){"use strict";r.r(t);var n=r(85893),s=r(809),a=r.n(s),o=r(92447),c=r(74047),i=r(52700),l=r(4706),u=r(8127),d=r(44102),p=r(20775),h=r(26265),f=r(67294),m=r(35766),Z=r(39445),v=r(60416),g=r(5573),y=r(68788),N=r(48237),k=r(66670),G=r(38108),w=r(3542);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var s=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,d.Z)(this,r)}}var x=function(e){(0,u.Z)(r,e);var t=E(r);function r(){var e;(0,c.Z)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),(0,h.Z)((0,l.Z)(e),"state",{doctorAddr:"",loading:"",errorMessage:""}),(0,h.Z)((0,l.Z)(e),"onSubmit",function(){var t=(0,o.Z)(a().mark((function t(r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),e.setState({loading:!0,errorMessage:""}),t.prev=2,t.next=5,w.Z.eth.getAccounts();case 5:return n=t.sent,t.next=8,G.Z.methods.RevokePermission(e.state.doctorAddr).send({from:n[0]});case 8:alert("Permission Revoked Successfully!"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),e.setState({errorMessage:t.t0.message});case 14:e.setState({loading:!1,doctorAddr:""});case 15:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()),e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this;return(0,n.jsx)(k.Z,{children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(Z.Z,{as:"h2",content:"Revoke Access",subheader:"Revoke permission for doctor or patient to view records"}),(0,n.jsx)(v.Z,{fluid:!0,placeholder:"Doctor's Ethereum Address",value:this.state.doctorAddr,onChange:function(t){return e.setState({doctorAddr:t.target.value})}}),(0,n.jsx)("br",{}),(0,n.jsxs)(g.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage,children:[(0,n.jsx)(y.Z,{error:!0,header:"Oops!",content:this.state.errorMessage}),(0,n.jsx)(N.Z,{primary:!0,loading:this.state.loading,children:"Revoke"})]})]})})}}]),r}(f.Component);t.default=x},31381:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/revoke-doctor",function(){return r(69999)}])},68788:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(22122),s=r(93552),a=r(55288),o=r(86010),c=r(67294),i=r(92063),l=r(28935),u=r(12519),d=r(92248),p=r(25071),h=r(65382);function f(e){var t=e.children,r=e.className,s=e.content,a=(0,o.Z)("content",r),i=(0,l.Z)(f,e),p=(0,u.Z)(f,e);return c.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}f.handledProps=["as","children","className","content"],f.propTypes={};var m=f;function Z(e){var t=e.children,r=e.className,s=e.content,a=(0,o.Z)("header",r),i=(0,l.Z)(Z,e),p=(0,u.Z)(Z,e);return c.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,p.u5)(Z,(function(e){return{content:e}}));var v=Z,g=r(36744);function y(e){var t=e.children,r=e.className,s=e.content,a=(0,o.Z)("content",r),i=(0,l.Z)(y,e),p=(0,u.Z)(y,e);return c.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?s:t)}y.handledProps=["as","children","className","content"],y.propTypes={},y.defaultProps={as:"li"},y.create=(0,p.u5)(y,(function(e){return{content:e}}));var N=y;function k(e){var t=e.children,r=e.className,s=e.items,a=(0,o.Z)("list",r),i=(0,l.Z)(k,e),p=(0,u.Z)(k,e);return c.createElement(p,(0,n.Z)({},i,{className:a}),d.kK(t)?(0,g.Z)(s,N.create):t)}k.handledProps=["as","children","className","items"],k.propTypes={},k.defaultProps={as:"ul"},k.create=(0,p.u5)(k,(function(e){return{items:e}}));var G=k,w=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).handleDismiss=function(e){var r=t.props.onDismiss;r&&r(e,t.props)},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,r=e.attached,s=e.children,f=e.className,Z=e.color,g=e.compact,y=e.content,N=e.error,k=e.floating,w=e.header,E=e.hidden,x=e.icon,P=e.info,_=e.list,b=e.negative,A=e.onDismiss,R=e.positive,D=e.size,K=e.success,S=e.visible,j=e.warning,C=(0,o.Z)("ui",Z,D,(0,i.lG)(g,"compact"),(0,i.lG)(N,"error"),(0,i.lG)(k,"floating"),(0,i.lG)(E,"hidden"),(0,i.lG)(x,"icon"),(0,i.lG)(P,"info"),(0,i.lG)(b,"negative"),(0,i.lG)(R,"positive"),(0,i.lG)(K,"success"),(0,i.lG)(S,"visible"),(0,i.lG)(j,"warning"),(0,i.sU)(r,"attached"),"message",f),T=A&&c.createElement(h.Z,{name:"close",onClick:this.handleDismiss}),M=(0,l.Z)(t,this.props),O=(0,u.Z)(t,this.props);return d.kK(s)?c.createElement(O,(0,n.Z)({},M,{className:C}),T,h.Z.create(x,{autoGenerateKey:!1}),(!(0,a.Z)(w)||!(0,a.Z)(y)||!(0,a.Z)(_))&&c.createElement(m,null,v.create(w,{autoGenerateKey:!1}),G.create(_,{autoGenerateKey:!1}),(0,p.BU)(y,{autoGenerateKey:!1}))):c.createElement(O,(0,n.Z)({},M,{className:C}),T,s)},t}(c.Component);w.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"],w.propTypes={},w.Content=m,w.Header=v,w.List=G,w.Item=N}},function(e){e.O(0,[774,543,756,218,670,888,179],(function(){return t=31381,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
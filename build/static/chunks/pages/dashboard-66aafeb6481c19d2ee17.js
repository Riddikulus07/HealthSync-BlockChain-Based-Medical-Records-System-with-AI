(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(809),s=n.n(r),c=n(92447),i=n(85893),o=n(74047),a=n(52700),l=n(4706),h=n(8127),d=n(44102),u=n(20775),j=n(26265),p=n(67294),x=n(73626),b=n(49282),m=n(58311),f=n(35766),O=n(45108),Z=n(29009),g=n(46888),y=n(3023),C=n(75358),N=n(14195),D=n(65657),P=n(23872),v=n(86108),A=n(98687),k=n(56880),w=n(82931),M=n(46208),R=(n(27904),n(66670)),G=n(38108),z=n(3542);function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var s=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,d.Z)(this,n)}}var _=[],I=[],E=[],F=["January","February","March","April","May","June","July","August","September","October","November","December"],K=function(e){var t=Math.PI/180,n=e.cx,r=e.cy,s=e.midAngle,c=e.innerRadius,o=e.outerRadius,a=e.startAngle,l=e.endAngle,h=e.fill,d=e.payload,u=e.percent,j=e.value,p=Math.sin(-t*s),x=Math.cos(-t*s),b=n+(o+10)*x,m=r+(o+10)*p,f=n+(o+30)*x,Z=r+(o+30)*p,g=f+22*(x>=0?1:-1),y=Z,C=x>=0?"start":"end";return(0,i.jsxs)("g",{children:[(0,i.jsx)("text",{x:n,y:r,dy:8,textAnchor:"middle",fill:h,children:d.Name}),(0,i.jsx)(O.L,{cx:n,cy:r,innerRadius:c,outerRadius:o,startAngle:a,endAngle:l,fill:h}),(0,i.jsx)(O.L,{cx:n,cy:r,startAngle:a,endAngle:l,innerRadius:o+6,outerRadius:o+10,fill:h}),(0,i.jsx)("path",{d:"M".concat(b,",").concat(m,"L").concat(f,",").concat(Z,"L").concat(g,",").concat(y),stroke:h,fill:"none"}),(0,i.jsx)("circle",{cx:g,cy:y,r:2,fill:h,stroke:"none"}),(0,i.jsx)("text",{x:g+12*(x>=0?1:-1),y:y,textAnchor:C,fill:"#333",children:"Appointments: ".concat(j)}),(0,i.jsx)("text",{x:g+12*(x>=0?1:-1),y:y,dy:18,textAnchor:C,fill:"#999",children:"(Percentage: ".concat((100*u).toFixed(2),"%)")})]})},S=function(e){(0,h.Z)(n,e);var t=J(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),(0,j.Z)((0,l.Z)(e),"state",{activeIndex:0}),(0,j.Z)((0,l.Z)(e),"onPieEnter",(function(t,n){e.setState({activeIndex:n})})),e}return(0,a.Z)(n,[{key:"render",value:function(){return(0,i.jsx)(R.Z,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Z.Group,{centered:!0,itemsPerRow:"2",children:[(0,i.jsxs)(x.Z,{color:this.props.patGrowthColor,children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/512/858/858736.png"}),(0,i.jsx)(x.Z.Header,{children:"Month-over-Month Patient Growth"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",color:this.props.patGrowthColor,children:(0,i.jsxs)(m.Z.Value,{children:[this.props.patientMonthOverMonthChange,"%"]})})})]}),(0,i.jsxs)(x.Z,{color:this.props.apptGrowthColor,children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/512/858/858736.png"}),(0,i.jsx)(x.Z.Header,{children:"Month-over-Month Appointment Growth"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",color:this.props.apptGrowthColor,children:(0,i.jsxs)(m.Z.Value,{children:[this.props.appointmentMonthOverMonthChange,"%"]})})})]})]}),(0,i.jsxs)(x.Z.Group,{centered:!0,itemsPerRow:"4",children:[(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/128/1512/1512910.png"}),(0,i.jsx)(x.Z.Header,{children:"Number of Patient Records"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",children:(0,i.jsx)(m.Z.Value,{children:this.props.patientCount})})})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/128/3481/3481061.png"}),(0,i.jsx)(x.Z.Header,{children:"Number of Doctors"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",children:(0,i.jsx)(m.Z.Value,{children:this.props.doctorCount})})})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/128/2693/2693507.png"}),(0,i.jsx)(x.Z.Header,{children:"Number of Appointments"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",children:(0,i.jsx)(m.Z.Value,{children:this.props.appointmentCount})})})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsxs)(x.Z.Content,{children:[(0,i.jsx)(b.Z,{floated:"right",size:"mini",src:"https://cdn-icons-png.flaticon.com/128/1642/1642097.png"}),(0,i.jsx)(x.Z.Header,{children:"Number of Permissions Granted"})]}),(0,i.jsx)(x.Z.Content,{extra:!0,children:(0,i.jsx)(m.Z,{size:"small",children:(0,i.jsx)(m.Z.Value,{children:this.props.permissionGrantedCount})})})]})]}),(0,i.jsxs)(f.Z,{padded:!0,children:[(0,i.jsx)("h3",{style:{textAlign:"center"},children:"Number of Patients vs Doctors in 2023"}),(0,i.jsx)(Z.h,{width:"100%",aspect:3,children:(0,i.jsxs)(g.T,{width:500,height:300,data:_,margin:{top:10,right:30,left:20,bottom:5},children:[(0,i.jsxs)("defs",{children:[(0,i.jsxs)("linearGradient",{id:"colorPatients",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,i.jsx)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),(0,i.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),(0,i.jsxs)("linearGradient",{id:"colorDoctors",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,i.jsx)("stop",{offset:"5%",stopColor:"#89cff0",stopOpacity:.8}),(0,i.jsx)("stop",{offset:"95%",stopColor:"#89cff0",stopOpacity:0})]})]}),(0,i.jsx)(y.K,{dataKey:"Name"}),(0,i.jsx)(C.B,{}),(0,i.jsx)(N.q,{strokeDasharray:"3 3"}),(0,i.jsx)(D.u,{}),(0,i.jsx)(P.D,{}),(0,i.jsx)(v.u,{type:"monotone",dataKey:"Doctors",stroke:"#89cff0",fillOpacity:1,fill:"url(#colorDoctors)"}),(0,i.jsx)(v.u,{type:"monotone",dataKey:"Patients",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorPatients)"})]})})]}),(0,i.jsxs)(f.Z,{padded:!0,children:[(0,i.jsx)("h3",{style:{textAlign:"center"},children:"Number of Appointments in 2023"}),(0,i.jsx)(Z.h,{width:"100%",aspect:3,children:(0,i.jsxs)(A.w,{width:500,height:300,data:E,margin:{top:10,right:30,left:20,bottom:5},children:[(0,i.jsx)(N.q,{strokeDasharray:"3 3"}),(0,i.jsx)(y.K,{dataKey:"Name"}),(0,i.jsx)(C.B,{}),(0,i.jsx)(D.u,{}),(0,i.jsx)(P.D,{}),(0,i.jsx)(k.x,{type:"monotone",dataKey:"Count",stroke:"#8884d8",activeDot:{r:8}})]})})]}),(0,i.jsxs)(f.Z,{padded:!0,children:[(0,i.jsx)("h3",{style:{textAlign:"center"},children:"Number of Appointments per Patient"}),(0,i.jsx)(Z.h,{width:"100%",aspect:2.15,children:(0,i.jsx)(w.u,{width:400,height:400,children:(0,i.jsx)(M.b,{activeIndex:this.state.activeIndex,activeShape:K,data:I,cx:"50%",cy:"50%",innerRadius:180,outerRadius:200,fill:"#8884d8",dataKey:"Count",onMouseEnter:this.onPieEnter})})})]})]})})}}],[{key:"getInitialProps",value:function(){var e=(0,c.Z)(s().mark((function e(){var t,n,r,c,i,o,a,l,h,d,u,j,p,x,b,m,f,O,Z,g,y,C,N,D,P,v,A,k,w;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.Z.eth.getAccounts();case 2:return t=e.sent,e.next=5,G.Z.methods.getPatients().call();case 5:return n=e.sent,e.next=8,G.Z.methods.getDoctors().call();case 8:return r=e.sent,e.next=11,G.Z.methods.getAppointments().call();case 11:return c=e.sent,e.next=14,G.Z.methods.getPatientCount().call();case 14:return i=e.sent,e.next=17,G.Z.methods.getDoctorCount().call();case 17:return o=e.sent,e.next=20,G.Z.methods.getAppointmentCount().call();case 20:return a=e.sent,e.next=23,G.Z.methods.getPermissionGrantedCount().call();case 23:l=e.sent,h={January:0,February:0,March:0,April:0,May:0,June:0,July:0,August:0,September:0,October:0,November:0,December:0},d={January:0,February:0,March:0,April:0,May:0,June:0,July:0,August:0,September:0,October:0,November:0,December:0},u={January:0,February:0,March:0,April:0,May:0,June:0,July:0,August:0,September:0,October:0,November:0,December:0},j=0;case 28:if(!(j<n.length)){e.next=38;break}return p=n[j],e.next=32,G.Z.methods.searchRecordDate(p).call({from:t[0]});case 32:x=e.sent,b=F[new Date(1e3*x).getMonth()],h[b]=(h[b]||0)+1;case 35:j++,e.next=28;break;case 38:m=0;case 39:if(!(m<r.length)){e.next=49;break}return p=r[m],e.next=43,G.Z.methods.searchDoctorDate(p).call({from:t[0]});case 43:x=e.sent,b=F[new Date(1e3*x).getMonth()],d[b]=(d[b]||0)+1;case 46:m++,e.next=39;break;case 49:f=0;case 50:if(!(f<c.length)){e.next=60;break}return p=c[f],e.next=54,G.Z.methods.searchAppointmentDate(p).call({from:t[0]});case 54:x=e.sent,b=F[new Date(1e3*x).getMonth()],u[b]=(u[b]||0)+1;case 57:f++,e.next=50;break;case 60:O=0;case 61:if(!(O<n.length)){e.next=71;break}return p=n[O],e.next=65,G.Z.methods.getAppointmentPerPatient(p).call({from:t[0]});case 65:Z=e.sent,0==p&&null==p&&(I[O]={0:0}),I[O]={Name:p,Count:parseInt(Z)};case 68:O++,e.next=61;break;case 71:g=new Date,y=String(g.getMonth()),v=0;case 74:if(!(v<12)){e.next=82;break}if(F[y]!=Object.entries(h)[v][0]){e.next=79;break}return C=parseInt(Object.entries(h)[v][1])-parseInt(Object.entries(h)[--v][1]),D=(100*C).toFixed(2),e.abrupt("break",82);case 79:v++,e.next=74;break;case 82:A=0;case 83:if(!(A<12)){e.next=91;break}if(F[y]!=Object.entries(u)[A][0]){e.next=88;break}return N=parseInt(Object.entries(u)[A][1])-parseInt(Object.entries(u)[--A][1]),P=(100*N).toFixed(2),e.abrupt("break",91);case 88:A++,e.next=83;break;case 91:return k=D>0?"green":"red",w=P>0?"green":"red",_=[{Name:Object.entries(h)[0][0],Patients:Object.entries(h)[0][1],Doctors:Object.entries(d)[0][1]},{Name:Object.entries(h)[1][0],Patients:Object.entries(h)[1][1],Doctors:Object.entries(d)[1][1]},{Name:Object.entries(h)[2][0],Patients:Object.entries(h)[2][1],Doctors:Object.entries(d)[2][1]},{Name:Object.entries(h)[3][0],Patients:Object.entries(h)[3][1],Doctors:Object.entries(d)[3][1]},{Name:Object.entries(h)[4][0],Patients:Object.entries(h)[4][1],Doctors:Object.entries(d)[4][1]},{Name:Object.entries(h)[5][0],Patients:Object.entries(h)[5][1],Doctors:Object.entries(d)[5][1]},{Name:Object.entries(h)[6][0],Patients:Object.entries(h)[6][1],Doctors:Object.entries(d)[6][1]},{Name:Object.entries(h)[7][0],Patients:Object.entries(h)[7][1],Doctors:Object.entries(d)[7][1]},{Name:Object.entries(h)[8][0],Patients:Object.entries(h)[8][1],Doctors:Object.entries(d)[8][1]},{Name:Object.entries(h)[9][0],Patients:Object.entries(h)[9][1],Doctors:Object.entries(d)[9][1]},{Name:Object.entries(h)[10][0],Patients:Object.entries(h)[10][1],Doctors:Object.entries(d)[10][1]},{Name:Object.entries(h)[11][0],Patients:Object.entries(h)[11][1],Doctors:Object.entries(d)[11][1]}],E=[{Name:Object.entries(u)[0][0],Count:Object.entries(u)[0][1]},{Name:Object.entries(u)[1][0],Count:Object.entries(u)[1][1]},{Name:Object.entries(u)[2][0],Count:Object.entries(u)[2][1]},{Name:Object.entries(u)[3][0],Count:Object.entries(u)[3][1]},{Name:Object.entries(u)[4][0],Count:Object.entries(u)[4][1]},{Name:Object.entries(u)[5][0],Count:Object.entries(u)[5][1]},{Name:Object.entries(u)[6][0],Count:Object.entries(u)[6][1]},{Name:Object.entries(u)[7][0],Count:Object.entries(u)[7][1]},{Name:Object.entries(u)[8][0],Count:Object.entries(u)[8][1]},{Name:Object.entries(u)[9][0],Count:Object.entries(u)[9][1]},{Name:Object.entries(u)[10][0],Count:Object.entries(u)[10][1]},{Name:Object.entries(u)[11][0],Count:Object.entries(u)[11][1]}],e.abrupt("return",{patientCount:i,doctorCount:o,appointmentCount:a,permissionGrantedCount:l,data:_,pieData:I,patientMonthOverMonthChange:D,appointmentMonthOverMonthChange:P,patGrowthColor:k,apptGrowthColor:w});case 96:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(p.PureComponent)},49704:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(6902)}])}},function(e){e.O(0,[774,543,756,600,670,888,179],(function(){return t=49704,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{66670:function(t,e,n){"use strict";n.d(e,{Z:function(){return M}});var a=n(85893),s=n(67294),i=n(35766),r=n(65382),o=n(39445),p=n(95712),u=n(9008),c=n(809),l=n.n(c),y=n(92447),m=n(74047),d=n(52700),f=n(4706),g=n(8127),h=n(44102),b=n(20775),_=n(26265),x=n(90284),j=n(80129),v=(n(38108),n(3542)),w=n(27904);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=(0,b.Z)(t);if(e){var s=(0,b.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,h.Z)(this,n)}}var Z=function(t){(0,g.Z)(n,t);var e=k(n);function n(){var t;(0,m.Z)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s)),(0,_.Z)((0,f.Z)(t),"onClickedPatient",function(){var t=(0,y.Z)(l().mark((function t(e){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,v.Z.eth.getAccounts();case 3:n=t.sent,w.Router.pushRoute("/record/".concat(n[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(0,_.Z)((0,f.Z)(t),"onClickedDoctor",function(){var t=(0,y.Z)(l().mark((function t(e){var n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,v.Z.eth.getAccounts();case 3:n=t.sent,w.Router.pushRoute("/doctor/".concat(n[0]));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t}return(0,d.Z)(n,[{key:"render",value:function(){return(0,a.jsxs)(x.Z,{size:"large",inverted:!0,children:[(0,a.jsx)(w.Link,{route:"/",children:(0,a.jsx)("a",{className:"item",children:"Home"})}),(0,a.jsxs)(x.Z.Menu,{position:"right",children:[(0,a.jsx)(w.Link,{route:"/dashboard",children:(0,a.jsx)("a",{className:"item",children:"Dashboard"})}),(0,a.jsx)(w.Link,{route:"/list",children:(0,a.jsx)("a",{className:"item",children:"Records List"})}),(0,a.jsx)(j.Z,{item:!0,text:"Doctor",children:(0,a.jsxs)(j.Z.Menu,{children:[(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/",children:(0,a.jsx)("a",{style:{color:"black"},onClick:this.onClickedDoctor,children:"View Profile"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/edit-doctor",children:(0,a.jsx)("a",{style:{color:"black"},children:"Edit Profile"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/make-appointment",children:(0,a.jsx)("a",{style:{color:"black"},children:"Make Appointment"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/edit-appointment",children:(0,a.jsx)("a",{style:{color:"black"},children:"Update Appointment"})})})]})}),(0,a.jsx)(j.Z,{item:!0,text:"Patient",children:(0,a.jsxs)(j.Z.Menu,{children:[(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/",children:(0,a.jsx)("a",{style:{color:"black"},onClick:this.onClickedPatient,children:"View Profile"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/edit-patient",children:(0,a.jsx)("a",{style:{color:"black"},children:"Edit Profile"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/approve-doctor",children:(0,a.jsx)("a",{style:{color:"black"},children:"Allow Access"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/revoke-doctor",children:(0,a.jsx)("a",{style:{color:"black"},children:"Revoke Access"})})})]})}),(0,a.jsx)(j.Z,{item:!0,text:"Register",children:(0,a.jsxs)(j.Z.Menu,{children:[(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/register-patient",children:(0,a.jsx)("a",{style:{color:"black"},children:"Patient"})})}),(0,a.jsx)(j.Z.Item,{children:(0,a.jsx)(w.Link,{route:"/register-doctor",children:(0,a.jsx)("a",{style:{color:"black"},children:"Doctor"})})})]})})]})]})}}]),n}(s.Component),M=function(t){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"})}),(0,a.jsxs)(i.Z,{inverted:!0,textAlign:"center",style:{minHeight:340},children:[(0,a.jsx)(Z,{}),(0,a.jsx)(r.Z,{size:"huge",name:"hospital"}),(0,a.jsx)(o.Z,{as:"h2",color:"blue",style:{fontSize:"3em",fontWeight:"normal"},content:"HealthSync"}),(0,a.jsx)(o.Z,{as:"h3",style:{fontSize:"1.5em",fontWeight:"normal"},content:"Ensure that your records are safe and sound"})]}),(0,a.jsx)(p.Z,{children:t.children})]})}},38108:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var a=n(3542),s=JSON.parse('{"w3":"[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"RevokePermission\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"doctorList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPatients\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_addr\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_date\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_time\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_diagnosis\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_prescription\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_status\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setAppointment\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPermissionGrantedCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_addr\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_date\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_time\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_diagnosis\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_prescription\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_status\\",\\"type\\":\\"string\\"}],\\"name\\":\\"updateAppointment\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getAppointmentCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchPatientMedical\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_height\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_weight\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_houseaddr\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_bloodgroup\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_allergies\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_medication\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyName\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyContact\\",\\"type\\":\\"string\\"}],\\"name\\":\\"editDetails\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchPatientDemographic\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"givePermission\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchAppointmentDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchDoctorDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"doctorCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDoctorCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_qualification\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_major\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setDoctor\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchAppointment\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getAppointments\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_height\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_weight\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_houseaddr\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_bloodgroup\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_allergies\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_medication\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyName\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyContact\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setDetails\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"patientCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_qualification\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_major\\",\\"type\\":\\"string\\"}],\\"name\\":\\"editDoctor\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDoctors\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"patientList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchRecordDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"permissionGrantedCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPatientCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchDoctor\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"appointmentList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"getAppointmentPerPatient\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"appointmentCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}'),i=new a.Z.eth.Contract(JSON.parse(s.w3),"0x68F47589d870639E6C3B5Deb43AF4e14cb3cDa89")},3542:function(t,e,n){"use strict";n(809),n(92447);var a,s=n(37918),i=n.n(s);if("undefined"!==window.web3)a=new(i())(window.web3.currentProvider);else{var r=new(i().providers.HttpProvider)("https://sepolia.infura.io/v3/a38b018f44464862b0529640109fe5bf");a=new(i())(r)}e.Z=a},27904:function(t,e,n){var a=n(37018)();a.add("/record/:address","/details").add("/doctor/:address","/details-doctor"),t.exports=a}}]);
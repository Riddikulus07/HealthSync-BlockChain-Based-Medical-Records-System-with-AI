exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 670:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./ethereum/record.js + 1 modules
var record = __webpack_require__(108);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(542);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(904);
;// CONCATENATED MODULE: ./components/MenuBar.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //Header that is used in all pages

class MenuBar extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClickedPatient", async event => {
      event.preventDefault();
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      routes.Router.pushRoute(`/record/${accounts[0]}`);
    });

    _defineProperty(this, "onClickedDoctor", async event => {
      event.preventDefault();
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      routes.Router.pushRoute(`/doctor/${accounts[0]}`);
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
      size: "large",
      inverted: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
        route: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "item",
          children: "Home"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
        position: "right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
          route: "/dashboard",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "item",
            children: "Dashboard"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
          route: "/list",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "item",
            children: "Records List"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown, {
          item: true,
          text: "Doctor",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Dropdown.Menu, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  onClick: this.onClickedDoctor,
                  children: "View Profile"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/edit-doctor",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Edit Profile"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/make-appointment",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Make Appointment"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/edit-appointment",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Update Appointment"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown, {
          item: true,
          text: "Patient",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Dropdown.Menu, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  onClick: this.onClickedPatient,
                  children: "View Profile"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/edit-patient",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Edit Profile"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/approve-doctor",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Allow Access"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/revoke-doctor",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Revoke Access"
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown, {
          item: true,
          text: "Register",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Dropdown.Menu, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/register-patient",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Patient"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Dropdown.Item, {
              children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
                route: "/register-doctor",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    color: 'black'
                  },
                  children: "Doctor"
                })
              })
            })]
          })
        })]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/Layout.js






 //Layout properly the Header at the top of every page and then the content come afterwards

/* harmony default export */ var Layout = (props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 340
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(MenuBar, {}), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
        size: "huge",
        name: "hospital"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
        as: "h2",
        color: "blue",
        style: {
          fontSize: '3em',
          fontWeight: 'normal'
        },
        content: "HealthSync"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
        as: "h3",
        style: {
          fontSize: '1.5em',
          fontWeight: 'normal'
        },
        content: "Ensure that your records are safe and sound"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
      children: props.children
    })]
  });
});

/***/ }),

/***/ 108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ record; }
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(542);
;// CONCATENATED MODULE: ./ethereum/build/Record.json
var Record_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"RevokePermission\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"doctorList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPatients\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_addr\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_date\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_time\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_diagnosis\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_prescription\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_status\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setAppointment\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPermissionGrantedCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_addr\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_date\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_time\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_diagnosis\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_prescription\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_status\\",\\"type\\":\\"string\\"}],\\"name\\":\\"updateAppointment\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getAppointmentCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchPatientMedical\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_height\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_weight\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_houseaddr\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_bloodgroup\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_allergies\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_medication\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyName\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyContact\\",\\"type\\":\\"string\\"}],\\"name\\":\\"editDetails\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchPatientDemographic\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"givePermission\\",\\"outputs\\":[{\\"name\\":\\"success\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchAppointmentDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchDoctorDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"doctorCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDoctorCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_qualification\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_major\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setDoctor\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchAppointment\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getAppointments\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_height\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_weight\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_houseaddr\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_bloodgroup\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_allergies\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_medication\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyName\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_emergencyContact\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setDetails\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"patientCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_ic\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_phone\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_gender\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_dob\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_qualification\\",\\"type\\":\\"string\\"},{\\"name\\":\\"_major\\",\\"type\\":\\"string\\"}],\\"name\\":\\"editDoctor\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDoctors\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"patientList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchRecordDate\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"permissionGrantedCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getPatientCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"searchDoctor\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"},{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"appointmentList\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"getAppointmentPerPatient\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"appointmentCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/record.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(Record_namespaceObject.w3), '0x68F47589d870639E6C3B5Deb43AF4e14cb3cDa89' //Deployed Contract Code //Everytime contract code is changed and compiled, need to update this
);
/* harmony default export */ var record = (instance); //Whenever there is a change in Solidity code, use this few commands
//Step 1: cd ethereum
//Step 2: node compile.js
//Step 3: node deploy.js
//Step 4: Paste the contract deployed address above

/***/ }),

/***/ 542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  //We are on the server OR the user is not running metamask
  const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://sepolia.infura.io/v3/a38b018f44464862b0529640109fe5bf');
  web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}

/* harmony default export */ __webpack_exports__["Z"] = (web3);

/***/ }),

/***/ 904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(247)(); //Route to specified page


routes.add('/record/:address', '/details').add('/doctor/:address', '/details-doctor');
module.exports = routes;

/***/ })

};
;
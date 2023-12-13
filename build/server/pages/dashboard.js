(function() {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Dashboard; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
;// CONCATENATED MODULE: external "recharts"
var external_recharts_namespaceObject = require("recharts");;
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(904);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(670);
// EXTERNAL MODULE: ./ethereum/record.js + 1 modules
var record = __webpack_require__(108);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(542);
;// CONCATENATED MODULE: ./pages/dashboard.js




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var data = [];
var pieData = [];
var lineData = [];
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("text", {
      x: cx,
      y: cy,
      dy: 8,
      textAnchor: "middle",
      fill: fill,
      children: payload.Name
    }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Sector, {
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle,
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Sector, {
      cx: cx,
      cy: cy,
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: outerRadius + 6,
      outerRadius: outerRadius + 10,
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
      stroke: fill,
      fill: "none"
    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
      cx: ex,
      cy: ey,
      r: 2,
      fill: fill,
      stroke: "none"
    }), /*#__PURE__*/jsx_runtime_.jsx("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      textAnchor: textAnchor,
      fill: "#333",
      children: `Appointments: ${value}`
    }), /*#__PURE__*/jsx_runtime_.jsx("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      dy: 18,
      textAnchor: textAnchor,
      fill: "#999",
      children: `(Percentage: ${(percent * 100).toFixed(2)}%)`
    })]
  });
};

class Dashboard extends external_react_.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeIndex: 0
    });

    _defineProperty(this, "onPieEnter", (_, index) => {
      this.setState({
        activeIndex: index
      });
    });
  }

  static async getInitialProps() {
    const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
    const allPatients = await record/* default.methods.getPatients */.Z.methods.getPatients().call();
    const allDoctors = await record/* default.methods.getDoctors */.Z.methods.getDoctors().call();
    const allAppointments = await record/* default.methods.getAppointments */.Z.methods.getAppointments().call();
    var patientCount = await record/* default.methods.getPatientCount */.Z.methods.getPatientCount().call();
    var doctorCount = await record/* default.methods.getDoctorCount */.Z.methods.getDoctorCount().call();
    var appointmentCount = await record/* default.methods.getAppointmentCount */.Z.methods.getAppointmentCount().call();
    var permissionGrantedCount = await record/* default.methods.getPermissionGrantedCount */.Z.methods.getPermissionGrantedCount().call();
    var dict = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0
    };
    var docdict = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0
    };
    var apptdict = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0
    }; //Populate patient object with data retrieved from the blockchain to be used in area chart

    for (let i = 0; i < allPatients.length; i++) {
      var addr = allPatients[i];
      var unixDate = await record/* default.methods.searchRecordDate */.Z.methods.searchRecordDate(addr).call({
        from: accounts[0]
      });
      var month = monthName[new Date(unixDate * 1000).getMonth()];
      dict[month] = (dict[month] || 0) + 1;
    } //Populate doctor object with data retrieved from the blockchain to be used in area chart


    for (let i = 0; i < allDoctors.length; i++) {
      var addr = allDoctors[i];
      var unixDate = await record/* default.methods.searchDoctorDate */.Z.methods.searchDoctorDate(addr).call({
        from: accounts[0]
      });
      var month = monthName[new Date(unixDate * 1000).getMonth()];
      docdict[month] = (docdict[month] || 0) + 1;
    } //Populate appointment object with data retrieved from the blockchain to be used in line chart


    for (let i = 0; i < allAppointments.length; i++) {
      var addr = allAppointments[i];
      var unixDate = await record/* default.methods.searchAppointmentDate */.Z.methods.searchAppointmentDate(addr).call({
        from: accounts[0]
      });
      var month = monthName[new Date(unixDate * 1000).getMonth()];
      apptdict[month] = (apptdict[month] || 0) + 1;
    } //Populate appointment array with data retrieved from the blockchain to be used in piechart


    for (let i = 0; i < allPatients.length; i++) {
      var addr = allPatients[i];
      var count = await record/* default.methods.getAppointmentPerPatient */.Z.methods.getAppointmentPerPatient(addr).call({
        from: accounts[0]
      });

      if (addr == 0 && addr == null) {
        pieData[i] = {
          '0': 0
        };
      } //Dynamically render piechart data


      pieData[i] = {
        'Name': addr,
        'Count': parseInt(count)
      };
    }

    var today = new Date();
    var mm = String(today.getMonth());
    var resultPat, resultAppt, patientMonthOverMonthChange, appointmentMonthOverMonthChange; //Retrieve and display month-over-month patient growth

    for (let i = 0; i < 12; i++) {
      if (monthName[mm] == Object.entries(dict)[i][0]) {
        resultPat = parseInt(Object.entries(dict)[i][1]) - parseInt(Object.entries(dict)[--i][1]);
        patientMonthOverMonthChange = (resultPat * 100).toFixed(2);
        break;
      }
    } //Retrieve and display month-over-month appointment growth


    for (let i = 0; i < 12; i++) {
      if (monthName[mm] == Object.entries(apptdict)[i][0]) {
        resultAppt = parseInt(Object.entries(apptdict)[i][1]) - parseInt(Object.entries(apptdict)[--i][1]);
        appointmentMonthOverMonthChange = (resultAppt * 100).toFixed(2);
        break;
      }
    }

    var patGrowthColor = patientMonthOverMonthChange > 0 ? 'green' : 'red';
    var apptGrowthColor = appointmentMonthOverMonthChange > 0 ? 'green' : 'red';
    data = [{
      Name: Object.entries(dict)[0][0],
      Patients: Object.entries(dict)[0][1],
      Doctors: Object.entries(docdict)[0][1]
    }, {
      Name: Object.entries(dict)[1][0],
      Patients: Object.entries(dict)[1][1],
      Doctors: Object.entries(docdict)[1][1]
    }, {
      Name: Object.entries(dict)[2][0],
      Patients: Object.entries(dict)[2][1],
      Doctors: Object.entries(docdict)[2][1]
    }, {
      Name: Object.entries(dict)[3][0],
      Patients: Object.entries(dict)[3][1],
      Doctors: Object.entries(docdict)[3][1]
    }, {
      Name: Object.entries(dict)[4][0],
      Patients: Object.entries(dict)[4][1],
      Doctors: Object.entries(docdict)[4][1]
    }, {
      Name: Object.entries(dict)[5][0],
      Patients: Object.entries(dict)[5][1],
      Doctors: Object.entries(docdict)[5][1]
    }, {
      Name: Object.entries(dict)[6][0],
      Patients: Object.entries(dict)[6][1],
      Doctors: Object.entries(docdict)[6][1]
    }, {
      Name: Object.entries(dict)[7][0],
      Patients: Object.entries(dict)[7][1],
      Doctors: Object.entries(docdict)[7][1]
    }, {
      Name: Object.entries(dict)[8][0],
      Patients: Object.entries(dict)[8][1],
      Doctors: Object.entries(docdict)[8][1]
    }, {
      Name: Object.entries(dict)[9][0],
      Patients: Object.entries(dict)[9][1],
      Doctors: Object.entries(docdict)[9][1]
    }, {
      Name: Object.entries(dict)[10][0],
      Patients: Object.entries(dict)[10][1],
      Doctors: Object.entries(docdict)[10][1]
    }, {
      Name: Object.entries(dict)[11][0],
      Patients: Object.entries(dict)[11][1],
      Doctors: Object.entries(docdict)[11][1]
    }];
    lineData = [{
      Name: Object.entries(apptdict)[0][0],
      Count: Object.entries(apptdict)[0][1]
    }, {
      Name: Object.entries(apptdict)[1][0],
      Count: Object.entries(apptdict)[1][1]
    }, {
      Name: Object.entries(apptdict)[2][0],
      Count: Object.entries(apptdict)[2][1]
    }, {
      Name: Object.entries(apptdict)[3][0],
      Count: Object.entries(apptdict)[3][1]
    }, {
      Name: Object.entries(apptdict)[4][0],
      Count: Object.entries(apptdict)[4][1]
    }, {
      Name: Object.entries(apptdict)[5][0],
      Count: Object.entries(apptdict)[5][1]
    }, {
      Name: Object.entries(apptdict)[6][0],
      Count: Object.entries(apptdict)[6][1]
    }, {
      Name: Object.entries(apptdict)[7][0],
      Count: Object.entries(apptdict)[7][1]
    }, {
      Name: Object.entries(apptdict)[8][0],
      Count: Object.entries(apptdict)[8][1]
    }, {
      Name: Object.entries(apptdict)[9][0],
      Count: Object.entries(apptdict)[9][1]
    }, {
      Name: Object.entries(apptdict)[10][0],
      Count: Object.entries(apptdict)[10][1]
    }, {
      Name: Object.entries(apptdict)[11][0],
      Count: Object.entries(apptdict)[11][1]
    }];
    return {
      patientCount,
      doctorCount,
      appointmentCount,
      permissionGrantedCount,
      data,
      pieData,
      patientMonthOverMonthChange,
      appointmentMonthOverMonthChange,
      patGrowthColor,
      apptGrowthColor
    };
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Group, {
          centered: true,
          itemsPerRow: "2",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            color: this.props.patGrowthColor,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/512/858/858736.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Month-over-Month Patient Growth"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                color: this.props.patGrowthColor,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Statistic.Value, {
                  children: [this.props.patientMonthOverMonthChange, "%"]
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            color: this.props.apptGrowthColor,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/512/858/858736.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Month-over-Month Appointment Growth"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                color: this.props.apptGrowthColor,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Statistic.Value, {
                  children: [this.props.appointmentMonthOverMonthChange, "%"]
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Group, {
          centered: true,
          itemsPerRow: "4",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/128/1512/1512910.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Number of Patient Records"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic.Value, {
                  children: this.props.patientCount
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/128/3481/3481061.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Number of Doctors"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic.Value, {
                  children: this.props.doctorCount
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/128/2693/2693507.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Number of Appointments"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic.Value, {
                  children: this.props.appointmentCount
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Card.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                floated: "right",
                size: "mini",
                src: "https://cdn-icons-png.flaticon.com/128/1642/1642097.png"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Header, {
                children: "Number of Permissions Granted"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Content, {
              extra: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic, {
                size: "small",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Statistic.Value, {
                  children: this.props.permissionGrantedCount
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
          padded: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: {
              textAlign: "center"
            },
            children: "Number of Patients vs Doctors in 2023"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
            width: "100%",
            aspect: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_namespaceObject.AreaChart, {
              width: 500,
              height: 300,
              data: data,
              margin: {
                top: 10,
                right: 30,
                left: 20,
                bottom: 5
              },
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                  id: "colorPatients",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                    offset: "5%",
                    stopColor: "#8884d8",
                    stopOpacity: 0.8
                  }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                    offset: "95%",
                    stopColor: "#8884d8",
                    stopOpacity: 0
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
                  id: "colorDoctors",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
                    offset: "5%",
                    stopColor: "#89cff0",
                    stopOpacity: 0.8
                  }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
                    offset: "95%",
                    stopColor: "#89cff0",
                    stopOpacity: 0
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.XAxis, {
                dataKey: "Name"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.YAxis, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.CartesianGrid, {
                strokeDasharray: "3 3"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Tooltip, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Legend, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Area, {
                type: "monotone",
                dataKey: "Doctors",
                stroke: "#89cff0",
                fillOpacity: 1,
                fill: "url(#colorDoctors)"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Area, {
                type: "monotone",
                dataKey: "Patients",
                stroke: "#8884d8",
                fillOpacity: 1,
                fill: "url(#colorPatients)"
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
          padded: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: {
              textAlign: "center"
            },
            children: "Number of Appointments in 2023"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
            width: "100%",
            aspect: 3,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recharts_namespaceObject.LineChart, {
              width: 500,
              height: 300,
              data: lineData,
              margin: {
                top: 10,
                right: 30,
                left: 20,
                bottom: 5
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.CartesianGrid, {
                strokeDasharray: "3 3"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.XAxis, {
                dataKey: "Name"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.YAxis, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Tooltip, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Legend, {}), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Line, {
                type: "monotone",
                dataKey: "Count",
                stroke: "#8884d8",
                activeDot: {
                  r: 8
                }
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
          padded: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            style: {
              textAlign: "center"
            },
            children: "Number of Appointments per Patient"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
            width: "100%",
            aspect: 2.15,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.PieChart, {
              width: 400,
              height: 400,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_recharts_namespaceObject.Pie, {
                activeIndex: this.state.activeIndex,
                activeShape: renderActiveShape,
                data: pieData,
                cx: "50%",
                cy: "50%",
                innerRadius: 180,
                outerRadius: 200,
                fill: "#8884d8",
                dataKey: "Count",
                onMouseEnter: this.onPieEnter
              })
            })
          })]
        })]
      })
    });
  }

}

/***/ }),

/***/ 247:
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [670], function() { return __webpack_exec__(293); });
module.exports = __webpack_exports__;

})();
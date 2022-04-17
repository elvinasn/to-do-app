/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: white;\n  display: grid;\n  grid-template: 80px 1fr / 300px 1fr;\n  width: 100vw;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* HEADER STYLING */\n\nheader {\n  background-color: #e85d75;\n  grid-column: span 2;\n  padding: 40px;\n  color: white;\n}\n.logo {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo > h1 {\n  font-size: 30px;\n}\n.logo > img {\n  height: 40px;\n  width: 40px;\n}\n\n/* NAV STYLING */\n\nnav {\n  background-color: hsla(0, 0%, 95%);\n  border-right: 1px solid black;\n}\nnav div,\nnav button {\n  width: 100%;\n}\nnav button:not(.modal__button) {\n  min-height: 60px;\n  padding: 20px;\n  font-size: 20px;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\nnav button:hover:not(.modal__button),\nnav button:active:not(.modal__button),\n.active {\n  background-color: #fff;\n}\nnav img {\n  height: 30px;\n}\n.nav__section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav__projects {\n  display: flex;\n}\n.nav__dropdown {\n  display: none;\n  animation: fadeIn 0.5s ease-in both;\n}\n.nav__dropdown > button {\n  padding-left: 50px !important;\n  font-size: 18px;\n}\n.nav__dropdown > img {\n  height: 18px;\n}\n.nav__dropdown p {\n  margin-top: 4px;\n}\n.show {\n  display: block;\n}\n.arrow-up {\n  transition: 0.5s ease;\n}\n.rotate {\n  transform: rotate(180deg);\n}\n.active {\n  background-color: #fff !important;\n  font-weight: 700;\n}\n.add__project-container {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.modal {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 10px 10px 40px 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  z-index: 1;\n}\n\n.show-modal {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal__header {\n  font-size: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\nlabel {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\nmain {\n  background-color: white;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main__header-div {\n  display: flex;\n  gap: 20px;\n}\n.main__header-div img {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 5px;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.main__header {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  min-width: max-content;\n}\n.main__description {\n  opacity: 0.7;\n  width: 70%;\n  text-align: center;\n}\n.task__headers {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-between;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  font-weight: 700;\n}\n.project__task {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: hsl(0, 0%, 95%);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  transition: 0.3s ease;\n  margin: 5px;\n}\n.project__task:hover {\n  box-shadow: 0px 0px 5px hsl(0, 0%, 70%);\n  transform: scale(1.005);\n}\n.project__task > p:first-child {\n  margin-right: auto;\n}\n.task__left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 22px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #8fd694;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8fd694;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.task__options {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.tooltip {\n  height: 24px;\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  width: 130px;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -65px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  z-index: 1;\n}\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.task__options img {\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.task__done {\n  opacity: 0.7;\n  position: relative;\n}\n.task__done:after {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n  background: black;\n  content: \"\";\n  width: 100%;\n  display: block;\n}\n\n.modal__close {\n  float: right;\n  background-color: inherit;\n  border: none;\n  height: min-content;\n\n  cursor: pointer;\n}\n.modal__close img {\n  transition: 0.4s ease;\n}\n.modal__close:hover img {\n  transform: scale(1.1);\n}\n.modal span {\n  font-weight: 700;\n}\n\n.left-border-green {\n  border-left: 10px solid #8fd694;\n}\n.left-border-yellow {\n  border-left: 10px solid #ffd670;\n}\n.left-border-red {\n  border-left: 10px solid #c23a5c;\n}\n.left-border-darkred {\n  border-left: 10px solid #b40c36;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE;IACE,UAAU;IACV,kCAAkC;EACpC;EACA;IACE,UAAU;IACV,+BAA+B;EACjC;AACF;AACA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,mCAAmC;EACnC,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,gBAAgB;;AAEhB;EACE,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;;EAEE,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,iCAAiC;EACjC,gBAAgB;AAClB;AACA;EACE,oCAAoC;EACpC,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,oBAAoB;EACpB,6BAA6B;AAC/B;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,kBAAkB;EAClB,wCAAwC;EACxC,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;EAChC,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;EACjC,6BAA6B;EAC7B,gCAAgC;EAChC,eAAe;EACf,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,uCAAuC;EACvC,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;;EAElB,oDAAoD;EACpD,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,kBAAkB,EAAE,8DAA8D;EAClF,UAAU;AACZ;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS,EAAE,iCAAiC;EAC5C,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,uDAAuD;AACzD;AACA,oEAAoE;AACpE;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,QAAQ;EACR,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;;EAEnB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: white;\n  display: grid;\n  grid-template: 80px 1fr / 300px 1fr;\n  width: 100vw;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* HEADER STYLING */\n\nheader {\n  background-color: #e85d75;\n  grid-column: span 2;\n  padding: 40px;\n  color: white;\n}\n.logo {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo > h1 {\n  font-size: 30px;\n}\n.logo > img {\n  height: 40px;\n  width: 40px;\n}\n\n/* NAV STYLING */\n\nnav {\n  background-color: hsla(0, 0%, 95%);\n  border-right: 1px solid black;\n}\nnav div,\nnav button {\n  width: 100%;\n}\nnav button:not(.modal__button) {\n  min-height: 60px;\n  padding: 20px;\n  font-size: 20px;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\nnav button:hover:not(.modal__button),\nnav button:active:not(.modal__button),\n.active {\n  background-color: #fff;\n}\nnav img {\n  height: 30px;\n}\n.nav__section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav__projects {\n  display: flex;\n}\n.nav__dropdown {\n  display: none;\n  animation: fadeIn 0.5s ease-in both;\n}\n.nav__dropdown > button {\n  padding-left: 50px !important;\n  font-size: 18px;\n}\n.nav__dropdown > img {\n  height: 18px;\n}\n.nav__dropdown p {\n  margin-top: 4px;\n}\n.show {\n  display: block;\n}\n.arrow-up {\n  transition: 0.5s ease;\n}\n.rotate {\n  transform: rotate(180deg);\n}\n.active {\n  background-color: #fff !important;\n  font-weight: 700;\n}\n.add__project-container {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.modal {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 10px 10px 40px 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  z-index: 1;\n}\n\n.show-modal {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal__header {\n  font-size: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\nlabel {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\nmain {\n  background-color: white;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main__header-div {\n  display: flex;\n  gap: 20px;\n}\n.main__header-div img {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 5px;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.main__header {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  min-width: max-content;\n}\n.main__description {\n  opacity: 0.7;\n  width: 70%;\n  text-align: center;\n}\n.task__headers {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-between;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  font-weight: 700;\n}\n.project__task {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: hsl(0, 0%, 95%);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  transition: 0.3s ease;\n  margin: 5px;\n}\n.project__task:hover {\n  box-shadow: 0px 0px 5px hsl(0, 0%, 70%);\n  transform: scale(1.005);\n}\n.project__task > p:first-child {\n  margin-right: auto;\n}\n.task__left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 22px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #8fd694;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8fd694;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.task__options {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.tooltip {\n  height: 24px;\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  width: 130px;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -65px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  z-index: 1;\n}\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.task__options img {\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.task__done {\n  opacity: 0.7;\n  position: relative;\n}\n.task__done:after {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n  background: black;\n  content: \"\";\n  width: 100%;\n  display: block;\n}\n\n.modal__close {\n  float: right;\n  background-color: inherit;\n  border: none;\n  height: min-content;\n\n  cursor: pointer;\n}\n.modal__close img {\n  transition: 0.4s ease;\n}\n.modal__close:hover img {\n  transform: scale(1.1);\n}\n.modal span {\n  font-weight: 700;\n}\n\n.left-border-green {\n  border-left: 10px solid #8fd694;\n}\n.left-border-yellow {\n  border-left: 10px solid #ffd670;\n}\n.left-border-red {\n  border-left: 10px solid #c23a5c;\n}\n.left-border-darkred {\n  border-left: 10px solid #b40c36;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domController": () => (/* binding */ domController)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _images_singleproj_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/singleproj.svg */ "./src/images/singleproj.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectFunctions */ "./src/projectFunctions.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");








const domController = (() => {
  const dropDownContainer = document.querySelector(".nav__dropdown");
  let projectsList;
  if (localStorage.getItem("projects")) {
    projectsList = JSON.parse(localStorage.getItem("projects"));
  } else {
    projectsList = [(0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Project 1", "This is example of a project.")];
  }
  localStorage.setItem("projects", JSON.stringify(projectsList));
  const open = document.getElementById("add_project");
  const modal_container = document.getElementById("modal-container");
  let main = document.querySelector("main");

  /// TODO: Update this method
  const updateProjects = () => {
    dropDownContainer.innerHTML = "";
    let i = 0;
    projectsList.forEach((project) => {
      const button = document.createElement("button");
      button.dataset.index = i;
      button.classList.add("nav__section");
      button.classList.add("project");
      const icon = new Image();
      icon.src = _images_singleproj_svg__WEBPACK_IMPORTED_MODULE_1__;
      button.appendChild(icon);
      const name = document.createElement("p");
      name.textContent = project.name;
      button.appendChild(name);
      dropDownContainer.appendChild(button);
      i++;
    });
    dropDownContainer.appendChild(open);
  };
  const toggleDropDown = () => {
    document.querySelector(".arrow-up").classList.toggle("rotate");
    dropDownContainer.classList.toggle("show");
  };

  document.querySelector("nav").addEventListener("click", (e) => {
    let button = e.target.closest("button");
    putActive(e, button);
    if (isProject(button)) {
      document.body.removeChild(main);
      main = createProjectMain(projectsList[button.dataset.index]);
      document.body.appendChild(main);
    }
  });

  const putActive = (e, button) => {
    if (e.target.nodeName !== "NAV") {
      const buttons = Array.from(document.querySelectorAll("nav button"));
      buttons.forEach((current) => {
        if (current !== button) {
          current.classList.remove("active");
        } else if (
          !current.classList.contains("nav__projects") &&
          current.id !== "add_project"
        ) {
          current.classList.add("active");
          return;
        }
      });
    }
  };

  const isProject = (button) => {
    const projectButtons = document.querySelectorAll(".project");
    return Array.from(projectButtons).includes(button);
  };

  const addProjectModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Add a project";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const divName = document.createElement("div");

    const labelForName = document.createElement("label");
    labelForName.setAttribute("for", "name");
    labelForName.textContent = "Project name: ";
    divName.appendChild(labelForName);

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "name";
    inputName.required = true;
    inputName.maxLength = 20;
    divName.appendChild(inputName);
    form.appendChild(divName);

    const divDescription = document.createElement("div");

    const labelForTextbox = document.createElement("label");
    labelForTextbox.setAttribute("for", "description");
    labelForTextbox.textContent = "Short project description: ";
    divDescription.appendChild(labelForTextbox);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.required = true;
    inputDescription.rows = 5;
    inputDescription.cols = 40;
    divDescription.appendChild(inputDescription);

    form.appendChild(divDescription);

    const add = document.createElement("button");
    add.textContent = "Create project";
    add.classList.add("modal__button");
    form.appendChild(add);
    form.addEventListener("submit", () => {
      projectsList.push((0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(inputName.value, inputDescription.value));
      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);
    return modal;
  };

  const editModal = () => {
    const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Edit project";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const divName = document.createElement("div");

    const labelForName = document.createElement("label");
    labelForName.setAttribute("for", "name");
    labelForName.textContent = "Project name: ";
    divName.appendChild(labelForName);

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "name";
    inputName.required = true;
    inputName.maxLength = 20;
    inputName.value = project.name;
    divName.append(inputName);
    form.appendChild(divName);

    const divDescription = document.createElement("div");

    const labelForTextbox = document.createElement("label");
    labelForTextbox.setAttribute("for", "description");
    labelForTextbox.textContent = "Short project description: ";
    divDescription.appendChild(labelForTextbox);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.required = true;
    inputDescription.rows = 5;
    inputDescription.cols = 40;
    inputDescription.value = project.description;
    divDescription.appendChild(inputDescription);

    form.appendChild(divDescription);

    const edit = document.createElement("button");
    edit.textContent = "Edit project";
    edit.classList.add("modal__button");
    form.appendChild(edit);
    form.addEventListener("submit", () => {
      const edittedProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(inputName.value, inputDescription.value);
      projectsList[projectsList.indexOf(project)].name = inputName.value;
      projectsList[projectsList.indexOf(project)].description =
        inputDescription.value;

      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);
    return modal;
  };

  const deleteModal = () => {
    const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Do you really want to delete this project?";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const remove = document.createElement("button");
    remove.textContent = "Yes";
    remove.classList.add("modal__button");
    form.appendChild(remove);
    form.addEventListener("submit", () => {
      projectsList.splice(projectsList.indexOf(project), 1);
      localStorage.setItem("projects", JSON.stringify(projectsList));
    });
    modal.appendChild(form);

    return modal;
  };
  const deleteTaskModal = (index) => {
    const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Do you really want to delete this task?";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");

    const remove = document.createElement("button");
    remove.textContent = "Yes";
    remove.classList.add("modal__button");
    form.appendChild(remove);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      projectsList[projectsList.indexOf(project)].listOfTasks.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projectsList));
      modal_container.classList.remove("show-modal");
      modal_container.innerHTML = "";
      refreshMain(project);
    });
    modal.appendChild(form);

    return modal;
  };

  const previewTaskModal = (index) => {
    const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = project.listOfTasks[index].task;
    header.classList.add("modal__header");
    modal.appendChild(header);

    const details = document.createElement("p");
    details.innerHTML = `<span>Details: </span>${project.listOfTasks[index].description}`;
    modal.appendChild(details);

    const dueDate = document.createElement("p");
    dueDate.innerHTML = `<span>Due Date: </span>${project.listOfTasks[index].dueDate}`;
    modal.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.innerHTML = `<span>Priority: </span>${project.listOfTasks[index].priority}`;
    modal.appendChild(priority);
    return modal;
  };

  const createProjectMain = (project) => {
    const main = document.createElement("main");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("main__header-div");

    const projectHeader = document.createElement("p");
    projectHeader.classList.add("main__header");
    projectHeader.textContent = project.name;
    headerDiv.appendChild(projectHeader);

    const editToolTip = createToolTip("EDIT PROJECT");

    const edit = new Image();
    edit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
    edit.addEventListener("click", () => {
      modal_container.appendChild(editModal());
      modal_container.classList.add("show-modal");
    });
    editToolTip.appendChild(edit);
    headerDiv.appendChild(editToolTip);

    const removeToolTip = createToolTip("REMOVE PROJECT");

    const remove = new Image();
    remove.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
    remove.addEventListener("click", () => {
      modal_container.appendChild(deleteModal());
      modal_container.classList.add("show-modal");
    });
    removeToolTip.appendChild(remove);
    headerDiv.appendChild(removeToolTip);
    main.appendChild(headerDiv);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("main__description");
    projectDescription.textContent = project.description;
    main.appendChild(projectDescription);

    const addTask = document.createElement("button");
    addTask.textContent = "Add task";

    addTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(addTaskModal(true));
    });
    main.appendChild(addTask);

    if (project.listOfTasks.length > 0) {
      main.appendChild(createTaskHeaders());
      let i = 0;
      project.listOfTasks.forEach((task) => {
        main.appendChild(createTaskDiv(task, i));
        i++;
      });
    } else {
      const noTasks = document.createElement("p");
      noTasks.classList.add("main__header");
      noTasks.textContent = "No tasks yet!";
      main.appendChild(noTasks);
    }

    return main;
  };

  const createTaskDiv = (task, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("project__task");
    wrapper.dataset.index = index;

    const taskPara = document.createElement("p");
    taskPara.classList.add("task__left");
    taskPara.textContent = task.task;

    const toggleDone = document.createElement("label");
    toggleDone.classList.add("switch");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = task.isDone;
    toggleDone.appendChild(checkBox);
    checkBox.addEventListener("change", () => {
      const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
        projectsList,
        document.querySelector(".main__header").textContent
      );
      projectsList[projectsList.indexOf(project)].listOfTasks[index].isDone =
        checkBox.checked;
      localStorage.setItem("projects", JSON.stringify(projectsList));

      setTimeout(() => {
        refreshMain(project);
      }, 500);
    });

    const span = document.createElement("span");
    span.classList.add("slider");
    span.classList.add("round");
    toggleDone.appendChild(span);
    taskPara.appendChild(toggleDone);

    wrapper.appendChild(taskPara);

    switch (task.priority) {
      case "low":
        wrapper.classList.add("left-border-green");
        break;
      case "medium":
        wrapper.classList.add("left-border-yellow");
        break;
      case "high":
        wrapper.classList.add("left-border-red");
        break;
    }
    const rightSide = document.createElement("div");
    rightSide.classList.add("task__options");

    const editToolTip = createToolTip("EDIT TASK");
    const editTask = new Image();
    editTask.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
    editTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(
        addTaskModal(false, wrapper.dataset.index, task)
      );
    });
    editToolTip.appendChild(editTask);

    rightSide.appendChild(editToolTip);

    const removeToolTip = createToolTip("REMOVE TASK");
    const removeTask = new Image();
    removeTask.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
    removeTask.addEventListener("click", () => {
      modal_container.classList.add("show-modal");
      modal_container.appendChild(deleteTaskModal(wrapper.dataset.index));
    });
    removeToolTip.appendChild(removeTask);
    rightSide.appendChild(removeToolTip);

    const dueDate = document.createElement("p");
    dueDate.textContent = task.dueDate;
    rightSide.appendChild(dueDate);
    wrapper.appendChild(rightSide);
    if (task.isDone) {
      wrapper.classList.add("task__done");
    }
    wrapper.addEventListener("click", (e) => {
      if (e.target.nodeName == "P" || e.target.nodeName == "DIV") {
        modal_container.classList.add("show-modal");
        modal_container.appendChild(previewTaskModal(wrapper.dataset.index));
      }
    });
    return wrapper;
  };

  const createToolTip = (text) => {
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltiptext");
    tooltipText.textContent = text;
    toolTip.appendChild(tooltipText);
    return toolTip;
  };

  const createTaskHeaders = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("task__headers");

    const taskPara = document.createElement("p");
    taskPara.textContent = "TASK";
    wrapper.appendChild(taskPara);

    const dueDate = document.createElement("p");
    dueDate.textContent = "DUE DATE";
    wrapper.appendChild(dueDate);
    return wrapper;
  };

  const addTaskModal = (toAdd, index = 0, task = (0,_task__WEBPACK_IMPORTED_MODULE_5__.Task)("", "", "low", "")) => {
    const project = _projectFunctions__WEBPACK_IMPORTED_MODULE_4__.projectFunctions.getProjectByName(
      projectsList,
      document.querySelector(".main__header").textContent
    );

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.append(modalClose());

    const header = document.createElement("p");
    header.textContent = "Add task";
    header.classList.add("modal__header");
    modal.appendChild(header);

    const form = document.createElement("form");
    const divTask = document.createElement("div");

    const labelForTask = document.createElement("label");
    labelForTask.setAttribute("for", "task");
    labelForTask.textContent = "Task Title: ";
    divTask.appendChild(labelForTask);

    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.id = "task";
    inputTask.value = task.task;
    inputTask.required = true;
    inputTask.maxLength = 20;
    divTask.append(inputTask);
    form.appendChild(divTask);

    const divDescription = document.createElement("div");

    const labelForTaskDesc = document.createElement("label");
    labelForTaskDesc.setAttribute("for", "description");
    labelForTaskDesc.textContent = "Task Description: ";
    divDescription.appendChild(labelForTaskDesc);

    const inputDescription = document.createElement("textarea");
    inputDescription.id = "description";
    inputDescription.required = true;
    inputDescription.rows = 3;
    inputDescription.cols = 20;
    inputDescription.value = task.description;
    divDescription.appendChild(inputDescription);
    form.appendChild(divDescription);

    const divPriority = document.createElement("div");

    const labelForPriority = document.createElement("label");
    labelForPriority.setAttribute("for", "priority");
    labelForPriority.textContent = "Task Priority: ";
    divPriority.appendChild(labelForPriority);

    const inputPriority = document.createElement("select");
    inputPriority.id = "priority";

    const option1 = document.createElement("option");
    option1.value = "low";
    if (task.priority == option1.value) {
      option1.selected = true;
    }
    option1.textContent = "Low";
    inputPriority.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "medium";
    option2.textContent = "Medium";
    if (task.priority == option2.value) {
      option2.selected = true;
    }
    inputPriority.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "high";
    if (task.priority == option3.value) {
      option3.selected = true;
    }
    option3.textContent = "High";
    inputPriority.appendChild(option3);

    divPriority.appendChild(inputPriority);

    form.appendChild(divPriority);

    const divDueDate = document.createElement("div");

    const labelForDueDate = document.createElement("label");
    labelForDueDate.setAttribute("for", "dueDate");
    labelForDueDate.textContent = "Due Date: ";
    divDueDate.appendChild(labelForDueDate);

    const inputDueDate = document.createElement("input");
    // TODO: Extract this function
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    inputDueDate.type = "date";
    inputDueDate.id = "dueDate";
    inputDueDate.value = task.dueDate;
    inputDueDate.min = today;
    inputDueDate.required = true;
    divDueDate.appendChild(inputDueDate);
    form.appendChild(divDueDate);

    if (toAdd) {
      const add = document.createElement("button");
      add.textContent = "ADD";
      add.classList.add("modal__button");
      form.appendChild(add);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_5__.Task)(
          inputTask.value,
          inputDescription.value,
          inputPriority.value,
          inputDueDate.value
        );
        projectsList[projectsList.indexOf(project)].listOfTasks.push(newTask);
        localStorage.setItem("projects", JSON.stringify(projectsList));
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
        refreshMain(project);
      });
    } else {
      const edit = document.createElement("button");
      edit.textContent = "EDIT";
      edit.classList.add("modal__button");
      form.appendChild(edit);
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_5__.Task)(
          inputTask.value,
          inputDescription.value,
          inputPriority.value,
          inputDueDate.value,
          task.isDone
        );
        projectsList[projectsList.indexOf(project)].listOfTasks[index] =
          newTask;
        localStorage.setItem("projects", JSON.stringify(projectsList));
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
        refreshMain(project);
      });
    }

    modal.appendChild(form);

    return modal;
  };
  open.addEventListener("click", () => {
    modal_container.appendChild(addProjectModal());
    modal_container.classList.add("show-modal");
  });

  const modalClose = () => {
    const button = document.createElement("button");
    button.classList.add("modal__close");

    const close = new Image();
    close.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_6__;

    button.addEventListener("click", () => {
      modal_container.classList.remove("show-modal");
      modal_container.innerHTML = "";
    });

    button.appendChild(close);
    return button;
  };
  window.onclick = (e) => {
    if (modal_container.classList.contains("show-modal")) {
      if (
        e.target.closest(".modal") === null &&
        e.target.closest("#modal-container") !== null
      ) {
        modal_container.classList.remove("show-modal");
        modal_container.innerHTML = "";
      }
    }
  };
  document.querySelector(".nav__projects").onclick = toggleDropDown;

  const refreshMain = (project) => {
    document.body.removeChild(main);
    main = createProjectMain(projectsList[projectsList.indexOf(project)]);
    document.body.appendChild(main);
  };
  updateProjects();
  return {};
})();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = (name, description) => {
  let listOfTasks = [];
  return { name, description, listOfTasks };
};



/***/ }),

/***/ "./src/projectFunctions.js":
/*!*********************************!*\
  !*** ./src/projectFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFunctions": () => (/* binding */ projectFunctions)
/* harmony export */ });
const projectFunctions = (() => {
  const getProjectByName = (projectsList, name) => {
    let found;
    projectsList.forEach((element) => {
      if (element.name === name) {
        found = element;
        return;
      }
    });
    return found;
  };

  return { getProjectByName };
})();



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const Task = (task, description, priority, dueDate, isDone = false) => {
  return { task, description, priority, dueDate, isDone };
};



/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/close..svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/delete..svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/edit..svg";

/***/ }),

/***/ "./src/images/singleproj.svg":
/*!***********************************!*\
  !*** ./src/images/singleproj.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/singleproj..svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFB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QUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyIC8gMzAwcHggMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEhFQURFUiBTVFlMSU5HICovXFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVkNzU7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5sb2dvID4gaDEge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4ubG9nbyA+IGltZyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLyogTkFWIFNUWUxJTkcgKi9cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgOTUlKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5uYXYgZGl2LFxcbm5hdiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm5hdiBidXR0b246bm90KC5tb2RhbF9fYnV0dG9uKSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm5hdiBidXR0b246aG92ZXI6bm90KC5tb2RhbF9fYnV0dG9uKSxcXG5uYXYgYnV0dG9uOmFjdGl2ZTpub3QoLm1vZGFsX19idXR0b24pLFxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxubmF2IGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5uYXZfX3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5uYXZfX3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gYm90aDtcXG59XFxuLm5hdl9fZHJvcGRvd24gPiBidXR0b24ge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duID4gaW1nIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5hdl9fZHJvcGRvd24gcCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYXJyb3ctdXAge1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmFkZF9fcHJvamVjdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA0MHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ubW9kYWxfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluX19oZWFkZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5tYWluX19oZWFkZXItZGl2IGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi5tYWluX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ubWFpbl9fZGVzY3JpcHRpb24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhc2tfX2hlYWRlcnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdF9fdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG4ucHJvamVjdF9fdGFzazpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBoc2woMCwgMCUsIDcwJSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG59XFxuLnByb2plY3RfX3Rhc2sgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRhc2tfX2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza19fb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvb2x0aXAge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTMwcHg7XFxuICBib3R0b206IDExMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTY1cHg7IC8qIFVzZSBoYWxmIG9mIHRoZSB3aWR0aCAoMTIwLzIgPSA2MCksIHRvIGNlbnRlciB0aGUgdG9vbHRpcCAqL1xcbiAgei1pbmRleDogMTtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7IC8qIEF0IHRoZSBib3R0b20gb2YgdGhlIHRvb2x0aXAgKi9cXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi50YXNrX19vcHRpb25zIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi50YXNrX19kb25lIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRhc2tfX2RvbmU6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbF9fY2xvc2UgaW1nIHtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLm1vZGFsX19jbG9zZTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ubW9kYWwgc3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGVmdC1ib3JkZXItZ3JlZW4ge1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzhmZDY5NDtcXG59XFxuLmxlZnQtYm9yZGVyLXllbGxvdyB7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmZkNjcwO1xcbn1cXG4ubGVmdC1ib3JkZXItcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNjMjNhNWM7XFxufVxcbi5sZWZ0LWJvcmRlci1kYXJrcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNiNDBjMzY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwrQkFBK0I7RUFDakM7QUFDRjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFD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QjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1COztFQUVuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDgwcHggMWZyIC8gMzAwcHggMWZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEhFQURFUiBTVFlMSU5HICovXFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVkNzU7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5sb2dvID4gaDEge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4ubG9nbyA+IGltZyB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLyogTkFWIFNUWUxJTkcgKi9cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgOTUlKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5uYXYgZGl2LFxcbm5hdiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm5hdiBidXR0b246bm90KC5tb2RhbF9fYnV0dG9uKSB7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm5hdiBidXR0b246aG92ZXI6bm90KC5tb2RhbF9fYnV0dG9uKSxcXG5uYXYgYnV0dG9uOmFjdGl2ZTpub3QoLm1vZGFsX19idXR0b24pLFxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxubmF2IGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5uYXZfX3NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5uYXZfX3Byb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gYm90aDtcXG59XFxuLm5hdl9fZHJvcGRvd24gPiBidXR0b24ge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duID4gaW1nIHtcXG4gIGhlaWdodDogMThweDtcXG59XFxuLm5hdl9fZHJvcGRvd24gcCB7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYXJyb3ctdXAge1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmFkZF9fcHJvamVjdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA0MHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ubW9kYWxfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluX19oZWFkZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5tYWluX19oZWFkZXItZGl2IGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi5tYWluX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ubWFpbl9fZGVzY3JpcHRpb24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgd2lkdGg6IDcwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhc2tfX2hlYWRlcnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdF9fdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG4ucHJvamVjdF9fdGFzazpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCBoc2woMCwgMCUsIDcwJSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA1KTtcXG59XFxuLnByb2plY3RfX3Rhc2sgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRhc2tfX2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza19fb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvb2x0aXAge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTMwcHg7XFxuICBib3R0b206IDExMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTY1cHg7IC8qIFVzZSBoYWxmIG9mIHRoZSB3aWR0aCAoMTIwLzIgPSA2MCksIHRvIGNlbnRlciB0aGUgdG9vbHRpcCAqL1xcbiAgei1pbmRleDogMTtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7IC8qIEF0IHRoZSBib3R0b20gb2YgdGhlIHRvb2x0aXAgKi9cXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi50YXNrX19vcHRpb25zIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi50YXNrX19kb25lIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRhc2tfX2RvbmU6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbF9fY2xvc2UgaW1nIHtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLm1vZGFsX19jbG9zZTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ubW9kYWwgc3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubGVmdC1ib3JkZXItZ3JlZW4ge1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzhmZDY5NDtcXG59XFxuLmxlZnQtYm9yZGVyLXllbGxvdyB7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmZkNjcwO1xcbn1cXG4ubGVmdC1ib3JkZXItcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNjMjNhNWM7XFxufVxcbi5sZWZ0LWJvcmRlci1kYXJrcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNiNDBjMzY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBwcm9qZWN0SW1nIGZyb20gXCIuL2ltYWdlcy9zaW5nbGVwcm9qLnN2Z1wiO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfSBmcm9tIFwiLi9wcm9qZWN0RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5cbmNvbnN0IGRvbUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkcm9wRG93bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19kcm9wZG93blwiKTtcbiAgbGV0IHByb2plY3RzTGlzdDtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICBwcm9qZWN0c0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RzTGlzdCA9IFtQcm9qZWN0KFwiUHJvamVjdCAxXCIsIFwiVGhpcyBpcyBleGFtcGxlIG9mIGEgcHJvamVjdC5cIildO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9wcm9qZWN0XCIpO1xuICBjb25zdCBtb2RhbF9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAvLy8gVE9ETzogVXBkYXRlIHRoaXMgbWV0aG9kXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RzID0gKCkgPT4ge1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgbGV0IGkgPSAwO1xuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZfX3NlY3Rpb25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBpY29uLnNyYyA9IHByb2plY3RJbWc7XG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgZHJvcERvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlRHJvcERvd24gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy11cFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlXCIpO1xuICAgIGRyb3BEb3duQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICB9O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIik7XG4gICAgcHV0QWN0aXZlKGUsIGJ1dHRvbik7XG4gICAgaWYgKGlzUHJvamVjdChidXR0b24pKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1haW4pO1xuICAgICAgbWFpbiA9IGNyZWF0ZVByb2plY3RNYWluKHByb2plY3RzTGlzdFtidXR0b24uZGF0YXNldC5pbmRleF0pO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHB1dEFjdGl2ZSA9IChlLCBidXR0b24pID0+IHtcbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgIT09IFwiTkFWXCIpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgYnV0dG9uXCIpKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoY3VycmVudCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudCAhPT0gYnV0dG9uKSB7XG4gICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICFjdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9fcHJvamVjdHNcIikgJiZcbiAgICAgICAgICBjdXJyZW50LmlkICE9PSBcImFkZF9wcm9qZWN0XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzUHJvamVjdCA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwcm9qZWN0QnV0dG9ucykuaW5jbHVkZXMoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKCkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgYSBwcm9qZWN0XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9faGVhZGVyXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGxhYmVsRm9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEZvck5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBsYWJlbEZvck5hbWUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZTogXCI7XG4gICAgZGl2TmFtZS5hcHBlbmRDaGlsZChsYWJlbEZvck5hbWUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJuYW1lXCI7XG4gICAgaW5wdXROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dE5hbWUubWF4TGVuZ3RoID0gMjA7XG4gICAgZGl2TmFtZS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2TmFtZSk7XG5cbiAgICBjb25zdCBkaXZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvclRleHRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JUZXh0Ym94LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxhYmVsRm9yVGV4dGJveC50ZXh0Q29udGVudCA9IFwiU2hvcnQgcHJvamVjdCBkZXNjcmlwdGlvbjogXCI7XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobGFiZWxGb3JUZXh0Ym94KTtcblxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnJvd3MgPSA1O1xuICAgIGlucHV0RGVzY3JpcHRpb24uY29scyA9IDQwO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIHByb2plY3RcIjtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19idXR0b25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGQpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0c0xpc3QucHVzaChQcm9qZWN0KGlucHV0TmFtZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgICB9KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG5cbiAgY29uc3QgZWRpdE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldFByb2plY3RCeU5hbWUoXG4gICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKS50ZXh0Q29udGVudFxuICAgICk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKCkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJFZGl0IHByb2plY3RcIjtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19oZWFkZXJcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IGRpdk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbGFiZWxGb3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRm9yTmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIGxhYmVsRm9yTmFtZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBuYW1lOiBcIjtcbiAgICBkaXZOYW1lLmFwcGVuZENoaWxkKGxhYmVsRm9yTmFtZSk7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dE5hbWUuaWQgPSBcIm5hbWVcIjtcbiAgICBpbnB1dE5hbWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0TmFtZS5tYXhMZW5ndGggPSAyMDtcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZGl2TmFtZS5hcHBlbmQoaW5wdXROYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdk5hbWUpO1xuXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbGFiZWxGb3JUZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRm9yVGV4dGJveC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBsYWJlbEZvclRleHRib3gudGV4dENvbnRlbnQgPSBcIlNob3J0IHByb2plY3QgZGVzY3JpcHRpb246IFwiO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRm9yVGV4dGJveCk7XG5cbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5yb3dzID0gNTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmNvbHMgPSA0MDtcbiAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBkaXZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0XCI7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2J1dHRvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0dGVkUHJvamVjdCA9IFByb2plY3QoaW5wdXROYW1lLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgIHByb2plY3RzTGlzdFtwcm9qZWN0c0xpc3QuaW5kZXhPZihwcm9qZWN0KV0ubmFtZSA9IGlucHV0TmFtZS52YWx1ZTtcbiAgICAgIHByb2plY3RzTGlzdFtwcm9qZWN0c0xpc3QuaW5kZXhPZihwcm9qZWN0KV0uZGVzY3JpcHRpb24gPVxuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgIH0pO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfTtcblxuICBjb25zdCBkZWxldGVNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRQcm9qZWN0QnlOYW1lKFxuICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIikudGV4dENvbnRlbnRcbiAgICApO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDbG9zZSgpKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9faGVhZGVyXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fYnV0dG9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShwcm9qZWN0c0xpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgIH0pO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuICBjb25zdCBkZWxldGVUYXNrTW9kYWwgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRQcm9qZWN0QnlOYW1lKFxuICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIikudGV4dENvbnRlbnRcbiAgICApO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ2xvc2UoKSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2hlYWRlclwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2J1dHRvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCldLmxpc3RPZlRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1vZGFsXCIpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICByZWZyZXNoTWFpbihwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfTtcblxuICBjb25zdCBwcmV2aWV3VGFza01vZGFsID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0UHJvamVjdEJ5TmFtZShcbiAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faGVhZGVyXCIpLnRleHRDb250ZW50XG4gICAgKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKCkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5saXN0T2ZUYXNrc1tpbmRleF0udGFzaztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19oZWFkZXJcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXRhaWxzLmlubmVySFRNTCA9IGA8c3Bhbj5EZXRhaWxzOiA8L3NwYW4+JHtwcm9qZWN0Lmxpc3RPZlRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbn1gO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuPkR1ZSBEYXRlOiA8L3NwYW4+JHtwcm9qZWN0Lmxpc3RPZlRhc2tzW2luZGV4XS5kdWVEYXRlfWA7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IGA8c3Bhbj5Qcmlvcml0eTogPC9zcGFuPiR7cHJvamVjdC5saXN0T2ZUYXNrc1tpbmRleF0ucHJpb3JpdHl9YDtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RNYWluID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1haW5fX2hlYWRlci1kaXZcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWFpbl9faGVhZGVyXCIpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgZWRpdFRvb2xUaXAgPSBjcmVhdGVUb29sVGlwKFwiRURJVCBQUk9KRUNUXCIpO1xuXG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXQuc3JjID0gZWRpdEljb247XG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRNb2RhbCgpKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKTtcbiAgICB9KTtcbiAgICBlZGl0VG9vbFRpcC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdFRvb2xUaXApO1xuXG4gICAgY29uc3QgcmVtb3ZlVG9vbFRpcCA9IGNyZWF0ZVRvb2xUaXAoXCJSRU1PVkUgUFJPSkVDVFwiKTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHJlbW92ZS5zcmMgPSBkZWxldGVJY29uO1xuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZU1vZGFsKCkpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vZGFsXCIpO1xuICAgIH0pO1xuICAgIHJlbW92ZVRvb2xUaXAuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlVG9vbFRpcCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluX19kZXNjcmlwdGlvblwiKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctbW9kYWxcIik7XG4gICAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza01vZGFsKHRydWUpKTtcbiAgICB9KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgaWYgKHByb2plY3QubGlzdE9mVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSGVhZGVycygpKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHByb2plY3QubGlzdE9mVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEaXYodGFzaywgaSkpO1xuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbm9UYXNrcy5jbGFzc0xpc3QuYWRkKFwibWFpbl9faGVhZGVyXCIpO1xuICAgICAgbm9UYXNrcy50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgeWV0IVwiO1xuICAgICAgbWFpbi5hcHBlbmRDaGlsZChub1Rhc2tzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrRGl2ID0gKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9fdGFza1wiKTtcbiAgICB3cmFwcGVyLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IHRhc2tQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1BhcmEuY2xhc3NMaXN0LmFkZChcInRhc2tfX2xlZnRcIik7XG4gICAgdGFza1BhcmEudGV4dENvbnRlbnQgPSB0YXNrLnRhc2s7XG5cbiAgICBjb25zdCB0b2dnbGVEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZ2dsZURvbmUuY2xhc3NMaXN0LmFkZChcInN3aXRjaFwiKTtcblxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suaXNEb25lO1xuICAgIHRvZ2dsZURvbmUuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0UHJvamVjdEJ5TmFtZShcbiAgICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKS50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICAgIHByb2plY3RzTGlzdFtwcm9qZWN0c0xpc3QuaW5kZXhPZihwcm9qZWN0KV0ubGlzdE9mVGFza3NbaW5kZXhdLmlzRG9uZSA9XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVmcmVzaE1haW4ocHJvamVjdCk7XG4gICAgICB9LCA1MDApO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJyb3VuZFwiKTtcbiAgICB0b2dnbGVEb25lLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHRhc2tQYXJhLmFwcGVuZENoaWxkKHRvZ2dsZURvbmUpO1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUGFyYSk7XG5cbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGVmdC1ib3JkZXItZ3JlZW5cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0LWJvcmRlci15ZWxsb3dcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGVmdC1ib3JkZXItcmVkXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInRhc2tfX29wdGlvbnNcIik7XG5cbiAgICBjb25zdCBlZGl0VG9vbFRpcCA9IGNyZWF0ZVRvb2xUaXAoXCJFRElUIFRBU0tcIik7XG4gICAgY29uc3QgZWRpdFRhc2sgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0VGFzay5zcmMgPSBlZGl0SWNvbjtcbiAgICBlZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vZGFsXCIpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBhZGRUYXNrTW9kYWwoZmFsc2UsIHdyYXBwZXIuZGF0YXNldC5pbmRleCwgdGFzaylcbiAgICAgICk7XG4gICAgfSk7XG4gICAgZWRpdFRvb2xUaXAuYXBwZW5kQ2hpbGQoZWRpdFRhc2spO1xuXG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGVkaXRUb29sVGlwKTtcblxuICAgIGNvbnN0IHJlbW92ZVRvb2xUaXAgPSBjcmVhdGVUb29sVGlwKFwiUkVNT1ZFIFRBU0tcIik7XG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IG5ldyBJbWFnZSgpO1xuICAgIHJlbW92ZVRhc2suc3JjID0gZGVsZXRlSWNvbjtcbiAgICByZW1vdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctbW9kYWxcIik7XG4gICAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza01vZGFsKHdyYXBwZXIuZGF0YXNldC5pbmRleCkpO1xuICAgIH0pO1xuICAgIHJlbW92ZVRvb2xUaXAuYXBwZW5kQ2hpbGQocmVtb3ZlVGFzayk7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHJlbW92ZVRvb2xUaXApO1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcbiAgICBpZiAodGFzay5pc0RvbmUpIHtcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfX2RvbmVcIik7XG4gICAgfVxuICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT0gXCJQXCIgfHwgZS50YXJnZXQubm9kZU5hbWUgPT0gXCJESVZcIikge1xuICAgICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctbW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2aWV3VGFza01vZGFsKHdyYXBwZXIuZGF0YXNldC5pbmRleCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvb2xUaXAgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHRvb2xUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvb2xUaXAuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sdGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbHRpcFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHRvb2xUaXAuYXBwZW5kQ2hpbGQodG9vbHRpcFRleHQpO1xuICAgIHJldHVybiB0b29sVGlwO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tIZWFkZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfX2hlYWRlcnNcIik7XG5cbiAgICBjb25zdCB0YXNrUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tQYXJhLnRleHRDb250ZW50ID0gXCJUQVNLXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUGFyYSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRFVFIERBVEVcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9ICh0b0FkZCwgaW5kZXggPSAwLCB0YXNrID0gVGFzayhcIlwiLCBcIlwiLCBcImxvd1wiLCBcIlwiKSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldFByb2plY3RCeU5hbWUoXG4gICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ2xvc2UoKSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9faGVhZGVyXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZGl2VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tcIik7XG4gICAgbGFiZWxGb3JUYXNrLnRleHRDb250ZW50ID0gXCJUYXNrIFRpdGxlOiBcIjtcbiAgICBkaXZUYXNrLmFwcGVuZENoaWxkKGxhYmVsRm9yVGFzayk7XG5cbiAgICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUYXNrLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dFRhc2suaWQgPSBcInRhc2tcIjtcbiAgICBpbnB1dFRhc2sudmFsdWUgPSB0YXNrLnRhc2s7XG4gICAgaW5wdXRUYXNrLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRhc2subWF4TGVuZ3RoID0gMjA7XG4gICAgZGl2VGFzay5hcHBlbmQoaW5wdXRUYXNrKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdlRhc2spO1xuXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbGFiZWxGb3JUYXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEZvclRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxhYmVsRm9yVGFza0Rlc2MudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb246IFwiO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRm9yVGFza0Rlc2MpO1xuXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucm93cyA9IDM7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5jb2xzID0gMjA7XG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRm9yUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgbGFiZWxGb3JQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eTogXCI7XG4gICAgZGl2UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxGb3JQcmlvcml0eSk7XG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBpbnB1dFByaW9yaXR5LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwibG93XCI7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gb3B0aW9uMS52YWx1ZSkge1xuICAgICAgb3B0aW9uMS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24yLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBvcHRpb24yLnZhbHVlKSB7XG4gICAgICBvcHRpb24yLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbjMudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBvcHRpb24zLnZhbHVlKSB7XG4gICAgICBvcHRpb24zLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvckR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JEdWVEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG4gICAgbGFiZWxGb3JEdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChsYWJlbEZvckR1ZURhdGUpO1xuXG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vIFRPRE86IEV4dHJhY3QgdGhpcyBmdW5jdGlvblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgZGQgPSBcIjBcIiArIGRkO1xuICAgIH1cblxuICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICBtbSA9IFwiMFwiICsgbW07XG4gICAgfVxuXG4gICAgdG9kYXkgPSB5eXl5ICsgXCItXCIgKyBtbSArIFwiLVwiICsgZGQ7XG4gICAgaW5wdXREdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBpbnB1dER1ZURhdGUuaWQgPSBcImR1ZURhdGVcIjtcbiAgICBpbnB1dER1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgaW5wdXREdWVEYXRlLm1pbiA9IHRvZGF5O1xuICAgIGlucHV0RHVlRGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fYnV0dG9uXCIpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgaW5wdXRUYXNrLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBpbnB1dER1ZURhdGUudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXS5saXN0T2ZUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByZWZyZXNoTWFpbihwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGVkaXQudGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19idXR0b25cIik7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgaW5wdXRUYXNrLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBpbnB1dER1ZURhdGUudmFsdWUsXG4gICAgICAgICAgdGFzay5pc0RvbmVcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXS5saXN0T2ZUYXNrc1tpbmRleF0gPVxuICAgICAgICAgIG5ld1Rhc2s7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgICAgbW9kYWxfY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJlZnJlc2hNYWluKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG4gIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdE1vZGFsKCkpO1xuICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Nsb3NlXCIpO1xuXG4gICAgY29uc3QgY2xvc2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9zZS5zcmMgPSBjbG9zZUljb247XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LW1vZGFsXCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxcIikgPT09IG51bGwgJiZcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIiNtb2RhbC1jb250YWluZXJcIikgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3Byb2plY3RzXCIpLm9uY2xpY2sgPSB0b2dnbGVEcm9wRG93bjtcblxuICBjb25zdCByZWZyZXNoTWFpbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgICBtYWluID0gY3JlYXRlUHJvamVjdE1haW4ocHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgfTtcbiAgdXBkYXRlUHJvamVjdHMoKTtcbiAgcmV0dXJuIHt9O1xufSkoKTtcbmV4cG9ydCB7IGRvbUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IFByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IGxpc3RPZlRhc2tzID0gW107XG4gIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBsaXN0T2ZUYXNrcyB9O1xufTtcbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImNvbnN0IHByb2plY3RGdW5jdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRQcm9qZWN0QnlOYW1lID0gKHByb2plY3RzTGlzdCwgbmFtZSkgPT4ge1xuICAgIGxldCBmb3VuZDtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZCA9IGVsZW1lbnQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UHJvamVjdEJ5TmFtZSB9O1xufSkoKTtcbmV4cG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfTtcbiIsImNvbnN0IFRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpc0RvbmUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4geyB0YXNrLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlzRG9uZSB9O1xufTtcbmV4cG9ydCB7IFRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGRvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kb21cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
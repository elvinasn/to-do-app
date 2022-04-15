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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: white;\n  display: grid;\n  grid-template: 80px 1fr / 300px 1fr;\n  width: 100vw;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* HEADER STYLING */\n\nheader {\n  background-color: #e85d75;\n  grid-column: span 2;\n  padding: 40px;\n  color: white;\n}\n.logo {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo > h1 {\n  font-size: 30px;\n}\n.logo > img {\n  height: 40px;\n  width: 40px;\n}\n\n/* NAV STYLING */\n\nnav {\n  background-color: hsla(0, 0%, 95%);\n  border-right: 1px solid black;\n}\nnav div,\nnav button {\n  width: 100%;\n}\nnav button:not(.modal__button) {\n  min-height: 60px;\n  padding: 20px;\n  font-size: 20px;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\nnav button:hover:not(.modal__button),\nnav button:active:not(.modal__button),\n.active {\n  background-color: #fff;\n}\nnav img {\n  height: 30px;\n}\n.nav__section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav__projects {\n  display: flex;\n}\n.nav__dropdown {\n  display: none;\n  animation: fadeIn 0.5s ease-in both;\n}\n.nav__dropdown > button {\n  padding-left: 50px !important;\n  font-size: 18px;\n}\n.nav__dropdown > img {\n  height: 18px;\n}\n.nav__dropdown p {\n  margin-top: 4px;\n}\n.show {\n  display: block;\n}\n.arrow-up {\n  transition: 0.5s ease;\n}\n.rotate {\n  transform: rotate(180deg);\n}\n.active {\n  background-color: #fff !important;\n  font-weight: 700;\n}\n.add__project-container {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.modal {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 10px 10px 40px 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  z-index: 1;\n}\n\n.show-modal {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal__header {\n  font-size: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\nlabel {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\nmain {\n  background-color: white;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main__header-div {\n  display: flex;\n  gap: 20px;\n}\n.main__header-div img {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 5px;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.main__header {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  min-width: max-content;\n}\n.main__description {\n  opacity: 0.7;\n  width: 70%;\n  text-align: center;\n}\n.task__headers {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-between;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  font-weight: 700;\n}\n.project__task {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: hsl(0, 0%, 95%);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  margin: 5px;\n}\n.project__task > p:first-child {\n  margin-right: auto;\n}\n.task__left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 22px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #8fd694;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8fd694;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.task__options {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.tooltip {\n  height: 24px;\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  width: 130px;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -65px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  z-index: 1;\n}\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.task__options img {\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.task__done {\n  opacity: 0.7;\n  position: relative;\n}\n.task__done:after {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n  background: black;\n  content: \"\";\n  width: 100%;\n  display: block;\n}\n\n.modal__close {\n  float: right;\n  background-color: inherit;\n  border: none;\n  height: min-content;\n\n  cursor: pointer;\n}\n.modal__close img {\n  transition: 0.4s ease;\n}\n.modal__close:hover img {\n  transform: scale(1.1);\n}\n\n.left-border-green {\n  border-left: 10px solid #8fd694;\n}\n.left-border-yellow {\n  border-left: 10px solid #ffd670;\n}\n.left-border-red {\n  border-left: 10px solid #c23a5c;\n}\n.left-border-darkred {\n  border-left: 10px solid #b40c36;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE;IACE,UAAU;IACV,kCAAkC;EACpC;EACA;IACE,UAAU;IACV,+BAA+B;EACjC;AACF;AACA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,mCAAmC;EACnC,YAAY;EACZ,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,gBAAgB;;AAEhB;EACE,kCAAkC;EAClC,6BAA6B;AAC/B;AACA;;EAEE,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mCAAmC;AACrC;AACA;EACE,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,iCAAiC;EACjC,gBAAgB;AAClB;AACA;EACE,oCAAoC;EACpC,eAAe;EACf,UAAU;EACV,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,oBAAoB;EACpB,6BAA6B;AAC/B;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,kBAAkB;EAClB,wCAAwC;EACxC,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,gCAAgC;EAChC,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;EACjC,6BAA6B;EAC7B,gCAAgC;EAChC,aAAa;EACb,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;;EAElB,oDAAoD;EACpD,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,kBAAkB,EAAE,8DAA8D;EAClF,UAAU;AACZ;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS,EAAE,iCAAiC;EAC5C,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,uDAAuD;AACzD;AACA,oEAAoE;AACpE;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,QAAQ;EACR,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;;EAEnB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC;AACA;EACE,+BAA+B;AACjC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: white;\n  display: grid;\n  grid-template: 80px 1fr / 300px 1fr;\n  width: 100vw;\n  min-height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* HEADER STYLING */\n\nheader {\n  background-color: #e85d75;\n  grid-column: span 2;\n  padding: 40px;\n  color: white;\n}\n.logo {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.logo > h1 {\n  font-size: 30px;\n}\n.logo > img {\n  height: 40px;\n  width: 40px;\n}\n\n/* NAV STYLING */\n\nnav {\n  background-color: hsla(0, 0%, 95%);\n  border-right: 1px solid black;\n}\nnav div,\nnav button {\n  width: 100%;\n}\nnav button:not(.modal__button) {\n  min-height: 60px;\n  padding: 20px;\n  font-size: 20px;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\nnav button:hover:not(.modal__button),\nnav button:active:not(.modal__button),\n.active {\n  background-color: #fff;\n}\nnav img {\n  height: 30px;\n}\n.nav__section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav__projects {\n  display: flex;\n}\n.nav__dropdown {\n  display: none;\n  animation: fadeIn 0.5s ease-in both;\n}\n.nav__dropdown > button {\n  padding-left: 50px !important;\n  font-size: 18px;\n}\n.nav__dropdown > img {\n  height: 18px;\n}\n.nav__dropdown p {\n  margin-top: 4px;\n}\n.show {\n  display: block;\n}\n.arrow-up {\n  transition: 0.5s ease;\n}\n.rotate {\n  transform: rotate(180deg);\n}\n.active {\n  background-color: #fff !important;\n  font-weight: 700;\n}\n.add__project-container {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n}\n.modal {\n  background-color: #fff;\n  width: 600px;\n  max-width: 100%;\n  padding: 10px 10px 40px 10px;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  z-index: 1;\n}\n\n.show-modal {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal__header {\n  font-size: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\nlabel {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\nmain {\n  background-color: white;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main__header-div {\n  display: flex;\n  gap: 20px;\n}\n.main__header-div img {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 5px;\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.main__header {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  min-width: max-content;\n}\n.main__description {\n  opacity: 0.7;\n  width: 70%;\n  text-align: center;\n}\n.task__headers {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-between;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  font-weight: 700;\n}\n.project__task {\n  width: 100%;\n  padding: 10px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: hsl(0, 0%, 95%);\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  margin: 5px;\n}\n.project__task > p:first-child {\n  margin-right: auto;\n}\n.task__left {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 22px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #8fd694;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #8fd694;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n.task__options {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.tooltip {\n  height: 24px;\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  width: 130px;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -65px; /* Use half of the width (120/2 = 60), to center the tooltip */\n  z-index: 1;\n}\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  top: 100%; /* At the bottom of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.task__options img {\n  cursor: pointer;\n  transition: 0.4s ease;\n}\n.task__done {\n  opacity: 0.7;\n  position: relative;\n}\n.task__done:after {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n  background: black;\n  content: \"\";\n  width: 100%;\n  display: block;\n}\n\n.modal__close {\n  float: right;\n  background-color: inherit;\n  border: none;\n  height: min-content;\n\n  cursor: pointer;\n}\n.modal__close img {\n  transition: 0.4s ease;\n}\n.modal__close:hover img {\n  transform: scale(1.1);\n}\n\n.left-border-green {\n  border-left: 10px solid #8fd694;\n}\n.left-border-yellow {\n  border-left: 10px solid #ffd670;\n}\n.left-border-red {\n  border-left: 10px solid #c23a5c;\n}\n.left-border-darkred {\n  border-left: 10px solid #b40c36;\n}\n"],"sourceRoot":""}]);
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
      console.log(checkBox.checked);
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
      console.log(task);
      wrapper.classList.add("task__done");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcs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LFdBQVc7QUFDWCxDQUFDO0FBQzJCOzs7Ozs7Ozs7Ozs7Ozs7QUNkNUI7QUFDQSxXQUFXO0FBQ1g7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSGhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA4MHB4IDFmciAvIDMwMHB4IDFmcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBIRUFERVIgU1RZTElORyAqL1xcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1ZDc1O1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubG9nbyA+IGgxIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmxvZ28gPiBpbWcge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi8qIE5BViBTVFlMSU5HICovXFxuXFxubmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDk1JSk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxubmF2IGRpdixcXG5uYXYgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5uYXYgYnV0dG9uOm5vdCgubW9kYWxfX2J1dHRvbikge1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyOm5vdCgubW9kYWxfX2J1dHRvbiksXFxubmF2IGJ1dHRvbjphY3RpdmU6bm90KC5tb2RhbF9fYnV0dG9uKSxcXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbm5hdiBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubmF2X19zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ubmF2X19wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2X19kcm9wZG93biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluIGJvdGg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duID4gYnV0dG9uIHtcXG4gIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ubmF2X19kcm9wZG93biA+IGltZyB7XFxuICBoZWlnaHQ6IDE4cHg7XFxufVxcbi5uYXZfX2Ryb3Bkb3duIHAge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFycm93LXVwIHtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXG59XFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5hZGRfX3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggNDBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLm1vZGFsX19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbl9faGVhZGVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubWFpbl9faGVhZGVyLWRpdiBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG4ubWFpbl9faGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuLm1haW5fX2Rlc2NyaXB0aW9uIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHdpZHRoOiA3MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50YXNrX19oZWFkZXJzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2plY3RfX3Rhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuLnByb2plY3RfX3Rhc2sgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLnRhc2tfX2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICM4ZmQ2OTQ7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udGFza19fb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRvb2x0aXAge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTMwcHg7XFxuICBib3R0b206IDExMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTY1cHg7IC8qIFVzZSBoYWxmIG9mIHRoZSB3aWR0aCAoMTIwLzIgPSA2MCksIHRvIGNlbnRlciB0aGUgdG9vbHRpcCAqL1xcbiAgei1pbmRleDogMTtcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7IC8qIEF0IHRoZSBib3R0b20gb2YgdGhlIHRvb2x0aXAgKi9cXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi50YXNrX19vcHRpb25zIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi50YXNrX19kb25lIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRhc2tfX2RvbmU6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbF9fY2xvc2UgaW1nIHtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLm1vZGFsX19jbG9zZTpob3ZlciBpbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubGVmdC1ib3JkZXItZ3JlZW4ge1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzhmZDY5NDtcXG59XFxuLmxlZnQtYm9yZGVyLXllbGxvdyB7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmZkNjcwO1xcbn1cXG4ubGVmdC1ib3JkZXItcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNjMjNhNWM7XFxufVxcbi5sZWZ0LWJvcmRlci1kYXJrcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNiNDBjMzY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDViwrQkFBK0I7RUFDakM7QUFDRjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FB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QkFBa0I7O0VBRWxCLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCLEVBQUUsOERBQThEO0VBQ2xGLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTLEVBQUUsaUNBQWlDO0VBQzVDLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1REFBdUQ7QUFDekQ7QUFDQSxvRUFBb0U7QUFDcEU7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjs7RUFFbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogODBweCAxZnIgLyAzMDBweCAxZnI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogSEVBREVSIFNUWUxJTkcgKi9cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NWQ3NTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmxvZ28gPiBoMSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5sb2dvID4gaW1nIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4vKiBOQVYgU1RZTElORyAqL1xcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCA5NSUpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcbm5hdiBkaXYsXFxubmF2IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubmF2IGJ1dHRvbjpub3QoLm1vZGFsX19idXR0b24pIHtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxubmF2IGJ1dHRvbjpob3Zlcjpub3QoLm1vZGFsX19idXR0b24pLFxcbm5hdiBidXR0b246YWN0aXZlOm5vdCgubW9kYWxfX2J1dHRvbiksXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5uYXYgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLm5hdl9fc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuLm5hdl9fcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdl9fZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbiBib3RoO1xcbn1cXG4ubmF2X19kcm9wZG93biA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm5hdl9fZHJvcGRvd24gPiBpbWcge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG4ubmF2X19kcm9wZG93biBwIHtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG59XFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hcnJvdy11cCB7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYWRkX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDQwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5tb2RhbF9faGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5fX2hlYWRlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuLm1haW5fX2hlYWRlci1kaXYgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLm1haW5fX2hlYWRlciB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcbi5tYWluX19kZXNjcmlwdGlvbiB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB3aWR0aDogNzAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGFza19faGVhZGVycyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wcm9qZWN0X190YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbi5wcm9qZWN0X190YXNrID4gcDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi50YXNrX19sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZkNjk0O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjOGZkNjk0O1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnRhc2tfX29wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50b29sdGlwIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuXFxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgYm90dG9tOiAxMTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC02NXB4OyAvKiBVc2UgaGFsZiBvZiB0aGUgd2lkdGggKDEyMC8yID0gNjApLCB0byBjZW50ZXIgdGhlIHRvb2x0aXAgKi9cXG4gIHotaW5kZXg6IDE7XFxufVxcbi50b29sdGlwIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlOyAvKiBBdCB0aGUgYm90dG9tIG9mIHRoZSB0b29sdGlwICovXFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4udGFza19fb3B0aW9ucyBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG4udGFza19fZG9uZSB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrX19kb25lOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWxfX2Nsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxfX2Nsb3NlIGltZyB7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi5tb2RhbF9fY2xvc2U6aG92ZXIgaW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmxlZnQtYm9yZGVyLWdyZWVuIHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICM4ZmQ2OTQ7XFxufVxcbi5sZWZ0LWJvcmRlci15ZWxsb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZDY3MDtcXG59XFxuLmxlZnQtYm9yZGVyLXJlZCB7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjYzIzYTVjO1xcbn1cXG4ubGVmdC1ib3JkZXItZGFya3JlZCB7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjYjQwYzM2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgcHJvamVjdEltZyBmcm9tIFwiLi9pbWFnZXMvc2luZ2xlcHJvai5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vcHJvamVjdEZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiO1xuXG5jb25zdCBkb21Db250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZHJvcERvd25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fZHJvcGRvd25cIik7XG4gIGxldCBwcm9qZWN0c0xpc3Q7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgcHJvamVjdHNMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0c0xpc3QgPSBbUHJvamVjdChcIlByb2plY3QgMVwiLCBcIlRoaXMgaXMgZXhhbXBsZSBvZiBhIHByb2plY3QuXCIpXTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICBjb25zdCBvcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfcHJvamVjdFwiKTtcbiAgY29uc3QgbW9kYWxfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgLy8vIFRPRE86IFVwZGF0ZSB0aGlzIG1ldGhvZFxuICBjb25zdCB1cGRhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBpID0gMDtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2X19zZWN0aW9uXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgaWNvbi5zcmMgPSBwcm9qZWN0SW1nO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgZHJvcERvd25Db250YWluZXIuYXBwZW5kQ2hpbGQob3Blbik7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZURyb3BEb3duID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3ctdXBcIikuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZVwiKTtcbiAgICBkcm9wRG93bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xuICAgIHB1dEFjdGl2ZShlLCBidXR0b24pO1xuICAgIGlmIChpc1Byb2plY3QoYnV0dG9uKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgICAgIG1haW4gPSBjcmVhdGVQcm9qZWN0TWFpbihwcm9qZWN0c0xpc3RbYnV0dG9uLmRhdGFzZXQuaW5kZXhdKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwdXRBY3RpdmUgPSAoZSwgYnV0dG9uKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIk5BVlwiKSB7XG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IGJ1dHRvblwiKSk7XG4gICAgICBidXR0b25zLmZvckVhY2goKGN1cnJlbnQpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09IGJ1dHRvbikge1xuICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAhY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfX3Byb2plY3RzXCIpICYmXG4gICAgICAgICAgY3VycmVudC5pZCAhPT0gXCJhZGRfcHJvamVjdFwiXG4gICAgICAgICkge1xuICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1Byb2plY3QgPSAoYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocHJvamVjdEJ1dHRvbnMpLmluY2x1ZGVzKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDbG9zZSgpKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgcHJvamVjdFwiO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2hlYWRlclwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgZGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JOYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgbGFiZWxGb3JOYW1lLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IG5hbWU6IFwiO1xuICAgIGRpdk5hbWUuYXBwZW5kQ2hpbGQobGFiZWxGb3JOYW1lKTtcblxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0TmFtZS5pZCA9IFwibmFtZVwiO1xuICAgIGlucHV0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXROYW1lLm1heExlbmd0aCA9IDIwO1xuICAgIGRpdk5hbWUuYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdk5hbWUpO1xuXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbGFiZWxGb3JUZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRm9yVGV4dGJveC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBsYWJlbEZvclRleHRib3gudGV4dENvbnRlbnQgPSBcIlNob3J0IHByb2plY3QgZGVzY3JpcHRpb246IFwiO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRm9yVGV4dGJveCk7XG5cbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5yb3dzID0gNTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmNvbHMgPSA0MDtcbiAgICBkaXZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBwcm9qZWN0XCI7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fYnV0dG9uXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdHNMaXN0LnB1c2goUHJvamVjdChpbnB1dE5hbWUudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgfSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRQcm9qZWN0QnlOYW1lKFxuICAgICAgcHJvamVjdHNMaXN0LFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIikudGV4dENvbnRlbnRcbiAgICApO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBtb2RhbC5hcHBlbmQobW9kYWxDbG9zZSgpKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9faGVhZGVyXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGxhYmVsRm9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEZvck5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBsYWJlbEZvck5hbWUudGV4dENvbnRlbnQgPSBcIlByb2plY3QgbmFtZTogXCI7XG4gICAgZGl2TmFtZS5hcHBlbmRDaGlsZChsYWJlbEZvck5hbWUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJuYW1lXCI7XG4gICAgaW5wdXROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dE5hbWUubWF4TGVuZ3RoID0gMjA7XG4gICAgaW5wdXROYW1lLnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIGRpdk5hbWUuYXBwZW5kKGlucHV0TmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZOYW1lKTtcblxuICAgIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGxhYmVsRm9yVGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEZvclRleHRib3guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgbGFiZWxGb3JUZXh0Ym94LnRleHRDb250ZW50ID0gXCJTaG9ydCBwcm9qZWN0IGRlc2NyaXB0aW9uOiBcIjtcbiAgICBkaXZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChsYWJlbEZvclRleHRib3gpO1xuXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucm93cyA9IDU7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5jb2xzID0gNDA7XG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSBcIkVkaXQgcHJvamVjdFwiO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19idXR0b25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZWRpdHRlZFByb2plY3QgPSBQcm9qZWN0KGlucHV0TmFtZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCldLm5hbWUgPSBpbnB1dE5hbWUudmFsdWU7XG4gICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCldLmRlc2NyaXB0aW9uID1cbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgICB9KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0UHJvamVjdEJ5TmFtZShcbiAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faGVhZGVyXCIpLnRleHRDb250ZW50XG4gICAgKTtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ2xvc2UoKSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBwcm9qZWN0P1wiO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2hlYWRlclwiKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlllc1wiO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2J1dHRvblwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgIHByb2plY3RzTGlzdC5zcGxpY2UocHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgICB9KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfTtcbiAgY29uc3QgZGVsZXRlVGFza01vZGFsID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0UHJvamVjdEJ5TmFtZShcbiAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9faGVhZGVyXCIpLnRleHRDb250ZW50XG4gICAgKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICAgIG1vZGFsLmFwcGVuZChtb2RhbENsb3NlKCkpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIjtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19oZWFkZXJcIik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19idXR0b25cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXS5saXN0T2ZUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmVmcmVzaE1haW4ocHJvamVjdCk7XG4gICAgfSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdE1haW4gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbl9faGVhZGVyLWRpdlwiKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluX19oZWFkZXJcIik7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICBjb25zdCBlZGl0VG9vbFRpcCA9IGNyZWF0ZVRvb2xUaXAoXCJFRElUIFBST0pFQ1RcIik7XG5cbiAgICBjb25zdCBlZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdE1vZGFsKCkpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vZGFsXCIpO1xuICAgIH0pO1xuICAgIGVkaXRUb29sVGlwLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChlZGl0VG9vbFRpcCk7XG5cbiAgICBjb25zdCByZW1vdmVUb29sVGlwID0gY3JlYXRlVG9vbFRpcChcIlJFTU9WRSBQUk9KRUNUXCIpO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgcmVtb3ZlLnNyYyA9IGRlbGV0ZUljb247XG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlTW9kYWwoKSk7XG4gICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3ctbW9kYWxcIik7XG4gICAgfSk7XG4gICAgcmVtb3ZlVG9vbFRpcC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChyZW1vdmVUb29sVGlwKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW5fX2Rlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcblxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrTW9kYWwodHJ1ZSkpO1xuICAgIH0pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICBpZiAocHJvamVjdC5saXN0T2ZUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tIZWFkZXJzKCkpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgcHJvamVjdC5saXN0T2ZUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Rpdih0YXNrLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub1Rhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBub1Rhc2tzLmNsYXNzTGlzdC5hZGQoXCJtYWluX19oZWFkZXJcIik7XG4gICAgICBub1Rhc2tzLnRleHRDb250ZW50ID0gXCJObyB0YXNrcyB5ZXQhXCI7XG4gICAgICBtYWluLmFwcGVuZENoaWxkKG5vVGFza3MpO1xuICAgIH1cblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X190YXNrXCIpO1xuICAgIHdyYXBwZXIuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgdGFza1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrUGFyYS5jbGFzc0xpc3QuYWRkKFwidGFza19fbGVmdFwiKTtcbiAgICB0YXNrUGFyYS50ZXh0Q29udGVudCA9IHRhc2sudGFzaztcblxuICAgIGNvbnN0IHRvZ2dsZURvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9nZ2xlRG9uZS5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xuXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5jaGVja2VkID0gdGFzay5pc0RvbmU7XG4gICAgdG9nZ2xlRG9uZS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjaGVja0JveC5jaGVja2VkKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldFByb2plY3RCeU5hbWUoXG4gICAgICAgIHByb2plY3RzTGlzdCxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19oZWFkZXJcIikudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgICBwcm9qZWN0c0xpc3RbcHJvamVjdHNMaXN0LmluZGV4T2YocHJvamVjdCldLmxpc3RPZlRhc2tzW2luZGV4XS5pc0RvbmUgPVxuICAgICAgICBjaGVja0JveC5jaGVja2VkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlZnJlc2hNYWluKHByb2plY3QpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwicm91bmRcIik7XG4gICAgdG9nZ2xlRG9uZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB0YXNrUGFyYS5hcHBlbmRDaGlsZCh0b2dnbGVEb25lKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1BhcmEpO1xuXG4gICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImxlZnQtYm9yZGVyLWdyZWVuXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGVmdC1ib3JkZXIteWVsbG93XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImxlZnQtYm9yZGVyLXJlZFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX19vcHRpb25zXCIpO1xuXG4gICAgY29uc3QgZWRpdFRvb2xUaXAgPSBjcmVhdGVUb29sVGlwKFwiRURJVCBUQVNLXCIpO1xuICAgIGNvbnN0IGVkaXRUYXNrID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdFRhc2suc3JjID0gZWRpdEljb247XG4gICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgYWRkVGFza01vZGFsKGZhbHNlLCB3cmFwcGVyLmRhdGFzZXQuaW5kZXgsIHRhc2spXG4gICAgICApO1xuICAgIH0pO1xuICAgIGVkaXRUb29sVGlwLmFwcGVuZENoaWxkKGVkaXRUYXNrKTtcblxuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChlZGl0VG9vbFRpcCk7XG5cbiAgICBjb25zdCByZW1vdmVUb29sVGlwID0gY3JlYXRlVG9vbFRpcChcIlJFTU9WRSBUQVNLXCIpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSBuZXcgSW1hZ2UoKTtcbiAgICByZW1vdmVUYXNrLnNyYyA9IGRlbGV0ZUljb247XG4gICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vZGFsXCIpO1xuICAgICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tNb2RhbCh3cmFwcGVyLmRhdGFzZXQuaW5kZXgpKTtcbiAgICB9KTtcbiAgICByZW1vdmVUb29sVGlwLmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyZW1vdmVUb29sVGlwKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG4gICAgaWYgKHRhc2suaXNEb25lKSB7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfX2RvbmVcIik7XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvb2xUaXAgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHRvb2xUaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvb2xUaXAuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sdGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbHRpcFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHRvb2xUaXAuYXBwZW5kQ2hpbGQodG9vbHRpcFRleHQpO1xuICAgIHJldHVybiB0b29sVGlwO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tIZWFkZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfX2hlYWRlcnNcIik7XG5cbiAgICBjb25zdCB0YXNrUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tQYXJhLnRleHRDb250ZW50ID0gXCJUQVNLXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrUGFyYSk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRFVFIERBVEVcIjtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHJldHVybiB3cmFwcGVyO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9ICh0b0FkZCwgaW5kZXggPSAwLCB0YXNrID0gVGFzayhcIlwiLCBcIlwiLCBcImxvd1wiLCBcIlwiKSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RnVuY3Rpb25zLmdldFByb2plY3RCeU5hbWUoXG4gICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2hlYWRlclwiKS50ZXh0Q29udGVudFxuICAgICk7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gICAgbW9kYWwuYXBwZW5kKG1vZGFsQ2xvc2UoKSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9faGVhZGVyXCIpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZGl2VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tcIik7XG4gICAgbGFiZWxGb3JUYXNrLnRleHRDb250ZW50ID0gXCJUYXNrIFRpdGxlOiBcIjtcbiAgICBkaXZUYXNrLmFwcGVuZENoaWxkKGxhYmVsRm9yVGFzayk7XG5cbiAgICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUYXNrLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dFRhc2suaWQgPSBcInRhc2tcIjtcbiAgICBpbnB1dFRhc2sudmFsdWUgPSB0YXNrLnRhc2s7XG4gICAgaW5wdXRUYXNrLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dFRhc2subWF4TGVuZ3RoID0gMjA7XG4gICAgZGl2VGFzay5hcHBlbmQoaW5wdXRUYXNrKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdlRhc2spO1xuXG4gICAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgbGFiZWxGb3JUYXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbEZvclRhc2tEZXNjLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxhYmVsRm9yVGFza0Rlc2MudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb246IFwiO1xuICAgIGRpdkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGxhYmVsRm9yVGFza0Rlc2MpO1xuXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBpbnB1dERlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucm93cyA9IDM7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5jb2xzID0gMjA7XG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGl2RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkaXZQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRm9yUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgbGFiZWxGb3JQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiVGFzayBQcmlvcml0eTogXCI7XG4gICAgZGl2UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxGb3JQcmlvcml0eSk7XG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBpbnB1dFByaW9yaXR5LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uMS52YWx1ZSA9IFwibG93XCI7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gb3B0aW9uMS52YWx1ZSkge1xuICAgICAgb3B0aW9uMS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24yLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBvcHRpb24yLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBvcHRpb24yLnZhbHVlKSB7XG4gICAgICBvcHRpb24yLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbjMudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBpZiAodGFzay5wcmlvcml0eSA9PSBvcHRpb24zLnZhbHVlKSB7XG4gICAgICBvcHRpb24zLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uMyk7XG5cbiAgICBkaXZQcmlvcml0eS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2UHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBsYWJlbEZvckR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxGb3JEdWVEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVcIik7XG4gICAgbGFiZWxGb3JEdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChsYWJlbEZvckR1ZURhdGUpO1xuXG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vIFRPRE86IEV4dHJhY3QgdGhpcyBmdW5jdGlvblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgZGQgPSBcIjBcIiArIGRkO1xuICAgIH1cblxuICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICBtbSA9IFwiMFwiICsgbW07XG4gICAgfVxuXG4gICAgdG9kYXkgPSB5eXl5ICsgXCItXCIgKyBtbSArIFwiLVwiICsgZGQ7XG4gICAgaW5wdXREdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBpbnB1dER1ZURhdGUuaWQgPSBcImR1ZURhdGVcIjtcbiAgICBpbnB1dER1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgaW5wdXREdWVEYXRlLm1pbiA9IHRvZGF5O1xuICAgIGlucHV0RHVlRGF0ZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgZGl2RHVlRGF0ZS5hcHBlbmRDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGQudGV4dENvbnRlbnQgPSBcIkFERFwiO1xuICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9fYnV0dG9uXCIpO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGQpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgaW5wdXRUYXNrLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBpbnB1dER1ZURhdGUudmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXS5saXN0T2ZUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByZWZyZXNoTWFpbihwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGVkaXQudGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19idXR0b25cIik7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICAgICAgaW5wdXRUYXNrLnZhbHVlLFxuICAgICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgaW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBpbnB1dER1ZURhdGUudmFsdWUsXG4gICAgICAgICAgdGFzay5pc0RvbmVcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXS5saXN0T2ZUYXNrc1tpbmRleF0gPVxuICAgICAgICAgIG5ld1Rhc2s7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgICAgbW9kYWxfY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJlZnJlc2hNYWluKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH07XG4gIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbF9jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdE1vZGFsKCkpO1xuICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKTtcbiAgfSk7XG5cbiAgY29uc3QgbW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibW9kYWxfX2Nsb3NlXCIpO1xuXG4gICAgY29uc3QgY2xvc2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9zZS5zcmMgPSBjbG9zZUljb247XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKTtcbiAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKG1vZGFsX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LW1vZGFsXCIpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxcIikgPT09IG51bGwgJiZcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIiNtb2RhbC1jb250YWluZXJcIikgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX3Byb2plY3RzXCIpLm9uY2xpY2sgPSB0b2dnbGVEcm9wRG93bjtcblxuICBjb25zdCByZWZyZXNoTWFpbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYWluKTtcbiAgICBtYWluID0gY3JlYXRlUHJvamVjdE1haW4ocHJvamVjdHNMaXN0W3Byb2plY3RzTGlzdC5pbmRleE9mKHByb2plY3QpXSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgfTtcbiAgdXBkYXRlUHJvamVjdHMoKTtcbiAgcmV0dXJuIHt9O1xufSkoKTtcbmV4cG9ydCB7IGRvbUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IFByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgbGV0IGxpc3RPZlRhc2tzID0gW107XG4gIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBsaXN0T2ZUYXNrcyB9O1xufTtcbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImNvbnN0IHByb2plY3RGdW5jdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRQcm9qZWN0QnlOYW1lID0gKHByb2plY3RzTGlzdCwgbmFtZSkgPT4ge1xuICAgIGxldCBmb3VuZDtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBmb3VuZCA9IGVsZW1lbnQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0UHJvamVjdEJ5TmFtZSB9O1xufSkoKTtcbmV4cG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfTtcbiIsImNvbnN0IFRhc2sgPSAodGFzaywgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpc0RvbmUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4geyB0YXNrLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGlzRG9uZSB9O1xufTtcbmV4cG9ydCB7IFRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGRvbUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kb21cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
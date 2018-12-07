(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-me-module"],{

/***/ "./src/app/routes/me/me.component.html":
/*!*********************************************!*\
  !*** ./src/app/routes/me/me.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  me works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/me/me.component.ts":
/*!*******************************************!*\
  !*** ./src/app/routes/me/me.component.ts ***!
  \*******************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
Import & configuration
*/
// Angular

// Config.
var MeComponent = /** @class */ (function () {
    function MeComponent() {
    }
    MeComponent.prototype.ngOnInit = function () {
    };
    MeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./me.component.html */ "./src/app/routes/me/me.component.html")
        })
        //
        /*
        Export
        */
        ,
        __metadata("design:paramtypes", [])
    ], MeComponent);
    return MeComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/me/module.ts":
/*!*************************************!*\
  !*** ./src/app/routes/me/module.ts ***!
  \*************************************/
/*! exports provided: MePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageModule", function() { return MePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route */ "./src/app/routes/me/route.ts");
/* harmony import */ var _me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me.component */ "./src/app/routes/me/me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Imports
*/
// Angular


// Inner

//
/*
Definition
*/
var MePageModule = /** @class */ (function () {
    //
    /*
    Export
    */
    function MePageModule() {
    }
    MePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_me_component__WEBPACK_IMPORTED_MODULE_2__["MeComponent"]],
            imports: [_route__WEBPACK_IMPORTED_MODULE_1__["ComponentRouter"]]
        })
        //
        /*
        Export
        */
    ], MePageModule);
    return MePageModule;
}());

;
//


/***/ }),

/***/ "./src/app/routes/me/route.ts":
/*!************************************!*\
  !*** ./src/app/routes/me/route.ts ***!
  \************************************/
/*! exports provided: ComponentRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRouter", function() { return ComponentRouter; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me.component */ "./src/app/routes/me/me.component.ts");

// Inner

//
/*
Definition
*/
var routes = [
    {
        path: '',
        component: _me_component__WEBPACK_IMPORTED_MODULE_1__["MeComponent"]
    }
];
//
/*
Export
*/
var ComponentRouter = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
//


/***/ })

}]);
//# sourceMappingURL=routes-me-module.js.map
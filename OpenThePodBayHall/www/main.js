(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
Imports
*/
// The "Component" interface is needed to declare a component

//
/*
Definition and export

*/
// Definition
var AppComponent = /** @class */ (function () {
    // Export
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // The name of the component selector
            selector: 'app-root',
            // Content of the vue
            template: "\n      <app-header></app-header>\n      \n      <!--\n      The \"router-outlet\" directive is used to define where the route components will be load.\n      All components will be load right after the \"router-outlet\" (check your dev. console)\n      -->\n      <router-outlet></router-outlet>\n    "
        })
        // Export
    ], AppComponent);
    return AppComponent;
}());

//


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/signin-page/signin-page.component */ "./src/app/routes/signin-page/signin-page.component.ts");
/* harmony import */ var _routes_me_page_me_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/me-page/me-page.component */ "./src/app/routes/me-page/me-page.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");

/*
Import and definition
*/
// Basic interfaces to declare an Angular Module


// Import the interface to enable HTTP request (need to be add in "imports" array)

// Import the iterface to create a router (need to be add in "imports" array)

// Import the application router (need to be associated to "RouterModule")

// Import form interfaces for complete form ability (need to be add in "imports" array)

// Import the main appication component (need to be add in "declarations" array)

// Import the route components (need to be add in "declarations" array)




//
/*
Config and export
*/
// Config
var AppModule = /** @class */ (function () {
    // Export
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
                _routes_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_9__["SigninPageComponent"],
                _routes_me_page_me_page_component__WEBPACK_IMPORTED_MODULE_10__["MePageComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_5__["MainRouter"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] // Boostrap property is used to deploy application
        })
        // Export
    ], AppModule);
    return AppModule;
}());

//


/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: MainRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouter", function() { return MainRouter; });
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/signin-page/signin-page.component */ "./src/app/routes/signin-page/signin-page.component.ts");
/* harmony import */ var _routes_me_page_me_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/me-page/me-page.component */ "./src/app/routes/me-page/me-page.component.ts");
// Import components used in the routes



//
/*
Export a contant to define routes
- Create an array of type Routes
- Each route is an object:
    - "path" is the endpoint (slash isn't needed)
    - "component" is the component used in the route
    - Other options are avaible here https://angular.io/api/router/Routes
*/
var MainRouter = [
    {
        path: '',
        component: _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"],
    },
    {
        path: 'signin',
        component: _routes_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_1__["SigninPageComponent"]
    },
    {
        path: 'me',
        component: _routes_me_page_me_page_component__WEBPACK_IMPORTED_MODULE_2__["MePageComponent"]
    }
];
//


/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/routes/home-page/home-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/routes/me-page/me-page.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/me-page/me-page.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  me-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/routes/me-page/me-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/me-page/me-page.component.ts ***!
  \*****************************************************/
/*! exports provided: MePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MePageComponent", function() { return MePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MePageComponent = /** @class */ (function () {
    function MePageComponent() {
    }
    MePageComponent.prototype.ngOnInit = function () {
    };
    MePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-me-page',
            template: __webpack_require__(/*! ./me-page.component.html */ "./src/app/routes/me-page/me-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MePageComponent);
    return MePageComponent;
}());



/***/ }),

/***/ "./src/app/routes/signin-page/signin-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/routes/signin-page/signin-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Signin</h2>\n\n<form [formGroup]=\"form\" (submit)=\"signin()\">\n  <input type=\"text\" name=\"first_name\" formControlName=\"first_name\">\n  <input type=\"text\" name=\"last_name\" formControlName=\"last_name\">\n  <input type=\"email\" name=\"email\" formControlName=\"email\">\n  <input type=\"password\" name=\"password\" formControlName=\"password\">\n\n  <button type=\"submit\" [disabled]=\"!form.valid\">Signin</button>\n</form>"

/***/ }),

/***/ "./src/app/routes/signin-page/signin-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/signin-page/signin-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SigninPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageComponent", function() { return SigninPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/*
Imports and config
*/

// Import the "OnInit" interface to enable Angular "ngOnInit" hook (cf. code below)

// Import interface to use Angular form technic

// Import the service you need to use

// Config
var SigninPageComponent = /** @class */ (function () {
    function SigninPageComponent(FormBuilder, AuthService) {
        var _this = this;
        this.FormBuilder = FormBuilder;
        this.AuthService = AuthService;
        this.initForm = function () {
            _this.form = _this.FormBuilder.group({
                first_name: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                last_name: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        };
        this.signin = function () {
            // Vérifier les champs
            _this.AuthService.signin(_this.form.value)
                .then(function (apiResponse) { return console.log(apiResponse); })
                .catch(function (apiResponse) { return console.error(apiResponse); });
        };
    }
    SigninPageComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SigninPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin-page',
            template: __webpack_require__(/*! ./signin-page.component.html */ "./src/app/routes/signin-page/signin-page.component.html"),
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]] // All used service must be declared in the "providers" array
        })
        //
        /*
        Export
        */
        // To use "ngOnInit" hook you need to implelment it in the class
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SigninPageComponent);
    return SigninPageComponent;
}());

//


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

/*
Imports and config
*/
// Use environement value

// The "Injectable" interface is needed to define a service

// The "HttpClient" and "HttpHeaders" interface is needed to make HTTP request

// Config
var AuthService = /** @class */ (function () {
    function AuthService(
    // Inject "HttpClient" in the class to use it
    HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        // Declare your api URL
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/auth";
        /*
        Function to register a user
        - Param need to be type "UserModel"
        - Function return a Promise
        */
        this.signin = function (data) {
            // Optional: set header request
            var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            myHeader.append('Content-Type', 'application/json');
            /*
            Return a HTTP post request
            - Param one: API endpoint
            - Param two: data to send
            - Param tree (optional): request header
            */
            return _this.HttpClient.post(_this.apiUrl + "/register", data, { headers: myHeader })
                .toPromise() // Use Promise in an Angular Service
                .then(function (apiResponse) { return Promise.resolve(apiResponse); }) // Resolve Promise success
                .catch(function (apiResponse) { return Promise.reject(apiResponse); }); // Reject Promise error
        };
    }
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

//


/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Open the Podbbay Door</h1>\n  <nav>\n    <a [routerLink]=\"'/'\">Home</a>\n    <a [routerLink]=\"'/signin'\">Signin</a>\n    <a [routerLink]=\"'/me'\">Me</a>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:6578/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dwsparis/Desktop/M2DEV_ECV_DIGITAL/OpenThePodBayHall/ANGpwa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
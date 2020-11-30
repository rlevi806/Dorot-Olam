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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DorotOlam';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _memorial_components_display_record_display_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memorial/components/display-record/display-record.component */ "./src/app/memorial/components/display-record/display-record.component.ts");
/* harmony import */ var _components_building_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/building/building.component */ "./src/app/components/building/building.component.ts");
/* harmony import */ var _memorial_memorial_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./memorial/memorial.module */ "./src/app/memorial/memorial.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_building_building_component__WEBPACK_IMPORTED_MODULE_7__["BuildingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _memorial_memorial_module__WEBPACK_IMPORTED_MODULE_8__["MemorialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'displayDetails/:id', component: _memorial_components_display_record_display_record_component__WEBPACK_IMPORTED_MODULE_6__["DisplayRecordComponent"] },
                    { path: '', component: _components_building_building_component__WEBPACK_IMPORTED_MODULE_7__["BuildingComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/building/building.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/building/building.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/building/building.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/building/building.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  building works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/building/building.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/building/building.component.ts ***!
  \***********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuildingComponent = /** @class */ (function () {
    function BuildingComponent() {
    }
    BuildingComponent.prototype.ngOnInit = function () {
    };
    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-building',
            template: __webpack_require__(/*! ./building.component.html */ "./src/app/components/building/building.component.html"),
            styles: [__webpack_require__(/*! ./building.component.css */ "./src/app/components/building/building.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/memorial/components/display-record/display-record.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/memorial/components/display-record/display-record.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbW9yaWFsL2NvbXBvbmVudHMvZGlzcGxheS1yZWNvcmQvZGlzcGxheS1yZWNvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/memorial/components/display-record/display-record.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/memorial/components/display-record/display-record.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>{{record.personalInformation.degree}} {{record.personalInformation.firstName}} {{record.personalInformation.lastName}}</h1>\n\n      <h2>פרטים אישיים</h2>\n\n      <div>\n\n        <label *ngIf=\"hasValue(record.personalInformation.firstName)\"> {{record.personalInformation.firstName}}</label>\n        <label *ngIf=\"hasValue(record.personalInformation.lastName)\"> {{record.personalInformation.lastName}} </label>\n  <label *ngIf=\"hasValue(record.personalInformation.previousFamilyName)\">  ({{record.personalInformation.previousFamilyName}}) </label>\n      </div>\n      <div *ngIf=\"hasValue(record.personalInformation.picture)\">\n        <img src=\"{{record.personalInformation.picture}}\">\n      </div>\n      <div>\n        <label *ngIf=\"hasValue(record.lifeStory.birthDate)\"> נולד ב {{record.lifeStory.birthDate|date:'dd.MM.yyyy'}} </label>\n        <label *ngIf=\"hasValue(record.lifeStory.birthPlace)\"> ב {{record.lifeStory.birthPlace}} </label>\n        <label *ngIf=\"hasValue(record.family.fatherFirstName)\"> ל {{record.family.fatherFirstName}} </label>\n        <label *ngIf=\"hasValue(record.family.motherFirstName)\"> ו {{record.family.motherFirstName}} </label>\n      </div>\n\n      <h2>קורות חייו</h2>\n\n      <div *ngIf=\"hasValue(record.lifeStory.lifehistory)\">{{record.lifeStory.lifehistory}}</div>\n      <label *ngIf=\"hasValue(record.lifeStory.residence)\">התגורר ב {{record.lifeStory.residence}}</label>\n      <div *ngIf=\"hasValue(record.legacy.affiliation)\">השתייך לקהילת {{record.legacy.affiliation}}</div>\n      <div *ngIf=\"hasValue(record.legacy.teachers) && hasValue(record.legacy.teachers.length)\">\n        מרבותיו:\n        <ul>\n          <li *ngFor=\"let teacher of record.legacy.teachers\">\n            {{teacher.name}}\n          </li>\n        </ul>\n      </div>\n      <div *ngIf=\"hasValue(record.legacy.students) && hasValue(record.legacy.students.length)\">\n        מתלמידיו:\n        <ul>\n          <li *ngFor=\"let student of record.legacy.students\">\n            {{student.name}}\n          </li>\n        </ul>\n      </div>\n      <div *ngIf=\"hasValue(record.legacy.studyPlace) && hasValue(record.legacy.studyPlace.length)\">\n        למד ב:\n        <ul>\n          <li *ngFor=\"let studyPlace of record.legacy.studyPlace\">\n            {{studyPlace.name}}\n          </li>\n        </ul>\n      </div>\n      <div *ngIf=\"hasValue(record.legacy.occupation) && hasValue(record.legacy.occupation.length)\">\n        עסק ב:\n        <ul>\n          <li *ngFor=\"let occupation of record.legacy.occupation\">\n            {{occupation.nameInstitution}}\n          </li>\n        </ul>\n      </div>\n\n      <h2>פטירתו</h2>\n\n      <label *ngIf=\"hasValue(record.lifeStory.deathDate)\">נפטר ב {{record.lifeStory.deathDate|date:'dd.MM.yyyy'}} ,</label>\n      <label *ngIf=\"hasValue(record.lifeStory.deathPlace)\">ב {{record.lifeStory.deathPlace}} ,</label>\n      <label *ngIf=\"hasValue(record.lifeStory.deathAge)\">\n        כשהוא בן\n        {{record.lifeStory.deathAge}} ,\n      </label>\n      <label *ngIf=\"hasValue(record.lifeStory.burialPlace)\">ונקבר ב {{record.lifeStory.burialPlace}} ,</label>\n      <div *ngIf=\"hasValue(record.legacy.template)\">{{record.legacy.template}}</div>\n      <div *ngIf=\"hasValue(record.personalInformation.situationPicture)\">\n        <img src=\"{{record.personalInformation.situationPicture}}\">\n      </div>\n      <h2>מידע נוסף</h2>\n      <div *ngIf=\"hasValue(record.legacy.moreLink.length)\">\n        <label *ngFor=\"let item of record.legacy.moreLink\">\n          {{item.link}},\n        </label>\n      </div>\n      <div *ngIf=\"hasValue(record.lifeStory.tags.length)\">\n        <label *ngFor=\"let item of record.lifeStory.tags\">\n          {{item}},\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/memorial/components/display-record/display-record.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/memorial/components/display-record/display-record.component.ts ***!
  \********************************************************************************/
/*! exports provided: DisplayRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRecordComponent", function() { return DisplayRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_memorial_services_goToServer_go_to_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/memorial/services/goToServer/go-to-server.service */ "./src/app/memorial/services/goToServer/go-to-server.service.ts");
/* harmony import */ var _models_record_record__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/record/record */ "./src/app/memorial/models/record/record.ts");
/* harmony import */ var _models_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/utils/utils */ "./src/app/memorial/models/utils/utils.ts");
/* harmony import */ var _models_lifeStory_life_story__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/lifeStory/life-story */ "./src/app/memorial/models/lifeStory/life-story.ts");
/* harmony import */ var _models_family_family__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/family/family */ "./src/app/memorial/models/family/family.ts");
/* harmony import */ var _models_legacy_legacy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/legacy/legacy */ "./src/app/memorial/models/legacy/legacy.ts");
/* harmony import */ var _models_personalInformation_personal_information__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/personalInformation/personal-information */ "./src/app/memorial/models/personalInformation/personal-information.ts");










var DisplayRecordComponent = /** @class */ (function () {
    function DisplayRecordComponent(goToServerService, activatedRoute) {
        var _this = this;
        this.goToServerService = goToServerService;
        this.activatedRoute = activatedRoute;
        this.record = new _models_record_record__WEBPACK_IMPORTED_MODULE_4__["Record"]();
        this.record.personalInformation = new _models_personalInformation_personal_information__WEBPACK_IMPORTED_MODULE_9__["PersonalInformation"]();
        this.record.lifeStory = new _models_lifeStory_life_story__WEBPACK_IMPORTED_MODULE_6__["LifeStory"]();
        this.record.family = new _models_family_family__WEBPACK_IMPORTED_MODULE_7__["Family"]();
        this.record.legacy = new _models_legacy_legacy__WEBPACK_IMPORTED_MODULE_8__["Legacy"]();
        this.goToServerService.getRecordById(this.activatedRoute.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            _this.record = res;
            console.log(_this.record);
        }, function (err) {
            return console.log(err);
        });
    }
    DisplayRecordComponent.prototype.ngOnInit = function () {
        //this.goToServerService.getRecordById(this.activatedRoute.snapshot.paramMap.get('id'))
        //.subscribe((res: Record) => {
        //    this.record = res;
        //    console.log(this.record);
        //},
        //    err =>
        //        console.log(err)
        //);
    };
    DisplayRecordComponent.prototype.hasValue = function (val) {
        return _models_utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].hasValue(val);
    };
    DisplayRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-record',
            template: __webpack_require__(/*! ./display-record.component.html */ "./src/app/memorial/components/display-record/display-record.component.html"),
            styles: [__webpack_require__(/*! ./display-record.component.css */ "./src/app/memorial/components/display-record/display-record.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_memorial_services_goToServer_go_to_server_service__WEBPACK_IMPORTED_MODULE_3__["GoToServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DisplayRecordComponent);
    return DisplayRecordComponent;
}());



/***/ }),

/***/ "./src/app/memorial/memorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/memorial/memorial.module.ts ***!
  \*********************************************/
/*! exports provided: MemorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorialModule", function() { return MemorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_display_record_display_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display-record/display-record.component */ "./src/app/memorial/components/display-record/display-record.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var MemorialModule = /** @class */ (function () {
    function MemorialModule() {
    }
    MemorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_display_record_display_record_component__WEBPACK_IMPORTED_MODULE_3__["DisplayRecordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ]
        })
    ], MemorialModule);
    return MemorialModule;
}());



/***/ }),

/***/ "./src/app/memorial/models/family/family.ts":
/*!**************************************************!*\
  !*** ./src/app/memorial/models/family/family.ts ***!
  \**************************************************/
/*! exports provided: Family */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Family", function() { return Family; });
var Family = /** @class */ (function () {
    function Family() {
        this.fatherFirstName = "";
        this.fatherId = "";
        this.fatherOrigin = "";
        this.motherId = "";
        this.motherFirstName = "";
        this.motherLastName = "";
        this.motherOrigin = "";
        this.partnerLastName = "";
        this.partnerFirstName = "";
        this.partnerId = "";
        this.partnerOrigin = "";
        this.fatherLastName = "";
        this.moreFamilyMembers = [];
    }
    return Family;
}());



/***/ }),

/***/ "./src/app/memorial/models/legacy/legacy.ts":
/*!**************************************************!*\
  !*** ./src/app/memorial/models/legacy/legacy.ts ***!
  \**************************************************/
/*! exports provided: Legacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legacy", function() { return Legacy; });
var Legacy = /** @class */ (function () {
    function Legacy() {
        this.affiliation = "";
        this.template = "";
        this.studyPlace = [];
        this.occupation = [];
        this.teachers = [];
        this.students = [];
        this.works = [];
        this.moreLink = [];
    }
    return Legacy;
}());



/***/ }),

/***/ "./src/app/memorial/models/lifeStory/life-story.ts":
/*!*********************************************************!*\
  !*** ./src/app/memorial/models/lifeStory/life-story.ts ***!
  \*********************************************************/
/*! exports provided: LifeStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeStory", function() { return LifeStory; });
var LifeStory = /** @class */ (function () {
    function LifeStory() {
        this.birthPlace = "";
        this.deathPlace = "";
        this.burialPlace = "";
        this.lifeHistory = "";
        this.residence = "";
        this.tags = "";
        this.moreAddress = [];
    }
    return LifeStory;
}());



/***/ }),

/***/ "./src/app/memorial/models/personalInformation/personal-information.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/memorial/models/personalInformation/personal-information.ts ***!
  \*****************************************************************************/
/*! exports provided: PersonalInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformation", function() { return PersonalInformation; });
var PersonalInformation = /** @class */ (function () {
    function PersonalInformation() {
        this.id = "";
        this.firstName = "";
        this.lastName = "";
        this.previousFamilyName = "";
        this.gender = "";
        this.attribution = "";
        this.degree = "";
        this.picture = "";
        this.situationPicture = "";
    }
    return PersonalInformation;
}());



/***/ }),

/***/ "./src/app/memorial/models/record/record.ts":
/*!**************************************************!*\
  !*** ./src/app/memorial/models/record/record.ts ***!
  \**************************************************/
/*! exports provided: Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
var Record = /** @class */ (function () {
    function Record() {
    }
    return Record;
}());



/***/ }),

/***/ "./src/app/memorial/models/utils/utils.ts":
/*!************************************************!*\
  !*** ./src/app/memorial/models/utils/utils.ts ***!
  \************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.hasValue = function (val) {
        return val !== undefined && val !== null && val !== 0 && val !== '';
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/memorial/services/goToServer/go-to-server.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/memorial/services/goToServer/go-to-server.service.ts ***!
  \**********************************************************************/
/*! exports provided: GoToServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToServerService", function() { return GoToServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GoToServerService = /** @class */ (function () {
    function GoToServerService(_http) {
        this._http = _http;
        //baseUrl = `${environment.baseUrl}/api/record`;
        this.baseUrl = "https://localhost:44399/api/record";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    GoToServerService.prototype.getRecordById = function (numId) {
        return this._http.get(this.baseUrl + "/GetRecordById?id=" + numId, this.httpOptions);
    };
    GoToServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoToServerService);
    return GoToServerService;
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
    baseUrl: ''
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

module.exports = __webpack_require__(/*! C:\Project\DorotOlam\New\Dorot-Olam\DorotOlam\DorotOlam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
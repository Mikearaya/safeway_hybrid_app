(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schools-schools-module"],{

/***/ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-form/lesson-type-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3NjaG9vbHMvbGVzc29uLXR5cGUtZm9ybS9sZXNzb24tdHlwZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-form/lesson-type-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"lessonTypeForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\" #tab>\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <label for=\"type\">Lesson type</label>\n                <input\n                  type=\"text\"\n                  formControlName=\"type\"\n                  class=\"form-control\"\n                  id=\"type\"\n                  aria-describedby=\"Lesson type\"\n                  placeholder=\"Lesson type\"\n                />\n                <div class=\"text-danger\" *ngIf=\"type.errors\">\n                  <div *ngIf=\"type.errors['required']\">\n                    Lesson type is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"lessonTypeLocales\">\n              <div\n                *ngFor=\"\n                  let locale of lessonTypeLocales.controls;\n                  let i = index;\n                  let last = last\n                \"\n                [formGroup]=\"locale\"\n              >\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">Language</label>\n                    <select\n                      class=\"form-control\"\n                      formControlName=\"locale\"\n                      id=\"locale\"\n                    >\n                      <option\n                        *ngFor=\"let lang of languages; let i = index\"\n                        [value]=\"lang.ID\"\n                        >{{ lang.name }}</option\n                      >\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.errors\">\n                      <div *ngIf=\"locale.errors['required']\">\n                        Language is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-7 form-group \">\n                    <label for=\"type\"> Lesson Type translation</label>\n                    <input\n                      type=\"text\"\n                      formControlName=\"type\"\n                      class=\"form-control\"\n                      id=\"type\"\n                      aria-describedby=\"Lesson type translation\"\n                      placeholder=\"Lesson type translation\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('type').errors\">\n                      <div *ngIf=\"locale.get('type').errors['required']\">\n                        lesson type translation is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button\n                      type=\"button\"\n                      (click)=\"addLocale()\"\n                      *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\"\n                      [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\"\n                    >\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-sm rounded  btn-danger\"\n                      (click)=\"deleteLocale(i)\"\n                    >\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button\n                type=\"button\"\n                (click)=\"addLocale()\"\n                class=\"btn  btn-success\"\n                *ngIf=\"lessonTypeLocales.length == 0\"\n              >\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button\n      type=\"submit\"\n      [ngClass]=\"lessonTypeForm.invalid ? 'btn-danger' : 'btn-success'\"\n      class=\"btn\"\n    >\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-form/lesson-type-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LessonTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTypeFormComponent", function() { return LessonTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lesson_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lesson-type.service */ "./src/app/features/schools/lesson-type.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _lesson_type_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lesson-type.model */ "./src/app/features/schools/lesson-type.model.ts");







var LessonTypeFormComponent = /** @class */ (function () {
    function LessonTypeFormComponent(lessonTypeApi, formBuilder, activatedRoute, systemConf) {
        this.lessonTypeApi = lessonTypeApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.systemConf = systemConf;
        this.deletedIds = [];
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.createForm();
    }
    LessonTypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonTypeId = +this.activatedRoute.snapshot.paramMap.get('lessonTypeId');
        if (this.lessonTypeId) {
            this.isUpdate = true;
            this.lessonTypeApi
                .getLessonTypeById(this.lessonTypeId)
                .subscribe(function (data) { return _this.initializeForm(data); });
        }
        this.systemConf
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
    };
    LessonTypeFormComponent.prototype.createForm = function () {
        this.lessonTypeForm = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lessonTypeLocales: this.formBuilder.array([])
        });
    };
    LessonTypeFormComponent.prototype.initializeForm = function (lesson) {
        var _this = this;
        this.lessonTypeForm = this.formBuilder.group({
            id: [lesson.lesson_types.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [lesson.lesson_types.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lessonTypeLocales: this.formBuilder.array([])
        });
        lesson.lesson_type_locale.forEach(function (element) {
            _this.lessonTypeLocales.controls.push(_this.initializeLocaleForm(element));
        });
    };
    Object.defineProperty(LessonTypeFormComponent.prototype, "type", {
        get: function () {
            return this.lessonTypeForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonTypeFormComponent.prototype, "lessonTypeLocales", {
        get: function () {
            return this.lessonTypeForm.get('lessonTypeLocales');
        },
        enumerable: true,
        configurable: true
    });
    LessonTypeFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = this.prepareFormData();
        if (formData) {
            if (this.isUpdate) {
                this.lessonTypeApi
                    .updateLessonType(formData)
                    .subscribe(function () { return alert('Lesson type updated successfully'); }, function (error) { return alert(error.message); });
            }
            else {
                this.lessonTypeApi.createLessonType(formData).subscribe(function (data) {
                    _this.lessonTypeId = data;
                    _this.isUpdate = true;
                    alert('lesson type created successfully');
                }, function (error) { return alert(error.message); });
            }
        }
    };
    LessonTypeFormComponent.prototype.prepareFormData = function () {
        var lessonType = new _lesson_type_model__WEBPACK_IMPORTED_MODULE_6__["LessonType"]();
        if (this.lessonTypeForm.valid) {
            if (this.isUpdate && this.lessonTypeId) {
                lessonType.lesson_types = {
                    ID: this.lessonTypeId,
                    type: this.type.value
                };
            }
            else {
                lessonType.lesson_types = {
                    type: this.type.value
                };
            }
            this.lessonTypeLocales.controls.forEach(function (element) {
                lessonType.lesson_type_locale.push({
                    ID: element.value.id,
                    type: element.value.type,
                    locale: element.value.locale
                });
            });
            this.deletedIds.map(function (element) {
                return lessonType.deleted_ids.lesson_type_locale.push(element);
            });
            return lessonType;
        }
        else {
            return null;
        }
    };
    LessonTypeFormComponent.prototype.generateLocaleForm = function () {
        return this.formBuilder.group({
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LessonTypeFormComponent.prototype.initializeLocaleForm = function (locale) {
        return this.formBuilder.group({
            id: [locale.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: [locale.type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LessonTypeFormComponent.prototype.addLocale = function () {
        this.lessonTypeLocales.controls.push(this.generateLocaleForm());
    };
    LessonTypeFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.lessonTypeLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.lessonTypeLocales.removeAt(index);
            }
        }
        else {
            this.lessonTypeLocales.removeAt(index);
        }
    };
    LessonTypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-lesson-type-form',
            template: __webpack_require__(/*! ./lesson-type-form.component.html */ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lesson-type-form.component.css */ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lesson_type_service__WEBPACK_IMPORTED_MODULE_2__["LessonTypeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_5__["SystemApiService"]])
    ], LessonTypeFormComponent);
    return LessonTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-view/lesson-type-view.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3NjaG9vbHMvbGVzc29uLXR5cGUtdmlldy9sZXNzb24tdHlwZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-view/lesson-type-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnsList\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSorting]=\"true\"\n  (deleteRecord)=\"deleteLessonType($event)\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/schools/lesson-type-view/lesson-type-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LessonTypeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTypeViewComponent", function() { return LessonTypeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lesson_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lesson-type.service */ "./src/app/features/schools/lesson-type.service.ts");



var LessonTypeViewComponent = /** @class */ (function () {
    function LessonTypeViewComponent(lessonTypeApi) {
        this.lessonTypeApi = lessonTypeApi;
        this.columnsList = [
            {
                header: 'ID',
                key: 'ID',
                type: 'number',
                visible: false
            },
            {
                header: 'Lesson Type',
                key: 'type',
                type: 'string',
                visible: true
            },
            {
                header: 'Added',
                key: 'date_added',
                type: 'date',
                format: 'yMd',
                visible: false,
                width: 100
            },
            {
                header: 'Updated',
                key: 'date_updated',
                type: 'date',
                format: 'yMd',
                visible: false,
                width: 100
            }
        ];
    }
    LessonTypeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lessonTypeApi
            .getLessonTypeList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    LessonTypeViewComponent.prototype.deleteLessonType = function (data) {
        this.lessonTypeApi
            .deletelessonType([data.ID])
            .subscribe(function () { return alert('Lesson type deleted successfully'); }, function (error) { return alert(error.message); });
    };
    LessonTypeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-lesson-type-view',
            template: __webpack_require__(/*! ./lesson-type-view.component.html */ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lesson-type-view.component.css */ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lesson_type_service__WEBPACK_IMPORTED_MODULE_2__["LessonTypeService"]])
    ], LessonTypeViewComponent);
    return LessonTypeViewComponent;
}());



/***/ }),

/***/ "./src/app/features/schools/lesson-type.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/schools/lesson-type.model.ts ***!
  \*******************************************************/
/*! exports provided: LessonType, LessonTypeDeletable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonType", function() { return LessonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTypeDeletable", function() { return LessonTypeDeletable; });
var LessonType = /** @class */ (function () {
    function LessonType() {
        this.lesson_type_locale = [];
        this.deleted_ids = new LessonTypeDeletable();
    }
    return LessonType;
}());

var LessonTypeDeletable = /** @class */ (function () {
    function LessonTypeDeletable() {
        this.lesson_type_locale = [];
    }
    return LessonTypeDeletable;
}());



/***/ }),

/***/ "./src/app/features/schools/lesson-type.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/schools/lesson-type.service.ts ***!
  \*********************************************************/
/*! exports provided: LessonTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTypeService", function() { return LessonTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var LessonTypeService = /** @class */ (function () {
    function LessonTypeService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'lesson_types';
        this.httpBody = new URLSearchParams();
    }
    LessonTypeService.prototype.getLessonTypeById = function (id) {
        return this.httpClient.get(this.controller + "/" + id);
    };
    LessonTypeService.prototype.getLessonTypeList = function () {
        return this.httpClient.get("" + this.controller);
    };
    LessonTypeService.prototype.createLessonType = function (lesson) {
        return this.httpClient.post("" + this.controller, lesson);
    };
    LessonTypeService.prototype.updateLessonType = function (lesson) {
        return this.httpClient.post(this.controller + "/update/" + lesson.lesson_types.ID, lesson);
    };
    LessonTypeService.prototype.deletelessonType = function (typeId) {
        var idArr = [];
        typeId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete/", idArr);
    };
    LessonTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LessonTypeService);
    return LessonTypeService;
}());



/***/ }),

/***/ "./src/app/features/schools/school-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/features/schools/school-api.service.ts ***!
  \********************************************************/
/*! exports provided: SchoolApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolApiService", function() { return SchoolApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var SchoolApiService = /** @class */ (function () {
    function SchoolApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'schools';
        this.httpBody = new URLSearchParams();
    }
    SchoolApiService.prototype.getSchoolById = function (id) {
        return this.httpClient.get(this.controller + "/" + id);
    };
    SchoolApiService.prototype.getSchoolsList = function () {
        return this.httpClient.get("" + this.controller);
    };
    SchoolApiService.prototype.createSchool = function (school) {
        return this.httpClient.post("" + this.controller, school);
    };
    SchoolApiService.prototype.updateSchool = function (school) {
        return this.httpClient.post(this.controller + "/update/" + school.school.ID, school);
    };
    SchoolApiService.prototype.deleteSchool = function (typeId) {
        var idArr = [];
        idArr.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete/", idArr);
    };
    SchoolApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolApiService);
    return SchoolApiService;
}());



/***/ }),

/***/ "./src/app/features/schools/school-forum/school-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/features/schools/school-forum/school-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3NjaG9vbHMvc2Nob29sLWZvcnVtL3NjaG9vbC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/schools/school-forum/school-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/schools/school-forum/school-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"schoolForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\">\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"name\">School name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" aria-describedby=\"School name\"\n                  placeholder=\"School name\" />\n                <div class=\"text-danger\" *ngIf=\"name.errors\">\n                  <div *ngIf=\"name.errors['required']\">\n                    School Name is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"phoneNumber\">Phone Number</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\n                  placeholder=\"Phone number\" />\n              </div>\n            </div>\n            <div class=\"row \">\n              <div class=\"col-12 form-group\">\n                <label for=\"lessonTypes\">Lesson type</label>\n                <ejs-multiselect id=\"lessonTypes\" class=\"form-control\" (removed)=\"lessonRemoved($event)\"\n                  formControlName=\"lessons\" [fields]=\"fields\" [dataSource]=\"data\"></ejs-multiselect>\n                <small id=\"lessonType\" class=\"form-text text-muted\">Agecy type.</small>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\" id=\"address\"\n                  aria-describedby=\"Address\" placeholder=\"Address\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the Agency.</small>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"region\">Region</label>\n                <select class=\"form-control\" formControlName=\"region\" id=\"region\">\n                  <option [value]=\"1\">Addis Ababa</option>\n                  <option [value]=\"2\">Dire dawa</option>\n                  <option [value]=\"3\">Hawassa</option>\n                  <option [value]=\"4\">Bishoftu</option>\n                  <option [value]=\"5\">Nazret</option>\n                </select>\n                <div class=\"text-danger\" *ngIf=\"region.errors\">\n                  <div *ngIf=\"region.errors['required']\">\n                    Agency region is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"emailAddress\">email</label>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"emailAddress\"\n                  aria-describedby=\"email\" placeholder=\"Email address\" />\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"fax\">Fax</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"fax\" id=\"fax\" placeholder=\"Fax\" />\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <ejs-uploader #defaultupload [autoUpload]='false' (change)='removeFile($event)'\n                  [allowedExtensions]=\"'image/*'\" name='fileupload'\n                  [files]='preLoadFiles' [multiple]='false' [asyncSettings]='path'>\n                </ejs-uploader>\n\n              </div>\n            </div>\n\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"schoolLocales\">\n              <div *ngFor=\"\n                  let locale of schoolLocales.controls;\n                  let i = index;\n                  let last = last\n                \" [formGroup]=\"locale\">\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">locale</label>\n                    <select class=\"form-control\" formControlName=\"locale\" id=\"locale\">\n                      <option *ngFor=\"let lang of languages; let i = index\" [value]=\"lang.ID\">{{ lang.name }}</option>\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('locale').errors\">\n                      <div *ngIf=\"locale.get('locale').errors['required']\">\n                        School region is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group \">\n                    <label for=\"name\">Agency contact</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\"\n                      aria-describedby=\"Agency name\" placeholder=\"Agency name\" />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('name').errors\">\n                      <div *ngIf=\"locale.get('name').errors['required']\">\n                        School Name is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"region\">Address</label>\n                    <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\"\n                      id=\"address\" aria-describedby=\"Address\" placeholder=\"Address\" />\n                    <small id=\"address\" class=\"form-text text-muted\">Address of the school.</small>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button type=\"button\" (click)=\"addLocale()\" *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\" [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm rounded  btn-danger\" (click)=\"deleteLocale(i)\">\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button type=\"button\" (click)=\"addLocale()\" class=\"btn  btn-success\" *ngIf=\"schoolLocales.length == 0\">\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button type=\"submit\" [ngClass]=\"schoolForm.invalid ? 'btn-danger' : 'btn-success'\" class=\"btn\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/schools/school-forum/school-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/schools/school-forum/school-form.component.ts ***!
  \************************************************************************/
/*! exports provided: SchoolFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolFormComponent", function() { return SchoolFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _school_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../school-api.service */ "./src/app/features/schools/school-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _school_type_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../school-type.model */ "./src/app/features/schools/school-type.model.ts");
/* harmony import */ var _lesson_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lesson-type.service */ "./src/app/features/schools/lesson-type.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");









var SchoolFormComponent = /** @class */ (function () {
    function SchoolFormComponent(schoolApi, formBuilder, activatedRoute, systemConf, lessonTypeApi) {
        this.schoolApi = schoolApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.systemConf = systemConf;
        this.lessonTypeApi = lessonTypeApi;
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.fields = { text: 'type', value: 'ID' };
        this.data = [];
        this.deletedLocaleIds = [];
        this.deletedLessonIds = [];
        this.preLoadFiles = [
            {
                name: null,
                size: null,
                type: null
            }
        ];
        this.createForm();
        this.formId = _system_api_service__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid();
        this.path = {
            saveUrl: "http://localhost/ilo_app/backend/index.php/upload/media/english/" + this.formId,
            removeUrl: 'http://localhost/ilo_app/backend/index.php/upload/media_delete/school'
        };
    }
    SchoolFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolId = +this.activatedRoute.snapshot.paramMap.get('schoolId');
        this.lessonTypeApi
            .getLessonTypeList()
            .subscribe(function (data) { return (_this.data = data); });
        if (this.schoolId) {
            this.isUpdate = true;
            this.schoolApi
                .getSchoolById(this.schoolId)
                .subscribe(function (data) { return _this.initializeForm(data); });
        }
        this.systemConf
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
    };
    SchoolFormComponent.prototype.createForm = function () {
        this.schoolForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lessons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [''],
            fax: [''],
            email: [''],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            schoolLocales: this.formBuilder.array([])
        });
    };
    SchoolFormComponent.prototype.initializeForm = function (data) {
        var _this = this;
        this.schoolForm = this.formBuilder.group({
            name: [data.school.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lessons: [data.school_lessons.map(function (l) { return l.LESSON_ID; }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            region: [data.school.region, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [data.school.address],
            fax: [data.school.fax],
            email: [data.school.email],
            phoneNumber: [data.school.phone_number, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            schoolLocales: this.formBuilder.array([])
        });
        this.preLoadFiles = data.image;
        data.school_locale.map(function (l) {
            return _this.schoolLocales.controls.push(_this.initializeLocalesForm(l));
        });
    };
    Object.defineProperty(SchoolFormComponent.prototype, "name", {
        get: function () {
            return this.schoolForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "region", {
        get: function () {
            return this.schoolForm.get('region');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "lessons", {
        get: function () {
            return this.schoolForm.get('lessons');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.schoolForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "fax", {
        get: function () {
            return this.schoolForm.get('fax');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "email", {
        get: function () {
            return this.schoolForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "address", {
        get: function () {
            return this.schoolForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolFormComponent.prototype, "schoolLocales", {
        get: function () {
            return this.schoolForm.get('schoolLocales');
        },
        enumerable: true,
        configurable: true
    });
    SchoolFormComponent.prototype.addLocale = function () {
        this.schoolLocales.controls.push(this.generateLocalesForm());
    };
    SchoolFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.schoolLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                alert(deletedControlId.value);
                this.deletedLocaleIds.push(deletedControlId.value);
                this.schoolLocales.removeAt(index);
            }
        }
        else {
            this.schoolLocales.removeAt(index);
        }
    };
    SchoolFormComponent.prototype.lessonRemoved = function (data) {
        console.log(data);
        this.deletedLessonIds.push(data.itemData.ID);
    };
    SchoolFormComponent.prototype.generateLocalesForm = function () {
        return this.formBuilder.group({
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['']
        });
    };
    SchoolFormComponent.prototype.initializeLocalesForm = function (locale) {
        return this.formBuilder.group({
            id: [locale.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [locale.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [locale.address]
        });
    };
    SchoolFormComponent.prototype.removeFile = function (data) {
        console.log(data);
    };
    SchoolFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.defaultUpload.upload(this.defaultUpload.getFilesData());
        var formData = this.prepareFormData();
        if (formData) {
            if (this.isUpdate) {
                this.schoolApi
                    .updateSchool(formData)
                    .subscribe(function () { return alert('School updated successfuly'); }, function (error) { return alert(error.message); });
            }
            else {
                this.schoolApi.createSchool(formData).subscribe(function (data) {
                    _this.isUpdate = true;
                    _this.schoolId = data;
                    alert('School created successfuly');
                }, function (error) { return alert(error.message); });
            }
        }
        else {
            return null;
        }
    };
    SchoolFormComponent.prototype.prepareFormData = function () {
        var schoolData = new _school_type_model__WEBPACK_IMPORTED_MODULE_6__["School"]();
        if (this.schoolForm.valid) {
            if (this.isUpdate && this.schoolId) {
                schoolData.school = {
                    ID: this.schoolId,
                    address: this.address.value,
                    name: this.name.value,
                    phone_number: this.phoneNumber.value,
                    region: this.region.value,
                    fax: this.fax.value,
                    email: this.email.value
                };
            }
            else {
                schoolData.school = {
                    address: this.address.value,
                    name: this.name.value,
                    phone_number: this.phoneNumber.value,
                    region: this.region.value,
                    fax: this.fax.value,
                    email: this.email.value
                };
            }
            this.lessons.value.forEach(function (element) {
                schoolData.school_lessons.push({
                    LESSON_ID: element
                });
            });
            this.schoolLocales.controls.forEach(function (element) {
                schoolData.school_locale.push({
                    ID: element.value.id,
                    address: element.value.address,
                    name: element.value.name,
                    locale: element.value.locale
                });
            });
            this.deletedLocaleIds.forEach(function (element) {
                schoolData.deleted_ids.school_locale.push(element);
            });
            this.deletedLessonIds.forEach(function (element) {
                return schoolData.deleted_ids.school_lessons.push(element);
            });
            schoolData.token = this.formId;
            return schoolData;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultupload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["UploaderComponent"])
    ], SchoolFormComponent.prototype, "defaultUpload", void 0);
    SchoolFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-school-form',
            template: __webpack_require__(/*! ./school-form.component.html */ "./src/app/features/schools/school-forum/school-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./school-form.component.css */ "./src/app/features/schools/school-forum/school-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_school_api_service__WEBPACK_IMPORTED_MODULE_2__["SchoolApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_5__["SystemApiService"],
            _lesson_type_service__WEBPACK_IMPORTED_MODULE_7__["LessonTypeService"]])
    ], SchoolFormComponent);
    return SchoolFormComponent;
}());



/***/ }),

/***/ "./src/app/features/schools/school-type.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/schools/school-type.model.ts ***!
  \*******************************************************/
/*! exports provided: SchoolModel, SchoolViewModel, SchoolLocaleModel, School, SchoolDeletables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolModel", function() { return SchoolModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolViewModel", function() { return SchoolViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolLocaleModel", function() { return SchoolLocaleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "School", function() { return School; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolDeletables", function() { return SchoolDeletables; });
var SchoolModel = /** @class */ (function () {
    function SchoolModel() {
    }
    return SchoolModel;
}());

var SchoolViewModel = /** @class */ (function () {
    function SchoolViewModel() {
    }
    return SchoolViewModel;
}());

var SchoolLocaleModel = /** @class */ (function () {
    function SchoolLocaleModel() {
    }
    return SchoolLocaleModel;
}());

var School = /** @class */ (function () {
    function School() {
        this.image = [];
        this.school_lessons = [];
        this.school_locale = [];
        this.deleted_ids = new SchoolDeletables();
    }
    return School;
}());

var SchoolDeletables = /** @class */ (function () {
    function SchoolDeletables() {
        this.school_lessons = [];
        this.school_locale = [];
    }
    return SchoolDeletables;
}());



/***/ }),

/***/ "./src/app/features/schools/school-view/school-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/features/schools/school-view/school-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3NjaG9vbHMvc2Nob29sLXZpZXcvc2Nob29sLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/schools/school-view/school-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/schools/school-view/school-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnsList\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSorting]=\"true\"\n  (deleteRecord)=\"deleteSchool($event)\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/schools/school-view/school-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/schools/school-view/school-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: SchoolViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolViewComponent", function() { return SchoolViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _school_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../school-api.service */ "./src/app/features/schools/school-api.service.ts");

/*
 * @CreateTime: Mar 16, 2019 3:16 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 16, 2019 3:19 PM
 * @Description: Modify Here, Please
 */


var SchoolViewComponent = /** @class */ (function () {
    function SchoolViewComponent(schoolApi) {
        this.schoolApi = schoolApi;
        this.data = [];
        this.columnsList = [
            {
                header: 'ID',
                key: 'ID',
                type: 'number',
                visible: false
            },
            {
                header: 'School Name',
                key: 'name',
                type: 'string',
                visible: true
            },
            {
                header: 'Address',
                key: 'address',
                type: 'string',
                visible: true,
                width: 150
            },
            {
                header: 'Region',
                key: 'region',
                type: 'string',
                visible: true,
                width: 100
            },
            {
                header: 'Lessons',
                key: 'LESSON_ID',
                type: 'string',
                visible: true,
                width: 100
            },
            {
                header: 'Added',
                key: 'date_added',
                type: 'date',
                format: 'yMd',
                visible: false,
                width: 100
            },
            {
                header: 'Updated',
                key: 'date_updated',
                type: 'date',
                format: 'yMd',
                visible: false,
                width: 100
            }
        ];
    }
    SchoolViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolApi
            .getSchoolsList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    SchoolViewComponent.prototype.deleteSchool = function (data) {
        this.schoolApi
            .deleteSchool(data.ID)
            .subscribe(function () { return alert('School deleted successfully'); }, function (error) { return alert(error.message); });
    };
    SchoolViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-school-view',
            template: __webpack_require__(/*! ./school-view.component.html */ "./src/app/features/schools/school-view/school-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./school-view.component.css */ "./src/app/features/schools/school-view/school-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_school_api_service__WEBPACK_IMPORTED_MODULE_2__["SchoolApiService"]])
    ], SchoolViewComponent);
    return SchoolViewComponent;
}());



/***/ }),

/***/ "./src/app/features/schools/schools-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/schools/schools-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SchoolsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsRoutingModule", function() { return SchoolsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _school_view_school_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-view/school-view.component */ "./src/app/features/schools/school-view/school-view.component.ts");
/* harmony import */ var _school_forum_school_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-forum/school-form.component */ "./src/app/features/schools/school-forum/school-form.component.ts");
/* harmony import */ var _lesson_type_view_lesson_type_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson-type-view/lesson-type-view.component */ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.ts");
/* harmony import */ var _lesson_type_form_lesson_type_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lesson-type-form/lesson-type-form.component */ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.ts");







var routes = [
    { path: '', component: _school_view_school_view_component__WEBPACK_IMPORTED_MODULE_3__["SchoolViewComponent"] },
    { path: 'new', component: _school_forum_school_form_component__WEBPACK_IMPORTED_MODULE_4__["SchoolFormComponent"] },
    { path: 'lesson-types', component: _lesson_type_view_lesson_type_view_component__WEBPACK_IMPORTED_MODULE_5__["LessonTypeViewComponent"] },
    { path: 'lesson-types/new', component: _lesson_type_form_lesson_type_form_component__WEBPACK_IMPORTED_MODULE_6__["LessonTypeFormComponent"] },
    {
        path: 'lesson-types/:lessonTypeId/update',
        component: _lesson_type_form_lesson_type_form_component__WEBPACK_IMPORTED_MODULE_6__["LessonTypeFormComponent"]
    },
    { path: ':schoolId/update', component: _school_forum_school_form_component__WEBPACK_IMPORTED_MODULE_4__["SchoolFormComponent"] }
];
var SchoolsRoutingModule = /** @class */ (function () {
    function SchoolsRoutingModule() {
    }
    SchoolsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SchoolsRoutingModule);
    return SchoolsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/schools/schools.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/schools/schools.module.ts ***!
  \****************************************************/
/*! exports provided: SchoolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsModule", function() { return SchoolsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _schools_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schools-routing.module */ "./src/app/features/schools/schools-routing.module.ts");
/* harmony import */ var _school_view_school_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./school-view/school-view.component */ "./src/app/features/schools/school-view/school-view.component.ts");
/* harmony import */ var _school_forum_school_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./school-forum/school-form.component */ "./src/app/features/schools/school-forum/school-form.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _lesson_type_form_lesson_type_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lesson-type-form/lesson-type-form.component */ "./src/app/features/schools/lesson-type-form/lesson-type-form.component.ts");
/* harmony import */ var _lesson_type_view_lesson_type_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lesson-type-view/lesson-type-view.component */ "./src/app/features/schools/lesson-type-view/lesson-type-view.component.ts");
/* harmony import */ var _lesson_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lesson-type.service */ "./src/app/features/schools/lesson-type.service.ts");
/* harmony import */ var _school_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./school-api.service */ "./src/app/features/schools/school-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");
/* harmony import */ var _syncfusion_ej2_ng_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-ng-dropdowns */ "../../node_modules/@syncfusion/ej2-ng-dropdowns/index.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");














var SchoolsModule = /** @class */ (function () {
    function SchoolsModule() {
    }
    SchoolsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _school_forum_school_form_component__WEBPACK_IMPORTED_MODULE_5__["SchoolFormComponent"],
                _school_view_school_view_component__WEBPACK_IMPORTED_MODULE_4__["SchoolViewComponent"],
                _lesson_type_form_lesson_type_form_component__WEBPACK_IMPORTED_MODULE_7__["LessonTypeFormComponent"],
                _lesson_type_view_lesson_type_view_component__WEBPACK_IMPORTED_MODULE_8__["LessonTypeViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _schools_routing_module__WEBPACK_IMPORTED_MODULE_3__["SchoolsRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponentModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_11__["TabModule"],
                _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["UploaderModule"],
                _syncfusion_ej2_ng_dropdowns__WEBPACK_IMPORTED_MODULE_12__["MultiSelectModule"]
            ],
            providers: [_lesson_type_service__WEBPACK_IMPORTED_MODULE_9__["LessonTypeService"], _school_api_service__WEBPACK_IMPORTED_MODULE_10__["SchoolApiService"]]
        })
    ], SchoolsModule);
    return SchoolsModule;
}());



/***/ })

}]);
//# sourceMappingURL=schools-schools-module.js.map
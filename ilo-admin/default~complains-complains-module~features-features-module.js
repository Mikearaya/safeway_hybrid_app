(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~complains-complains-module~features-features-module"],{

/***/ "./src/app/features/complains/complain-api.service.ts":
/*!************************************************************!*\
  !*** ./src/app/features/complains/complain-api.service.ts ***!
  \************************************************************/
/*! exports provided: ComplainApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainApiService", function() { return ComplainApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var ComplainApiService = /** @class */ (function () {
    function ComplainApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ComplainApiService.prototype.getAllComplains = function () {
        return this.httpClient.get("complains");
    };
    ComplainApiService.prototype.getComplainById = function (complainId) {
        return this.httpClient.get("complains/" + complainId);
    };
    ComplainApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComplainApiService);
    return ComplainApiService;
}());



/***/ }),

/***/ "./src/app/features/complains/complain-data.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/complains/complain-data.model.ts ***!
  \***********************************************************/
/*! exports provided: ComplainType, ComplainTypeDeletable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainType", function() { return ComplainType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainTypeDeletable", function() { return ComplainTypeDeletable; });
/*
 * @CreateTime: Mar 15, 2019 8:33 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 15, 2019 8:43 PM
 * @Description: Modify Here, Please
 */
var ComplainType = /** @class */ (function () {
    function ComplainType() {
        this.complain_type_locale = [];
        this.deleted_ids = new ComplainTypeDeletable();
    }
    return ComplainType;
}());

var ComplainTypeDeletable = /** @class */ (function () {
    function ComplainTypeDeletable() {
        this.complain_type_locale = [];
    }
    return ComplainTypeDeletable;
}());



/***/ }),

/***/ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/features/complains/complain-detail-view/complain-detail-view.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBsYWlucy9jb21wbGFpbi1kZXRhaWwtdmlldy9jb21wbGFpbi1kZXRhaWwtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/complains/complain-detail-view/complain-detail-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    {{complain.complain_type}}\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ complain.barcode }}</h5>\n    <p class=\"card-text\">{{complain.complain}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/complains/complain-detail-view/complain-detail-view.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComplainDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainDetailViewComponent", function() { return ComplainDetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _complain_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complain-api.service */ "./src/app/features/complains/complain-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var ComplainDetailViewComponent = /** @class */ (function () {
    function ComplainDetailViewComponent(complainApi, activatedRoute) {
        this.complainApi = complainApi;
        this.activatedRoute = activatedRoute;
    }
    ComplainDetailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complainId = +this.activatedRoute.snapshot.paramMap.get('complainId');
        if (this.complainId) {
            this.complainApi
                .getComplainById(this.complainId)
                .subscribe(function (data) {
                _this.complain = data;
            });
        }
    };
    ComplainDetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-complain-detail-view',
            template: __webpack_require__(/*! ./complain-detail-view.component.html */ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./complain-detail-view.component.css */ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_complain_api_service__WEBPACK_IMPORTED_MODULE_2__["ComplainApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ComplainDetailViewComponent);
    return ComplainDetailViewComponent;
}());



/***/ }),

/***/ "./src/app/features/complains/complain-type-api.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/complains/complain-type-api.service.ts ***!
  \*****************************************************************/
/*! exports provided: ComplainTypeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainTypeApiService", function() { return ComplainTypeApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var ComplainTypeApiService = /** @class */ (function () {
    function ComplainTypeApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'complain_types';
        this.httpBody = new URLSearchParams();
    }
    ComplainTypeApiService.prototype.getAllComplainTypes = function () {
        return this.httpClient.get("" + this.controller);
    };
    ComplainTypeApiService.prototype.getComplainTypeById = function (id) {
        return this.httpClient.get(this.controller + "/" + id);
    };
    ComplainTypeApiService.prototype.createComplainType = function (complainType) {
        return this.httpClient.post("" + this.controller, complainType);
    };
    ComplainTypeApiService.prototype.updateComplainType = function (complainType) {
        return this.httpClient.post(this.controller + "/update/" + complainType.complain_type.ID, complainType);
    };
    ComplainTypeApiService.prototype.deleteComplainType = function (typeId) {
        var idArr = [];
        typeId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete/", this.httpBody.toString());
    };
    ComplainTypeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ComplainTypeApiService);
    return ComplainTypeApiService;
}());



/***/ }),

/***/ "./src/app/features/complains/complain-type-form/complain-type-form.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-form/complain-type-form.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBsYWlucy9jb21wbGFpbi10eXBlLWZvcm0vY29tcGxhaW4tdHlwZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/complains/complain-type-form/complain-type-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-form/complain-type-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"complainTypeForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\" #tab>\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <label for=\"type\">Complain type</label>\n                <input\n                  type=\"text\"\n                  formControlName=\"type\"\n                  class=\"form-control\"\n                  id=\"type\"\n                  aria-describedby=\"Complain type\"\n                  placeholder=\"Complain type\"\n                />\n                <div class=\"text-danger\" *ngIf=\"type.errors\">\n                  <div *ngIf=\"type.errors['required']\">\n                    Complain type is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"complainTypeLocales\">\n              <div\n                *ngFor=\"\n                  let locale of complainTypeLocales.controls;\n                  let i = index;\n                  let last = last\n                \"\n                [formGroup]=\"locale\"\n              >\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">Language</label>\n                    <select\n                      class=\"form-control\"\n                      formControlName=\"locale\"\n                      id=\"locale\"\n                    >\n                      <option\n                        *ngFor=\"let lang of languages; let i = index\"\n                        [value]=\"lang.ID\"\n                        >{{ lang.name }}</option\n                      >\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.errors\">\n                      <div *ngIf=\"locale.errors['required']\">\n                        Language is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-7 form-group \">\n                    <label for=\"type\">Type</label>\n                    <input\n                      type=\"text\"\n                      formControlName=\"type\"\n                      class=\"form-control\"\n                      id=\"type\"\n                      aria-describedby=\"Complain type\"\n                      placeholder=\"Complain type\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('type').errors\">\n                      <div *ngIf=\"locale.get('type').errors['required']\">\n                        Complain type is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button\n                      type=\"button\"\n                      (click)=\"addLocale()\"\n                      *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\"\n                      [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\"\n                    >\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-sm rounded  btn-danger\"\n                      (click)=\"deleteLocale(i)\"\n                    >\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button\n                type=\"button\"\n                (click)=\"addLocale()\"\n                class=\"btn  btn-success\"\n                *ngIf=\"complainTypeLocales.length == 0\"\n              >\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button\n      type=\"submit\"\n      [disabled]=\"complainTypeForm.invalid\"\n      [ngClass]=\"complainTypeForm.invalid ? 'btn-danger' : 'btn-success'\"\n      class=\"btn\"\n    >\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/complains/complain-type-form/complain-type-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-form/complain-type-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComplainTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainTypeFormComponent", function() { return ComplainTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _complain_type_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../complain-type-api.service */ "./src/app/features/complains/complain-type-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complain_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complain-data.model */ "./src/app/features/complains/complain-data.model.ts");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");







var ComplainTypeFormComponent = /** @class */ (function () {
    function ComplainTypeFormComponent(complainTypeApi, formBuilder, activatedRoute, systemConf) {
        this.complainTypeApi = complainTypeApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.systemConf = systemConf;
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.deletedIds = [];
        this.createForm();
    }
    ComplainTypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complainTypeId = +this.activatedRoute.snapshot.paramMap.get('complainTypeId');
        this.systemConf
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
        if (this.complainTypeId) {
            this.isUpdate = true;
            this.complainTypeApi
                .getComplainTypeById(this.complainTypeId)
                .subscribe(function (data) { return _this.initializeForm(data); });
        }
    };
    ComplainTypeFormComponent.prototype.initializeForm = function (complainType) {
        var _this = this;
        this.complainTypeForm = this.formBuilder.group({
            id: [complainType.complain_type.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [complainType.complain_type.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complainTypeLocales: this.formBuilder.array([])
        });
        complainType.complain_type_locale.map(function (element) {
            return _this.complainTypeLocales.controls.push(_this.initializeLocaleForm(element));
        });
    };
    ComplainTypeFormComponent.prototype.generateLocaleForm = function () {
        return this.formBuilder.group({
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ComplainTypeFormComponent.prototype.initializeLocaleForm = function (data) {
        return this.formBuilder.group({
            id: [data.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: [data.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [data.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ComplainTypeFormComponent.prototype.createForm = function () {
        this.complainTypeForm = this.formBuilder.group({
            id: [''],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complainTypeLocales: this.formBuilder.array([])
        });
    };
    ComplainTypeFormComponent.prototype.addLocale = function () {
        this.complainTypeLocales.controls.push(this.generateLocaleForm());
    };
    ComplainTypeFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.complainTypeLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.complainTypeLocales.removeAt(index);
            }
        }
        else {
            this.complainTypeLocales.removeAt(index);
        }
    };
    Object.defineProperty(ComplainTypeFormComponent.prototype, "type", {
        get: function () {
            return this.complainTypeForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplainTypeFormComponent.prototype, "complainTypeLocales", {
        get: function () {
            return this.complainTypeForm.get('complainTypeLocales');
        },
        enumerable: true,
        configurable: true
    });
    ComplainTypeFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = this.prepareFormData();
        if (formData) {
            if (this.isUpdate) {
                this.complainTypeApi
                    .updateComplainType(formData)
                    .subscribe(function () { return alert('Complain type updated successfuly'); }, function (error) { return alert(error.message); });
            }
            else {
                this.complainTypeApi.createComplainType(formData).subscribe(function (data) {
                    _this.complainTypeId = data;
                    _this.isUpdate = true;
                    alert('complain type added successfuly');
                }, function (error) { return alert(error.message); });
            }
        }
    };
    ComplainTypeFormComponent.prototype.prepareFormData = function () {
        var complainType = new _complain_data_model__WEBPACK_IMPORTED_MODULE_5__["ComplainType"]();
        if (this.complainTypeForm.valid) {
            if (this.isUpdate && this.complainTypeId) {
                complainType.complain_type = {
                    ID: this.complainTypeId,
                    type: this.type.value
                };
            }
            else {
                complainType.complain_type = {
                    ID: this.complainTypeId,
                    type: this.type.value
                };
            }
            this.complainTypeLocales.controls.forEach(function (element) {
                complainType.complain_type_locale.push({
                    ID: element.value.id,
                    locale: element.value.locale,
                    type: element.value.type
                });
                console.log(element);
            });
            this.deletedIds.forEach(function (id) {
                return complainType.deleted_ids.complain_type_locale.push(id);
            });
            return complainType;
        }
        else {
            return null;
        }
    };
    ComplainTypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-complain-type-form',
            template: __webpack_require__(/*! ./complain-type-form.component.html */ "./src/app/features/complains/complain-type-form/complain-type-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./complain-type-form.component.css */ "./src/app/features/complains/complain-type-form/complain-type-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_complain_type_api_service__WEBPACK_IMPORTED_MODULE_3__["ComplainTypeApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_6__["SystemApiService"]])
    ], ComplainTypeFormComponent);
    return ComplainTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/complains/complain-type-view/complain-type-view.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-view/complain-type-view.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBsYWlucy9jb21wbGFpbi10eXBlLXZpZXcvY29tcGxhaW4tdHlwZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/features/complains/complain-type-view/complain-type-view.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-view/complain-type-view.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [columnsList]=\"columnsList\"\n  [data]=\"data\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSearching]=\"true\"\n  [enableSorting]=\"true\"\n  [idKey]=\"'ID'\"\n  [showColumnChooser]=\"true\"\n  (deleteRecord)=\"deleteComplainType($event)\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/complains/complain-type-view/complain-type-view.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/complains/complain-type-view/complain-type-view.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComplainTypeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainTypeViewComponent", function() { return ComplainTypeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _complain_type_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complain-type-api.service */ "./src/app/features/complains/complain-type-api.service.ts");



var ComplainTypeViewComponent = /** @class */ (function () {
    function ComplainTypeViewComponent(complainTypeApi) {
        this.complainTypeApi = complainTypeApi;
        this.data = [];
        this.columnsList = [
            {
                key: 'ID',
                width: 50,
                header: 'id',
                type: 'string',
                visible: false
            },
            {
                key: 'type',
                header: 'Complain type',
                type: 'string'
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
    ComplainTypeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complainTypeApi
            .getAllComplainTypes()
            .subscribe(function (data) { return (_this.data = data); });
    };
    ComplainTypeViewComponent.prototype.deleteComplainType = function (data) {
        this.complainTypeApi.deleteComplainType([data.ID]).subscribe(function () { return alert('complain type deleted successfuly'); }, function (error) {
            alert('Failed while attempting to delete complain type');
        });
    };
    ComplainTypeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-complain-type-view',
            template: __webpack_require__(/*! ./complain-type-view.component.html */ "./src/app/features/complains/complain-type-view/complain-type-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./complain-type-view.component.css */ "./src/app/features/complains/complain-type-view/complain-type-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_complain_type_api_service__WEBPACK_IMPORTED_MODULE_2__["ComplainTypeApiService"]])
    ], ComplainTypeViewComponent);
    return ComplainTypeViewComponent;
}());



/***/ }),

/***/ "./src/app/features/complains/complains-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/complains/complains-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ComplainsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainsRoutingModule", function() { return ComplainsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complains_view_complains_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complains-view/complains-view.component */ "./src/app/features/complains/complains-view/complains-view.component.ts");
/* harmony import */ var _complain_detail_view_complain_detail_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complain-detail-view/complain-detail-view.component */ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.ts");
/* harmony import */ var _complain_type_form_complain_type_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complain-type-form/complain-type-form.component */ "./src/app/features/complains/complain-type-form/complain-type-form.component.ts");
/* harmony import */ var _complain_type_view_complain_type_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complain-type-view/complain-type-view.component */ "./src/app/features/complains/complain-type-view/complain-type-view.component.ts");

/*
 * @CreateTime: Mar 15, 2019 8:38 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 8, 2019 1:24 PM
 * @Description: Modify Here, Please
 */






var routes = [
    { path: '', component: _complains_view_complains_view_component__WEBPACK_IMPORTED_MODULE_3__["ComplainsViewComponent"] },
    { path: 'type', component: _complain_type_view_complain_type_view_component__WEBPACK_IMPORTED_MODULE_6__["ComplainTypeViewComponent"] },
    { path: 'type/new', component: _complain_type_form_complain_type_form_component__WEBPACK_IMPORTED_MODULE_5__["ComplainTypeFormComponent"] },
    { path: 'type/:complainTypeId/update', component: _complain_type_form_complain_type_form_component__WEBPACK_IMPORTED_MODULE_5__["ComplainTypeFormComponent"] },
    { path: ':complainId/update', component: _complain_detail_view_complain_detail_view_component__WEBPACK_IMPORTED_MODULE_4__["ComplainDetailViewComponent"] }
];
var ComplainsRoutingModule = /** @class */ (function () {
    function ComplainsRoutingModule() {
    }
    ComplainsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], ComplainsRoutingModule);
    return ComplainsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/complains/complains-view/complains-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/complains/complains-view/complains-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2NvbXBsYWlucy9jb21wbGFpbnMtdmlldy9jb21wbGFpbnMtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/complains/complains-view/complains-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/complains/complains-view/complains-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view [data]=\"data\" [columnsList]=\"columnsBluePrint\" [idKey]=\"'ID'\" [showUpdate]=\"true\"\n  [showAdd]=\"false\">\n</bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/complains/complains-view/complains-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/complains/complains-view/complains-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComplainsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainsViewComponent", function() { return ComplainsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _complain_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complain-api.service */ "./src/app/features/complains/complain-api.service.ts");



var ComplainsViewComponent = /** @class */ (function () {
    function ComplainsViewComponent(complainApi) {
        this.complainApi = complainApi;
        this.columnsBluePrint = [
            {
                key: 'ID',
                header: 'ID',
                type: 'number'
            },
            {
                key: 'barcode',
                header: 'Barcode no.',
                type: 'string'
            },
            {
                key: 'passport_id',
                header: 'Passport no.',
                type: 'string'
            },
            {
                key: 'complain_type',
                header: 'Reason',
                type: 'string'
            },
            { key: 'date_added', header: 'Added', type: 'date' }
        ];
    }
    ComplainsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complainApi.getAllComplains().subscribe(function (data) { return (_this.data = data); });
    };
    ComplainsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-complains-view',
            template: __webpack_require__(/*! ./complains-view.component.html */ "./src/app/features/complains/complains-view/complains-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./complains-view.component.css */ "./src/app/features/complains/complains-view/complains-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_complain_api_service__WEBPACK_IMPORTED_MODULE_2__["ComplainApiService"]])
    ], ComplainsViewComponent);
    return ComplainsViewComponent;
}());



/***/ }),

/***/ "./src/app/features/complains/complains.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/complains/complains.module.ts ***!
  \********************************************************/
/*! exports provided: ComplainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainsModule", function() { return ComplainsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complains_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complains-routing.module */ "./src/app/features/complains/complains-routing.module.ts");
/* harmony import */ var _complains_view_complains_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complains-view/complains-view.component */ "./src/app/features/complains/complains-view/complains-view.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _complain_detail_view_complain_detail_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complain-detail-view/complain-detail-view.component */ "./src/app/features/complains/complain-detail-view/complain-detail-view.component.ts");
/* harmony import */ var _complain_type_view_complain_type_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./complain-type-view/complain-type-view.component */ "./src/app/features/complains/complain-type-view/complain-type-view.component.ts");
/* harmony import */ var _complain_type_form_complain_type_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complain-type-form/complain-type-form.component */ "./src/app/features/complains/complain-type-form/complain-type-form.component.ts");
/* harmony import */ var _complain_type_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./complain-type-api.service */ "./src/app/features/complains/complain-type-api.service.ts");
/* harmony import */ var _complain_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./complain-api.service */ "./src/app/features/complains/complain-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");

/*
 * @CreateTime: Mar 15, 2019 8:38 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Mar 15, 2019 8:57 PM
 * @Description: Modify Here, Please
 */











var ComplainsModule = /** @class */ (function () {
    function ComplainsModule() {
    }
    ComplainsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _complains_view_complains_view_component__WEBPACK_IMPORTED_MODULE_4__["ComplainsViewComponent"],
                _complain_detail_view_complain_detail_view_component__WEBPACK_IMPORTED_MODULE_6__["ComplainDetailViewComponent"],
                _complain_type_form_complain_type_form_component__WEBPACK_IMPORTED_MODULE_8__["ComplainTypeFormComponent"],
                _complain_type_view_complain_type_view_component__WEBPACK_IMPORTED_MODULE_7__["ComplainTypeViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _complains_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComplainsRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponentModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_11__["TabModule"]
            ],
            providers: [_complain_type_api_service__WEBPACK_IMPORTED_MODULE_9__["ComplainTypeApiService"], _complain_api_service__WEBPACK_IMPORTED_MODULE_10__["ComplainApiService"]]
        })
    ], ComplainsModule);
    return ComplainsModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~complains-complains-module~features-features-module.js.map
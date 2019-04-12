(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hospitals-hospitals-module"],{

/***/ "./src/app/features/hospitals/hospital-data.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/hospitals/hospital-data.model.ts ***!
  \***********************************************************/
/*! exports provided: HospitalViewModel, HospitalDeletables, Hospital */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalViewModel", function() { return HospitalViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalDeletables", function() { return HospitalDeletables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hospital", function() { return Hospital; });
var HospitalViewModel = /** @class */ (function () {
    function HospitalViewModel() {
    }
    return HospitalViewModel;
}());

var HospitalDeletables = /** @class */ (function () {
    function HospitalDeletables() {
        this.hospital_locale = [];
    }
    return HospitalDeletables;
}());

var Hospital = /** @class */ (function () {
    function Hospital() {
        this.hospital_locale = [];
        this.deleted_ids = new HospitalDeletables();
        this.image = [];
    }
    return Hospital;
}());



/***/ }),

/***/ "./src/app/features/hospitals/hospital-form/hospital-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/features/hospitals/hospital-form/hospital-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvaWxvLWFkbWluL3NyYy9hcHAvZmVhdHVyZXMvaG9zcGl0YWxzL2hvc3BpdGFsLWZvcm0vaG9zcGl0YWwtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtBQUNaIiwiZmlsZSI6ImFwcHMvaWxvLWFkbWluL3NyYy9hcHAvZmVhdHVyZXMvaG9zcGl0YWxzL2hvc3BpdGFsLWZvcm0vaG9zcGl0YWwtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/hospitals/hospital-form/hospital-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/hospitals/hospital-form/hospital-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n\n  <form [formGroup]=\"hospitalsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\">\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"hospital\">Medical Center</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"hospital\"\n                  aria-describedby=\"Medical center\" placeholder=\"Medical center\" />\n                <div class=\"text-danger\" *ngIf=\"hospitalName.errors\">\n                  <div *ngIf=\"hospitalName.errors['required']\">\n                    Hospital Name is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"phoneNumber\">Phone Number</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\n                  placeholder=\"Phone number\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the medical canter.</small>\n                <div class=\"text-danger\" *ngIf=\"phoneNumber.errors\">\n                  <div *ngIf=\"phoneNumber.errors['required']\">\n                    Phone number is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\"></div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\" id=\"address\"\n                  aria-describedby=\"Address\" placeholder=\"Address\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the medical canter.</small>\n                <div class=\"text-danger\" *ngIf=\"address.errors\">\n                  <div *ngIf=\"address.errors['required']\">\n                    Hospital address is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"region\">Region</label>\n                <select class=\"form-control\" formControlName=\"region\" id=\"region\">\n                  <option>Addis Ababa</option>\n                  <option>Dire dawa</option>\n                  <option>Hawassa</option>\n                  <option>Bishoftu</option>\n                  <option>Nazret</option>\n                </select>\n                <div class=\"text-danger\" *ngIf=\"region.errors\">\n                  <div *ngIf=\"region.errors['required']\">\n                    Hospital region is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                  <ejs-uploader #defaultupload [autoUpload]='false'\n                [allowedExtensions]=\"'image/*'\"  name='fileupload' [files]='preLoadFiles'\n                  [multiple]='false' [asyncSettings]='path'></ejs-uploader>\n\n              </div>\n            </div>\n\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"hospitalLocale\">\n              <div *ngFor=\"\n                  let locale of hospitalLocales.controls;\n                  let i = index;\n                  let last = last\n                \" [formGroup]=\"locale\">\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">locale</label>\n                    <select class=\"form-control\" formControlName=\"locale\" id=\"locale\">\n                      <option *ngFor=\"let lang of languages; let i = index\" [value]=\"lang.ID\">{{ lang.name }}</option>\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('locale').errors\">\n                      <div *ngIf=\"locale.get('locale').errors['required']\">\n                        Hospital language is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group \">\n                    <label for=\"hospital\">Medical Center</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"hospital\"\n                      aria-describedby=\"Medical center\" placeholder=\"Medical center\" />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('name').errors\">\n                      <div *ngIf=\"locale.get('name').errors['required']\">\n                        Hospital Name is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"region\">Address</label>\n                    <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\"\n                      id=\"address\" aria-describedby=\"Address\" placeholder=\"Address\" />\n                    <small id=\"address\" class=\"form-text text-muted\">Address of the medical canter.</small>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('address').errors\">\n                      <div *ngIf=\"locale.get('address').errors['required']\">\n                        Hospital address is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button type=\"button\" (click)=\"addLocale()\" *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\" [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm rounded  btn-danger\" (click)=\"deleteLocale(i)\">\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button type=\"button\" (click)=\"addLocale()\" class=\"btn  btn-success\" *ngIf=\"hospitalLocales.length == 0\">\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button type=\"submit\" [ngClass]=\"hospitalsForm.invalid ? 'btn-danger' : 'btn-success'\" class=\"btn\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/hospitals/hospital-form/hospital-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/hospitals/hospital-form/hospital-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HospitalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalFormComponent", function() { return HospitalFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hospital_data_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hospital-data.model */ "./src/app/features/hospitals/hospital-data.model.ts");
/* harmony import */ var _hospitals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hospitals.service */ "./src/app/features/hospitals/hospitals.service.ts");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");








var HospitalFormComponent = /** @class */ (function () {
    function HospitalFormComponent(forumBuilder, activatedRoute, hospitalApi, systemConfig) {
        this.forumBuilder = forumBuilder;
        this.activatedRoute = activatedRoute;
        this.hospitalApi = hospitalApi;
        this.systemConfig = systemConfig;
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.deletedIds = [];
        this.preLoadFiles = [
            {
                name: null,
                size: null,
                type: null
            }
        ];
        this.createForm();
        this.formId = _system_api_service__WEBPACK_IMPORTED_MODULE_6__["Guid"].newGuid();
        this.path = {
            saveUrl: "http://localhost/ilo_app/backend/index.php/upload/media/english/" + this.formId,
            removeUrl: 'http://localhost/ilo_app/backend/index.php/upload/media_delete/hospital'
        };
    }
    HospitalFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hospitalId = +this.activatedRoute.snapshot.paramMap.get('hospitalId');
        if (this.hospitalId) {
            this.path.removeUrl = this.path.removeUrl.concat("/" + this.hospitalId.toString());
            this.isUpdate = true;
            this.hospitalApi
                .getHospitalById(this.hospitalId)
                .subscribe(function (data) { return _this.initializeForm(data); }, function (error) { return alert(error.message); });
        }
        this.systemConfig
            .getLanguagesList()
            .subscribe(function (lang) { return (_this.languages = lang); });
    };
    HospitalFormComponent.prototype.ngAfterViewChecked = function () {
    };
    HospitalFormComponent.prototype.createForm = function () {
        this.hospitalsForm = this.forumBuilder.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hospitalLocale: this.forumBuilder.array([])
        });
    };
    HospitalFormComponent.prototype.generateLocaleForm = function () {
        return this.forumBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    HospitalFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.hospitalLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.hospitalLocales.removeAt(index);
            }
        }
        else {
            this.hospitalLocales.removeAt(index);
        }
    };
    HospitalFormComponent.prototype.initializeForm = function (hospital) {
        var _this = this;
        this.hospitalsForm = this.forumBuilder.group({
            phoneNumber: [hospital.hospital.phone_number, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [hospital.hospital.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [hospital.hospital.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: [hospital.hospital.region, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hospitalLocale: this.forumBuilder.array([])
        });
        this.defaultUpload.clearAll();
        if (hospital.image.length) {
            this.preLoadFiles = hospital.image;
        }
        hospital.hospital_locale.map(function (locale) {
            return _this.hospitalLocales.controls.push(_this.initializeLocalesForm(locale));
        });
    };
    Object.defineProperty(HospitalFormComponent.prototype, "hospitalLocales", {
        get: function () {
            return this.hospitalsForm.get('hospitalLocale');
        },
        enumerable: true,
        configurable: true
    });
    HospitalFormComponent.prototype.initializeLocalesForm = function (locale) {
        return this.forumBuilder.group({
            id: [locale.ID],
            address: [locale.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [locale.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(HospitalFormComponent.prototype, "hospitalName", {
        get: function () {
            return this.hospitalsForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HospitalFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.hospitalsForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HospitalFormComponent.prototype, "region", {
        get: function () {
            return this.hospitalsForm.get('region');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HospitalFormComponent.prototype, "address", {
        get: function () {
            return this.hospitalsForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    HospitalFormComponent.prototype.addLocale = function () {
        this.hospitalLocales.controls.push(this.forumBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }));
    };
    HospitalFormComponent.prototype.imageUploaded = function (event) {
        var upload = event.fileData.filter(function (res) { return res.statusCode === "2"; });
        if (upload === null) {
            return;
        }
    };
    HospitalFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.defaultUpload.upload(this.defaultUpload.getFilesData());
        var hospitalData = this.prepareFormData();
        if (hospitalData) {
            if (this.isUpdate) {
                this.hospitalApi
                    .updateHospitalAddress(hospitalData)
                    .subscribe(function () { return alert('Medical Centers updated successfully'); }, function (error) { return alert(error.message); });
            }
            else {
                this.hospitalApi
                    .addHospitalAddress(hospitalData)
                    .subscribe(function (data) {
                    _this.hospitalId = data;
                    _this.isUpdate = true;
                    alert('Medical center added successfuly');
                });
            }
        }
    };
    HospitalFormComponent.prototype.prepareFormData = function () {
        var hospitalData = new _hospital_data_model__WEBPACK_IMPORTED_MODULE_4__["Hospital"]();
        if (this.hospitalsForm.valid) {
            if (this.isUpdate && this.hospitalId) {
                hospitalData.hospital = {
                    ID: this.hospitalId,
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    name: this.hospitalName.value,
                    region: this.region.value
                };
            }
            else {
                hospitalData.hospital = {
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    name: this.hospitalName.value,
                    region: this.region.value
                };
            }
            this.hospitalLocales.controls.forEach(function (element) {
                hospitalData.hospital_locale.push({
                    ID: element.value.id,
                    address: element.value.address,
                    locale: element.value.locale,
                    name: element.value.name
                });
            });
            this.deletedIds.map(function (element) {
                return hospitalData.deleted_ids.hospital_locale.push(element);
            });
            hospitalData.token = this.formId;
            return hospitalData;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultupload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["UploaderComponent"])
    ], HospitalFormComponent.prototype, "defaultUpload", void 0);
    HospitalFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-hospital-form',
            template: __webpack_require__(/*! ./hospital-form.component.html */ "./src/app/features/hospitals/hospital-form/hospital-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./hospital-form.component.css */ "./src/app/features/hospitals/hospital-form/hospital-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _hospitals_service__WEBPACK_IMPORTED_MODULE_5__["HospitalsService"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_6__["SystemApiService"]])
    ], HospitalFormComponent);
    return HospitalFormComponent;
}());



/***/ }),

/***/ "./src/app/features/hospitals/hospitals-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/hospitals/hospitals-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HospitalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsRoutingModule", function() { return HospitalsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hospitals_view_hospitals_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospitals-view/hospitals-view.component */ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.ts");
/* harmony import */ var _hospital_form_hospital_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hospital-form/hospital-form.component */ "./src/app/features/hospitals/hospital-form/hospital-form.component.ts");





var routes = [
    { path: '', component: _hospitals_view_hospitals_view_component__WEBPACK_IMPORTED_MODULE_3__["HospitalsViewComponent"] },
    { path: 'new', component: _hospital_form_hospital_form_component__WEBPACK_IMPORTED_MODULE_4__["HospitalFormComponent"] },
    { path: ':hospitalId/update', component: _hospital_form_hospital_form_component__WEBPACK_IMPORTED_MODULE_4__["HospitalFormComponent"] }
];
var HospitalsRoutingModule = /** @class */ (function () {
    function HospitalsRoutingModule() {
    }
    HospitalsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HospitalsRoutingModule);
    return HospitalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/features/hospitals/hospitals-view/hospitals-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2hvc3BpdGFscy9ob3NwaXRhbHMtdmlldy9ob3NwaXRhbHMtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/features/hospitals/hospitals-view/hospitals-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnsList\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [showColumnChooser]=\"true\"\n  [enableSearching]=\"true\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/hospitals/hospitals-view/hospitals-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HospitalsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsViewComponent", function() { return HospitalsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hospitals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hospitals.service */ "./src/app/features/hospitals/hospitals.service.ts");



var HospitalsViewComponent = /** @class */ (function () {
    function HospitalsViewComponent(hospitalApi) {
        this.hospitalApi = hospitalApi;
        this.columnsList = [
            {
                header: 'Hospital Name',
                key: 'name',
                type: 'string',
                visible: true
            },
            {
                header: 'Phonenumber',
                key: 'phone_number',
                type: 'string',
                visible: true,
                width: 100
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
    HospitalsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hospitalApi
            .getHospitalsList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    HospitalsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-hospitals-view',
            template: __webpack_require__(/*! ./hospitals-view.component.html */ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./hospitals-view.component.css */ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hospitals_service__WEBPACK_IMPORTED_MODULE_2__["HospitalsService"]])
    ], HospitalsViewComponent);
    return HospitalsViewComponent;
}());



/***/ }),

/***/ "./src/app/features/hospitals/hospitals.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/hospitals/hospitals.module.ts ***!
  \********************************************************/
/*! exports provided: HospitalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsModule", function() { return HospitalsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hospitals-routing.module */ "./src/app/features/hospitals/hospitals-routing.module.ts");
/* harmony import */ var _hospitals_view_hospitals_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hospitals-view/hospitals-view.component */ "./src/app/features/hospitals/hospitals-view/hospitals-view.component.ts");
/* harmony import */ var _hospital_form_hospital_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hospital-form/hospital-form.component */ "./src/app/features/hospitals/hospital-form/hospital-form.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _hospitals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hospitals.service */ "./src/app/features/hospitals/hospitals.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");










var HospitalsModule = /** @class */ (function () {
    function HospitalsModule() {
    }
    HospitalsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hospital_form_hospital_form_component__WEBPACK_IMPORTED_MODULE_5__["HospitalFormComponent"], _hospitals_view_hospitals_view_component__WEBPACK_IMPORTED_MODULE_4__["HospitalsViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_3__["HospitalsRoutingModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponentModule"],
                _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__["UploaderModule"]
            ],
            providers: [_hospitals_service__WEBPACK_IMPORTED_MODULE_7__["HospitalsService"]]
        })
    ], HospitalsModule);
    return HospitalsModule;
}());



/***/ }),

/***/ "./src/app/features/hospitals/hospitals.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/hospitals/hospitals.service.ts ***!
  \*********************************************************/
/*! exports provided: HospitalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsService", function() { return HospitalsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var HospitalsService = /** @class */ (function () {
    function HospitalsService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'hospitals';
    }
    HospitalsService.prototype.getHospitalById = function (hospitalId) {
        return this.httpClient.get(this.controller + "/" + hospitalId);
    };
    HospitalsService.prototype.getHospitalsList = function () {
        return this.httpClient.get("" + this.controller);
    };
    HospitalsService.prototype.addHospitalAddress = function (hospital) {
        return this.httpClient.post("" + this.controller, hospital);
    };
    HospitalsService.prototype.updateHospitalAddress = function (hospital) {
        return this.httpClient.post(this.controller + "/update/" + hospital.hospital.ID, hospital);
    };
    HospitalsService.prototype.deleteHospitalAddress = function (hospitalId) {
        var idArr = [];
        hospitalId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete", idArr);
    };
    HospitalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HospitalsService);
    return HospitalsService;
}());



/***/ })

}]);
//# sourceMappingURL=hospitals-hospitals-module.js.map
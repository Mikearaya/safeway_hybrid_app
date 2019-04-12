(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agency-agency-module"],{

/***/ "./src/app/features/agency/agency-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/agency/agency-api.service.ts ***!
  \*******************************************************/
/*! exports provided: AgencyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyApiService", function() { return AgencyApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var AgencyApiService = /** @class */ (function () {
    function AgencyApiService(httpClient) {
        this.httpClient = httpClient;
        this.httpBody = new URLSearchParams();
    }
    AgencyApiService.prototype.getAgencyById = function (agencyId) {
        return this.httpClient.get("agencies/" + agencyId);
    };
    AgencyApiService.prototype.getAgenciesList = function () {
        return this.httpClient.get("agencies");
    };
    AgencyApiService.prototype.createAgency = function (newAgency) {
        var agencyModel = this.prepareRequestBody(newAgency);
        return this.httpClient.post("agencies", newAgency);
    };
    AgencyApiService.prototype.updateAgency = function (updatedAgency) {
        return this.httpClient.post("agencies/update/" + updatedAgency.agency.ID, updatedAgency);
    };
    AgencyApiService.prototype.deleteAgency = function (indexes) {
        var idArr = [];
        indexes.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post("agencies/delete", idArr);
    };
    AgencyApiService.prototype.prepareRequestBody = function (customer) {
        var dataModel = new URLSearchParams();
        for (var key in customer) {
            if (customer.hasOwnProperty(key)) {
                var value = customer[key];
                dataModel.set(key, value);
            }
        }
        return dataModel;
    };
    AgencyApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgencyApiService);
    return AgencyApiService;
}());



/***/ }),

/***/ "./src/app/features/agency/agency-data.model.ts":
/*!******************************************************!*\
  !*** ./src/app/features/agency/agency-data.model.ts ***!
  \******************************************************/
/*! exports provided: AgencyDeleteables, Agency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyDeleteables", function() { return AgencyDeleteables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agency", function() { return Agency; });
var AgencyDeleteables = /** @class */ (function () {
    function AgencyDeleteables() {
        this.agency_locale = [];
    }
    return AgencyDeleteables;
}());

var Agency = /** @class */ (function () {
    function Agency() {
        this.image = [];
        this.agency_locale = [];
        this.deleted_ids = new AgencyDeleteables();
    }
    return Agency;
}());



/***/ }),

/***/ "./src/app/features/agency/agency-form/agency-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/agency/agency-form/agency-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2FnZW5jeS9hZ2VuY3ktZm9ybS9hZ2VuY3ktZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/agency/agency-form/agency-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/agency/agency-form/agency-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\">\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"agencyName\">Agency name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"agencyName\"\n                  aria-describedby=\"Agency name\" placeholder=\"Agency name\" />\n                <div class=\"text-danger\" *ngIf=\"agencyName.errors\">\n                  <div *ngIf=\"agencyName.errors['required']\">\n                    Agency Name is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"phoneNumber\">Phone Number</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\n                  placeholder=\"Phone number\" />\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\" id=\"address\"\n                  aria-describedby=\"Address\" placeholder=\"Address\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the Agency.</small>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"region\">Region</label>\n                <select class=\"form-control\" formControlName=\"region\" id=\"region\">\n                  <option [value]=\"1\">Addis Ababa</option>\n                  <option [value]=\"2\">Dire dawa</option>\n                  <option [value]=\"3\">Hawassa</option>\n                  <option [value]=\"4\">Bishoftu</option>\n                  <option [value]=\"5\">Nazret</option>\n                </select>\n                <div class=\"text-danger\" *ngIf=\"region.errors\">\n                  <div *ngIf=\"region.errors['required']\">\n                    Agency region is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"emailAddress\">email</label>\n                <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"emailAddress\"\n                  aria-describedby=\"email\" placeholder=\"Email address\" />\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"fax\">Fax</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"fax\" id=\"fax\" placeholder=\"Fax\" />\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <ejs-uploader #defaultupload [autoUpload]='false' [allowedExtensions]=\"'image/*'\" name='fileupload'\n                  [files]='preLoadFiles' [multiple]='false' [asyncSettings]='path'>\n                </ejs-uploader>\n              </div>\n            </div>\n\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"agencyLocales\">\n              <div *ngFor=\"\n                  let locale of agencyLocales.controls;\n                  let i = index;\n                  let last = last\n                \" [formGroup]=\"locale\">\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">locale</label>\n                    <select class=\"form-control\" formControlName=\"locale\" id=\"locale\">\n                      <option *ngFor=\"let lang of languages; let i = index\" [value]=\"lang.ID\">{{ lang.name }}</option>\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"region.errors\">\n                      <div *ngIf=\"region.errors['required']\">\n                        Language is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group \">\n                    <label for=\"name\">Agency name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\"\n                      aria-describedby=\"Agency name\" placeholder=\"Agency name\" />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('name').errors\">\n                      <div *ngIf=\"locale.get('name').errors['required']\">\n                        Agency Name is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"region\">Address</label>\n                    <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\"\n                      id=\"address\" aria-describedby=\"Address\" placeholder=\"Address\" />\n                    <small id=\"address\" class=\"form-text text-muted\">Address of the Agency.</small>\n                    <div class=\"text-danger\" *ngIf=\"address.errors\">\n                      <div *ngIf=\"address.errors['required']\">\n                        Agency address is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button type=\"button\" (click)=\"addLocale()\" *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\" [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm rounded  btn-danger\" (click)=\"deleteLocale(i)\">\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button type=\"button\" (click)=\"addLocale()\" class=\"btn  btn-success\" *ngIf=\"agencyLocales.length == 0\">\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button type=\"submit\" [disabled]=\"agencyForm.invalid\" [ngClass]=\"agencyForm.invalid ? 'btn-danger' : 'btn-success'\"\n      class=\"btn\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/agency/agency-form/agency-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/agency/agency-form/agency-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: AgencyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyFormComponent", function() { return AgencyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agency_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agency-api.service */ "./src/app/features/agency/agency-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agency_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agency-data.model */ "./src/app/features/agency/agency-data.model.ts");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");








var AgencyFormComponent = /** @class */ (function () {
    function AgencyFormComponent(agencyApi, activatedRoute, formBuilder, systemConf) {
        this.agencyApi = agencyApi;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.systemConf = systemConf;
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
        this.formId = _system_api_service__WEBPACK_IMPORTED_MODULE_4__["Guid"].newGuid();
        this.path = {
            saveUrl: "http://localhost/ilo_app/backend/index.php/upload/media/english/" + this.formId,
            removeUrl: 'http://localhost/ilo_app/backend/index.php/upload/media_delete/agency'
        };
    }
    AgencyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agencyId = +this.activatedRoute.snapshot.paramMap.get('agencyId');
        this.systemConf
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
        if (this.agencyId) {
            this.isUpdate = true;
            this.agencyApi
                .getAgencyById(this.agencyId)
                .subscribe(function (data) { return _this.initializeForm(data); });
        }
    };
    AgencyFormComponent.prototype.createForm = function () {
        this.agencyForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: [''],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fax: [''],
            email: [''],
            agencyLocales: this.formBuilder.array([])
        });
    };
    AgencyFormComponent.prototype.initializeForm = function (agency) {
        var _this = this;
        this.agencyForm = this.formBuilder.group({
            id: [agency.agency.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            name: [agency.agency.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            region: [agency.agency.region, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: [agency.agency.address],
            phoneNumber: [agency.agency.phone_number],
            fax: [agency.agency.fax],
            email: [agency.agency.email],
            agencyLocales: this.formBuilder.array([])
        });
        agency.agency_locale.map(function (local) {
            return _this.agencyLocales.controls.push(_this.initializeLocaleForm(local));
        });
        this.defaultUpload.clearAll();
        if (agency.image.length) {
            this.preLoadFiles = agency.image;
        }
    };
    AgencyFormComponent.prototype.generateLocaleForm = function () {
        return this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['']
        });
    };
    AgencyFormComponent.prototype.initializeLocaleForm = function (locale) {
        return this.formBuilder.group({
            id: [locale.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            name: [locale.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: [locale.address]
        });
    };
    Object.defineProperty(AgencyFormComponent.prototype, "agencyName", {
        get: function () {
            return this.agencyForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "region", {
        get: function () {
            return this.agencyForm.get('region');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "address", {
        get: function () {
            return this.agencyForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "fax", {
        get: function () {
            return this.agencyForm.get('fax');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.agencyForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "email", {
        get: function () {
            return this.agencyForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgencyFormComponent.prototype, "agencyLocales", {
        get: function () {
            return this.agencyForm.get('agencyLocales');
        },
        enumerable: true,
        configurable: true
    });
    AgencyFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.defaultUpload.upload(this.defaultUpload.getFilesData());
        var formData = this.prepareFormData();
        if (formData) {
            if (this.isUpdate) {
                this.agencyApi
                    .updateAgency(formData)
                    .subscribe(function () { return alert('agency updated successfuly'); }, function (error) { return alert(error.message); });
            }
            else {
                this.agencyApi.createAgency(formData).subscribe(function (data) {
                    _this.agencyId = data;
                    _this.isUpdate = true;
                    alert('Agency created successfully');
                }, function (error) {
                    alert(error.message);
                });
            }
        }
    };
    AgencyFormComponent.prototype.addLocale = function () {
        this.agencyLocales.controls.push(this.generateLocaleForm());
    };
    AgencyFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.agencyLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.agencyLocales.removeAt(index);
            }
        }
        else {
            this.agencyLocales.removeAt(index);
        }
    };
    AgencyFormComponent.prototype.prepareFormData = function () {
        var agency = new _agency_data_model__WEBPACK_IMPORTED_MODULE_6__["Agency"]();
        if (this.agencyForm.valid) {
            if (this.isUpdate && this.agencyId) {
                agency.agency = {
                    ID: this.agencyId,
                    name: this.agencyName.value,
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    email: this.email.value,
                    fax: this.fax.value,
                    region: this.region.value
                };
            }
            else {
                agency.agency = {
                    name: this.agencyName.value,
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    email: this.email.value,
                    fax: this.fax.value,
                    region: this.region.value
                };
            }
            this.agencyLocales.controls.forEach(function (element) {
                agency.agency_locale.push({
                    ID: element.value.id,
                    address: element.value.address,
                    locale: element.value.locale,
                    name: element.value.name
                });
            });
            this.deletedIds.forEach(function (element) {
                agency.deleted_ids.agency_locale.push(element);
            });
            agency.token = this.formId;
            return agency;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultupload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["UploaderComponent"])
    ], AgencyFormComponent.prototype, "defaultUpload", void 0);
    AgencyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-agency-form',
            template: __webpack_require__(/*! ./agency-form.component.html */ "./src/app/features/agency/agency-form/agency-form.component.html"),
            styles: [__webpack_require__(/*! ./agency-form.component.css */ "./src/app/features/agency/agency-form/agency-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agency_api_service__WEBPACK_IMPORTED_MODULE_2__["AgencyApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_4__["SystemApiService"]])
    ], AgencyFormComponent);
    return AgencyFormComponent;
}());



/***/ }),

/***/ "./src/app/features/agency/agency-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/agency/agency-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AgencyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyRoutingModule", function() { return AgencyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agency_view_agency_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agency-view/agency-view.component */ "./src/app/features/agency/agency-view/agency-view.component.ts");
/* harmony import */ var _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agency-form/agency-form.component */ "./src/app/features/agency/agency-form/agency-form.component.ts");





var routes = [
    { path: '', component: _agency_view_agency_view_component__WEBPACK_IMPORTED_MODULE_3__["AgencyViewComponent"] },
    { path: 'new', component: _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__["AgencyFormComponent"] },
    { path: ':agencyId/update', component: _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__["AgencyFormComponent"] }
];
var AgencyRoutingModule = /** @class */ (function () {
    function AgencyRoutingModule() {
    }
    AgencyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgencyRoutingModule);
    return AgencyRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/agency/agency-view/agency-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/features/agency/agency-view/agency-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2FnZW5jeS9hZ2VuY3ktdmlldy9hZ2VuY3ktdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/agency/agency-view/agency-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/features/agency/agency-view/agency-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnList\"\n  [showColumnChooser]=\"true\"\n  [showUpdate]=\"true\"\n  [showDelete]=\"true\"\n  [enableFilter]=\"true\"\n  [idKey]=\"'ID'\"\n  (deleteRecord)=\"deleteAgency($event)\"\n  [enableSearching]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSorting]=\"true\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/agency/agency-view/agency-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/agency/agency-view/agency-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: AgencyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyViewComponent", function() { return AgencyViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agency_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../agency-api.service */ "./src/app/features/agency/agency-api.service.ts");



var AgencyViewComponent = /** @class */ (function () {
    function AgencyViewComponent(agencyApi) {
        this.agencyApi = agencyApi;
        this.columnList = [
            {
                key: 'ID',
                width: 50,
                header: 'id',
                type: 'string'
            },
            {
                key: 'name',
                header: 'Agency name',
                type: 'string'
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
                width: 100
            },
            {
                header: 'Email',
                key: 'email',
                type: 'string',
                visible: false,
                width: 100
            },
            {
                header: 'Region',
                key: 'region',
                type: 'string',
                visible: true,
                width: 100
            },
            {
                header: 'Fax',
                key: 'fax',
                type: 'string',
                visible: false,
                width: 100
            },
            {
                header: 'Added',
                key: 'date_added',
                type: 'date',
                visible: false,
                width: 100
            },
            {
                header: 'Updated',
                key: 'date_updated',
                type: 'date',
                visible: false,
                width: 100
            }
        ];
    }
    AgencyViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agencyApi
            .getAgenciesList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    AgencyViewComponent.prototype.deleteAgency = function (agency) {
        this.agencyApi
            .deleteAgency([agency.ID])
            .subscribe(function () { return alert('agency deleted successfully'); });
    };
    AgencyViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-agency-view',
            template: __webpack_require__(/*! ./agency-view.component.html */ "./src/app/features/agency/agency-view/agency-view.component.html"),
            styles: [__webpack_require__(/*! ./agency-view.component.css */ "./src/app/features/agency/agency-view/agency-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agency_api_service__WEBPACK_IMPORTED_MODULE_2__["AgencyApiService"]])
    ], AgencyViewComponent);
    return AgencyViewComponent;
}());



/***/ }),

/***/ "./src/app/features/agency/agency.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/agency/agency.module.ts ***!
  \**************************************************/
/*! exports provided: AgencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyModule", function() { return AgencyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agency_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agency-routing.module */ "./src/app/features/agency/agency-routing.module.ts");
/* harmony import */ var _agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agency-form/agency-form.component */ "./src/app/features/agency/agency-form/agency-form.component.ts");
/* harmony import */ var _agency_view_agency_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agency-view/agency-view.component */ "./src/app/features/agency/agency-view/agency-view.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _agency_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agency-api.service */ "./src/app/features/agency/agency-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");










var AgencyModule = /** @class */ (function () {
    function AgencyModule() {
    }
    AgencyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_agency_form_agency_form_component__WEBPACK_IMPORTED_MODULE_4__["AgencyFormComponent"], _agency_view_agency_view_component__WEBPACK_IMPORTED_MODULE_5__["AgencyViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _agency_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgencyRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponentModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
                _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__["UploaderModule"]
            ],
            providers: [_agency_api_service__WEBPACK_IMPORTED_MODULE_7__["AgencyApiService"]]
        })
    ], AgencyModule);
    return AgencyModule;
}());



/***/ })

}]);
//# sourceMappingURL=agency-agency-module.js.map
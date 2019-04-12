(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergency-contacts-emergency-contacts-module"],{

/***/ "./src/app/features/emergency-contacts/emergency-contact-api.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-api.service.ts ***!
  \******************************************************************************/
/*! exports provided: EmergencyContactApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactApiService", function() { return EmergencyContactApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var EmergencyContactApiService = /** @class */ (function () {
    function EmergencyContactApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'emergency_contacts';
    }
    EmergencyContactApiService.prototype.getEmergencyContactById = function (contactId) {
        return this.httpClient.get(this.controller + "/" + contactId);
    };
    EmergencyContactApiService.prototype.getEmergencyContactssList = function () {
        return this.httpClient.get("" + this.controller);
    };
    EmergencyContactApiService.prototype.addeEmrgencyContactsAddress = function (emergencyContact) {
        return this.httpClient.post("" + this.controller, emergencyContact);
    };
    EmergencyContactApiService.prototype.updateEmergencyContactsAddress = function (emergencyContacts) {
        return this.httpClient.post(this.controller + "/update/" + emergencyContacts.emergency_contact.ID, emergencyContacts);
    };
    EmergencyContactApiService.prototype.deleteEmergencyContactsAddress = function (emergencyContactsId) {
        var idArr = [];
        emergencyContactsId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/" + emergencyContactsId, idArr);
    };
    EmergencyContactApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmergencyContactApiService);
    return EmergencyContactApiService;
}());



/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-data.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-data.model.ts ***!
  \*****************************************************************************/
/*! exports provided: EmergencyContactView, EmergencyContactModel, EmergencyContactLocaleModel, Deletables, EmergencyContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactView", function() { return EmergencyContactView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactModel", function() { return EmergencyContactModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactLocaleModel", function() { return EmergencyContactLocaleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deletables", function() { return Deletables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContact", function() { return EmergencyContact; });
var EmergencyContactView = /** @class */ (function () {
    function EmergencyContactView() {
    }
    return EmergencyContactView;
}());

var EmergencyContactModel = /** @class */ (function () {
    function EmergencyContactModel() {
    }
    return EmergencyContactModel;
}());

var EmergencyContactLocaleModel = /** @class */ (function () {
    function EmergencyContactLocaleModel() {
    }
    return EmergencyContactLocaleModel;
}());

var Deletables = /** @class */ (function () {
    function Deletables() {
        this.emergency_contact_locale = [];
    }
    return Deletables;
}());

var EmergencyContact = /** @class */ (function () {
    function EmergencyContact() {
        this.image = [];
        this.emergency_contact_locale = [];
        this.deleted_ids = new Deletables();
    }
    return EmergencyContact;
}());



/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2VtZXJnZW5jeS1jb250YWN0cy9lbWVyZ2VuY3ktY29udGFjdC1mb3JtL2VtZXJnZW5jeS1jb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"emergencyContactsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\">\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group \">\n                <label for=\"emergencyContactName\">Emergency contact</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"emergencyContactName\"\n                  aria-describedby=\"Emergency contact name\" placeholder=\"Emergency contact\" />\n                <div class=\"text-danger\" *ngIf=\"emergencyContactName.errors\">\n                  <div *ngIf=\"emergencyContactName.errors['required']\">\n                    Emergency contact Name is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"phoneNumber\">Phone Number</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\"\n                  placeholder=\"Phone number\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the Emergency contact.</small>\n                <div class=\"text-danger\" *ngIf=\"phoneNumber.errors\">\n                  <div *ngIf=\"phoneNumber.errors['required']\">\n                    Phone number is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\" id=\"address\"\n                  aria-describedby=\"Address\" placeholder=\"Address\" />\n                <small id=\"address\" class=\"form-text text-muted\">Address of the Emergency contact.</small>\n                <div class=\"text-danger\" *ngIf=\"address.errors\">\n                  <div *ngIf=\"address.errors['required']\">\n                    Hospital address is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-sm-6 form-group\">\n                <label for=\"region\">Region</label>\n                <select class=\"form-control\" formControlName=\"region\" id=\"region\">\n                  <option [value]=\"1\">Addis Ababa</option>\n                  <option [value]=\"2\">Dire dawa</option>\n                  <option [value]=\"3\">Hawassa</option>\n                  <option [value]=\"4\">Bishoftu</option>\n                  <option [value]=\"5\">Nazret</option>\n                </select>\n                <div class=\"text-danger\" *ngIf=\"region.errors\">\n                  <div *ngIf=\"region.errors['required']\">\n                    Hospital region is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <ejs-uploader #defaultupload [autoUpload]='false' (clearing)='removing($event)'\n                  (actionComplete)='imageUploaded($event)' [allowedExtensions]=\"'image/*'\" name='fileupload'\n                  [files]='preLoadFiles' [multiple]='false' [asyncSettings]='path'></ejs-uploader>\n\n              </div>\n            </div>\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"emergencyContactLocale\">\n              <div *ngFor=\"\n                  let locale of emergencyContactLocales.controls;\n                  let i = index;\n                  let last = last\n                \" [formGroup]=\"locale\">\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-3 form-group\">\n                    <label for=\"locale\">locale</label>\n                    <select class=\"form-control\" formControlName=\"locale\" id=\"locale\">\n                      <option *ngFor=\"let lang of languages; let i = index\" [value]=\"lang.ID\">{{ lang.name }}</option>\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('locale').errors\">\n                      <div *ngIf=\"locale.get('locale').errors['required']\">\n                        language is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group \">\n                    <label for=\"hospital\">Emergency contact</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"hospital\"\n                      aria-describedby=\"Emergency contact\" placeholder=\"Emergency contact\" />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('name').errors\">\n                      <div *ngIf=\"locale.get('name').errors['required']\">\n                        emergency contact Name is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"region\">Address</label>\n                    <input type=\"text\" formControlName=\"address\" formControlName=\"address\" class=\"form-control\"\n                      id=\"address\" aria-describedby=\"Address\" placeholder=\"Address\" />\n                    <small id=\"address\" class=\"form-text text-muted\">Address of the Emergency contact.</small>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('address').errors\">\n                      <div *ngIf=\"locale.get('address').errors['required']\">\n                        Emergency contact address is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button type=\"button\" (click)=\"addLocale()\" *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\" [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-sm rounded  btn-danger\" (click)=\"deleteLocale(i)\">\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button type=\"button\" (click)=\"addLocale()\" class=\"btn  btn-success\"\n                *ngIf=\"emergencyContactLocales.length == 0\">\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button type=\"submit\" [ngClass]=\"emergencyContactsForm.invalid ? 'btn-danger' : 'btn-success'\" class=\"btn\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmergencyContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactFormComponent", function() { return EmergencyContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergency_contact_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emergency-contact-api.service */ "./src/app/features/emergency-contacts/emergency-contact-api.service.ts");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _emergency_contact_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emergency-contact-data.model */ "./src/app/features/emergency-contacts/emergency-contact-data.model.ts");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");








var EmergencyContactFormComponent = /** @class */ (function () {
    function EmergencyContactFormComponent(forumBuilder, activatedRoute, emergencyContactsApi, systemConfig) {
        this.forumBuilder = forumBuilder;
        this.activatedRoute = activatedRoute;
        this.emergencyContactsApi = emergencyContactsApi;
        this.systemConfig = systemConfig;
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.preLoadFiles = [
            {
                name: null,
                size: null,
                type: null
            }
        ];
        this.deletedIds = [];
        this.createForm();
        this.formId = _system_api_service__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid();
        this.path = {
            saveUrl: "http://localhost/ilo_app/backend/index.php/upload/media/english/" + this.formId,
            removeUrl: 'http://localhost/ilo_app/backend/index.php/upload/media_delete/emergency_contact'
        };
    }
    EmergencyContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emergencyContactId = +this.activatedRoute.snapshot.paramMap.get('emergencyContactId');
        if (this.emergencyContactId) {
            this.isUpdate = true;
            this.emergencyContactsApi
                .getEmergencyContactById(this.emergencyContactId)
                .subscribe(function (data) { return _this.initializeForm(data); }, function (error) { return alert(error.message); });
        }
        this.systemConfig
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
    };
    EmergencyContactFormComponent.prototype.createForm = function () {
        this.emergencyContactsForm = this.forumBuilder.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emergencyContactLocale: this.forumBuilder.array([])
        });
    };
    EmergencyContactFormComponent.prototype.generateLocaleForm = function () {
        return this.forumBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EmergencyContactFormComponent.prototype.initializeLocaleForm = function (locale) {
        return this.forumBuilder.group({
            id: [locale.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [locale.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [locale.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EmergencyContactFormComponent.prototype.imageUploaded = function (event) {
        var upload = event.fileData.filter(function (res) { return res.statusCode === "2"; });
        if (upload === null) {
            return;
        }
    };
    EmergencyContactFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.emergencyContactLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.emergencyContactLocales.removeAt(index);
            }
        }
        else {
            this.emergencyContactLocales.removeAt(index);
        }
    };
    EmergencyContactFormComponent.prototype.initializeForm = function (emergencyContact) {
        var _this = this;
        this.emergencyContactsForm = this.forumBuilder.group({
            phoneNumber: [
                emergencyContact.emergency_contact.phone_number,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            address: [
                emergencyContact.emergency_contact.address,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ],
            name: [emergencyContact.emergency_contact.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            region: [emergencyContact.emergency_contact.region, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emergencyContactLocale: this.forumBuilder.array([])
        });
        this.defaultUpload.clearAll();
        if (emergencyContact.image.length) {
            this.preLoadFiles = emergencyContact.image;
        }
        emergencyContact.emergency_contact_locale.map(function (element) {
            return _this.emergencyContactLocales.push(_this.initializeLocaleForm(element));
        });
    };
    Object.defineProperty(EmergencyContactFormComponent.prototype, "emergencyContactLocales", {
        get: function () {
            return this.emergencyContactsForm.get('emergencyContactLocale');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmergencyContactFormComponent.prototype, "emergencyContactName", {
        get: function () {
            return this.emergencyContactsForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmergencyContactFormComponent.prototype, "phoneNumber", {
        get: function () {
            return this.emergencyContactsForm.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmergencyContactFormComponent.prototype, "region", {
        get: function () {
            return this.emergencyContactsForm.get('region');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmergencyContactFormComponent.prototype, "address", {
        get: function () {
            return this.emergencyContactsForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    EmergencyContactFormComponent.prototype.addLocale = function () {
        this.emergencyContactLocales.controls.push(this.generateLocaleForm());
    };
    EmergencyContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.defaultUpload.upload(this.defaultUpload.getFilesData());
        setInterval(function () { return console.log('uploading'); }, 1000);
        var emergencyContactData = this.prepareFormData();
        if (emergencyContactData) {
            if (this.isUpdate) {
                this.emergencyContactsApi
                    .updateEmergencyContactsAddress(emergencyContactData)
                    .subscribe(function () { return alert('Emergency contact updated successfuly'); }, function (error) { return alert(error.message); });
            }
            else {
                this.emergencyContactsApi
                    .addeEmrgencyContactsAddress(emergencyContactData)
                    .subscribe(function (data) {
                    _this.isUpdate = true;
                    _this.emergencyContactId = data;
                    alert('Emergency contact created successfuly');
                }, function (error) { return alert(error.message); });
            }
        }
    };
    EmergencyContactFormComponent.prototype.removing = function (data) {
        console.log(data);
        this.defaultUpload.refresh();
    };
    EmergencyContactFormComponent.prototype.prepareFormData = function () {
        var emergencyContact = new _emergency_contact_data_model__WEBPACK_IMPORTED_MODULE_6__["EmergencyContact"]();
        if (this.emergencyContactsForm.valid) {
            if (this.isUpdate && this.emergencyContactId) {
                emergencyContact.emergency_contact = {
                    ID: this.emergencyContactId,
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    name: this.emergencyContactName.value,
                    region: this.region.value
                };
            }
            else {
                emergencyContact.emergency_contact = {
                    phone_number: this.phoneNumber.value,
                    address: this.address.value,
                    name: this.emergencyContactName.value,
                    region: this.region.value
                };
            }
            this.emergencyContactLocales.controls.forEach(function (element) {
                emergencyContact.emergency_contact_locale.push({
                    ID: element.value.id,
                    address: element.value.address,
                    locale: element.value.locale,
                    name: element.value.name
                });
            });
            this.deletedIds.forEach(function (element) {
                emergencyContact.deleted_ids.emergency_contact_locale.push(element);
            });
            emergencyContact.token = this.formId;
            return emergencyContact;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultupload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["UploaderComponent"])
    ], EmergencyContactFormComponent.prototype, "defaultUpload", void 0);
    EmergencyContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-emergency-contact-form',
            template: __webpack_require__(/*! ./emergency-contact-form.component.html */ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.html"),
            styles: [__webpack_require__(/*! ./emergency-contact-form.component.css */ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _emergency_contact_api_service__WEBPACK_IMPORTED_MODULE_4__["EmergencyContactApiService"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_5__["SystemApiService"]])
    ], EmergencyContactFormComponent);
    return EmergencyContactFormComponent;
}());



/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2VtZXJnZW5jeS1jb250YWN0cy9lbWVyZ2VuY3ktY29udGFjdC12aWV3L2VtZXJnZW5jeS1jb250YWN0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnList\"\n  [showUpdate]=\"true\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showColumnChooser]=\"true\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmergencyContactViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactViewComponent", function() { return EmergencyContactViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emergency_contact_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emergency-contact-api.service */ "./src/app/features/emergency-contacts/emergency-contact-api.service.ts");



var EmergencyContactViewComponent = /** @class */ (function () {
    function EmergencyContactViewComponent(emergencyContactsApi) {
        this.emergencyContactsApi = emergencyContactsApi;
        this.columnList = [
            {
                key: 'id',
                width: 50,
                header: 'id',
                type: 'string'
            },
            {
                key: 'name',
                header: 'Contact name',
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
    EmergencyContactViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emergencyContactsApi
            .getEmergencyContactssList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    EmergencyContactViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-emergency-contact-view',
            template: __webpack_require__(/*! ./emergency-contact-view.component.html */ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.html"),
            styles: [__webpack_require__(/*! ./emergency-contact-view.component.css */ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_emergency_contact_api_service__WEBPACK_IMPORTED_MODULE_2__["EmergencyContactApiService"]])
    ], EmergencyContactViewComponent);
    return EmergencyContactViewComponent;
}());



/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contacts-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contacts-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EmergencyContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactsRoutingModule", function() { return EmergencyContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _emergency_contact_view_emergency_contact_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergency-contact-view/emergency-contact-view.component */ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.ts");
/* harmony import */ var _emergency_contact_form_emergency_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emergency-contact-form/emergency-contact-form.component */ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.ts");





var routes = [
    { path: '', component: _emergency_contact_view_emergency_contact_view_component__WEBPACK_IMPORTED_MODULE_3__["EmergencyContactViewComponent"] },
    { path: 'new', component: _emergency_contact_form_emergency_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyContactFormComponent"] },
    {
        path: ':emergencyContactId/update',
        component: _emergency_contact_form_emergency_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyContactFormComponent"]
    }
];
var EmergencyContactsRoutingModule = /** @class */ (function () {
    function EmergencyContactsRoutingModule() {
    }
    EmergencyContactsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmergencyContactsRoutingModule);
    return EmergencyContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/emergency-contacts/emergency-contacts.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/emergency-contacts/emergency-contacts.module.ts ***!
  \**************************************************************************/
/*! exports provided: EmergencyContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactsModule", function() { return EmergencyContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emergency_contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergency-contacts-routing.module */ "./src/app/features/emergency-contacts/emergency-contacts-routing.module.ts");
/* harmony import */ var _emergency_contact_form_emergency_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emergency-contact-form/emergency-contact-form.component */ "./src/app/features/emergency-contacts/emergency-contact-form/emergency-contact-form.component.ts");
/* harmony import */ var _emergency_contact_view_emergency_contact_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emergency-contact-view/emergency-contact-view.component */ "./src/app/features/emergency-contacts/emergency-contact-view/emergency-contact-view.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");









var EmergencyContactsModule = /** @class */ (function () {
    function EmergencyContactsModule() {
    }
    EmergencyContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_emergency_contact_form_emergency_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyContactFormComponent"], _emergency_contact_view_emergency_contact_view_component__WEBPACK_IMPORTED_MODULE_5__["EmergencyContactViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _emergency_contacts_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmergencyContactsRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponentModule"],
                _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["UploaderModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_7__["TabModule"]
            ]
        })
    ], EmergencyContactsModule);
    return EmergencyContactsModule;
}());



/***/ })

}]);
//# sourceMappingURL=emergency-contacts-emergency-contacts-module.js.map
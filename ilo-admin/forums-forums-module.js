(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forums-forums-module"],{

/***/ "./src/app/features/forums/forum-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/features/forums/forum-api.service.ts ***!
  \******************************************************/
/*! exports provided: ForumApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumApiService", function() { return ForumApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var ForumApiService = /** @class */ (function () {
    function ForumApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'forums';
        this.httpBody = new URLSearchParams();
    }
    ForumApiService.prototype.getForumById = function (hospitalId) {
        return this.httpClient.get(this.controller + "/" + hospitalId);
    };
    ForumApiService.prototype.getForumList = function () {
        return this.httpClient.get("" + this.controller);
    };
    ForumApiService.prototype.addForum = function (forum) {
        //const forumData = this.prepareRequestBody(forum);
        return this.httpClient.post("" + this.controller, forum);
    };
    ForumApiService.prototype.updateForum = function (forum) {
        // const forumData = this.prepareRequestBody(forum);
        return this.httpClient.post(this.controller + "/update/" + forum.forum.ID, forum);
    };
    ForumApiService.prototype.deleteForum = function (forumId) {
        var idArr = [];
        forumId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete/", idArr);
    };
    ForumApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ForumApiService);
    return ForumApiService;
}());



/***/ }),

/***/ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/features/forums/forum-creation-form/forum-creation-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2ZvcnVtcy9mb3J1bS1jcmVhdGlvbi1mb3JtL2ZvcnVtLWNyZWF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/features/forums/forum-creation-form/forum-creation-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"forumForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\" #tab>\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <label for=\"topic\">Forum topic</label>\n                <input\n                  type=\"text\"\n                  formControlName=\"topic\"\n                  class=\"form-control\"\n                  id=\"topic\"\n                  aria-describedby=\"Forum topic\"\n                  placeholder=\"Forum topic\"\n                />\n                <div class=\"text-danger\" *ngIf=\"topic.errors\">\n                  <div *ngIf=\"topic.errors['required']\">\n                    Forum topic is required\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"forumLocale\">\n              <div\n                *ngFor=\"\n                  let locale of forumLocales.controls;\n                  let i = index;\n                  let last = last\n                \"\n                [formGroup]=\"locale\"\n              >\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"locale\">Language</label>\n                    <select\n                      class=\"form-control\"\n                      formControlName=\"locale\"\n                      id=\"locale\"\n                    >\n                      <option\n                        *ngFor=\"let lang of languages; let i = index\"\n                        [value]=\"lang.name\"\n                        >{{ lang.name }}</option\n                      >\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.errors\">\n                      <div *ngIf=\"locale.errors['required']\">\n                        Hospital region is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-7 form-group \">\n                    <label for=\"hospital\">Emergency contact</label>\n                    <input\n                      type=\"text\"\n                      formControlName=\"name\"\n                      class=\"form-control\"\n                      id=\"hospital\"\n                      aria-describedby=\"Emergency contact\"\n                      placeholder=\"Emergency contact\"\n                    />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('name').errors\">\n                      <div *ngIf=\"locale.get('name').errors['required']\">\n                        Forum name is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-1\">\n                    <button\n                      type=\"button\"\n                      (click)=\"addLocale()\"\n                      *ngIf=\"last\"\n                      [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\"\n                      [disabled]=\"locale.invalid\"\n                      class=\"btn  btn-sm  btn-primary\"\n                    >\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-sm rounded  btn-danger\"\n                      (click)=\"deleteLocale(i)\"\n                    >\n                      <i class=\"fa fa-trash \"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button\n                type=\"button\"\n                (click)=\"addLocale()\"\n                class=\"btn  btn-success\"\n                *ngIf=\"forumLocales.length == 0\"\n              >\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button\n      type=\"submit\"\n      [disabled]=\"forumForm.invalid\"\n      [ngClass]=\"forumForm.invalid ? 'btn-danger' : 'btn-success'\"\n      class=\"btn\"\n    >\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/forums/forum-creation-form/forum-creation-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ForumCreationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCreationFormComponent", function() { return ForumCreationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _forum_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forum-api.service */ "./src/app/features/forums/forum-api.service.ts");
/* harmony import */ var _forum_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forum-data.model */ "./src/app/features/forums/forum-data.model.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");








var ForumCreationFormComponent = /** @class */ (function () {
    function ForumCreationFormComponent(forumBuilder, activatedRoute, forumApi, systemConfig) {
        this.forumBuilder = forumBuilder;
        this.activatedRoute = activatedRoute;
        this.forumApi = forumApi;
        this.systemConfig = systemConfig;
        this.deletedIds = [];
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.createForm();
    }
    ForumCreationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forumId = +this.activatedRoute.snapshot.paramMap.get('forumId');
        if (this.forumId) {
            this.isUpdate = true;
            this.forumApi
                .getForumById(this.forumId)
                .subscribe(function (data) { return _this.initializeForm(data); }, function (error) { return alert(error.message); });
        }
        this.systemConfig
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
    };
    ForumCreationFormComponent.prototype.createForm = function () {
        this.forumForm = this.forumBuilder.group({
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            forumLocale: this.forumBuilder.array([])
        });
    };
    ForumCreationFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.forumLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.forumLocales.removeAt(index);
            }
        }
        else {
            this.forumLocales.removeAt(index);
        }
    };
    ForumCreationFormComponent.prototype.initializeForm = function (forum) {
        var _this = this;
        this.forumForm = this.forumBuilder.group({
            id: [forum.forum.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            topic: [forum.forum.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            forumLocale: this.forumBuilder.array([])
        });
        forum.forum_locale.forEach(function (locale) {
            _this.forumLocales.controls.push(_this.initializeLocale(locale));
        });
    };
    ForumCreationFormComponent.prototype.generateLocale = function () {
        return this.forumBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ForumCreationFormComponent.prototype.initializeLocale = function (forum) {
        return this.forumBuilder.group({
            id: [forum.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locale: [forum.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [forum.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ForumCreationFormComponent.prototype, "forumLocales", {
        get: function () {
            return this.forumForm.get('forumLocale');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForumCreationFormComponent.prototype, "topic", {
        get: function () {
            return this.forumForm.get('topic');
        },
        enumerable: true,
        configurable: true
    });
    ForumCreationFormComponent.prototype.addLocale = function () {
        this.forumLocales.controls.push(this.generateLocale());
    };
    ForumCreationFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var emergencyContactData = this.prepareFormData();
        if (emergencyContactData) {
            if (this.isUpdate) {
                this.forumApi
                    .updateForum(emergencyContactData)
                    .subscribe(function () { return alert('Forum updated successfuly'); });
            }
            else {
                this.forumApi.addForum(emergencyContactData).subscribe(function (data) {
                    _this.isUpdate = true;
                    _this.forumId = data;
                    alert('Forum created successfully');
                });
            }
        }
    };
    ForumCreationFormComponent.prototype.prepareFormData = function () {
        var forum = new _forum_data_model__WEBPACK_IMPORTED_MODULE_6__["Forum"]();
        if (this.forumForm.valid) {
            if (this.isUpdate && this.forumId) {
                forum.forum = {
                    ID: this.forumId,
                    title: this.topic.value
                };
            }
            else {
                forum.forum = {
                    title: this.topic.value
                };
            }
            this.forumLocales.controls.forEach(function (element) {
                forum.forum_locale.push({
                    locale: element.value.locale,
                    title: element.value.name,
                    ID: element.value.id
                });
            });
            this.deletedIds.map(function (element) {
                return forum.deleted_ids.forum_locale.push(element);
            });
            return forum;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tab'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_7__["TabComponent"])
    ], ForumCreationFormComponent.prototype, "tab", void 0);
    ForumCreationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-forum-creation-form',
            template: __webpack_require__(/*! ./forum-creation-form.component.html */ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.html"),
            styles: [__webpack_require__(/*! ./forum-creation-form.component.css */ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _forum_api_service__WEBPACK_IMPORTED_MODULE_5__["ForumApiService"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_4__["SystemApiService"]])
    ], ForumCreationFormComponent);
    return ForumCreationFormComponent;
}());



/***/ }),

/***/ "./src/app/features/forums/forum-data.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/forums/forum-data.model.ts ***!
  \*****************************************************/
/*! exports provided: Forum, ForumDeletables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forum", function() { return Forum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumDeletables", function() { return ForumDeletables; });
var Forum = /** @class */ (function () {
    function Forum() {
        this.forum_locale = [];
        this.deleted_ids = new ForumDeletables();
    }
    return Forum;
}());

var ForumDeletables = /** @class */ (function () {
    function ForumDeletables() {
        this.forum_locale = [];
    }
    return ForumDeletables;
}());



/***/ }),

/***/ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/features/forums/forum-detail-view/forum-detail-view.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2ZvcnVtcy9mb3J1bS1kZXRhaWwtdmlldy9mb3J1bS1kZXRhaWwtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/features/forums/forum-detail-view/forum-detail-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled card\">\n  <li class=\"media\">\n    <div class=\"media-body\">\n      <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    </div>\n  </li>\n  <li class=\"media my-4\">\n    <div class=\"media-body\">\n      <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    </div>\n  </li>\n  <li class=\"media\">\n    <div class=\"media-body\">\n      <h5 class=\"mt-0 mb-1\">List-based media object</h5>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus\n      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/forums/forum-detail-view/forum-detail-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForumDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumDetailViewComponent", function() { return ForumDetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ForumDetailViewComponent = /** @class */ (function () {
    function ForumDetailViewComponent() {
    }
    ForumDetailViewComponent.prototype.ngOnInit = function () { };
    ForumDetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-forum-detail-view',
            template: __webpack_require__(/*! ./forum-detail-view.component.html */ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.html"),
            styles: [__webpack_require__(/*! ./forum-detail-view.component.css */ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForumDetailViewComponent);
    return ForumDetailViewComponent;
}());



/***/ }),

/***/ "./src/app/features/forums/forums-list-view/forums-list-view.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/features/forums/forums-list-view/forums-list-view.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL2ZvcnVtcy9mb3J1bXMtbGlzdC12aWV3L2ZvcnVtcy1saXN0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/forums/forums-list-view/forums-list-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/features/forums/forums-list-view/forums-list-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnList\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSorting]=\"true\"\n  (deleteRecord)=\"deleteForum($event)\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/forums/forums-list-view/forums-list-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/forums/forums-list-view/forums-list-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForumsListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsListViewComponent", function() { return ForumsListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forum_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forum-api.service */ "./src/app/features/forums/forum-api.service.ts");



var ForumsListViewComponent = /** @class */ (function () {
    function ForumsListViewComponent(forumApi) {
        this.forumApi = forumApi;
        this.columnList = [
            {
                key: 'ID',
                width: 30,
                header: 'id',
                type: 'string'
            },
            {
                key: 'title',
                header: 'Forum topic',
                type: 'string'
            },
            {
                key: 'totalCount',
                header: 'Conversations',
                type: 'number',
                width: 50
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
    ForumsListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forumApi
            .getForumList()
            .subscribe(function (data) { return (_this.data = data); });
    };
    ForumsListViewComponent.prototype.deleteForum = function (forum) {
        this.forumApi
            .deleteForum([forum.ID])
            .subscribe(function () { return alert('Forum deleted successfuly'); });
    };
    ForumsListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-forums-list-view',
            template: __webpack_require__(/*! ./forums-list-view.component.html */ "./src/app/features/forums/forums-list-view/forums-list-view.component.html"),
            styles: [__webpack_require__(/*! ./forums-list-view.component.css */ "./src/app/features/forums/forums-list-view/forums-list-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_forum_api_service__WEBPACK_IMPORTED_MODULE_2__["ForumApiService"]])
    ], ForumsListViewComponent);
    return ForumsListViewComponent;
}());



/***/ }),

/***/ "./src/app/features/forums/forums-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/forums/forums-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ForumsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsRoutingModule", function() { return ForumsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forums_list_view_forums_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forums-list-view/forums-list-view.component */ "./src/app/features/forums/forums-list-view/forums-list-view.component.ts");
/* harmony import */ var _forum_creation_form_forum_creation_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum-creation-form/forum-creation-form.component */ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.ts");
/* harmony import */ var _forum_detail_view_forum_detail_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum-detail-view/forum-detail-view.component */ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.ts");






var routes = [
    {
        path: '',
        component: _forums_list_view_forums_list_view_component__WEBPACK_IMPORTED_MODULE_3__["ForumsListViewComponent"]
    },
    {
        path: 'new',
        component: _forum_creation_form_forum_creation_form_component__WEBPACK_IMPORTED_MODULE_4__["ForumCreationFormComponent"]
    },
    {
        path: ':forumId/update',
        component: _forum_creation_form_forum_creation_form_component__WEBPACK_IMPORTED_MODULE_4__["ForumCreationFormComponent"]
    },
    {
        path: ':forumId',
        component: _forum_detail_view_forum_detail_view_component__WEBPACK_IMPORTED_MODULE_5__["ForumDetailViewComponent"]
    }
];
var ForumsRoutingModule = /** @class */ (function () {
    function ForumsRoutingModule() {
    }
    ForumsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ForumsRoutingModule);
    return ForumsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/forums/forums.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/forums/forums.module.ts ***!
  \**************************************************/
/*! exports provided: ForumsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumsModule", function() { return ForumsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forums_list_view_forums_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forums-list-view/forums-list-view.component */ "./src/app/features/forums/forums-list-view/forums-list-view.component.ts");
/* harmony import */ var _forum_creation_form_forum_creation_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum-creation-form/forum-creation-form.component */ "./src/app/features/forums/forum-creation-form/forum-creation-form.component.ts");
/* harmony import */ var _forum_detail_view_forum_detail_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forum-detail-view/forum-detail-view.component */ "./src/app/features/forums/forum-detail-view/forum-detail-view.component.ts");
/* harmony import */ var _forums_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forums-routing.module */ "./src/app/features/forums/forums-routing.module.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _forum_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum-api.service */ "./src/app/features/forums/forum-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");










var ForumsModule = /** @class */ (function () {
    function ForumsModule() {
    }
    ForumsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _forum_creation_form_forum_creation_form_component__WEBPACK_IMPORTED_MODULE_4__["ForumCreationFormComponent"],
                _forums_list_view_forums_list_view_component__WEBPACK_IMPORTED_MODULE_3__["ForumsListViewComponent"],
                _forum_detail_view_forum_detail_view_component__WEBPACK_IMPORTED_MODULE_5__["ForumDetailViewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _forums_routing_module__WEBPACK_IMPORTED_MODULE_6__["ForumsRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_7__["SharedComponentModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_9__["TabModule"]
            ],
            providers: [_forum_api_service__WEBPACK_IMPORTED_MODULE_8__["ForumApiService"]]
        })
    ], ForumsModule);
    return ForumsModule;
}());



/***/ })

}]);
//# sourceMappingURL=forums-forums-module.js.map
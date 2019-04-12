(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/features/news/news-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/features/news/news-api.service.ts ***!
  \***************************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var NewsApiService = /** @class */ (function () {
    function NewsApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'articles';
    }
    NewsApiService.prototype.getNewsById = function (id) {
        return this.httpClient.get(this.controller + "/" + id);
    };
    NewsApiService.prototype.getNewsList = function () {
        return this.httpClient.get("news");
    };
    NewsApiService.prototype.createNews = function (newNews) {
        return this.httpClient.post("" + this.controller, newNews);
    };
    NewsApiService.prototype.updateNews = function (updatedNews) {
        return this.httpClient.post(this.controller + "/update/" + updatedNews.article.ID, updatedNews);
    };
    NewsApiService.prototype.deleteNews = function (ids) {
        var _this = this;
        ids.forEach(function (id) { return _this.httpBody.append('id[]', "" + id); });
        return this.httpClient.post(this.controller + "/delete", this.httpBody.toString());
    };
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/features/news/news-data.model.ts":
/*!**************************************************!*\
  !*** ./src/app/features/news/news-data.model.ts ***!
  \**************************************************/
/*! exports provided: NewsDeletables, News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDeletables", function() { return NewsDeletables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var NewsDeletables = /** @class */ (function () {
    function NewsDeletables() {
        this.article_locale = [];
    }
    return NewsDeletables;
}());

var News = /** @class */ (function () {
    function News() {
        this.image = [];
        this.audios = [];
        this.videos = [];
        this.article_locale = [];
        this.deleted_ids = new NewsDeletables();
    }
    return News;
}());



/***/ }),

/***/ "./src/app/features/news/news-form/news-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/features/news/news-form/news-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL25ld3MvbmV3cy1mb3JtL25ld3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/news/news-form/news-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/news/news-form/news-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card shadow-lg pl-5 pr-5 md-3\">\n  <form [formGroup]=\"newsForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <ejs-tab id=\"element\">\n      <e-tabitems>\n        <e-tabitem [header]=\"headerText[0]\">\n          <ng-template #content>\n            <div class=\"row\">\n              <div class=\"col-12 form-group\">\n                <label for=\"header\">News header</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"header\" id=\"header\"\n                  placeholder=\"News header\" />\n                <small id=\"header\" class=\"form-text text-muted\">Header used as News title</small>\n                <div class=\"text-danger\" *ngIf=\"header.errors\">\n                  <div *ngIf=\"header.errors['required']\">\n                    News header is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 form-group\">\n                <label for=\"newsContent\">News content</label>\n                <textarea formControlName=\"content\" rows=\"10\" class=\"form-control\"></textarea>\n                <div class=\"text-danger\" *ngIf=\"newsContent.errors\">\n                  <div *ngIf=\"newsContent.errors['required']\">\n                    News content is required\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12  form-group \">\n                <ejs-uploader #defaultupload [autoUpload]='true' [allowedExtensions]=\"'image/*'\" name='fileupload'\n                  [files]='preLoadFiles' [multiple]='false' [asyncSettings]='path'>\n                </ejs-uploader>\n\n              </div>\n            </div>\n          </ng-template>\n        </e-tabitem>\n        <e-tabitem [header]=\"headerText[1]\">\n          <ng-template #content>\n            <div formArrayName=\"newsLocales\">\n              <div *ngFor=\"\n                  let locale of newsLocales.controls;\n                  let i = index;\n                  let last = last\n                \" [formGroup]=\"locale\">\n                <div class=\"row\" style=\"position:relative;\">\n                  <div class=\"col-12 col-sm-4 form-group\">\n                    <label for=\"locale\">Language</label>\n                    <select class=\"form-control\" formControlName=\"locale\" id=\"locale\">\n                      <option *ngFor=\"\n                          let lang of languages;\n                          let i = index;\n                          let last = last\n                        \" [value]=\"lang.ID\">{{ lang.name }}</option>\n                    </select>\n                    <div class=\"text-danger\" *ngIf=\"locale.errors\">\n                      <div *ngIf=\"locale.errors['required']\">\n                        Hospital region is required\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-12 col-sm-7 form-group \">\n                    <label for=\"header\">News header</label>\n                    <input type=\"text\" formControlName=\"header\" class=\"form-control\" id=\"header\"\n                      aria-describedby=\"News header\" placeholder=\"News header\" />\n                    <div class=\"text-danger\" *ngIf=\"locale.get('header').errors\">\n                      <div *ngIf=\"locale.get('header').errors['required']\">\n                        News header is required\n                      </div>\n                    </div>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-sm btn-primary\" *ngIf=\"last\"\n                    [ngClass]=\"locale.invalid ? 'btn-warning' : 'btn-primary'\" [disabled]=\"locale.invalid\"\n                    (click)=\"addLocale()\">\n                    <i class=\"fa fa-plus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-sm rounded  btn-danger\" (click)=\"deleteLocale(i)\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12 col-sm-12 form-group\">\n                    <label for=\"newsContent\">News content</label>\n                    <textarea formControlName=\"content\" rows=\"10\" id=\"newsContent\" class=\"form-control\"></textarea>\n                    <small id=\"address\" class=\"form-text text-muted\">Address of the Emergency contact.</small>\n                    <div class=\"text-danger\" *ngIf=\"locale.get('content').errors\">\n                      <div *ngIf=\"locale.get('content').errors['required']\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-12  form-group \">\n                    <ejs-uploader #defaultupload [autoUpload]='false' [allowedExtensions]=\"'image/*'\" name='fileupload'\n                      [files]='preLoadFiles' [multiple]='false' [asyncSettings]='path'>\n                    </ejs-uploader>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <button type=\"button\" (click)=\"addLocale()\" class=\"btn  btn-success\" *ngIf=\"newsLocales.length == 0\">\n                <i class=\"fa fa-plus \"></i>Add Language\n              </button>\n            </div>\n          </ng-template>\n        </e-tabitem>\n      </e-tabitems>\n    </ejs-tab>\n    <button type=\"submit\" [ngClass]=\"newsForm.invalid ? 'btn-danger' : 'btn-success'\" class=\"btn\">\n      Submit\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/news/news-form/news-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/news/news-form/news-form.component.ts ***!
  \****************************************************************/
/*! exports provided: NewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function() { return NewsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-api.service */ "./src/app/features/news/news-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../system-api.service */ "./src/app/system-api.service.ts");
/* harmony import */ var _news_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../news-data.model */ "./src/app/features/news/news-data.model.ts");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");








var NewsFormComponent = /** @class */ (function () {
    function NewsFormComponent(newsApi, formBuilder, activatedRoute, systemConf) {
        this.newsApi = newsApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.systemConf = systemConf;
        this.headerText = [
            { text: 'Enlish Language (default)' },
            { text: 'Other Languages' }
        ];
        this.deletedIds = [];
        this.createForm();
        this.formId = _system_api_service__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid();
        this.path = {
            saveUrl: "http://localhost/ilo_app/backend/index.php/upload/media/english/" + this.formId,
            removeUrl: 'http://localhost/ilo_app/backend/index.php/upload/media_delete/news'
        };
    }
    NewsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsId = +this.activatedRoute.snapshot.paramMap.get('newsId');
        if (this.newsId) {
            this.isUpdate = true;
            this.newsApi
                .getNewsById(this.newsId)
                .subscribe(function (data) { return _this.initializeForm(data); });
        }
        this.systemConf
            .getLanguagesList()
            .subscribe(function (data) { return (_this.languages = data); });
    };
    NewsFormComponent.prototype.createForm = function () {
        this.newsForm = this.formBuilder.group({
            header: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            audio: [''],
            image: [''],
            video: [''],
            newsLocales: this.formBuilder.array([])
        });
    };
    Object.defineProperty(NewsFormComponent.prototype, "header", {
        get: function () {
            return this.newsForm.get('header');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFormComponent.prototype, "newsContent", {
        get: function () {
            return this.newsForm.get('content');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFormComponent.prototype, "audio", {
        get: function () {
            return this.newsForm.get('audio');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFormComponent.prototype, "video", {
        get: function () {
            return this.newsForm.get('video');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFormComponent.prototype, "image", {
        get: function () {
            return this.newsForm.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFormComponent.prototype, "newsLocales", {
        get: function () {
            return this.newsForm.get('newsLocales');
        },
        enumerable: true,
        configurable: true
    });
    NewsFormComponent.prototype.addLocale = function () {
        this.newsLocales.controls.push(this.generateLocaleForm());
    };
    NewsFormComponent.prototype.deleteLocale = function (index) {
        var deletedControlId = this.newsLocales.controls[index].get('id');
        if (deletedControlId) {
            var conf = confirm('Are you sure you want to delete');
            if (conf) {
                this.deletedIds.push(deletedControlId.value);
                this.newsLocales.removeAt(index);
            }
        }
        else {
            this.newsLocales.removeAt(index);
        }
    };
    NewsFormComponent.prototype.initializeForm = function (news) {
        var _this = this;
        this.newsForm = this.formBuilder.group({
            header: [news.article.header, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [news.article.content, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            audio: [news.article.audio],
            image: [news.article.image],
            video: [news.article.video],
            newsLocales: this.formBuilder.array([])
        });
        news.article_locale.map(function (element) {
            return _this.newsLocales.push(_this.initializeLocaleForm(element));
        });
    };
    NewsFormComponent.prototype.generateLocaleForm = function () {
        return this.formBuilder.group({
            header: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            locale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    NewsFormComponent.prototype.initializeLocaleForm = function (locale) {
        return this.formBuilder.group({
            id: [locale.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            header: [locale.header, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: [locale.content, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            locale: [locale.locale, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    NewsFormComponent.prototype.submitForm = function () {
        var _this = this;
        var formData = this.prepareFormData();
        if (formData) {
            if (this.isUpdate) {
                this.newsApi
                    .updateNews(formData)
                    .subscribe(function () { return alert('News updated successfully'); }, function (error) {
                    return alert('Failed while attempting to update news try again');
                });
            }
            else {
                this.newsApi.createNews(formData).subscribe(function (data) {
                    _this.isUpdate = true;
                    _this.newsId = data;
                    alert('New created successfully');
                }, function (error) {
                    alert('Failed while creating new, try again');
                });
            }
        }
    };
    NewsFormComponent.prototype.onSubmit = function () {
        this.defaultUpload.upload(this.defaultUpload.getFilesData());
        this.submitForm();
    };
    NewsFormComponent.prototype.prepareFormData = function () {
        var news = new _news_data_model__WEBPACK_IMPORTED_MODULE_6__["News"]();
        if (this.newsForm.valid) {
            if (this.isUpdate && this.newsId) {
                news.article = {
                    ID: this.newsId,
                    header: this.header.value,
                    content: this.newsContent.value,
                    audio: this.audio.value,
                    video: this.video.value,
                    image: this.image.value
                };
            }
            else {
                news.article = {
                    header: this.header.value,
                    content: this.newsContent.value,
                    audio: this.audio.value,
                    video: this.video.value,
                    image: this.image.value
                };
            }
            this.newsLocales.controls.forEach(function (element) {
                news.article_locale.push({
                    ID: element.value.id,
                    content: element.value.content,
                    header: element.value.header,
                    locale: element.value.locale
                });
            });
            this.deletedIds.forEach(function (element) {
                news.deleted_ids.article_locale.push(element);
            });
            news.token = this.formId;
            return news;
        }
        else {
            return null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultupload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["UploaderComponent"])
    ], NewsFormComponent.prototype, "defaultUpload", void 0);
    NewsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-news-form',
            template: __webpack_require__(/*! ./news-form.component.html */ "./src/app/features/news/news-form/news-form.component.html"),
            styles: [__webpack_require__(/*! ./news-form.component.css */ "./src/app/features/news/news-form/news-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _system_api_service__WEBPACK_IMPORTED_MODULE_5__["SystemApiService"]])
    ], NewsFormComponent);
    return NewsFormComponent;
}());



/***/ }),

/***/ "./src/app/features/news/news-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/news/news-routing.module.ts ***!
  \******************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_view_news_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-view/news-view.component */ "./src/app/features/news/news-view/news-view.component.ts");
/* harmony import */ var _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-form/news-form.component */ "./src/app/features/news/news-form/news-form.component.ts");





var routes = [
    { path: '', component: _news_view_news_view_component__WEBPACK_IMPORTED_MODULE_3__["NewsViewComponent"] },
    { path: 'new', component: _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_4__["NewsFormComponent"] },
    { path: ':newsId/update', component: _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_4__["NewsFormComponent"] }
];
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/news/news-view/news-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/features/news/news-view/news-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL25ld3MvbmV3cy12aWV3L25ld3Mtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/news/news-view/news-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features/news/news-view/news-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [columnsList]=\"columnsList\"\n  [data]=\"data\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"true\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSearching]=\"true\"\n  [enableSorting]=\"true\"\n  [idKey]=\"'ID'\"\n  [showColumnChooser]=\"true\"\n  (deleteRecord)=\"deleteNews($event)\"\n></bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/news/news-view/news-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/news/news-view/news-view.component.ts ***!
  \****************************************************************/
/*! exports provided: NewsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsViewComponent", function() { return NewsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-api.service */ "./src/app/features/news/news-api.service.ts");



var NewsViewComponent = /** @class */ (function () {
    function NewsViewComponent(newsApi) {
        this.newsApi = newsApi;
        this.data = [];
        this.columnsList = [
            {
                key: 'ID',
                width: 30,
                header: 'id',
                type: 'string',
                visible: false
            },
            {
                key: 'header',
                header: 'News header',
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
    NewsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsApi.getNewsList().subscribe(function (data) { return (_this.data = data); });
    };
    NewsViewComponent.prototype.deleteNews = function (data) {
        this.newsApi
            .deleteNews(data.ID)
            .subscribe(function () { return alert('News deleted successfully'); }, function (error) {
            return alert('failed while attempting to delete news try again');
        });
    };
    NewsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bionic-news-view',
            template: __webpack_require__(/*! ./news-view.component.html */ "./src/app/features/news/news-view/news-view.component.html"),
            styles: [__webpack_require__(/*! ./news-view.component.css */ "./src/app/features/news/news-view/news-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]])
    ], NewsViewComponent);
    return NewsViewComponent;
}());



/***/ }),

/***/ "./src/app/features/news/news.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/news/news.module.ts ***!
  \**********************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/features/news/news-routing.module.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _news_view_news_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-view/news-view.component */ "./src/app/features/news/news-view/news-view.component.ts");
/* harmony import */ var _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-form/news-form.component */ "./src/app/features/news/news-form/news-form.component.ts");
/* harmony import */ var _news_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-api.service */ "./src/app/features/news/news-api.service.ts");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "../../node_modules/@syncfusion/ej2-angular-navigations/index.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "../../node_modules/@syncfusion/ej2-angular-inputs/index.js");










var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_6__["NewsFormComponent"], _news_view_news_view_component__WEBPACK_IMPORTED_MODULE_5__["NewsViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
                _bionic_shared_component__WEBPACK_IMPORTED_MODULE_4__["SharedComponentModule"],
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
                _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_9__["UploaderModule"]
            ],
            providers: [_news_api_service__WEBPACK_IMPORTED_MODULE_7__["NewsApiService"]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map
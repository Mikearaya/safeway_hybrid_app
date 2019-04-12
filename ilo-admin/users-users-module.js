(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/features/users/password-change-form/password-change-form.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/features/users/password-change-form/password-change-form.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvaWxvLWFkbWluL3NyYy9hcHAvZmVhdHVyZXMvdXNlcnMvcGFzc3dvcmQtY2hhbmdlLWZvcm0vcGFzc3dvcmQtY2hhbmdlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL3Bhc3N3b3JkLWNoYW5nZS1mb3JtL3Bhc3N3b3JkLWNoYW5nZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/users/password-change-form/password-change-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/users/password-change-form/password-change-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container card\">\n  <form [formGroup]=\"passwordChangeForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <label for=\"currentPassword\" i18n>Current password</label>\n      <div class=\"col-12 form-group\">\n        <input\n          type=\"password\"\n          formControlName=\"currentPassword\"\n          i18n-placeholder\n          class=\"form-control\"\n          id=\"currentPassword\"\n          name=\"currentPassword\"\n          placeholder=\"Current password\"\n        />\n        <div class=\"e-error\" *ngIf=\"currentPassword.errors\">\n          <div *ngIf=\"currentPassword.errors['required']\" i18n>\n            Current password is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"newPassword\" i18n>New password</label>\n      <div class=\"form-group col-12\">\n        <input\n          type=\"password\"\n          formControlName=\"newPassword\"\n          i18n-placeholder\n          class=\"form-control\"\n          id=\"newPassword\"\n          name=\"newPassword\"\n          placeholder=\"New password\"\n        />\n        <div class=\"e-error\" *ngIf=\"newPassword.errors\">\n          <div *ngIf=\"newPassword.errors['required']\" i18n>\n            New password is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"confirmedPassword\" i18n>New password confirmation</label>\n      <div class=\"col-12 form-group\">\n        <input\n          type=\"password\"\n          formControlName=\"confirmedPassword\"\n          i18n-placeholder\n          class=\"form-control\"\n          id=\"confirmedPassword\"\n          name=\"confirmedPassword\"\n          placeholder=\"New password confirmation\"\n        />\n        <div class=\"e-error\" *ngIf=\"confirmedPassword.errors\">\n          <div *ngIf=\"confirmedPassword.errors['required']\" i18n>\n            New password confirmation password is required\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <app-form-options\n      [submitDisabled]=\"passwordChangeForm.invalid\"\n    ></app-form-options>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/features/users/password-change-form/password-change-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/users/password-change-form/password-change-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PasswordChangeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeFormComponent", function() { return PasswordChangeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-api.service */ "./src/app/features/users/user-api.service.ts");





var PasswordChangeFormComponent = /** @class */ (function () {
    function PasswordChangeFormComponent(userApi, formBuilder, activatedRoute) {
        this.userApi = userApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.createForm();
    }
    PasswordChangeFormComponent.prototype.ngOnInit = function () {
        this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    };
    PasswordChangeFormComponent.prototype.createForm = function () {
        this.passwordChangeForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmedPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(PasswordChangeFormComponent.prototype, "currentPassword", {
        get: function () {
            return this.passwordChangeForm.get('currentPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordChangeFormComponent.prototype, "newPassword", {
        get: function () {
            return this.passwordChangeForm.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordChangeFormComponent.prototype, "confirmedPassword", {
        get: function () {
            return this.passwordChangeForm.get('confirmedPassword');
        },
        enumerable: true,
        configurable: true
    });
    PasswordChangeFormComponent.prototype.onSubmit = function () {
        var formData = this.prepareFormData();
        /*  if (formData) {
          this.userApi.updateUser(formData).subscribe(
            () => {
              alert('Password updated successfuly');
              this.passwordChangeForm.reset();
            },
            (error) => {
              alert(error.message);
            }
          );
        } else {
          alert('One or more required fields missing');
        } */
    };
    PasswordChangeFormComponent.prototype.prepareFormData = function () {
        if (this.passwordChangeForm.valid) {
            return {
                id: this.userId,
                currentPassword: this.currentPassword.value,
                newPassword: this.newPassword.value,
                confirmedPassword: this.confirmedPassword.value
            };
        }
        else {
            return null;
        }
    };
    PasswordChangeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-change-form',
            template: __webpack_require__(/*! ./password-change-form.component.html */ "./src/app/features/users/password-change-form/password-change-form.component.html"),
            styles: [__webpack_require__(/*! ./password-change-form.component.css */ "./src/app/features/users/password-change-form/password-change-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PasswordChangeFormComponent);
    return PasswordChangeFormComponent;
}());



/***/ }),

/***/ "./src/app/features/users/user-api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/features/users/user-api.service.ts ***!
  \****************************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");



var UserApiService = /** @class */ (function () {
    function UserApiService(httpClient) {
        this.httpClient = httpClient;
        this.controller = 'users';
    }
    UserApiService.prototype.getUserById = function (userId) {
        return this.httpClient.get(this.controller + "/" + userId);
    };
    UserApiService.prototype.getAllUsers = function () {
        return this.httpClient.get("" + this.controller);
    };
    UserApiService.prototype.createUser = function (newUser) {
        return this.httpClient.post("" + this.controller, newUser);
    };
    UserApiService.prototype.updateUser = function (updatedUser) {
        return this.httpClient.post(this.controller + "/update/" + updatedUser.user.ID, updatedUser);
    };
    UserApiService.prototype.deleteUser = function (userId) {
        var idArr = [];
        userId.forEach(function (id) { return idArr.push({ id: "" + id }); });
        return this.httpClient.post(this.controller + "/delete", idArr);
    };
    UserApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserApiService);
    return UserApiService;
}());



/***/ }),

/***/ "./src/app/features/users/user-form/user-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/features/users/user-form/user-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#userName {\n  width: 30%;\n}\n\nsection {\n  padding: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvaWxvLWFkbWluL3NyYy9hcHAvZmVhdHVyZXMvdXNlcnMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImFwcHMvaWxvLWFkbWluL3NyYy9hcHAvZmVhdHVyZXMvdXNlcnMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXJOYW1lIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/users/user-form/user-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/users/user-form/user-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\n  <form id=\"reactive\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6 form-group\">\n          <label for=\"username\">Username</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"userName\"\n            id=\"username\"\n            placeholder=\"Username\"\n          />\n        </div>\n        <div class=\"col-sm-12 col-md-6 form-group\">\n          <label for=\"Fullname\">Fullname</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"fullName\"\n            id=\"Fullname\"\n            placeholder=\"Fullname\"\n          />\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!isUpdate\">\n        <div class=\"col-12 form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            formControlName=\"password\"\n            id=\"password\"\n            placeholder=\"Password\"\n          />\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn  btn-success\">Submit</button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/features/users/user-form/user-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/users/user-form/user-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-api.service */ "./src/app/features/users/user-api.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.model */ "./src/app/features/users/user.model.ts");







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(userApi, formBuilder, activatedRoute, location) {
        this.userApi = userApi;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.rolesList = [];
        this.usersForm();
        this.roleFields = { text: 'name', value: 'id' };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user is from route parameter if it exists
        this.userId = +this.activatedRoute.snapshot.paramMap.get('userId');
        this.isUpdate = false;
        if (this.userId) {
            // if user id exist get value and initialize form
            this.isUpdate = true;
            this.userApi
                .getUserById(this.userId)
                .subscribe(function (user) { return _this.initilizeForm(user); });
        }
    };
    // ─── INTIALIZING USERS FORM ─────────────
    UserFormComponent.prototype.usersForm = function () {
        this.userForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UserFormComponent.prototype.initilizeForm = function (user) {
        this.userForm = this.formBuilder.group({
            id: [user.user.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: [user.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullName: [user.user.fullname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(UserFormComponent.prototype, "userName", {
        get: function () {
            return this.userForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "password", {
        get: function () {
            return this.userForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "fullName", {
        get: function () {
            return this.userForm.get('fullName');
        },
        enumerable: true,
        configurable: true
    });
    UserFormComponent.prototype.prepareFormData = function () {
        var userData = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        if (this.userForm.valid) {
            userData.user = {
                ID: this.userId,
                username: this.userName.value,
                fullname: this.fullName.value,
                password: this.password.value
            };
            return userData;
        }
        return null;
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.prepareFormData();
        if (data) {
            if (this.userId && data != null) {
                this.userApi.updateUser(data).subscribe(function () {
                    alert('User Updated Successfuly!!!');
                    _this.userForm.reset();
                }, function (error) {
                    alert('Error Occured while attempting to create user try again later!!!');
                });
            }
            else {
                this.userApi.createUser(data).subscribe(function () {
                    alert('User Created Successfuly!!!');
                    _this.userForm.reset();
                }, function (error) {
                    alert('Unknown Error Occured while updating user data, try again later');
                });
            }
        }
    };
    UserFormComponent.prototype.onDelete = function () {
        if (this.userId) {
            this.userApi.deleteUser([this.userId]).subscribe(function () {
                alert('User Deleted successfuly');
            }, function (error) {
                alert('Unable to delete user, please try again later');
            });
        }
    };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/features/users/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/features/users/user-form/user-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_api_service__WEBPACK_IMPORTED_MODULE_5__["UserApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/features/users/user-view/user-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/features/users/user-view/user-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2lsby1hZG1pbi9zcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/features/users/user-view/user-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/users/user-view/user-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bionic-data-grid-view\n  [data]=\"data\"\n  [columnsList]=\"columnBluePrint\"\n  [idKey]=\"'ID'\"\n  [showDelete]=\"true\"\n  [showUpdate]=\"false\"\n  [enableFilter]=\"true\"\n  [enablePaging]=\"true\"\n  [enableSorting]=\"true\"\n  (deleteRecord)=\"deleteUser($event)\"\n>\n</bionic-data-grid-view>\n"

/***/ }),

/***/ "./src/app/features/users/user-view/user-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/users/user-view/user-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "../../node_modules/@syncfusion/ej2-angular-grids/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-api.service */ "./src/app/features/users/user-api.service.ts");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../authorization.service */ "./src/app/authorization.service.ts");






var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(userApi, router, activatedRoute, authService) {
        this.userApi = userApi;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.columnBluePrint = [
            {
                key: 'id',
                header: 'ID',
                visible: false,
                type: 'string',
                width: 40
            },
            {
                key: 'username',
                header: 'UserName',
                visible: true,
                type: 'string'
            },
            {
                key: 'fullname',
                header: 'Phonenumber',
                visible: true,
                type: 'string',
                width: 100
            },
            {
                key: 'email',
                header: 'E-mail',
                visible: true,
                type: 'string',
                width: 100
            }
        ];
    }
    UserViewComponent.prototype.dataBound = function () { };
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.readToken();
        this.userApi
            .getAllUsers()
            .subscribe(function (userView) { return (_this.data = userView); });
    };
    UserViewComponent.prototype.deleteUser = function (args) {
        var _this = this;
        this.userApi.deleteUser(args.ID).subscribe(function () {
            alert('User deleted');
            _this.grid.deleteRecord();
        }, function (error) {
            alert('Unable to Delete User');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('grid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_2__["GridComponent"])
    ], UserViewComponent.prototype, "grid", void 0);
    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/features/users/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/features/users/user-view/user-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/features/users/user.model.ts":
/*!**********************************************!*\
  !*** ./src/app/features/users/user.model.ts ***!
  \**********************************************/
/*! exports provided: UserViewModel, UserModel, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var UserViewModel = /** @class */ (function () {
    function UserViewModel() {
    }
    return UserViewModel;
}());

var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/features/users/users-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/users/users-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-view/user-view.component */ "./src/app/features/users/user-view/user-view.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/features/users/user-form/user-form.component.ts");
/* harmony import */ var _password_change_form_password_change_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-change-form/password-change-form.component */ "./src/app/features/users/password-change-form/password-change-form.component.ts");






var routes = [
    {
        path: '',
        component: _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_3__["UserViewComponent"],
        data: {
            title: 'Users',
            breadCrum: ''
        }
    },
    {
        path: 'password-update',
        component: _password_change_form_password_change_form_component__WEBPACK_IMPORTED_MODULE_5__["PasswordChangeFormComponent"],
        data: { title: 'Create user', breadCrum: 'Create' }
    },
    {
        path: 'new',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
        data: { title: 'Create user', breadCrum: 'Create' }
    },
    {
        path: ':userId/update',
        component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
        data: { title: 'Update user', breadCrum: 'Update' }
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/users/users.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/users/users.module.ts ***!
  \************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/features/users/users-routing.module.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/features/users/user-form/user-form.component.ts");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-view/user-view.component */ "./src/app/features/users/user-view/user-view.component.ts");
/* harmony import */ var _password_change_form_password_change_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-change-form/password-change-form.component */ "./src/app/features/users/password-change-form/password-change-form.component.ts");
/* harmony import */ var _bionic_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bionic/shared-component */ "../../libs/shared-component/src/index.ts");
/* harmony import */ var _user_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-api.service */ "./src/app/features/users/user-api.service.ts");









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"],
                _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_5__["UserViewComponent"],
                _password_change_form_password_change_form_component__WEBPACK_IMPORTED_MODULE_6__["PasswordChangeFormComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bionic_shared_component__WEBPACK_IMPORTED_MODULE_7__["SharedComponentModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]],
            providers: [_user_api_service__WEBPACK_IMPORTED_MODULE_8__["UserApiService"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map
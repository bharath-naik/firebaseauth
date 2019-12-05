"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var authorization_service_1 = require("../../services/authorization.service");
var forms_1 = require("@angular/forms");
var basic_page_1 = require("../basic/basic.page");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(view, authorizationService, userService, route) {
        var _this = _super.call(this, view) || this;
        _this.view = view;
        _this.authorizationService = authorizationService;
        _this.userService = userService;
        _this.route = route;
        _this.dataForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])),
            firstname: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ])),
            lastname: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ]))
        });
        return _this;
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    /**
     * Register the user in the database
     */
    SignupPage.prototype.signUp = function () {
        var _this = this;
        this.beginProcessingWithLoading();
        this.authorizationService.signUp(this.dataForm.get("email").value, this.dataForm.get("password").value).then(function (response) {
            _this.authorizationService.getUserSesion().then(function (data) {
                //Get the user sesion
                if (data !== null) {
                    var user = {
                        uid: data.uid,
                        firstname: _this.dataForm.get("firstname").value,
                        lastname: _this.dataForm.get("lastname").value,
                        email: _this.dataForm.get("email").value,
                        active: true
                    };
                    //Create the user
                    _this.userService.createUser(user).then(function (response) {
                        _this.endProcessingWithLoading();
                        _this.route.navigateByUrl(_this.VIEWHOME);
                    }).catch(function (error) {
                        _this.endProcessingWithLoading();
                        _this.showAlert(error.message);
                    });
                }
            });
        }).catch(function (error) {
            _this.endProcessingWithLoading();
            _this.getError(error);
            console.log("Error registrando el usuario");
        });
    };
    SignupPage.prototype.resetForm = function () {
        this.dataForm.reset();
    };
    SignupPage = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            authorization_service_1.AuthorizationService,
            user_service_1.UserService,
            router_1.Router])
    ], SignupPage);
    return SignupPage;
}(basic_page_1.BasicPage));
exports.SignupPage = SignupPage;
//# sourceMappingURL=signup.page.js.map
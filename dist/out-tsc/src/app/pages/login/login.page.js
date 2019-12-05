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
var forms_1 = require("@angular/forms");
var authorization_service_1 = require("../../services/authorization.service");
var basic_page_1 = require("../basic/basic.page");
var router_1 = require("@angular/router");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(view, authorizationService, route) {
        var _this = _super.call(this, view) || this;
        _this.view = view;
        _this.authorizationService = authorizationService;
        _this.route = route;
        _this.dataForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required
            ])),
            password: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.required
            ]))
        });
        return _this;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /**
     * Login user
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        console.debug("Login with email and password");
        this.beginProcessingWithLoading();
        this.authorizationService.login(this.dataForm.get("email").value, this.dataForm.get("password").value).then(function (result) {
            _this.endProcessingWithLoading();
            _this.resetForm();
            _this.route.navigateByUrl(_this.VIEWHOME);
        }).catch(function (error) {
            _this.endProcessingWithLoading();
            _this.getError(error);
        });
    };
    LoginPage.prototype.resetForm = function () {
        this.dataForm.reset();
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            authorization_service_1.AuthorizationService,
            router_1.Router])
    ], LoginPage);
    return LoginPage;
}(basic_page_1.BasicPage));
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map
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
var basic_page_1 = require("../pages/basic/basic.page");
var authorization_service_1 = require("../services/authorization.service");
var router_1 = require("@angular/router");
var sesion_service_1 = require("../services/sesion.service");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(view, authorizationService, sesionService, route) {
        var _this = _super.call(this, view) || this;
        _this.view = view;
        _this.authorizationService = authorizationService;
        _this.sesionService = sesionService;
        _this.route = route;
        return _this;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.authorizationService.getUserSesion().then(function (user) {
            _this.user = user;
        }, function (error) {
            console.log("Error intentando recuperar el usuario");
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authorizationService.logout().then(function (result) {
            _this.route.navigateByUrl("login");
            _this.user == null;
        }).catch(function (error) {
            _this.showAlert(error);
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            authorization_service_1.AuthorizationService,
            sesion_service_1.SesionService,
            router_1.Router])
    ], HomePage);
    return HomePage;
}(basic_page_1.BasicPage));
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map
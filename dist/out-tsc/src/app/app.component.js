"use strict";
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
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var core_2 = require("@ngx-translate/core");
var router_1 = require("@angular/router");
var authorization_service_1 = require("./services/authorization.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, translate, authorizationService, route) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.authorizationService = authorizationService;
        this.route = route;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang("en");
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use("en");
        //Get user session
        this.authorizationService.getSesionChange().subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.setPages();
            }
            else {
                _this.appPages = null;
            }
        });
    };
    AppComponent.prototype.setPages = function () {
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Properties',
                url: '/list',
                icon: 'list'
            }
        ];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [angular_1.Platform,
            ngx_1.SplashScreen,
            ngx_2.StatusBar,
            core_2.TranslateService,
            authorization_service_1.AuthorizationService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
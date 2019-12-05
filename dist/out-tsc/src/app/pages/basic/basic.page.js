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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var core_2 = require("@ngx-translate/core");
var authorization_service_1 = require("../../services/authorization.service");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var BasicPage = /** @class */ (function () {
    function BasicPage(view) {
        var _this = this;
        this.view = view;
        this.urlParameters = [];
        this.VIEWHOME = "home";
        this.alertCtrl = this.view.injector.get(angular_1.AlertController);
        this.loadingCtrl = this.view.injector.get(angular_1.LoadingController);
        this.translateService = this.view.injector.get(core_2.TranslateService);
        this.translateService.get("alert.title").subscribe(function (val) { return _this.title = val; });
    }
    /**
     * displays a request dialog box to select yes or no
     */
    // showConfirmDelete() {
    //     var promise = new Promise((resolve, reject) => {
    //         const confirm = this.alertCtrl.create({
    //             title: 'Confirmación de eliminación',
    //             message: '¿Desea eliminar el valor seleccionado?',
    //             buttons: [
    //               {
    //                 text: 'No',
    //                 handler: () => {
    //                     resolve(false);
    //                 }
    //               },
    //               {
    //                 text: 'Si',
    //                 handler: () => {
    //                     resolve(true);
    //                 }
    //               }
    //             ]
    //           });
    //         confirm.present();
    //       });
    //     return promise;
    // }
    /**
     * Muestra una alerta al usuario
     * @param msg mensaje a mostrar. El título es "Información"
     */
    BasicPage.prototype.showAlert = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.title,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/, alert];
                }
            });
        });
    };
    /**
     * Show the message alert by looking for the text in the translation document
     * @param codeMsg code to find in the translation document
     */
    BasicPage.prototype.showAlertByCode = function (codeMsg) {
        var _this = this;
        this.translateService.get(codeMsg).subscribe(function (val) {
            _this.showAlert(val);
        });
    };
    // showAlertWithOutButton(msg: string) {
    //     const alert = this.alertCtrl.create({
    //         title: this.title,
    //         subTitle: msg
    //     });
    //     alert.present();
    //     return alert;
    // }
    /**
    * Muestra la ventana de carga con el mensaje "Por favor espere, se está procesando su solicitud..."
    */
    BasicPage.prototype.showLoading = function () {
        var _this = this;
        this.translateService.get("alert.wait").subscribe(function (val) {
            _this.showLoadingText(val);
        });
    };
    /**
     * Muestra la ventana de carga con el mensaje recibido.
     * @param msg mensaje que se desea mostrar
     */
    BasicPage.prototype.showLoadingText = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: msg,
                                duration: 10000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    BasicPage.prototype.hideLoading = function () {
        if (this.loading != null)
            this.loading.dismiss();
    };
    BasicPage.prototype.beginProcessing = function () {
        this.processing = true;
    };
    BasicPage.prototype.beginProcessingWithLoading = function () {
        this.processing = true;
        this.showLoading();
    };
    BasicPage.prototype.endProcessing = function () {
        this.processing = false;
    };
    BasicPage.prototype.endProcessingWithLoading = function () {
        this.processing = false;
        this.hideLoading();
    };
    BasicPage.prototype.isProcessing = function () {
        return this.processing;
    };
    /**
     * Obtiene los parámetros que vienen por el URL
     */
    BasicPage.prototype.getParamsByURL = function () {
        if (document.URL.indexOf("?") > 0) {
            var splitURL = document.URL.split("?");
            var splitParams = splitURL[1].split("&");
            var i = void 0;
            for (i in splitParams) {
                var singleURLParam = splitParams[i].split('=');
                var urlParameter = {
                    'name': singleURLParam[0],
                    'value': singleURLParam[1]
                };
                this.urlParameters.push(urlParameter);
            }
        }
    };
    BasicPage.prototype.getParam = function (key) {
        console.log(this.urlParameters);
        var object = this.urlParameters.filter(function (obj) {
            return obj.name === key;
        });
        return object.length > 0 ? object[0].value : null;
    };
    /**
     * Try to find the right message in the translate document. Can receive and text or and objet error.code, error.message
     * @param error string or objet of type error rest.
     */
    BasicPage.prototype.getError = function (error) {
        var _this = this;
        console.log("Error", error);
        if (error && (typeof error === "string" || error.code)) {
            var code = typeof error === "string" ? error : error.code !== "undefined" ? error.code : "alert.error";
        }
        this.translateService.get(code).subscribe(function (val) {
            if (code == val) {
                if (error.code !== "undefined" && error.message.length > 0)
                    _this.showAlert(error.message);
            }
            else {
                _this.endProcessingWithLoading();
                _this.showAlert(val);
            }
        });
    };
    /**
     * Retorna verdadero si el valor es nulo o blanco
     * @param val valor a evaluar.
     */
    BasicPage.prototype.isNullOrBlank = function (name, val) {
        console.log("Evaluando", name, val === null || val === "" || typeof val === "undefined");
        return val === null || val === "" || typeof val === "undefined" ? true : false;
    };
    /**
     * Create an account with google credencials
     */
    BasicPage.prototype.signUpWithGoogle = function () {
        var _this = this;
        console.log("SignIn with google");
        var authorizationService;
        var userService;
        var router;
        authorizationService = this.view.injector.get(authorization_service_1.AuthorizationService);
        userService = this.view.injector.get(user_service_1.UserService);
        router = this.view.injector.get(router_1.Router);
        authorizationService.signInWithGoogle().then(function (result) {
            var objProfile = result.additionalUserInfo.profile;
            //If the user is new then create a new one
            if (result.additionalUserInfo.isNewUser) {
                var user = {
                    uid: result.user.uid,
                    firstname: objProfile.given_name,
                    lastname: objProfile.family_name,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    active: true
                };
                userService.createUser(user).then(function (response) {
                    router.navigateByUrl(_this.VIEWHOME);
                    _this.endProcessingWithLoading();
                }).catch(function (error) {
                    _this.endProcessingWithLoading();
                    _this.showAlert(error.message);
                });
            }
            else {
                router.navigateByUrl(_this.VIEWHOME);
            }
        }).catch(function (error) {
            console.log("Error registrando el usuario con google", error);
            _this.endProcessingWithLoading();
            _this.showAlertByCode("signup.errorwithgoogle");
        });
    };
    BasicPage.prototype.signUpWithFacebook = function () {
        var _this = this;
        console.debug("SignUp with facebook");
        var authorizationService;
        var userService;
        authorizationService = this.view.injector.get(authorization_service_1.AuthorizationService);
        userService = this.view.injector.get(user_service_1.UserService);
        var router;
        router = this.view.injector.get(router_1.Router);
        authorizationService.signInWithFacebook().then(function (result) {
            var objProfile = result.additionalUserInfo.profile;
            //If the user is new then create a new one
            if (result.additionalUserInfo.isNewUser) {
                var user = {
                    uid: result.user.uid,
                    firstname: objProfile.first_name,
                    lastname: objProfile.last_name,
                    email: result.user.email,
                    photo: result.user.photoURL,
                    active: true
                };
                userService.createUser(user).then(function (response) {
                    router.navigateByUrl(_this.VIEWHOME);
                    _this.endProcessingWithLoading();
                }).catch(function (error) {
                    _this.endProcessingWithLoading();
                    _this.showAlert(error.message);
                });
            }
            else {
                router.navigateByUrl(_this.VIEWHOME);
            }
        }).catch(function (error) {
            _this.showAlertByCode("signup.errorwithfacebook");
            console.log("Error registrando el usuario con facebook");
        });
    };
    BasicPage = __decorate([
        core_1.Component({
            selector: 'app-basic',
            templateUrl: './basic.page.html',
            styleUrls: ['./basic.page.scss'],
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef])
    ], BasicPage);
    return BasicPage;
}());
exports.BasicPage = BasicPage;
//# sourceMappingURL=basic.page.js.map
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
var auth_1 = require("@angular/fire/auth/auth");
var firebase = require("firebase/app");
var sesion_service_1 = require("./sesion.service");
var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(angularFireAuth, sesionService) {
        this.angularFireAuth = angularFireAuth;
        this.sesionService = sesionService;
    }
    /**
    * Login an user with email and passowrd using firebase
    * @param email user email
    * @param password user password
    */
    AuthorizationService.prototype.login = function (email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password).then(function (result) {
                //Create the sesion
                _this.createSession(result);
                resolve(result);
            }).catch(function (error) {
                console.log("Caching error in login");
                reject(error);
            });
        });
        return promise;
    };
    /**
     * Register the user session
     * @param data result of login or signIn
     */
    AuthorizationService.prototype.createSession = function (data) {
        //Create the sesion
        console.log("Creating session..");
        this.sesionService.createSesion(data).then(function (result) {
            console.log("Session create successful");
        }).catch(function (error) {
            console.log("Error to create the session");
        });
    };
    /**
     * Signup an user with email and passowrd using firebase
     * @param email user email
     * @param password user password
     */
    AuthorizationService.prototype.signUp = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    /**
     * Return the user session in a promise
     */
    AuthorizationService.prototype.getUserSesion = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.onAuthStateChanged(function (user) {
                resolve(user != null ? user : null);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    AuthorizationService.prototype.getSesionChange = function () {
        return this.angularFireAuth.authState;
    };
    // public getUid(){
    //   if (!this.userSesion){
    //   }
    //   this.getUserSesion().subscribe(data=>{
    //     this.userSesion.email = data.email;
    //     this.userSesion.id = data.uid;
    //   });
    // }
    AuthorizationService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        return this.oauthSignIn(provider);
    };
    AuthorizationService.prototype.signInWithFacebook = function () {
        console.log('Sign in with facebook');
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('public_profile');
        return this.oauthSignIn(provider);
    };
    AuthorizationService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        console.log("Proveedor para el login...", provider);
        var promise = new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.signInWithPopup(provider).then(function (result) {
                _this.createSession(result);
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
        return promise;
        // if (!(<any>window).cordova) {
        //   console.log("Entrando a signInWithPopup");
        //   return this.angularFireAuth.auth.signInWithPopup(provider);
        // } else {
        //   console.log("Entrando a signInWithRedirect");
        //   return this.angularFireAuth.auth.signInWithRedirect(provider);
        //   // .then(() => {
        //   //   return this.afAuth.auth.getRedirectResult().then(result => {
        //   //     // This gives you a Google Access Token.
        //   //     // You can use it to access the Google API.
        //   //     let token = result.credential.accessToken;
        //   //     // The signed-in user info.
        //   //     let user = result.user;
        //   //     console.log(token, user);
        //   //   }).catch(function (error) {
        //   //     // Handle Errors here.
        //   //     alert(error.message);
        //   //   });
        //   // });
        // }
    };
    AuthorizationService.prototype.getUser = function () {
        return this.angularFireAuth.auth.currentUser;
    };
    /**
     * Do a logout
     */
    AuthorizationService.prototype.logout = function () {
        //Get the user session
        var user = this.angularFireAuth.auth.currentUser;
        console.log("User logout", user);
        //Delete the session active
        if (user) {
            this.sesionService.deleteSesion(user.uid);
        }
        return this.angularFireAuth.auth.signOut();
    };
    /**
     * Send and email to recover the password
     * @param email
     */
    AuthorizationService.prototype.forgotPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthorizationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, sesion_service_1.SesionService])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map
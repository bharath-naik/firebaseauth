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
var firestore_1 = require("angularfire2/firestore");
var SesionService = /** @class */ (function () {
    function SesionService(firestore) {
        this.firestore = firestore;
        this.node = "sesion";
    }
    /**
     * Create the user session in the database.
     * @param data
     */
    SesionService.prototype.createSesion = function (data) {
        //Create in the node sesion the uid and the some basic data
        if (data) {
            var sesion = {
                uid: data.user.uid,
                displayName: data.user.displayName,
                email: data.user.email,
                createdAt: Date.now()
            };
            return this.firestore.doc(this.node + "/" + sesion.uid).set(sesion);
        }
    };
    /**
     * delete the user session.
     * @param id id of the user or session.
     */
    SesionService.prototype.deleteSesion = function (id) {
        return this.firestore.doc(this.node + "/" + id).delete();
    };
    SesionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], SesionService);
    return SesionService;
}());
exports.SesionService = SesionService;
//# sourceMappingURL=sesion.service.js.map
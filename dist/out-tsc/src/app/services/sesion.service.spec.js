"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sesion_service_1 = require("./sesion.service");
describe('SesionService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [sesion_service_1.SesionService]
        });
    });
    it('should be created', testing_1.inject([sesion_service_1.SesionService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sesion.service.spec.js.map
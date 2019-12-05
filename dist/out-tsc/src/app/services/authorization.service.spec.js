"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorization_service_1 = require("./authorization.service");
describe('AuthorizationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authorization_service_1.AuthorizationService]
        });
    });
    it('should be created', testing_1.inject([authorization_service_1.AuthorizationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authorization.service.spec.js.map
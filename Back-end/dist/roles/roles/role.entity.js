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
exports.Role = void 0;
const association_entity_1 = require("../../associations/association.entity");
const user_entity_1 = require("../../users/user.entity");
const typeorm_1 = require("typeorm");
let Role = class Role {
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'idAssociation' }),
    __metadata("design:type", Number)
], Role.prototype, "idAssociation", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'idUser' }),
    __metadata("design:type", Number)
], Role.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'idUser', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.User)
], Role.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => association_entity_1.Association, association => association.id),
    (0, typeorm_1.JoinColumn)({ name: 'idAssociation', referencedColumnName: 'id' }),
    __metadata("design:type", association_entity_1.Association)
], Role.prototype, "association", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)()
], Role);
//# sourceMappingURL=role.entity.js.map
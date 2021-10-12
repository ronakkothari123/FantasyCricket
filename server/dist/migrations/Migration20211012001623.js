"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211012001623 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211012001623 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "password" text not null);');
    }
}
exports.Migration20211012001623 = Migration20211012001623;
//# sourceMappingURL=Migration20211012001623.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeder_1 = require("./seeder");
class MainSeeder {
    async run(dataSource, factory) {
        await new seeder_1.default().run(dataSource);
    }
}
exports.default = MainSeeder;
//# sourceMappingURL=mainSeeder.js.map
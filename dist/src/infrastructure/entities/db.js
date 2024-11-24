"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coin_entity_1 = require("./coin.entity");
const converthistory_entity_1 = require("./converthistory.entity");
const deposithistory_entity_1 = require("./deposithistory.entity");
const profile_entity_1 = require("./profile.entity");
const transferhistory_entity_1 = require("./transferhistory.entity");
const user_entity_1 = require("./user.entity");
const withdrawhistory_entity_1 = require("./withdrawhistory.entity");
exports.default = [
    user_entity_1.Users,
    profile_entity_1.Profiles,
    coin_entity_1.Coins,
    converthistory_entity_1.ConvertHistory,
    deposithistory_entity_1.DepositHistory,
    withdrawhistory_entity_1.WithdrawHistory,
    transferhistory_entity_1.TransferHistory,
];
//# sourceMappingURL=db.js.map
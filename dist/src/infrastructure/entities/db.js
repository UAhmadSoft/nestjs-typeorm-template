"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("./category.entity");
const device_entity_1 = require("./device.entity");
const exercise_entity_1 = require("./exercise.entity");
const profile_entity_1 = require("./profile.entity");
const routine_entity_1 = require("./routine.entity");
const support_entity_1 = require("./support.entity");
const user_entity_1 = require("./user.entity");
const userpreference_entity_1 = require("./userpreference.entity");
const userpreferencesresponse_entity_1 = require("./userpreferencesresponse.entity");
exports.default = [
    user_entity_1.Users,
    device_entity_1.Devices,
    exercise_entity_1.Exercises,
    profile_entity_1.Profiles,
    routine_entity_1.Routines,
    category_entity_1.Categories,
    userpreference_entity_1.UserPreferences,
    userpreferencesresponse_entity_1.UserPreferencesResponses,
    support_entity_1.Supports,
];
//# sourceMappingURL=db.js.map
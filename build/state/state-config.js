"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var state_1 = require("../core/models/state/state");
exports.initialState = __assign(__assign({}, state_1.defaultUserInfo), { testValue: 0 });
//# sourceMappingURL=state-config.js.map
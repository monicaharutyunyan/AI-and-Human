"use strict";
/* eslint-disable import/extensions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var make_1 = __importDefault(require("../../core/util/make"));
var cs_missing_bag_1 = __importDefault(require("./cs-missing-bag"));
var cs_on_the_plane_1 = __importDefault(require("./cs-on-the-plane"));
var cs_toughest_nut_in_town_1 = __importDefault(require("./cs-toughest-nut-in-town"));
var carolArrivesAtASC = make_1.default.module({
    id: 'carol-arrives-at-ASC',
    submodules: [cs_on_the_plane_1.default, cs_missing_bag_1.default, cs_toughest_nut_in_town_1.default],
    convoSegments: [],
});
exports.default = carolArrivesAtASC;
//# sourceMappingURL=n-carol-arrives-at-ASC.js.map
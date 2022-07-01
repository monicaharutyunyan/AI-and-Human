"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sample_root_1 = __importDefault(require("./modules/sample-root"));
var graph_components_1 = require("./core/util/make/graph-components");
var state_config_1 = require("./state/state-config");
var prelaunch_tests_1 = require("./prelaunch-tests");
/*
 * Define your config here. This should have a reference to your root module, starting convoSegment path,
 * and initial state. If you will be using state variables, you can edit the state config in ./state/state-config.ts
 */
//// TODO: Start editing from here
var rootModule = sample_root_1.default;
var usePreLaunchTests = true;
var startingConvoSegmentPath = graph_components_1.absoluteConvoSegmentPath(['root', '/start']);
///// Stop editing. Don't change anything below this
var storytellerContentConfigurations = {
    rootModule: rootModule,
    initialState: state_config_1.initialState,
    startingConvoSegmentPath: startingConvoSegmentPath,
};
if (usePreLaunchTests) {
    prelaunch_tests_1.runPrelanchTests(storytellerContentConfigurations);
}
exports.default = storytellerContentConfigurations;
//# sourceMappingURL=storyteller-config.js.map
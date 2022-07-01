"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPrelanchTests = void 0;
var path_validity_1 = require("./path-validity");
var Option_1 = require("fp-ts/lib/Option");
var logging_1 = __importDefault(require("../core/util/logging"));
function runPrelanchTests(config) {
    // update this to do a mapping across multiple test results, we don't want the tests to short circuit
    var maybeError = path_validity_1.allPathsAreValid(config);
    if (Option_1.isSome(maybeError)) {
        throw maybeError.value;
    }
    logging_1.default.debug("All pre launch tests pass! Hooray!");
}
exports.runPrelanchTests = runPrelanchTests;
//# sourceMappingURL=index.js.map
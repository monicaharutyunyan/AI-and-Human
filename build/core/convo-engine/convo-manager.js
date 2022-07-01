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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convoManagerConstructor = void 0;
var util_functions_1 = require("../util/util-functions");
var logging_1 = __importDefault(require("../util/logging"));
var state_manager_1 = require("./state-manager");
var choiceMatchesUserInput = function (userInput, stateInstance) { return function (choice) {
    // Any choice that thows an error will resolve by default to the empty string and thus never match user's input
    var errorHandler = util_functions_1.onError("Choice text expression resolves to error.\nUser input = " + userInput, '');
    return util_functions_1.evaluateText(choice.text, errorHandler, stateInstance) === userInput;
}; };
var displayConvoNode = function (chatRenderFunctions, keyboardButtons, stateInstance) { return function (convoNode) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, errorHandler, replyText;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = convoNode.__TYPE__;
                switch (_a) {
                    case 'image-node': return [3 /*break*/, 1];
                    case 'text-node': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1:
                errorHandler = util_functions_1.onError("Error evaluating image source", 'SERVER ERROR');
                return [4 /*yield*/, chatRenderFunctions.replyImage(util_functions_1.evaluateFilePath(convoNode.src, errorHandler, stateInstance), keyboardButtons)];
            case 2:
                _b.sent();
                return [3 /*break*/, 6];
            case 3:
                replyText = util_functions_1.evaluateText(convoNode.text, util_functions_1.onError('Error evaluating convoNode text', 'SERVER ERROR'), stateInstance);
                logging_1.default.debug("send reply", replyText);
                return [4 /*yield*/, chatRenderFunctions.replyText(replyText, keyboardButtons)];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                logging_1.default.trace('Error! This should be unreachable code');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); }; };
var keyboardButtonFromChoice = function (stateInstance) { return function (choice) {
    var errorHandler = util_functions_1.onError("Choice text expression resolves to error.", 'SERVER ERROR');
    return util_functions_1.evaluateText(choice.text, errorHandler, stateInstance);
}; };
var keyboardButtonsFromChoices = function (stateInstance, choices) {
    var keyboardButtonFromChoiceWithState = keyboardButtonFromChoice(stateInstance);
    return choices.map(keyboardButtonFromChoiceWithState);
};
var executeAction = function (params) {
    var action = params.action, stateManager = params.stateManager, chatRenderFunctions = params.chatRenderFunctions;
    logging_1.default.debug("Executing action", action);
    switch (action.type) {
        case 'start-convo-segment':
            // TODO: Add support for pre convo logic
            logging_1.default.debug("Set convo path to ", action.path);
            stateManager.setCurrentConvoSegmentPath(action.path);
            var convoSegment = stateManager.getCurrentConvoSegment();
            var keyboardButtons = keyboardButtonsFromChoices(stateManager.getState(), convoSegment.choices);
            convoSegment.convoNodes.forEach(displayConvoNode(chatRenderFunctions, keyboardButtons, stateManager.getState()));
            break;
        case 'update-state-data-action':
            logging_1.default.debug("Update state with state updates: ", action.updates);
            var errorHandler = util_functions_1.onError("Error evaluating state update expression, this is likely a problem with logic in the module's definition.\nThe user state will NOT be updated.", {});
            var evaluatedStateUpdate = util_functions_1.evaluateStateUpdate(action.updates, errorHandler, stateManager.getState());
            stateManager.updateState(evaluatedStateUpdate);
            break;
        default:
            logging_1.default.trace('Error! This should be unreachable code');
            break;
    }
};
var executeConvoLogic = function (params) {
    var logic = params.logic, stateManager = params.stateManager, chatRenderFunctions = params.chatRenderFunctions;
    logic.forEach(function (conditionalLogic) {
        logging_1.default.debug("Executing logic", conditionalLogic);
        // Assume any condition that evaluates to an error evalutes to 'false'
        var errorHandler = util_functions_1.onError("Condition expression resolves to error.\n This will be evaluated to 'false' by default.", false);
        var curriedExecuteAction = function (action) {
            return executeAction({ action: action, stateManager: stateManager, chatRenderFunctions: chatRenderFunctions });
        };
        if (util_functions_1.evaluateCondition(conditionalLogic.if, errorHandler, stateManager.getState())) {
            logging_1.default.debug("Condition evalutes to 'true', handling 'then'");
            conditionalLogic.do.forEach(curriedExecuteAction);
        }
        else {
            logging_1.default.debug("Condition evalutes to 'false', handling 'otherwise'");
            conditionalLogic.otherwise.forEach(curriedExecuteAction);
        }
    });
};
var getOrInitStateManager = function (params) {
    var userId = params.userId, cache = params.cache, module = params.module, initialState = params.initialState, historyManager = params.historyManager;
    if (cache[userId] !== undefined) {
        logging_1.default.debug("Found state manager in cache for userId '" + userId + "'");
        return cache[userId];
    }
    else {
        logging_1.default.debug("Did not find state manager in cache for userId '" + userId + "', creating one now with initial state", initialState);
        var initialStateWithId = __assign(__assign({}, initialState), { variables: __assign(__assign({}, initialState.variables), { userId: userId }) });
        logging_1.default.fatal('initial state', initialStateWithId, userId);
        var stateManager = state_manager_1.stateManagerConstructor.getOrInitStateManager(module, initialStateWithId, historyManager);
        cache[userId] = stateManager;
        return stateManager;
    }
};
exports.convoManagerConstructor = function (module, initialState) {
    var cache = {};
    return {
        respondToUserInput: function (userId, userInput, chatRenderFunctions) { return __awaiter(void 0, void 0, void 0, function () {
            var historyManager, stateManager, currentConvoSegment, selectedUserChoice, keyboardButtons, defaultResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        historyManager = {};
                        stateManager = getOrInitStateManager({
                            cache: cache,
                            userId: userId,
                            module: module,
                            initialState: initialState,
                            historyManager: historyManager,
                        });
                        // Find the matching user choice for the given user input at the current convoNode
                        logging_1.default.debug("processing user input " + userInput + " for convo segment with path ", stateManager.getCurrentConvoSegmentPath);
                        logging_1.default.debug("updating lastTextMessage state field");
                        stateManager.updateState({ lastTextMessage: userInput });
                        currentConvoSegment = stateManager.getCurrentConvoSegment();
                        selectedUserChoice = currentConvoSegment.choices.find(choiceMatchesUserInput(userInput, stateManager.getState()));
                        if (!(selectedUserChoice !== undefined)) return [3 /*break*/, 1];
                        logging_1.default.debug("User input " + userInput + " matches the choice ", selectedUserChoice);
                        // Do any logic associated with the selected user choice
                        executeConvoLogic({
                            logic: selectedUserChoice.logic,
                            stateManager: stateManager,
                            chatRenderFunctions: chatRenderFunctions,
                        });
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(currentConvoSegment.defaultChoice !== undefined)) return [3 /*break*/, 2];
                        logging_1.default.debug("User input matches no choices, executing logic for default choice");
                        executeConvoLogic({
                            logic: currentConvoSegment.defaultChoice,
                            stateManager: stateManager,
                            chatRenderFunctions: chatRenderFunctions,
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        logging_1.default.debug("User input " + userInput + " matches NO choices and no 'defaultChoice' is defined");
                        keyboardButtons = keyboardButtonsFromChoices(stateManager.getState(), currentConvoSegment.choices);
                        defaultResponse = "Sorry, I don't recognize your response of <i>" + userInput + "</i> right now. Try responding with one of the buttons in the chat keyboard.";
                        return [4 /*yield*/, chatRenderFunctions.replyText(defaultResponse, keyboardButtons)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); },
    };
};
//# sourceMappingURL=convo-manager.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var telegram_chat_client_1 = require("./core/chat-client/telegram-chat-client");
var logging_1 = __importDefault(require("./core/util/logging"));
var convo_manager_1 = require("./core/convo-engine/convo-manager");
var storyteller_config_1 = __importDefault(require("./storyteller-config"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var apiKey = process.env.BOT_TOKEN;
var app = express_1.default();
// handler for app engine
app.get('/_ah/warmup', function (req, res) {
    // Handle warmup logic. Initiate db connection, etc.
    main();
});
app.listen(8080);
function main() {
    if (apiKey === undefined) {
        var missingApiKeyErrorMessage = '.env file is either not set up or does not contain BOT_TOKEN field';
        logging_1.default.fatal(missingApiKeyErrorMessage);
        throw new Error(missingApiKeyErrorMessage);
    }
    var client = telegram_chat_client_1.telegramClient(apiKey);
    logging_1.default.debug("Initialized telegram client, attempting to run modules");
    client.runModule(storyteller_config_1.default, convo_manager_1.convoManagerConstructor);
}
exports.default = main();
//# sourceMappingURL=index.js.map
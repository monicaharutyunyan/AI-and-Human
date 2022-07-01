"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramClient = void 0;
var logging_1 = __importDefault(require("../util/logging"));
var Keyboard = require('telegram-keyboard').Keyboard;
var Telegraf = require('telegraf');
var session = require('telegraf/session');
function renderWithContext(ctx) {
    return {
        replyText: function (text, buttons) {
            logging_1.default.debug('reply in chat with the text message: ', text);
            var keyboard = Keyboard.make(buttons);
            ctx.replyWithHTML(text, keyboard.reply());
        },
        replyImage: function (src, buttons) {
            logging_1.default.debug('reply in chat with the image: ', src);
            var keyboard = Keyboard.make(buttons);
            ctx.replyWithPhoto({ url: "" + src, filename: 'photo.jpg' }, keyboard.reply());
        },
    };
}
exports.telegramClient = function (apiKey) {
    var bot = new Telegraf(apiKey);
    return {
        runModule: function (storytellerConfig, convoManagerConstructor) {
            bot.use(session());
            var initStateStores = {
                variables: storytellerConfig.initialState,
                currentConvoSegmentPath: storytellerConfig.startingConvoSegmentPath,
            };
            var convoManager = convoManagerConstructor(storytellerConfig.rootModule, initStateStores);
            bot.on('text', function (ctx) {
                logging_1.default.debug('received user input');
                var renderFunctions = renderWithContext(ctx);
                convoManager.respondToUserInput(ctx.from.id, ctx.message.text, renderFunctions);
            });
            bot.on('message', function (ctx) {
                logging_1.default.debug('received user input as message other than text');
                ctx.reply('Only text messages please');
            });
            logging_1.default.debug('telegram client is configured and waiting for messages.');
            bot.launch();
        },
    };
};
//# sourceMappingURL=telegram-chat-client.js.map
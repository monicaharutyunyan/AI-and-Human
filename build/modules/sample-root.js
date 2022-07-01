"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var make_1 = __importDefault(require("../core/util/make"));
var child_module_1 = require("./child-module");
var n_carol_arrives_at_ASC_1 = __importDefault(require("./carol-arrives-at-ASC/n-carol-arrives-at-ASC"));
var root = make_1.default.module({
    id: 'root',
    submodules: [child_module_1.nestedModule, n_carol_arrives_at_ASC_1.default],
    convoSegments: [
        {
            id: '/start',
            convo: [
                {
                    type: 'text',
                    text: function (state) { return "this chatbot says welcome " + state.userId; },
                },
                {
                    type: 'text',
                    text: function (state) { return "test value is " + state.testValue; },
                },
            ],
            choices: [
                {
                    text: '/start',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'carol-arrives-at-ASC', 'on-the-plane', 'opening'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'toughest nut',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'carol-arrives-at-ASC', 'toughest-nut-in-town', 'walking-under-the-rain'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'updateCounter',
                    logic: [
                        {
                            if: function (state) { return state.testValue < 3; },
                            do: [
                                {
                                    type: 'update-state',
                                    update: function (state) { return ({
                                        testValue: state.testValue + 1,
                                    }); },
                                },
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                            otherwise: [
                                {
                                    type: 'update-state',
                                    update: { testValue: 0 },
                                },
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: '/child',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', 'child', 'childSegment'],
                                },
                            ],
                        },
                    ],
                },
            ],
            default: [
                {
                    if: function (state) { return state.lastTextMessage.length > 20; },
                    do: [
                        {
                            type: 'goto',
                            path: ['longMessage'],
                        },
                    ],
                    otherwise: [
                        {
                            type: 'goto',
                            path: ['/start'],
                        },
                    ],
                },
            ],
        },
        {
            id: 'longMessage',
            convo: [
                {
                    type: 'text',
                    text: function (state) { return "<b>" + state.lastTextMessage + "</b> is a long message!"; },
                },
            ],
            choices: [
                {
                    text: 'yep',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'sample2',
            convo: [
                {
                    type: 'text',
                    text: 'oh this <b>absolute path</b> works too',
                },
                {
                    type: 'image',
                    src: 'https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg',
                },
            ],
            choices: [
                {
                    text: '/goToStart',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['/start'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});
exports.default = root;
//# sourceMappingURL=sample-root.js.map
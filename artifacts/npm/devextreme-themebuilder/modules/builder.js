"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTheme = void 0;
const config_normalizer_1 = __importDefault(require("./config-normalizer"));
const compile_manager_1 = __importDefault(require("./compile-manager"));
const buildTheme = (config) => {
    config_normalizer_1.default(config);
    const compileManager = new compile_manager_1.default();
    return compileManager.compile(config);
};
exports.buildTheme = buildTheme;
// compatibility default export
exports.default = { buildTheme: exports.buildTheme };

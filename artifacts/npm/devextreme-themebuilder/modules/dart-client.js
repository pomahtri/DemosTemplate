"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const logger_1 = __importDefault(require("./logger"));
class DartClient {
    constructor() {
        this.serverPort = 22000;
        this.isServerAvailable = false;
        this.client = new net_1.default.Socket();
        this.eventListeners = [];
    }
    addClientEventListener(name, handler) {
        this.eventListeners.push({ name, handler });
        this.client.on(name, handler);
    }
    setClientErrorHandlers(handler) {
        this.addClientEventListener('timeout', handler);
        this.addClientEventListener('error', handler);
    }
    removeClientEventListeners() {
        this.eventListeners.forEach((listener) => {
            this.client.off(listener.name, listener.handler);
        });
        this.eventListeners.length = 0;
    }
    dispose() {
        if (this.client.destroyed)
            return Promise.resolve();
        this.isServerAvailable = false;
        return new Promise((resolve) => {
            this.client.once('close', resolve);
            this.removeClientEventListeners();
            this.client.destroy();
        });
    }
    check() {
        this.client.setTimeout(100);
        return new Promise((resolve) => {
            this.setClientErrorHandlers(() => __awaiter(this, void 0, void 0, function* () {
                this.isServerAvailable = false;
                yield this.dispose();
                resolve();
            }));
            this.client.connect(this.serverPort, '127.0.0.1', () => {
                this.isServerAvailable = true;
                resolve();
            });
        });
    }
    send(message) {
        this.client.setTimeout(0);
        this.removeClientEventListeners();
        return new Promise((resolve) => {
            let data = '';
            this.addClientEventListener('data', (d) => {
                data += d.toString();
            });
            this.addClientEventListener('end', () => {
                logger_1.default.log('DartClient received', data);
                let parsedData;
                try {
                    parsedData = JSON.parse(data);
                }
                catch (e) {
                    parsedData = { error: `Unable to parse dart server response: ${data}` };
                }
                resolve(parsedData);
            });
            const errorHandler = (e) => {
                logger_1.default.log('Dart client error on write', e);
                this.client.end();
                this.dispose();
                resolve({
                    error: `${e.name}: ${e.message}`,
                });
            };
            if (this.client.destroyed) {
                errorHandler({ name: 'Error', message: 'Client destroyed' });
            }
            this.setClientErrorHandlers(errorHandler);
            logger_1.default.log('DartClient send', message);
            this.client.write(JSON.stringify(message));
            this.client.end();
        });
    }
}
exports.default = DartClient;

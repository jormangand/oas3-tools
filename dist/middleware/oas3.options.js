"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oas3AppOptions = void 0;
const logging_options_1 = require("./logging.options");
class Oas3AppOptions {
    constructor(routingOpts, openApiValidatorOpts, logging, swaggerUI, app, cors, logger) {
        this.routing = routingOpts;
        this.openApiValidator = openApiValidatorOpts;
        this.swaggerUI = swaggerUI;
        if (!logging)
            logging = new logging_options_1.LoggingOptions(null, null);
        this.logging = logging;
        this.app = app;
        this.cors = cors;
        this.logger = logger;
    }
}
exports.Oas3AppOptions = Oas3AppOptions;
//# sourceMappingURL=oas3.options.js.map
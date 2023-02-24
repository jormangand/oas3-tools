import * as express from 'express';
import { Oas3AppOptions } from './oas3.options';
import { OpenApiRequestHandler } from 'express-openapi-validator/dist/framework/types';
export declare class ExpressAppConfig {
    private app;
    private routingOptions;
    private definitionPath;
    private openApiValidatorOptions;
    constructor(definitionPath: string, appOptions: Oas3AppOptions, customMiddlewareFns?: OpenApiRequestHandler[]);
    private setOpenApiValidatorOptions;
    configureLogger(loggerOptions: any, logger: any): any;
    private errorHandler;
    getApp(): express.Application;
}

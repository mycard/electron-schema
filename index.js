(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const compiler_1 = require("@angular/compiler");
    const tags = {
        webview: {
            src: true,
            autosize: true,
            nodeintegration: true,
            plugins: true,
            preload: true,
            httpreferrer: true,
            useragent: true,
            disablewebsecurity: true,
            partition: true,
            allowpopups: true,
            webpreferences: true,
            blinkfeatures: true,
            disableblinkfeatures: true,
            guestinstance: true,
            disableguestresize: true
        }
    };
    exports.ELECTRON_SCHEMA = {
        name: 'electron-schema'
    };
    compiler_1.DomElementSchemaRegistry.prototype.hasElement = new Proxy(compiler_1.DomElementSchemaRegistry.prototype.hasElement, {
        apply(target, thisArgument, argumentsList) {
            const [tagName, schemaMetas] = argumentsList;
            if (schemaMetas.some((schema) => schema.name === exports.ELECTRON_SCHEMA.name) && tags[tagName]) {
                return true;
            }
            return Reflect.apply(target, thisArgument, argumentsList);
        }
    });
    compiler_1.DomElementSchemaRegistry.prototype.hasProperty = new Proxy(compiler_1.DomElementSchemaRegistry.prototype.hasProperty, {
        apply(target, thisArgument, argumentsList) {
            const [tagName, propName, schemaMetas] = argumentsList;
            if (schemaMetas.some((schema) => schema.name === exports.ELECTRON_SCHEMA.name) && tags[tagName] && tags[tagName][propName]) {
                return true;
            }
            return Reflect.apply(target, thisArgument, argumentsList);
        }
    });
});
//# sourceMappingURL=index.js.map
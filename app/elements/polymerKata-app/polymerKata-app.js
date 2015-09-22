/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PolymerKataApp = (function (_super) {
    __extends(PolymerKataApp, _super);
    function PolymerKataApp() {
        _super.apply(this, arguments);
        this.greet = "Hello";
    }
    PolymerKataApp.prototype.greetChanged = function (newValue, oldValue) {
        console.log("greet has changed from " + oldValue + " to " + newValue);
    };
    PolymerKataApp.prototype.greetAll = function (test) {
        return this.greet + " to all";
    };
    PolymerKataApp.prototype.handleClick = function (e) {
        this.greet = "Holà";
        this.fire("greet-event");
    };
    PolymerKataApp.prototype.errorHandler = function (e) {
        console.log(e);
    };
    PolymerKataApp.prototype.onButtonWasClicked = function (e) {
        console.log('event "greet-event" received');
    };
    PolymerKataApp.prototype.onLoginRequest = function (e) {
        console.log("Login requested");
        this.$.firebaseLogin.provider = "google";
        this.$.firebaseLogin.login();
    };
    PolymerKataApp.prototype.ready = function () {
        console.log(this['is'], "ready!");
    };
    PolymerKataApp.prototype.created = function () { };
    PolymerKataApp.prototype.attached = function () { };
    PolymerKataApp.prototype.detached = function () { };
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], PolymerKataApp.prototype, "greet");
    __decorate([
        property({ type: Object }), 
        __metadata('design:type', Object)
    ], PolymerKataApp.prototype, "user");
    Object.defineProperty(PolymerKataApp.prototype, "greetChanged",
        __decorate([
            observe("greet"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String, String]), 
            __metadata('design:returntype', void 0)
        ], PolymerKataApp.prototype, "greetChanged", Object.getOwnPropertyDescriptor(PolymerKataApp.prototype, "greetChanged")));
    Object.defineProperty(PolymerKataApp.prototype, "greetAll",
        __decorate([
            computed(), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String]), 
            __metadata('design:returntype', String)
        ], PolymerKataApp.prototype, "greetAll", Object.getOwnPropertyDescriptor(PolymerKataApp.prototype, "greetAll")));
    Object.defineProperty(PolymerKataApp.prototype, "onButtonWasClicked",
        __decorate([
            listen("greet-event"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Event]), 
            __metadata('design:returntype', void 0)
        ], PolymerKataApp.prototype, "onButtonWasClicked", Object.getOwnPropertyDescriptor(PolymerKataApp.prototype, "onButtonWasClicked")));
    Object.defineProperty(PolymerKataApp.prototype, "onLoginRequest",
        __decorate([
            listen("loginRequest"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Event]), 
            __metadata('design:returntype', void 0)
        ], PolymerKataApp.prototype, "onLoginRequest", Object.getOwnPropertyDescriptor(PolymerKataApp.prototype, "onLoginRequest")));
    PolymerKataApp = __decorate([
        /// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
        component('polymerKata-app'), 
        __metadata('design:paramtypes', [])
    ], PolymerKataApp);
    return PolymerKataApp;
})(polymer.Base);
PolymerKataApp.register();

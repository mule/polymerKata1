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
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        _super.apply(this, arguments);
        this.greet = "Hello";
    }
    LoginView.prototype.greetChanged = function (newValue, oldValue) {
        console.log("greet has changed from " + oldValue + " to " + newValue);
    };
    LoginView.prototype.greetAll = function (test) {
        return "hello to all";
    };
    LoginView.prototype.googleButtonClick = function (e) {
        this.fire("loginRequest");
    };
    LoginView.prototype.handleClick = function (e) {
        this.greet = "Holà";
        this.fire("greet-event");
    };
    LoginView.prototype.onButtonWasClicked = function (e) {
        console.log('event "greet-event" received');
    };
    LoginView.prototype.ready = function () {
        console.log(this['is'], "ready!");
    };
    LoginView.prototype.created = function () { };
    LoginView.prototype.attached = function () { };
    LoginView.prototype.detached = function () { };
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], LoginView.prototype, "greet");
    Object.defineProperty(LoginView.prototype, "greetChanged",
        __decorate([
            observe("greet"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String, String]), 
            __metadata('design:returntype', void 0)
        ], LoginView.prototype, "greetChanged", Object.getOwnPropertyDescriptor(LoginView.prototype, "greetChanged")));
    Object.defineProperty(LoginView.prototype, "greetAll",
        __decorate([
            computed(), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String]), 
            __metadata('design:returntype', String)
        ], LoginView.prototype, "greetAll", Object.getOwnPropertyDescriptor(LoginView.prototype, "greetAll")));
    Object.defineProperty(LoginView.prototype, "onButtonWasClicked",
        __decorate([
            listen("greet-event"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Event]), 
            __metadata('design:returntype', void 0)
        ], LoginView.prototype, "onButtonWasClicked", Object.getOwnPropertyDescriptor(LoginView.prototype, "onButtonWasClicked")));
    LoginView = __decorate([
        /// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>
        component('login-view'), 
        __metadata('design:paramtypes', [])
    ], LoginView);
    return LoginView;
})(polymer.Base);
LoginView.register();

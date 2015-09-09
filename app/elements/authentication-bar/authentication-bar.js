/// <reference path="../..\..\bower_components/polymer-ts/polymer-ts.d.ts"/>
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
var AuthenticationBar = (function (_super) {
    __extends(AuthenticationBar, _super);
    function AuthenticationBar() {
        _super.apply(this, arguments);
        this.greet = "Hello";
        this.provider = "";
        this.message = "";
        this.email = "";
        this.user = null;
    }
    AuthenticationBar.prototype.greetChanged = function (newValue, oldValue) {
        console.log("greet has changed from " + oldValue + " to " + newValue);
    };
    AuthenticationBar.prototype.greetAll = function (test) {
        return this.greet + " to all";
    };
    AuthenticationBar.prototype.computeLoginStatus = function (statusKnown, user) {
        if (statusKnown && user) {
            return "Logged in";
        }
        if (statusKnown) {
            return "Logged out";
        }
        return "Unknown status";
    };
    AuthenticationBar.prototype.computeLoginHidden = function (statusKnown, user) {
        return !statusKnown || !!user;
    };
    AuthenticationBar.prototype.handleClick = function (e) {
        this.greet = "Holà";
        this.fire("greet-event");
    };
    AuthenticationBar.prototype.onButtonWasClicked = function (e) {
        console.log('event "greet-event" received');
    };
    AuthenticationBar.prototype.ready = function () {
        console.log(this['is'], "ready!");
    };
    AuthenticationBar.prototype.created = function () { };
    AuthenticationBar.prototype.attached = function () { };
    AuthenticationBar.prototype.detached = function () { };
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], AuthenticationBar.prototype, "greet");
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], AuthenticationBar.prototype, "provider");
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], AuthenticationBar.prototype, "message");
    __decorate([
        property({ type: String }), 
        __metadata('design:type', String)
    ], AuthenticationBar.prototype, "email");
    __decorate([
        property({ type: Object }), 
        __metadata('design:type', Object)
    ], AuthenticationBar.prototype, "user");
    __decorate([
        property({ type: Boolean }), 
        __metadata('design:type', Boolean)
    ], AuthenticationBar.prototype, "statusKnown");
    Object.defineProperty(AuthenticationBar.prototype, "greetChanged",
        __decorate([
            observe("greet"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String, String]), 
            __metadata('design:returntype', void 0)
        ], AuthenticationBar.prototype, "greetChanged", Object.getOwnPropertyDescriptor(AuthenticationBar.prototype, "greetChanged")));
    Object.defineProperty(AuthenticationBar.prototype, "greetAll",
        __decorate([
            computed(), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String]), 
            __metadata('design:returntype', String)
        ], AuthenticationBar.prototype, "greetAll", Object.getOwnPropertyDescriptor(AuthenticationBar.prototype, "greetAll")));
    Object.defineProperty(AuthenticationBar.prototype, "onButtonWasClicked",
        __decorate([
            listen("greet-event"), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Event]), 
            __metadata('design:returntype', void 0)
        ], AuthenticationBar.prototype, "onButtonWasClicked", Object.getOwnPropertyDescriptor(AuthenticationBar.prototype, "onButtonWasClicked")));
    AuthenticationBar = __decorate([
        /// <reference path="../..\..\bower_components/polymer-ts/polymer-ts.d.ts"/>
        component('authentication-bar'), 
        __metadata('design:paramtypes', [])
    ], AuthenticationBar);
    return AuthenticationBar;
})(polymer.Base);
AuthenticationBar.register();

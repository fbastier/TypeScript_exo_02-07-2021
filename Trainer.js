"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
var Person_1 = require("./Person");
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer($cours, $surname, $firstname, $gender, $age, $size, $weight) {
        var _this = _super.call(this, $surname, $firstname, $gender, $age, $size, $weight) || this;
        _this.cours = $cours;
        return _this;
    }
    Object.defineProperty(Trainer.prototype, "$cours", {
        /**
         * Getter $cours
         * @return {Cours[]}
         */
        get: function () {
            return this.cours;
        },
        /**
         * Setter $cours
         * @param {Cours[]} value
         */
        set: function (value) {
            this.cours = value;
        },
        enumerable: false,
        configurable: true
    });
    return Trainer;
}(Person_1.Person));
exports.Trainer = Trainer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person($surname, $firstname, $gender, $age, $size, $weight) {
        this.surname = $surname;
        this.firstname = $firstname;
        this.gender = $gender;
        this.age = $age;
        this.size = $size;
        this.weight = $weight;
    }
    Object.defineProperty(Person.prototype, "$gender", {
        /**
         * Getter $gender
         * @return {string}
         */
        get: function () {
            return this.gender;
        },
        /**
         * Setter $gender
         * @param {string} value
         */
        set: function (value) {
            this.gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$surname", {
        /**
         * Getter $surname
         * @return {string}
         */
        get: function () {
            return this.surname;
        },
        /**
         * Setter $surname
         * @param {string} value
         */
        set: function (value) {
            this.surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$firstname", {
        /**
         * Getter $firstname
         * @return {string}
         */
        get: function () {
            return this.firstname;
        },
        /**
         * Setter $firstname
         * @param {string} value
         */
        set: function (value) {
            this.firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$age", {
        /**
         * Getter $age
         * @return {number}
         */
        get: function () {
            return this.age;
        },
        /**
         * Setter $age
         * @param {number} value
         */
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$size", {
        /**
         * Getter $size
         * @return {number}
         */
        get: function () {
            return this.size;
        },
        /**
         * Setter $size
         * @param {number} value
         */
        set: function (value) {
            this.size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$weight", {
        /**
         * Getter $weight
         * @return {number}
         */
        get: function () {
            return this.weight;
        },
        /**
         * Setter $weight
         * @param {number} value
         */
        set: function (value) {
            this.weight = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;

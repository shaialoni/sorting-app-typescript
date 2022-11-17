"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_1 = require("./Numbers");
const Strings_1 = require("./Strings");
const dateArray = [
    new Date(2010, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2053, 9, 24),
];
const years = dateArray.map(date => date.getFullYear());
const numbersData = new Numbers_1.Numbers(years);
numbersData.sort();
console.log(numbersData.number);
const stringsData = new Strings_1.Strings('Zacdb');
stringsData.sort();
console.log(stringsData.str);

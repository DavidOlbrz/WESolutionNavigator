import {plus, minus} from "./calcFunctions.js";

function calc() {
    const x = 10;
    const y = 5;

    const addition = plus(x, y);
    const subtraction = minus(x, y);

    console.log(`${x} + ${y} = ${addition}\n${x} - ${y} = ${subtraction}`);
}
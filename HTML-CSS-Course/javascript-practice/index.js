import * as capitalizeString from "string_function";


console.log("Hello World");


var player = {
    "name": "Richard",
    "votes_against": 0,
    "relationships": [0]
};

var votes_against_value = player.votes_against;

player.votes_against++;

function addVote(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(addVote(0));

//import export
import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");

console.log(cap);



const capitalizeString2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString2};

export const foo = "bar";
export const bar = "foo";
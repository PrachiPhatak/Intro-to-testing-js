// function expression syntax (assigning an anonymous function to a variable)
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if( typeof name !== "string" || name === ''){
        return "Hello, World!"
    }
    if(name === "CodeUp"){
        return "Hello, CodeUp Students!"
    }
    return "Hello, " + name +"!";
}

function isFive(num){
    return (isNaN(num) === false && parseFloat(num) === 5);
}

function isEven(num){
    return (typeof num === 'number' && num % 2 === 0);
}

function isVowel(char){
    if(typeof char === 'string') {
        return ["a", "e", "i", "o", "u"].includes(char.toLowerCase())
    }
    else
        return false;
}
function add(num1, num2){
    if(Number.isNaN(num1) || Number.isNaN(num2)){
        return NaN;
    }
    return parseInt(num1) + parseInt(num2);
}
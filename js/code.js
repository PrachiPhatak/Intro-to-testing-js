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
    return (isNaN(num)===false && parseFloat(num) === 5);
}
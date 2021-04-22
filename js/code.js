// function expression syntax (assigning an anonymous function to a variable)
let helloWorld = function() {
    return "Hello, World!";
}

let sayHello = function (name) {
    if( typeof name !== "string" || name === ''){
        return "Hello, World!"
    }
    if(name === "CodeUp"){
        return "Hello, CodeUp Students!"
    }
    return "Hello, " + name +"!";
}
// default arguments

function greet(name = "", age = 30, pet = "cat") {
    return `Hello ${name}, you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}

console.log(greet());
console.log(greet("john", 50, "monkey"));

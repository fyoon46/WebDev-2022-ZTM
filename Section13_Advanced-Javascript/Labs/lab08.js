const first = () => {
    const greet = "Hi";
    return () => {
        console.log(greet);
    };
}

const newFunc = first();
newFunc();

// Closures - A function ran, a function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables,
// so the child scope always has access to the parent scope.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));

const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(11));

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));

// Avoiding side effects, functional purity (determinism)

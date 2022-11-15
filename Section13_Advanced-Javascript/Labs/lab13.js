// ES8

// string padding

console.log('Turtle'.padStart(10));
console.log('Turtle'.padEnd(10));

// trailing commas in function's parameter lists and calls

const fun = (a,
             b,
             c,
             d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,);

// Object.values, Object.entries

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
};


Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(entry => {
    console.log(entry);
})

console.log(
    Object.entries(obj).map(entry => {
        return entry[1] + entry[0].replace('username', '');
    }
    )
);

// Async Await


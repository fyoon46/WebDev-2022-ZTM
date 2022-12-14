// Pass By Value vs Pass By Reference

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }  // saved as address
}
let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'haha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

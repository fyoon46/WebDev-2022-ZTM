// let vs. var

let experience = 100;
let wizardLevel1 = false;
var wizardLevel2 = false;

if (experience >= 90) {
    let wizardLevel1 = true;
    var wizardLevel2 = true;
    console.log("let inside", wizardLevel1); // true
    console.log("var inside", wizardLevel2); // true
}
console.log("let outside", wizardLevel1); // false
console.log("var outside", wizardLevel2); // true

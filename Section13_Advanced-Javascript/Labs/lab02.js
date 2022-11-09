// const + destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
};
const {player, experience} = obj;
let {wizardLevel} = obj;
console.log(player, experience);
console.log(wizardLevel);

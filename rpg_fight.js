const monsterAttackValue = document.querySelector("#monsterAttackValue");
const monsterDefenseValue = document.querySelector("#monsterDefenseValue");
const monsterHpValue = document.querySelector("#monsterHpValue");
const monsterTypeValue = document.querySelector("#monsterTypeValue");
let attack = 10;
let defense = 5;
let hp = 40;


const hero = document.querySelector("#hero");

function monsterAttackValueFunction() {
  monsterAttackValue.textContent = attack;
}

function monsterDefenseValueFunction() {
  monsterDefenseValue.textContent = defense;
}

function monsterHpValueFunction() {
  monsterHpValue.textContent = hp;
}

monsterAttackValueFunction();
monsterDefenseValueFunction();
monsterHpValueFunction();

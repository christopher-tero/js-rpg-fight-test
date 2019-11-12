const monsterAttackValue = document.querySelector("#monsterAttackValue");
const monsterDefenseValue = document.querySelector("#monsterDefenseValue");
const monsterHpValue = document.querySelector("#monsterHpValue");
const monsterTypeValue = document.querySelector("#monsterTypeValue");
let monsterAttack = 10;
let monsterDefense = 5;
let monsterHp = 40;
let monsterType = "Goblin";


const hero = document.querySelector("#hero");

function monsterAttackValueFunction() {
  monsterAttackValue.textContent = monsterAttack;
}

function monsterDefenseValueFunction() {
  monsterDefenseValue.textContent = monsterDefense;
}

function monsterHpValueFunction() {
  monsterHpValue.textContent = monsterHp;
}

function monsterTypeValueFunction() {
  monsterTypeValue.textContent = monsterType;
}

function createMonster() {
  monsterAttackValueFunction();
  monsterDefenseValueFunction();
  monsterHpValueFunction();
  monsterTypeValueFunction();
}

function runGame() {
  createMonster();
}

runGame();

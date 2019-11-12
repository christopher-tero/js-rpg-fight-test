const heroAttackValue = document.querySelector("#heroAttackValue");
const heroDefenseValue = document.querySelector("#heroDefenseValue");
const heroHpValue = document.querySelector("#heroHpValue");
const heroClassValue = document.querySelector("#heroClassValue");
const monsterAttackValue = document.querySelector("#monsterAttackValue");
const monsterDefenseValue = document.querySelector("#monsterDefenseValue");
const monsterHpValue = document.querySelector("#monsterHpValue");
const monsterTypeValue = document.querySelector("#monsterTypeValue");


function heroAttackValueFunction() {
  let heroAttack = 10;
  heroAttackValue.textContent = heroAttack;
}

function heroDefenseValueFunction() {
  let heroDefense = 10;
  heroDefenseValue.textContent = heroDefense;
}

function heroHpValueFunction() {
  let heroHp = 50;
  heroHpValue.textContent = heroHp;
}

function heroClassValueFunction() {
  let heroClass = "Ranger";
  heroClassValue.textContent = heroClass;
}

function monsterAttackValueFunction() {
  let monsterAttack = 10;
  monsterAttackValue.textContent = monsterAttack;
}

function monsterDefenseValueFunction() {
  let monsterDefense = 5;
  monsterDefenseValue.textContent = monsterDefense;
}

function monsterHpValueFunction() {
  let monsterHp = 40;
  monsterHpValue.textContent = monsterHp;
}

function monsterTypeValueFunction() {
  let monsterType = "Goblin";
  monsterTypeValue.textContent = monsterType;
}

function createHero() {
  heroAttackValueFunction();
  heroDefenseValueFunction();
  heroHpValueFunction();
  heroClassValueFunction();
}

function createMonster() {
  monsterAttackValueFunction();
  monsterDefenseValueFunction();
  monsterHpValueFunction();
  monsterTypeValueFunction();
}

function runGame() {
  createHero();
  createMonster();
}

runGame();

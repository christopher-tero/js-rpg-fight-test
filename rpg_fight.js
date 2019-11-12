const attackValue = document.querySelector("#attackValue")
//const winner = document.querySelector("#winner")
let attack = 10


const hero = document.querySelector("#hero");
const school = document.createElement("h1");
school.setAttribute("id", "school");
school.textContent = "Louisiana State University";
hero.appendChild(school);

function attackValueFunction() {
  attackValue.textContent = attack;
}

attackValueFunction();

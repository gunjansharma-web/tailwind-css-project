const mode = document.getElementById("mode");
const sun = document.getElementById("sun");
const modeOpt = document.getElementById("modeOpt");
mode.addEventListener("click", () => {
  modeOpt.classList.toggle("flex");
  modeOpt.classList.toggle("hidden");
});
sun.addEventListener("click", () => {
  modeOpt.classList.toggle("flex");
  modeOpt.classList.toggle("hidden");
});

const dark = document.getElementById("dark");

dark.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  sun.classList.add("hidden");
  mode.classList.remove("hidden");
});
const light = document.getElementById("light");


light.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  mode.classList.add("hidden");
  sun.classList.remove("hidden");
});
const system = document.getElementById("system");

system.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  sun.classList.add("hidden");
  mode.classList.remove("hidden");
});
const humbarger = document.getElementById("humb");
const nav = document.getElementById("nav");
const hero = document.getElementById("hero");
console.log(hero);
humbarger.addEventListener("click",()=>{
  nav.classList.toggle("absolute");
  hero.classList.toggle("blur-sm");



  nav.classList.remove("max-lg:hidden");

})
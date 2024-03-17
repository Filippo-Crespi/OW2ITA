const close_dialog_btn = document.getElementById("close-dialog-btn");
let hero_dialog = document.getElementById("hero-dialog");
let hero_name = document.getElementById("hero-name");
let hero_desc = document.getElementById("hero-desc");
let dialog_grid = document.getElementById("grid");

function close_dialog() {
  hero_dialog.classList.remove("active");
  // rimuovo tutte gli article figli di dialog_grid
  while (dialog_grid.firstChild) {
    dialog_grid.removeChild(dialog_grid.firstChild);
  }
}

function createImage(character) {
  let article = document.createElement("article");
  article.classList.add("s2");
  dialog_grid.appendChild(article);
  let img = document.createElement("img");
  img.classList.add("responsive");
  img.src = `../imgs/char/${character}.png`;
  article.appendChild(img);
}

function open_dialog(hero) {
  hero_dialog.classList.add("active");
  hero_name.innerHTML = "Lista counter per " + hero + ".";
  let div = document.createElement("div");
  div.setAttribute("hidden", "true");
  dialog_grid.appendChild(div);

  switch (hero) {
    case "ana":
      createImage("dva");
      createImage("widowmaker");
      createImage("junkerqueen");
      createImage("tracer");
      break;

    case "ashe":
      createImage("widowmaker");
      // hanzo
      createImage("hanzo");
      // tracer
      createImage("tracer");
      // reinhardt
      createImage("reinhardt");
      break

    case "baptiste":
      // dva
      createImage("dva");
      //genji
      createImage("genji");
      // hanzo
      createImage("hanzo");
      // hog
      createImage("roadhog");
      break;

    case "bastion":
      createImage("roadhog");
      createImage("junkrat");
      createImage("ana");
      createImage("reaper");
      break;

    case "brigitte":
      // bastion
      createImage("bastion");
      // pharah
      createImage("pharah");
      // junkrat
      createImage("junkrat");
      // hanzo
      createImage("hanzo");
      break;

    case "dva":
      // zarya
      createImage("zarya");
      // mei
      createImage("mei");
      // symmetra
      createImage("symmetra");
      // moira
      createImage("moira");
      // sombra
      createImage("sombra");
      break;

    case "doomfist":
      // sombra
      createImage("sombra");
      // pharah
      createImage("pharah");
      // echo
      createImage("echo");
      // cassidy
      createImage("cassidy");
      break;

    case "echo":
      // cassidy
      createImage("cassidy");
      // soldier
      createImage("soldier-76");
      // widowmaker
      createImage("widowmaker");
      // ana
      createImage("ana");
      // ashe
      createImage("ashe");
      break;

    case "genji":
      createImage("zarya");
      // mei
      createImage("mei");
      // symmetra
      createImage("symmetra");
      // moira
      createImage("moira");
      // sombra
      createImage("sombra");
      // pharah
      createImage("pharah");
      break;

    case "hanzo":
      // widowmaker
      createImage("widowmaker");
      // winston
      createImage("winston");
      // genji
      createImage("genji");
      // dva
      createImage("dva");
      break;

    case "junkrat":
      // pharah
      createImage("pharah");
      // kiriko
      createImage("kiriko");
      // echo
      createImage("echo");
      // widowmaker
      createImage("widowmaker");
      break;

    case "lucio":
      // pharah
      createImage("pharah");
      // torbjorn
      createImage("torbjorn");
      // moira
      createImage("moira");
      // bastion
      createImage("bastion");
      // sombra
      createImage("sombra");
      break;

    case "cassidy":
      // widowmaker
      createImage("widowmaker");
      // winston
      createImage("winston");
      // baptiste
      createImage("baptiste");
      // tracer
      createImage("tracer");
      break;

    case "mei":
      // pharah
      createImage("pharah");
      // sombra
      createImage("sombra");
      // widowmaker
      createImage("widowmaker");
      // soldier
      createImage("soldier-76");
      break;

    case "mercy":
      // widowmaker
      createImage("widowmaker");
      // winston
      createImage("winston");
      // hog
      createImage("roadhog");
      // sombra
      createImage("sombra");
      // moira
      createImage("moira");
      // ashe
      createImage("ashe");
      // cassidy
      createImage("cassidy");
      break;

    case "moira":
      // widowmaker
      createImage("widowmaker");
      // sombra
      createImage("sombra");
      // pharah
      createImage("pharah");
      // hanzo
      createImage("hanzo");
      break;

    case "orisa":
      // winston
      createImage("winston");
      // zenyatta
      createImage("zenyatta");
      // reaper
      createImage("reaper");
      // junkrat
      createImage("junkrat");
      break;
  }
}

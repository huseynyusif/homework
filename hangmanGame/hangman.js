let hangman = {
  indikiSoz: 0,
  sozler: ["italiya", "almaniya", "braziliya", "hindistan"],
  shanslar: 12,
  daxilEdilmisler: [],

  sozuGoster: function() {
    let soz = this.sozler[this.indikiSoz];
    let ekranaCixmaliTireler = "";

    for (let i = 0; i < soz.length; i++) {
      if (this.daxilEdilmisler.indexOf(soz[i]) !== -1) {
        ekranaCixmaliTireler = ekranaCixmaliTireler + soz[i];
      } else {
        ekranaCixmaliTireler = ekranaCixmaliTireler + "-";
      }
    }
    document.querySelector("#soz").innerHTML = ekranaCixmaliTireler;
  }
};

window.onkeyup = e => {
  hangman.sozuGoster();
  // if (e.key === "abcdefghijklmnopqrstuvwxyz") {
  //   if (e.key === hangman.sozler[hangman.indikiSoz]) {
  //     document.querySelector("#soz").innerHTML = ekranaCixmaliTireler;
  // }
  //    else {
  //     document.querySelector("#soz").innerHTML = ekranaCixmaliTireler;
  //   }
  // }
};

hangman.sozuGoster();

console.log(hangman.sozuGoster());

document.querySelector("#daxilEdilmisHerfler").innerHTML =
  hangman.daxilEdilmisler;

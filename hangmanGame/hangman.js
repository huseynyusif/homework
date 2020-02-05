var hangman = {
  sozler: [
    {
      sual: "almaniya",
      hint: "Bu bayraq hansi olkeye aiddir?",
      shekil:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
    },
    {
      sual: "italiya",
      hint: "Bu bayraq hansi olkeye aiddir?",
      shekil: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
      sual: "kamerun",
      hint: "Bu bayraq hansi olkeye aiddir?",
      shekil: "https://cdn.countryflags.com/thumbs/cameroon/flag-800.png"
    },
    {
      sual: "merakes",
      hint: "Bu bayraq hansi olkeye aiddir?",
      shekil: "https://cdn.countryflags.com/thumbs/morocco/flag-800.png"
    }
  ],
  indikiSozunIndeksi: 0,
  indikiSoz: "",
  qalanShanslar: 0,
  tapilmayanHerfler: [],
  tapilanHerfler: [],
  qalibiyyet: 0,

  shanslariHesabla: function() {
    let s = this.sozler[this.indikiSozunIndeksi];
    this.qalanShanslar = s.sual.length + 5 - this.tapilmayanHerfler.length;
  },

  tireleriGoster: function() {
    let s = this.sozler[this.indikiSozunIndeksi];

    this.indikiSoz = "";
    for (let i = 0; i < s.sual.length; i++) {
      if (this.tapilanHerfler.indexOf(s.sual[i]) !== -1) {
        this.indikiSoz += s.sual[i];
      } else {
        this.indikiSoz += "-";
      }
    }
  },

  consoldaGoster: function() {
    let s = this.sozler[this.indikiSozunIndeksi];

    console.log("Qalibiyetler:", this.qalibiyyet);
    console.log("Hint:", s.hint);
    console.log("Daxil Edilmisler:", this.tapilmayanHerfler.join(","));
    console.log("Tapilmali Soz:", this.indikiSoz);
  },

  browserdeGoster: function() {
    let s = this.sozler[this.indikiSozunIndeksi];
    document.querySelector(
      "#wins"
    ).innerHTML = `Qalibiyyet: ${this.qalibiyyet}`;
    document.querySelector("#hint").innerHTML = `Hint: ${s.hint}`;
    document.querySelector(
      "#daxil_edilmishler"
    ).innerHTML = `Daxil edilmisler: ${this.tapilmayanHerfler.join(",")}`;
    document.querySelector(
      "#qalan_shanslar"
    ).innerHTML = `Qalan shanslar: ${this.qalanShanslar}`;
    document.querySelector("#soz").innerHTML = `Indiki soz: ${this.indikiSoz}`;
    document.querySelector("#shekil").src = s.shekil;
  },

  sualiGoster: function() {
    this.shanslariHesabla();
    this.tireleriGoster();
    this.browserdeGoster();
    this.consoldaGoster();
  },

  guessLetter: function(letter) {
    if (
      this.tapilmayanHerfler.indexOf(letter) !== -1 ||
      this.tapilanHerfler.indexOf(letter) !== -1
    ) {
      return false;
    } else {
      let s = this.sozler[this.indikiSozunIndeksi];

      if (s.sual.indexOf(letter) !== -1) {
        this.tapilanHerfler.push(letter);
      } else {
        this.tapilmayanHerfler.push(letter);
      }
    }
  },
  isGameFinished: function() {
    if (this.qalanShanslar === 0) {
      this.resetGame();
    } else {
      let s = this.sozler[this.indikiSozunIndeksi];
      let a = new Set(s.sual.split(""));

      if (a.size === this.tapilanHerfler.length) {
        this.resetGame();
        this.qalibiyyet++;
      }
    }
  },

  resetGame: function() {
    this.indikiSozunIndeksi++;
    if (this.sozler.length <= this.indikiSozunIndeksi) {
      this.indikiSozunIndeksi = 0;
    }
    this.tapilanHerfler = [];
    this.tapilmayanHerfler = [];
  }
};
hangman.sualiGoster();

window.onkeyup = function(e) {
  hangman.guessLetter(e.key);
  hangman.isGameFinished();
  hangman.sualiGoster();
};

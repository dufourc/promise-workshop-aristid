const assert = (testName, condition, messageOk, messageError, dataToCheck) => {
  if (!condition) {
    console.error(testName, "💥 ERREUR : ", messageError, dataToCheck);
  } else {
    console.info(testName, " ✅", messageOk);
  }
};

module.exports = {
  cas1: (res) => {
    assert(
      "cas1",
      res === "👨",
      "Vous avez trouvé la bonne image 👨",
      `Attendu 👨, reçu : `,
      res
    );
  },
  cas2: (res) => {
    assert(
      "cas2",
      res === "🧔",
      "Vous avez récupéré le bon ami : 🧔",
      "Attendu 🧔, reçu :",
      res
    );
  },
  cas3: (res) => {
    assert(
      "cas3",
      res === "👧",
      "Vous avez récupéré la bonne amie : 👧",
      "Attendu 👧, reçu :",
      res
    );
  },
  cas4: (res) => {
    assert(
      "cas4",
      res.join(",") === "👨,🧔,👧,👴,👸,🎅",
      "Vous avez récupéré les bonnes images : 👨,🧔,👧,👴,👸,🎅",
      "Attendu [👨,🧔,👧,👴,👸,🎅], reçu :",
      res
    );
  },
  cas5: (res) => {
    assert(
      "cas5",
      res.join(",") === "🧔,👧,👨,👴,👸,🎅",
      "Vous avez récupéré les images bien ordonées : 🧔,👧,👨,👴,👸,🎅",
      "Attendu [🧔,👧,👨,👴,👸,🎅], reçu :",
      res
    );
  },
  cas6: (res) => {
    assert(
      "cas6",
      res.join(",") === "🎅,👧,👻,👻,👻,👨,👴,👻,👻,👻,👻,👻,👻,👻,👻",
      "Vous avez récupéré les amis de Nabila : 🎅,👧,👻,👻,👻,👨,👴,👻,👻,👻,👻,👻,👻,👻,👻",
      "Attendu [🎅,👧,👻,👻,👻,👨,👴,👻,👻,👻,👻,👻,👻,👻,👻], reçu :",
      res
    );
  },
  cas7D: (res) => {
    assert(
      "cas7D",
      res === "🥹",
      "Vladimir n'a pas d'ami: 🥹",
      "Attendu 🥹, reçu :",
      res
    );
  },
};

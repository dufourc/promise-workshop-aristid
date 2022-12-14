const assert = (testName, condition, messageOk, messageError, dataToCheck) => {
  if (!condition) {
    console.error(testName, "π₯ ERREUR : ", messageError, dataToCheck);
  } else {
    console.info(testName, " β", messageOk);
  }
};

module.exports = {
  cas1: (res) => {
    assert(
      "cas1",
      res === "π¨",
      "Vous avez trouvΓ© la bonne image π¨",
      `Attendu π¨, reΓ§u : `,
      res
    );
  },
  cas2: (res) => {
    assert(
      "cas2",
      res === "π§",
      "Vous avez rΓ©cupΓ©rΓ© le bon ami : π§",
      "Attendu π§, reΓ§u :",
      res
    );
  },
  cas3: (res) => {
    assert(
      "cas3",
      res === "π§",
      "Vous avez rΓ©cupΓ©rΓ© la bonne amie : π§",
      "Attendu π§, reΓ§u :",
      res
    );
  },
  cas4: (res) => {
    assert(
      "cas4",
      res.join(",") === "π¨,π§,π§,π΄,πΈ,π",
      "Vous avez rΓ©cupΓ©rΓ© les bonnes images : π¨,π§,π§,π΄,πΈ,π",
      "Attendu [π¨,π§,π§,π΄,πΈ,π], reΓ§u :",
      res
    );
  },
  cas5: (res) => {
    assert(
      "cas5",
      res.join(",") === "π§,π§,π¨,π΄,πΈ,π",
      "Vous avez rΓ©cupΓ©rΓ© les images bien ordonΓ©es : π§,π§,π¨,π΄,πΈ,π",
      "Attendu [π§,π§,π¨,π΄,πΈ,π], reΓ§u :",
      res
    );
  },
  cas6: (res) => {
    assert(
      "cas6",
      res.join(",") === "π,π§,π»,π»,π»,π¨,π΄,π»,π»,π»,π»,π»,π»,π»,π»",
      "Vous avez rΓ©cupΓ©rΓ© les amis de Nabila : π,π§,π»,π»,π»,π¨,π΄,π»,π»,π»,π»,π»,π»,π»,π»",
      "Attendu [π,π§,π»,π»,π»,π¨,π΄,π»,π»,π»,π»,π»,π»,π»,π»], reΓ§u :",
      res
    );
  },
  cas7D: (res) => {
    assert(
      "cas7D",
      res === "π₯Ή",
      "Vladimir n'a pas d'ami: π₯Ή",
      "Attendu π₯Ή, reΓ§u :",
      res
    );
  },
};

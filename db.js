const data = [
  {
    id: 3,
    name: "Reginald",
    picture: "👨",
    age: 72,
    activity: null,
    friends: [1],
  },
  {
    id: 1,
    name: "Bob",
    picture: "🧔",
    age: 35,
    activity: "bricoleur",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    name: "Sarah",
    picture: "👧",
    age: 25,
    activity: "Princesse malchanceuse",
    friends: [4, 3],
  },
  {
    id: 4,
    name: "Vladimir",
    picture: "👴",
    age: 69,
    activity: "Joueur pro de Call of duty - map Ukraine",
    friends: [],
  },
  {
    id: 5,
    name: "Nabilla",
    picture: "👸",
    age: 30,
    activity: "Non mais, allo quoi !",
    friends: [2512, 2, 10, 11, 12, 3, 4, 6, 7, 8, 9, 13, 14, 15, 16],
  },
  {
    id: 2512,
    name: "Père noël",
    picture: "🎅",
    age: 1700,
    activity: "Livreur amazon",
    friends: [1, 2],
  },
];

const _randomDelay = (_) => Math.round(500 * Math.random());

const db = {
  getAllUsersWithCallback: (callback) => {
    setTimeout((_) => {
      callback(
        null,
        data.map((u) => u.id)
      );
    }, _randomDelay());
    return;
  },
  getUserWithCallback: (id, callback) => {
    setTimeout((_) => {
      const res = data.find((e) => e.id === id);
      if (res === undefined) {
        callback(`unknown user id (${id})`);
      } else {
        callback(null, res);
      }
    }, _randomDelay());
    return;
  },
  getAllUsersPromise: (_) => {
    return new Promise((resolve, reject) => {
      setTimeout((_) => {
        resolve(data.map((u) => u.id));
      }, _randomDelay());
    });
  },
  getUserPromise: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout((_) => {
        const res = data.find((e) => e.id === id);
        if (res === undefined) {
          reject(`unknown user id (${id})`);
        } else {
          resolve(res);
        }
      }, _randomDelay());
    });
  },
};

module.exports = db;

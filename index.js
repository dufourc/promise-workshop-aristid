const db = require("./db.js");
const verifications = require("./verifications.js");

/**
 * Utilisez db.getUserWithCallback(id_user, callback) => retourne un objet utilisateur
 * Utilisez db.getAllUsersWithCallback(callback) => retourne une liste d'id
 * callback reçoit 2 paramètres : (error, result).  error est null ou une string, result est un objet
 * un objet utilisateur est de la forme : 
 * {
 *      id: 2512,
        name: 'Père noël',
        picture: '🎅',
        age: 1700,
        activity: 'Livreur amazon',
        friends: [1,2] // id utilisateurs
 * }
 */

/** CAS 1
 * Récupérer l'image de l'utilisateur avec id = 3
 * puis appeler verifications.cas1(<votre résultat>)
 */

/** CAS 2
 * Récupérer l'image du premier ami de l'user avec id = 3
 * puis appeler verifications.cas2(<votre résultat>)
 */

/** CAS 3
 * Récupérer l'image du premier ami du premier ami de l'user avec id = 3
 * puis appeler verifications.cas3(<votre résultat>)
 */

/** CAS 4
 * Récupérer un tableau avec l'image de chaque utilisateur
 * puis appeler verifications.cas4(<votre résultat>)
 */

/** CAS 5
 * Récupérer un tableau l'image de chaque utilisateur, ordonné par id d'utilisateur croissant
 * puis appeler verifications.cas5(<votre résultat>)
 */

/** CAS 6
 * Récupérer un tableau d'image de tous les amis de l'utilisateur avec l'id=5 (conserver l'ordre)
 * Si l'ami n'existe pas, renvoyer '👻'
 * puis appeler verifications.cas6(<votre résultat>)
 */

/** CAS 7
 * Créer une fonction générique à partir des cas 1, 2 et 3.
 * Elle prend en paramètre un userId, et le nombre de connection (N), et renvoie l'image de l'ami après N connection
 * Nous avons découpé ce cas en plusieurs étapes
 */

const getFriendImage = (userId, numberOfConnection, callback) => {};
const getFriendImagePromise = (userId, numberOfConnection) =>
  new Promise((resolve, reject) => {});

/** CAS 7 A
 * Est ce que l'on est ami avec soi-même? A discuter...
 * Même résultat que pour le cas 1
 * Appeler verifications.cas1(getFriendImage(3, 0))
 */

//getFriendImage(3, 0, (err, res) => verifications.cas1(res));
//getFriendImagePromise(3,0).then(verifications.cas1);

/** CAS 7 B
 * Même résultat que pour le cas 2
 * Appeler verifications.cas2(getFriendImage(3, 1))
 */
//getFriendImage(3, 1, (err, res) => verifications.cas2(res));
//getFriendImagePromise(3, 1).then(verifications.cas2);

/** CAS 7 C
 * Même résultat que pour le cas 3
 * Appeler verifications.cas3(getFriendImage(3, 2))
 */

// getFriendImage(3, 2, (err, res) => verifications.cas3(res));
// getFriendImagePromise(3, 2).then(verifications.cas3);

/** CAS 7 D
 * Traiter le cas pour lequel la dernière connection n'a pas d'ami
 * Dans ce cas, renvoyer '🥹'
 * Appeler verifications.cas7D(getFriendImage(3, 3))
 */

// getFriendImage(3, 4, (err, res) => verifications.cas7D(res));
// getFriendImagePromise(3,4).then(verifications.cas7D);

# Workshop on asynchronous

We are providing an API with 2 functionnalities in db.js. 
With callbacks: 
  - db.getUserWithCallback(id_user, callback) => return an user object
  - db.getAllUsersWithCallback(callback) => return user id list
Callback accepts 2 parameters : (error, result).  error is null or string, result is an objet

With Promise:
  - db.getUserPromise(id_user, callback) => return a Promise returning user object
  - db.getAllUsersPromise() => return a Promisereturning user id list
  
  
- A user object has this shape
  {
       id: 2512,
        name: 'Père noël',
        picture: '🎅',
        age: 1700,
        activity: 'Livreur amazon',
        friends: [1,2] // user ids 
  }
  
 
 You can write the code in index.js and call the verification function in verifications.js
 
 Useful reading:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  - https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

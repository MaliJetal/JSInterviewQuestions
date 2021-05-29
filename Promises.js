/*Promises
Promises lets asynchronous methods to return values at some point of time.
Promises are used to handles asynchronous functions using handlers with their actions - eventual success or failure.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected. returns  ndefined
fulfilled: meaning that the operation was completed successfully. returns value
rejected: meaning that the operation failed. returns error
Promise.all
Callback hell is eliminated using promises
Promise.race
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout((message) => {
    resolve("Fulfilled");
  }, 1000);
  //reject("Rejected");
});

myPromise.then((message) => {
  console.log("Promise " + message);
}).catch((message) => {
  console.log("Promise " + message);
});

const myPromise2 = new Promise((resolve,reject) => {
  resolve("Promise two fulfilled");
});

Promise.all([myPromise, myPromise2]).then((message) => {
  console.log("Message " + message);
})

Promise.race([myPromise, myPromise2]).then((message) => {
  console.log("Race " + message);
})

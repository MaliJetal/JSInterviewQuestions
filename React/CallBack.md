### CallBack Hell
-This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. 
-In this manner, The code structure looks like a pyramid, making it difficult to read and maintain.

####  What we should do to get rid of hell?
-JavaScript provides an easy way of escaping from a callback hell. This is done by event queue and promises.
A <b>promise</b> is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result.
Promises use .then() method to call async callbacks. We can chain as many callbacks as we want and the order is also strictly maintained.


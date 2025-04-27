// nodemon is used to restart server all file after every update in files.


files add in utils to understand errores and responce handling.
and ayncHandler to wrappe the function that need to excute again and again indiferent places used higher order function.
meaning function is in another function paramter. ex:

const runtwice = (fn) => () => {
  fn();
  fn();
};
const sayHi = () => console.log("Hi!");

const doItTwice = runtwice(sayHi);

doItTwice(); 
// Output:
// Hi!
// Hi!


date 27/4
used hooks 
used "mongoose-aggregate-paginate-v2 and plugin hooks to use aggregate methods and pipeline
used JWT-- use to encrypt the data, bcrypt -- use to hash the password 
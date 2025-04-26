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

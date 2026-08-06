const e="06-functions-closures-iife-25",t="Closure Factory",n=`function createGreeter(greeting) {
  return (name) => greeting + ', ' + name + '!';
}
const hello = createGreeter('Hello');
const howdy = createGreeter('Howdy');
console.log(hello('World'));
console.log(howdy('Partner'));`,o=`function createGreeter(greeting) {
  return (name) => greeting + ', ' + name + '!';
}
const hello = createGreeter('Hello');
const howdy = createGreeter('Howdy');
console.log(hello('World'));
console.log(howdy('Partner'));`,r=[{input:[],expected:`Hello, World!
Howdy, Partner!`}],l=["Factory returns function","greeting captured"],s={id:e,title:t,starterCode:n,solution:o,tests:r,hints:l};export{s as default,l as hints,e as id,o as solution,n as starterCode,r as tests,t as title};

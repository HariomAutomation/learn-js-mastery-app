const e="06-functions-function-basics-20",t="Return Object",n=`function createUser(name, age) {
  return { name, age };
}
const user = createUser('Tom', 25);
console.log(user.name + ' is ' + user.age);`,s=`function createUser(name, age) {
  return { name, age };
}
const user = createUser('Tom', 25);
console.log(user.name + ' is ' + user.age);`,o=[{input:[],expected:"Tom is 25"}],r=["Return object literal","Use shorthand properties"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:r};export{c as default,r as hints,e as id,s as solution,n as starterCode,o as tests,t as title};

const e="06-functions-closures-iife-26",s="Private Data",n=`function createUser(name, salary) {
  return {
    getName: () => name,
    getSalary: () => salary,
    raise: (amount) => { salary += amount; }
  };
}
const user = createUser('Alice', 50000);
console.log(user.getName());
user.raise(5000);
console.log(user.getSalary());`,t=`function createUser(name, salary) {
  return {
    getName: () => name,
    getSalary: () => salary,
    raise: (amount) => { salary += amount; }
  };
}
const user = createUser('Alice', 50000);
console.log(user.getName());
user.raise(5000);
console.log(user.getSalary());`,a=[{input:[],expected:`Alice
55000`}],r=["salary is private","Methods access it"],o={id:e,title:s,starterCode:n,solution:t,tests:a,hints:r};export{o as default,r as hints,e as id,t as solution,n as starterCode,a as tests,s as title};

const e="08-objects-object-basics-30",t="Practice 1",s=`const user = {name: 'Alice', age: 25, active: true};
console.log(user.hasOwnProperty('name'));
console.log(user.age);`,o=`const user = {name: 'Alice', age: 25, active: true};
console.log(user.hasOwnProperty('name'));
console.log(user.age);`,n=[{input:[],expected:`true
25`}],c=["hasOwnProperty check","Dot notation access"],a={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{a as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};

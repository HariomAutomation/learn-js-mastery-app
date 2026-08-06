const e="06-functions-arrow-functions-16",t="Default Params Arrow",n=`const greet = (name = 'Friend') => 'Hi ' + name;
console.log(greet());
console.log(greet('Alice'));`,o=`const greet = (name = 'Friend') => 'Hi ' + name;
console.log(greet());
console.log(greet('Alice'));`,s=[{input:[],expected:`Hi Friend
Hi Alice`}],r=["Default parameter syntax","Works same as regular"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:r};export{i as default,r as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

const t="06-functions-arrow-functions-05",n="Block Body Arrow",e=`const greet = (name) => {
  const msg = 'Hello, ' + name;
  return msg;
};
console.log(greet('World'));`,o=`const greet = (name) => {
  const msg = 'Hello, ' + name;
  return msg;
};
console.log(greet('World'));`,s=[{input:[],expected:"Hello, World"}],r=["Use braces for multiple lines","Explicit return needed"],l={id:t,title:n,starterCode:e,solution:o,tests:s,hints:r};export{l as default,r as hints,t as id,o as solution,e as starterCode,s as tests,n as title};

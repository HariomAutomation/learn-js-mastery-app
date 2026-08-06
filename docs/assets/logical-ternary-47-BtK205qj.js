const t="03-operators-logical-ternary-47",s="Logical AND short circuit",e=`const showGreeting = false;
const result = showGreeting && 'Welcome!';
console.log(result);`,o=`const showGreeting = false;
const result = showGreeting && 'Welcome!';
console.log(result);`,n=[{input:[],expected:"false"}],l=["&& short-circuits on first falsy","showGreeting is false"],r={id:t,title:s,starterCode:e,solution:o,tests:n,hints:l};export{r as default,l as hints,t as id,o as solution,e as starterCode,n as tests,s as title};

const s="01-variables-declarations-variables-intro-20",t="Symbol uniqueness",o=`const s1 = Symbol("id")
const s2 = Symbol("id")
console.log(s1 === s2)`,n=`const s1 = Symbol("id")
const s2 = Symbol("id")
console.log(s1 === s2)`,e=[{input:[],expected:"false"}],i=["Every Symbol is unique"],l={id:s,title:t,starterCode:o,solution:n,tests:e,hints:i};export{l as default,i as hints,s as id,n as solution,o as starterCode,e as tests,t as title};

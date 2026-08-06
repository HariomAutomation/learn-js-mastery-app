const e="01-variables-declarations-variables-intro-33",o="Object.groupBy",t=`const people = [{name:"A",age:25},{name:"B",age:30}]
const g = Object.groupBy(people, p => p.age >= 30 ? "senior" : "junior")
console.log(g.senior.length)`,n=`const people = [{name:"A",age:25},{name:"B",age:30}]
const g = Object.groupBy(people, p => p.age >= 30 ? "senior" : "junior")
console.log(g.senior.length)`,s=[{input:[],expected:"1"}],a=["groupBy groups array by callback"],r={id:e,title:o,starterCode:t,solution:n,tests:s,hints:a};export{r as default,a as hints,e as id,n as solution,t as starterCode,s as tests,o as title};

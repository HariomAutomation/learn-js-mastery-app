const t="08-objects-object-basics-04",e="Computed Property",o=`const key = 'age';
const person = {[key]: 25};
console.log(person.age);`,s=`const key = 'age';
const person = {[key]: 25};
console.log(person.age);`,n=[{input:[],expected:"25"}],c=["Computed property name","Wrap key in brackets"],r={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{r as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};

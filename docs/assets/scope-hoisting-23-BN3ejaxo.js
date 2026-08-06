const t="01-variables-declarations-scope-hoisting-23",s="scope and this",o=`const obj = {
  x: 10,
  getX() { return this.x }
}
console.log(obj.getX())`,n=`const obj = {
  x: 10,
  getX() { return this.x }
}
console.log(obj.getX())`,e=[{input:[],expected:"10"}],i=["this depends on call site"],c={id:t,title:s,starterCode:o,solution:n,tests:e,hints:i};export{c as default,i as hints,t as id,n as solution,o as starterCode,e as tests,s as title};

const t="06-functions-arrow-functions-49",o="Arrow Object Method Warning",n=`const obj = {
  value: 42,
  getValue: () => this.value
};
console.log(obj.getValue());`,e=`const obj = {
  value: 42,
  getValue: () => this.value
};
console.log(obj.getValue());`,s=[{input:[],expected:"undefined"}],i=["Arrow doesn't bind this","this is outer scope"],c={id:t,title:o,starterCode:n,solution:e,tests:s,hints:i};export{c as default,i as hints,t as id,e as solution,n as starterCode,s as tests,o as title};

const t="06-functions-arrow-functions-23",n="This Binding Patterns",o=`const obj = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};
console.log(obj.getValue()());`,e=`const obj = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};
console.log(obj.getValue()());`,s=[{input:[],expected:"42"}],u=["Arrow captures this","From outer function"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:u};export{i as default,u as hints,t as id,e as solution,o as starterCode,s as tests,n as title};

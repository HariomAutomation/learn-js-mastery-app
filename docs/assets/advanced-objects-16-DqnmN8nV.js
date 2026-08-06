const t="08-objects-advanced-objects-16",e="Computed Getter",s=`const obj = {
  items: [1, 2, 3, 4, 5],
  get sum() { return this.items.reduce((a, b) => a + b, 0); }
};
console.log(obj.sum);`,o=`const obj = {
  items: [1, 2, 3, 4, 5],
  get sum() { return this.items.reduce((a, b) => a + b, 0); }
};
console.log(obj.sum);`,n=[{input:[],expected:"15"}],c=["Getter computes value","Dynamic property"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};

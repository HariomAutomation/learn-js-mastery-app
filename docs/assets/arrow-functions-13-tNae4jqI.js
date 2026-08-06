const o="06-functions-arrow-functions-13",t="Arrow No Prototype",n=`const Foo = () => {};
console.log(typeof Foo.prototype);`,s=`const Foo = () => {};
console.log(typeof Foo.prototype);`,e=[{input:[],expected:"undefined"}],r=["Arrows don't have prototype","Can't use with new"],c={id:o,title:t,starterCode:n,solution:s,tests:e,hints:r};export{c as default,r as hints,o as id,s as solution,n as starterCode,e as tests,t as title};

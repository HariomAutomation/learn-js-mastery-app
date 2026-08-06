const t="01-variables-declarations-var-let-const-21",e="const getter setter",s=`const obj = { _x: 1, get x() { return this._x } }
console.log(obj.x)`,o=`const obj = { _x: 1, get x() { return this._x } }
console.log(obj.x)`,n=[{input:[],expected:"1"}],r=["getter returns value"],c={id:t,title:e,starterCode:s,solution:o,tests:n,hints:r};export{c as default,r as hints,t as id,o as solution,s as starterCode,n as tests,e as title};

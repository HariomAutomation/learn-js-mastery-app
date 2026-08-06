const e="13-oop-classes-inheritance-38",t="Instance Method",n=`class Greeting {
  constructor(name) { this.name = name; }
  greet() { return 'Hello ' + this.name; }
}
console.log(new Greeting('World').greet());`,s=`class Greeting {
  constructor(name) { this.name = name; }
  greet() { return 'Hello ' + this.name; }
}
console.log(new Greeting('World').greet());`,o=[{input:[],expected:"Hello World"}],r=["Methods are on prototype","Use this to access instance"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:r};export{c as default,r as hints,e as id,s as solution,n as starterCode,o as tests,t as title};

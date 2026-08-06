const t="13-oop-prototypes-this-13",s="This in Class",e=`class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
new Person('John').greet();`,n=`class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
new Person('John').greet();`,o=[{input:[],expected:"John"}],i=["Class methods work like prototype","this is the instance"],r={id:t,title:s,starterCode:e,solution:n,tests:o,hints:i};export{r as default,i as hints,t as id,n as solution,e as starterCode,o as tests,s as title};

const t="13-oop-prototypes-this-41",e="Prototype Inheritance",n=`function Parent() { this.type = 'parent'; }
function Child() { Parent.call(this); }
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
console.log(c.type);`,o=`function Parent() { this.type = 'parent'; }
function Child() { Parent.call(this); }
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
console.log(c.type);`,c=[{input:[],expected:"parent"}],s=["Object.create for prototype chain","Call parent constructor"],r={id:t,title:e,starterCode:n,solution:o,tests:c,hints:s};export{r as default,s as hints,t as id,o as solution,n as starterCode,c as tests,e as title};

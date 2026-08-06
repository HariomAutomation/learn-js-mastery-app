const e="13-oop-classes-inheritance-34",n="Method Overriding",t=`class Animal {
  speak() { return '...'; }
}
class Cat extends Animal {
  speak() { return 'meow'; }
}
console.log(new Cat().speak());`,s=`class Animal {
  speak() { return '...'; }
}
class Cat extends Animal {
  speak() { return 'meow'; }
}
console.log(new Cat().speak());`,a=[{input:[],expected:"meow"}],o=["Override parent method","Same method name"],r={id:e,title:n,starterCode:t,solution:s,tests:a,hints:o};export{r as default,o as hints,e as id,s as solution,t as starterCode,a as tests,n as title};

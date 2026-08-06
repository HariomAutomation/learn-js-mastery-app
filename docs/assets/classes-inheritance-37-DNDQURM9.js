const t="13-oop-classes-inheritance-37",s="Class Constructor",o=`class Book {
  constructor(title) { this.title = title; }
}
const b = new Book('JS');
console.log(b.title);`,n=`class Book {
  constructor(title) { this.title = title; }
}
const b = new Book('JS');
console.log(b.title);`,e=[{input:[],expected:"JS"}],i=["constructor initializes instance","this refers to new object"],c={id:t,title:s,starterCode:o,solution:n,tests:e,hints:i};export{c as default,i as hints,t as id,n as solution,o as starterCode,e as tests,s as title};

const t="13-oop-oop-patterns-23",n="Repository",i=`class Repository {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  findById(id) { return this.items.find(i => i.id === id); }
  findAll() { return this.items; }
}
const repo = new Repository();
repo.add({ id: 1, name: 'John' });
console.log(repo.findById(1).name);`,s=`class Repository {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  findById(id) { return this.items.find(i => i.id === id); }
  findAll() { return this.items; }
}
const repo = new Repository();
repo.add({ id: 1, name: 'John' });
console.log(repo.findById(1).name);`,e=[{input:[],expected:"John"}],o=["Centralized data access","CRUD operations"],d={id:t,title:n,starterCode:i,solution:s,tests:e,hints:o};export{d as default,o as hints,t as id,s as solution,i as starterCode,e as tests,n as title};

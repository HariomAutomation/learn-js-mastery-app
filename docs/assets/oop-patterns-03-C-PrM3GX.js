const t="13-oop-oop-patterns-03",n="Singleton",s=`class Database {
  static instance;
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connected = true;
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);`,a=`class Database {
  static instance;
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connected = true;
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);`,e=[{input:[],expected:"true"}],o=["Singleton has one instance","Check if instance exists"],c={id:t,title:n,starterCode:s,solution:a,tests:e,hints:o};export{c as default,o as hints,t as id,a as solution,s as starterCode,e as tests,n as title};

const n="13-oop-classes-inheritance-08",t="Private Fields",s=`class Account {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}
const a = new Account();
a.deposit(100);
console.log(a.#balance);`,e=`class Account {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}
const a = new Account();
a.deposit(100);
console.log(a.#balance);`,a=[{input:[],expected:"100"}],c=["# creates private field","Cannot access outside class"],o={id:n,title:t,starterCode:s,solution:e,tests:a,hints:c};export{o as default,c as hints,n as id,e as solution,s as starterCode,a as tests,t as title};

const n="13-oop-oop-patterns-02",t="Revealing Module",e=`const bank = (function() {
  let balance = 0;
  function deposit(amount) { balance += amount; }
  function getBalance() { return balance; }
  return { deposit, getBalance };
})();
bank.deposit(100);
console.log(bank.getBalance());`,o=`const bank = (function() {
  let balance = 0;
  function deposit(amount) { balance += amount; }
  function getBalance() { return balance; }
  return { deposit, getBalance };
})();
bank.deposit(100);
console.log(bank.getBalance());`,a=[{input:[],expected:"100"}],c=["Define functions privately","Return object mapping names"],s={id:n,title:t,starterCode:e,solution:o,tests:a,hints:c};export{s as default,c as hints,n as id,o as solution,e as starterCode,a as tests,t as title};

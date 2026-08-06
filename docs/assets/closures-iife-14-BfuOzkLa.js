const n="06-functions-closures-iife-14",t="Private Methods",e=`function createBank() {
  let balance = 0;
  function validate(amount) {
    return amount > 0;
  }
  return {
    deposit: (amount) => {
      if (validate(amount)) balance += amount;
    },
    getBalance: () => balance
  };
}
const bank = createBank();
bank.deposit(100);
bank.deposit(50);
console.log(bank.getBalance());`,a=`function createBank() {
  let balance = 0;
  function validate(amount) {
    return amount > 0;
  }
  return {
    deposit: (amount) => {
      if (validate(amount)) balance += amount;
    },
    getBalance: () => balance
  };
}
const bank = createBank();
bank.deposit(100);
bank.deposit(50);
console.log(bank.getBalance());`,o=[{input:[],expected:"150"}],s=["validate is private","Not exposed in return"],i={id:n,title:t,starterCode:e,solution:a,tests:o,hints:s};export{i as default,s as hints,n as id,a as solution,e as starterCode,o as tests,t as title};

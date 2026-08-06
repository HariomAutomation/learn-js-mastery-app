const n="13-oop-oop-patterns",e="OOP patterns — Factory, Encapsulation",t=`// 1. Factory pattern — object bina new ke banao
function createUser(name, age, role) {
  return {
    name,
    age,
    role,
    introduce() {
      return \`I am \${this.name}, \${this.age} years old\`
    }
  }
}

const user1 = createUser("Sita", 28, "Developer")
console.log(user1.introduce()) // __BLANK__
console.log(user1.role) // __BLANK__

// 2. Encapsulation — private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance // private

  return {
    deposit(amount) {
      balance += amount
      return \`Deposited \${amount}. Balance: \${balance}\`
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds"
      balance -= amount
      return \`Withdrawn \${amount}. Balance: \${balance}\`
    },
    getBalance() {
      return balance
    }
  }
}

const account = createBankAccount(1000)
console.log(account.deposit(500)) // __BLANK__
console.log(account.withdraw(200)) // __BLANK__
console.log(account.withdraw(2000)) // __BLANK__
console.log(account.getBalance()) // __BLANK__
// console.log(account.balance) // undefined — private hai

// 3. Module pattern — grouped methods
const Calculator = (function() {
  let result = 0

  return {
    add(n) { result += n; return this },
    subtract(n) { result -= n; return this },
    getResult() { return result },
    reset() { result = 0; return this }
  }
})()

const calcResult = Calculator.add(10).add(5).subtract(3).getResult()
console.log(calcResult) // __BLANK__`,a=`function createUser(name, age, role) {
  return {
    name,
    age,
    role,
    introduce() {
      return \`I am \${this.name}, \${this.age} years old\`
    }
  }
}

const user1 = createUser("Sita", 28, "Developer")
console.log(user1.introduce())
console.log(user1.role)

function createBankAccount(initialBalance) {
  let balance = initialBalance
  return {
    deposit(amount) {
      balance += amount
      return \`Deposited \${amount}. Balance: \${balance}\`
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds"
      balance -= amount
      return \`Withdrawn \${amount}. Balance: \${balance}\`
    },
    getBalance() {
      return balance
    }
  }
}

const account = createBankAccount(1000)
console.log(account.deposit(500))
console.log(account.withdraw(200))
console.log(account.withdraw(2000))
console.log(account.getBalance())

const Calculator = (function() {
  let result = 0
  return {
    add(n) { result += n; return this },
    subtract(n) { result -= n; return this },
    getResult() { return result },
    reset() { result = 0; return this }
  }
})()

const calcResult = Calculator.add(10).add(5).subtract(3).getResult()
console.log(calcResult)`,o=[{input:[],expected:`I am Sita, 28 years old
Developer
Deposited 500. Balance: 1500
Withdrawn 200. Balance: 1300
Insufficient funds
1300
12`}],r=["Factory: function se object return karo bina new keyword ke","Encapsulation: closure se private variables — bahar se direct access nahi ho sakta","Module pattern: IIFE se private state, methods through return object expose karo"],c={id:n,title:e,starterCode:t,solution:a,tests:o,hints:r};export{c as default,r as hints,n as id,a as solution,t as starterCode,o as tests,e as title};

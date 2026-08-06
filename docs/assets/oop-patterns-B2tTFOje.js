const n=`---
id: "13-oop-03-oop-patterns"
title: "OOP Patterns & Practice"
module: "13-oop"
order: 3
prerequisites: ["13-oop-02-prototypes-this"]
---

# OOP Patterns & Practice

Real-world OOP patterns aur best practices.

## Private Fields

\`\`\`js
class BankAccount {
  #balance = 0  // private field
  #pin

  constructor(owner, pin) {
    this.owner = owner
    this.#pin = pin
  }

  deposit(amount, pin) {
    if (pin !== this.#pin) return "Invalid PIN"
    this.#balance += amount
    return \`Deposited ₹\${amount}. Balance: ₹\${this.#balance}\`
  }

  getBalance(pin) {
    if (pin !== this.#pin) return "Invalid PIN"
    return this.#balance
  }
}

let acc = new BankAccount("Riya", "1234")
console.log(acc.deposit(5000, "1234"))  // "Deposited ₹5000. Balance: ₹5000"
console.log(acc.#balance)  // Error! Private field
\`\`\`

## Factory Pattern

\`\`\`js
function createLogger(prefix) {
  return {
    log: (msg) => console.log(\`[\${prefix}] \${msg}\`),
    error: (msg) => console.error(\`[\${prefix}] ERROR: \${msg}\`)
  }
}

let appLog = createLogger("APP")
let dbLog = createLogger("DB")

appLog.log("Server started")   // [APP] Server started
dbLog.error("Connection lost") // [DB] ERROR: Connection lost
\`\`\`

## Singleton Pattern

\`\`\`js
class Database {
  static #instance = null

  constructor() {
    if (Database.#instance) {
      return Database.#instance
    }
    this.connected = false
    Database.#instance = this
  }

  connect() {
    this.connected = true
    console.log("Connected to DB")
  }
}

let db1 = new Database()
let db2 = new Database()
console.log(db1 === db2)  // true — same instance!
\`\`\`

## Module Pattern

\`\`\`js
// Private state, public API
const counter = (() => {
  let count = 0  // private

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  }
})()

counter.increment()
counter.increment()
console.log(counter.getCount())  // 2
\`\`\`

## Key Takeaways

- \`#\` se private fields banao
- Factory pattern se flexible objects banao
- Singleton ensure karta hai ek hi instance ho
- IIFE + closures se module pattern bana sakte ho
- Classes modern OOP ka best way hai JavaScript mein
`;export{n as default};

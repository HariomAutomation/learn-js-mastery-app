const n="13-oop-prototypes-this",e="Prototypes aur this binding samjho",t=`// 1. this binding samjho
const person = {
  name: "Arjun",
  greet() {
    return \`Hi, I am \${this.name}\`
  }
}

console.log(person.greet()) // "Hi, I am Arjun"

// function借用 — ye kya karega?
const greetFunction = person.greet
// console.log(greetFunction()) // Error kyonki this undefined hai

// 2. Prototype method — Object.create se
const animalProto = {
  init(name, sound) {
    this.name = name
    this.sound = sound
    return this // chaining ke liye
  },
  speak() {
    return \`\${this.name} makes \${this.sound}\`
  }
}

const cat = Object.create(animalProto)
cat.init("Whiskers", "Meow")
console.log(cat.speak()) // __BLANK__

// 3. Prototype chain
function User(name, role) {
  this.name = name
  this.role = role
}

User.prototype.getInfo = function() {
  return \`\${this.name} (\${this.role})\`
}

const admin = new User("Rahul", "Admin")
console.log(admin.getInfo()) // __BLANK__
console.log(admin.hasOwnProperty("name")) // __BLANK__
console.log(admin.hasOwnProperty("getInfo")) // __BLANK__`,o=`const person = {
  name: "Arjun",
  greet() {
    return \`Hi, I am \${this.name}\`
  }
}
console.log(person.greet())

const animalProto = {
  init(name, sound) {
    this.name = name
    this.sound = sound
    return this
  },
  speak() {
    return \`\${this.name} makes \${this.sound}\`
  }
}

const cat = Object.create(animalProto)
cat.init("Whiskers", "Meow")
console.log(cat.speak())

function User(name, role) {
  this.name = name
  this.role = role
}
User.prototype.getInfo = function() {
  return \`\${this.name} (\${this.role})\`
}

const admin = new User("Rahul", "Admin")
console.log(admin.getInfo())
console.log(admin.hasOwnProperty("name"))
console.log(admin.hasOwnProperty("getInfo"))`,s=[{input:[],expected:`Hi, I am Arjun
Whiskers makes Meow
Rahul (Admin)
true
false`}],a=["this keyword: jis object pe method call hota hai, uska reference deta hai","Object.create se naya object banta hai jo prototype se linked hota hai","hasOwnProperty: name own property hai (true), getInfo prototype pe hai (false)"],r={id:n,title:e,starterCode:t,solution:o,tests:s,hints:a};export{r as default,a as hints,n as id,o as solution,t as starterCode,s as tests,e as title};

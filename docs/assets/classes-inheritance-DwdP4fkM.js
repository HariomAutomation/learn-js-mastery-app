const n="13-oop-classes-inheritance",e="Classes aur Inheritance — OOP basics",s=`// 1. Animal class banao
class Animal {
  // constructor banao — name aur sound
  constructor(name, sound) {
    // your code here
  }

  // speak method — "\${name} says \${sound}"
  speak() {
    // your code here
  }
}

const dog = new Animal("Buddy", "Woof")
console.log(dog.speak()) // "Buddy says Woof"

// 2. Dog class — Animal se inherit karo
class Dog extends Animal {
  // constructor — name aur breed
  constructor(name, breed) {
    // your code here — super call karo
  }

  // fetch method — "\${name} is fetching the ball!"
  fetch() {
    // your code here
  }
}

const rex = new Dog("Rex", "German Shepherd")
console.log(rex.speak()) // "Rex says Woof"
console.log(rex.fetch()) // "Rex is fetching the ball!"

// 3. Static method
class MathHelper {
  static add(a, b) {
    return a + b
  }

  static multiply(a, b) {
    return a * b
  }
}

console.log(MathHelper.add(5, 3)) // 8
console.log(MathHelper.multiply(4, 7)) // 28`,o=`class Animal {
  constructor(name, sound) {
    this.name = name
    this.sound = sound
  }

  speak() {
    return \`\${this.name} says \${this.sound}\`
  }
}

const dog = new Animal("Buddy", "Woof")
console.log(dog.speak())

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof")
    this.breed = breed
  }

  fetch() {
    return \`\${this.name} is fetching the ball!\`
  }
}

const rex = new Dog("Rex", "German Shepherd")
console.log(rex.speak())
console.log(rex.fetch())

class MathHelper {
  static add(a, b) {
    return a + b
  }
  static multiply(a, b) {
    return a * b
  }
}

console.log(MathHelper.add(5, 3))
console.log(MathHelper.multiply(4, 7))`,t=[{input:[],expected:`Buddy says Woof
Rex says Woof
Rex is fetching the ball!
8
28`}],a=["Constructor mein this se properties assign karo — this.name = name","Inheritance: extends keyword + super() se parent class ka constructor call karo","Static method: class se directly call hota hai — instance ki zaroorat nahi"],r={id:n,title:e,starterCode:s,solution:o,tests:t,hints:a};export{r as default,a as hints,n as id,o as solution,s as starterCode,t as tests,e as title};

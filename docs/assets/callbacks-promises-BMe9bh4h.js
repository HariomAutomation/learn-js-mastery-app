const e="12-async-callbacks-promises",n="Promises samjho — resolve, reject, chaining",s=`// Promise simulation — async code ko sync samjho

// 1. Promise banao — resolve karo agar positive hai
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(\`Positive: \${num}\`)
    } else {
      reject(\`Not positive: \${num}\`)
    }
  })
}

checkNumber(5).then(msg => console.log(msg)) // __BLANK__
checkNumber(-3).catch(msg => console.log(msg)) // __BLANK__

// 2. Promise chaining
function double(n) {
  return Promise.resolve(n * 2)
}

double(5)
  .then(result => double(result))  // 10
  .then(result => double(result))  // 20
  .then(result => console.log(result)) // __BLANK__

// 3. Promise.all — sab ek saath resolve ho
const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)

Promise.all([p1, p2, p3]).then(results => {
  console.log(results) // __BLANK__
  console.log(results.reduce((a, b) => a + b, 0)) // __BLANK__
})`,o=`function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(\`Positive: \${num}\`)
    } else {
      reject(\`Not positive: \${num}\`)
    }
  })
}

checkNumber(5).then(msg => console.log(msg))
checkNumber(-3).catch(msg => console.log(msg))

function double(n) {
  return Promise.resolve(n * 2)
}

double(5)
  .then(result => double(result))
  .then(result => double(result))
  .then(result => console.log(result))

const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)

Promise.all([p1, p2, p3]).then(results => {
  console.log(results)
  console.log(results.reduce((a, b) => a + b, 0))
})`,r=[{input:[],expected:`Positive: 5
Not positive: -3
20
[10, 20, 30]
60`}],t=["Promise: resolve() se success, reject() se error milta hai","Chaining: har .then() next step return karta hai — naya Promise milta hai","Promise.all: sab promises ka result array mein milta hai — jab saare resolve ho jaayein"],l={id:e,title:n,starterCode:s,solution:o,tests:r,hints:t};export{l as default,t as hints,e as id,o as solution,s as starterCode,r as tests,n as title};

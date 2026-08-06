const n="12-async-async-await",e="Async/Await patterns — clean async code",t=`// Async/Await — Promises ko aur clean banao

// 1. Async function banao
async function greet(name) {
  return \`Hello, \${name}!\`
}

// greet() ek Promise return karta hai
const result = await greet("Priya")
console.log(result) // __BLANK__

// 2. Try-catch with async/await
async function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred")
      else resolve({ id: 1, name: "Data" })
    }, 100)
  })
}

async function getData() {
  try {
    const data = await fetchData(false)
    console.log(data) // __BLANK__
  } catch (err) {
    console.log(err)
  }
}

await getData()

// 3. Async loop — sequential awaits
async function processItems(items) {
  const results = []
  for (const item of items) {
    const processed = await Promise.resolve(item.toUpperCase())
    results.push(processed)
  }
  return results
}

const items = await processItems(["a", "b", "c"])
console.log(items) // __BLANK__`,a=`async function greet(name) {
  return \`Hello, \${name}!\`
}
const result = await greet("Priya")
console.log(result)

async function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Error occurred")
      else resolve({ id: 1, name: "Data" })
    }, 100)
  })
}

async function getData() {
  try {
    const data = await fetchData(false)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
await getData()

async function processItems(items) {
  const results = []
  for (const item of items) {
    const processed = await Promise.resolve(item.toUpperCase())
    results.push(processed)
  }
  return results
}
const items = await processItems(["a", "b", "c"])
console.log(items)`,s=[{input:[],expected:`Hello, Priya!
{ id: 1, name: "Data" }
["A", "B", "C"]`}],o=["async function hamesha Promise return karta hai — uske andar await use kar sakte ho","try-catch async/await ke saath — Promise .catch() jaisa kaam karta hai","Sequential await: for loop mein await — har step pehle complete hota hai"],r={id:n,title:e,starterCode:t,solution:a,tests:s,hints:o};export{r as default,o as hints,n as id,a as solution,t as starterCode,s as tests,e as title};

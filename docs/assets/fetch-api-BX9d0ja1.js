const e="12-async-fetch-api",a="Fetch API simulation — data transform karo",n=`// Fetch API simulation — API response data transform karo

// Simulated API response
const apiResponse = {
  status: 200,
  data: [
    { id: 1, name: "Aman", score: 85 },
    { id: 2, name: "Riya", score: 92 },
    { id: 3, name: "Rahul", score: 78 },
    { id: 4, name: "Priya", score: 95 },
    { id: 5, name: "Vijay", score: 60 }
  ]
}

// 1. Sirf names nikalo
const names = // data se saare names extract karo
console.log(names) // ["Aman", "Riya", "Rahul", "Priya", "Vijay"]

// 2. High scorers filter karo (80+ score)
const highScorers = // 80 se zyada score wale students
console.log(highScorers.map(s => s.name)) // ["Aman", "Riya", "Priya"]

// 3. Average score nikalo
const avgScore = // saare scores ka average
console.log(avgScore) // 82

// 4. Sorted by score (descending)
const sorted = // score ke hisaab se sort karo (zyada pehle)
console.log(sorted.map(s => \`\${s.name}: \${s.score}\`)) // ["Priya: 95", "Riya: 92", "Aman: 85", "Rahul: 78", "Vijay: 60"]

// 5. Top scorer dhundho
const topScorer = // sabse zyada score wala student
console.log(\`\${topScorer.name} got \${topScorer.score}\`) // "Priya got 95"`,s=`const apiResponse = {
  status: 200,
  data: [
    { id: 1, name: "Aman", score: 85 },
    { id: 2, name: "Riya", score: 92 },
    { id: 3, name: "Rahul", score: 78 },
    { id: 4, name: "Priya", score: 95 },
    { id: 5, name: "Vijay", score: 60 }
  ]
}

const names = apiResponse.data.map(s => s.name)
console.log(names)

const highScorers = apiResponse.data.filter(s => s.score >= 80)
console.log(highScorers.map(s => s.name))

const avgScore = Math.round(apiResponse.data.reduce((sum, s) => sum + s.score, 0) / apiResponse.data.length)
console.log(avgScore)

const sorted = [...apiResponse.data].sort((a, b) => b.score - a.score)
console.log(sorted.map(s => \`\${s.name}: \${s.score}\`))

const topScorer = sorted[0]
console.log(\`\${topScorer.name} got \${topScorer.score}\`)`,o=[{input:[],expected:`["Aman", "Riya", "Rahul", "Priya", "Vijay"]
["Aman", "Riya", "Priya"]
82
["Priya: 95", "Riya: 92", "Aman: 85", "Rahul: 78", "Vijay: 60"]
Priya got 95`}],r=["map() se sirf ek property nikal sakte ho — names chahiye to map(s => s.name)","Average: reduce se sum nikalo, length se divide karo, Math.round se round karo","Sort descending: sort((a, b) => b.score - a.score) — b pehle aaye"],t={id:e,title:a,starterCode:n,solution:s,tests:o,hints:r};export{t as default,r as hints,e as id,s as solution,n as starterCode,o as tests,a as title};

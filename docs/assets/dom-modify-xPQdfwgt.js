const e="10-dom-dom-modify",o="DOM modify karo — text changes simulate karo",t=`// DOM text manipulation simulation
let pageText = "Welcome to our website"

// 1. Text change karo
pageText = // "Welcome" ko "Hello" se replace karo
console.log(pageText) // "Hello to our website"

// 2. Text uppercase karo
const upperText = // pageText ko uppercase banao
console.log(upperText) // "HELLO TO OUR WEBSITE"

// 3. Text mein se words count karo
const wordCount = // pageText ke words count karo
console.log(wordCount) // 4

// 4. Text prepend karo (shuru mein add karo)
pageText = // pageText ke shuru mein ">> " add karo
console.log(pageText) // ">> Hello to our website"

// 5. Text truncate karo (15 chars tak)
const truncated = // pageText ko 15 chars tak kaato, "..." lagao
console.log(truncated) // ">> Hello to ou..."`,n=`let pageText = "Welcome to our website"
pageText = pageText.replace("Welcome", "Hello")
console.log(pageText)
const upperText = pageText.toUpperCase()
console.log(upperText)
const wordCount = pageText.split(" ").length
console.log(wordCount)
pageText = ">> " + pageText
console.log(pageText)
const truncated = pageText.length > 15 ? pageText.slice(0, 15) + "..." : pageText
console.log(truncated)`,a=[{input:[],expected:`Hello to our website
HELLO TO OUR WEBSITE
4
>> Hello to our website
>> Hello to ou...`}],l=["replace() se ek word doosre se badal sakte ho",'Word count: split(" ").length — spaces se words alag karo aur count lo','Truncation: slice(0, 15) + "..." — condition lagao ki length zyada hai to kaato'],s={id:e,title:o,starterCode:t,solution:n,tests:a,hints:l};export{s as default,l as hints,e as id,n as solution,t as starterCode,a as tests,o as title};

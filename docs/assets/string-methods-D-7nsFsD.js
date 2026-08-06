const e="09-strings-string-methods",n="String methods ka power — includes, slice, split, join, replace",o=`const sentence = "I love JavaScript and I love coding"

// 1. includes() — check karo ki word hai ya nahi
console.log(sentence.includes("JavaScript")) // true
console.log(sentence.includes("Python")) // __BLANK__

// 2. slice() — substring nikalo
console.log(sentence.slice(7, 17)) // __BLANK__

// 3. split() — string ko array mein todo
const words = sentence.split(" ")
console.log(words.length) // __BLANK__
console.log(words.slice(0, 3)) // __BLANK__

// 4. join() — array ko string mein todo
const rejoined = words.join("-")
console.log(rejoined) // __BLANK__

// 5. replace() — word badlo
const newSentence = sentence.replace("love", "adore")
console.log(newSentence) // __BLANK__`,s=`const sentence = "I love JavaScript and I love coding"
console.log(sentence.includes("JavaScript"))
console.log(sentence.includes("Python"))
console.log(sentence.slice(7, 17))
const words = sentence.split(" ")
console.log(words.length)
console.log(words.slice(0, 3))
const rejoined = words.join("-")
console.log(rejoined)
const newSentence = sentence.replace("love", "adore")
console.log(newSentence)`,t=[{input:[],expected:`true
false
JavaScript
7
["I", "love", "JavaScript"]
I-love-JavaScript-and-I-love-coding
I adore JavaScript and I love coding`}],c=["includes() boolean return karta hai — true ya false","slice(start, end) — start se end tak ka substring deta hai (end exclusive)","replace() pehla match hi replace karta hai, saare nahi"],l={id:e,title:n,starterCode:o,solution:s,tests:t,hints:c};export{l as default,c as hints,e as id,s as solution,o as starterCode,t as tests,n as title};

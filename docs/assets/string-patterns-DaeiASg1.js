const e="09-strings-string-patterns",n="String patterns — capitalize, reverse, count vowels",o=`// 1. Pehla letter capitalize karo
function capitalize(str) {
  // your code here
}
console.log(capitalize("hello")) // "Hello"
console.log(capitalize("javaScript")) // "JavaScript"

// 2. String ko reverse karo
function reverseString(str) {
  // your code here — split, reverse, join use karo
}
console.log(reverseString("hello")) // "olleh"
console.log(reverseString("naman")) // "naman"

// 3. Vowels kitne hain count karo
function countVowels(str) {
  // your code here
}
console.log(countVowels("hello world")) // 3
console.log(countVowels("AEIOU")) // 5
console.log(countVowels("rhythm")) // 0`,t=`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("hello"))
console.log(capitalize("javaScript"))

function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"))
console.log(reverseString("naman"))

function countVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g)
  return vowels ? vowels.length : 0
}
console.log(countVowels("hello world"))
console.log(countVowels("AEIOU"))
console.log(countVowels("rhythm"))`,s=[{input:[],expected:`Hello
JavaScript
olleh
naman
3
5
0`}],l=["Capitalize: charAt(0).toUpperCase() + slice(1) se pehla letter bada aur baaki same",'Reverse: split("") se array banao, reverse() karo, join("") se wapas string banao',"Vowels count: regex /[aeiouAEIOU]/g se saare vowels match karo, .length se count lo"],r={id:e,title:n,starterCode:o,solution:t,tests:s,hints:l};export{r as default,l as hints,e as id,t as solution,o as starterCode,s as tests,n as title};

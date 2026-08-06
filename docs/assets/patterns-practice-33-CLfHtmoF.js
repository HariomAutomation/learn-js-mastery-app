const t="05-loops-patterns-practice-33",o="Count Vowels",n=`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,s=`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,c=[{input:[],expected:"3"}],e=["Check each character","Use includes()"],l={id:t,title:o,starterCode:n,solution:s,tests:c,hints:e};export{l as default,e as hints,t as id,s as solution,n as starterCode,c as tests,o as title};

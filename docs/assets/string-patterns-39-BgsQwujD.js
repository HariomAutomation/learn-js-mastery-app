const t="09-strings-string-patterns-39",n="Rotate String",e=`function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));`,o=`function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));`,s=[{input:[],expected:`true
false`}],a=["Concat with itself","Check rotation"],r={id:t,title:n,starterCode:e,solution:o,tests:s,hints:a};export{r as default,a as hints,t as id,o as solution,e as starterCode,s as tests,n as title};

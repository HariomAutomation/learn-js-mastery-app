const n="09-strings-string-patterns-28",s="Valid Parentheses",t=`function isValid(s) {
  const stack = [];
  const map = {')': '(', ']': '[', '}': '{'};
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
console.log(isValid('()[]{}'));
console.log(isValid('(]'));`,o=`function isValid(s) {
  const stack = [];
  const map = {')': '(', ']': '[', '}': '{'};
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
console.log(isValid('()[]{}'));
console.log(isValid('(]'));`,c=[{input:[],expected:`true
false`}],e=["Stack for matching","Pop and compare"],i={id:n,title:s,starterCode:t,solution:o,tests:c,hints:e};export{i as default,e as hints,n as id,o as solution,t as starterCode,c as tests,s as title};

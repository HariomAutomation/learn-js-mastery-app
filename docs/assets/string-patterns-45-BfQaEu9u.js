const n="09-strings-string-patterns-45",s="Is Balanced Brackets",t=`function isBalanced(str) {
  const stack = [];
  const pairs = {')': '(', ']': '[', '}': '{'};
  for (const c of str) {
    if ('([{'.includes(c)) stack.push(c);
    else if (')]}'.includes(c)) {
      if (stack.pop() !== pairs[c]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));`,c=`function isBalanced(str) {
  const stack = [];
  const pairs = {')': '(', ']': '[', '}': '{'};
  for (const c of str) {
    if ('([{'.includes(c)) stack.push(c);
    else if (')]}'.includes(c)) {
      if (stack.pop() !== pairs[c]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));`,e=[{input:[],expected:`true
false`}],o=["Stack for brackets","Match pairs"],a={id:n,title:s,starterCode:t,solution:c,tests:e,hints:o};export{a as default,o as hints,n as id,c as solution,t as starterCode,e as tests,s as title};

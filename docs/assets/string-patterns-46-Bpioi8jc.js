const n="09-strings-string-patterns-46",t="Generate Parentheses",e=`function generate(n) {
  const result = [];
  function backtrack(s, open, close) {
    if (s.length === 2 * n) { result.push(s); return; }
    if (open < n) backtrack(s + '(', open + 1, close);
    if (close < open) backtrack(s + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}
console.log(generate(3));`,s=`function generate(n) {
  const result = [];
  function backtrack(s, open, close) {
    if (s.length === 2 * n) { result.push(s); return; }
    if (open < n) backtrack(s + '(', open + 1, close);
    if (close < open) backtrack(s + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}
console.log(generate(3));`,o=[{input:[],expected:"[ '((()))', '(()())', '(())()', '()(())', '()()()' ]"}],c=["Backtracking","Valid combinations"],r={id:n,title:t,starterCode:e,solution:s,tests:o,hints:c};export{r as default,c as hints,n as id,s as solution,e as starterCode,o as tests,t as title};

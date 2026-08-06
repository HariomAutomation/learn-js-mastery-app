const n="09-strings-string-patterns-47",t="Decode String",e=`function decodeString(str) {
  const stack = [];
  let current = '', num = 0;
  for (const c of str) {
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    else if (c === '[') { stack.push([current, num]); current = ''; num = 0; }
    else if (c === ']') { const [prev, n] = stack.pop(); current = prev + current.repeat(n); }
    else current += c;
  }
  return current;
}
console.log(decodeString('3[a2[c]]'));`,c=`function decodeString(str) {
  const stack = [];
  let current = '', num = 0;
  for (const c of str) {
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    else if (c === '[') { stack.push([current, num]); current = ''; num = 0; }
    else if (c === ']') { const [prev, n] = stack.pop(); current = prev + current.repeat(n); }
    else current += c;
  }
  return current;
}
console.log(decodeString('3[a2[c]]'));`,r=[{input:[],expected:"accaccacc"}],s=["Stack for nesting","Repeat pattern"],o={id:n,title:t,starterCode:e,solution:c,tests:r,hints:s};export{o as default,s as hints,n as id,c as solution,e as starterCode,r as tests,t as title};

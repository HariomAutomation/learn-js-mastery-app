const t="09-strings-string-patterns-33",e="Caesar Cipher",s=`function caesar(str, shift) {
  return str.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}
console.log(caesar('Hello', 3));`,n=`function caesar(str, shift) {
  return str.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}
console.log(caesar('Hello', 3));`,r=[{input:[],expected:"Khoor"}],a=["Shift each letter","Wrap around alphabet"],o={id:t,title:e,starterCode:s,solution:n,tests:r,hints:a};export{o as default,a as hints,t as id,n as solution,s as starterCode,r as tests,e as title};

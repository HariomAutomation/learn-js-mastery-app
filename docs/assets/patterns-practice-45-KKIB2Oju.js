const t="05-loops-patterns-practice-45",n="String Compression",s=`function compress(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i-1]) {
      result += str[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}
console.log(compress("aaabbcc"));`,e=`function compress(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i-1]) {
      result += str[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}
console.log(compress("aaabbcc"));`,o=[{input:[],expected:"a3b2c2"}],r=["Count consecutive chars","Build result string"],c={id:t,title:n,starterCode:s,solution:e,tests:o,hints:r};export{c as default,r as hints,t as id,e as solution,s as starterCode,o as tests,n as title};

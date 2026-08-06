const t="09-strings-string-patterns-44",n="Count Palindromes",s=`function countPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('')) count++;
    }
  }
  return count;
}
console.log(countPalindromes('aaa'));`,o=`function countPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('')) count++;
    }
  }
  return count;
}
console.log(countPalindromes('aaa'));`,e=[{input:[],expected:"6"}],i=["Check all substrings","Count palindromic"],r={id:t,title:n,starterCode:s,solution:o,tests:e,hints:i};export{r as default,i as hints,t as id,o as solution,s as starterCode,e as tests,n as title};

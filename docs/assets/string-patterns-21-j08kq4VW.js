const t="09-strings-string-patterns-21",n="Common Suffix",s=`function commonSuffix(str1, str2) {
  let i = str1.length, j = str2.length, count = 0;
  while (i > 0 && j > 0 && str1[--i] === str2[--j]) count++;
  return str1.slice(-count);
}
console.log(commonSuffix('testing', 'running'));`,o=`function commonSuffix(str1, str2) {
  let i = str1.length, j = str2.length, count = 0;
  while (i > 0 && j > 0 && str1[--i] === str2[--j]) count++;
  return str1.slice(-count);
}
console.log(commonSuffix('testing', 'running'));`,i=[{input:[],expected:"ing"}],e=["Compare from end","Count matching suffix"],r={id:t,title:n,starterCode:s,solution:o,tests:i,hints:e};export{r as default,e as hints,t as id,o as solution,s as starterCode,i as tests,n as title};

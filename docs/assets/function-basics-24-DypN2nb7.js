const n="06-functions-function-basics-24",t="Multiple Return Values",s=`function getStats(arr) {
  let min = arr[0], max = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}
const stats = getStats([3, 1, 4, 1, 5]);
console.log(stats.min + ' ' + stats.max);`,a=`function getStats(arr) {
  let min = arr[0], max = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}
const stats = getStats([3, 1, 4, 1, 5]);
console.log(stats.min + ' ' + stats.max);`,i=[{input:[],expected:"1 5"}],o=["Return object with properties","Find min and max"],r={id:n,title:t,starterCode:s,solution:a,tests:i,hints:o};export{r as default,o as hints,n as id,a as solution,s as starterCode,i as tests,t as title};

const r="04-control-flow-early-return-50",t="Early return with array method",n=`function sumPositive(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumPositive([-1, 2, -3, 4]));`,e=`function sumPositive(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumPositive([-1, 2, -3, 4]));`,s=[{input:[],expected:"6"}],o=["arr is an array","filter keeps positive numbers","reduce sums them"],i={id:r,title:t,starterCode:n,solution:e,tests:s,hints:o};export{i as default,o as hints,r as id,e as solution,n as starterCode,s as tests,t as title};

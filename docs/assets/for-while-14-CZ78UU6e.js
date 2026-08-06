const t="05-loops-for-while-14",n="While Null Check",e=`let arr = [1, 2, 3, null, 5];
let i = 0;
while (arr[i] !== null) {
  console.log(arr[i]);
  i++;
}`,l=`let arr = [1, 2, 3, null, 5];
let i = 0;
while (arr[i] !== null) {
  console.log(arr[i]);
  i++;
}`,o=[{input:[],expected:`1
2
3`}],i=["Check for null to stop","Increment index each iteration"],r={id:t,title:n,starterCode:e,solution:l,tests:o,hints:i};export{r as default,i as hints,t as id,l as solution,e as starterCode,o as tests,n as title};

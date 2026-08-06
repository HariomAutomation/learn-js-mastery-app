const n="05-loops-for-while-24",t="Find Element In Loop",e=`const arr = [5, 12, 8, 130, 44];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]);
    break;
  }
}`,o=`const arr = [5, 12, 8, 130, 44];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]);
    break;
  }
}`,r=[{input:[],expected:"12"}],i=["Check each element","Break when found"],s={id:n,title:t,starterCode:e,solution:o,tests:r,hints:i};export{s as default,i as hints,n as id,o as solution,e as starterCode,r as tests,t as title};

const n="05-loops-for-while-47",t="While With Flag",e=`let found = false;
let arr = [1, 3, 5, 7, 8, 9];
let i = 0;
while (!found && i < arr.length) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    found = true;
  }
  i++;
}`,o=`let found = false;
let arr = [1, 3, 5, 7, 8, 9];
let i = 0;
while (!found && i < arr.length) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    found = true;
  }
  i++;
}`,l=[{input:[],expected:"8"}],r=["Use flag to stop early","Check for even number"],i={id:n,title:t,starterCode:e,solution:o,tests:l,hints:r};export{i as default,r as hints,n as id,o as solution,e as starterCode,l as tests,t as title};

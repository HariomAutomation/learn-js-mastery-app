const n="09-strings-string-patterns-20",r="Common Prefix",t=`function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(commonPrefix(['flower', 'flow', 'flight']));`,i=`function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(commonPrefix(['flower', 'flow', 'flight']));`,e=[{input:[],expected:"fl"}],o=["Start with first word","Trim until match"],f={id:n,title:r,starterCode:t,solution:i,tests:e,hints:o};export{f as default,o as hints,n as id,i as solution,t as starterCode,e as tests,r as title};

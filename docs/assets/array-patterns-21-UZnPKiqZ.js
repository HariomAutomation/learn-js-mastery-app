const c="07-arrays-array-patterns-21",e="Frequency Count",t=`function frequency(arr) {
  return arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
}
console.log(frequency(['a','b','a','c','b','a']));`,n=`function frequency(arr) {
  return arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
}
console.log(frequency(['a','b','a','c','b','a']));`,r=[{input:[],expected:"{ a: 3, b: 2, c: 1 }"}],a=["Count occurrences","Use reduce"],o={id:c,title:e,starterCode:t,solution:n,tests:r,hints:a};export{o as default,a as hints,c as id,n as solution,t as starterCode,r as tests,e as title};

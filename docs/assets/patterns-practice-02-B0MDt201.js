const t="05-loops-patterns-practice-02",n="Number Triangle",o=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,e=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,s=[{input:[],expected:`1
12
123
1234
12345`}],r=["Print j value","Concatenate numbers"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};

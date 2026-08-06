const t="05-loops-patterns-practice-31",o="Nested Loop Pattern",n=`for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,e=`for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,s=[{input:[],expected:`1
12
123
1234`}],r=["Inner loop up to i","Append j"],i={id:t,title:o,starterCode:n,solution:e,tests:s,hints:r};export{i as default,r as hints,t as id,e as solution,n as starterCode,s as tests,o as title};

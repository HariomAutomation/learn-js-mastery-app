const t="05-loops-patterns-practice-20",n="Pyramid Numbers",e=`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i);
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,o=`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i);
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,s=[{input:[],expected:`    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5 `}],r=["Add leading spaces","Print numbers"],i={id:t,title:n,starterCode:e,solution:o,tests:s,hints:r};export{i as default,r as hints,t as id,o as solution,e as starterCode,s as tests,n as title};

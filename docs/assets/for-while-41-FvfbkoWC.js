const o="05-loops-for-while-41",t="Pyramid With Numbers",n=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 1; k <= i; k++) row += k + ' ';
  console.log(row);
}`,e=`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 1; k <= i; k++) row += k + ' ';
  console.log(row);
}`,i=[{input:[],expected:`    1 
  1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `}],r=["Add leading spaces","Print numbers 1 to i"],s={id:o,title:t,starterCode:n,solution:e,tests:i,hints:r};export{s as default,r as hints,o as id,e as solution,n as starterCode,i as tests,t as title};

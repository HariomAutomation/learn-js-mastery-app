const o="05-loops-for-while-32",t="Inverted Pyramid",e=`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 0; k < 2 * i - 1; k++) row += '* ';
  console.log(row);
}`,n=`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 0; k < 2 * i - 1; k++) row += '* ';
  console.log(row);
}`,r=[{input:[],expected:`* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * `}],s=["Decrease stars each row","Add spaces before stars"],i={id:o,title:t,starterCode:e,solution:n,tests:r,hints:s};export{i as default,s as hints,o as id,n as solution,e as starterCode,r as tests,t as title};

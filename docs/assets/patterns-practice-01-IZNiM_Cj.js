const t="05-loops-patterns-practice-01",e="Star Pyramid",s=`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i) + '* '.repeat(i);
  console.log(row);
}`,o=`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i) + '* '.repeat(i);
  console.log(row);
}`,n=[{input:[],expected:`    * 
   * * 
  * * * 
 * * * * 
* * * * * `}],r=["Add spaces before stars","Number of stars increases"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:r};export{i as default,r as hints,t as id,o as solution,s as starterCode,n as tests,e as title};

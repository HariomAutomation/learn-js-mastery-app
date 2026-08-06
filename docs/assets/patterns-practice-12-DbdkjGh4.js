const t="05-loops-patterns-practice-12",e="Inverted Pyramid",s=`for (let i = 5; i >= 1; i--) {
  let spaces = ' '.repeat(5-i);
  let stars = '* '.repeat(i);
  console.log(spaces + stars);
}`,n=`for (let i = 5; i >= 1; i--) {
  let spaces = ' '.repeat(5-i);
  let stars = '* '.repeat(i);
  console.log(spaces + stars);
}`,a=[{input:[],expected:`* * * * * 
  * * * * 
    * * * 
      * * 
        * `}],o=["Decrease stars","Increase spaces"],r={id:t,title:e,starterCode:s,solution:n,tests:a,hints:o};export{r as default,o as hints,t as id,n as solution,s as starterCode,a as tests,e as title};

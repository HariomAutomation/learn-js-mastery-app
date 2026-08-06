const n="10-dom-dom-modify-39",t="innerHTML Security",e=`// Never use innerHTML with user input - XSS risk
console.log("innerHTML XSS warning");`,i=`// Never use innerHTML with user input - XSS risk
console.log("innerHTML XSS warning");`,s=[{input:[],expected:"innerHTML XSS warning"}],o=["innerHTML can execute scripts","Use textContent for user input"],r={id:n,title:t,starterCode:e,solution:i,tests:s,hints:o};export{r as default,o as hints,n as id,i as solution,e as starterCode,s as tests,t as title};

const t="11-events-event-delegation-04",e="Bubbling Phase",n=`// Events bubble from target up to document
console.log("target → parent → ... → document");`,o=`// Events bubble from target up to document
console.log("target → parent → ... → document");`,s=[{input:[],expected:"target → parent → ... → document"}],a=["Default behavior is bubbling","Goes up the DOM tree"],r={id:t,title:e,starterCode:n,solution:o,tests:s,hints:a};export{r as default,a as hints,t as id,o as solution,n as starterCode,s as tests,e as title};

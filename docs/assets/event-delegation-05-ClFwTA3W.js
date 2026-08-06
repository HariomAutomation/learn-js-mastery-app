const t="11-events-event-delegation-05",e="Capturing Phase",n=`// Capture goes document → parent → target
console.log("document → ... → parent → target");`,o=`// Capture goes document → parent → target
console.log("document → ... → parent → target");`,s=[{input:[],expected:"document → ... → parent → target"}],a=["Capture happens before bubbling","Use capture: true option"],r={id:t,title:e,starterCode:n,solution:o,tests:s,hints:a};export{r as default,a as hints,t as id,o as solution,n as starterCode,s as tests,e as title};

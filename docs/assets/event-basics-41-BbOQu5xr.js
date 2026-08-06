const t="11-events-event-basics-41",e="Event Capturing",s=`// Capture phase goes from document to target
console.log("capture phase first");`,o=`// Capture phase goes from document to target
console.log("capture phase first");`,n=[{input:[],expected:"capture phase first"}],a=["Capture happens before bubbling","Use capture: true option"],r={id:t,title:e,starterCode:s,solution:o,tests:n,hints:a};export{r as default,a as hints,t as id,o as solution,s as starterCode,n as tests,e as title};

const e="11-events-event-delegation-36",t="Capture vs Bubble",o=`// Capture: document → target
// Bubble: target → document
console.log("capture first, bubble second");`,s=`// Capture: document → target
// Bubble: target → document
console.log("capture first, bubble second");`,n=[{input:[],expected:"capture first, bubble second"}],u=["Capture phase goes down","Bubble phase goes up"],c={id:e,title:t,starterCode:o,solution:s,tests:n,hints:u};export{c as default,u as hints,e as id,s as solution,o as starterCode,n as tests,t as title};

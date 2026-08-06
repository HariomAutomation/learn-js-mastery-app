const e="11-events-event-delegation-29",t="Delegation vs Direct",n=`// Direct: listener on each element
// Delegation: one listener on parent
console.log("delegation is more efficient");`,o=`// Direct: listener on each element
// Delegation: one listener on parent
console.log("delegation is more efficient");`,i=[{input:[],expected:"delegation is more efficient"}],s=["Fewer listeners = less memory","Works with dynamic elements"],l={id:e,title:t,starterCode:n,solution:o,tests:i,hints:s};export{l as default,s as hints,e as id,o as solution,n as starterCode,i as tests,t as title};

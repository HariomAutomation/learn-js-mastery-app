const e="11-events-event-delegation-50",t="Delegation Performance Count",n=`// 1 delegation listener vs N direct listeners
// Memory: O(1) vs O(N)
console.log("delegation is O(1)");`,s=`// 1 delegation listener vs N direct listeners
// Memory: O(1) vs O(N)
console.log("delegation is O(1)");`,o=[{input:[],expected:"delegation is O(1)"}],i=["Constant memory with delegation","Linear with direct listeners"],l={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{l as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};

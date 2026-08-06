const e="11-events-event-delegation-27",t="Event Pooling",n=`// Synthetic events may be reused (older React)
console.log("event pooling in old React");`,o=`// Synthetic events may be reused (older React)
console.log("event pooling in old React");`,s=[{input:[],expected:"event pooling in old React"}],l=["React 17+ doesn't pool events","Older versions reused event objects"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

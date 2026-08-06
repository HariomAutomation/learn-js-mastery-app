const e="11-events-event-delegation-35",t="Event Bubbling Order",n=`// Child handler fires before parent handler
console.log("child fires first, then parent");`,r=`// Child handler fires before parent handler
console.log("child fires first, then parent");`,s=[{input:[],expected:"child fires first, then parent"}],i=["Bubbling goes from target up","Inner handlers fire first"],o={id:e,title:t,starterCode:n,solution:r,tests:s,hints:i};export{o as default,i as hints,e as id,r as solution,n as starterCode,s as tests,t as title};

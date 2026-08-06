const n="04-control-flow-if-else-switch-21",s="Switch with type coercion trap",t=`const x = "1";
switch (x) {
  case 1:
    console.log("number one");
    break;
  case "1":
    console.log("string one");
    break;
}`,o=`const x = "1";
switch (x) {
  case 1:
    console.log("number one");
    break;
  case "1":
    console.log("string one");
    break;
}`,e=[{input:[],expected:"string one"}],c=["switch uses === comparison","'1' === 1 is false"],i={id:n,title:s,starterCode:t,solution:o,tests:e,hints:c};export{i as default,c as hints,n as id,o as solution,t as starterCode,e as tests,s as title};

const t="04-control-flow-if-else-switch-42",n="Switch with mixed types",s=`const x = "1";
switch (x) {
  case 1:
    console.log("number");
    break;
  case "1":
    console.log("string");
    break;
  default:
    console.log("other");
}`,e=`const x = "1";
switch (x) {
  case 1:
    console.log("number");
    break;
  case "1":
    console.log("string");
    break;
  default:
    console.log("other");
}`,o=[{input:[],expected:"string"}],c=["switch uses === (strict equality)","'1' === 1 is false"],i={id:t,title:n,starterCode:s,solution:e,tests:o,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,o as tests,n as title};

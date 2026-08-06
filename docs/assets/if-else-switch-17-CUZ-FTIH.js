const n="04-control-flow-if-else-switch-17",s="Nested switch",e=`const a = 1;
const b = 2;
switch (a) {
  case 1:
    switch (b) {
      case 1:
        console.log('both 1');
        break;
      case 2:
        console.log('a=1 b=2');
        break;
    }
    break;
  case 2:
    console.log('a=2');
    break;
}`,t=`const a = 1;
const b = 2;
switch (a) {
  case 1:
    switch (b) {
      case 1:
        console.log('both 1');
        break;
      case 2:
        console.log('a=1 b=2');
        break;
    }
    break;
  case 2:
    console.log('a=2');
    break;
}`,o=[{input:[],expected:"a=1 b=2"}],c=["a is 1, enter first case","b is 2, enter inner case 2"],a={id:n,title:s,starterCode:e,solution:t,tests:o,hints:c};export{a as default,c as hints,n as id,t as solution,e as starterCode,o as tests,s as title};

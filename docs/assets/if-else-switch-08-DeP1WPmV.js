const n="04-control-flow-if-else-switch-08",e="Switch fallthrough danger",t=`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,o=`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,s=[{input:[],expected:`red
yellow`}],l=["Missing break causes fallthrough","apple matches, then falls to banana"],a={id:n,title:e,starterCode:t,solution:o,tests:s,hints:l};export{a as default,l as hints,n as id,o as solution,t as starterCode,s as tests,e as title};

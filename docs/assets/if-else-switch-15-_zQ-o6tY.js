const n="04-control-flow-if-else-switch-15",e="Multiple cases same block",s=`const month = 'Jan';
switch (month) {
  case 'Dec':
  case 'Jan':
  case 'Feb':
    console.log('winter');
    break;
  case 'Mar':
  case 'Apr':
  case 'May':
    console.log('spring');
    break;
  default:
    console.log('other');
}`,t=`const month = 'Jan';
switch (month) {
  case 'Dec':
  case 'Jan':
  case 'Feb':
    console.log('winter');
    break;
  case 'Mar':
  case 'Apr':
  case 'May':
    console.log('spring');
    break;
  default:
    console.log('other');
}`,o=[{input:[],expected:"winter"}],c=["Multiple cases can share code","Jan matches, falls to winter"],a={id:n,title:e,starterCode:s,solution:t,tests:o,hints:c};export{a as default,c as hints,n as id,t as solution,s as starterCode,o as tests,e as title};

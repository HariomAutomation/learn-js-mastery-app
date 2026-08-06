const n="04-control-flow-if-else-switch-34",e="Switch with boolean",t=`const isOnline = true;
switch (isOnline) {
  case true:
    console.log('online');
    break;
  case false:
    console.log('offline');
    break;
}`,s=`const isOnline = true;
switch (isOnline) {
  case true:
    console.log('online');
    break;
  case false:
    console.log('offline');
    break;
}`,o=[{input:[],expected:"online"}],i=["true matches case true","break exits switch"],l={id:n,title:e,starterCode:t,solution:s,tests:o,hints:i};export{l as default,i as hints,n as id,s as solution,t as starterCode,o as tests,e as title};

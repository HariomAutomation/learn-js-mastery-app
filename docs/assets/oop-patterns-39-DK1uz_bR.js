const t="13-oop-oop-patterns-39",e="State Pattern",n=`class State { handle() { return 'default'; } }
class OnState extends State { handle() { return 'on'; } }
class OffState extends State { handle() { return 'off'; } }
const states = { on: new OnState(), off: new OffState() };
console.log(states.on.handle());`,s=`class State { handle() { return 'default'; } }
class OnState extends State { handle() { return 'on'; } }
class OffState extends State { handle() { return 'off'; } }
const states = { on: new OnState(), off: new OffState() };
console.log(states.on.handle());`,a=[{input:[],expected:"on"}],o=["Each state is a class","Switch between state objects"],l={id:t,title:e,starterCode:n,solution:s,tests:a,hints:o};export{l as default,o as hints,t as id,s as solution,n as starterCode,a as tests,e as title};

const t="13-oop-oop-patterns-10",e="State Pattern",n=`class State {
  handle() { return 'default'; }
}
class ActiveState extends State {
  handle() { return 'active'; }
}
class InactiveState extends State {
  handle() { return 'inactive'; }
}
const states = { active: new ActiveState(), inactive: new InactiveState() };
console.log(states.active.handle());`,a=`class State {
  handle() { return 'default'; }
}
class ActiveState extends State {
  handle() { return 'active'; }
}
class InactiveState extends State {
  handle() { return 'inactive'; }
}
const states = { active: new ActiveState(), inactive: new InactiveState() };
console.log(states.active.handle());`,s=[{input:[],expected:"active"}],c=["Each state is a class","Switch between state objects"],i={id:t,title:e,starterCode:n,solution:a,tests:s,hints:c};export{i as default,c as hints,t as id,a as solution,n as starterCode,s as tests,e as title};

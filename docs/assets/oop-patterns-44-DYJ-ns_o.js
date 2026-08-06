const e="13-oop-oop-patterns-44",t="Command Pattern",s=`class Cmd { execute() {} }
class LogCmd extends Cmd {
  constructor(msg) { super(); this.msg = msg; }
  execute() { console.log(this.msg); }
}
new LogCmd('hello').execute();`,o=`class Cmd { execute() {} }
class LogCmd extends Cmd {
  constructor(msg) { super(); this.msg = msg; }
  execute() { console.log(this.msg); }
}
new LogCmd('hello').execute();`,n=[{input:[],expected:"hello"}],c=["Command encapsulates action","execute() performs it"],m={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{m as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};

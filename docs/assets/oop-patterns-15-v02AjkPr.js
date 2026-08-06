const e="13-oop-oop-patterns-15",t="Command",n=`class Command {
  execute() {}
}
class AddCommand extends Command {
  constructor(receiver, value) { super(); this.receiver = receiver; this.value = value; }
  execute() { this.receiver.value += this.value; }
}
const obj = { value: 0 };
new AddCommand(obj, 5).execute();
console.log(obj.value);`,o=`class Command {
  execute() {}
}
class AddCommand extends Command {
  constructor(receiver, value) { super(); this.receiver = receiver; this.value = value; }
  execute() { this.receiver.value += this.value; }
}
const obj = { value: 0 };
new AddCommand(obj, 5).execute();
console.log(obj.value);`,s=[{input:[],expected:"5"}],a=["Command encapsulates action","execute() performs the action"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:a};export{c as default,a as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

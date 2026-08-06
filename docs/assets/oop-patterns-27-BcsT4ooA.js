const e="13-oop-oop-patterns-27",n="CQRS",t=`class CommandHandler {
  execute(cmd) { return 'executed ' + cmd; }
}
class QueryHandler {
  handle(query) { return 'result for ' + query; }
}
const cmd = new CommandHandler();
const q = new QueryHandler();
console.log(cmd.execute('create') + ' | ' + q.handle('read'));`,r=`class CommandHandler {
  execute(cmd) { return 'executed ' + cmd; }
}
class QueryHandler {
  handle(query) { return 'result for ' + query; }
}
const cmd = new CommandHandler();
const q = new QueryHandler();
console.log(cmd.execute('create') + ' | ' + q.handle('read'));`,s=[{input:[],expected:"executed create | result for read"}],d=["Separate read and write models","Commands vs Queries"],o={id:e,title:n,starterCode:t,solution:r,tests:s,hints:d};export{o as default,d as hints,e as id,r as solution,t as starterCode,s as tests,n as title};

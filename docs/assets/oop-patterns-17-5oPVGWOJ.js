const s="13-oop-oop-patterns-17",e="Mediator",o=`class ChatRoom {
  constructor() { this.users = []; }
  register(user) { this.users.push(user); }
  send(message, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(message));
  }
}
class User {
  constructor(name, room) { this.name = name; room.register(this); }
  send(msg) { this.room.send(msg, this); }
  receive(msg) { console.log(this.name + ': ' + msg); }
}`,n=`class ChatRoom {
  constructor() { this.users = []; }
  register(user) { this.users.push(user); }
  send(message, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(message));
  }
}
class User {
  constructor(name, room) { this.name = name; this.room = room; room.register(this); }
  send(msg) { this.room.send(msg, this); }
  receive(msg) { console.log(this.name + ': ' + msg); }
}
const room = new ChatRoom();
const u1 = new User('Alice', room);
const u2 = new User('Bob', room);
u1.send('hello');`,t=[{input:[],expected:"Bob: hello"}],r=["Mediator coordinates communication","Users don't talk directly"],i={id:s,title:e,starterCode:o,solution:n,tests:t,hints:r};export{i as default,r as hints,s as id,n as solution,o as starterCode,t as tests,e as title};

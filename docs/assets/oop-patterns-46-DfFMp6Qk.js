const s="13-oop-oop-patterns-46",n="Mediator Pattern",e=`class Room {
  constructor() { this.users = []; }
  join(u) { this.users.push(u); }
  send(msg, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(msg));
  }
}
class User {
  constructor(n, r) { this.name = n; r.join(this); this.room = r; }
  send(m) { this.room.send(m, this); }
  receive(m) { console.log(this.name + ': ' + m); }
}
const r = new Room();
const u1 = new User('A', r);
const u2 = new User('B', r);
u1.send('hi');`,t=`class Room {
  constructor() { this.users = []; }
  join(u) { this.users.push(u); }
  send(msg, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(msg));
  }
}
class User {
  constructor(n, r) { this.name = n; r.join(this); this.room = r; }
  send(m) { this.room.send(m, this); }
  receive(m) { console.log(this.name + ': ' + m); }
}
const r = new Room();
const u1 = new User('A', r);
const u2 = new User('B', r);
u1.send('hi');`,o=[{input:[],expected:"B: hi"}],r=["Mediator coordinates communication","Users don't talk directly"],i={id:s,title:n,starterCode:e,solution:t,tests:o,hints:r};export{i as default,r as hints,s as id,t as solution,e as starterCode,o as tests,n as title};

const e="11-events-event-delegation-22",s="Event Bus",t=`const bus = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
bus.on('message', (m) => console.log(m));
bus.emit('message', 'hello');`,n=`const bus = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
bus.on('message', (m) => console.log(m));
bus.emit('message', 'hello');`,o=[{input:[],expected:"hello"}],i=["Simple pub/sub object","on registers, emit triggers"],l={id:e,title:s,starterCode:t,solution:n,tests:o,hints:i};export{l as default,i as hints,e as id,n as solution,t as starterCode,o as tests,s as title};

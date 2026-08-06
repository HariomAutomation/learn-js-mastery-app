const s="13-oop-oop-patterns-36",t="Pub/Sub",e=`const pubsub = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
pubsub.on('msg', m => console.log(m));
pubsub.emit('msg', 'hi');`,n=`const pubsub = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
pubsub.on('msg', m => console.log(m));
pubsub.emit('msg', 'hi');`,o=[{input:[],expected:"hi"}],i=["on subscribes, emit publishes","Events object stores callbacks"],u={id:s,title:t,starterCode:e,solution:n,tests:o,hints:i};export{u as default,i as hints,s as id,n as solution,e as starterCode,o as tests,t as title};

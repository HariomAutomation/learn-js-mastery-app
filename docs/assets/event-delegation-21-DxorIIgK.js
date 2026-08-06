const t="11-events-event-delegation-21",e="Event Emitter Pattern",n=`class EventEmitter {
  constructor() { this.events = {}; }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('test', (d) => console.log(d));
emitter.emit('test', 'emitted');`,s=`class EventEmitter {
  constructor() { this.events = {}; }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('test', (d) => console.log(d));
emitter.emit('test', 'emitted');`,i=[{input:[],expected:"emitted"}],o=["Store callbacks in object","Emit calls all registered callbacks"],c={id:t,title:e,starterCode:n,solution:s,tests:i,hints:o};export{c as default,o as hints,t as id,s as solution,n as starterCode,i as tests,e as title};

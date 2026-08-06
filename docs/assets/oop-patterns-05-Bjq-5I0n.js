const t="13-oop-oop-patterns-05",e="Observer Subscribe",n=`class EventEmitter {
  constructor() { this.listeners = {}; }
  on(event, fn) {
    (this.listeners[event] = this.listeners[event] || []).push(fn);
  }
  emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('data', (d) => console.log(d));
emitter.emit('data', 'hello');`,s=`class EventEmitter {
  constructor() { this.listeners = {}; }
  on(event, fn) {
    (this.listeners[event] = this.listeners[event] || []).push(fn);
  }
  emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('data', (d) => console.log(d));
emitter.emit('data', 'hello');`,o=[{input:[],expected:"hello"}],i=["Store callbacks in object","Call all on emit"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{r as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};

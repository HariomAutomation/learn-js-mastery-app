const t="13-oop-oop-patterns-26",e="Event Sourcing",n=`class EventStore {
  constructor() { this.events = []; }
  add(event) { this.events.push(event); }
  getEvents() { return this.events; }
}
const store = new EventStore();
store.add({ type: 'created', data: {} });
console.log(store.getEvents().length);`,s=`class EventStore {
  constructor() { this.events = []; }
  add(event) { this.events.push(event); }
  getEvents() { return this.events; }
}
const store = new EventStore();
store.add({ type: 'created', data: {} });
console.log(store.getEvents().length);`,o=[{input:[],expected:"1"}],r=["Store events instead of state","Rebuild state from events"],a={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{a as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};

const t="13-oop-oop-patterns-30",s="Observer Complete",e=`class Store {
  constructor(state) { this.state = state; this.listeners = []; }
  subscribe(fn) { this.listeners.push(fn); }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(fn => fn(this.state));
  }
}
const store = new Store({ count: 0 });
store.subscribe(s => console.log(s.count));
store.setState({ count: 1 });`,n=`class Store {
  constructor(state) { this.state = state; this.listeners = []; }
  subscribe(fn) { this.listeners.push(fn); }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(fn => fn(this.state));
  }
}
const store = new Store({ count: 0 });
store.subscribe(s => console.log(s.count));
store.setState({ count: 1 });`,o=[{input:[],expected:"1"}],r=["State management with observer","Notify on state change"],a={id:t,title:s,starterCode:e,solution:n,tests:o,hints:r};export{a as default,r as hints,t as id,n as solution,e as starterCode,o as tests,s as title};

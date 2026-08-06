const s="13-oop-oop-patterns-35",t="Observer Pattern",n=`class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const s = new Subject();
s.subscribe(d => console.log(d));
s.notify('event');`,e=`class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const s = new Subject();
s.subscribe(d => console.log(d));
s.notify('event');`,o=[{input:[],expected:"event"}],r=["Subject maintains observer list","notify calls all observers"],c={id:s,title:t,starterCode:n,solution:e,tests:o,hints:r};export{c as default,r as hints,s as id,e as solution,n as starterCode,o as tests,t as title};

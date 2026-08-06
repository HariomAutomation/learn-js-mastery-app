const t="13-oop-oop-patterns-06",s="Observer Notify",e=`class Subject {
  constructor() { this.observers = []; }
  attach(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const subject = new Subject();
subject.attach(d => console.log(d));
subject.notify('update');`,n=`class Subject {
  constructor() { this.observers = []; }
  attach(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const subject = new Subject();
subject.attach(d => console.log(d));
subject.notify('update');`,o=[{input:[],expected:"update"}],c=["Subject maintains observer list","notify calls all observers"],a={id:t,title:s,starterCode:e,solution:n,tests:o,hints:c};export{a as default,c as hints,t as id,n as solution,e as starterCode,o as tests,s as title};

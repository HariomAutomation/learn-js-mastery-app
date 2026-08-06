const n="13-oop-oop-patterns-49",e="Chain of Responsibility",t=`class Handler {
  setNext(h) { this.next = h; return h; }
  handle(r) { return this.next ? this.next.handle(r) : null; }
}
class A extends Handler {
  handle(r) { return r.a ? 'a ok' : super.handle(r); }
}
const chain = new A();
chain.setNext(new Handler());
console.log(chain.handle({ a: true }));`,s=`class Handler {
  setNext(h) { this.next = h; return h; }
  handle(r) { return this.next ? this.next.handle(r) : null; }
}
class A extends Handler {
  handle(r) { return r.a ? 'a ok' : super.handle(r); }
}
const chain = new A();
chain.setNext(new Handler());
console.log(chain.handle({ a: true }));`,a=[{input:[],expected:"a ok"}],r=["Chain handlers","Each handles or passes to next"],l={id:n,title:e,starterCode:t,solution:s,tests:a,hints:r};export{l as default,r as hints,n as id,s as solution,t as starterCode,a as tests,e as title};

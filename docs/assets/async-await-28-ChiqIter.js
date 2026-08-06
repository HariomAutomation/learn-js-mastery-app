const n="12-async-async-await-28",s="Async Queue",e=`class AsyncQueue {
  constructor() { this.queue = []; }
  add(fn) { this.queue.push(fn); }
  async run() {
    for (const fn of this.queue) {
      await fn();
    }
    console.log('done');
  }
}
const q = new AsyncQueue();
q.add(() => Promise.resolve());
q.add(() => Promise.resolve());
q.run();`,t=`class AsyncQueue {
  constructor() { this.queue = []; }
  add(fn) { this.queue.push(fn); }
  async run() {
    for (const fn of this.queue) {
      await fn();
    }
    console.log('done');
  }
}
const q = new AsyncQueue();
q.add(() => Promise.resolve());
q.add(() => Promise.resolve());
q.run();`,o=[{input:[],expected:"done"}],u=["Store functions in array","Run sequentially with await"],c={id:n,title:s,starterCode:e,solution:t,tests:o,hints:u};export{c as default,u as hints,n as id,t as solution,e as starterCode,o as tests,s as title};

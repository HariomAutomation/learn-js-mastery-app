const s="13-oop-oop-patterns-28",t="Saga",e=`class Saga {
  constructor() { this.steps = []; }
  addStep(fn) { this.steps.push(fn); }
  async execute() {
    for (const step of this.steps) {
      await step();
    }
    console.log('complete');
  }
}
const saga = new Saga();
saga.addStep(() => Promise.resolve());
saga.addStep(() => Promise.resolve());
saga.execute();`,n=`class Saga {
  constructor() { this.steps = []; }
  addStep(fn) { this.steps.push(fn); }
  async execute() {
    for (const step of this.steps) {
      await step();
    }
    console.log('complete');
  }
}
const saga = new Saga();
saga.addStep(() => Promise.resolve());
saga.addStep(() => Promise.resolve());
saga.execute();`,o=[{input:[],expected:"complete"}],a=["Manage long-running processes","Sequential async steps"],c={id:s,title:t,starterCode:e,solution:n,tests:o,hints:a};export{c as default,a as hints,s as id,n as solution,e as starterCode,o as tests,t as title};

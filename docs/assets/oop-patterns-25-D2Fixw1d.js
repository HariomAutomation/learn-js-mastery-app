const e="13-oop-oop-patterns-25",s="Dependency Injection",n=`class Service {
  getData() { return 'data'; }
}
class Consumer {
  constructor(service) { this.service = service; }
  use() { return this.service.getData(); }
}
const consumer = new Consumer(new Service());
console.log(consumer.use());`,t=`class Service {
  getData() { return 'data'; }
}
class Consumer {
  constructor(service) { this.service = service; }
  use() { return this.service.getData(); }
}
const consumer = new Consumer(new Service());
console.log(consumer.use());`,o=[{input:[],expected:"data"}],c=["Pass dependencies to constructor","Loose coupling"],r={id:e,title:s,starterCode:n,solution:t,tests:o,hints:c};export{r as default,c as hints,e as id,t as solution,n as starterCode,o as tests,s as title};

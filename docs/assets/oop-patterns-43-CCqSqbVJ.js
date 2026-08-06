const t="13-oop-oop-patterns-43",s="Builder Pattern",e=`class QueryBuilder {
  constructor() { this.q = []; }
  select(f) { this.q.push('SELECT ' + f); return this; }
  from(t) { this.q.push('FROM ' + t); return this; }
  build() { return this.q.join(' '); }
}
console.log(new QueryBuilder().select('*').from('t').build());`,n=`class QueryBuilder {
  constructor() { this.q = []; }
  select(f) { this.q.push('SELECT ' + f); return this; }
  from(t) { this.q.push('FROM ' + t); return this; }
  build() { return this.q.join(' '); }
}
console.log(new QueryBuilder().select('*').from('t').build());`,r=[{input:[],expected:"SELECT * FROM t"}],o=["Each method returns this","build() assembles result"],i={id:t,title:s,starterCode:e,solution:n,tests:r,hints:o};export{i as default,o as hints,t as id,n as solution,e as starterCode,r as tests,s as title};

const t="13-oop-oop-patterns-14",s="Builder",e=`class QueryBuilder {
  constructor() { this.parts = []; }
  select(fields) { this.parts.push('SELECT ' + fields); return this; }
  from(table) { this.parts.push('FROM ' + table); return this; }
  where(cond) { this.parts.push('WHERE ' + cond); return this; }
  build() { return this.parts.join(' '); }
}
console.log(new QueryBuilder().select('*').from('users').where('id=1').build());`,r=`class QueryBuilder {
  constructor() { this.parts = []; }
  select(fields) { this.parts.push('SELECT ' + fields); return this; }
  from(table) { this.parts.push('FROM ' + table); return this; }
  where(cond) { this.parts.push('WHERE ' + cond); return this; }
  build() { return this.parts.join(' '); }
}
console.log(new QueryBuilder().select('*').from('users').where('id=1').build());`,n=[{input:[],expected:"SELECT * FROM users WHERE id=1"}],i=["Each method returns this","build() assembles final result"],o={id:t,title:s,starterCode:e,solution:r,tests:n,hints:i};export{o as default,i as hints,t as id,r as solution,e as starterCode,n as tests,s as title};

const t="08-objects-object-basics-23",e="Flatten Object",n=`function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? prefix + '.' + k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return {...acc, ...flatten(v, key)};
    }
    return {...acc, [key]: v};
  }, {});
}
console.log(flatten({a: {b: 1, c: {d: 2}}}));`,c=`function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? prefix + '.' + k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return {...acc, ...flatten(v, key)};
    }
    return {...acc, [key]: v};
  }, {});
}
console.log(flatten({a: {b: 1, c: {d: 2}}}));`,o=[{input:[],expected:"{ 'a.b': 1, 'a.c.d': 2 }"}],r=["Recursive flatten","Dot notation keys"],s={id:t,title:e,starterCode:n,solution:c,tests:o,hints:r};export{s as default,r as hints,t as id,c as solution,n as starterCode,o as tests,e as title};

const e="08-objects-advanced-objects-08",t="Object Assign Deep",n=`function deepAssign(target, ...sources) {
  sources.forEach(source => {
    Object.entries(source).forEach(([k, v]) => {
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        target[k] = target[k] || {};
        deepAssign(target[k], v);
      } else {
        target[k] = v;
      }
    });
  });
  return target;
}
console.log(deepAssign({}, {a: {b: 1}}, {a: {c: 2}}));`,s=`function deepAssign(target, ...sources) {
  sources.forEach(source => {
    Object.entries(source).forEach(([k, v]) => {
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        target[k] = target[k] || {};
        deepAssign(target[k], v);
      } else {
        target[k] = v;
      }
    });
  });
  return target;
}
console.log(deepAssign({}, {a: {b: 1}}, {a: {c: 2}}));`,r=[{input:[],expected:"{ a: { b: 1, c: 2 } }"}],o=["Recursive merge","Deep assign pattern"],c={id:e,title:t,starterCode:n,solution:s,tests:r,hints:o};export{c as default,o as hints,e as id,s as solution,n as starterCode,r as tests,t as title};

const e="12-async-callbacks-promises-18",n="Cancel Pattern",l=`let cancelled = false;
const p = new Promise((resolve) => {
  setTimeout(() => {
    if (!cancelled) resolve('done');
  }, 10);
});
cancelled = true;
p.then(v => console.log(v)).catch(() => console.log('cancelled'));`,c=`let cancelled = false;
const p = new Promise((resolve) => {
  setTimeout(() => {
    if (!cancelled) resolve('done');
  }, 10);
});
cancelled = true;
p.then(v => console.log(v)).catch(() => console.log('cancelled'));`,t=[{input:[],expected:"cancelled"}],o=["Use flag to track cancellation","Check flag before resolving"],s={id:e,title:n,starterCode:l,solution:c,tests:t,hints:o};export{s as default,o as hints,e as id,c as solution,l as starterCode,t as tests,n as title};

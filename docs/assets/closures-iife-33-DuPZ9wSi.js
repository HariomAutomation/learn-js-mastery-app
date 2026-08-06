const n="06-functions-closures-iife-33",s="Closure Loop Fix Var",o=`const fns = [];
for (var i = 0; i < 3; i++) {
  (function(j) {
    fns.push(() => console.log(j));
  })(i);
}
fns[0]();
fns[1]();
fns[2]();`,t=`const fns = [];
for (var i = 0; i < 3; i++) {
  (function(j) {
    fns.push(() => console.log(j));
  })(i);
}
fns[0]();
fns[1]();
fns[2]();`,i=[{input:[],expected:`0
1
2`}],e=["IIFE captures i","j is local copy"],c={id:n,title:s,starterCode:o,solution:t,tests:i,hints:e};export{c as default,e as hints,n as id,t as solution,o as starterCode,i as tests,s as title};

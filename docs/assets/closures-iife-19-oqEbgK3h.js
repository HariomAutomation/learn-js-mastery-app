const n="06-functions-closures-iife-19",s="Closure In Loop Var",t=`const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push((function(j) {
    return () => console.log(j);
  })(i));
}
fns[0]();
fns[1]();
fns[2]();`,o=`const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push((function(j) {
    return () => console.log(j);
  })(i));
}
fns[0]();
fns[1]();
fns[2]();`,i=[{input:[],expected:`0
1
2`}],e=["IIFE captures i","j is local copy"],c={id:n,title:s,starterCode:t,solution:o,tests:i,hints:e};export{c as default,e as hints,n as id,o as solution,t as starterCode,i as tests,s as title};

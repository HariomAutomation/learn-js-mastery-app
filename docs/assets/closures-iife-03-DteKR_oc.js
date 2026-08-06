const n="06-functions-closures-iife-03",s="Closure In Loop Fix",o=`const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();`,t=`const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();`,c=[{input:[],expected:`0
1
2`}],i=["let in for loop is block scoped","Each iteration has own i"],e={id:n,title:s,starterCode:o,solution:t,tests:c,hints:i};export{e as default,i as hints,n as id,t as solution,o as starterCode,c as tests,s as title};

const n="06-functions-closures-iife-11",t="Scope Chain",o=`function outer() {
  const a = 1;
  function middle() {
    const b = 2;
    function inner() {
      console.log(a + b);
    }
    inner();
  }
  middle();
}
outer();`,e=`function outer() {
  const a = 1;
  function middle() {
    const b = 2;
    function inner() {
      console.log(a + b);
    }
    inner();
  }
  middle();
}
outer();`,s=[{input:[],expected:"3"}],c=["Inner accesses outer scopes","Scope chain traversal"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};

const t="06-functions-closures-iife-04",e="IIFE Pattern",n=`(function() {
  const secret = 'private';
  console.log(secret);
})();`,s=`(function() {
  const secret = 'private';
  console.log(secret);
})();`,o=[{input:[],expected:"private"}],c=["Immediately invoked","Scope is contained"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{i as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};

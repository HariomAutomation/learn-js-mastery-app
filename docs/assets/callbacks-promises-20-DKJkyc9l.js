const t="12-async-callbacks-promises-20",n="Error First Callback",e=`function readFile(path, callback) {
  // Node.js error-first pattern
  callback(null, 'file contents');
}
readFile('/path', function(err, data) {
  console.log(err + ' ' + data);
});`,a=`function readFile(path, callback) {
  callback(null, 'file contents');
}
readFile('/path', function(err, data) {
  console.log(err + ' ' + data);
});`,l=[{input:[],expected:"null file contents"}],r=["First argument is error","null means no error"],s={id:t,title:n,starterCode:e,solution:a,tests:l,hints:r};export{s as default,r as hints,t as id,a as solution,e as starterCode,l as tests,n as title};

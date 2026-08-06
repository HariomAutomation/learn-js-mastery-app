const t="12-async-callbacks-promises-01",a="Callback Pattern",l=`function fetchData(callback) {
  // TODO: call callback with data
  callback('Hello');
}
fetchData(function(data) {
  console.log(data);
});`,n=`function fetchData(callback) {
  callback('Hello');
}
fetchData(function(data) {
  console.log(data);
});`,c=[{input:[],expected:"Hello"}],s=["Callback is a function passed as argument","Call it with the result"],o={id:t,title:a,starterCode:l,solution:n,tests:c,hints:s};export{o as default,s as hints,t as id,n as solution,l as starterCode,c as tests,a as title};

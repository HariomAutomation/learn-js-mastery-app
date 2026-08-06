const a="06-functions-higher-order-functions-03",t="Callback Pattern",n=`function fetchData(callback) {
  const data = { name: 'Alice', age: 25 };
  callback(data);
}
fetchData((data) => {
  console.log(data.name + ' is ' + data.age);
});`,c=`function fetchData(callback) {
  const data = { name: 'Alice', age: 25 };
  callback(data);
}
fetchData((data) => {
  console.log(data.name + ' is ' + data.age);
});`,e=[{input:[],expected:"Alice is 25"}],s=["Pass callback function","Call with data"],o={id:a,title:t,starterCode:n,solution:c,tests:e,hints:s};export{o as default,s as hints,a as id,c as solution,n as starterCode,e as tests,t as title};

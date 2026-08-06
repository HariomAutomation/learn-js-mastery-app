const a="06-functions-arrow-functions-40",t="Arrow Callback Pattern",c=`function fetchData(callback) {
  callback({ name: 'Alice', age: 25 });
}
fetchData(data => console.log(data.name + ' is ' + data.age));`,n=`function fetchData(callback) {
  callback({ name: 'Alice', age: 25 });
}
fetchData(data => console.log(data.name + ' is ' + data.age));`,e=[{input:[],expected:"Alice is 25"}],o=["Arrow callback","Access data"],s={id:a,title:t,starterCode:c,solution:n,tests:e,hints:o};export{s as default,o as hints,a as id,n as solution,c as starterCode,e as tests,t as title};

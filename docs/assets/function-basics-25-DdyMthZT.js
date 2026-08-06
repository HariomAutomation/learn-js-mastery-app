const n="06-functions-function-basics-25",t="Side Effects Vs Pure",e=`let counter = 0;
function increment() {
  counter++;
  console.log(counter);
}
increment();
increment();`,o=`let counter = 0;
function increment() {
  counter++;
  console.log(counter);
}
increment();
increment();`,c=[{input:[],expected:`1
2`}],s=["Function modifies external variable","This is a side effect"],i={id:n,title:t,starterCode:e,solution:o,tests:c,hints:s};export{i as default,s as hints,n as id,o as solution,e as starterCode,c as tests,t as title};

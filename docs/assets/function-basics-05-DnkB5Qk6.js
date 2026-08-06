const e="06-functions-function-basics-05",t="Default Parameters",n=`function greet(name = 'World') {
  console.log('Hello, ' + name + '!');
}
greet();
greet('Alice');`,o=`function greet(name = 'World') {
  console.log('Hello, ' + name + '!');
}
greet();
greet('Alice');`,s=[{input:[],expected:`Hello, World!
Hello, Alice!`}],l=["Set default value","Use parameter if provided"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

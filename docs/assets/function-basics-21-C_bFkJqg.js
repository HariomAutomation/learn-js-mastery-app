const n="06-functions-function-basics-21",t="Callback Function",o=`function doAction(callback) {
  callback();
}
doAction(function() {
  console.log('Action done!');
});`,c=`function doAction(callback) {
  callback();
}
doAction(function() {
  console.log('Action done!');
});`,i=[{input:[],expected:"Action done!"}],s=["Pass function as argument","Call it inside"],l={id:n,title:t,starterCode:o,solution:c,tests:i,hints:s};export{l as default,s as hints,n as id,c as solution,o as starterCode,i as tests,t as title};

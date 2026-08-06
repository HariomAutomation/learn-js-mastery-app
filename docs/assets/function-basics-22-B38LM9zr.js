const n="06-functions-function-basics-22",o="Parameter Validation",t=`function divide(a, b) {
  if (b === 0) {
    console.log('Cannot divide by zero');
    return;
  }
  console.log(a / b);
}
divide(10, 0);`,e=`function divide(a, b) {
  if (b === 0) {
    console.log('Cannot divide by zero');
    return;
  }
  console.log(a / b);
}
divide(10, 0);`,i=[{input:[],expected:"Cannot divide by zero"}],s=["Check for zero","Return early"],d={id:n,title:o,starterCode:t,solution:e,tests:i,hints:s};export{d as default,s as hints,n as id,e as solution,t as starterCode,i as tests,o as title};

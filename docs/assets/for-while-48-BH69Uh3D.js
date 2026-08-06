const o="05-loops-for-while-48",t="Nested Loop Multiplication",n=`for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + 'x' + j + '=' + (i*j));
  }
}`,e=`for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + 'x' + j + '=' + (i*j));
  }
}`,i=[{input:[],expected:`1x1=1
1x2=2
1x3=3
2x1=2
2x2=4
2x3=6
3x1=3
3x2=6
3x3=9`}],s=["Outer loop for first number","Inner loop for second"],l={id:o,title:t,starterCode:n,solution:e,tests:i,hints:s};export{l as default,s as hints,o as id,e as solution,n as starterCode,i as tests,t as title};

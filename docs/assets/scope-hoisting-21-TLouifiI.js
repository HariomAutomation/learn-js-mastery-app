const t="01-variables-declarations-scope-hoisting-21",o="let loop scope",e=`for (let i = 0; i < 3; i++) {
  let x = i * 10
  if (x === 20) console.log(x)
}`,s=`for (let i = 0; i < 3; i++) {
  let x = i * 10
  if (x === 20) console.log(x)
}`,i=[{input:[],expected:"20"}],n=["let scoped to loop iteration"],l={id:t,title:o,starterCode:e,solution:s,tests:i,hints:n};export{l as default,n as hints,t as id,s as solution,e as starterCode,i as tests,o as title};

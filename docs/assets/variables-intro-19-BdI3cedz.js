const t="01-variables-declarations-variables-intro-19",s="Number parseFloat",o=`console.log(parseFloat("3.14abc"))
console.log(parseInt("42rest"))`,e=`console.log(parseFloat("3.14abc"))
console.log(parseInt("42rest"))`,n=[{input:[],expected:`3.14
42`}],a=["parseFloat reads until non-number"],l={id:t,title:s,starterCode:o,solution:e,tests:n,hints:a};export{l as default,a as hints,t as id,e as solution,o as starterCode,n as tests,s as title};

const t="01-variables-declarations-var-let-const-17",o="let in for of",n=`const arr = ["a", "b", "c"]
for (let x of arr) {
  console.log(x)
}`,e=`const arr = ["a", "b", "c"]
for (let x of arr) {
  console.log(x)
}`,s=[{input:[],expected:`a
b
c`}],r=["let creates new scope per iteration"],a={id:t,title:o,starterCode:n,solution:e,tests:s,hints:r};export{a as default,r as hints,t as id,e as solution,n as starterCode,s as tests,o as title};

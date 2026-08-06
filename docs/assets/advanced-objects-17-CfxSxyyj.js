const o="08-objects-advanced-objects-17",t="Iterate Properties",n=`const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}`,e=`const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}`,s=[{input:[],expected:`a: 1
b: 2
c: 3`}],c=["for-in loops keys","Check hasOwnProperty"],r={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{r as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};

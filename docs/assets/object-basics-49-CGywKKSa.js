const t="08-objects-object-basics-49",o="Object Entries Loop",s=`const obj = {x: 10, y: 20};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + '=' + v);
}`,e=`const obj = {x: 10, y: 20};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + '=' + v);
}`,n=[{input:[],expected:`x=10
y=20`}],c=["Destructure in loop","Log key=value"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};

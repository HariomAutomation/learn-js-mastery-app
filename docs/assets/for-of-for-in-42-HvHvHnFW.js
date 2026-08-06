const e="05-loops-for-of-for-in-42",o="For...In Object Entries",n=`const user = {name: 'Tom', age: 30, job: 'dev'};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(\`\${key}: \${user[key]}\`);
  }
}`,t=`const user = {name: 'Tom', age: 30, job: 'dev'};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(\`\${key}: \${user[key]}\`);
  }
}`,s=[{input:[],expected:`name: Tom
age: 30
job: dev`}],r=["Use template literal","Check own properties"],i={id:e,title:o,starterCode:n,solution:t,tests:s,hints:r};export{i as default,r as hints,e as id,t as solution,n as starterCode,s as tests,o as title};

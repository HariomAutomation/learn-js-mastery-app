const o="05-loops-for-of-for-in-07",n="For...Of Vs For...In",s=`const arr = [10, 20, 30];
for (const val of arr) console.log('of: ' + val);
for (const key in arr) console.log('in: ' + key);`,t=`const arr = [10, 20, 30];
for (const val of arr) console.log('of: ' + val);
for (const key in arr) console.log('in: ' + key);`,r=[{input:[],expected:`of: 10
of: 20
of: 30
in: 0
in: 1
in: 2`}],e=["of gives values","in gives keys/indices"],i={id:o,title:n,starterCode:s,solution:t,tests:r,hints:e};export{i as default,e as hints,o as id,t as solution,s as starterCode,r as tests,n as title};

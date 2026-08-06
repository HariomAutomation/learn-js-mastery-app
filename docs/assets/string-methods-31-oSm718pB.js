const t="09-strings-string-methods-31",s="Pad Fill",o=`console.log('5'.padStart(5, '0'));
console.log('5'.padEnd(5, '0'));`,n=`console.log('5'.padStart(5, '0'));
console.log('5'.padEnd(5, '0'));`,e=[{input:[],expected:`00005
50000`}],d=["Pad start and end","Different positions"],i={id:t,title:s,starterCode:o,solution:n,tests:e,hints:d};export{i as default,d as hints,t as id,n as solution,o as starterCode,e as tests,s as title};

const t="05-loops-for-while-13",o="For Loop With String",s=`const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}`,n=`const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}`,e=[{input:[],expected:`H
e
l
l
o`}],i=["Access string characters with []","Use .length for loop condition"],l={id:t,title:o,starterCode:s,solution:n,tests:e,hints:i};export{l as default,i as hints,t as id,n as solution,s as starterCode,e as tests,o as title};

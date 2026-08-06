const o="05-loops-for-while-21",t="Do...While Menu Pattern",e=`let choice = 0;
do {
  choice++;
  console.log('Option ' + choice);
} while (choice < 3);`,n=`let choice = 0;
do {
  choice++;
  console.log('Option ' + choice);
} while (choice < 3);`,c=[{input:[],expected:`Option 1
Option 2
Option 3`}],i=["Increment before using","Body runs at least once"],s={id:o,title:t,starterCode:e,solution:n,tests:c,hints:i};export{s as default,i as hints,o as id,n as solution,e as starterCode,c as tests,t as title};

const s="05-loops-for-of-for-in-37",e="For...In Object Values",o=`const scores = {math: 95, science: 88, english: 92};
for (const key in scores) {
  if (scores.hasOwnProperty(key)) {
    console.log(key + ': ' + scores[key]);
  }
}`,n=`const scores = {math: 95, science: 88, english: 92};
for (const key in scores) {
  if (scores.hasOwnProperty(key)) {
    console.log(key + ': ' + scores[key]);
  }
}`,t=[{input:[],expected:`math: 95
science: 88
english: 92`}],c=["Check hasOwnProperty","Access value with key"],r={id:s,title:e,starterCode:o,solution:n,tests:t,hints:c};export{r as default,c as hints,s as id,n as solution,o as starterCode,t as tests,e as title};

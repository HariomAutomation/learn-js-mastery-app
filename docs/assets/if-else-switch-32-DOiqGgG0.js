const e="04-control-flow-if-else-switch-32",t="Switch with numeric ranges",s=`const score = 75;
let grade;
switch (true) {
  case score >= 90: grade = 'A'; break;
  case score >= 80: grade = 'B'; break;
  case score >= 70: grade = 'C'; break;
  default: grade = 'F';
}
console.log(grade);`,r=`const score = 75;
let grade;
switch (true) {
  case score >= 90: grade = 'A'; break;
  case score >= 80: grade = 'B'; break;
  case score >= 70: grade = 'C'; break;
  default: grade = 'F';
}
console.log(grade);`,c=[{input:[],expected:"C"}],n=["switch(true) matches first true case","75 >= 70 is true"],a={id:e,title:t,starterCode:s,solution:r,tests:c,hints:n};export{a as default,n as hints,e as id,r as solution,s as starterCode,c as tests,t as title};

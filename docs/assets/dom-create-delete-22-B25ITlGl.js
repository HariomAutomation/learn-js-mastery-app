const e="10-dom-dom-create-delete-22",t="appendChild Return",n=`const parent = document.createElement('div');
const child = document.createElement('span');
const returned = parent.appendChild(child);
console.log(returned === child);`,d=`const parent = document.createElement('div');
const child = document.createElement('span');
const returned = parent.appendChild(child);
console.log(returned === child);`,c=[{input:[],expected:"true"}],o=["appendChild returns the appended child","Same reference is returned"],r={id:e,title:t,starterCode:n,solution:d,tests:c,hints:o};export{r as default,o as hints,e as id,d as solution,n as starterCode,c as tests,t as title};

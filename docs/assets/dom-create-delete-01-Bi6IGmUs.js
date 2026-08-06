const e="10-dom-dom-create-delete-01",t="createElement Basics",o=`const div = document.createElement('div');
console.log(div.tagName);`,s=`const div = document.createElement('div');
console.log(div.tagName);`,n=[{input:[],expected:"DIV"}],a=["createElement takes a tag name","tagName returns uppercase tag"],c={id:e,title:t,starterCode:o,solution:s,tests:n,hints:a};export{c as default,a as hints,e as id,s as solution,o as starterCode,n as tests,t as title};

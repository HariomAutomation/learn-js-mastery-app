const t="10-dom-dom-create-delete-44",e="create Element Attribute",o=`const el = document.createElement('button');
el.setAttribute('type', 'submit');
console.log(el.getAttribute('type'));`,s=`const el = document.createElement('button');
el.setAttribute('type', 'submit');
console.log(el.getAttribute('type'));`,n=[{input:[],expected:"submit"}],i=["Set attributes after creation","Use setAttribute"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:i};export{l as default,i as hints,t as id,s as solution,o as starterCode,n as tests,e as title};

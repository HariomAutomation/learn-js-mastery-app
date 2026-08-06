const t="08-objects-destructuring-copying-33",e="Default Value Types",o=`const {a = 1, b = 'hello', c = [1, 2], d = {x: 1}} = {};
console.log(a, b, c.length, d.x);`,s=`const {a = 1, b = 'hello', c = [1, 2], d = {x: 1}} = {};
console.log(a, b, c.length, d.x);`,n=[{input:[],expected:"1 hello 2 1"}],l=["Different default types","All work as defaults"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:l};export{c as default,l as hints,t as id,s as solution,o as starterCode,n as tests,e as title};

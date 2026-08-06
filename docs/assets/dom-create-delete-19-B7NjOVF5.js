const o="10-dom-dom-create-delete-19",t="adoptNode",e=`const doc = document;
const div = document.createElement('div');
const adopted = doc.adoptNode(div);
console.log(adopted.ownerDocument === doc);`,d=`const doc = document;
const div = document.createElement('div');
const adopted = doc.adoptNode(div);
console.log(adopted.ownerDocument === doc);`,n=[{input:[],expected:"true"}],c=["adoptNode adopts node from another document","Sets ownerDocument"],s={id:o,title:t,starterCode:e,solution:d,tests:n,hints:c};export{s as default,c as hints,o as id,d as solution,e as starterCode,n as tests,t as title};

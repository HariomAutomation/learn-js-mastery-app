const t="13-oop-prototypes-this-14",n="This in Event",e=`const btn = { name: 'button' };
// btn.addEventListener('click', function() {
//   console.log(this.name); // 'button'
// });
console.log("this is the element with listener");`,o=`const btn = { name: 'button' };
// btn.addEventListener('click', function() {
//   console.log(this.name); // 'button'
// });
console.log("this is the element with listener");`,s=[{input:[],expected:"this is the element with listener"}],i=["In event handler, this is element","Not the object containing method"],l={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{l as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};

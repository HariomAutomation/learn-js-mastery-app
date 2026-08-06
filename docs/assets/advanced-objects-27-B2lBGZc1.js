const e="08-objects-advanced-objects-27",t="Immutable Pattern",s=`const state = Object.freeze({
  user: Object.freeze({name: 'Alice', age: 25}),
  items: Object.freeze([1, 2, 3])
});
state.user.age = 30;
console.log(state.user.age);`,n=`const state = Object.freeze({
  user: Object.freeze({name: 'Alice', age: 25}),
  items: Object.freeze([1, 2, 3])
});
state.user.age = 30;
console.log(state.user.age);`,a=[{input:[],expected:"25"}],c=["Deep freeze pattern","Nested freeze"],o={id:e,title:t,starterCode:s,solution:n,tests:a,hints:c};export{o as default,c as hints,e as id,n as solution,s as starterCode,a as tests,t as title};

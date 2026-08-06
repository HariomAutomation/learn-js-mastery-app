const n="06-functions-closures-iife-22",e="Closure Event Handler",t=`function createHandler(name) {
  return {
    handle: () => console.log('Handling ' + name),
    getName: () => name
  };
}
const h1 = createHandler('click');
const h2 = createHandler('scroll');
h1.handle();
h2.handle();`,a=`function createHandler(name) {
  return {
    handle: () => console.log('Handling ' + name),
    getName: () => name
  };
}
const h1 = createHandler('click');
const h2 = createHandler('scroll');
h1.handle();
h2.handle();`,l=[{input:[],expected:`Handling click
Handling scroll`}],c=["Each handler has own closure","name is captured"],s={id:n,title:e,starterCode:t,solution:a,tests:l,hints:c};export{s as default,c as hints,n as id,a as solution,t as starterCode,l as tests,e as title};

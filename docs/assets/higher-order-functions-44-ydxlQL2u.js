const n="06-functions-higher-order-functions-44",e="Dispatcher Function",t=`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,o=`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,a=[{input:[],expected:`Hello Alice
Goodbye Bob`}],c=["Map actions to handlers","Call matching handler"],s={id:n,title:e,starterCode:t,solution:o,tests:a,hints:c};export{s as default,c as hints,n as id,o as solution,t as starterCode,a as tests,e as title};

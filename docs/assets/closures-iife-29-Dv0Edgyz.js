const o="06-functions-closures-iife-29",t="Module Pattern Complete",n=`const TodoList = (function() {
  let todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    getAll: () => [...todos],
    count: () => todos.length
  };
})();
TodoList.add('Buy milk');
TodoList.add('Walk dog');
console.log(TodoList.count());
console.log(TodoList.getAll());`,s=`const TodoList = (function() {
  let todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    getAll: () => [...todos],
    count: () => todos.length
  };
})();
TodoList.add('Buy milk');
TodoList.add('Walk dog');
console.log(TodoList.count());
console.log(TodoList.getAll());`,d=[{input:[],expected:`2
[ 'Buy milk', 'Walk dog' ]`}],e=["Private todos array","Public API methods"],l={id:o,title:t,starterCode:n,solution:s,tests:d,hints:e};export{l as default,e as hints,o as id,s as solution,n as starterCode,d as tests,t as title};

const t="06-functions-closures-iife-32",e="Private Array",s=`function createStack() {
  const items = [];
  return {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    size: () => items.length
  };
}
const stack = createStack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.size());`,n=`function createStack() {
  const items = [];
  return {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    size: () => items.length
  };
}
const stack = createStack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.size());`,o=[{input:[],expected:`20
2`}],c=["Private items array","Public methods only"],i={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};

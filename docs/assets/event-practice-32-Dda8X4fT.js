const t="11-events-event-practice-32",n="Click Counter",e=`const btn = document.querySelector('button');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  console.log(count);
});`,o=`const btn = document.querySelector('button');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  console.log(count);
});`,c=[{input:[],expected:"1"}],s=["Increment count on each click","Display updated count"],u={id:t,title:n,starterCode:e,solution:o,tests:c,hints:s};export{u as default,s as hints,t as id,o as solution,e as starterCode,c as tests,n as title};

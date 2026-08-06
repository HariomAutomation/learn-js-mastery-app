const e="11-events-event-basics-01",t="addEventListener Basics",n=`const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('clicked');
});
console.log('listener added');`,s=`const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('clicked');
});
console.log('listener added');`,o=[{input:[],expected:"listener added"}],c=["addEventListener takes event type and callback","Does not fire until event occurs"],d={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{d as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};

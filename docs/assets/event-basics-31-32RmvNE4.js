const e="11-events-event-basics-31",t="event.target vs currentTarget",n=`const parent = document.querySelector('.parent');
parent.addEventListener('click', function(e) {
  console.log(e.target === e.currentTarget);
});`,r=`const parent = document.querySelector('.parent');
parent.addEventListener('click', function(e) {
  console.log(e.target === e.currentTarget);
});`,s=[{input:[],expected:"true"}],c=["target is clicked element","currentTarget is element with listener"],o={id:e,title:t,starterCode:n,solution:r,tests:s,hints:c};export{o as default,c as hints,e as id,r as solution,n as starterCode,s as tests,t as title};

const t="11-events-event-practice-35",e="Toggle Class on Click",s=`const box = document.querySelector('.box');
box.addEventListener('click', function() {
  this.classList.toggle('active');
  console.log(this.classList.contains('active'));
});`,o=`const box = document.querySelector('.box');
box.addEventListener('click', function() {
  this.classList.toggle('active');
  console.log(this.classList.contains('active'));
});`,n=[{input:[],expected:"true"}],c=["classList.toggle adds/removes class","Check if active after toggle"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};

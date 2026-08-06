const t="11-events-event-basics-27",e="Event Timestamp",n=`document.addEventListener('click', function(e) {
  console.log(typeof e.timeStamp);
});`,s=`document.addEventListener('click', function(e) {
  console.log(typeof e.timeStamp);
});`,o=[{input:[],expected:"number"}],i=["timeStamp is when event occurred","Returns milliseconds"],c={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};

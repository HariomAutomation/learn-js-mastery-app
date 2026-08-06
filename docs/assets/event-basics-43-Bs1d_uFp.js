const e="11-events-event-basics-43",t="Submit Prevent",n=`function handleSubmit(e) {
  e.preventDefault();
  console.log('no reload');
}
document.querySelector('form').addEventListener('submit', handleSubmit);`,o=`function handleSubmit(e) {
  e.preventDefault();
  console.log('no reload');
}
document.querySelector('form').addEventListener('submit', handleSubmit);`,s=[{input:[],expected:"no reload"}],i=["preventDefault stops form submission","Prevents page reload"],r={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{r as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

const t="11-events-event-practice-36",e="Input Value Change",n=`const input = document.querySelector('input');
input.addEventListener('input', function() {
  console.log(this.value);
});`,o=`const input = document.querySelector('input');
input.addEventListener('input', function() {
  console.log(this.value);
});`,s=[{input:[],expected:"hello"}],i=["Fires on every input change","this.value has current value"],u={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{u as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};

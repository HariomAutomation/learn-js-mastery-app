const e="11-events-event-basics-17",t="Resize Event",n=`window.addEventListener('resize', function(e) {
  console.log('resized');
});`,s=`window.addEventListener('resize', function(e) {
  console.log('resized');
});`,o=[{input:[],expected:"resized"}],i=["Fires on window resize","Use with debounce for performance"],d={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{d as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};

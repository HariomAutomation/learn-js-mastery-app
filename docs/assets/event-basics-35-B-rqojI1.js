const t="11-events-event-basics-35",o="AbortController Signal",n=`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,e=`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,r=[{input:[],expected:"aborted"}],s=["AbortController can remove listeners","Pass signal option to addEventListener"],l={id:t,title:o,starterCode:n,solution:e,tests:r,hints:s};export{l as default,s as hints,t as id,e as solution,n as starterCode,r as tests,o as title};

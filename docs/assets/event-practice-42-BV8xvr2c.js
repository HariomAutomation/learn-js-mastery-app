const t="11-events-event-practice-42",o="AbortController Events",n=`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,e=`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,r=[{input:[],expected:"aborted"}],l=["AbortController removes signal listeners","Pass signal option"],s={id:t,title:o,starterCode:n,solution:e,tests:r,hints:l};export{s as default,l as hints,t as id,e as solution,n as starterCode,r as tests,o as title};

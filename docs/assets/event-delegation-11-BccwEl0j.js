const e="11-events-event-delegation-11",t="Cleanup Pattern",n=`function handleClick(e) {
  console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleClick);
list.removeEventListener('click', handleClick);
console.log('cleaned up');`,l=`function handleClick(e) {
  console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleClick);
list.removeEventListener('click', handleClick);
console.log('cleaned up');`,o=[{input:[],expected:"cleaned up"}],c=["Named function can be removed","Same reference must be passed"],s={id:e,title:t,starterCode:n,solution:l,tests:o,hints:c};export{s as default,c as hints,e as id,l as solution,n as starterCode,o as tests,t as title};

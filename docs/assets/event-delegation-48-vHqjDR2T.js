const e="11-events-event-delegation-48",t="Delegation Cleanup Pattern",n=`function handleListClick(e) {
  if (e.target.tagName === 'LI') console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleListClick);
list.removeEventListener('click', handleListClick);
console.log('cleaned up');`,l=`function handleListClick(e) {
  if (e.target.tagName === 'LI') console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleListClick);
list.removeEventListener('click', handleListClick);
console.log('cleaned up');`,i=[{input:[],expected:"cleaned up"}],o=["Named function can be removed","Same reference needed"],s={id:e,title:t,starterCode:n,solution:l,tests:i,hints:o};export{s as default,o as hints,e as id,l as solution,n as starterCode,i as tests,t as title};

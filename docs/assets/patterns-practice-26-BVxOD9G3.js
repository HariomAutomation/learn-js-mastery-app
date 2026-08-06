const t="05-loops-patterns-practice-26",s="Star Diamond",e=`for (let i = 0; i < 5; i++) {
  let stars = i < 3 ? 2*i+1 : 2*(4-i)+1;
  let spaces = ' '.repeat(2-Math.abs(i-2));
  console.log(spaces + '*'.repeat(stars));
}`,a=`for (let i = 0; i < 5; i++) {
  let stars = i < 3 ? 2*i+1 : 2*(4-i)+1;
  let spaces = ' '.repeat(2-Math.abs(i-2));
  console.log(spaces + '*'.repeat(stars));
}`,n=[{input:[],expected:`  *
 ***
*****
 ***
  *`}],i=["Calculate stars per row","Add leading spaces"],o={id:t,title:s,starterCode:e,solution:a,tests:n,hints:i};export{o as default,i as hints,t as id,a as solution,e as starterCode,n as tests,s as title};

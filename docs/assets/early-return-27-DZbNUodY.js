const e="04-control-flow-early-return-27",r="Early return with object - error",t=`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('', 25));`,n=`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('', 25));`,a=[{input:[],expected:"[object Object]"}],o=["'' is falsy","Returns error object"],s={id:e,title:r,starterCode:t,solution:n,tests:a,hints:o};export{s as default,o as hints,e as id,n as solution,t as starterCode,a as tests,r as title};

const e="04-control-flow-early-return-26",t="Early return with object",r=`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('Alice', 25));`,n=`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('Alice', 25));`,a=[{input:[],expected:"[object Object]"}],o=["name is truthy","age is positive","Returns user object"],s={id:e,title:t,starterCode:r,solution:n,tests:a,hints:o};export{s as default,o as hints,e as id,n as solution,r as starterCode,a as tests,t as title};

const t="04-control-flow-early-return-28",n="Validation chain",e=`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'ab' }));`,a=`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'ab' }));`,r=[{input:[],expected:"username too short"}],o=["data is truthy","username exists","length is 2, < 3"],s={id:t,title:n,starterCode:e,solution:a,tests:r,hints:o};export{s as default,o as hints,t as id,a as solution,e as starterCode,r as tests,n as title};

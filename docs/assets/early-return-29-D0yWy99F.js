const t="04-control-flow-early-return-29",n="Validation chain - valid",a=`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'alice' }));`,e=`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'alice' }));`,r=[{input:[],expected:"valid"}],o=["All guards pass","Returns 'valid'"],s={id:t,title:n,starterCode:a,solution:e,tests:r,hints:o};export{s as default,o as hints,t as id,e as solution,a as starterCode,r as tests,n as title};

const t="12-async-async-await-46",s="Async Class Method",n=`class API {
  async getData() { return 'data'; }
}
new API().getData().then(d => console.log(d));`,a=`class API {
  async getData() { return 'data'; }
}
new API().getData().then(d => console.log(d));`,e=[{input:[],expected:"data"}],o=["Class methods can be async","Returns promise"],c={id:t,title:s,starterCode:n,solution:a,tests:e,hints:o};export{c as default,o as hints,t as id,a as solution,n as starterCode,e as tests,s as title};

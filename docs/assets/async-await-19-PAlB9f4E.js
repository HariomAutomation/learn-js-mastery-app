const t="12-async-async-await-19",n="Async Class Method",s=`class API {
  async fetchData() {
    return 'data';
  }
}
new API().fetchData().then(d => console.log(d));`,a=`class API {
  async fetchData() {
    return 'data';
  }
}
new API().fetchData().then(d => console.log(d));`,e=[{input:[],expected:"data"}],c=["Methods can be async","Returns promise"],o={id:t,title:n,starterCode:s,solution:a,tests:e,hints:c};export{o as default,c as hints,t as id,a as solution,s as starterCode,e as tests,n as title};

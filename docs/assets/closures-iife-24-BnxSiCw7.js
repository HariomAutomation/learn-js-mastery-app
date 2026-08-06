const n="06-functions-closures-iife-24",t="Module Singleton",e=`const instance = (function() {
  let created = false;
  let data = null;
  return {
    init: () => {
      if (!created) {
        data = [1, 2, 3];
        created = true;
      }
      return data;
    }
  };
})();
console.log(instance.init());
console.log(instance.init());`,s=`const instance = (function() {
  let created = false;
  let data = null;
  return {
    init: () => {
      if (!created) {
        data = [1, 2, 3];
        created = true;
      }
      return data;
    }
  };
})();
console.log(instance.init());
console.log(instance.init());`,i=[{input:[],expected:`[ 1, 2, 3 ]
[ 1, 2, 3 ]`}],o=["Singleton pattern","Only creates once"],c={id:n,title:t,starterCode:e,solution:s,tests:i,hints:o};export{c as default,o as hints,n as id,s as solution,e as starterCode,i as tests,t as title};

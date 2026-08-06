const n="06-functions-arrow-functions-34",t="Arrow Object Method",o=`const obj = {
  nums: [1, 2, 3, 4],
  sum: function() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
};
console.log(obj.sum());`,s=`const obj = {
  nums: [1, 2, 3, 4],
  sum: function() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
};
console.log(obj.sum());`,e=[{input:[],expected:"10"}],r=["Use function for this","Arrow won't work here"],u={id:n,title:t,starterCode:o,solution:s,tests:e,hints:r};export{u as default,r as hints,n as id,s as solution,o as starterCode,e as tests,t as title};

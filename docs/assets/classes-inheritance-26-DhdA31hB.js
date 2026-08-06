const t="13-oop-classes-inheritance-26",s="Static Method",n=`class ArrayUtils {
  static flatten(arr) {
    return arr.flat();
  }
}
console.log(ArrayUtils.flatten([[1, 2], [3, 4]]));`,e=`class ArrayUtils {
  static flatten(arr) {
    return arr.flat();
  }
}
console.log(ArrayUtils.flatten([[1, 2], [3, 4]]));`,a=[{input:[],expected:"1,2,3,4"}],r=["Static method on class","No instance needed"],o={id:t,title:s,starterCode:n,solution:e,tests:a,hints:r};export{o as default,r as hints,t as id,e as solution,n as starterCode,a as tests,s as title};

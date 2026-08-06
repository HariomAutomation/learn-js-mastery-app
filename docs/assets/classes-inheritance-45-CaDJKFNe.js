const t="13-oop-classes-inheritance-45",n="Static Method",a=`class MathUtil {
  static clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
}
console.log(MathUtil.clamp(15, 0, 10));`,s=`class MathUtil {
  static clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
}
console.log(MathUtil.clamp(15, 0, 10));`,e=[{input:[],expected:"10"}],i=["Static method on class","No instance needed"],c={id:t,title:n,starterCode:a,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,a as starterCode,e as tests,n as title};

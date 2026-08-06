const t="13-oop-classes-inheritance-04",s="Static Methods",n=`class MathUtil {
  static add(a, b) {
    // TODO: return sum
  }
}
console.log(MathUtil.add(2, 3));`,e=`class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3));`,a=[{input:[],expected:"5"}],o=["static methods are on the class","No need to instantiate"],i={id:t,title:s,starterCode:n,solution:e,tests:a,hints:o};export{i as default,o as hints,t as id,e as solution,n as starterCode,a as tests,s as title};

const n="13-oop-classes-inheritance-22",t="Static Init",s=`class Config {
  static instance;
  static {
    Config.instance = new Config();
  }
}
console.log(Config.instance instanceof Config);`,i=`class Config {
  static instance;
  static {
    Config.instance = new Config();
  }
}
console.log(Config.instance instanceof Config);`,o=[{input:[],expected:"true"}],e=["static block runs once","Used for static initialization"],c={id:n,title:t,starterCode:s,solution:i,tests:o,hints:e};export{c as default,e as hints,n as id,i as solution,s as starterCode,o as tests,t as title};

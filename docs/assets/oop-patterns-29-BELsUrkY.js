const t="13-oop-oop-patterns-29",r="Strategy Complete",s=`class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(arr) { return this.strategy(arr); }
}
const asc = (arr) => [...arr].sort((a, b) => a - b);
const desc = (arr) => [...arr].sort((a, b) => b - a);
const sorter = new Sorter(asc);
console.log(sorter.sort([3, 1, 2]));`,o=`class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(arr) { return this.strategy(arr); }
}
const asc = (arr) => [...arr].sort((a, b) => a - b);
const desc = (arr) => [...arr].sort((a, b) => b - a);
const sorter = new Sorter(asc);
console.log(sorter.sort([3, 1, 2]));`,a=[{input:[],expected:"1,2,3"}],e=["Inject strategy","Swap algorithm at runtime"],n={id:t,title:r,starterCode:s,solution:o,tests:a,hints:e};export{n as default,e as hints,t as id,o as solution,s as starterCode,a as tests,r as title};

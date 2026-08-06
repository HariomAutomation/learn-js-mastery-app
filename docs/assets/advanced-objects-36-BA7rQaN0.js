const t="08-objects-advanced-objects-36",e="Symbol Species",s=`class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const arr = new MyArray(1, 2, 3);
const mapped = arr.map(x => x * 2);
console.log(mapped instanceof MyArray);`,n=`class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const arr = new MyArray(1, 2, 3);
const mapped = arr.map(x => x * 2);
console.log(mapped instanceof MyArray);`,r=[{input:[],expected:"false"}],o=["Symbol.species controls","Constructor for derived objects"],a={id:t,title:e,starterCode:s,solution:n,tests:r,hints:o};export{a as default,o as hints,t as id,n as solution,s as starterCode,r as tests,e as title};

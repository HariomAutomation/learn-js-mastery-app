const t="08-objects-advanced-objects-35",n="Symbol Iterator",e=`const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last ? {value: current++, done: false} : {done: true};
      }
    };
  }
};
console.log([...range]);`,o=`const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last ? {value: current++, done: false} : {done: true};
      }
    };
  }
};
console.log([...range]);`,r=[{input:[],expected:"[ 1, 2, 3 ]"}],s=["Implement iterator","next() returns value/done"],a={id:t,title:n,starterCode:e,solution:o,tests:r,hints:s};export{a as default,s as hints,t as id,o as solution,e as starterCode,r as tests,n as title};

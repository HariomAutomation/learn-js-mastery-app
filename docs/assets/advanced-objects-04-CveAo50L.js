const e="08-objects-advanced-objects-04",t="Object Keys Enumeration",o=`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3, enumerable: false});
console.log(Object.keys(obj));`,s=`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3, enumerable: false});
console.log(Object.keys(obj));`,n=[{input:[],expected:"[ 'a', 'b' ]"}],c=["enumerable false hides","Not in keys"],a={id:e,title:t,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,e as id,s as solution,o as starterCode,n as tests,t as title};

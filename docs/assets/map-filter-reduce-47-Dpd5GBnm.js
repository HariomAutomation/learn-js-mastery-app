const t="07-arrays-map-filter-reduce-47",e="Filter Duplicate",r=`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
const filtered = arr.____((v, i) => arr.indexOf(v) === i);
console.log(JSON.stringify(filtered) === JSON.stringify(unique));`,i=`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
const filtered = arr.filter((v, i) => arr.indexOf(v) === i);
console.log(JSON.stringify(filtered) === JSON.stringify(unique));`,n=[{input:[],expected:"true"}],s=["filter with indexOf","Check first occurrence"],o={id:t,title:e,starterCode:r,solution:i,tests:n,hints:s};export{o as default,s as hints,t as id,i as solution,r as starterCode,n as tests,e as title};

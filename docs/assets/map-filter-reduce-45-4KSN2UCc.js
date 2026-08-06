const t="07-arrays-map-filter-reduce-45",c="Reduce Object Accumulator",s=`const arr = [1, 2, 3, 4, 5];
const result = arr.____((acc, x) => ({
  sum: acc.sum + x,
  count: acc.count + 1
}), { sum: 0, count: 0 });
console.log(result);`,n=`const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, x) => ({
  sum: acc.sum + x,
  count: acc.count + 1
}), { sum: 0, count: 0 });
console.log(result);`,o=[{input:[],expected:"{ sum: 15, count: 5 }"}],u=["Object as accumulator","Track sum and count"],e={id:t,title:c,starterCode:s,solution:n,tests:o,hints:u};export{e as default,u as hints,t as id,n as solution,s as starterCode,o as tests,c as title};

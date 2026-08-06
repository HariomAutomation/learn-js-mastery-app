const t="08-objects-destructuring-copying-20",s="Destructuring Practice",r=`const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second, rest);`,e=`const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second, rest);`,n=[{input:[],expected:"1 2 [ 3, 4, 5 ]"}],o=["Array destructuring rest","Collects remainder"],c={id:t,title:s,starterCode:r,solution:e,tests:n,hints:o};export{c as default,o as hints,t as id,e as solution,r as starterCode,n as tests,s as title};

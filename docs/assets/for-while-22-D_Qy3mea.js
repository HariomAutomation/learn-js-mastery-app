const e="05-loops-for-while-22",t="Reverse String Loop",s=`const str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);`,o=`const str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);`,r=[{input:[],expected:"olleH"}],n=["Start from last index","Decrement i"],l={id:e,title:t,starterCode:s,solution:o,tests:r,hints:n};export{l as default,n as hints,e as id,o as solution,s as starterCode,r as tests,t as title};

const t="09-strings-string-patterns-01",e="Reverse String",s=`function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('hello'));`,r=`function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('hello'));`,n=[{input:[],expected:"olleh"}],o=["Split to array, reverse, join","Classic pattern"],i={id:t,title:e,starterCode:s,solution:r,tests:n,hints:o};export{i as default,o as hints,t as id,r as solution,s as starterCode,n as tests,e as title};

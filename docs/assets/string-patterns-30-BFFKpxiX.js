const e="09-strings-string-patterns-30",s="Reverse Words",t=`function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world foo'));`,r=`function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world foo'));`,o=[{input:[],expected:"foo world hello"}],n=["Split by space","Reverse array"],l={id:e,title:s,starterCode:t,solution:r,tests:o,hints:n};export{l as default,n as hints,e as id,r as solution,t as starterCode,o as tests,s as title};

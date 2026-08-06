const t="09-strings-string-patterns-17",o="Word Frequency",e=`function wordFreq(str) {
  return str.split(/\\s+/).reduce((acc, w) => ({...acc, [w]: (acc[w] || 0) + 1}), {});
}
console.log(wordFreq('hello world hello'));`,r=`function wordFreq(str) {
  return str.split(/\\s+/).reduce((acc, w) => ({...acc, [w]: (acc[w] || 0) + 1}), {});
}
console.log(wordFreq('hello world hello'));`,s=[{input:[],expected:"{ hello: 2, world: 1 }"}],n=["Count word occurrences","Reduce to object"],c={id:t,title:o,starterCode:e,solution:r,tests:s,hints:n};export{c as default,n as hints,t as id,r as solution,e as starterCode,s as tests,o as title};

const s="06-functions-arrow-functions-33",o="Arrow Conditional",t=`const classify = x => x > 0 ? 'positive' : x < 0 ? 'negative' : 'zero';
console.log(classify(5));
console.log(classify(-3));
console.log(classify(0));`,n=`const classify = x => x > 0 ? 'positive' : x < 0 ? 'negative' : 'zero';
console.log(classify(5));
console.log(classify(-3));
console.log(classify(0));`,e=[{input:[],expected:`positive
negative
zero`}],i=["Nested ternary","Return string"],c={id:s,title:o,starterCode:t,solution:n,tests:e,hints:i};export{c as default,i as hints,s as id,n as solution,t as starterCode,e as tests,o as title};

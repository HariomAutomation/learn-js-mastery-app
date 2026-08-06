const t="09-strings-string-basics-04",s="Multi-line",n=`const str = ____;
console.log(str);`,e="const str = `line1\nline2`;\nconsole.log(str);",i=[{input:[],expected:`line1
line2`}],o=["Backticks for multi-line","Newlines preserved"],l={id:t,title:s,starterCode:n,solution:e,tests:i,hints:o};export{l as default,o as hints,t as id,e as solution,n as starterCode,i as tests,s as title};

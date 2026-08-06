const t="05-loops-for-of-for-in-02",o="For...Of Strings",s=`const str = "Hi";
for (const char of str) {
  console.log(char);
}`,n=`const str = "Hi";
for (const char of str) {
  console.log(char);
}`,r=[{input:[],expected:`H
i`}],c=["Iterate over characters","Each char is a string"],e={id:t,title:o,starterCode:s,solution:n,tests:r,hints:c};export{e as default,c as hints,t as id,n as solution,s as starterCode,r as tests,o as title};

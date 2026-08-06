const e="10-dom-dom-create-delete-34",t="Fragment Efficiency",n=`// DocumentFragment avoids reflows during batch operations
console.log("fragment is efficient");`,o=`// DocumentFragment avoids reflows during batch operations
console.log("fragment is efficient");`,s=[{input:[],expected:"fragment is efficient"}],i=["Fragments don't trigger layout","Single reflow when appended"],r={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{r as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};

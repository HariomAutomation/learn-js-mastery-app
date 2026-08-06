const t="10-dom-dom-modify-32",e="innerHTML vs textContent",n=`// innerHTML parses HTML tags, textContent does not
console.log("innerHTML parses, textContent does not");`,o=`// innerHTML parses HTML tags, textContent does not
console.log("innerHTML parses, textContent does not");`,s=[{input:[],expected:"innerHTML parses, textContent does not"}],r=["innerHTML creates DOM nodes","textContent treats everything as text"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:r};export{i as default,r as hints,t as id,o as solution,n as starterCode,s as tests,e as title};

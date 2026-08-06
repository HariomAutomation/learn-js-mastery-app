const t="09-strings-string-patterns-37",r="String Shuffle",n=`function shuffle(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
console.log(shuffle('abc').split('').sort().join(''));`,s=`function shuffle(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
console.log(shuffle('abc').split('').sort().join(''));`,o=[{input:[],expected:"abc"}],i=["Fisher-Yates shuffle","Same chars, different order"],e={id:t,title:r,starterCode:n,solution:s,tests:o,hints:i};export{e as default,i as hints,t as id,s as solution,n as starterCode,o as tests,r as title};

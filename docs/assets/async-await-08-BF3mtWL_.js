const s="12-async-async-await-08",t="Await in Loop",n=`async function loop() {
  const results = [];
  for (let i = 0; i < 3; i++) {
    const val = await Promise.resolve(i);
    results.push(val);
  }
  console.log(results);
}
loop();`,o=`async function loop() {
  const results = [];
  for (let i = 0; i < 3; i++) {
    const val = await Promise.resolve(i);
    results.push(val);
  }
  console.log(results);
}
loop();`,e=[{input:[],expected:"0,1,2"}],i=["Await pauses loop","Sequential execution in loop"],l={id:s,title:t,starterCode:n,solution:o,tests:e,hints:i};export{l as default,i as hints,s as id,o as solution,n as starterCode,e as tests,t as title};

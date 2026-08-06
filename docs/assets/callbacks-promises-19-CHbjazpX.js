const l="12-async-callbacks-promises-19",s="Utility All",t=`function fetchAll(urls) {
  return Promise.all(urls.map(url => Promise.resolve(url)));
}
fetchAll(['/a', '/b', '/c']).then(r => console.log(r.length));`,e=`function fetchAll(urls) {
  return Promise.all(urls.map(url => Promise.resolve(url)));
}
fetchAll(['/a', '/b', '/c']).then(r => console.log(r.length));`,o=[{input:[],expected:"3"}],r=["Map urls to promises","Use Promise.all"],n={id:l,title:s,starterCode:t,solution:e,tests:o,hints:r};export{n as default,r as hints,l as id,e as solution,t as starterCode,o as tests,s as title};

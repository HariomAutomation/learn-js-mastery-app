const t="12-async-fetch-api-38",e="Fetch Promise Chain",n=`// fetch(url).then(checkStatus).then(parseJSON).then(handleData)
console.log("promise chain pattern");`,s=`// fetch(url).then(checkStatus).then(parseJSON).then(handleData)
console.log("promise chain pattern");`,a=[{input:[],expected:"promise chain pattern"}],c=["Chain .then() calls","Each step transforms data"],o={id:t,title:e,starterCode:n,solution:s,tests:a,hints:c};export{o as default,c as hints,t as id,s as solution,n as starterCode,a as tests,e as title};

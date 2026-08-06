const n="12-async-callbacks-promises-02",t="Callback Hell",c=`function step1(cb) { cb(1); }
function step2(val, cb) { cb(val + 1); }
function step3(val, cb) { cb(val + 1); }
step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});`,s=`function step1(cb) { cb(1); }
function step2(val, cb) { cb(val + 1); }
function step3(val, cb) { cb(val + 1); }
step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});`,o=[{input:[],expected:"3"}],e=["Nested callbacks form pyramid","Each step adds 1"],l={id:n,title:t,starterCode:c,solution:s,tests:o,hints:e};export{l as default,e as hints,n as id,s as solution,c as starterCode,o as tests,t as title};

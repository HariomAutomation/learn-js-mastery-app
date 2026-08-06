const t="06-functions-higher-order-functions-09",n="Retry Pattern",e=`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,r=`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,s=[{input:[],expected:"Success"}],o=["Try multiple times","Throw on last attempt"],i={id:t,title:n,starterCode:e,solution:r,tests:s,hints:o};export{i as default,o as hints,t as id,r as solution,e as starterCode,s as tests,n as title};

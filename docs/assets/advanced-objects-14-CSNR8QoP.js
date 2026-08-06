const t="08-objects-advanced-objects-14",e="Get Set Accessor",s=`const obj = {
  _temp: 0,
  get celsius() { return this._temp; },
  set celsius(val) { this._temp = val; },
  get fahrenheit() { return this._temp * 9/5 + 32; }
};
obj.celsius = 100;
console.log(obj.fahrenheit);`,n=`const obj = {
  _temp: 0,
  get celsius() { return this._temp; },
  set celsius(val) { this._temp = val; },
  get fahrenheit() { return this._temp * 9/5 + 32; }
};
obj.celsius = 100;
console.log(obj.fahrenheit);`,o=[{input:[],expected:"212"}],c=["Computed getter","Convert temperature"],i={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};

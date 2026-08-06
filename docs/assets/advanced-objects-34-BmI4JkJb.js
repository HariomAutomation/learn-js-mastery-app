const t="08-objects-advanced-objects-34",n="Get Set Lifecycle",e=`const obj = {
  _val: 0,
  get val() {
    console.log('getting');
    return this._val;
  },
  set val(v) {
    console.log('setting');
    this._val = v;
  }
};
obj.val = 5;
console.log(obj.val);`,o=`const obj = {
  _val: 0,
  get val() {
    console.log('getting');
    return this._val;
  },
  set val(v) {
    console.log('setting');
    this._val = v;
  }
};
obj.val = 5;
console.log(obj.val);`,s=[{input:[],expected:`setting
getting
5`}],l=["Setter called on assignment","Getter on access"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:l};export{c as default,l as hints,t as id,o as solution,e as starterCode,s as tests,n as title};

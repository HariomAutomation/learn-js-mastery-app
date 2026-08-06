const n="06-functions-closures-iife-16",s="Closure In Callback",c=`function setup() {
  let clicks = 0;
  return {
    onClick: () => {
      clicks++;
      console.log('Clicks: ' + clicks);
    }
  };
}
const ui = setup();
ui.onClick();
ui.onClick();`,t=`function setup() {
  let clicks = 0;
  return {
    onClick: () => {
      clicks++;
      console.log('Clicks: ' + clicks);
    }
  };
}
const ui = setup();
ui.onClick();
ui.onClick();`,i=[{input:[],expected:`Clicks: 1
Clicks: 2`}],l=["clicks persists","Callback uses closure"],o={id:n,title:s,starterCode:c,solution:t,tests:i,hints:l};export{o as default,l as hints,n as id,t as solution,c as starterCode,i as tests,s as title};

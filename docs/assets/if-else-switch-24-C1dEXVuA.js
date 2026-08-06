const t="04-control-flow-if-else-switch-24",e="Refactor if/else to switch",n=`function getDayType(day) {
  if (day === 'Sat' || day === 'Sun') {
    return 'weekend';
  } else {
    return 'weekday';
  }
}
console.log(getDayType('Sat'));`,o=`function getDayType(day) {
  if (day === 'Sat' || day === 'Sun') {
    return 'weekend';
  } else {
    return 'weekday';
  }
}
console.log(getDayType('Sat'));`,s=[{input:[],expected:"weekend"}],i=["Sat matches the first condition","OR checks both conditions"],a={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{a as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};

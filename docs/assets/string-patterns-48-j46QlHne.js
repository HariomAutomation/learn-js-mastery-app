const n="09-strings-string-patterns-48",s="Zigzag Convert",i=`function zigzag(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill('');
  let idx = 0, dir = 1;
  for (const c of s) {
    rows[idx] += c;
    if (idx === 0) dir = 1;
    else if (idx === numRows - 1) dir = -1;
    idx += dir;
  }
  return rows.join('');
}
console.log(zigzag('PAYPALISHIRING', 3));`,o=`function zigzag(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill('');
  let idx = 0, dir = 1;
  for (const c of s) {
    rows[idx] += c;
    if (idx === 0) dir = 1;
    else if (idx === numRows - 1) dir = -1;
    idx += dir;
  }
  return rows.join('');
}
console.log(zigzag('PAYPALISHIRING', 3));`,t=[{input:[],expected:"PAHNAPLSIIGYIR"}],r=["Fill rows zigzag","Direction changes"],e={id:n,title:s,starterCode:i,solution:o,tests:t,hints:r};export{e as default,r as hints,n as id,o as solution,i as starterCode,t as tests,s as title};

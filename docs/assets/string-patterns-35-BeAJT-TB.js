const n="09-strings-string-patterns-35",t="Longest Common Subsequence",e=`function lcs(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}
console.log(lcs('abcde', 'ace'));`,l=`function lcs(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}
console.log(lcs('abcde', 'ace'));`,i=[{input:[],expected:"3"}],s=["Dynamic programming","Build table"],a={id:n,title:t,starterCode:e,solution:l,tests:i,hints:s};export{a as default,s as hints,n as id,l as solution,e as starterCode,i as tests,t as title};

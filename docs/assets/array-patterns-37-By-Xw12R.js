const t="07-arrays-array-patterns-37",r="Rotate Matrix 90",e=`function rotate90(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}
console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]));`,o=`function rotate90(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}
console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]));`,a=[{input:[],expected:"[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]"}],n=["Map columns as rows","Reverse each"],s={id:t,title:r,starterCode:e,solution:o,tests:a,hints:n};export{s as default,n as hints,t as id,o as solution,e as starterCode,a as tests,r as title};

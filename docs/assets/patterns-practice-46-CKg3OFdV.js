const r="05-loops-patterns-practice-46",n="Bubble Sort Loop",t=`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22]));`,o=`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22]));`,e=[{input:[],expected:"[ 12, 22, 25, 34, 64 ]"}],a=["Nested loop","Swap adjacent elements"],s={id:r,title:n,starterCode:t,solution:o,tests:e,hints:a};export{s as default,a as hints,r as id,o as solution,t as starterCode,e as tests,n as title};

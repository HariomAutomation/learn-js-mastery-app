import fs from "fs";
import path from "path";

const exercises = [];

  exercises.push({
    id: "functions-function-basics-01",
    title: "function banao jo two numbers add kare",
    starterCode: "function add(a, b) {\n  // TODO: return a + b\n}",
    solution: "function add(a, b) {\n  return a + b;\n}",
    tests: [
            {
                        "input": [
                                    2,
                                    3
                        ],
                        "expected": [
                                    5
                        ]
            },
            {
                        "input": [
                                    10,
                                    20
                        ],
                        "expected": [
                                    30
                        ]
            },
            {
                        "input": [
                                    -1,
                                    1
                        ],
                        "expected": [
                                    0
                        ]
            }
],
    hints: [
          "return keyword use karo",
          "a aur b ko add karke return karo"
]
  });
  exercises.push({
    id: "functions-function-basics-02",
    title: "function banao jo number ka factorial calculate kare",
    starterCode: "function factorial(n) {\n  // TODO: return n!\n}",
    solution: "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    tests: [
            {
                        "input": [
                                    5
                        ],
                        "expected": [
                                    120
                        ]
            },
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    1
                        ]
            },
            {
                        "input": [
                                    1
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "base case check karo: n <= 1",
          "recursion use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-03",
    title: "function banao jo string reverse kare",
    starterCode: "function reverseStr(s) {\n  // TODO: return reversed string\n}",
    solution: "function reverseStr(s) {\n  return s.split('').reverse().join('');\n}",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    "olleh"
                        ]
            },
            {
                        "input": [
                                    "abc"
                        ],
                        "expected": [
                                    "cba"
                        ]
            },
            {
                        "input": [
                                    "a"
                        ],
                        "expected": [
                                    "a"
                        ]
            }
],
    hints: [
          "split, reverse, join use karo",
          "string ko array mein convert karo"
]
  });
  exercises.push({
    id: "functions-function-basics-04",
    title: "function banao jo number check kare prime hai ya nahi",
    starterCode: "function isPrime(n) {\n  // TODO: return true if prime\n}",
    solution: "function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}",
    tests: [
            {
                        "input": [
                                    7
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    4
                        ],
                        "expected": [
                                    false
                        ]
            },
            {
                        "input": [
                                    2
                        ],
                        "expected": [
                                    true
                        ]
            }
],
    hints: [
          "2 se kam prime nahi hota",
          "sqrt tak check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-05",
    title: "function banao jo array mein sabse bada number dhundhe",
    starterCode: "function findMax(arr) {\n  // TODO: return max element\n}",
    solution: "function findMax(arr) {\n  return Math.max(...arr);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                5,
                                                3
                                    ]
                        ],
                        "expected": [
                                    5
                        ]
            },
            {
                        "input": [
                                    [
                                                10,
                                                2,
                                                8
                                    ]
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "Math.max spread operator use karo",
          "ya loop se compare karo"
]
  });
  exercises.push({
    id: "functions-function-basics-06",
    title: "function banao jo palindrome check kare",
    starterCode: "function isPalindrome(s) {\n  // TODO: return true if palindrome\n}",
    solution: "function isPalindrome(s) {\n  return s === s.split('').reverse().join('');\n}",
    tests: [
            {
                        "input": [
                                    "madam"
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "reverse karke compare karo",
          "case sensitive hai"
]
  });
  exercises.push({
    id: "functions-function-basics-07",
    title: "function banao jo Fahrenheit ko Celsius convert kare",
    starterCode: "function toCelsius(f) {\n  // TODO: return (f - 32) * 5/9\n}",
    solution: "function toCelsius(f) {\n  return (f - 32) * 5 / 9;\n}",
    tests: [
            {
                        "input": [
                                    210
                        ],
                        "expected": [
                                    100
                        ]
            },
            {
                        "input": [
                                    32
                        ],
                        "expected": [
                                    0
                        ]
            }
],
    hints: [
          "formula yaad karo",
          "(f-32) * 5/9"
]
  });
  exercises.push({
    id: "functions-function-basics-08",
    title: "function banao jo counts vowels in string",
    starterCode: "function countVowels(s) {\n  // TODO: return count of vowels\n}",
    solution: "function countVowels(s) {\n  return (s.match(/[aeiou]/gi) || []).length;\n}",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    2
                        ]
            },
            {
                        "input": [
                                    "aeiou"
                        ],
                        "expected": [
                                    5
                        ]
            }
],
    hints: [
          "regex match use karo",
          "gi flag mat bhoolna"
]
  });
  exercises.push({
    id: "functions-function-basics-09",
    title: "function banao jo array flatten kare",
    starterCode: "function flatten(arr) {\n  // TODO: return flat array\n}",
    solution: "function flatten(arr) {\n  return arr.flat(Infinity);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                [
                                                            2,
                                                            [
                                                                        3
                                                            ]
                                                ]
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            },
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "flat() method use karo",
          "Infinity depth pass karo"
]
  });
  exercises.push({
    id: "functions-function-basics-10",
    title: "function banao jo array chunk kare",
    starterCode: "function chunk(arr, size) {\n  // TODO: return chunked array\n}",
    solution: "function chunk(arr, size) {\n  const result = [];\n  for (let i = 0; i < arr.length; i += size) {\n    result.push(arr.slice(i, i + size));\n  }\n  return result;\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ],
                                    2
                        ],
                        "expected": [
                                    [
                                                1,
                                                2
                                    ],
                                    [
                                                3,
                                                4
                                    ],
                                    [
                                                5
                                    ]
                        ]
            },
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    1
                        ],
                        "expected": [
                                    [
                                                1
                                    ],
                                    [
                                                2
                                    ],
                                    [
                                                3
                                    ]
                        ]
            }
],
    hints: [
          "slice use karo",
          "size se iterate karo"
]
  });
  exercises.push({
    id: "functions-function-basics-11",
    title: "function banao jo sum of array calculate kare",
    starterCode: "function sumArray(arr) {\n  // TODO: return sum\n}",
    solution: "function sumArray(arr) {\n  return arr.reduce((acc, val) => acc + val, 0);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    6
                        ]
            },
            {
                        "input": [
                                    [
                                                10,
                                                -5,
                                                5
                                    ]
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "reduce method use karo",
          "accumulator 0 se start karo"
]
  });
  exercises.push({
    id: "functions-function-basics-12",
    title: "function banao jo array sort kare ascending order mein",
    starterCode: "function sortAsc(arr) {\n  // TODO: return sorted array\n}",
    solution: "function sortAsc(arr) {\n  return [...arr].sort((a, b) => a - b);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                3,
                                                1,
                                                2
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            },
            {
                        "input": [
                                    [
                                                5,
                                                4,
                                                3,
                                                2,
                                                1
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                        ]
            }
],
    hints: [
          "spread operator se copy karo",
          "sort comparator function"
]
  });
  exercises.push({
    id: "functions-function-basics-13",
    title: "function banao jo string mein word count kare",
    starterCode: "function wordCount(s) {\n  // TODO: return number of words\n}",
    solution: "function wordCount(s) {\n  return s.trim().split(/\\s+/).length;\n}",
    tests: [
            {
                        "input": [
                                    "hello world"
                        ],
                        "expected": [
                                    2
                        ]
            },
            {
                        "input": [
                                    "  hello  world  "
                        ],
                        "expected": [
                                    2
                        ]
            }
],
    hints: [
          "trim karo",
          "whitespace se split karo"
]
  });
  exercises.push({
    id: "functions-function-basics-14",
    title: "function banao jo object keys return kare array mein",
    starterCode: "function getKeys(obj) {\n  // TODO: return array of keys\n}",
    solution: "function getKeys(obj) {\n  return Object.keys(obj);\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1,
                                                "b": 2
                                    }
                        ],
                        "expected": [
                                    "a",
                                    "b"
                        ]
            }
],
    hints: [
          "Object.keys() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-15",
    title: "function banao jo object values return kare array mein",
    starterCode: "function getValues(obj) {\n  // TODO: return array of values\n}",
    solution: "function getValues(obj) {\n  return Object.values(obj);\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1,
                                                "b": 2
                                    }
                        ],
                        "expected": [
                                    1,
                                    2
                        ]
            }
],
    hints: [
          "Object.values() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-16",
    title: "function banao jo number ke digits ka sum kare",
    starterCode: "function digitSum(n) {\n  // TODO: return sum of digits\n}",
    solution: "function digitSum(n) {\n  return String(n).split('').reduce((s, d) => s + Number(d), 0);\n}",
    tests: [
            {
                        "input": [
                                    1234
                        ],
                        "expected": [
                                    10
                        ]
            },
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    0
                        ]
            }
],
    hints: [
          "number ko string mein convert karo",
          "har digit ka number lekar add karo"
]
  });
  exercises.push({
    id: "functions-function-basics-17",
    title: "function banao jo two strings anagram hai ya nahi check kare",
    starterCode: "function isAnagram(a, b) {\n  // TODO: return true if anagram\n}",
    solution: "function isAnagram(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}",
    tests: [
            {
                        "input": [
                                    "listen",
                                    "silent"
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    "hello",
                                    "world"
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "dono strings ko sort karo",
          "compare karo"
]
  });
  exercises.push({
    id: "functions-function-basics-18",
    title: "function banao jo number ko Roman numeral mein convert kare",
    starterCode: "function toRoman(num) {\n  // TODO: return roman string\n}",
    solution: "function toRoman(num) {\n  const map = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];\n  let result = '';\n  for (const [val, sym] of map) {\n    while (num >= val) { result += sym; num -= val; }\n  }\n  return result;\n}",
    tests: [
            {
                        "input": [
                                    3
                        ],
                        "expected": [
                                    "III"
                        ]
            },
            {
                        "input": [
                                    58
                        ],
                        "expected": [
                                    "LVIII"
                        ]
            },
            {
                        "input": [
                                    1994
                        ],
                        "expected": [
                                    "MCMXCIV"
                        ]
            }
],
    hints: [
          "greedy approach use karo",
          "descending order mein check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-19",
    title: "function banao jo array mein duplicate remove kare",
    starterCode: "function removeDuplicates(arr) {\n  // TODO: return array without duplicates\n}",
    solution: "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                2,
                                                3,
                                                3,
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "Set use karo",
          "spread operator se convert karo"
]
  });
  exercises.push({
    id: "functions-function-basics-20",
    title: "function banao jo array mein second largest number dhundhe",
    starterCode: "function secondLargest(arr) {\n  // TODO: return second largest\n}",
    solution: "function secondLargest(arr) {\n  const unique = [...new Set(arr)].sort((a,b) => b-a);\n  return unique[1];\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                5,
                                                3,
                                                5,
                                                2
                                    ]
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "duplicates hatao",
          "sort karke second element lo"
]
  });
  exercises.push({
    id: "functions-function-basics-21",
    title: "function banao jo deep clone object kare",
    starterCode: "function deepClone(obj) {\n  // TODO: return deep cloned object\n}",
    solution: "function deepClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": {
                                                            "b": 1
                                                }
                                    }
                        ],
                        "expected": [
                                    {
                                                "a": {
                                                            "b": 1
                                                }
                                    }
                        ]
            }
],
    hints: [
          "JSON parse stringify use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-22",
    title: "function banao jo array ko reverse kare",
    starterCode: "function reverseArr(arr) {\n  // TODO: return reversed array\n}",
    solution: "function reverseArr(arr) {\n  return [...arr].reverse();\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    3,
                                    2,
                                    1
                        ]
            }
],
    hints: [
          "spread operator se copy karo",
          "reverse() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-23",
    title: "function banao jo given range ke numbers return kare",
    starterCode: "function range(start, end) {\n  // TODO: return array from start to end\n}",
    solution: "function range(start, end) {\n  return Array.from({length: end - start + 1}, (_, i) => start + i);\n}",
    tests: [
            {
                        "input": [
                                    1,
                                    5
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                        ]
            }
],
    hints: [
          "Array.from use karo",
          "length calculate karo"
]
  });
  exercises.push({
    id: "functions-function-basics-24",
    title: "function banao jo number ke all factors return kare",
    starterCode: "function factors(n) {\n  // TODO: return array of factors\n}",
    solution: "function factors(n) {\n  const result = [];\n  for (let i = 1; i <= n; i++) {\n    if (n % i === 0) result.push(i);\n  }\n  return result;\n}",
    tests: [
            {
                        "input": [
                                    12
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    6,
                                    12
                        ]
            },
            {
                        "input": [
                                    1
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "1 se n tak iterate karo",
          "modulo check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-25",
    title: "function banao jo object ko array mein convert kare",
    starterCode: "function objToArray(obj) {\n  // TODO: return array of [key, value] pairs\n}",
    solution: "function objToArray(obj) {\n  return Object.entries(obj);\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1,
                                                "b": 2
                                    }
                        ],
                        "expected": [
                                    [
                                                "a",
                                                1
                                    ],
                                    [
                                                "b",
                                                2
                                    ]
                        ]
            }
],
    hints: [
          "Object.entries() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-26",
    title: "function banao jo string ke characters ka frequency count kare",
    starterCode: "function charFreq(s) {\n  // TODO: return frequency object\n}",
    solution: "function charFreq(s) {\n  const freq = {};\n  for (const ch of s) {\n    freq[ch] = (freq[ch] || 0) + 1;\n  }\n  return freq;\n}",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    {
                                                "h": 1,
                                                "e": 1,
                                                "l": 2,
                                                "o": 1
                                    }
                        ]
            }
],
    hints: [
          "object mein count karo",
          "har character ke liye check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-27",
    title: "function banao jo array ke saare numbers ka product return kare",
    starterCode: "function product(arr) {\n  // TODO: return product of all numbers\n}",
    solution: "function product(arr) {\n  return arr.reduce((acc, val) => acc * val, 1);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4
                                    ]
                        ],
                        "expected": [
                                    24
                        ]
            },
            {
                        "input": [
                                    [
                                                2,
                                                5
                                    ]
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "reduce use karo",
          "initial value 1 rakho"
]
  });
  exercises.push({
    id: "functions-function-basics-28",
    title: "function banao jo given string mein se vowels hata de",
    starterCode: "function removeVowels(s) {\n  // TODO: return string without vowels\n}",
    solution: "function removeVowels(s) {\n  return s.replace(/[aeiou]/gi, '');\n}",
    tests: [
            {
                        "input": [
                                    "hello world"
                        ],
                        "expected": [
                                    "hll wrld"
                        ]
            }
],
    hints: [
          "regex replace use karo",
          "gi flag lagao"
]
  });
  exercises.push({
    id: "functions-function-basics-29",
    title: "function banao jo array ke elements ko double kare",
    starterCode: "function doubleArr(arr) {\n  // TODO: return array with doubled values\n}",
    solution: "function doubleArr(arr) {\n  return arr.map(x => x * 2);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    2,
                                    4,
                                    6
                        ]
            }
],
    hints: [
          "map method use karo",
          "har element ko 2 se multiply karo"
]
  });
  exercises.push({
    id: "functions-function-basics-30",
    title: "function banao jo number ki power calculate kare",
    starterCode: "function power(base, exp) {\n  // TODO: return base^exp\n}",
    solution: "function power(base, exp) {\n  return Math.pow(base, exp);\n}",
    tests: [
            {
                        "input": [
                                    2,
                                    3
                        ],
                        "expected": [
                                    8
                        ]
            },
            {
                        "input": [
                                    5,
                                    0
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "Math.pow use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-31",
    title: "function banao jo object ko freeze kare",
    starterCode: "function freezeObj(obj) {\n  // TODO: return frozen object\n}",
    solution: "function freezeObj(obj) {\n  return Object.freeze(obj);\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1
                                    }
                        ],
                        "expected": [
                                    "frozen object"
                        ]
            }
],
    hints: [
          "Object.freeze() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-32",
    title: "function banao jo array ke first element return kare",
    starterCode: "function first(arr) {\n  // TODO: return first element\n}",
    solution: "function first(arr) {\n  return arr[0];\n}",
    tests: [
            {
                        "input": [
                                    [
                                                10,
                                                20,
                                                30
                                    ]
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "index 0 se access karo"
]
  });
  exercises.push({
    id: "functions-function-basics-33",
    title: "function banao jo array ke last element return kare",
    starterCode: "function last(arr) {\n  // TODO: return last element\n}",
    solution: "function last(arr) {\n  return arr[arr.length - 1];\n}",
    tests: [
            {
                        "input": [
                                    [
                                                10,
                                                20,
                                                30
                                    ]
                        ],
                        "expected": [
                                    30
                        ]
            }
],
    hints: [
          "length - 1 se access karo"
]
  });
  exercises.push({
    id: "functions-function-basics-34",
    title: "function banao jo number ko string mein convert kare",
    starterCode: "function numToString(n) {\n  // TODO: return string version\n}",
    solution: "function numToString(n) {\n  return String(n);\n}",
    tests: [
            {
                        "input": [
                                    42
                        ],
                        "expected": [
                                    "42"
                        ]
            }
],
    hints: [
          "String() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-35",
    title: "function banao jo string ko number mein convert kare",
    starterCode: "function strToNum(s) {\n  // TODO: return number version\n}",
    solution: "function strToNum(s) {\n  return Number(s);\n}",
    tests: [
            {
                        "input": [
                                    "42"
                        ],
                        "expected": [
                                    42
                        ]
            }
],
    hints: [
          "Number() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-36",
    title: "function banao jo array mein sabse chhota number dhundhe",
    starterCode: "function findMin(arr) {\n  // TODO: return min element\n}",
    solution: "function findMin(arr) {\n  return Math.min(...arr);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                5,
                                                3,
                                                8,
                                                1
                                    ]
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "Math.min spread use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-37",
    title: "function banao jo given number even hai ya nahi check kare",
    starterCode: "function isEven(n) {\n  // TODO: return true if even\n}",
    solution: "function isEven(n) {\n  return n % 2 === 0;\n}",
    tests: [
            {
                        "input": [
                                    4
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    7
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "modulo 2 check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-38",
    title: "function banao jo given number odd hai ya nahi check kare",
    starterCode: "function isOdd(n) {\n  // TODO: return true if odd\n}",
    solution: "function isOdd(n) {\n  return n % 2 !== 0;\n}",
    tests: [
            {
                        "input": [
                                    3
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    4
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "modulo 2 check karo"
]
  });
  exercises.push({
    id: "functions-function-basics-39",
    title: "function banao jo string capitalize kare",
    starterCode: "function capitalize(s) {\n  // TODO: return capitalized string\n}",
    solution: "function capitalize(s) {\n  return s.charAt(0).toUpperCase() + s.slice(1);\n}",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    "Hello"
                        ]
            }
],
    hints: [
          "pehla character uppercase karo",
          "baaki slice se lo"
]
  });
  exercises.push({
    id: "functions-function-basics-40",
    title: "function banao jo string ke words ko reverse kare",
    starterCode: "function reverseWords(s) {\n  // TODO: return reversed words string\n}",
    solution: "function reverseWords(s) {\n  return s.split(' ').reverse().join(' ');\n}",
    tests: [
            {
                        "input": [
                                    "hello world"
                        ],
                        "expected": [
                                    "world hello"
                        ]
            }
],
    hints: [
          "split space se",
          "reverse join karo"
]
  });
  exercises.push({
    id: "functions-function-basics-41",
    title: "function banao jo array mein elements ka average calculate kare",
    starterCode: "function average(arr) {\n  // TODO: return average\n}",
    solution: "function average(arr) {\n  return arr.reduce((s,v) => s+v, 0) / arr.length;\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ]
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "sum divide by length"
]
  });
  exercises.push({
    id: "functions-function-basics-42",
    title: "function banao jo array ke saare strings ko uppercase kare",
    starterCode: "function toUpperAll(arr) {\n  // TODO: return uppercase array\n}",
    solution: "function toUpperAll(arr) {\n  return arr.map(s => s.toUpperCase());\n}",
    tests: [
            {
                        "input": [
                                    [
                                                "a",
                                                "b",
                                                "c"
                                    ]
                        ],
                        "expected": [
                                    "A",
                                    "B",
                                    "C"
                        ]
            }
],
    hints: [
          "map se toUpperCase karo"
]
  });
  exercises.push({
    id: "functions-function-basics-43",
    title: "function banao jo number ke factorial iterative way se calculate kare",
    starterCode: "function factIter(n) {\n  // TODO: return factorial iteratively\n}",
    solution: "function factIter(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) result *= i;\n  return result;\n}",
    tests: [
            {
                        "input": [
                                    5
                        ],
                        "expected": [
                                    120
                        ]
            },
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "loop use karo",
          "result 1 se start karo"
]
  });
  exercises.push({
    id: "functions-function-basics-44",
    title: "function banao jo object ka shallow merge kare",
    starterCode: "function merge(a, b) {\n  // TODO: return merged object\n}",
    solution: "function merge(a, b) {\n  return {...a, ...b};\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "x": 1
                                    },
                                    {
                                                "y": 2
                                    }
                        ],
                        "expected": [
                                    {
                                                "x": 1,
                                                "y": 2
                                    }
                        ]
            }
],
    hints: [
          "spread operator use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-45",
    title: "function banao jo array ke elements ko square kare",
    starterCode: "function squareArr(arr) {\n  // TODO: return squared array\n}",
    solution: "function squareArr(arr) {\n  return arr.map(x => x * x);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    4,
                                    9
                        ]
            }
],
    hints: [
          "map use karo",
          "x*x karo"
]
  });
  exercises.push({
    id: "functions-function-basics-46",
    title: "function banao jo given number positive, negative ya zero hai bataye",
    starterCode: "function classify(n) {\n  // TODO: return positive/negative/zero\n}",
    solution: "function classify(n) {\n  if (n > 0) return 'positive';\n  if (n < 0) return 'negative';\n  return 'zero';\n}",
    tests: [
            {
                        "input": [
                                    5
                        ],
                        "expected": [
                                    "positive"
                        ]
            },
            {
                        "input": [
                                    -3
                        ],
                        "expected": [
                                    "negative"
                        ]
            },
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    "zero"
                        ]
            }
],
    hints: [
          "if-else use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-47",
    title: "function banao jo given array mein missing number dhundhe 1 to n",
    starterCode: "function missing(arr) {\n  // TODO: return missing number\n}",
    solution: "function missing(arr) {\n  const n = arr.length + 1;\n  return n * (n + 1) / 2 - arr.reduce((s,v) => s+v, 0);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                4,
                                                5
                                    ]
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "formula use karo",
          "sum of n numbers minus array sum"
]
  });
  exercises.push({
    id: "functions-function-basics-48",
    title: "function banao jo given object ke values ko array mein return kare",
    starterCode: "function vals(obj) {\n  // TODO: return values array\n}",
    solution: "function vals(obj) {\n  return Object.values(obj);\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1,
                                                "b": 2,
                                                "c": 3
                                    }
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "Object.values() use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-49",
    title: "function banao jo number ko binary string mein convert kare",
    starterCode: "function toBinary(n) {\n  // TODO: return binary string\n}",
    solution: "function toBinary(n) {\n  return n.toString(2);\n}",
    tests: [
            {
                        "input": [
                                    10
                        ],
                        "expected": [
                                    "1010"
                        ]
            },
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    "0"
                        ]
            }
],
    hints: [
          "toString(2) use karo"
]
  });
  exercises.push({
    id: "functions-function-basics-50",
    title: "function banao jo binary string ko number mein convert kare",
    starterCode: "function fromBinary(s) {\n  // TODO: return decimal number\n}",
    solution: "function fromBinary(s) {\n  return parseInt(s, 2);\n}",
    tests: [
            {
                        "input": [
                                    "1010"
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "parseInt base 2 use karo"
]
  });

  exercises.push({
    id: "functions-arrow-functions-01",
    title: "arrow function se addition karo",
    starterCode: "const add = () => {\n  // TODO: return sum\n}",
    solution: "const add = (a, b) => a + b;",
    tests: [
            {
                        "input": [
                                    2,
                                    3
                        ],
                        "expected": [
                                    5
                        ]
            }
],
    hints: [
          "single expression mein return mat likho",
          "parameters parenthesis mein"
]
  });
  exercises.push({
    id: "functions-arrow-functions-02",
    title: "arrow function se square calculate karo",
    starterCode: "const square = (x) => {\n  // TODO: return x*x\n}",
    solution: "const square = x => x * x;",
    tests: [
            {
                        "input": [
                                    4
                        ],
                        "expected": [
                                    16
                        ]
            }
],
    hints: [
          "single parameter mein parenthesis optional hai"
]
  });
  exercises.push({
    id: "functions-arrow-functions-03",
    title: "arrow function se greeting message banao",
    starterCode: "const greet = (name) => {\n  // TODO: return hello + name\n}",
    solution: "const greet = name => `Hello, ${name}!`;",
    tests: [
            {
                        "input": [
                                    "Amit"
                        ],
                        "expected": [
                                    "Hello, Amit!"
                        ]
            }
],
    hints: [
          "template literal use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-04",
    title: "arrow function se array filter kare jo even numbers ho",
    starterCode: "const filterEven = (arr) => {\n  // TODO: return filtered array\n}",
    solution: "const filterEven = arr => arr.filter(n => n % 2 === 0);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6
                                    ]
                        ],
                        "expected": [
                                    2,
                                    4,
                                    6
                        ]
            }
],
    hints: [
          "filter method use karo",
          "n % 2 === 0"
]
  });
  exercises.push({
    id: "functions-arrow-functions-05",
    title: "arrow function se array ke saare elements ko double kare",
    starterCode: "const doubleAll = (arr) => {\n  // TODO: return doubled array\n}",
    solution: "const doubleAll = arr => arr.map(n => n * 2);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    2,
                                    4,
                                    6
                        ]
            }
],
    hints: [
          "map method use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-06",
    title: "arrow function se object banakar return karo",
    starterCode: "const makeUser = (name, age) => {\n  // TODO: return {name, age}\n}",
    solution: "const makeUser = (name, age) => ({ name, age });",
    tests: [
            {
                        "input": [
                                    "Rahul",
                                    25
                        ],
                        "expected": [
                                    {
                                                "name": "Rahul",
                                                "age": 25
                                    }
                        ]
            }
],
    hints: [
          "object literal ke liye parenthesis lagao"
]
  });
  exercises.push({
    id: "functions-arrow-functions-07",
    title: "arrow function se array reverse karo",
    starterCode: "const rev = (arr) => {\n  // TODO: return reversed array\n}",
    solution: "const rev = arr => [...arr].reverse();",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ]
                        ],
                        "expected": [
                                    3,
                                    2,
                                    1
                        ]
            }
],
    hints: [
          "spread se copy karo",
          "reverse karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-08",
    title: "arrow function se string length return karo",
    starterCode: "const len = (s) => {\n  // TODO: return length\n}",
    solution: "const len = s => s.length;",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    5
                        ]
            }
],
    hints: [
          ".length use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-09",
    title: "arrow function se first element of array return karo",
    starterCode: "const head = (arr) => {\n  // TODO: return first element\n}",
    solution: "const head = arr => arr[0];",
    tests: [
            {
                        "input": [
                                    [
                                                10,
                                                20,
                                                30
                                    ]
                        ],
                        "expected": [
                                    10
                        ]
            }
],
    hints: [
          "index 0 se lo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-10",
    title: "arrow function se factorial calculate karo",
    starterCode: "const fact = (n) => {\n  // TODO: return factorial\n}",
    solution: "const fact = n => n <= 1 ? 1 : n * fact(n - 1);",
    tests: [
            {
                        "input": [
                                    5
                        ],
                        "expected": [
                                    120
                        ]
            }
],
    hints: [
          "ternary use karo base case ke liye"
]
  });
  exercises.push({
    id: "functions-arrow-functions-11",
    title: "arrow function se number ke digits ka sum kare",
    starterCode: "const digitSum = (n) => {\n  // TODO: return digit sum\n}",
    solution: "const digitSum = n => String(n).split('').reduce((s,d) => s + Number(d), 0);",
    tests: [
            {
                        "input": [
                                    123
                        ],
                        "expected": [
                                    6
                        ]
            }
],
    hints: [
          "string mein convert karo",
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-12",
    title: "arrow function se array mein sabse bada element lo",
    starterCode: "const maxEl = (arr) => {\n  // TODO: return max\n}",
    solution: "const maxEl = arr => Math.max(...arr);",
    tests: [
            {
                        "input": [
                                    [
                                                3,
                                                7,
                                                2,
                                                9
                                    ]
                        ],
                        "expected": [
                                    9
                        ]
            }
],
    hints: [
          "Math.max spread use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-13",
    title: "arrow function se array mein unique elements lo",
    starterCode: "const unique = (arr) => {\n  // TODO: return unique elements\n}",
    solution: "const unique = arr => [...new Set(arr)];",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                2,
                                                3,
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "Set use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-14",
    title: "arrow function se two arrays ko merge karo",
    starterCode: "const merge = (a, b) => {\n  // TODO: return merged array\n}",
    solution: "const merge = (a, b) => [...a, ...b];",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2
                                    ],
                                    [
                                                3,
                                                4
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4
                        ]
            }
],
    hints: [
          "spread operator use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-15",
    title: "arrow function se object ke values ka sum karo",
    starterCode: "const sumVals = (obj) => {\n  // TODO: return sum of values\n}",
    solution: "const sumVals = obj => Object.values(obj).reduce((s,v) => s+v, 0);",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 10,
                                                "b": 20
                                    }
                        ],
                        "expected": [
                                    30
                        ]
            }
],
    hints: [
          "Object.values reduce use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-16",
    title: "arrow function se number ka absolute value lo",
    starterCode: "const abs = (n) => {\n  // TODO: return absolute value\n}",
    solution: "const abs = n => Math.abs(n);",
    tests: [
            {
                        "input": [
                                    -5
                        ],
                        "expected": [
                                    5
                        ]
            },
            {
                        "input": [
                                    3
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "Math.abs use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-17",
    title: "arrow function se array ke saare strings ko join karo",
    starterCode: "const joinWords = (arr) => {\n  // TODO: return joined string\n}",
    solution: "const joinWords = arr => arr.join(' ');",
    tests: [
            {
                        "input": [
                                    [
                                                "hello",
                                                "world"
                                    ]
                        ],
                        "expected": [
                                    "hello world"
                        ]
            }
],
    hints: [
          "join method use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-18",
    title: "arrow function se given number palindromic hai check karo",
    starterCode: "const isPalin = (n) => {\n  // TODO: check if palindrome\n}",
    solution: "const isPalin = n => String(n) === String(n).split('').reverse().join('');",
    tests: [
            {
                        "input": [
                                    121
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    123
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "number ko string mein convert karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-19",
    title: "arrow function se temperature convert karo Celsius to Fahrenheit",
    starterCode: "const toF = (c) => {\n  // TODO: return Fahrenheit\n}",
    solution: "const toF = c => c * 9/5 + 32;",
    tests: [
            {
                        "input": [
                                    0
                        ],
                        "expected": [
                                    32
                        ]
            },
            {
                        "input": [
                                    100
                        ],
                        "expected": [
                                    212
                        ]
            }
],
    hints: [
          "formula c*9/5+32"
]
  });
  exercises.push({
    id: "functions-arrow-functions-20",
    title: "arrow function se array mein zeroes hata do",
    starterCode: "const removeZeros = (arr) => {\n  // TODO: return array without zeros\n}",
    solution: "const removeZeros = arr => arr.filter(n => n !== 0);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                0,
                                                2,
                                                0,
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "filter n !== 0 use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-21",
    title: "arrow function se string ke sabse frequent character ka count batao",
    starterCode: "const mostFrequent = (s) => {\n  // TODO: return most frequent char and count\n}",
    solution: "const mostFrequent = s => {\n  const freq = {};\n  for (const c of s) freq[c] = (freq[c]||0)+1;\n  return Object.entries(freq).sort((a,b)=>b[1]-a[1])[0];\n};",
    tests: [
            {
                        "input": [
                                    "aabbbcc"
                        ],
                        "expected": [
                                    "b",
                                    3
                        ]
            }
],
    hints: [
          "frequency object banao",
          "sort by value"
]
  });
  exercises.push({
    id: "functions-arrow-functions-22",
    title: "arrow function se array mein odd numbers filter karo",
    starterCode: "const filterOdd = (arr) => {\n  // TODO: return odd numbers\n}",
    solution: "const filterOdd = arr => arr.filter(n => n % 2 !== 0);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ]
                        ],
                        "expected": [
                                    1,
                                    3,
                                    5
                        ]
            }
],
    hints: [
          "filter use karo",
          "n % 2 !== 0"
]
  });
  exercises.push({
    id: "functions-arrow-functions-23",
    title: "arrow function se string ko camelCase mein convert karo",
    starterCode: "const camelCase = (s) => {\n  // TODO: return camelCase string\n}",
    solution: "const camelCase = s => s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());",
    tests: [
            {
                        "input": [
                                    "hello_world"
                        ],
                        "expected": [
                                    "helloWorld"
                        ]
            }
],
    hints: [
          "regex replace use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-24",
    title: "arrow function se number ke all divisors return karo",
    starterCode: "const divisors = (n) => {\n  // TODO: return array of divisors\n}",
    solution: "const divisors = n => Array.from({length:n},(_,i)=>i+1).filter(i=>n%i===0);",
    tests: [
            {
                        "input": [
                                    12
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    6,
                                    12
                        ]
            }
],
    hints: [
          "Array.from filter use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-25",
    title: "arrow function se array mein missing element dhundho 1 to n",
    starterCode: "const missEl = (arr) => {\n  // TODO: return missing element\n}",
    solution: "const missEl = arr => arr.length*(arr.length+1)/2 - arr.reduce((s,v)=>s+v,0);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                4,
                                                5
                                    ]
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "formula use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-26",
    title: "arrow function se object ke keys ko sorted array mein return karo",
    starterCode: "const sortedKeys = (obj) => {\n  // TODO: return sorted keys\n}",
    solution: "const sortedKeys = obj => Object.keys(obj).sort();",
    tests: [
            {
                        "input": [
                                    {
                                                "c": 3,
                                                "a": 1,
                                                "b": 2
                                    }
                        ],
                        "expected": [
                                    "a",
                                    "b",
                                    "c"
                        ]
            }
],
    hints: [
          "Object.keys sort use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-27",
    title: "arrow function se array mein saare numbers ka product lo",
    starterCode: "const prod = (arr) => {\n  // TODO: return product\n}",
    solution: "const prod = arr => arr.reduce((p,v)=>p*v,1);",
    tests: [
            {
                        "input": [
                                    [
                                                2,
                                                3,
                                                4
                                    ]
                        ],
                        "expected": [
                                    24
                        ]
            }
],
    hints: [
          "reduce p*v"
]
  });
  exercises.push({
    id: "functions-arrow-functions-28",
    title: "arrow function se string mein se consonants hata do",
    starterCode: "const removeConsonants = (s) => {\n  // TODO: return string without consonants\n}",
    solution: "const removeConsonants = s => s.replace(/[^aeiou]/gi, '');",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    "eio"
                        ]
            }
],
    hints: [
          "regex replace karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-29",
    title: "arrow function se number ka prime hai check karo",
    starterCode: "const isPrime = (n) => {\n  // TODO: return true if prime\n}",
    solution: "const isPrime = n => {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) if (n%i===0) return false;\n  return true;\n};",
    tests: [
            {
                        "input": [
                                    7
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    4
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "sqrt tak check karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-30",
    title: "arrow function se array mein sabse chhota element lo",
    starterCode: "const minEl = (arr) => {\n  // TODO: return min element\n}",
    solution: "const minEl = arr => Math.min(...arr);",
    tests: [
            {
                        "input": [
                                    [
                                                5,
                                                3,
                                                8,
                                                1
                                    ]
                        ],
                        "expected": [
                                    1
                        ]
            }
],
    hints: [
          "Math.min spread use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-31",
    title: "arrow function se given array ko chunks mein divide karo",
    starterCode: "const chunkArr = (arr, n) => {\n  // TODO: return chunked array\n}",
    solution: "const chunkArr = (arr, n) => Array.from({length:Math.ceil(arr.length/n)},(_,i)=>arr.slice(i*n,i*n+n));",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ],
                                    2
                        ],
                        "expected": [
                                    [
                                                1,
                                                2
                                    ],
                                    [
                                                3,
                                                4
                                    ],
                                    [
                                                5
                                    ]
                        ]
            }
],
    hints: [
          "Array.from slice use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-32",
    title: "arrow function se string ko snake_case mein convert karo",
    starterCode: "const snakeCase = (s) => {\n  // TODO: return snake_case string\n}",
    solution: "const snakeCase = s => s.replace(/([A-Z])/g,'_$1').toLowerCase().replace(/^_/,'');",
    tests: [
            {
                        "input": [
                                    "helloWorld"
                        ],
                        "expected": [
                                    "hello_world"
                        ]
            }
],
    hints: [
          "regex replace uppercase"
]
  });
  exercises.push({
    id: "functions-arrow-functions-33",
    title: "arrow function se object ke andar ke nested values ko flatten karo",
    starterCode: "const flatObj = (obj) => {\n  // TODO: return flattened object\n}",
    solution: "const flatObj = obj => {\n  const res = {};\n  const flatten = (o, prefix='') => {\n    for (const [k,v] of Object.entries(o)) {\n      if (typeof v === 'object' && v !== null && !Array.isArray(v)) flatten(v, prefix+k+'.');\n      else res[prefix+k] = v;\n    }\n  };\n  flatten(obj);\n  return res;\n};",
    tests: [
            {
                        "input": [
                                    {
                                                "a": {
                                                            "b": 1,
                                                            "c": {
                                                                        "d": 2
                                                            }
                                                }
                                    }
                        ],
                        "expected": [
                                    {
                                                "a.b": 1,
                                                "a.c.d": 2
                                    }
                        ]
            }
],
    hints: [
          "recursion use karo",
          "prefix track karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-34",
    title: "arrow function se array mein duplicate elements ki frequency batao",
    starterCode: "const dupFreq = (arr) => {\n  // TODO: return object with frequencies\n}",
    solution: "const dupFreq = arr => arr.reduce((o,v)=>{o[v]=(o[v]||0)+1;return o;},{});",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                2,
                                                3,
                                                3,
                                                3
                                    ]
                        ],
                        "expected": [
                                    {
                                                "1": 1,
                                                "2": 2,
                                                "3": 3
                                    }
                        ]
            }
],
    hints: [
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-35",
    title: "arrow function se number ke prime factors return karo",
    starterCode: "const primeFactors = (n) => {\n  // TODO: return array of prime factors\n}",
    solution: "const primeFactors = n => {\n  const factors = [];\n  for (let i = 2; i <= n; i++) {\n    while (n % i === 0) { factors.push(i); n /= i; }\n  }\n  return factors;\n};",
    tests: [
            {
                        "input": [
                                    12
                        ],
                        "expected": [
                                    2,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "divide karo while divisible"
]
  });
  exercises.push({
    id: "functions-arrow-functions-36",
    title: "arrow function se given string ka reverse palindrome hai check karo reverse ke baad",
    starterCode: "const reversePalindrome = (s) => {\n  // TODO: return true if reverse is palindrome\n}",
    solution: "const reversePalindrome = s => {\n  const rev = s.split('').reverse().join('');\n  return rev === rev.split('').reverse().join('');\n};",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    false
                        ]
            },
            {
                        "input": [
                                    "abba"
                        ],
                        "expected": [
                                    true
                        ]
            }
],
    hints: [
          "reverse karo",
          "palindrome check karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-37",
    title: "arrow function se array mein elements ko group by parity karo",
    starterCode: "const groupByParity = (arr) => {\n  // TODO: return {odd:[], even:[]}\n}",
    solution: "const groupByParity = arr => arr.reduce((o,v)=>{v%2===0?o.even.push(v):o.odd.push(v);return o;},{odd:[],even:[]});",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4
                                    ]
                        ],
                        "expected": [
                                    {
                                                "odd": [
                                                            1,
                                                            3
                                                ],
                                                "even": [
                                                            2,
                                                            4
                                                ]
                                    }
                        ]
            }
],
    hints: [
          "reduce use karo",
          "odd even check karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-38",
    title: "arrow function se number ka sum of proper divisors return karo",
    starterCode: "const sumProper = (n) => {\n  // TODO: return sum of proper divisors\n}",
    solution: "const sumProper = n => Array.from({length:n},(_,i)=>i+1).filter(i=>n%i===0&&i!==n).reduce((s,v)=>s+v,0);",
    tests: [
            {
                        "input": [
                                    6
                        ],
                        "expected": [
                                    6
                        ]
            },
            {
                        "input": [
                                    12
                        ],
                        "expected": [
                                    16
                        ]
            }
],
    hints: [
          "proper divisors = except n itself"
]
  });
  exercises.push({
    id: "functions-arrow-functions-39",
    title: "arrow function se array mein sabse zyada baar aane wala element lo",
    starterCode: "const mode = (arr) => {\n  // TODO: return mode\n}",
    solution: "const mode = arr => {\n  const freq = arr.reduce((o,v)=>{o[v]=(o[v]||0)+1;return o;},{});\n  return Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0];\n};",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                2,
                                                3,
                                                3,
                                                3
                                    ]
                        ],
                        "expected": [
                                    "3"
                        ]
            }
],
    hints: [
          "frequency banao",
          "sort karo mode lo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-40",
    title: "arrow function se string mein words ki length ka array return karo",
    starterCode: "const wordLens = (s) => {\n  // TODO: return array of word lengths\n}",
    solution: "const wordLens = s => s.split(' ').map(w=>w.length);",
    tests: [
            {
                        "input": [
                                    "hello world"
                        ],
                        "expected": [
                                    5,
                                    5
                        ]
            }
],
    hints: [
          "split map length"
]
  });
  exercises.push({
    id: "functions-arrow-functions-41",
    title: "arrow function se number ka ASCII value return karo",
    starterCode: "const ascii = (c) => {\n  // TODO: return ASCII code\n}",
    solution: "const ascii = c => c.charCodeAt(0);",
    tests: [
            {
                        "input": [
                                    "A"
                        ],
                        "expected": [
                                    65
                        ]
            }
],
    hints: [
          "charCodeAt(0) use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-42",
    title: "arrow function se number ka character return karo ASCII se",
    starterCode: "const fromAscii = (n) => {\n  // TODO: return character\n}",
    solution: "const fromAscii = n => String.fromCharCode(n);",
    tests: [
            {
                        "input": [
                                    65
                        ],
                        "expected": [
                                    "A"
                        ]
            }
],
    hints: [
          "String.fromCharCode use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-43",
    title: "arrow function se array mein non-numeric elements hata do",
    starterCode: "const onlyNums = (arr) => {\n  // TODO: return only numbers\n}",
    solution: "const onlyNums = arr => arr.filter(x => typeof x === 'number');",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                "a",
                                                2,
                                                "b",
                                                3
                                    ]
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "typeof check karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-44",
    title: "arrow function se given array ke middle element lo",
    starterCode: "const middle = (arr) => {\n  // TODO: return middle element(s)\n}",
    solution: "const middle = arr => arr.slice(Math.floor(arr.length/2)-(arr.length%2===0?1:0), Math.floor(arr.length/2)+1);",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ]
                        ],
                        "expected": [
                                    3
                        ]
            },
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4
                                    ]
                        ],
                        "expected": [
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "length calculate karo",
          "slice use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-45",
    title: "arrow function se number ke digits ko reverse karo",
    starterCode: "const revDigits = (n) => {\n  // TODO: return reversed digits number\n}",
    solution: "const revDigits = n => Number(String(n).split('').reverse().join(''));",
    tests: [
            {
                        "input": [
                                    1234
                        ],
                        "expected": [
                                    4321
                        ]
            }
],
    hints: [
          "string mein convert karo reverse karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-46",
    title: "arrow function se array mein increasing subsequence dhundho",
    starterCode: "const incSubseq = (arr) => {\n  // TODO: return longest increasing subsequence\n}",
    solution: "const incSubseq = arr => {\n  const dp = arr.map(()=>[]);\n  dp[0] = [arr[0]];\n  for (let i=1;i<arr.length;i++) {\n    for (let j=0;j<i;j++) {\n      if (arr[j]<arr[i] && dp[j].length>=dp[i].length) dp[i]=[...dp[j]];\n    }\n    dp[i].push(arr[i]);\n  }\n  return dp.sort((a,b)=>b.length-a.length)[0];\n};",
    tests: [
            {
                        "input": [
                                    [
                                                10,
                                                9,
                                                2,
                                                5,
                                                3,
                                                7,
                                                101,
                                                18
                                    ]
                        ],
                        "expected": [
                                    2,
                                    3,
                                    7,
                                    101
                        ]
            }
],
    hints: [
          "DP approach use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-47",
    title: "arrow function se array mein sabse lambi increasing subsequence ki length lo",
    starterCode: "const lisLen = (arr) => {\n  // TODO: return length of LIS\n}",
    solution: "const lisLen = arr => {\n  const tails = [];\n  for (const x of arr) {\n    let lo=0, hi=tails.length;\n    while(lo<hi) { const mid=(lo+hi)>>1; if(tails[mid]<x) lo=mid+1; else hi=mid; }\n    tails[lo]=x;\n  }\n  return tails.length;\n};",
    tests: [
            {
                        "input": [
                                    [
                                                10,
                                                9,
                                                2,
                                                5,
                                                3,
                                                7,
                                                101,
                                                18
                                    ]
                        ],
                        "expected": [
                                    4
                        ]
            }
],
    hints: [
          "binary search approach use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-48",
    title: "arrow function se given string mein se all permutations return karo",
    starterCode: "const perms = (s) => {\n  // TODO: return array of all permutations\n}",
    solution: "const perms = s => {\n  if (s.length<=1) return [s];\n  return s.split('').flatMap((ch,i)=>perms(s.slice(0,i)+s.slice(i+1)).map(p=>ch+p));\n};",
    tests: [
            {
                        "input": [
                                    "ab"
                        ],
                        "expected": [
                                    "ab",
                                    "ba"
                        ]
            }
],
    hints: [
          "recursion use karo",
          "flatMap use karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-49",
    title: "arrow function se array mein koi bhi two elements ka sum target barabar ho check karo",
    starterCode: "const hasPair = (arr, target) => {\n  // TODO: return true if any pair sums to target\n}",
    solution: "const hasPair = (arr, target) => {\n  const seen = new Set();\n  for (const n of arr) {\n    if (seen.has(target-n)) return true;\n    seen.add(n);\n  }\n  return false;\n};",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4
                                    ],
                                    5
                        ],
                        "expected": [
                                    true
                        ]
            },
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    7
                        ],
                        "expected": [
                                    false
                        ]
            }
],
    hints: [
          "Set use karo",
          "complement check karo"
]
  });
  exercises.push({
    id: "functions-arrow-functions-50",
    title: "arrow function se given array mein longest consecutive sequence ki length lo",
    starterCode: "const longestSeq = (arr) => {\n  // TODO: return length of longest consecutive sequence\n}",
    solution: "const longestSeq = arr => {\n  const set = new Set(arr);\n  let max = 0;\n  for (const n of set) {\n    if (!set.has(n-1)) {\n      let len=1;\n      while(set.has(n+len)) len++;\n      max=Math.max(max,len);\n    }\n  }\n  return max;\n};",
    tests: [
            {
                        "input": [
                                    [
                                                100,
                                                4,
                                                200,
                                                1,
                                                3,
                                                2
                                    ]
                        ],
                        "expected": [
                                    4
                        ]
            }
],
    hints: [
          "Set use karo",
          "starting point dhundho"
]
  });
  exercises.push({
    id: "functions-closures-iife-01",
    title: "closure se counter banao jo increment kare",
    starterCode: "function createCounter() {\n  // TODO: return object with increment, getCount\n}",
    solution: "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "counter created"
                        ]
            },
            {
                        "input": [],
                        "expected": [
                                    "increment -> 1 -> 2"
                        ]
            }
],
    hints: [
          "private variable count use karo",
          "methods count ko access karenge"
]
  });
  exercises.push({
    id: "functions-closures-iife-02",
    title: "IIFE se immediately variable initialize karo",
    starterCode: "const result = (function() {\n  // TODO: return 42\n})();",
    solution: "const result = (function() {\n  return 42;\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    42
                        ]
            }
],
    hints: [
          "IIFE format ()() use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-03",
    title: "closure se ek function banao jo private variable store kare",
    starterCode: "function createStorage() {\n  // TODO: return get/set methods\n}",
    solution: "function createStorage() {\n  let data = {};\n  return {\n    set: (key, val) => data[key] = val,\n    get: (key) => data[key]\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "storage created"
                        ]
            }
],
    hints: [
          "data ko closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-04",
    title: "closure se function banao jo call count track kare",
    starterCode: "function createTracker() {\n  // TODO: return track function\n}",
    solution: "function createTracker() {\n  let calls = 0;\n  return function() {\n    return ++calls;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "call -> 1, call -> 2"
                        ]
            }
],
    hints: [
          "private counter use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-05",
    title: "IIFE se global namespace pollution se bachao",
    starterCode: "const myLib = (function() {\n  // TODO: return public API\n})",
    solution: "const myLib = (function() {\n  const _private = 'secret';\n  return {\n    init: () => _private\n  };\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "myLib.init() -> secret"
                        ]
            }
],
    hints: [
          "_private variable banao",
          "return karo public API"
]
  });
  exercises.push({
    id: "functions-closures-iife-06",
    title: "closure se memoization function banao",
    starterCode: "function memoize(fn) {\n  // TODO: return memoized function\n}",
    solution: "function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) return cache[key];\n    return cache[key] = fn(...args);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "memoized function created"
                        ]
            }
],
    hints: [
          "cache object use karo",
          "JSON.stringify key banao"
]
  });
  exercises.push({
    id: "functions-closures-iife-07",
    title: "closure se once function banao jo sirf ek baar execute ho",
    starterCode: "function once(fn) {\n  // TODO: return function that runs once\n}",
    solution: "function once(fn) {\n  let called = false;\n  let result;\n  return function(...args) {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "first call -> runs, second call -> cached"
                        ]
            }
],
    hints: [
          "called flag use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-08",
    title: "IIFE se immediately array initialize karo",
    starterCode: "const data = (function() {\n  // TODO: return [1,2,3,4,5]\n})();",
    solution: "const data = (function() {\n  return [1,2,3,4,5];\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                        ]
            }
],
    hints: [
          "IIFE se array return karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-09",
    title: "closure se counter banao jo decrement bhi kare",
    starterCode: "function createFullCounter() {\n  // TODO: return increment, decrement, getCount\n}",
    solution: "function createFullCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "full counter created"
                        ]
            }
],
    hints: [
          "closure methods banao"
]
  });
  exercises.push({
    id: "functions-closures-iife-10",
    title: "closure se function banao jo private variable mein state store kare",
    starterCode: "function createState(initial) {\n  // TODO: return getState, setState\n}",
    solution: "function createState(initial) {\n  let state = initial;\n  return {\n    getState: () => state,\n    setState: (newState) => state = newState\n  };\n}",
    tests: [
            {
                        "input": [
                                    "hello"
                        ],
                        "expected": [
                                    "getState -> hello"
                        ]
            }
],
    hints: [
          "state ko closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-11",
    title: "closure se function banao jo arguments ko remember kare",
    starterCode: "function createGreeter(greeting) {\n  // TODO: return function that adds greeting\n}",
    solution: "function createGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}",
    tests: [
            {
                        "input": [
                                    "Hello"
                        ],
                        "expected": [
                                    "greet -> Hello, World!"
                        ]
            }
],
    hints: [
          "greeting parameter closure mein store hoga"
]
  });
  exercises.push({
    id: "functions-closures-iife-12",
    title: "IIFE se module pattern implement karo",
    starterCode: "const calculator = (function() {\n  // TODO: return add, subtract, multiply, divide\n})",
    solution: "const calculator = (function() {\n  return {\n    add: (a,b) => a+b,\n    subtract: (a,b) => a-b,\n    multiply: (a,b) => a*b,\n    divide: (a,b) => a/b\n  };\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "calculator.add(1,2) -> 3"
                        ]
            }
],
    hints: [
          "object return karo IIFE se"
]
  });
  exercises.push({
    id: "functions-closures-iife-13",
    title: "closure se function banao jo\u591a\u6b21 calls ko queue kare",
    starterCode: "function createQueue() {\n  // TODO: return enqueue, processAll\n}",
    solution: "function createQueue() {\n  const queue = [];\n  return {\n    enqueue: (fn) => queue.push(fn),\n    processAll: () => queue.forEach(fn => fn())\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "queue created"
                        ]
            }
],
    hints: [
          "queue array closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-14",
    title: "closure se function banao jo call frequency limit kare",
    starterCode: "function throttle(fn, limit) {\n  // TODO: return throttled function\n}",
    solution: "function throttle(fn, limit) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      return fn(...args);\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "throttled function created"
                        ]
            }
],
    hints: [
          "Date.now() use karo",
          "lastCall track karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-15",
    title: "closure se debounce function banao",
    starterCode: "function debounce(fn, delay) {\n  // TODO: return debounced function\n}",
    solution: "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "debounced function created"
                        ]
            }
],
    hints: [
          "setTimeout clearTimeout use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-16",
    title: "closure se function banao jo private variable mein history maintain kare",
    starterCode: "function createHistory() {\n  // TODO: return add, undo, getAll\n}",
    solution: "function createHistory() {\n  const history = [];\n  return {\n    add: (item) => history.push(item),\n    undo: () => history.pop(),\n    getAll: () => [...history]\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "history created"
                        ]
            }
],
    hints: [
          "history array closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-17",
    title: "IIFE se configuration object banao",
    starterCode: "const config = (function() {\n  // TODO: return config object\n})",
    solution: "const config = (function() {\n  return {\n    apiUrl: 'https://api.example.com',\n    timeout: 5000\n  };\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "config.apiUrl -> https://api.example.com"
                        ]
            }
],
    hints: [
          "object return karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-18",
    title: "closure se function banao jo\u591a\u6b21 arguments ko aggregate kare",
    starterCode: "function createAggregator() {\n  // TODO: return add, getSum\n}",
    solution: "function createAggregator() {\n  let sum = 0;\n  return {\n    add: (n) => sum += n,\n    getSum: () => sum\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "aggregator created"
                        ]
            }
],
    hints: [
          "sum variable use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-19",
    title: "closure se function banao jo state machine implement kare",
    starterCode: "function createFSM(initial) {\n  // TODO: return transition, getState\n}",
    solution: "function createFSM(initial) {\n  let state = initial;\n  return {\n    transition: (newState) => state = newState,\n    getState: () => state\n  };\n}",
    tests: [
            {
                        "input": [
                                    "idle"
                        ],
                        "expected": [
                                    "getState -> idle"
                        ]
            }
],
    hints: [
          "state variable closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-20",
    title: "closure se function banao jo multiple closures ko share kare",
    starterCode: "function createSharedScope() {\n  // TODO: return functions that share variable\n}",
    solution: "function createSharedScope() {\n  let shared = 0;\n  return {\n    incA: () => ++shared,\n    incB: () => ++shared,\n    getShared: () => shared\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "shared scope created"
                        ]
            }
],
    hints: [
          "shared variable sab functions access karenge"
]
  });
  exercises.push({
    id: "functions-closures-iife-21",
    title: "closure se function banao jo event listener manage kare",
    starterCode: "function createEventManager() {\n  // TODO: return on, emit, off\n}",
    solution: "function createEventManager() {\n  const events = {};\n  return {\n    on: (event, fn) => {\n      if (!events[event]) events[event] = [];\n      events[event].push(fn);\n    },\n    emit: (event, ...args) => {\n      (events[event]||[]).forEach(fn => fn(...args));\n    },\n    off: (event) => delete events[event]\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "event manager created"
                        ]
            }
],
    hints: [
          "events object use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-22",
    title: "closure se function banao jo private property hai encapsulate kare",
    starterCode: "function createPerson(name, age) {\n  // TODO: return public API\n}",
    solution: "function createPerson(name, age) {\n  return {\n    getName: () => name,\n    getAge: () => age,\n    toString: () => `${name} (${age})`\n  };\n}",
    tests: [
            {
                        "input": [
                                    "Rahul",
                                    25
                        ],
                        "expected": [
                                    "getName -> Rahul"
                        ]
            }
],
    hints: [
          "closure se variables protect karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-23",
    title: "IIFE se global variables se bachke code chalao",
    starterCode: "(function() {\n  // TODO: local scope mein code likho\n})();",
    solution: "(function() {\n  const localVar = 'I am local';\n  return localVar;\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "I am local"
                        ]
            }
],
    hints: [
          "IIFE ke andar variables local hain"
]
  });
  exercises.push({
    id: "functions-closures-iife-24",
    title: "closure se function banao jo lazy evaluation kare",
    starterCode: "function lazy(fn) {\n  // TODO: return lazy evaluated function\n}",
    solution: "function lazy(fn) {\n  let result;\n  let computed = false;\n  return function() {\n    if (!computed) {\n      result = fn();\n      computed = true;\n    }\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy function created"
                        ]
            }
],
    hints: [
          "computed flag use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-25",
    title: "closure se function banao jo\u591a\u6b21 calls ke baad result return kare",
    starterCode: "function createCaller(fn, times) {\n  // TODO: return function that calls fn after times calls\n}",
    solution: "function createCaller(fn, times) {\n  let count = 0;\n  return function(...args) {\n    count++;\n    if (count >= times) return fn(...args);\n    return undefined;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "caller created"
                        ]
            }
],
    hints: [
          "count track karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-26",
    title: "closure se function banao jo singleton pattern implement kare",
    starterCode: "function createSingleton(factory) {\n  // TODO: return getInstance\n}",
    solution: "function createSingleton(factory) {\n  let instance = null;\n  return function() {\n    if (!instance) instance = factory();\n    return instance;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "singleton created"
                        ]
            }
],
    hints: [
          "instance null se start karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-27",
    title: "closure se function banao jo immutable state maintain kare",
    starterCode: "function immutableState(initial) {\n  // TODO: return getState, update\n}",
    solution: "function immutableState(initial) {\n  let state = initial;\n  return {\n    getState: () => state,\n    update: (newState) => state = {...state, ...newState}\n  };\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "count": 0
                                    }
                        ],
                        "expected": [
                                    "update({count:1}) -> {count:1}"
                        ]
            }
],
    hints: [
          "spread operator se merge karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-28",
    title: "IIFE se private counter banao",
    starterCode: "const counter = (function() {\n  // TODO: return counter object\n})",
    solution: "const counter = (function() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "counter.increment() -> 1"
                        ]
            }
],
    hints: [
          "IIFE closure use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-29",
    title: "closure se function banao jo multiple memoized functions share kare",
    starterCode: "function createMemoPool() {\n  // TODO: return memoize function\n}",
    solution: "function createMemoPool() {\n  const pool = {};\n  return {\n    memoize: (key, fn) => {\n      return function(...args) {\n        const k = key + JSON.stringify(args);\n        if (!pool[k]) pool[k] = fn(...args);\n        return pool[k];\n      };\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "memo pool created"
                        ]
            }
],
    hints: [
          "shared cache object use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-30",
    title: "closure se function banao jo cleanup function return kare",
    starterCode: "function createCleanup(fn) {\n  // TODO: return { execute, cleanup }\n}",
    solution: "function createCleanup(fn) {\n  let resources = [];\n  return {\n    execute: (...args) => {\n      const result = fn(...args);\n      resources.push(result);\n      return result;\n    },\n    cleanup: () => { resources = []; }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "cleanup created"
                        ]
            }
],
    hints: [
          "resources array track karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-31",
    title: "closure se function banao jo callback queue manage kare",
    starterCode: "function createCallbackQueue() {\n  // TODO: return push, process\n}",
    solution: "function createCallbackQueue() {\n  const queue = [];\n  return {\n    push: (cb) => queue.push(cb),\n    process: () => queue.forEach(cb => cb())\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "callback queue created"
                        ]
            }
],
    hints: [
          "queue array use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-32",
    title: "closure se function banao jo lazy loading implement kare",
    starterCode: "function lazyLoad(factory) {\n  // TODO: return function that loads on first call\n}",
    solution: "function lazyLoad(factory) {\n  let instance;\n  return function() {\n    if (!instance) instance = factory();\n    return instance;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy loader created"
                        ]
            }
],
    hints: [
          "factory function ko first call pe run karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-33",
    title: "closure se function banao jo cached computation kare",
    starterCode: "function cachedCompute(key, fn) {\n  // TODO: return function with cache\n}",
    solution: "function cachedCompute(key, fn) {\n  const cache = {};\n  return function(...args) {\n    const k = key + JSON.stringify(args);\n    if (!(k in cache)) cache[k] = fn(...args);\n    return cache[k];\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "cached compute created"
                        ]
            }
],
    hints: [
          "cache object use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-34",
    title: "closure se function banao jo rate limiter ho",
    starterCode: "function rateLimiter(fn, maxPerSec) {\n  // TODO: return rate limited function\n}",
    solution: "function rateLimiter(fn, maxPerSec) {\n  const timestamps = [];\n  return function(...args) {\n    const now = Date.now();\n    while(timestamps.length && timestamps[0] <= now - 1000) timestamps.shift();\n    if (timestamps.length >= maxPerSec) return 'rate limited';\n    timestamps.push(now);\n    return fn(...args);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "rate limiter created"
                        ]
            }
],
    hints: [
          "timestamps array use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-35",
    title: "closure se function banao jo event emitter ho",
    starterCode: "function createEmitter() {\n  // TODO: return on, emit\n}",
    solution: "function createEmitter() {\n  const listeners = {};\n  return {\n    on: (event, fn) => {\n      if (!listeners[event]) listeners[event] = [];\n      listeners[event].push(fn);\n    },\n    emit: (event, ...args) => {\n      (listeners[event]||[]).forEach(fn => fn(...args));\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "emitter created"
                        ]
            }
],
    hints: [
          "listeners object use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-36",
    title: "closure se function banao jo state transitions ko log kare",
    starterCode: "function createLoggedState(initial) {\n  // TODO: return transition, getLog\n}",
    solution: "function createLoggedState(initial) {\n  let state = initial;\n  const log = [];\n  return {\n    transition: (newState) => {\n      log.push({from: state, to: newState});\n      state = newState;\n    },\n    getLog: () => [...log],\n    getState: () => state\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "logged state created"
                        ]
            }
],
    hints: [
          "log array maintain karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-37",
    title: "closure se function banao jo multiple arguments ko curry kare",
    starterCode: "function curry(fn) {\n  // TODO: return curried function\n}",
    solution: "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn(...args);\n    return (...args2) => curried(...args, ...args2);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "curry function created"
                        ]
            }
],
    hints: [
          "recursive currying use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-38",
    title: "IIFE se app state initialize karo",
    starterCode: "const appState = (function() {\n  // TODO: return initial state object\n})",
    solution: "const appState = (function() {\n  return {\n    user: null,\n    theme: 'light',\n    notifications: []\n  };\n})();",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "app state initialized"
                        ]
            }
],
    hints: [
          "state object return karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-39",
    title: "closure se function banao jo multiple promises ko manage kare",
    starterCode: "function promiseManager() {\n  // TODO: return add, resolveAll\n}",
    solution: "function promiseManager() {\n  const promises = [];\n  return {\n    add: (p) => promises.push(p),\n    resolveAll: () => Promise.all(promises)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "promise manager created"
                        ]
            }
],
    hints: [
          "promises array use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-40",
    title: "closure se function banao jo private method ho",
    starterCode: "function createService() {\n  // TODO: return public API with private methods\n}",
    solution: "function createService() {\n  function privateMethod() { return 'private'; }\n  return {\n    publicMethod: () => privateMethod()\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "service created"
                        ]
            }
],
    hints: [
          "private method ko closure mein rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-41",
    title: "closure se function banao jo caching strategy implement kare",
    starterCode: "function createLRU(maxSize) {\n  // TODO: return get, set\n}",
    solution: "function createLRU(maxSize) {\n  const cache = new Map();\n  return {\n    get: (key) => {\n      if (!cache.has(key)) return undefined;\n      const val = cache.get(key);\n      cache.delete(key);\n      cache.set(key, val);\n      return val;\n    },\n    set: (key, val) => {\n      if (cache.has(key)) cache.delete(key);\n      if (cache.size >= maxSize) cache.delete(cache.keys().next().value);\n      cache.set(key, val);\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "LRU cache created"
                        ]
            }
],
    hints: [
          "Map use karo",
          "order maintain karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-42",
    title: "closure se function banao jo retry logic implement kare",
    starterCode: "function retry(fn, maxAttempts) {\n  // TODO: return function that retries on failure\n}",
    solution: "function retry(fn, maxAttempts) {\n  return async function(...args) {\n    for (let i = 0; i < maxAttempts; i++) {\n      try { return await fn(...args); }\n      catch(e) { if (i === maxAttempts-1) throw e; }\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "retry function created"
                        ]
            }
],
    hints: [
          "async await use karo",
          "catch block mein retry karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-43",
    title: "closure se function banao jo middleware pattern implement kare",
    starterCode: "function createMiddleware() {\n  // TODO: return use, execute\n}",
    solution: "function createMiddleware() {\n  const middlewares = [];\n  return {\n    use: (fn) => middlewares.push(fn),\n    execute: async (req) => {\n      let result = req;\n      for (const mw of middlewares) result = await mw(result);\n      return result;\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "middleware created"
                        ]
            }
],
    hints: [
          "middlewares array use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-44",
    title: "closure se function banao jo state machine transitions define kare",
    starterCode: "function createStateMachine(transitions, initial) {\n  // TODO: return transition, getState\n}",
    solution: "function createStateMachine(transitions, initial) {\n  let state = initial;\n  return {\n    transition: (event) => {\n      const next = transitions[state]?.[event];\n      if (next) state = next;\n      return state;\n    },\n    getState: () => state\n  };\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "idle": {
                                                            "start": "running"
                                                },
                                                "running": {
                                                            "stop": "idle"
                                                }
                                    },
                                    "idle"
                        ],
                        "expected": [
                                    "transition('start') -> running"
                        ]
            }
],
    hints: [
          "transitions object use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-45",
    title: "closure se function banao jo request/response interceptor ho",
    starterCode: "function createInterceptor() {\n  // TODO: return requestInterceptor, responseInterceptor\n}",
    solution: "function createInterceptor() {\n  const reqInterceptors = [];\n  const resInterceptors = [];\n  return {\n    addRequestInterceptor: (fn) => reqInterceptors.push(fn),\n    addResponseInterceptor: (fn) => resInterceptors.push(fn),\n    processRequest: (req) => reqInterceptors.reduce((r,fn)=>fn(r),req),\n    processResponse: (res) => resInterceptors.reduce((r,fn)=>fn(r),res)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "interceptor created"
                        ]
            }
],
    hints: [
          "interceptors arrays use karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-46",
    title: "closure se function banao jo configuration override pattern implement kare",
    starterCode: "function createConfig(defaults) {\n  // TODO: return get, override\n}",
    solution: "function createConfig(defaults) {\n  let overrides = {};\n  return {\n    get: (key) => overrides[key] ?? defaults[key],\n    override: (key, val) => overrides[key] = val,\n    reset: () => overrides = {}\n  };\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "theme": "light"
                                    }
                        ],
                        "expected": [
                                    "get('theme') -> light"
                        ]
            }
],
    hints: [
          "defaults aur overrides alag rakho"
]
  });
  exercises.push({
    id: "functions-closures-iife-47",
    title: "closure se function banao jo subscription pattern implement kare",
    starterCode: "function createPubSub() {\n  // TODO: return subscribe, publish\n}",
    solution: "function createPubSub() {\n  const subscribers = {};\n  return {\n    subscribe: (topic, fn) => {\n      if (!subscribers[topic]) subscribers[topic] = [];\n      subscribers[topic].push(fn);\n      return () => { subscribers[topic] = subscribers[topic].filter(f => f !== fn); };\n    },\n    publish: (topic, data) => {\n      (subscribers[topic]||[]).forEach(fn => fn(data));\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "pubsub created"
                        ]
            }
],
    hints: [
          "subscribers object use karo",
          "unsubscribe function return karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-48",
    title: "closure se function banao jo connection pool manage kare",
    starterCode: "function createConnectionPool(maxSize) {\n  // TODO: return acquire, release\n}",
    solution: "function createConnectionPool(maxSize) {\n  const pool = [];\n  const active = [];\n  for (let i = 0; i < maxSize; i++) pool.push({id: i});\n  return {\n    acquire: () => {\n      const conn = pool.pop();\n      if (conn) active.push(conn);\n      return conn;\n    },\n    release: (conn) => {\n      const idx = active.findIndex(c => c.id === conn.id);\n      if (idx >= 0) {\n        active.splice(idx, 1);\n        pool.push(conn);\n      }\n    },\n    size: () => pool.length\n  };\n}",
    tests: [
            {
                        "input": [
                                    3
                        ],
                        "expected": [
                                    "acquire -> {id:0}, release, size -> 1"
                        ]
            }
],
    hints: [
          "pool array manage karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-49",
    title: "closure se function banao jo event-driven state management kare",
    starterCode: "function createEventStore() {\n  // TODO: return dispatch, getState, subscribe\n}",
    solution: "function createEventStore() {\n  let state = {};\n  const listeners = [];\n  return {\n    dispatch: (event) => {\n      state = {...state, ...event};\n      listeners.forEach(fn => fn(state));\n    },\n    getState: () => ({...state}),\n    subscribe: (fn) => { listeners.push(fn); return () => listeners.splice(listeners.indexOf(fn),1); }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "event store created"
                        ]
            }
],
    hints: [
          "state spread operator se update karo"
]
  });
  exercises.push({
    id: "functions-closures-iife-50",
    title: "closure se function banao jo lazy singleton ho",
    starterCode: "function createLazySingleton(factory) {\n  // TODO: return getInstance\n}",
    solution: "function createLazySingleton(factory) {\n  let instance = null;\n  return function() {\n    if (instance === null) {\n      instance = factory();\n    }\n    return instance;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy singleton created"
                        ]
            }
],
    hints: [
          "null check karo",
          "first call pe factory run karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-01",
    title: "higher-order function banao jo array ke har element pe function apply kare",
    starterCode: "function applyToAll(arr, fn) {\n  // TODO: return mapped array\n}",
    solution: "function applyToAll(arr, fn) {\n  return arr.map(fn);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    "x => x*2"
                        ],
                        "expected": [
                                    2,
                                    4,
                                    6
                        ]
            }
],
    hints: [
          "map method use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-02",
    title: "higher-order function banao jo array filter kare condition ke basis pe",
    starterCode: "function filterBy(arr, condition) {\n  // TODO: return filtered array\n}",
    solution: "function filterBy(arr, condition) {\n  return arr.filter(condition);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ],
                                    "x => x > 3"
                        ],
                        "expected": [
                                    4,
                                    5
                        ]
            }
],
    hints: [
          "filter method use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-03",
    title: "higher-order function banao jo array ke elements ko reduce kare",
    starterCode: "function reduceArr(arr, fn, initial) {\n  // TODO: return reduced value\n}",
    solution: "function reduceArr(arr, fn, initial) {\n  return arr.reduce(fn, initial);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    "(a,b) => a+b",
                                    0
                        ],
                        "expected": [
                                    6
                        ]
            }
],
    hints: [
          "reduce method use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-04",
    title: "higher-order function banao jo function ko\u591a\u6b21 times call kare",
    starterCode: "function repeat(times, fn) {\n  // TODO: call fn times times\n}",
    solution: "function repeat(times, fn) {\n  for (let i = 0; i < times; i++) fn(i);\n}",
    tests: [
            {
                        "input": [
                                    3,
                                    "i => console.log(i)"
                        ],
                        "expected": [
                                    "logs 0,1,2"
                        ]
            }
],
    hints: [
          "for loop use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-05",
    title: "higher-order function banao jo function compose kare",
    starterCode: "function compose(...fns) {\n  // TODO: return composed function\n}",
    solution: "function compose(...fns) {\n  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);\n}",
    tests: [
            {
                        "input": [
                                    "x => x+1",
                                    "x => x*2"
                        ],
                        "expected": [
                                    "composed function"
                        ]
            }
],
    hints: [
          "reduceRight use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-06",
    title: "higher-order function banao jo function pipe kare",
    starterCode: "function pipe(...fns) {\n  // TODO: return piped function\n}",
    solution: "function pipe(...fns) {\n  return (x) => fns.reduce((acc, fn) => fn(acc), x);\n}",
    tests: [
            {
                        "input": [
                                    "x => x+1",
                                    "x => x*2"
                        ],
                        "expected": [
                                    "piped function"
                        ]
            }
],
    hints: [
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-07",
    title: "higher-order function banao jo array ke sabse bada value dhundhe using comparator",
    starterCode: "function maxBy(arr, comparator) {\n  // TODO: return max element\n}",
    solution: "function maxBy(arr, comparator) {\n  return arr.reduce((max, item) => comparator(item, max) > 0 ? item : max);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    "(a,b) => a-b"
                        ],
                        "expected": [
                                    3
                        ]
            }
],
    hints: [
          "reduce use karo",
          "comparator se compare karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-08",
    title: "higher-order function banao jo memoize kare",
    starterCode: "function memoize(fn) {\n  // TODO: return memoized function\n}",
    solution: "function memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "memoized function created"
                        ]
            }
],
    hints: [
          "Map use karo",
          "JSON.stringify key banao"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-09",
    title: "higher-order function banao jo logger ho",
    starterCode: "function withLogger(fn) {\n  // TODO: return logged function\n}",
    solution: "function withLogger(fn) {\n  return function(...args) {\n    console.log(`Calling ${fn.name} with`, args);\n    const result = fn(...args);\n    console.log(`Result:`, result);\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "logger wrapper created"
                        ]
            }
],
    hints: [
          "console.log use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-10",
    title: "higher-order function banao jo timing wrapper ho",
    starterCode: "function withTiming(fn) {\n  // TODO: return timed function\n}",
    solution: "function withTiming(fn) {\n  return function(...args) {\n    const start = performance.now();\n    const result = fn(...args);\n    const end = performance.now();\n    console.log(`${fn.name} took ${end - start}ms`);\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "timing wrapper created"
                        ]
            }
],
    hints: [
          "performance.now() use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-11",
    title: "higher-order function banao jo once function ho",
    starterCode: "function once(fn) {\n  // TODO: return function that runs once\n}",
    solution: "function once(fn) {\n  let called = false;\n  let result;\n  return function(...args) {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "once function created"
                        ]
            }
],
    hints: [
          "called flag use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-12",
    title: "higher-order function banao jo debounce ho",
    starterCode: "function debounce(fn, delay) {\n  // TODO: return debounced function\n}",
    solution: "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "debounce created"
                        ]
            }
],
    hints: [
          "setTimeout clearTimeout use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-13",
    title: "higher-order function banao jo throttle ho",
    starterCode: "function throttle(fn, limit) {\n  // TODO: return throttled function\n}",
    solution: "function throttle(fn, limit) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      return fn(...args);\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "throttle created"
                        ]
            }
],
    hints: [
          "Date.now() use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-14",
    title: "higher-order function banao jo array ke elements ko group kare",
    starterCode: "function groupBy(arr, keyFn) {\n  // TODO: return grouped object\n}",
    solution: "function groupBy(arr, keyFn) {\n  return arr.reduce((groups, item) => {\n    const key = keyFn(item);\n    if (!groups[key]) groups[key] = [];\n    groups[key].push(item);\n    return groups;\n  }, {});\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4
                                    ],
                                    "x => x%2===0?'even':'odd'"
                        ],
                        "expected": [
                                    {
                                                "odd": [
                                                            1,
                                                            3
                                                ],
                                                "even": [
                                                            2,
                                                            4
                                                ]
                                    }
                        ]
            }
],
    hints: [
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-15",
    title: "higher-order function banao jo curry function ho",
    starterCode: "function curry(fn) {\n  // TODO: return curried function\n}",
    solution: "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn(...args);\n    return (...args2) => curried(...args, ...args2);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "curry created"
                        ]
            }
],
    hints: [
          "recursive currying"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-16",
    title: "higher-order function banao jo function retry kare",
    starterCode: "function retry(fn, attempts) {\n  // TODO: return retried function\n}",
    solution: "function retry(fn, attempts) {\n  return function(...args) {\n    for (let i = 0; i < attempts; i++) {\n      try { return fn(...args); }\n      catch(e) { if (i === attempts-1) throw e; }\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "retry created"
                        ]
            }
],
    hints: [
          "for loop try-catch use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-17",
    title: "higher-order function banao jo conditional function ho",
    starterCode: "function when(condition, fn) {\n  // TODO: return function that runs only when condition is true\n}",
    solution: "function when(condition, fn) {\n  return function(...args) {\n    return condition() ? fn(...args) : undefined;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "conditional function created"
                        ]
            }
],
    hints: [
          "condition function check karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-18",
    title: "higher-order function banao jo function transform kare",
    starterCode: "function transform(fn, transformer) {\n  // TODO: return transformed function\n}",
    solution: "function transform(fn, transformer) {\n  return function(...args) {\n    return fn(...transformer(...args));\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "transform created"
                        ]
            }
],
    hints: [
          "transformer arguments ko transform kare"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-19",
    title: "higher-order function banao jo validation wrapper ho",
    starterCode: "function validate(validator, fn) {\n  // TODO: return validated function\n}",
    solution: "function validate(validator, fn) {\n  return function(...args) {\n    if (!validator(...args)) throw new Error('Validation failed');\n    return fn(...args);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "validator created"
                        ]
            }
],
    hints: [
          "validator function check karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-20",
    title: "higher-order function banao jo lazy evaluation kare",
    starterCode: "function lazy(fn) {\n  // TODO: return lazy function\n}",
    solution: "function lazy(fn) {\n  let result;\n  let computed = false;\n  return function() {\n    if (!computed) {\n      result = fn();\n      computed = true;\n    }\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy created"
                        ]
            }
],
    hints: [
          "computed flag use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-21",
    title: "higher-order function banao jo batch processing kare",
    starterCode: "function batchProcess(arr, batchSize, fn) {\n  // TODO: process in batches\n}",
    solution: "function batchProcess(arr, batchSize, fn) {\n  const results = [];\n  for (let i = 0; i < arr.length; i += batchSize) {\n    results.push(fn(arr.slice(i, i + batchSize)));\n  }\n  return results;\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                    ],
                                    2,
                                    "batch => batch.reduce((s,v)=>s+v,0)"
                        ],
                        "expected": [
                                    3,
                                    7,
                                    5
                        ]
            }
],
    hints: [
          "slice se batch banao",
          "for loop use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-22",
    title: "higher-order function banao jo concurrency limit set kare",
    starterCode: "function concurrencyLimit(tasks, limit) {\n  // TODO: run tasks with concurrency limit\n}",
    solution: "async function concurrencyLimit(tasks, limit) {\n  const results = [];\n  let idx = 0;\n  async function runNext() {\n    while (idx < tasks.length) {\n      const i = idx++;\n      results[i] = await tasks[i]();\n    }\n  }\n  await Promise.all(Array.from({length: Math.min(limit, tasks.length)}, runNext));\n  return results;\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "concurrency limited execution"
                        ]
            }
],
    hints: [
          "async/await use karo",
          "Promise.all use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-23",
    title: "higher-order function banao jo event emitter ho",
    starterCode: "function createEventEmitter() {\n  // TODO: return on, emit, off\n}",
    solution: "function createEventEmitter() {\n  const listeners = {};\n  return {\n    on: (event, fn) => {\n      if (!listeners[event]) listeners[event] = [];\n      listeners[event].push(fn);\n    },\n    emit: (event, ...args) => {\n      (listeners[event]||[]).forEach(fn => fn(...args));\n    },\n    off: (event, fn) => {\n      if (listeners[event]) listeners[event] = listeners[event].filter(f => f !== fn);\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "emitter created"
                        ]
            }
],
    hints: [
          "listeners object use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-24",
    title: "higher-order function banao jo middleware chain banaye",
    starterCode: "function createMiddlewareChain() {\n  // TODO: return use, execute\n}",
    solution: "function createMiddlewareChain() {\n  const middlewares = [];\n  return {\n    use: (fn) => middlewares.push(fn),\n    execute: (data) => middlewares.reduce((result, mw) => mw(result), data)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "middleware chain created"
                        ]
            }
],
    hints: [
          "reduce se chain chalao"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-25",
    title: "higher-order function banao jo stream processing kare",
    starterCode: "function createStream() {\n  // TODO: return map, filter, reduce\n}",
    solution: "function createStream() {\n  return {\n    map: (arr, fn) => arr.map(fn),\n    filter: (arr, fn) => arr.filter(fn),\n    reduce: (arr, fn, init) => arr.reduce(fn, init)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "stream created"
                        ]
            }
],
    hints: [
          "methods banao"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-26",
    title: "higher-order function banao jo result object return kare",
    starterCode: "function withResult(fn) {\n  // TODO: return function with result wrapper\n}",
    solution: "function withResult(fn) {\n  return function(...args) {\n    try {\n      return { ok: true, value: fn(...args) };\n    } catch(e) {\n      return { ok: false, error: e.message };\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "result wrapper created"
                        ]
            }
],
    hints: [
          "try-catch use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-27",
    title: "higher-order function banao jo pipeline of transformations banaye",
    starterCode: "function pipeline(...fns) {\n  // TODO: return pipeline function\n}",
    solution: "function pipeline(...fns) {\n  return (input) => fns.reduce((val, fn) => fn(val), input);\n}",
    tests: [
            {
                        "input": [
                                    "x => x*2",
                                    "x => x+1"
                        ],
                        "expected": [
                                    "pipeline function"
                        ]
            }
],
    hints: [
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-28",
    title: "higher-order function banao jo lazy map kare",
    starterCode: "function lazyMap(iterable, fn) {\n  // TODO: return lazy mapped iterable\n}",
    solution: "function lazyMap(iterable, fn) {\n  return {\n    [Symbol.iterator]: function* () {\n      for (const item of iterable) yield fn(item);\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy mapper created"
                        ]
            }
],
    hints: [
          "generator function use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-29",
    title: "higher-order function banao jo function composition with validation",
    starterCode: "function composeWithValidation(...fns) {\n  // TODO: compose with input validation\n}",
    solution: "function composeWithValidation(...fns) {\n  return (x) => {\n    if (x === undefined || x === null) throw new Error('Invalid input');\n    return fns.reduce((acc, fn) => fn(acc), x);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "validated compose created"
                        ]
            }
],
    hints: [
          "input check karo",
          "reduce use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-30",
    title: "higher-order function banao jo async map kare",
    starterCode: "function asyncMap(arr, fn) {\n  // TODO: return promise of mapped array\n}",
    solution: "async function asyncMap(arr, fn) {\n  return Promise.all(arr.map(fn));\n}",
    tests: [
            {
                        "input": [
                                    [
                                                1,
                                                2,
                                                3
                                    ],
                                    "async x => x*2"
                        ],
                        "expected": [
                                    "promise"
                        ]
            }
],
    hints: [
          "Promise.all map use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-31",
    title: "higher-order function banao jo async filter kare",
    starterCode: "function asyncFilter(arr, fn) {\n  // TODO: return promise of filtered array\n}",
    solution: "async function asyncFilter(arr, fn) {\n  const results = await Promise.all(arr.map(async item => ({ item, keep: await fn(item) })));\n  return results.filter(r => r.keep).map(r => r.item);\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "async filter created"
                        ]
            }
],
    hints: [
          "Promise.all use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-32",
    title: "higher-order function banao jo function ko wrap kare error handling ke saath",
    starterCode: "function withErrorHandling(fn) {\n  // TODO: return error-handled function\n}",
    solution: "function withErrorHandling(fn) {\n  return function(...args) {\n    try {\n      return { success: true, data: fn(...args) };\n    } catch(e) {\n      return { success: false, error: e.message };\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "error handler created"
                        ]
            }
],
    hints: [
          "try-catch use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-33",
    title: "higher-order function banao jo rate limiting kare",
    starterCode: "function rateLimit(fn, maxCalls, timeWindow) {\n  // TODO: return rate limited function\n}",
    solution: "function rateLimit(fn, maxCalls, timeWindow) {\n  const calls = [];\n  return function(...args) {\n    const now = Date.now();\n    while(calls.length && calls[0] <= now - timeWindow) calls.shift();\n    if (calls.length >= maxCalls) throw new Error('Rate limit exceeded');\n    calls.push(now);\n    return fn(...args);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "rate limiter created"
                        ]
            }
],
    hints: [
          "calls array use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-34",
    title: "higher-order function banao jo lazy evaluation with default value ho",
    starterCode: "function lazyWithDefault(fn, defaultVal) {\n  // TODO: return lazy function with default\n}",
    solution: "function lazyWithDefault(fn, defaultVal) {\n  let result;\n  let computed = false;\n  return function() {\n    if (!computed) {\n      result = fn();\n      computed = true;\n    }\n    return result ?? defaultVal;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "lazy with default created"
                        ]
            }
],
    hints: [
          "computed flag use karo",
          "?? operator use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-35",
    title: "higher-order function banao jo array ke elements ko sort kare custom comparator se",
    starterCode: "function sortBy(arr, comparator) {\n  // TODO: return sorted array\n}",
    solution: "function sortBy(arr, comparator) {\n  return [...arr].sort(comparator);\n}",
    tests: [
            {
                        "input": [
                                    [
                                                3,
                                                1,
                                                2
                                    ],
                                    "(a,b)=>a-b"
                        ],
                        "expected": [
                                    1,
                                    2,
                                    3
                        ]
            }
],
    hints: [
          "spread sort use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-36",
    title: "higher-order function banao jo function ko timeout de",
    starterCode: "function withTimeout(fn, timeout) {\n  // TODO: return function with timeout\n}",
    solution: "function withTimeout(fn, timeout) {\n  return function(...args) {\n    return Promise.race([\n      Promise.resolve(fn(...args)),\n      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))\n    ]);\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "timeout wrapper created"
                        ]
            }
],
    hints: [
          "Promise.race use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-37",
    title: "higher-order function banao jo deep clone kare",
    starterCode: "function deepClone(obj) {\n  // TODO: return deep cloned object\n}",
    solution: "function deepClone(obj) {\n  if (obj === null || typeof obj !== 'object') return obj;\n  if (Array.isArray(obj)) return obj.map(item => deepClone(item));\n  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepClone(v)]));\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": {
                                                            "b": 1
                                                }
                                    }
                        ],
                        "expected": [
                                    {
                                                "a": {
                                                            "b": 1
                                                }
                                    }
                        ]
            }
],
    hints: [
          "recursion use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-38",
    title: "higher-order function banao jo object ke properties ko transform kare",
    starterCode: "function mapValues(obj, fn) {\n  // TODO: return transformed object\n}",
    solution: "function mapValues(obj, fn) {\n  return Object.fromEntries(\n    Object.entries(obj).map(([k, v]) => [k, fn(v)])\n  );\n}",
    tests: [
            {
                        "input": [
                                    {
                                                "a": 1,
                                                "b": 2
                                    }
                        ],
                        "expected": "(x) => x*10, {a:10,b:20}"
            }
],
    hints: [
          "Object.entries map use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-39",
    title: "higher-order function banao jo function composition with async support",
    starterCode: "function asyncCompose(...fns) {\n  // TODO: return async composed function\n}",
    solution: "function asyncCompose(...fns) {\n  return (x) => fns.reduceRight(async (acc, fn) => fn(await acc), Promise.resolve(x));\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "async compose created"
                        ]
            }
],
    hints: [
          "async reduceRight use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-40",
    title: "higher-order function banao jo memoize with TTL ho",
    starterCode: "function memoizeWithTTL(fn, ttl) {\n  // TODO: return memoized function with TTL\n}",
    solution: "function memoizeWithTTL(fn, ttl) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      const entry = cache.get(key);\n      if (Date.now() - entry.time < ttl) return entry.value;\n    }\n    const value = fn(...args);\n    cache.set(key, { value, time: Date.now() });\n    return value;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "TTL memo created"
                        ]
            }
],
    hints: [
          "Map use karo",
          "Date.now() check karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-41",
    title: "higher-order function banao jo retry with exponential backoff kare",
    starterCode: "function retryWithBackoff(fn, maxRetries) {\n  // TODO: return retried function with backoff\n}",
    solution: "function retryWithBackoff(fn, maxRetries) {\n  return async function(...args) {\n    for (let i = 0; i <= maxRetries; i++) {\n      try { return await fn(...args); }\n      catch(e) { if (i === maxRetries) throw e; await new Promise(r => setTimeout(r, 2**i * 100)); }\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "backoff retry created"
                        ]
            }
],
    hints: [
          "async/await use karo",
          "setTimeout delay"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-42",
    title: "higher-order function banao jo batch processing with concurrency kare",
    starterCode: "function batchWithConcurrency(arr, batchSize, fn) {\n  // TODO: process in batches with concurrency\n}",
    solution: "async function batchWithConcurrency(arr, batchSize, fn) {\n  const results = [];\n  for (let i = 0; i < arr.length; i += batchSize) {\n    const batch = arr.slice(i, i + batchSize);\n    results.push(...await Promise.all(batch.map(fn)));\n  }\n  return results;\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "batch processor created"
                        ]
            }
],
    hints: [
          "Promise.all batch use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-43",
    title: "higher-order function banao jo event-driven async processing kare",
    starterCode: "function createAsyncEventProcessor() {\n  // TODO: return process, onComplete\n}",
    solution: "function createAsyncEventProcessor() {\n  const queue = [];\n  let processing = false;\n  return {\n    process: (fn) => {\n      queue.push(fn);\n      if (!processing) {\n        processing = true;\n        (async () => {\n          while (queue.length) await queue.shift()();\n          processing = false;\n        })();\n      }\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "async event processor created"
                        ]
            }
],
    hints: [
          "queue use karo",
          "async processing"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-44",
    title: "higher-order function banao jo retry with condition ho",
    starterCode: "function retryUntil(fn, condition, maxAttempts) {\n  // TODO: retry until condition is met\n}",
    solution: "async function retryUntil(fn, condition, maxAttempts) {\n  for (let i = 0; i < maxAttempts; i++) {\n    const result = await fn();\n    if (condition(result)) return result;\n  }\n  throw new Error('Max attempts reached');\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "conditional retry created"
                        ]
            }
],
    hints: [
          "async/await use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-45",
    title: "higher-order function banao jo pipeline with async support ho",
    starterCode: "function asyncPipeline(...fns) {\n  // TODO: return async pipeline\n}",
    solution: "function asyncPipeline(...fns) {\n  return (x) => fns.reduce(async (acc, fn) => fn(await acc), Promise.resolve(x));\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "async pipeline created"
                        ]
            }
],
    hints: [
          "async reduce use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-46",
    title: "higher-order function banao jo function caching with LRU ho",
    starterCode: "function lruCache(fn, maxSize) {\n  // TODO: return LRU cached function\n}",
    solution: "function lruCache(fn, maxSize) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      const val = cache.get(key);\n      cache.delete(key);\n      cache.set(key, val);\n      return val;\n    }\n    const result = fn(...args);\n    if (cache.size >= maxSize) cache.delete(cache.keys().next().value);\n    cache.set(key, result);\n    return result;\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "LRU cache created"
                        ]
            }
],
    hints: [
          "Map use karo",
          "order maintain karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-47",
    title: "higher-order function banao jo state management kare",
    starterCode: "function createStore(initialState, reducers) {\n  // TODO: return getState, dispatch\n}",
    solution: "function createStore(initialState, reducers) {\n  let state = {...initialState};\n  const listeners = [];\n  return {\n    getState: () => ({...state}),\n    dispatch: (action) => {\n      const reducer = reducers[action.type];\n      if (reducer) {\n        state = {...state, ...reducer(state, action)};\n        listeners.forEach(fn => fn(state));\n      }\n    },\n    subscribe: (fn) => { listeners.push(fn); return () => listeners.splice(listeners.indexOf(fn),1); }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "store created"
                        ]
            }
],
    hints: [
          "state object use karo",
          "listeners track karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-48",
    title: "higher-order function banao jo request interceptor pattern implement kare",
    starterCode: "function createRequestInterceptor() {\n  // TODO: return addInterceptor, intercept\n}",
    solution: "function createRequestInterceptor() {\n  const interceptors = [];\n  return {\n    addInterceptor: (fn) => interceptors.push(fn),\n    intercept: (request) => interceptors.reduce((req, interceptor) => interceptor(req), request)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "interceptor created"
                        ]
            }
],
    hints: [
          "interceptors array use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-49",
    title: "higher-order function banao jo dependency injection implement kare",
    starterCode: "function createDIContainer() {\n  // TODO: return register, resolve\n}",
    solution: "function createDIContainer() {\n  const services = {};\n  return {\n    register: (name, factory) => services[name] = factory,\n    resolve: (name) => {\n      const factory = services[name];\n      return factory ? factory() : undefined;\n    }\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "DI container created"
                        ]
            }
],
    hints: [
          "services object use karo"
]
  });
  exercises.push({
    id: "functions-higher-order-functions-50",
    title: "higher-order function banao jo event sourcing pattern implement kare",
    starterCode: "function createEventSourcing() {\n  // TODO: return append, getEvents, getState\n}",
    solution: "function createEventSourcing() {\n  const events = [];\n  return {\n    append: (event) => events.push(event),\n    getEvents: () => [...events],\n    getState: (reducer, initial) => events.reduce(reducer, initial)\n  };\n}",
    tests: [
            {
                        "input": [],
                        "expected": [
                                    "event sourcing created"
                        ]
            }
],
    hints: [
          "events array use karo"
]
  });
const lessons = [
  { slug: "function-basics", file: "function-basics-01.json" },
  { slug: "arrow-functions", file: "arrow-functions-01.json" },
  { slug: "closures-iife", file: "closures-iife-01.json" },
  { slug: "higher-order-functions", file: "higher-order-functions-01.json" }
];

const __dirname = path.resolve();
const outDir = path.join(__dirname, "src", "content", "06-functions", "exercises");
fs.mkdirSync(outDir, { recursive: true });

for (const lesson of lessons) {
  const lessonExercises = exercises.filter(e => e.id.includes(lesson.slug));
  const outPath = path.join(outDir, lesson.file);
  fs.writeFileSync(outPath, JSON.stringify(lessonExercises, null, 2));
  console.log(`Written ${lessonExercises.length} exercises -> ${outPath}`);
}
console.log("Done!");
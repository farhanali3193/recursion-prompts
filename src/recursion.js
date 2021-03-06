/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 1 || n === 0) {
    return 1;
  }

  return n * (factorial(n-1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }

  if(array.length === 1) {
    return array[0];
  }
  var sliced = array.slice(0,array.length -1);
  return array[array.length - 1] + sum(sliced);
};


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(item) {
    sum += arraySum(item);
  })
  return sum;
  //Inner func approach
  // var sum = 0;
  // var innerFunc = function (input) {
  //   if (!Array.isArray(input)) {
  //     return input;
  //   }
  //   input.forEach(function(item) {
  //     sum = sum + arraySum(item)
  //   })
  //   return sum;
  // }
  // return innerFunc(array);
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n)
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  return isEven(n-2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var modN = Math.abs(n);
  var sum = modN-1;
  if (modN === 0 || modN===1) {
    return 0;
  }
  if (modN === 2 && n<0) {
    return -sum;
  } else if (modN === 2 && n>0){
    return sum;
  }
  sum = sum + sumBelow(modN-1)
  return (n<0 ? -sum : sum)
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y || (Math.abs(x - y) === 1)) {
    return [];
  }

  if (x < y) {
  var result = [];
  if (y - x === 2) {
    result = result.concat(y-1)
    return result;
  }
  result = result.concat(x+1).concat(range(x + 1, y))
  return result;
  } else {
      var result = [];
      if (x - y === 2) {
        result = result.concat(x - 1)
        return result;
      }
      result = result.concat(x - 1).concat(range(x-1, y))
      return result;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp < 0) {
    base = 1/base;
    exp = -exp;
  }
  if (exp === 0) {
    return 1;
  }
  return Number((base * exponent(base, exp - 1)).toFixed(5))

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 ) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  if (n / 2 === 1) {
    return true;
  }
  return powerOfTwo(n/2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var result = '';

  if (string.length === 1) {
    return result += string[0];
  }

  return string[string.length - 1] + reverse(string.slice(0,string.length-1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if ( string[0] !== string[string.length -1 ]) {
    return false;
  }
  if (string.length === 2 || string.length === 3) {
    return string[0] === string[string.length - 1] ;
  }
  if (string.length === 1) {
    return true;
  }
  return palindrome(string.slice(1, string.length - 1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x < 0) {
    return -modulo(-x, y)
  } else if (x > 0){
    if (y < 0) {
      y = -y;
    }
    if (x === y) {
      return 0;
    }
    if (x < y) {
      return x;
    }
    return modulo(x-y, y);
  } else if (y === 0) {
    return NaN;
  } else {
    return 0;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    if (x < 0 && y < 0) {
      x = -x;
      y = -y;
    }
    if (y === 1) {
      return x;
    }
    return x + multiply(x, y - 1)
  } else {
    if (x < 0) {
      return -multiply(-x, y)
    }
    if (y < 0) {
      return -multiply(x, -y)
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    if (x < 0 && y < 0) {
      x = -x;
      y = -y;
    }
    if (x >= 0 && x < y) {
      return 0;
    }
    return 1 + divide(x-y, y);
  } else {
    if (x < 0) {
      return -(divide(-x, y))
    }
    if (y < 0) {
      return -(divide(x, -y))
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x <= 0 || y <= 0) {
    return null;
  }
  if (x === 1 || y === 1) {
    return 1;
  }
  if (y > x) {
    var temp = x; //12
    x = y; //16
    y = temp;
  }
  if (x > y) {
    if (x % y === 0) {
      return y;
    }

    var q = Math.floor(x/y);
    var r = x - q*y
    return gcd(y, r);

  }

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1.length < str2.length) {
    return compareStr(str2, str1);
  }
  if (str1.length > str2.length) {
    if (str1.length === 1) {
      if (str1[0] !== str2[0]) {
      return false;
      } else {
        return true;
      }
    }
    if (str1[0] !== str2[0]) {
      return false;
    }
  }
  return compareStr(str1.slice(1), str2.slice(1))
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];
  if (str.length === 1) {
    result.push(str);
    return result;
  }
  result = result.concat(str[0]).concat(createArray(str.slice(1)));
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];

  if (array.length === 1) {
    result = result.concat(array)
    return result;
  }
  var popped = array.pop();
  result = result.concat(popped);
  result = result.concat(reverseArr(array));
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 1) {
    result.push(value);
    return result;
  }
  if (value.length === 0) {
    result.push(value);
    result = result.concat(buildList(value, length - 1));
    return result;
  } else {
    result = result.concat(value).concat(buildList(value, length - 1));
    return result;
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 0) {
    return [];
  }
  if (n %5 ===0 && n%3 === 0) {
    result.unshift('FizzBuzz');
  } else if (n % 5 === 0) {
    result.unshift('Buzz')
  } else if (n % 3 === 0) {
    result.unshift('Fizz')
  } else if (n%3 !== 0 && n%5 !== 0) {
    result.unshift(String(n))
    // return result;
  }
    result = (fizzBuzz(n - 1)).concat(result);

  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 1) {
    if (array[0] === value) {
      return 1;
    } else {
      return 0;
    }
  }
  return countOccurrence(array.slice(0,1), value) + countOccurrence(array.slice(1),value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  if (array.length === 1) {
    result.push(callback(array[0]));
    return result;
  }
  result = result.concat(rMap(array.slice(0,1),callback)).concat(rMap(array.slice(1), callback));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var result = 0;

  for (var key1 in obj) {
    if (key1 === key) {
      result++;
    }
    if (typeof obj[key1] === 'object') {
      result = result + countKeysInObj(obj[key1], key)
    }
  }
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  //Pure recursive approach
  var result = 0;
  for (var key in obj) {
    // console.log(key)
    // console.log('------')
    if (obj[key] === value){
      result++;
      // console.log('result', result)
    } else if (typeof obj[key] === 'object') {
      result = result + countValuesInObj(obj[key], value)
    }
  }
  return result;
  //Inner Func Approach
  // var result = 0;
  // var innerFunc = function (obj, target) {

  //   for (var key in obj) {
  //    if (obj[key] === target) {
  //      result++;
  //    } else if (typeof obj === 'object'){
  //      innerFunc(obj[key],target)
  //    }
  //   }
  // }
  // innerFunc(obj,value);
  // return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey && typeof obj[key] === 'object') {
      obj[newKey] = obj[key];
      delete obj[key]
      // console.log(key);
      replaceKeysInObj(obj[newKey], oldKey, newKey)
    } else if (key === oldKey && typeof obj[key] !== 'object') {
        // console.log(key);
        obj[newKey] = obj[key];
        delete obj[key]
    } else if (key !== oldKey && typeof obj[key] === 'object') {
      // console.log(key);
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
  }
  return obj;

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 0) {
    return null;
  }

  var result = [0, 1];
  if (n === 1) {
    return result;
  }
  if (n === 2) {
    result.push(result[n-2] + result[n-1])
    return result;
  }

  var fib = fibonacci(n - 1);
  var first =fib[n - 1]
  var second = fib[n - 2]
  var sum = first + second;
  fib = fib.concat(sum)

  return fib;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  var result = [0, 1];
  if (n === 0 || n === 1) {
    return result[n];
  }
  if (n === 2) {
    return result[n-2] + result[n-1]
  }

  var first = nthFibo(n - 1)
  var second = nthFibo(n - 2)
  var sum = first + second;
  return sum
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 1) {
    result.push(array[0].toUpperCase());
    return result;
  }

  result = result.concat(capitalizeWords(array.slice(0,1))).concat(capitalizeWords(array.slice(1)))
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var result = [];
  if (array.length === 1) {
    var capital = array[0][0].toUpperCase()
    result.push(capital + array[0].slice(1));
    return result;
  }

  result = result.concat(capitalizeFirst(array.slice(0,1))).concat(capitalizeFirst(array.slice(1)))
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 0){
      result += obj[key];
    } else if (typeof obj[key] === 'object') {
      result = result + nestedEvenSum(obj[key])
    }
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var result = [];
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(arr) {
    result = result.concat(flatten(arr))
  })
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {}
  }
   if (str.length === 1) {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
      return obj;
    } else {
      obj[str[0]]++;
      return obj;
    }
  }
  obj = {
    ...letterTally(str.slice(0,1), obj),
    ...letterTally(str.slice(1), obj)
}
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  if (list.length === 1) {
    return list;
  }

  if (list[0] !== list[1]) {
    result.push(list[0]);
  }
  result = result.concat(compress(list.slice(1)));
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];

  if (array.length === 1) {
    array[0].push(aug);
    result.push(array[0]);
    return result;
  }

  result = result.concat(augmentElements(array.slice(0,1),aug)).concat(augmentElements(array.slice(1),aug));
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var result = [];
  if (array.length === 1) {
    return array;
  }
  if (array[0] !== 0) {
    result.push(array[0]);
  } else if (array[0] === 0 && array[1] !== 0) {
    result.push(array[0]);
  }

  result = result.concat(minimizeZeroes(array.slice(1)))
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless ofm
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];

  if (array.length === 1) {
    return Math.abs(array[0]);
  }
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result = result.concat(alternateSign(array.slice(i, i+ 1)))
    } else {
      result = result.concat(-alternateSign(array.slice(i, i+ 1)))
    }
  }
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var arr = str.split(' ');
  var result = '';
  if (arr.length === 1) {
    var numArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    var num = Number(arr[0])
    if (Number.isNaN(num)) {
      result += arr[0];
      return result;
    } else {
      result += numArr[num];
      return result;
    }
  }

  result = numToText(arr.slice(0,1).join('')) + ' ' + numToText(arr.slice(1).join(' '));
  return result;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var result = 0;
  console.log(node);
  if (node !== undefined) {
    if (tag === node.tagName) {
      result++;
      // console.log(result);
    }
    if (node.children.length === 0) {
      return result;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        result += tagCount(tag, node.children[i]);
        console.log(result)
      }
    }
    // console.log(node.children.length)
  } else {
    tag = tag.toUpperCase();
    result += tagCount(tag, document.body);
  }
  return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  var length = array.length;
  if (length === 0) {
    return null;
  }
  var midI = Math.floor(length/2);
  var midV = array[midI];

  if (midV === target) {
    return midI;
  }


  if (midV < target) {
    if (binarySearch(array.slice(midI+1), target) === null) {
      return null;
    }
    return midI + 1 + binarySearch(array.slice(midI+1), target);
  }
  if (midV > target) {
    return binarySearch(array.slice(0, midI), target);
  }

};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  if (array.length === 0) {
    return [];
  }
  var merge = function(left, right) {
    var result = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left.slice()).concat(right.slice());
  }
  if (array.length === 1) {
    return array;
  }
  var left = array.slice(0, Math.floor(array.length/2));
  var right = array.slice(Math.floor(array.length/2));

  return merge(mergeSort(left), mergeSort(right));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (typeof input === 'object' && !Array.isArray(input)) {
    var result = {};
    for (var key in input) {
      if (typeof input[key] !== 'object'){
        result[key] = input[key];
      } else {
        result[key] = clone(input[key]);
      }
    }
    return result;
  }

  if (Array.isArray(input)) {
    var resultArr = [];
    for (var i = 0; i < input.length; i++) {
      if (typeof input[i] !== 'object') {
        resultArr.push(input[i])
      } else {
        var temp = clone(input[i])
        resultArr.push(temp);
      }
    }
    return resultArr;
  }
};

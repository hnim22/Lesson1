  // bài 1
 function commonElements(array1, array2) {
   
    let result = [];
   
    for (let element of array1) {

      if (array2.includes(element)) {

        result.push(element);
      }
    }
  
    return result;
  }
  

  let array1 = [1,2,3,4,5,6];
  let array2 = [3,4,8,9,12];
  console.log(commonElements(array1, array2)); 


  // bài 2
  function findTwoMaxElements(arr) {
    if (arr.length < 2) {
        return "Mảng phải có ít nhất 2 phần tử";
    }
   arr.sort(function(a, b) {
        return b - a;
    });
   return [arr[0], arr[1]];
}
const array = [1, 7, 9, 2, 5, 3, 8];
const result = findTwoMaxElements(array);
console.log(result); 

  // bài 3
  function findPairsWithSum(arr, sum) {
    const result = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    
    return result;
}

const array = [1, 7, 9, 2, 5, 3, 8];
const targetSum = 10;
const pairs = findPairsWithSum(array, targetSum);
console.log(pairs); 

// bài 4
function uniqueArrayWithSet(arr) {
    return [...new Set(arr)];
}

const inputArray = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
const uniqueArray = uniqueArrayWithSet(inputArray);

console.log(uniqueArray); 

//bài 5
function removeDuplicatesWithSet(arr) {
    return [...new Set(arr)];
}

function removeDuplicatesWithoutSet(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

const inputArray = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
const uniqueArrayWithSet = removeDuplicatesWithSet(inputArray);
const uniqueArrayWithoutSet = removeDuplicatesWithoutSet(inputArray);

console.log(uniqueArrayWithSet);
console.log(uniqueArrayWithoutSet);

//bài 6
function findDuplicateElements(arr) {
    const counts = {};
    const result = [];
    
    for (const element of arr) {
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }

    for (const element in counts) {
        if (counts[element] > 1) {
            result.push(parseInt(element));
        }
    }
    
    return result;
}

const arr1 = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
const arr2 = findDuplicateElements(arr1);

console.log(arr2);

// bài 7 
function countOccurrences(arr) {
    const counts = {};
    
    for (const element of arr) {
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    }

    return counts;
}

const myArr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
const occurrences = countOccurrences(myArr);

console.log(occurrences);
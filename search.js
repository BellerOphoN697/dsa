// LInear Search #3
function findFirstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1;
}

const arr = [3, 2, 4, 1, 5, 2];
const targetElement = 2;
const firstOccurrenceIndex = findFirstOccurrence(arr, targetElement);
if (firstOccurrenceIndex !== -1) {
    console.log(`First occurrence of ${targetElement} is at index ${firstOccurrenceIndex}.`);
} else {
    console.log(`${targetElement} is not found in the array.`);
}


// Linear Search #2
// function findSmallest(arr) {
//     if (arr.length === 0) {
//         return null; 
//     }

//     let smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i]; 
//         }
//     }

//     return smallest; 
// }

// const arr = [3, 2, 4, 1, 5];
// const smallestElement = findSmallest(arr);
// console.log("Smallest element:", smallestElement);


// Linear Search #1
// function findFirstRepeating(arr) {
//     const encountered = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (encountered.has(arr[i])) {
//             return arr[i]; 
//         } else {
//             encountered.add(arr[i]);
//         }
//     }

//     return null;
// }

// const arr = [3, 2, 4, 5, 2, 3];
// const firstRepeating = findFirstRepeating(arr);
// if (firstRepeating !== null) {
//     console.log("First repeating element:", firstRepeating);
// } else {
//     console.log("No repeating element found.");
// }


// Binary Search #3
// function findSmallestMissing(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === mid) {
//             left = mid + 1;
//         }
//         else if (arr[mid] > mid) {
//             right = mid - 1;
//         }
//         else {
//             right = mid;
//         }
//     }
//     return left;
// }

// Example usage:
// const arr = [0, 1, 2, 3, 4, 6, 7, 8, 9];
// const missingElement = findSmallestMissing(arr);
// console.log("Smallest missing element:", missingElement);



// Binary Search #2
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// const target = 12;
// const index = binarySearch(arr, target);
// if (index !== -1) {
//     console.log(`Element ${target} found at index ${index}.`);
// } else {
//     console.log(`Element ${target} not found in the array.`);
// }

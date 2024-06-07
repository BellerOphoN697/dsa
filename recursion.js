
function reverse(str){
    if(str===""){
        return ""
    }else{
        let res= reverse(str.substr(1)) + str.charAt(0)
        console.log(res)
        return res
    }
}



let str = "anand"
let result = reverse(str)


// function fact(n,facto){
//     facto=facto || 1
//     if(n==0){
//         console.log(facto)
//         return
//     }
//     facto=facto*n
//     fact(n-1,facto)

// }
// fact(4)



// Recursion #3
// function findSmallest(arr, index = 0, min = Infinity) {
//     if (index >= arr.length) {
//         return min;
//     }
//     if (arr[index] < min) {
//         min = arr[index];
//     }
//     return findSmallest(arr, index + 1, min);
// }

// const arr = [3, 2, 4, 1, 5];
// const smallestElement = findSmallest(arr);
// console.log("Smallest element:", smallestElement);



// Recursion #2
// function findFirstOccurrence(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return -1;
//     }
//         if (arr[index] === target) {
//         return index;
//     }
//     return findFirstOccurrence(arr, target, index + 1);
// }

// const arr = [3, 2, 4, 1, 5, 2];
// const targetElement = 2;
// const firstOccurrenceIndex = findFirstOccurrence(arr, targetElement);
// if (firstOccurrenceIndex !== -1) {
//     console.log(`First occurrence of ${targetElement} is at index ${firstOccurrenceIndex}.`);
// } else {
//     console.log(`${targetElement} is not found in the array.`);
// }




// Recursion #1

// function recurse(number,sum){
//     var sum =sum || 0
//     if(number==0){
//         console.log(sum)
//         return
//     }
//     sum+=number

//     number--
//     recurse(number,sum)
// }

// recurse(3)
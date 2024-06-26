// function heapify(arr, n, i) {
//     let largest = i; 
//     const left = 2 * i + 1; 
//     const right = 2 * i + 2; 

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];

//         heapify(arr, n, largest);
//     }
// }

// function heapSort(arr) {
//     const n = arr.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
//     return arr;
// }

// const array = [32,2,64,16,4,256,8,128];
// console.log("Original array:", array);
// console.log("Sorted array:", heapSort(array.slice()));

// function heapify(arr,n,i) {
//     let largest = i;
//     left=2*i+1
//     right=2*i+2
//     if(left<n && arr[left]<arr[largest]){
//         largest=left
//     }
//     if(right<n && arr[right]<arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }

// }
// function heapSort(arr){
//     const n=array.length
//     for(let i=Math.floor(n/2)-1;i>=0;i--)
//         heapify(arr,n,i)
//     for(i=n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }


// function heapify(arr,n,i){
//     largest=i
//     left=2*i+1
//     right=2*i+2
//     if(left<n && arr[left]>arr[largest]){
//         largest=left

//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest!==i)
//         {
//             [arr[i],arr[largest]]=[arr[largest],arr[i]]
//             heapify(arr,n,largest)
//         }
// }
// function heapSort(arr){
//     let n=arr.length
//     for(i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(i=n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }


function heapSort(arr){
    let n=arr.length
    for(i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)

    }
    return arr

}

function heapify(arr,n,i){
    let largest=i, left=i*2+1, right=i*2+2
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(arr[right]>arr[largest] && right<n)
        largest=right
    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)

    }
}


// function heapify(arr,n,i){
//     largest=i
//     left=2*i+1
//     right=2*i+2
//     if(left<n && arr[left]>arr[largest]){
//         largest=left

//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest!==i)
//         {
//             [arr[i],arr[largest]]=[arr[largest],arr[i]]
//             heapify(arr,n,largest)
//         }
// }


const array = [32,2,64,16,4,256,8,128];
console.log("Original array:", array);
console.log("Sorted array:", heapSort(array.slice()));
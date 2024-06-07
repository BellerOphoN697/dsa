// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(arr) {
//       this.heap = arr;
//       for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
  
//     remove() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       if (this.heap.length === 1) {
//         return this.heap.pop();
//       }
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return root;
//     }
  
//     heapifyUp(index) {
//       let parent = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[index] < this.heap[parent]) {
//         [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
//         index = parent;
//         parent = Math.floor((index - 1) / 2);
//       }
//     }
  
//     heapifyDown(index) {
//       let smallest = index;
//       const left = 2 * index + 1;
//       const right = 2 * index + 2;
//       if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
//         smallest = left;
//       }
//       if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
//         smallest = right;
//       }
//       if (smallest !== index) {
//         [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//         this.heapifyDown(smallest);
//       }
//     }
  
//     isEmpty() {
//       return this.heap.length === 0;
//     }
//   }
  
//   class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(arr) {
//       this.heap = arr;
//       for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
  
//     remove() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       if (this.heap.length === 1) {
//         return this.heap.pop();
//       }
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return root;
//     }
  
//     heapifyUp(index) {
//       let parent = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[index] > this.heap[parent]) {
//         [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
//         index = parent;
//         parent = Math.floor((index - 1) / 2);
//       }
//     }
  
//     heapifyDown(index) {
//       let largest = index;
//       const left = 2 * index + 1;
//       const right = 2 * index + 2;
//       if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//         largest = left;
//       }
//       if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//         largest = right;
//       }
//       if (largest !== index) {
//         [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//         this.heapifyDown(largest);
//       }
//     }
  
//     isEmpty() {
//       return this.heap.length === 0;
//     }
//   }
  
//   const minHeap = new MinHeap();
//   minHeap.buildHeap([4, 7, 2, 9, 1, 5]);
//   console.log("MinHeap:", minHeap.heap);
//   minHeap.insert(3);
//   console.log("MinHeap after inserting 3:", minHeap.heap); 
//   minHeap.remove();
//   console.log("MinHeap after removing min element:", minHeap.heap);
  
//   const maxHeap = new MaxHeap();
//   maxHeap.buildHeap([4, 7, 2, 9, 1, 5]);
//   console.log("MaxHeap:", maxHeap.heap); 
//   maxHeap.insert(11);
//   console.log("MaxHeap after inserting 11:", maxHeap.heap); 
//   maxHeap.remove();
//   console.log("MaxHeap after removing max element:", maxHeap.heap);
  

// class MinHeap {
//   constructor() {
//       this.heap = [];
//   }

//   insert(value) {
//       this.heap.push(value);
//       this.bubbleUp();
//   }

//   bubbleUp() {
//       let index = this.heap.length - 1;
//       while (index > 0) {
//           let parentIndex = Math.floor((index - 1) / 2);
//           if (this.heap[parentIndex] > this.heap[index]) {
//               [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//               index = parentIndex;
//           } else {
//               break;
//           }
//       }
//   }

//   extractMin() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();

//       const min = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.sinkDown(0);
//       return min;
//   }

//   sinkDown(index) {
//       const leftChildIndex = 2 * index + 1;
//       const rightChildIndex = 2 * index + 2;
//       let smallest = index;

//       if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
//           smallest = leftChildIndex;
//       }

//       if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
//           smallest = rightChildIndex;
//       }

//       if (smallest !== index) {
//           [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//           this.sinkDown(smallest);
//       }
//   }
// }



// class MaxHeap {
//   constructor() {
//       this.heap = [];
//   }

//   insert(value) {
//       this.heap.push(value);
//       this.bubbleUp();
//   }

//   bubbleUp() {
//       let index = this.heap.length - 1;
//       while (index > 0) {
//           let parentIndex = Math.floor((index - 1) / 2);
//           if (this.heap[parentIndex] < this.heap[index]) {
//               [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//               index = parentIndex;
//           } else {
//               break;
//           }
//       }
//   }

//   extractMax() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();

//       const max = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.sinkDown(0);
//       return max;
//   }

//   sinkDown(index) {
//       const leftChildIndex = 2 * index + 1;
//       const rightChildIndex = 2 * index + 2;
//       let largest = index;

//       if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//           largest = leftChildIndex;
//       }

//       if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//           largest = rightChildIndex;
//       }

//       if (largest !== index) {
//           [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//           this.sinkDown(largest);
//       }
//   }
// }

// const maxHeap = new MaxHeap();
// maxHeap.insert(4);
// maxHeap.insert(2);
// maxHeap.insert(7);
// maxHeap.insert(1);
// console.log(maxHeap.heap);
// console.log(maxHeap.extractMax());
// console.log(maxHeap.heap);

class MinHeap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.bubble()
    }
    bubble(){
        let index=this.heap.length-1
        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(this.heap[parent]<this.heap[index]){
                [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
                index=parent
            }
            else{
                break
            }
        }
    }
    extract(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
        let max=this.heap.shift()
        this.sink(0)
        return max
    }
    sink(index){
        let left=2*index+1,right=2*index+2
        let largest=index
        if(left<this.heap.length && this.heap[left]>this.heap[largest]){
            largest=left

        }
        if(right<this.heap.length && this.heap[right]>this.heap[largest]){
            largest=right
        }
        if(largest!==index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
            this.sink(largest)
        }

    }

}

const heap=new MinHeap
heap.insert(9)
heap.insert(94)
heap.insert(49)
heap.insert(59)
heap.insert(89)
heap.insert(29)
heap.insert(19)
heap.insert(69)

// heap.insert(18)
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
console.log(heap.extract())
console.log(heap)
console.log(heap);
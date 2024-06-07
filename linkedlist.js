// review
0
// merge two sorted ll to one ll

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head
    }
    insert(data){
        if(!this.head){
            return
        }
        const newNode=new Node(data)
        this.head=newNode
        current=newNode
    }
    printList(){
        current=this.head
        while(current.next){
            console.log(current.data)
            current=current.next
        }
    }
    sort(){
        if(!this.head){
            return
        }
        current=this.head
        while(current.next){
            if(current.data>current.next.data){
                temp=current
                current=current.next
                current.next=temp
            }
        }
    }
    
    
}

console.log("hello")
        insert(5)
let arr1=[1,3,5,7,9]
arr1.forEach((num)=>{
    insert(num)
})
printList()






// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//     }
//     insert(data){
//         const newNode= new Node(data)
//         if(!this.head){
//             this.head=newNode
//         }
//         else{
//             let current=this.head
//             while(current.next){
//                 current=current.next
//             }
//             current.next=newNode
//         }
//     }
//     delete(value){
//         if(!this.head){
//             return
//         }
//         if(this.head.data===value){
//             this.head=this.head.next
//             return
//         }
//         let current=this.head
//         while(current.next){
//             if(current.next.data===value){
//                 current.next=current.next.next
//                 return
//             }
//             current= current.next
//         }

//     }
// }

// Delete node with the value specified
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     insert(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }
//     deleteWithValue(value) {
//         if (!this.head) {
//             return;
//         }
//         if (this.head.data === value) {
//             this.head = this.head.next;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             if (current.next.data === value) {
//                 current.next = current.next.next;
//                 return;
//             }
//             current = current.next;
//         }
//     }
//     printList() {
//         let current = this.head;
//         let list = [];
//         while (current) {
//             list.push(current.data);
//             current = current.next;
//         }
//         console.log(list.join(' -> '));
//     }
// }
// const linkedList = new LinkedList();
// linkedList.insert(1);
// linkedList.insert(2);
// linkedList.insert(3);
// linkedList.insert(4);
// console.log("Before deletion:");
// linkedList.printList();
// linkedList.deleteWithValue(3);
// console.log("After deletion of value 3:");
// linkedList.printList();



// Add a node at the end & beginning
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//     prepend(data) {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }
//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// console.log("Linked list before prepend:");
// linkedList.printList();
// linkedList.prepend(0);
// console.log("Linked list after prepend:");
// linkedList.printList();





// Convert array to a linked list
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function arrayToLinkedList(arr) {
//     if (arr.length === 0) {
//         return null;
//     }

//     let head = new ListNode(arr[0]);
//     let current = head;

//     for (let i = 1; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }

//     return head;
// }

// const array = [1, 2, 3, 4, 5];
// const linkedList = arrayToLinkedList(array);

// function printLinkedList(head) {
//     let current = head;
//     while (current !== null) {
//         console.log(current.value);
//         current = current.next;
//     }
// }

// printLinkedList(linkedList);

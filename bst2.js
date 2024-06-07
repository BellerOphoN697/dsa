class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }
}

class BST{
    constructor(){
        this.root=null
        this.close=null
        this.large=null
        this.small=null

    }
// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(!this.root){
//             this.root=newNode
//         }
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(node,newNode){
//         if(node.value>newNode.value){
//             if(node.left==null){
//                 node.left=newNode
//             }
//             else{
//                 this.insertNode(node.left,newNode)
//             }
//         }
//         else{
//             if(node.right==null){
//                 node.right=newNode
//             }
//             else{
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     display(node){
        
//         if(node.left){
//             this.display(node.left)
//         }
//         if(node.value){
//             console.log(node.value)
//         }
//         if(node.right){
//             this.display(node.right)
//         }
//     }
// }

// const tree=new BST()
// tree.insert(50)
// tree.insert(15)
// tree.insert(60)
// tree.insert(74)
// tree.insert(14)
// tree.display(tree.root)
// console.log(tree)




// class Node{
//     constructor(value){
//         this.value=value
//         this.left = null
//         this.right=null
//     }
// }


// class Tree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(!this.root) this.root=newNode
//         else{

//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(node,newNode){
//         if(newNode.value<node.value){
//             if(!node.left){
//                 node.left=newNode
//             }
//             else{
//                 this.insertNode(node.left,newNode)
//             }
//         }
//         else{
//             if(!node.right) node.right=newNode
//             else{
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     display(node){
//         if(node.left) this.display(node.left)
//         console.log(node.value)
//         if(node.right) this.display(node.right)
//     }

//     flip(node){
//         let queue=[]
//         if(!node) return node
//         else{
//             queue.push(node)
//             let current,temp
//             while(queue.length){
//                 current=queue.shift()
//                 temp=current.left
//                 current.left=current.right
//                 current.right=temp
//                 if(current.left)queue.push(current.left)
//                 if(current.right)queue.push(current.right)
//             }
//         }
//     }
//     depth(node){
//         if(!node)return 0
//         let maxLeft,maxRight
//         maxLeft=this.depth(node.left)
//         maxRight=this.depth(node.right)

//         return Math.max(maxLeft,maxRight)+1
//     }
//     balance(node){
//         if(!node) return true
//         let left=this.depth(node.left);
//         let right=this.depth(node.right);
//         if (Math.abs(left-right)>1){
//             return false
//         }
//         return this.balance(node.left) && this.balance(node.right)
//     }
// }



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class Tree{
//     constructor(value){
//         this.root=null
        
//     }
//     insert(value){
//         let newNode=new Node(value)
//         if(!this.root) this.root=newNode
//         else this.insertNode(this.root,newNode)
//     }
//     insertNode(node,newNode){
//         if(newNode.value<node.value){
//             if(node.left){
//                 this.insertNode(node.left,newNode)
//             }
//             else node.left=newNode
//         }
//         else{
//             if(node.right){
//                 this.insertNode(node.right,newNode)
//             }
//             else node.right=newNode
//         }

//     }
//     display(node){
//         if(node.left) this.display(node.left)
//         console.log(node.value)
//         if(node.right) this.display(node.right)
//     }
// depth(node){
//     if(!node) return 0
//     let maxLeft,maxRight
//     maxLeft=this.depth(node.left)
//     maxRight=this.depth(node.right)
//     console.log(maxLeft,maxRight);
//     return Math.max(maxLeft,maxRight)+1
// }

// balance(node){
//     if(!root) return 
//     let left=this.depth(node.left)
//     let right=this.depth(node.right)
//     if(Math.abs(left-right)>1) return false
//     return this.balance(node.left) && this.balance(node.right)
// }
// }


// const tre=new Tree()
// tre.insert(8);
// tre.insert(3);
// tre.insert(10);
// tre.insert(1);
// tre.insert(6);
// tre.insert(14);
// tre.insert(4);
// tre.insert(7);
// tre.insert(13);
// console.log(tre.(tre.root)
// )
// tre.insert(2)

// tre.insert(1)

// tre.insert(6)
// tre.flip(tre.root)
// tre.display(tre.root)
// console.log(tre)
// console.log(tre)



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------    closest in bst    --------------------------------



// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function insertIntoBST(root, value) {
//     if (!root) {
//         return new TreeNode(value);
//     }
//     if (value < root.value) {
//         root.left = insertIntoBST(root.left, value);
//     } else {
//         root.right = insertIntoBST(root.right, value);
//     }
//     return root;
// }

// function findClosestValueInBSTHelper(node, target, closest) {
//     if (node === null) {
//         return closest;
//     }
    
//     if (Math.abs(target - closest) > Math.abs(target - node.value)) {
//         closest = node.value;
//     }

//     if (target < node.value) {
//         return findClosestValueInBSTHelper(node.left, target, closest);
//     } else if (target > node.value) {
//         return findClosestValueInBSTHelper(node.right, target, closest);
//     } else {
//         return closest; 
//     }
// }

// function findClosestValueInBST(root, target) {
//     return findClosestValueInBSTHelper(root, target, root.value);
// }

// let root = new TreeNode(10);
// root = insertIntoBST(root, 5);
// root = insertIntoBST(root, 15);
// root = insertIntoBST(root, 2);
// root = insertIntoBST(root, 5);
// root = insertIntoBST(root, 13);
// root = insertIntoBST(root, 22);
// root = insertIntoBST(root, 1);
// root = insertIntoBST(root, 14);

// const target = 12;
// const closestValue = findClosestValueInBST(root, target);
// console.log(`The closest value to ${target} is ${closestValue}`);



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null

//     }
// }

// class Tree{
//     constructor(){
//         this.root=null
//         this.large=null
//         this.small=null
//         this.close=null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(this.root==null){
//             this.root=newNode
//         }
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(node,newNode){
//         if(node.value>newNode.value){
//             if(node.left==null){
//                 node.left=newNode
//             }
//             else{
//                 this.insertNode(node.left,newNode)
//             }
            
//         }
//         else{
//             if(node.right==null)
//                 node.right=newNode
//             else{
//                 this.insertNode(node.right,newNode)
//             }
//         }
//     }
//     display(node){
//         if(!node){
//             return
//         }
//         if(node.left) this.display(node.left)
//         console.log(node.value)
//         if(node.right) this.display(node.right)
//     }
//     largest(node){
//         if(!node) return
//         if(node.right){
//             this.largest(node.right)
//         }
//         else{
//             this.large=node.value
//         }
//         return this.large

//     }
//     smallest(node){
//         if(!node) return
//         if(node.left) this.smallest(node.left)
//         else this.small=node.value
//         return this.small
//     }
//     height(node){
//         if(!node) return 0
//         const maxLeft=(this.height(node.left))
//         const maxRight=this.height(node.right)
//         return Math.max(maxRight,maxLeft)+1
//     }
//     closest(node,target){
//         if(!node) return
//         if(Math.abs(node.value-target)<Math.abs(target-this.close)){
//             this.close=node.value
//         }
//         if(target<node.value){
//             this.closest(node.left,target)
//         }
//         else{
//             this.closest(node.right,target)
//         }

//         return ("Closest element to "+target+ " is "+ this.close)
//     }
//     balanced(node){
//         if(!node) return true
//         const left=this.height(node.left)
//         const right=this.height(node.right)
//         if(Math.abs(left-right)>1) return false
//         return this.balanced(node.left) && this.balanced(node.right)
//     }

//     balance(node){
//         if(!node) return true
//         let left=this.height(node.left);
//         let right=this.height(node.right);
//         if (Math.abs(left-right)>1){
//             return false
//         }
//         return this.balance(node.left) && this.balance(node.right)
//     }
// }


// const bst = new Tree()
// bst.insert(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);
// bst.insert(4);
// bst.insert(7);
// // bst.insert(13);
// bst.display(bst.root)
// console.log(bst.balanced(bst.root))



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(!this.root){
//             this.root=newNode
//         }
//         else{
//             this.insertNode(this.root,newNode)

//         }
//     }
//     insertNode(node,newNode){
//         if(node.value>newNode.value){
//             if(!node.left){
//                 node.left=newNode
//             }
//             else{
//                 this.insertNode(node.left,newNode)
//             }
//         }
//         else{
//             if(!node.right){
//                 node.right=newNode
//             }
//             else{
//                 this.insertNode(node.right,newNode)
//             }
//         }

//     }
//     display(node){
//         if(!node){
//             return
//         }
//         if(node.left) this.display(node.left)
//             console.log(node.value)
//         if(node.right) this.display(node.right)
//     }

//     depth(node){
//         if(!node){
//             return
//         }
//         const left=this.depth(node.left)
//         const right=this.depth(node.right)
//         return Math.abs(left-right)+1
//     }
// }


// const bst = new BST();
// bst.insert(80);
// bst.insert(30);
// bst.insert(100);
// bst.insert(10);
// bst.insert(60);
// bst.insert(140);
// bst.insert(40);
// bst.insert(70);
// bst.insert(130);
// bst.insert(8)
// bst.depth(bst.root);
// console.log(bst.root);



    // insert(value){
    //     const newNode=new Node(value)


    //     if(!this.root){
    //         this.root=newNode
    //     }
    //     else{
    //         this.insertNode(this.root,newNode)
            
    //     }
    // }
    // insertNode(node,newNode){
    //     if(node.value>newNode.value){
    //         if(!node.left){
    //             node.left=newNode
    //         }
    //         else{
    //             this.insertNode(node.left,newNode)
    //         }
    //     }
    //     else{
    //         if(!node.right){
    //             node.right=newNode
    //         }
    //         else{
    //             this.insertNode(node.right,newNode)
    //         }
    //     }
        

    // }
    // display(node){
    //     if(!node) return
    //     if(node.left) this.display(node.left)
    //         console.log(node.value)
    //     if(node.right) this.display(node.right)

    // }
    // depth(node){
    //     if(!node) return 0
    //     const maxLeft=this.depth(node.left)
    //     const maxRight=this.depth(node.right)
    //     return Math.max(maxLeft,maxRight)+1
    // }
    // balance(node){
    //     if(!node) return true
    //     const left=this.depth(node.left)
    //     const right=this.depth(node.right)
    //     if(Math.abs(left-right)>1){
    //         return false
    //     }
    //     return this.balance(node.left) && this.balance(node.right)
    // }
    // closest(node,target){
    //     if(!node) return
    //     if(this.close==null) this.close=node.value
    //     if(Math.abs(node.value-target)<Math.abs(target-this.close)){
    //         this.close=node.value
    //     }
    //     if(node.value>target){
    //         this.closest(node.left,target)
    //     }
    //     else{
    //         this.closest(node.right,target)
    //     }
    //     return this.close
    // }
    // largest(node){
    //     if(!node) return this.large
    //     this.large=node.value

    //     if(node.left) {
    //         this.large=node.value
    //         this.largest(node.left)
    //     }

    // }

    // insert(node){
    //     const newNode=new Node(node)
    //     if(!this.root) this.root=newNode
    //     else{
    //         this.insertNode(this.root,newNode)
    //     }
    // }
    // insertNode(node,newNode){
    //     if(node.value>newNode.value){
    //         if(!node.left) node.left=newNode
    //         else{
    //             this.insertNode(node.left,newNode)
    //         }
    //     }
    //     else{
    //         if(!node.right) node.right=newNode
    //         else{
    //             this.insertNode(node.right,newNode)
    //         }
    //     }
    // }
    // display(node){
    //     if(!node) return
    //     if(node.left) this.display(node.left)
    //         console.log(node.value)
    //     if(node.right) this.display(node.right)
    // }
    // largest(node){
    //     if(!node) return
    //     this.large=node.value
    //     if(node.right) this.largest(node.right)
    //     return this.large
    // }
    // smallest(node){
    //     if(!node) return
    //     this.small=node.value
    //     if(node.left) this.smallest(node.left)
    //     return this.small
    // }
    // closest(node,target){
    //     if(!node) return this.close
    //     if(!this.close) this.close=node.value
    //     if(Math.abs(node.value-target)<Math.abs(this.close-target)){
    //         this.close=node.value
    //     }
    //     if(node.value>target){
    //         this.closest(node.left,target)
    //     }
    //     else{
    //         this.closest(node.right,target)
    //     }
    //     return this.close
    // }
    // depth(node){
    //     if(!node) return 0
    //     const left=this.depth(node.left)
    //     const right=this.depth(node.right)
    //     return Math.max(left,right)+1
    // }
    // balance(node){
    //     if(!node) return true
    //     const left=this.depth(node.left)
    //     const right=this.depth(node.right)
    //     if(Math.abs(left-right)>1)
    //         return false
    //     return this.balance(node.left) && this.balance(node.right)
    // }

    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            
        }
        else{
            this.insertNode(this.root,newNode)
        }

    }
    insertNode(node,newNode){
        if(node.value>newNode.value){
            if(node.left){
                this.insertNode(node.left,newNode)
            }
            else{
                node.left=newNode
            }
        }
        else{
            if(node.right){
                this.insertNode(node.right,newNode)
            }
            else{
                node.right=newNode
            }
        }
    }
    inorder(node){
        if(!node) return
        if(node.left) this.inorder(node.left)
            console.log(node.value)
        if(node.right) this.inorder(node.right)
    }
    preorder(node){
        if(!node) return
            console.log(node.value)
            if(node.left) this.preorder(node.left)

        if(node.right) this.preorder(node.right)
    }
    postorder(node){
        if(!node) return
            if(node.left) this.postorder(node.left)

        if(node.right) this.postorder(node.right)
            console.log(node.value)

    }
    bfs(node){
        let queue=[],result=[]
        queue.push(node)
        while(queue.length){
            node=queue.shift()
            result.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return result
    }


}

const bst=new BST
bst.insert(80);
bst.insert(30);
bst.insert(100);
bst.insert(10);
bst.insert(60);
bst.insert(140);
bst.insert(40);
bst.insert(70);
bst.insert(130);
bst.insert(8);
bst.insert(90);
// console.log(bst.depth(bst.root))
// console.log(bst.balance(bst.root))
// console.log("inorder");
// bst.inorder(bst.root)
// console.log("preorder");
// bst.preorder(bst.root)
// console.log("postorder");
// bst.postorder(bst.root)
// console.log(bst.smallest(bst.root)+bst.largest(bst.root))
// console.log(bst.closest(bst.root,102));
// console.log(bst.largest(bst.root))
console.log (bst.bfs(bst.root))

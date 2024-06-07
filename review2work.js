class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
        this.large=null
        this.small=null
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            this.large=value
            this.small=value
        } else {
            this.insertNode(this.root, newNode);
        }
    }

/////////////////////////////////////////////////////////////////////////////

    // sum(node){
    //     if(node){
    //         if(node.left)this.sum(node.left)
    //         if(node.right)this.sum(node.right)
    //         if(node.value>this.large){
    //             this.large=node.value
    //         }
    //         if(node.value<this.small){
    //             this.small=node.value
    //         }
    //     }
    //     return this.large+this.small
    // }


//////////////////////////////////////////////////////////////////////////
    // sum(node){
        
    //     return this.min(node)+this.max(node)
    // }
    // min(node){
    //     if(node.left) {
    //         this.min(node.left)
    //         console.log(node.left.value,node.value);
    //     }
    //     return node.value
    // }
    // max(node){
    //     if(node.right) {
    //         this.min(node.right)
    //         console.log(node.right.value,node.value);

    //     }
    //     return node.value
    // }

    ////////////////////////////////////////////////////////////////////////
    sum(node){
        return this.minimum(node)+this.maximum(node)
    }
    minimum(node){
        if(!node)return null
        let value
        while(node.left){
            value=node.left.value
            node=node.left
        }
        return value
    }
    maximum(node){
        if(!node)return null
        let value
        while(node.right){
            value=node.right.value
            node=node.right
        }
        return value
    }

























    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    // In-order traversal of the BST
    inorder() {
        this.inorderTraversal(this.root);
    }

    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // Pre-order traversal of the BST
    preorder() {
        this.preorderTraversal(this.root);
    }

    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Post-order traversal of the BST
    postorder() {
        this.postorderTraversal(this.root);
    }

    postorderTraversal(node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Example usage:
const bst = new BinarySearchTree();
// bst.insert(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(6);
// bst.insert(14);
// bst.insert(4);
// bst.insert(7);
// bst.insert(13);

bst.insert(50)
bst.insert(30);
bst.insert(70);
bst.insert(107);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


// console.log('In-order traversal:');
// bst.inorder(); // Output: 1, 3, 4, 6, 7, 8, 10, 13, 14

// console.log('Pre-order traversal:');
// bst.preorder(); // Output: 8, 3, 1, 6, 4, 7, 10, 14, 13

// console.log('Post-order traversal:');
// bst.postorder(); // Output: 1, 4, 7, 6, 3, 13, 14, 10, 8

// console.log('Search for value 6:');
// console.log(bst.search(6)); // Output: true

// console.log('Search for value 20:');
// console.log(bst.search(20)); // Output: false

console.log(bst.sum(bst.root))
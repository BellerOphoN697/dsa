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
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    sum(node){
        if(node==null){return true}
        let min,max

        // if(node.left){
        //     if(node.left.value>node.value){
        //         min=this.sum(node.left)
        //     }
        //     else{
        //         min=this.sum(node.right)
        //     }

        // }
        // if(node.right){
        //     if(node.right.value<node.value){
        //         max=this.sum(node.left)
        //     }
        //     else{
        //         max=this.sum(node.right)
        //     }

        // }

        if(node.left){
            if(node.left.value>node.value){
                return 
            }
        }

        min=this.sum(node.left)
        max=this.sum(node.right)
        console.log(min,max);
        return Math.min(min)+Math.max(max)
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
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

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
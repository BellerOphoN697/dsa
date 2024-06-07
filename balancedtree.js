class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    updateHeight(node) {
        if (!node) return;
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    getBalanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);
        return y;
    }
    insertHelper(node, value) {
        if (!node) return new TreeNode(value);
        if (value < node.value) {
            node.left = this.insertHelper(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertHelper(node.right, value);
        } else {
            return node;
        }

        this.updateHeight(node);

        const balance = this.getBalanceFactor(node);


        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    insert(value) {
        this.root = this.insertHelper(this.root, value);
    }

    inorderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
}

const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

console.log(avlTree.inorderTraversal());
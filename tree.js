//Pre Order
/*
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(value) {
        var child = new Node(value);
        this.children.push(child);
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    traversePreOrder(node) {
        if (node === null) return;
        console.log(node.value);
        for (var i = 0; i < node.children.length; i++) {
            this.traversePreOrder(node.children[i]);
        }
    }
}
console.log('Pre Order')
var tree = new Tree();
tree.root = new Node("Root");
tree.root.addChild("Child 1");
tree.root.addChild("Child 2");
tree.root.children[0].addChild("Grandchild 1");
tree.root.children[1].addChild("Grandchild 2");
tree.traversePreOrder(tree.root);
*/



// Post Order
/*
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(value) {
        var child = new Node(value);
        this.children.push(child);
    }
}
  class Tree {
    constructor() {
        this.root = null;
    }
    traversePostOrder(node) {
        if (node === null) return;
        for (var i = 0; i < node.children.length; i++) {
            this.traversePostOrder(node.children[i]);
        }
        console.log(node.value);
    }
}
  
  var tree = new Tree();
  tree.root = new Node("Root");
  tree.root.addChild("Child 1");
  tree.root.addChild("Child 2");
  tree.root.children[0].addChild("Grandchild 1");
  tree.root.children[1].addChild("Grandchild 2");
  tree.traversePostOrder(tree.root);
  */


  // In Order
  class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(value) {
        var child = new Node(value);
        this.children.push(child);
    }
}
  class Tree {
    constructor() {
        this.root = null;
    }
    traverseInOrder(node) {
        if (node === null) return;
        if (node.children.length > 0) {
            this.traverseInOrder(node.children[0]); 
          }
          console.log(node.value);
          for (var i = 1; i < node.children.length; i++) {
            this.traverseInOrder(node.children[i]);
          }
    }
}
  
  var tree = new Tree();
  tree.root = new Node("Root");
  tree.root.addChild("Child 1");
  tree.root.addChild("Child 2");
  tree.root.children[0].addChild("Grandchild 1");
  tree.root.children[1].addChild("Grandchild 2");
  tree.traverseInOrder(tree.root);
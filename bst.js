// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
//   class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     var newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(node, newNode) {
//     if (newNode.value < node.value) {
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//         this.insertNode(node.left, newNode);
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode;
//       } else {
//         this.insertNode(node.right, newNode);
//       }
//     }
//   }
// }
//   var bst = new BinarySearchTree();
//   bst.insert(50);
//   bst.insert(34);
//   bst.insert(36);
//   bst.insert(65);
//   bst.insert(94);
//   bst.insert(80);
//   bst.insert(15);
//   bst.insert(90);
//   bst.insert(5);
//   console.log(bst);
  


class Node{
  constructor(){
    this.value=value
    this.left=null
    this.right=null
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null
  }
  insert(value){
    var newNode=new Node()
    if(this.root==null){
      this.root=newNode
    }
    else{
      insertNode(this.root,newNode)
    }

  }
  insertNode(node,newNode){
    if(newNode.value<node.value){
      if(node.left==null){
        node.left=newNode
      }
      else{
        this.insertNode(node.left,newNode)
      }
    }
    else{
      if(node.right==null){
        node.right==newNode
      }
      else{
        this.insertNode(node.right,newNode)
      }
    }
  }
}
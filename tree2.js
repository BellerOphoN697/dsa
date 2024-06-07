class Node{
    constructor(value){
        this.left=null
        this.right=null
        this.value=value
    }
}



class Tree{
    constructor(){
        this.root=null
        

    }
    insert(value){
        let newNode=new Node(value)
        if(this.root==null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
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
                node.right=newNode
            }
            else{
                this.insertNode(node.right,newNode)
            }
        }

    }
    inorder(node){
        if(node){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }

    }
    postorder(node){
        if(node){

            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    }
    preorder(node){
        if(node){
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
}


let tree=new Tree()
tree.insert(7)
tree.insert(1)
tree.insert(0)
tree.insert(3)
tree.insert(2)
tree.insert(5)
tree.insert(4)
tree.insert(6)
tree.insert(9)
tree.insert(8)
tree.insert(10)
// console.log(tree.root);
console.log("preorder");
tree.preorder(tree.root)
console.log("inorder");
tree.inorder(tree.root)
console.log("postorder");
tree.postorder(tree.root);

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
        this.small=null
        this.large=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    insert(value){
        let newNode=new Node(value)
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
    display(node){
        if(!node){
            return
        }
        if(node.left) this.display(node.left)
            console.log(node.value)
        if(node.right) this.display(node.right)
    }
    smallest(node){
        if(!node){
            return 
        }
        if(node.value) this.small=node.value
        if(node.left) this.smallest(node.left)
            else{
                this.small=node.value
        }
        
        
    }
    largest(node){
        if(!node){
            return 
        }
        if(node.value) this.large=node.value
        if(node.right) this.largest(node.right)
            else{
                this.large=node.value
        }

    }
    sum(){
        this.smallest(this.root)
        this.largest(this.root)
        return this.small+this.large
    }
}

const tree=new BST
tree.insert(8)
tree.insert(16)
tree.insert(4)
tree.insert(5)
tree.insert(9)
tree.insert(12)
tree.insert(13)
tree.insert(15)
console.log(tree.sum(tree.root))
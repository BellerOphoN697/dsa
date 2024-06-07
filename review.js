insert (data)
{
    const newNode=new Node;
    newNode.data=data
    if(data>node.data){
        
        if(node.left==null){
            
            node.left=newNode
        }
        else{
            if(node.left.data>data){
                node.left.left=newNode
            }
            else{
                node.left.right=newNode
            }
        }
    }
    else{
        if(node.right==null){
            
            node.right=newNode
        }
        else{
            if(node.right.data<data){
                node.right.right=newNode
            }
            else{
                node.right.left=newNode
            }     
        }
    }
}






// ------------------  11 May 2024 -------------------------


// class Node{
//     constructor(){
//         this.value=null;
//         this.right=null;
//         this.left=null;
//     }
// }

// class Tree{
//     constructor(){
//         this.root=null
//     }
    
//     insert(value){
//         let newNode=new Node(value)
//         newNode.value=value

//         if(this.root==null){
//             this.root=newNode
//         }
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(node,newNode){
//         if(node.value<newNode.value){
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
//     ifBalanced(node){
        
//         if(node.root==null){
//             console.log("tree is empty")
//         }

//         else if(node.left == null && node.right==null){
//             console.log("tree is only having root element");
//         }
//         else if (node.left != null && node.right==null || node.left==null && node.right!=null){
//             console.log("tree is unbalanced")

//         }
//         else{
//             const check=this.ifBalanced(node.left) && this.ifBalanced(node.right)
//             if(check){
//                 console.log("tree is balanced");
//             }
//         }
//     }
// }


// let tree=new Tree()
// tree.insert(9)
// tree.insert(15)
// tree.insert(2)
// tree.insert(12)
// tree.insert(8)
// tree.insert(10)
// console.log(tree)
// tree.ifBalanced(tree)
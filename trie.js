// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }
//     insert(word) {
//         let node = this.root;
//         console.log(node)
//         for (let char of word) {
//             console.log(char)
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }
//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }
//     startsWith(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }
// const trie = new Trie();
// trie.insert("apple");
// // console.log(trie.search("apple"));
// // console.log(trie.search("app"));
// // console.log(trie.startsWith("app"));
// trie.insert("app");
// // console.log(trie.search("app"));








// class Treenode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Tree{
//     constructor(){
//         this.root=new Treenode
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Treenode
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true

//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
//     prefix(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
// }

// const tree=new Tree
// tree.insert('apple')
// console.log(tree.prefix('apple'))





// class Node{
//     constructor(value){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
//     prefix(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
// }

// const tree=new Trie
// tree.insert("word")
// console.log(tree.prefix("word"))


// class Node{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             console.log(char)
//             if(!node.children[char]){
//                 node.children[char] = new Node();
//             }
//             node=node.children[char]
//         }
//         node.isEnd = true;
// }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
//     prefix(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true

//     }
// }

// const tree=new Trie()
// tree.insert("word")
// console.log(tree.search("word"))


// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEndOfWord
//     }
//     prefix(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }


// }

class Node{
    constructor(){
        this.children={}
        this.end=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node
            }
            node=node.children[char]

        }
        node.end=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.end
    }
    prefix(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}


const tree=new Trie()
tree.insert("word")
console.log(tree.prefix("wos"))

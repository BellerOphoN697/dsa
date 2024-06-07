let arr1=[2,5,6,8,9,11,15,18],
arr2=[1,2,3,4,5,6]

// 3. Search
let key=8
for(i=0;i<arr1.length;i++){
    if (arr1[i]===key){
        console.log("Item found in location "+i)
        return
    }
    
}
console.log("Item not found")


// 2. Array Max and Min
const max=Math.max(...arr1)
const min=Math.min(...arr1)
console.log("Max is "+max+" and Min is "+min)


// 1. Average in array
// const sum=arr1.reduce((acc,curr)=>{
//     acc=acc+curr
//     return acc
// })
// let avg=sum/arr1.length
// console.log("Average of arr1 is "+avg)
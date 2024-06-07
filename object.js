array=[{ab:2},{bc:10},{cd:11}]
sum=0
for(i=0;i<array.length;i++)
{
    obj=array[i]
    for(let key in obj)
        {
            sum+=obj[key]
        }

}
console.log(sum)
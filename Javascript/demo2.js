class demo2
{
    constructor(array, target)
    {
        this.array = array;
        this.target = target;
    }
    find()
    {
        let target = this.target;
        let arrays = this.array;
        let results = [];
        let i = 0;
        let j = arrays.length -1;
        let sum;
        while(i < j)
        {
            sum = arrays[i] + arrays[j];
            if(sum < target)
            {
                i++;
            }else if(sum > target)
            {
                j--;
            }else
            {
                results.push([i,j]);
                i++;
            }
        }
        // console.log(JSON.stringify(results));
        return results;
    }
   newNum()
    {
        let flag = true;
        let i = 0;
        let arr = [];
        while(flag)
        {
            i++;
            arr.push(Math.floor(Math.random()*11));
            if(i == 10000000)
            {
                flag = false
            }
        }
        return arr;
    }
}
demo = new demo2();
let arr = demo.newNum().sort();
var beginTime = +new Date();
demo2 = new demo2(arr,8);
demo2.find();
var endTime = +new Date();
console.log(endTime - beginTime);

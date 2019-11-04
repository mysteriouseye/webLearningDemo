function tools(nums,target)
{
    const numMap = new Map();
    for(let i = 0; i < nums.length ; i++){
        const secondNum = target - nums[i];
        if (secondNum in numMap){
            // console.log(numMap[secondNum], i);
        }
        numMap[nums[i]] = i;
    }
}
function newNum()
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
let arr = newNum();
var beginTime = +new Date();
tools(arr,8);
var endTime = +new Date();
console.log(endTime - beginTime);
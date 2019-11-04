var twoSum = function(nums, target) {
    let first = 0;
    let second = 1;
    for(let i = 0; i < nums.length; i++){
        let look = target - nums[i];
        for(let j = 0; j < i; j++){
            if(nums[j] == look){
                console.log(j,i);
                // return [j,i];
            }
        }
    }
};
function newNum()
{
    let flag = true;
    let i = 0;
    let arr = [];
    while(flag)
    {
        i++;
        arr.push(Math.floor(Math.random()*11));
        if(i == 100)
        {
            flag = false
        }
    }
    return arr;
}
let arr = newNum();
var beginTime = +new Date();
twoSum(arr, 8);
var endTime = +new Date();
console.log(endTime - beginTime);
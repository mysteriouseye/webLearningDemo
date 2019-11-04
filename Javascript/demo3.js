var twoSum = function(nums, target) {
        var first = 0;
        var second = 1;
        var flag = true;
        while(flag)
        {
            var firstnumber = nums[first];
            var secondnumber = nums[second];
            if(firstnumber + secondnumber == target)
            {
                console.log(first,second);
                return [first,second];
                flag = false;
            }else{
                if(second < nums.length){
                    second++;
                }else{
                    first++;
                    second = first+1;
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
        if(i == 10)
        {
            flag = false
        }
    }
    return arr;
}
let arr = newNum();
console.log(arr);
var beginTime = +new Date();
twoSum(arr, 8);
var endTime = +new Date();
console.log(endTime - beginTime);
/* 
给定一个整数数组 nums 和一个目标值 target， 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。 但是， 你不能重复利用这个数组中同样的元素。

示例：
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回[0, 1]
*/

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
  let obj = {};
  let len = nums.length;
  for (let i = 0; i<len; i++){
    let now = nums[i];
    console.log(now)
    // 如果hash表已有与当前值之和为目标值，直接返回结果，否则将当前值存入hash表
    if (obj.hasOwnProperty(target - now)) {
      return [obj[target - now], i]
    }
    // 特殊情况，有重复数字时，不存入新的下标。
    if (!obj.hasOwnProperty(now)){
      obj[now] = i;
    }
  }
};

module.exports = twoSum;
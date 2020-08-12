/*
 * @Author: gongzhizhen
 * @Date: 2019-05-24 10:51:47
 * @LastEditTime: 2019-05-24 11:15:03
 * @LastEditors: gongzhizhen
 */
/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀， 返回空字符串 ""。

示例 1:

输入: ["flower", "flow", "flight"]
输出: "fl"

示例 2:

输入: ["dog", "racecar", "car"]
输出: ""
解释: 输入不存在公共前缀。

说明:
  所有输入只包含小写字母 a - z。
*/


/**
 * @param {string[]} strs
 * @return {string}
 */

 
var longestCommonPrefix = function (strs) {
  let arr = [];
  // 取第一个字符串
  let fisrtStr = strs[0];
  // 特殊情况，空字符串
  if (!fisrtStr) {
    return ''
  }
  // 遍历第一个字符串的每个字符
  for (let i = 0; i < fisrtStr.length; i++) {
    let count = 0;
    // 将第一个字符串的每个字符与数组中其他字符串的对应字符比较
    for (let j = 1; j < strs.length; j++){
      // 如果遇到不同时，跳出循环
      if(strs[j][i] != fisrtStr[i]){
        break;
      }
      // 相同则加1记录
      count++;
    }
    // 记录相同的字符，如果count不等于strs.length-1时，表示该字符不是公共字符，此时结束循环
    if (count == strs.length-1){
      arr.push(fisrtStr[i])
    }else{
      break;
    }
  }
  // console.log(res);
  return arr.join('');
  
};


module.exports = longestCommonPrefix;
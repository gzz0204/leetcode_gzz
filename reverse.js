/*
 * @Author: gongzhizhen
 * @Date: 2019-05-22 19:03:41
 * @LastEditTime: 2019-05-23 16:45:00
 * @LastEditors: gongzhizhen
 * 
 * 给出一个 32 位的有符号整数， 你需要将这个整数中每位上的数字进行反转。
  示例 1:
    输入: 123
    输出: 321

  示例 2:
    输入: -123
    输出: -321

  示例 3:
    输入: 120
    输出: 21
  
  注意:假设我们的环境只能存储得下 32 位的有符号整数， 则其数值范围为[−231, 231− 1]。 请根据这个假设， 如果反转后整数溢出那么就返回 0。
 */

var reverse1 = function(x) {
  let arr = x.toString().split("");
  let str;
  let res;
  const Max = Math.pow(2, 31);
  // 去除末尾的0
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[arr.length - 1] != 0) {
      break;
    } else {
      arr.splice(-1, 1);
    }
  }
  // 负数去掉符号翻转，再加上符号
  if (x < 0) {
    arr.splice(0, 1);
    arr.push('-');
    str = arr.reverse().join("");
    res = +str < -Max ? 0 : +str;
  } else if (x>0) {
    str = arr.reverse().join('');
    res = +str > Max - 1 ? 0 : +str;
  } else {
    res = x;
  }
  console.log(res)
  return res
};

// 数学算法 
/*
* pop operation:
  pop = x % 10;
  x /= 10;

* push operation:
  temp = rev * 10 + pop;
  rev = temp; 
*/
var reverse2 = function(x) {
  if (x==0) return x;
  const val = Math.pow(2, 31);
  const Max = val -1;
  const Min = -val;
  let res = 0;
  let pop;
  while (x) {
    pop = x%10;
    x = parseInt(x / 10);
    if (res > (Max-pop) / 10 ) return 0;
    if (res < (Min-pop) / 10) return 0;
    res = res*10+pop;
  }
  return res;
};

module.exports = reverse1;
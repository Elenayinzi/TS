/**
 * 类型断言
 */

export {}

const nums = [110, 120, 119, 112]

const res = nums.find(i => i > 0)

//const square = res * res  //res可能未定义

const num1 = res as number //断言的方式定义成整型

const num2 = <number>res  //JSX下不能使用，<>标签会冲突

const square = num1 * num1
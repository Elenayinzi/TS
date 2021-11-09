"use strict";
/**
 * 类型断言
 */
Object.defineProperty(exports, "__esModule", { value: true });
var nums = [110, 120, 119, 112];
var res = nums.find(function (i) { return i > 0; });
//const square = res * res  //res可能未定义
var num1 = res; //断言的方式定义成整型
var num2 = res; //JSX下不能使用，<>标签会冲突
var square = num1 * num1;
//# sourceMappingURL=11-type-assertions.js.map
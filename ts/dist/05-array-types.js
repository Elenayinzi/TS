"use strict";
/**
 * 数组类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3, 6);
//# sourceMappingURL=05-array-types.js.map
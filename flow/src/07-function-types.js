/**
 * 函数类型：函数作为参数时注解方式，函数签名的方式
 * @flow
 */

function foo (callback: (string, number) => void) {
    callback('string', 100)
}

foo( function (str: string, n: number) {
    //返回空
})
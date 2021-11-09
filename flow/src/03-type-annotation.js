/**
 * 类型注解,参数，变量，函数返回值都可以注解
 * @flow
 */

function square(n:number) {
    return n * n
}

let num: number = 100

function foo(): number {
    return 100
}

function test() : void {
    //没有返回值的函数标注为void
}
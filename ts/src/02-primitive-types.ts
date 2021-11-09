/**
 * 原始数据类型
 */

// 和flow的不同在于，string,number,boolean在非严格模式下可以允许空值，严格模式不可
const a: string = 'foo'

const b: number = 100 //NaN//Infinity

const c: boolean = true //false

//const aa: string = null

const d: void = undefined

const e: null = null

const g: undefined = undefined

const h: symbol = Symbol()
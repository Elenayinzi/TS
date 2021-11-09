/**
 * 特殊类型
 * @flow
 */

const a: 'foo' = 'foo'  //字面量类型

const type: 'success' | 'warning' = 'success' //联合类型

type StringOrNumber = string | number  //type关键字取别名

const b: StringOrNumber = 'string' //100

//maybe类型,?加上后可以是null/undefined
const gender: ?number = undefined //null //100

//Mixed,强类型，会检查语法错误

function passMixed (value: mixed) {
    // value.substr(1)
    // value * value
    if(typeof value === 'string') {
        value.substr(1)
    }
    if(typeof value === 'number') {
        value * value
    }
}

passMixed('string')

passMixed(100)

//Any，弱类型，不会检查语法错误

function passAny(value: any) {
    value.substr(1)
    value * value
}

passAny('string')
passAny(100)
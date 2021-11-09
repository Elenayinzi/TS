/**
 * 对象类型
 * @flow
 */

const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100}

//？表示该属性可有可无
const obj2: { foo?: string, bar: number } = { bar: 100}

//键值对的方式

const obj3: { [string] : string} = {}

obj3.key1 = 'value1'
obj3.key2 = 'value2'
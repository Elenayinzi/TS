/**
 * 类（class）
 */

export {}

class Person {
    //es7的用法
    public name: string
    private age: number = 10
   protected gender: boolean
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }
    sayHi (msg: string): void {
        console.log(`I am ${this.name},${msg}`)
        console.log(this.age)
    }
}

class Student extends Person {
    private constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender)
    }

    static create (name: string, age: number) {
        return new Student(name, age)
    }
}

const tom = new Person('tom', 18)
console.log(tom.name)
//console.log(tom.age) //私有的不能访问
//console.log(tom.gender) //受保护的不能外部访问
//const jack = new Student() //私有构造函数的类不能实例化


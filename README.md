# TS 解决js自有类型问题,js是弱类型语言，动态类型语言
# npm view typescript version 查看本机TypeScript版本；npm view typescript versions 查看所有可使用的版本；
# 查看本地是否安装typescript，使用npm ls typescript
# 查看全局是否安装typescript，使用npm ls typescript -g
# 卸载typescript，使用npm uninstall typescript
## 强类型与弱类型语言（类型安全角度）
    1.强类型：语法上限制函数的实参类型必须与形参类型相同，jAVA，不允许任意的数据隐式类型转换
    编译阶段就会报错
    2.弱类型：语法上不限制实参（传入的参数）的类型，但运行上可能有问题，允许任意的数据隐式类型转换
    在代码运行阶段通过逻辑判断抛出错误
    3.变量类型允许随时改变并不是强弱类型语言的差别，python是强类型语言但是可以随时改变变量类型
## 静态类型与动态类型语言（类型检查角度）
    1.静态类型：一个变量声明时它的类型就是明确的，声明过后类型不允许再改变
    2.动态类型：运行阶段才能够明确一个变量的类型，变量的类型可以随时发生变化，变量没有类型，变量的值才是有类型的
## javascript自有类型系统的问题
## Flow静态类型检查方案
## TypeScript语言规范与基本应用
### js是弱类型动态类型的语言，缺失类型系统的可靠性，脚本语言，不需要编译，以前应用简单，现在js应用规模变大
### 弱类型的问题：运行时才会抛出异常错误；函数参数类型不明确导致的函数功能结果改变；对象的索引错误使用；
### 强类型的优势：错误更早暴露；代码更智能，编码更加准确；重构更牢靠；减少不必要的类型判断；
## Flow-facebook推出的
    1.js的静态类型检查器，一个小工具，以一个npm模块的形式工作的

    2.通过添加类型注解的方式来标注参数或者变量的类型

    3.:type (类型注解)，flow从语法上就可以检测类型是否正确，有需要的地方注解即可

    4.注解可以在运行之前要去掉，手动删除或者/使用babel/官方方式去除自动去除，不影响生产环境
       a. yarn add flow-remove-types --dev；yarn flow-remove-types 代码目录 -d 输出目录

       b. 使用babel: yarn add @babel/core @babel/cli @babel/preset-flow --dev;配置.babelrc文件;yarn babel src -d dist

    5.新建flow demo,yarn init; yarn add flow-bin --dev; yarn flow init; yarn flow; yarn flow stop;

    6.文件头部要写：//@flow；才会使用flow检查文件

    7. flow开发工具插件： flow language support

    8.类型推断：推断出参数或者变量的类型

    9.类型注解：参数，变量，函数返回值都可以注解

    10.原始类型: primitive type

    11.数组类型：array type

    12.对象类型：object type

    13.函数类型：参数（参数:type）和返回值类型(函数名():type)注解;函数作为参数时的注解方式；

    14.特殊类型：字面量类型（限制变量必须是某一个值);联合类型（1｜2｜3）；使用type 关键字给类型取别名；

    15.Mixed和Any：Mixed:任何类型（强类型）；Any:任何类型（弱类型）；
    
    16.type类型文档：https://www.saltycrane.com/cheat-sheets/flow-type/latest/

    17.运行环境API:内置对象
## TypeScript，相比flow，功能更为强大，生态更健全更完善
    1.javascript的超集，自有类型系统，最终还是编译成js运行,ts= js + 自有类型系统 + ES6+

    2.缺点：语言本身增加了很多概念接口，泛型等；初期会增加成本

    3.渐进式语言：使用js的方式编写，加入新特性

    4.安装typescript：npm install typescript; yarn init; yarn add typescript --dev; yarn tsc 目录（执行ts文件）
    
    5.配置文件：yarn tsc --init;生成配置文件后配置成功执行yarn tsc命令配置文件才生效

    6.原始数据类型

    7.标准库声明：在配置文件中修改target：es2015;|| lib:['ES2015','DOM'];标准库就是内置对象所对应的声明；

    8.中文错误消息，ts支持多语言：yarn tsc --locale zh-CN

    9.作用域问题：变量命名冲突问题

    10.Object类型：对象，数据，函数

    11.数组类型:Array Types

    12.元组类型：tuple type-明确数组元素数量和类型的数组

    13.枚举类型：给一组数值取个名字；一个枚举中只会存在几个固定的值；

    14.函数类型：function types

    15.任意类型：any type

    16.隐式类型推断: type inference

    17.类型断言：type assertions

    18.接口: interfaces,是一种约定,约束一个对象的结构

    19.类：描述一类具体事物的抽象特征

    20.类的访问修饰符：private(只能在类内部使用)；public(公有成员是默认的)；protected(受保护成员，也不能在类的外部访问，但是可以在子类中访问);只读属性readonly

    21.抽象类

    22.泛型：generics,定义函数，接口，类时没有声明具体类型，使用时才传递一个具体类型

    23.类型声明：declare function 名称(input: string): string
    //yarn add lodash

    24.用Parcel打包TypeScript: yarn add --dev parcel@next

    25.mac升级node:查看当前版本-node -v; 清除缓存-npm cache clean -f; 安装n模块-npm install -g n; 更新升级node-n latest
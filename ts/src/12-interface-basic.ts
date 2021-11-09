/**
 * 接口
 */
export {}

interface Post {
    title: string
    content: string
    subtitle?: string  //可选成员
    readonly summary: string //只读成员
}

function printPost (post: Post) {
    console.log(post.title)
    console.log(post.content)
}

printPost({
    title: 'Hello TS',
    content: 'A superset',
    summary: 'aa'
})

interface Cache {
    [props: string]: string
}
const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'
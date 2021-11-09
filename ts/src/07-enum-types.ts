/**
 * 枚举
 */

export {}

enum PostStatus {
    Draft = 0,
    Unpublished = 1,
    Published = 2
}

enum PostStatus1 {
    Draft = 6,
    Unpublished,
    Published
}

enum PostStatus2 {
    Draft,
    Unpublished,
    Published
}

enum PostStatus3 {
    Draft = 'aaa',
    Unpublished = 'bbb',
    Published = 'ccc'
}

const post = {
    title: 'Hello TypeScript',
    status: PostStatus.Draft
}

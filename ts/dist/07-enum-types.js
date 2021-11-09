"use strict";
/**
 * 枚举
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
    PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {}));
var PostStatus1;
(function (PostStatus1) {
    PostStatus1[PostStatus1["Draft"] = 6] = "Draft";
    PostStatus1[PostStatus1["Unpublished"] = 7] = "Unpublished";
    PostStatus1[PostStatus1["Published"] = 8] = "Published";
})(PostStatus1 || (PostStatus1 = {}));
var PostStatus2;
(function (PostStatus2) {
    PostStatus2[PostStatus2["Draft"] = 0] = "Draft";
    PostStatus2[PostStatus2["Unpublished"] = 1] = "Unpublished";
    PostStatus2[PostStatus2["Published"] = 2] = "Published";
})(PostStatus2 || (PostStatus2 = {}));
var PostStatus3;
(function (PostStatus3) {
    PostStatus3["Draft"] = "aaa";
    PostStatus3["Unpublished"] = "bbb";
    PostStatus3["Published"] = "ccc";
})(PostStatus3 || (PostStatus3 = {}));
var post = {
    title: 'Hello TypeScript',
    status: PostStatus.Draft
};
//# sourceMappingURL=07-enum-types.js.map
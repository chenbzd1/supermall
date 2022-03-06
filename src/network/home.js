import { request1 } from "./request";
//记得导出
export function gethomemultidatem() {
    return request1({
        url: './home/multidata'
            // url: 'banner'
    })
}

export function gethomemultidatesm(type, page) {
    return request1({
        url: './home/data',
        // url: 'banner',
        params: {
            type,
            page
        }
    })
}
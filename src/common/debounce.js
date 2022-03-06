export function debounce(fuc, delay) {
    // 写在这里就不用一直声明一个定时器了那样子防抖多少就开辟了多少个timer
    let timera = null

    //不是立即执行,返回一个函数需要时再调用
    return function(...num) {
        if (timera) {
            clearTimeout(timera)
        }
        timera = setTimeout(() => {
            fuc.apply(this, num)
        }, delay)
    }
}
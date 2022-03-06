import { request1 } from "./request";

export function getdetaildata(data) {
    // console.log(data);
    // 记得返回一个promise值
    return request1({
        url: './detail',
        params: {
            iid: data
        }
    })
}

export function getrecommend() {
    return request1({
        url: '/recommend'
    })
}

export class Goods {
    constructor(columns, itemInfo, services) {
        this.title = itemInfo.title;
        this.nprice = itemInfo.price;
        this.oprice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.discountbg = itemInfo.discountBgColor
            // 有组的以组为单位,无组以个体为单位
        this.columns = columns;
        this.services = services;
    }
}

export class ShopInfo {
    constructor(shopinfo) {
        this.goods = shopinfo.cGoods;
        this.csells = shopinfo.cSells;
        this.name = shopinfo.name;
        this.score = shopinfo.score;
        this.logo = shopinfo.shopLogo;
    }
}

export class ItemInfo {
    constructor(info, rule) {
        this.set = info.set;
        this.tables = rule.tables[0]
    }
}
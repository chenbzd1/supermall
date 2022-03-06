import Vuex from "vuex"
import Vue from "vue"


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartgoods: []
    },
    mutations: {
        addcartgoods(state, cartgoodsitem) {
            cartgoodsitem.count += 1

        },
        addcartgoodes(state, cartgoodsitem) {
            state.cartgoods.push(cartgoodsitem)
        },
        isselect(state, istrue) {
            if (istrue) {
                // 判断,要先知道有几种状态,每种状态分别会发生什么事
                state.cartgoods.forEach((item) => {
                    item.checked = false
                })
            } else {
                state.cartgoods.forEach((item) => {
                    item.checked = true
                })
            }
        },

        changechecked(state, index) {
            state.cartgoods[index].checked = !state.cartgoods[index].checked
        }
    },
    getters: {

    },
    actions: {

        addCart(comtext, cartgoodsitem) {
            return new Promise((resolve, reject) => {
                const iid = comtext.state.cartgoods.find((item) => {
                    return item.iid == cartgoodsitem.iid
                })
                if (iid) {
                    comtext.commit("addcartgoods", iid)
                        // iid.count += 1
                    resolve('该商品数量+1')
                } else {
                    // 默认在购物车那是被选中的,给它这么一个属性决定是否显示,一定会有那个一个布尔值,如歌不是服务器给的话
                    cartgoodsitem.checked = true;
                    // 应该有一个买了多少件的属性,也需要我们去添加,添加同一个东西多件时,这个加1就行
                    cartgoodsitem.count = 1;
                    // 给每一个对象模型都加一个类似iid,唯一标示就能找到这个数组对应的对象
                    cartgoodsitem.index = comtext.state.cartgoods.length;
                    comtext.commit("addcartgoodes", cartgoodsitem)

                    resolve('该商品成功添加到购物车')
                }
            })
        }
    },
    modules: {

    }

})


export default store
import VueRouter from "vue-router"
import Vue from "vue"
const category = () =>
    import ('views/category/Category.vue')
const home = () =>
    import ('views/home/Home.vue')
const shopcart = () =>
    import ('views/shopcart/ShopCart.vue')
const priflie = () =>
    import ('views/profile/Profile')
const detail = () =>
    import ("views/detail/Detail")

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [

    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta: { title: '首页', isnavbar: true }

    },
    {
        path: '/category',
        component: category,
        meta: { title: '分类', isnavbar: true }
    },
    {
        path: '/shopcart',
        component: shopcart,
        meta: { title: '购物车', isnavbar: true }
    },
    {
        path: '/profile',
        component: priflie,
        meta: { title: '我的', isnavbar: true }
    },
    {
        path: '/detail',
        component: detail,
        meta: { title: '详情页', isnavbar: false }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((function(to, from, next) {
    document.title = to.matched[0].meta.title
        // console.log(to);
    next()
}))


export default router;
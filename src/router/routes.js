const MSite = ()=>import('../pages/MSite/MSite.vue')
const Search = ()=>import('../pages/Search/Search.vue')
const Zenxuan = ()=>import('../pages/Zenxuan/Zenxuan.vue')
const Order = ()=>import('../pages/Order/Order.vue')
const Profile = ()=>import('../pages/Profile/Profile.vue')
const Categorys = ()=>import('../pages/Categorys/Categorys.vue')
const Sousuo = ()=>import('../pages/Sousuo/Sousuo.vue')
const Phone = ()=>import('../pages/Phone/Phone.vue')
const Email = ()=>import('../pages/Email/Email.vue')

//import MSite from '../pages/MSite/MSite.vue'
//import Search from '../pages/Search/Search.vue'
//import Zenxuan from '../pages/Zenxuan/Zenxuan.vue'
//import Order from '../pages/Order/Order.vue'
//import Profile from '../pages/Profile/Profile.vue'
//import Categorys from '../pages/Categorys/Categorys.vue'
//import Sousuo from '../pages/Sousuo/Sousuo.vue'
//import Phone from '../pages/Phone/Phone.vue'
//import Email from '../pages/Email/Email.vue'

export default [  
    { 
        path: '/msite',
        component: MSite,
        meta: { 
            isShowFooter:true
         }
    },
    { 
        path: '/categorys/:id?',
        component: Categorys,
        meta: { 
            isShowFooter:true
         }
       
    },
    { 
        path: '/search',
        component: Search,
        meta: { 
            isShowFooter:true
         }
    },
    { 
        path: '/zenxj',
        component: Zenxuan
    },
    { 
        path: '/order',
        component: Order,
        meta: { 
            isShowFooter:true
         }
    },
    { 
        path: '/profile',
        component: Profile,
    },
    { 
        path: '/sousuo',
        component: Sousuo,
    },
    { 
        path: '/profile/phone',
        component: Phone,
    },
    { 
        path: '/profile/email',
        component: Email,
    },
    {
        path:'',
        redirect: '/msite'
    }
]
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Zenxuan from '../pages/Zenxuan/Zenxuan.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Phone from '../pages/Phone/Phone.vue'

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
        path: '/phone',
        component: Phone,
    },
    {
        path:'',
        redirect: '/msite'
    }
]
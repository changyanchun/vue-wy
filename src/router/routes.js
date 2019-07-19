import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Categorys from '../pages/Categorys/Categorys.vue'

export default [  
    { 
        path: '/msite',
        component: MSite,
        meta: { 
            isShowFooter:true
         }
    },
    { 
        path: '/categorys',
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
        path: '/order',
        component: Order,
        meta: { 
            isShowFooter:true
         }
    },
    { 
        path: '/profile',
        component: Profile,
        meta: { 
            isShowFooter:true
         }
    },
    {
        path:'',
        redirect: '/msite'
    }
]
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Jzhu from './components/Jzhu.vue'
import Jzhu2 from './components/Jzhu2.vue'
import HelloWorld from './components/HelloWorld.vue';

const history=createWebHashHistory()
const router=createRouter({
    history,
    routes:[
        {path:'/',component:HelloWorld},
        {path:'/1',component:Jzhu},
        {path:'/2',component:Jzhu2}
    ]
})

const app=createApp(App).use(router).mount('#app')
console.log(app);


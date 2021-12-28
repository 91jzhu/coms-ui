import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue';
import './index.scss'

const history=createWebHashHistory()
const router=createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc},
        // {path:'/doc/switch',component:Switch},
        // {path:'/doc/button',component:Button},
        // {path:'/doc/dialog',component:Dialog},
        // {path:'/doc/tabs',component:Tabs},
    ]
})

const app=createApp(App).use(router).mount('#app')
console.log(app);


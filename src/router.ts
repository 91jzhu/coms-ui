import {createRouter, createWebHashHistory} from "vue-router";
import Doc from './views/Doc.vue'
import Home from './views/Home.vue';
import Switch from './components/Switch.vue'
import Dialog from './components/Dialog.vue'
import Button from './components/Button.vue'
import Tabs from './components/Tabs.vue'
import DocDemo from './components/DocDemo.vue'

const history=createWebHashHistory()

export const router=createRouter({
    history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
            children:[
                {path:'',component:DocDemo},
                {path:'switch',component:Switch},
                {path:'dialog',component:Dialog},
                {path:'button',component:Button},
                {path:'tabs',component:Tabs},
            ]},
    ]
})

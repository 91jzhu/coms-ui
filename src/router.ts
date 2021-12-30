import {createRouter, createWebHashHistory} from "vue-router";
import Doc from './views/Doc.vue'
import Home from './views/Home.vue';
import DocDemo from './components/DocDemo.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import Started from './views/Started.vue'

const history = createWebHashHistory()

export const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: '', component: DocDemo},
                {path: 'intro', component: Intro},
                {path: 'install', component: Install},
                {path: 'started', component: Started},
                {path: 'switch', component: SwitchDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'tabs', component: TabsDemo},
            ]
        },
    ]
})

<template>
  <div class="layout">
    <div class="content">

      <router-link to="/">
        <svg class="icon1">
          <use xlink:href="#icon-back">
          </use>
        </svg>
      </router-link>

      <aside v-show="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
import Topnav from '../components/Topnav.vue'

export default {
  name: "Doc.vue",
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('variable')
    return {asideVisible}
  }
}

</script>

<style lang="scss" scoped>
.icon1{
  position: absolute;
  top:6px;
  left:12px;
  z-index: 1;
  width:56px;
  height:56px;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: #f9eee3;
    }

  }
}

aside {
  background: #ffa27d;
  width: 150px;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10vh 0 20px 0;
  height: 100vh;
  color:#0b1c3e;
  > h2 {
    margin-bottom: 4px;
    padding:0 16px;
  }

  > ol {
    > li {
      > a{
        display: block;
        padding:12px 32px;
      }
      .router-link-active{
        background:#f9eee3 ;
      }
    }
  }
}

main {
  overflow: auto;
  position: absolute;
  bottom:0;
  right:0;
  height:90vh;
  width:calc(100% - 150px);
}
</style>
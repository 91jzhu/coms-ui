<template>
  <div class="layout">
    <div class="content">

        <div>
          <router-link to="/">
            <svg class="icon icon2">
              <use xlink:href="#icon-taiyang2"></use>
            </svg>
          </router-link>
        </div>

      <aside v-show="asideVisible">
        <div>
          <svg class="icon icon1">
            <use xlink:href="#icon-doc">
            </use>
          </svg>
        </div>

        <div class="title">
          <h2>文档</h2>
        </div>
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
        <div class="title">
          <h2>组件列表</h2>
        </div>
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
      <main @click="close">
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
.title{
  text-align: center;
}
.icon{
  width:56px;
  height:56px;
  &.icon1{
    position: absolute;
    top:2vh;
    left:75px;
    margin-left: -28px;
    z-index: 2;
  }
  &.icon2{
    position: absolute;
    top:1vh;
    left:50vw;
    margin-left: -28px;
  }
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
  }
}

aside {
  background: #ffa27d;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 96px 0 36px 0;
  height: 100vh;
  color: #0b1c3e;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        width: 150px;
        text-align: center;
        display: block;
        padding: 12px 32px;
      }

      .router-link-active {
        background: #f9eee3;
      }
    }
  }
}

main {
  overflow: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90vh;
  width: calc(100% - 156px);
}
</style>
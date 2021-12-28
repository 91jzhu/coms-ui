<template>
  <Topnav/>
  <div class="content">
    <aside v-show="asideVisible">
      <h2>组件列表</h2>
      <ol>
        <li><router-link to="/doc/switch">Switch 组件</router-link></li>
        <li><router-link to="/doc/button">Button 组件</router-link></li>
        <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
        <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
import Topnav from '../components/Topnav.vue'

export default {
  name: "Doc.vue",
  components: {Topnav},
  setup(){
    const asideVisible=inject<Ref<boolean>>('variable')
    return {asideVisible}
  }
}

</script>

<style lang="scss" scoped>
aside{
  background: lightblue;
  width:150px;
  padding: 20px 10px 20px 20px;

  >h2{
    margin-bottom: 4px;
  }
  >ol{
    >li{
      padding: 4px 0;
    }
  }
  @media (max-width:500px) {
    position: fixed;
    top:0;
    left: 0;
    padding:16px;
    padding-top: 70px;
  }
}
</style>
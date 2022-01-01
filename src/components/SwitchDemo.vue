<template>
  <div class="wrapper">
    <h1>Switch 组件示例</h1>
  </div>
  <Demo :component="SwitchDemo1"/>
  <Demo :component="SwitchDemo2"/>
  <div class="next">
    <router-link to="/doc/install"><Button>上一节: 安装</Button></router-link>
    <router-link to="/doc/button"><Button>下一节: Button 组件</Button></router-link>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from '../Demo/SwitchDemo/SwitchDemo1.vue'
import SwitchDemo2 from '../Demo/SwitchDemo/SwitchDemo2.vue'
import Demo from './Demo.vue'
import Button from "../lib/Button.vue";
export default {
  name: "SwitchDemo",
  components: {Button, Demo, SwitchDemo1,SwitchDemo2},
  setup() {
    return {SwitchDemo1,SwitchDemo2}
  }
}
</script>

<style lang="scss">
.next{
  display: flex;
  position: absolute;
  @media (max-width:500px){
    left:50%;
    transform: translateX(-50%);
    padding-bottom: 24px;
  }
}
.wrapper{
  display: flex;
  justify-content: flex-start;
  @media (max-width: 500px){
    justify-content: center;
  }
}
</style>
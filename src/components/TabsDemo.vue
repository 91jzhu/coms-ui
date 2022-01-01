<template>
  <div class="wrapper">
    <h1>Tabs 组件示例</h1>
  </div>
  <Demo :component="TabsDemo1"/>
  <div class="next">
    <router-link to="/doc/dialog"><Button>上一节: Dialog 组件</Button></router-link>
  </div>
</template>

<script lang="ts">
import TabsDemo1 from '../Demo/TabsDemo/TabsDemo1.vue'
import Demo from "./Demo.vue";
import Button from "../lib/Button.vue";

export default {
  name: "TabsDemo",
  components: {Demo, TabsDemo1,Button},
  setup() {
    return {Demo, TabsDemo1,Button}
  }
}
</script>

<style scoped lang="scss">
.next{
  display: flex;
  padding-bottom: 36px;
  position: absolute;
  @media (max-width:500px){
    left:50%;
    transform: translateX(-50%);
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

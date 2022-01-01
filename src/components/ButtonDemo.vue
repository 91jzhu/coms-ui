<template>
  <div class="wrapper">
    <h1>Button 组件示例</h1>
  </div>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
  <div class="next">
    <router-link to="/doc/switch"><Button>上一节: Switch 组件</Button></router-link>
    <router-link to="/doc/dialog"><Button>下一节: Dialog 组件</Button></router-link>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import ButtonDemo1 from '../Demo/ButtonDemo/ButtonDemo1.vue'
import ButtonDemo2 from '../Demo/ButtonDemo/ButtonDemo2.vue'
import ButtonDemo3 from '../Demo/ButtonDemo/ButtonDemo3.vue'
import ButtonDemo4 from '../Demo/ButtonDemo/ButtonDemo4.vue'
import ButtonDemo5 from '../Demo/ButtonDemo/ButtonDemo5.vue'

export default {
  components: {Demo, Button ,ButtonDemo1,ButtonDemo2,ButtonDemo3,ButtonDemo4,ButtonDemo5},
  setup() {
    return { ButtonDemo1,ButtonDemo2,ButtonDemo3,ButtonDemo4,ButtonDemo5};
  },
};
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
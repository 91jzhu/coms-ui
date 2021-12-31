<template>
  <h1>Button 组件示例</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
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
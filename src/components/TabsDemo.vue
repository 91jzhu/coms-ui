<template>
  <h1>Tabs 组件示例</h1>
  <Demo :component="TabsDemo1"/>
</template>

<script lang="ts">
import TabsDemo1 from '../Demo/TabsDemo/TabsDemo1.vue'
import Demo from "./Demo.vue";

export default {
  name: "TabsDemo",
  components: {Demo, TabsDemo1},
  setup() {
    return {Demo, TabsDemo1}
  }
}
</script>

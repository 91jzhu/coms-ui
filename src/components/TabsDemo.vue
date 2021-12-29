<template>
  <Tabs v-model:selected="tit">
    <Tab title="导航122222">内容1</Tab>
    <Tab title="导航2">内容2222</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {ref} from "vue";
export default {
  name: "TabsDemo",
  components: {Tab, Tabs},
  setup(){
    const tit=ref('导航2')
    return {tit}
  }
}
</script>

<style scoped>

</style>
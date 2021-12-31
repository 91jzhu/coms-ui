<demo>
点击即可切换 tab，使用 v-model 来动态绑定被选定的选项卡
</demo>
<template>
  <Tabs v-model:selected="tit">
    <Tab title="导航111">内容1</Tab>
    <Tab title="导航22">内容22</Tab>
    <Tab title="导航3">内容333</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import {ref} from "vue";
export default {
  components: {Tab, Tabs},
  setup(){
    const tit=ref('导航22')
    return {tit}
  }
}
</script>


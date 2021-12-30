<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <component :is="SwitchDemo1"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(SwitchDemo1.__sourceCode,Prism.languages.html,'html') "></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <component :is="SwitchDemo2" disabled/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html" v-html="Prism.highlight(SwitchDemo2.__sourceCode,Prism.languages.html,'html') "></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import SwitchDemo1 from '../Demo/SwitchDemo/SwitchDemo1.vue'
import SwitchDemo2 from '../Demo/SwitchDemo/SwitchDemo2.vue'

import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'


import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {SwitchDemo1, Switch,Button,SwitchDemo2},
  setup() {
    const bool1 = ref(false)
    const bool2 = ref(false)

    return {bool1, bool2,SwitchDemo1,SwitchDemo2,Prism}
  }
}
</script>

<style scoped lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}

</style>
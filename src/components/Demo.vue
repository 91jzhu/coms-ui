<template>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component"/>
      </div>
      <div class="demo-actions" >
        <Button @click="codeVisible=!codeVisible">查看代码</Button>
      </div>
      <div class="demo-code" v-show="codeVisible" :class="{wave:codeVisible}">
        <pre class="language-html" v-html="html"></pre>
      </div>
    </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'
import Button from '../lib/Button.vue'
import {computed, ref} from "vue";
export default {
  name: "Demo",
  props: {
    component: Object
  },
  components:{
    Button
  },
  setup(props){
    const html=computed(()=>{
      return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
    })
    const codeVisible=ref(false)
    return {Prism,html,codeVisible}
  }

}
</script>

<style scoped lang="scss">
.wave {
  animation: wave 0.82s linear;
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes wave {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.4;
  }
  100%{
    opacity: 1;
  }
}
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
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

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
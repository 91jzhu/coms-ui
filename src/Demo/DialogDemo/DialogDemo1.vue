<demo>
  常规方法打开 Dialog，你可以传入 ok 和 cancel 后的回调，并且如果 ok 的回调返回值为 false，将不会关掉 Dialog，
标题和内容通过插槽传递
</demo>
<template>
  <Dialog v-model:visible="vis" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>我的标题</strong>
    </template>
    <template v-slot:content>
      <a>我的内容</a>
    </template>
  </Dialog>
  <Button @click="toggle">dialog</Button>
</template>

<script lang="ts">
import {ref} from "vue";
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
export default {
  components:{Button,Dialog},
  setup(){
    const vis=ref(false)
    const toggle=()=>{
      vis.value=!vis.value
    }
    const f1=()=>{console.log('ok');}
    const f2=()=>{console.log('cancel')}
    return {toggle,vis,f1,f2,Button,Dialog}
  }
}
</script>

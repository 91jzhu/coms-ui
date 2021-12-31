<template>
  <h1>Dialog 组件示例</h1>
  <Demo :component="DialogDemo1"/>
  <Demo :component="DialogDemo2"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import DialogDemo1 from '../Demo/DialogDemo/DialogDemo1.vue'
import DialogDemo2 from '../Demo/DialogDemo/DialogDemo2.vue'
import {openDialog} from "../lib/openDialog";
import {ref} from "vue";
export default {
  name: "DialogDemo",
  components: {Button, Dialog,Demo,DialogDemo1,DialogDemo2},
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1=()=>{console.log('ok');show()}
    const f2=()=>{console.log('cancel')}
    const show=()=>{
      openDialog({title:'新标题',content:'新内容',ok:f1,cancel:f2})
    }
    return {toggle,x,f1,f2,show,Demo,DialogDemo1,DialogDemo2}
  }
}
</script>

<style scoped>

</style>
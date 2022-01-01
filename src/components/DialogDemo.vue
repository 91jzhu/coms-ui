<template>
  <div class="wrapper">
    <h1>Dialog 组件示例</h1>
  </div>
  <Demo :component="DialogDemo1"/>
  <Demo :component="DialogDemo2"/>
  <div class="next">
    <router-link to="/doc/button"><Button>上一节: Button 组件</Button></router-link>
    <router-link to="/doc/tabs"><Button>下一节: Tabs 组件</Button></router-link>
  </div>
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
<template>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2"/>
  <Button @click="toggle">dialog</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";
export default {
  name: "DialogDemo",
  components: {Button, Dialog},
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
      console.log(x.value);
    }
    const f1=()=>{console.log('ok')}
    const f2=()=>{console.log('cancel')}
    return {toggle,x,f1,f2}
  }
}
</script>

<style scoped>

</style>
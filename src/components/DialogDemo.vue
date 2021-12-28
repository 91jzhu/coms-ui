<template>
  <Dialog v-model:visible="x"/>
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
    return {toggle,x}
  }
}
</script>

<style scoped>

</style>
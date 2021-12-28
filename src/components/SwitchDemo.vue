<template>
  <Switch v-model:value="bool" :func="onClick"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from "vue";
export default {
  name: "SwitchDemo",
  components: {Switch},
  setup(){
    const bool=ref(false)
    const onClick=()=>{
      console.log('变化了')
    }
    return {bool,onClick}
  }
}
</script>

<style scoped>

</style>
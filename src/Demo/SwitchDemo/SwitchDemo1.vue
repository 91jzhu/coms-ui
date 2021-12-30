<template>
  <Switch v-model:value="bool1"></Switch>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from "vue";
export default {
  name: "SwitchDemo1",
  components:{Switch},
  setup(){
    const bool1=ref(false)
    return {bool1}
  }
}
</script>

<style scoped lang="scss">

</style>
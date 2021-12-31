<demo>
支持 disabled，同时也可以绑定 type
</demo>
<template>
  <Switch v-model:value="bool" disabled></Switch>
  <br/>
  <Switch v-model:value="bool" disabled type="right"></Switch>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from "vue";
export default {
  components:{Switch},
  setup(){
    const bool=ref(false)
    return {bool}
  }
}
</script>

<template>
  <div class="wrapper">
    <slot/>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "Tab",
  props:{
    title:{
      type:String,
      required:true
    }
  },

}
</script>

<style scoped lang="scss">

</style>
<template>
  <router-view/>
  <div>
  </div>
</template>

<script lang="ts">
import {provide, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    const asideVisible=ref(false)
    provide('variable',asideVisible)
  }
}
</script>

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
    const width=document.documentElement.clientWidth
    console.log(width);
    const asideVisible=ref(width > 500)
    provide('variable',asideVisible)
  }
}
</script>

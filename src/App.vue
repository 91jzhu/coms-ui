<template>
  <router-view/>
  <div>
  </div>
</template>

<script lang="ts">
import {provide, ref} from 'vue'
import {router} from "./router";
export default {
  name: 'App',
  setup(){
    const width=document.documentElement.clientWidth
    const asideVisible=ref(width > 500)
    provide('variable',asideVisible)
    router.afterEach(()=>{
      if(width<=500){
        asideVisible.value=false
      }
    })
  }
}
</script>

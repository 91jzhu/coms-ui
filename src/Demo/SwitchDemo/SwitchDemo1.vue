<demo>
 通过 v-model 绑定 Switch 的状态，可以传入 type 来决定方向，还可以传入函数，函数在 Switch 变化时执行
</demo>

<template>
  <Switch v-model:value="bool1"></Switch>
  <br/>
  <Switch v-model:value="bool2" type="right"></Switch>
  <br/>
  <Switch v-model:value="bool3" :func="func"></Switch>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from "vue";
export default {
  components:{Switch},
  setup(){
    const bool1=ref(false)
    const bool2=ref(true)
    const bool3=ref(false)
    const func=()=>{
      console.log('hi')
    }
    return {bool1,bool2,bool3,func}
  }
}
</script>

<template>
  <p>导航栏</p>
  <router-link to="1">去1</router-link>
  <br/>
  <router-link to="2">去2</router-link>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

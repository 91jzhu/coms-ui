<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{title}}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  name: "Tabs",
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs can only contains TabComponent')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title;
    })
    console.log(titles);
    return {defaults,titles}
  }
}
</script>

<style scoped>

</style>
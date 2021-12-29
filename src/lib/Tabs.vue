<template>
  <div class="tabs">
    <div class="tabs-nav">
      <div :class="{selected:t===selected}" @click="select(t)" class="tabs-nav-item" v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="tabs-content">
      <component :class="{selected:c.props.title===selected}"
          class="tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  name: "Tabs",
  props:{
    selected:String,
    required:false
  },
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
    const select=(title)=>{
      context.emit("update:selected",title)
    }
    return {defaults, titles,select}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
    &-item{
      display:none;
      &.selected{
       display: block;
      }
    }
  }
}
</style>
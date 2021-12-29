<template>
  <div class="tabs">
    <div class="tabs-nav" ref="container">
      <div :class="{selected:t===selected}"
           @click="select(t)"
           class="tabs-nav-item"
           v-for="(t,index) in titles"
           :ref="el=>{if(t===selected) selectedItem=el}"
           :key="index">{{ t }}
      </div>
      <div class="tabs-nav-indicator" ref="line"></div>
    </div>
    <div class="tabs-content">
      <component :class="{selected:c.props.title===selected}"
                 class="tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue'
import {computed, onMounted, onUpdated, ref} from "vue";

export default {
  name: "Tabs",
  props: {
    selected: String,
    required: false
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const line = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs can only contains TabComponent')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title;
    })
    const select = (title) => {
      context.emit("update:selected", title)
    }
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect();
      const {left: left1} = container.value.getBoundingClientRect()
      line.value.style.width = width + 'px'
      const {left: left2} = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      line.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
    return {defaults, titles, select, selectedItem, line, container}
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }

  }
}
</style>
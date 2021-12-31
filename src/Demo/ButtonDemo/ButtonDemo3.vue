<demo>
  通过设置 level 来决定按钮的等级
</demo>

<template>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <br/>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <br/>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import {computed} from "vue";
export default {
  components: {Button},
  props: {
    theme: {
      type: String,
      default: "button",
    },
    level: {
      type: String,
      default: "normal",
    },
  },
  setup(props) {
    const {theme, level} = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-level-${level}`]: level,
      };
    });
    return {classes,theme,level};
  }
}
</script>


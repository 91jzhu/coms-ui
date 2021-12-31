<demo>
  下列为一般用法，可以对其绑定点击事件，还可以通过绑定 theme 为普通按钮、链接按钮或者文本按钮
</demo>
<template>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
</template>

<script lang="ts">
import {computed} from "vue";
import Button from '../../lib/Button.vue'
export default {
  components:{Button},
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const onClick=()=>{
      console.log('hi')
    }
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      };
    });
    return {classes,theme,size,level,onClick};
  }
}
</script>

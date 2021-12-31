<demo>
  可以设置按钮的规格，属性可以混合设置
</demo>
<template>
    <div>
      <Button size="small">小小小</Button>
      <Button>普普通</Button>
      <Button size="big">大大大</Button>
    </div>
    <div>
      <Button size="small" theme="link">小小小</Button>
      <Button theme="link">普普通</Button>
      <Button theme="link" size="big">大大大</Button>
    </div>
    <div>
      <Button size="small" theme="text">小小小</Button>
      <Button theme="text">普普通</Button>
      <Button size="big" theme="text">大大大</Button>
    </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import {computed} from "vue";
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
  },
  setup(props) {
    const {theme, size} = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
      };
    });
    return {classes,theme,size};
  }
}
</script>


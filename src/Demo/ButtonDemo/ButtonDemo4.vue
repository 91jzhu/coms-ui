<demo>
  设置 disabled 来禁用按钮
</demo>
<template>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme} = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
      };
    });
    return {classes,theme};
  }
}
</script>


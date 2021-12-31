<demo>
也可以通过调用 openDialog 方法来打开，选项以对象的形式传入。
你可以在 ok 的回调中再次调用 openDialog 方法来再次打开 dialog，之前的 dialog 会留存，直到你点击 cancel 或者 ❌ 关闭。
如果你想要关闭最近的弹窗时关闭所有弹窗，将 ok 的回调的返回值设置为 true 即可
</demo>
<template>
  <Button @click="show">openDialog</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue'
import {openDialog} from "../../lib/openDialog";
export default {
  components: {Button, Dialog},
  setup() {
    const show = () => {
      openDialog({
        title: '第一层',
        content: '内容一',
        ok: () => {
          openDialog({
            title: '第二层', content: '内容二',
            ok: () => {
              openDialog({title: '第三层', content: '内容三'});
              return false
            }
          });
          return false
        },
        cancel: () => {
        }
      })
    }
    return {show}
  }
}
</script>

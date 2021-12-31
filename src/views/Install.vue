<template>
  <div class="wrapper">
    <div class="markdown-body">
      <h1>安装</h1>
      <div class="words">
        <p>打开终端运行下列命令:</p>
        <pre><code>
        npm install coms-ui
      </code></pre>
        <p>或</p>
        <pre><code>
        yarn add coms-ui
      </code></pre>
        <div class="next">
          <router-link to="/doc/started"><Button>下一节:开始使用</Button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "Install",
  components: {Button}
}
</script>

<style scoped lang="scss">

.wrapper {
  border: 3px dashed grey;
  border-radius: 12px;
  position: relative;
  min-width: 100%;
  padding: 20px 20px 40px;
  min-height: 40%;
  margin-top: 2px;
  > .markdown-body{
    padding:24px;
    background: #f9eee3;

    > .words {
      border-radius: 12px;
      margin-top: 24px;

      > .next {
        > a{
          text-decoration-line: none;
        }
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
    }
  }

}
</style>
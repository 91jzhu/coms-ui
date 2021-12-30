<template>
  <div class="wrapper">
    <div class="markdown-body">
      <h1>开始使用</h1>
      <div class="words">
        <p>请先<a href="#/doc/install">安装</a>本组件库</p>
        <p>然后在你的代码中写入下面的代码</p>
        <pre><code>import {Button, Tabs, Switch, Dialog} from "coms-ui"</code></pre>
        <p>就可以使用我提供的组件了</p>
        <h2>Vue 单文件组件</h2>
        <p>代码示例：</p>
        <pre><code>&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button, Tabs, Switch, Dialog} from "king-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>

        <div class="next">
          <router-link to="/doc/switch"><Button>下一节: Switch 组件</Button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: "Started",
  components:{Button}
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

  > .markdown-body {
    padding: 24px;
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
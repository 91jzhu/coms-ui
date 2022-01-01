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
          <router-link to="/doc/install"><Button>上一节: 安装</Button></router-link>
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
pre{
  @media (max-width: 500px){
    max-width:320px;
    overflow: auto;
    margin-left: -6px;
  }
}
.wrapper {
  border: 3px dashed grey;
  border-radius: 12px;
  position: relative;
  margin-top: 12px;
  padding:24px;
  display: flex;
  justify-content: flex-start;
  @media (max-width:500px){
    justify-content: center;
    max-width: 414px;
    overflow: hidden;
  }
  > .markdown-body{
    background: #f9eee3;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px){
      align-items: center;
    }
    > .words {
      border-radius: 12px;
      margin-top: 8px;
      padding-bottom: 8px;
      > .next {
        position: absolute;
        left:44.5%;
        transform: translateX(-44.5%);
        top:94%;
        display: flex;
        > a{
          text-decoration:none;
        }
      }
    }
  }
}
</style>
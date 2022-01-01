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
          <router-link to="/doc/intro"><Button>上一节: 介绍</Button></router-link>
          <router-link to="/doc/started"><Button>下一节: 开始使用</Button></router-link>
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
pre{
  @media (max-width: 500px){
    max-width:320px;
    overflow: auto;
  }
}
.wrapper {
  border: 3px dashed grey;
  border-radius: 12px;
  position: relative;
  margin-top: 12px;
  padding:24px;
  display: flex;
  justify-content: center;
  > .markdown-body{
    flex-grow: 1;
    background: #f9eee3;
    > .words {
      border-radius: 12px;
      margin-top: 24px;
      padding-bottom: 12px;
      > .next {
        position: absolute;
        left:44.5%;
        transform: translateX(-44.5%);
        top:90%;
        display: flex;
        > a{
          text-decoration:none;
        }
      }
    }
  }
}
</style>
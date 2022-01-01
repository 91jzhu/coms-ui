<template>
  <div class="wrapper">
    <div class="markdown-body">
      <h1>介绍</h1>
      <div class="words">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Coms-UI 是一个基于 Vue3 的组件，同时使用了 TypeScript 语法，
          是我在学习 Vue3 时进行编写的，不建议用于生产环境
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Github 含有几乎完整的提交历史，如果您有什么问题，可以给我留言。运行方法见 README.md
        </p>
        <div class="next">
            <router-link to="/doc/install"><Button>下一节:安装</Button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  name: "Intro",
  components: {Button}
}
</script>

<style scoped lang="scss">
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
    > h1{
      text-align: left;
    }
    > .words {
      border-radius: 12px;
      margin-top: 24px;
      padding-bottom: 12px;
      > .next {
        position: absolute;
        left:44.5%;
        transform: translateX(-44.5%);
        top:84%;
        > a{
          text-decoration:none;
        }
      }
    }
  }
}

</style>
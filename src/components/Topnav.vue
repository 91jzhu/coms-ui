<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-taiyang2"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "Topnav.vue",
  setup() {
    const asideVisible = inject<Ref<boolean>>('variable')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {toggleAside}
  }
}
</script>

<style lang="scss" scoped>

.topnav {
  //color:#3f2a4e;
  color:#433054;
  font-size: large;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg{
      width:32px;
      height:32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  .toggleAside {
    display: none;
    background: gray;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 4%;
    top: 50%;
    margin-top: -15px;
  }

  @media (max-width: 500px) {
    > .toggleAside {
      display: block;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
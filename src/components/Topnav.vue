<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
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
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
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
    left:4%;
    top:50%;
    margin-top: -15px;
  }

  @media (max-width: 500px) {
    > .toggleAside{
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
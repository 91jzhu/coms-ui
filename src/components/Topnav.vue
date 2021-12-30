<template>
  <div class="topnav">
    <div class="logo">
      <slot name="sun"/>
    </div>
    <ul class="menu">
      <slot name="doc"/>
    </ul>
    <slot name="toggleAside"/>
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
    display: block;
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
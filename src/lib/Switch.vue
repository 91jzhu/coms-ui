<template>
  <button :class="{checked:value}"
    @click="toggle">
    <span :class="type?type:'left'"></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props:{
    value:Boolean,
    type:String,
    func:Function
  },
  setup(props,context){
    const toggle=()=>{
      context.emit('update:value',!props.value)
      props.func?.()
    }
    return {toggle}
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  cursor: pointer;
  height: 1.375rem;
  width: 2.75rem;
  border: none;
  background: grey;
  border-radius: 11px;
  position: relative;
  > span.left {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 1.125rem;
    width: 1.125rem;
    background: white;
    border-radius: 11px;
    transition: left 250ms;
  }
  > span.right {
    position: absolute;
    top: 2px;
    right: 2px;
    height: 1.125rem;
    width: 1.125rem;
    background: white;
    border-radius: $h2/2;
    transition: right 250ms;
  }
  &.checked{
    background: blue;
    > span.left{
      left:calc(100% - 1.125rem - 2px)
    }
    > span.right{
      right:calc(100% - 1.125rem - 2px)
    }
  }
  &.checked:active{
    > span.left{
      width:20px;
      margin-left: -4px;
    }
    > span.right{
      width:20px;
      margin-right: -4px;
    }
  }
}
button:focus{
  outline: none;
}
</style>
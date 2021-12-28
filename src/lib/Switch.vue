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
      props.func()
    }
    return {toggle}
  }
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  cursor: pointer;
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  > span.left {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms;
  }
  > span.right {
    position: absolute;
    top: 2px;
    right: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: right 250ms;
  }
  &.checked{
    background: blue;
    > span.left{
      left:calc(100% - #{$h2} - 2px)
    }
    > span.right{
      right:calc(100% - #{$h2} - 2px)
    }
  }
  &.checked:active{
    > span.left{
      width:$h2+4px;
      margin-left: -4px;
    }
    > span.right{
      width:$h2+4px;
      margin-right: -4px;
    }
  }
}
button:focus{
  outline: none;
}
</style>
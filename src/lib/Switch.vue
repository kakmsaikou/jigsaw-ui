<template>
  <button class="jgso-switch" :class='{"jgso-checked":checked}' @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      checked: Boolean
    },

    setup(props, context) {
      const toggle = () => {
        context.emit('update:checked', !props.checked);
      };
      return {toggle};
    }
  };
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .jgso-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: calc($h / 2);
    position: relative;

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      width: $h2;
      height: $h2;
      background: white;
      border-radius: calc($h / 2);
      transition: all 250ms;
    }

    &.jgso-checked {
      background: #1890ff;

      span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      > span {
        width: $h2 + 4px;
      }
    }

    &.jgso-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>
<demo>支持 level</demo>

<template>
  <div>
    <Button level="main">大大大</Button>
    <Button level="normal">普普通</Button>
    <Button size="danger">小小小</Button>
  </div>
  <div>
    <Button level="main">大大大</Button>
    <Button level="normal" theme="link">普普通</Button>
    <Button size="danger" theme="link">小小小</Button>
  </div>
  <div>
    <Button level="main" theme="text">大大大</Button>
    <Button level="normal" theme="text">普普通</Button>
    <Button size="danger" theme="text">小小小</Button>
  </div>
</template>
<script>
  import Button from '../../lib/Button.vue'

  export default {
    components: {Button}
  }
</script>
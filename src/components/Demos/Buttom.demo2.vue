<demo>支持 size</demo>

<template>
  <div>
    <Button size="big">大大大</Button>
    <Button size="normal">普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="link">大大大</Button>
    <Button size="normal" theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button size="normal" theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>
<script>
  import Button from '../../lib/Button.vue'

  export default {
    components: {Button}
  }
</script>
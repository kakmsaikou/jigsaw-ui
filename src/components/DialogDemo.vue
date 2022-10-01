<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">Toggle</Button>
  <Dialog v-model:visible="x"
          dontCloseOnClickOverlay
          :ok="f1"
          :cancel="f2">
    <div>第一行文字</div>
    <div>第二行文字</div>
  </Dialog>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    components: {Dialog, Button},
    setup() {
      const x = ref(false);

      const toggle = () => {
        x.value = !x.value;
      };

      const f1 = () => {
        console.log('ok');
        return false;
      };

      const f2 = () => {
        console.log('cancel');
      };

      return {x, toggle, f1, f2};
    }
  };
</script>
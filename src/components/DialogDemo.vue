<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">Toggle</Button>
  <Dialog v-model:visible="x"
          dontCloseOnClickOverlay
          :ok="f1"
          :cancel="f2">
    <template v-slot:title>
      <strong>Hi</strong>
    </template>
    <template v-slot:content>
      Hello
      <div>World</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';
  import {openDialog} from '../lib/openDialog';

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

      const showDialog = () => {
        openDialog({
          title: '标题',
          content: '你好',
          ok() {
            console.log('ok');
          },
          cancel() {
            console.log('cancel');
          }
        });
      };

      return {x, toggle, f1, f2, showDialog};
    }
  };
</script>
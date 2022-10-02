<template>
  <h1>Dialog 示例</h1>
  <Demo :component='DialogDemo1'/>
  <Demo :component='DialogDemo2'/>
</template>
<script lang="ts">
  import Demo from './Demo.vue';
  import DialogDemo1 from './Demos/Dialog.demo1.vue';
  import DialogDemo2 from './Demos/Dialog.demo2.vue';


  export default {
    components: {Demo},
    setup() {
      return {DialogDemo1, DialogDemo2};
    }
  };
</script>
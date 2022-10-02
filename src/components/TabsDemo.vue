<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Demo :component="TabsDemo1"/>

</template>
<script lang="ts">
  import Demo from './Demo.vue';
  import TabsDemo1 from './Demos/Tabs.demo1.vue';
  import ButtonDemo1 from './Demos/Buttom.demo1.vue'

  export default {
    components: {Demo},
    setup() {
      return {TabsDemo1};
    }
  };
</script>
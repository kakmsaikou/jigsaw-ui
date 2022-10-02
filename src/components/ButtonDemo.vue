<template>
  <h1>Button 示例</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
</template>
<script lang="ts">
  import Demo from './Demo.vue';
  import ButtonDemo1 from './Demos/Buttom.demo1.vue'
  import ButtonDemo2 from './Demos/Buttom.demo2.vue'
  import ButtonDemo3 from './Demos/Buttom.demo3.vue'
  import ButtonDemo4 from './Demos/Buttom.demo4.vue'
  import ButtonDemo5 from './Demos/Buttom.demo5.vue'

  export default {
    components: {Demo},
    setup() {
      return {ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5};
    }
  };
</script>
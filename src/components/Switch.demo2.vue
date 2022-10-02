<template>
  <Switch v-model:checked="bool" disabled/>
</template>

<script lang="ts">
  import Switch from '../lib/Switch.vue';
  import {ref} from 'vue';

  export default {
    components: {Switch},
    setup() {
      const bool = ref(false);
      return {bool};
    }
  };
</script>Switch.demo1.vue

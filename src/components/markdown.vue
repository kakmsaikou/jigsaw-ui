<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      path: {
        type: String,
        require: true // 表示必填
      }
    },
    setup(props) {
      const content = ref<string>('');
      import(props.path)
          .then(result => {
            content.value = result.default;
          });
      return {content};
    }
  };
</script>
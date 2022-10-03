<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">

  export default {
    props: {
      content: {
        type: String,
        require: true // 表示必填
      }
    }
  };
</script>
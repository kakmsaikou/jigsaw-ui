<template>
  Tabs 组件
  <div v-for="(t, index) in titles" :key="index">{{t}}</div>
  <component v-for="c in components" :is="c"/>
</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    setup(props, context) {
      const components = context.slots.default();
      components.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须是 Tab');
        }
      });
      const titles = components.map((tag) => {
        return tag.props.title;
      });
      return {components, titles};
    }

  };
</script>
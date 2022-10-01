<template>
  <div class="jgso-tabs">
    <div class="jgso-tabs-nav">
      <div class="jgso-tabs-nav-item" v-for="(t, index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="jgso-tabs-content">
      <component class="jgso-tabs-content-item" v-for="c in components" :is="c"/>
    </div>
  </div>
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

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;

  .jgso-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
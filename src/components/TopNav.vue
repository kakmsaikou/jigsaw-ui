<template>
  <div class="top-nav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-jigsaw"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="menuButtonVisible" class="icon" @click="toggleMenu">
      <use xlink:href='#icon-menu'></use>
    </svg>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props: {
      menuButtonVisible: {
        type: Boolean,
        default: false
      }
    },

    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleMenu};
    }
  };

</script>


<style lang="scss" scoped>
  $color: #26325e;

  .top-nav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;

    > .logo {
      max-width: 6em;
      margin-right: auto;

      > svg {
        width: 40px;
        height: 40px;
      }
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    > .icon {
      width: 32px;
      height: 32px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .icon {
        color: #00b5fc;
        display: inline-block;
      }
    }
  }
</style>
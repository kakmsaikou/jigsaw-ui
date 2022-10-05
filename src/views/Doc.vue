<template>
  <div class="layout">
    <TopNav class="nav" menuButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>
          <use>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pintu"></use>
            </svg>
          </use>
          文档
        </h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pintu"></use>
          </svg>
          组件
        </h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';
  import {inject, Ref} from 'vue';

  export default {
    components: {TopNav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible};
    }
  };
</script>

<style lang="scss" scoped>
  $aside-index: 10;

  .router-link-active {
    text-decoration: underline;
  }

  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
    }

    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }

  aside {
    background: rgb(45,46,60);
    background: radial-gradient(circle, rgba(45,46,60,1) 0%, rgba(59,60,79,1) 100%);
    color: #999999;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 0 16px;
    height: 100%;
    z-index: $aside-index;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
      font-weight: 600;
    }

    > ol {
      > li {
        margin-bottom: 8px;
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;

          &.router-link-active {
            background: rgb(29,133,190);
            background: radial-gradient(circle, rgba(29,133,190,1) 0%, rgba(70,162,217,1) 100%);
            color: white;
            text-decoration: none;
            font-weight: 600;
          }
        }
      }
    }
  }

  main {
    overflow: auto;
  }
</style>
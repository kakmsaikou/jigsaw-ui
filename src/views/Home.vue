<template>
  <div class="layout">
    <div class="TopNavAndBanner">
      <img class="line3" src="../assets/line3.png" alt="">
      <TopNav/>
      <div class="banner">
        <div class="h1box">
          <h1>拼图 UI</h1>
          <img src="../assets/line2.png" alt="">
        </div>
        <h2>一个有点东西的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/kakmsaikou/jigsaw-ui">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    components: {TopNav}
  };
</script>

<style lang="scss" scoped>
  $blue: #4268fb;
  $border-radius: 4px;
  $color: #26325e;

  .layout {
    position: relative;

    .TopNavAndBanner {
      background: #fdf5f1;
      clip-path: ellipse(80% 60% at 50% 40%);
      position: relative;

      > .line3 {
        width: 105vw;
        min-width: 1000px;
        position: absolute;
        top: -15px;
        left: -15px;
        z-index: -1;
      }

      .banner {
        color: $color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .h1box {
          position: relative;

          > h1 {
            font-weight: 600;
            font-size: 56px;
            padding-bottom: 16px;
            position: relative;
            z-index: 2;
          }

          > img {
            position: absolute;
            width: 350px;
            height: 176px;
            top: -15px;
            left: -68px;
            z-index: 1;
          }
        }


        > h2 {
          padding-bottom: 16px;
        }

        > .actions {
          padding: 8px 0;

          a {
            margin: 0 8px;
            background: $blue;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }

    .features {
      margin: 64px auto;
      padding: 0 16px;

      @media(min-width: 800px) {
        width: 800px;


        > ul {
          > li {
            width: 50%;
          }
        }
      }

      @media(min-width: 1200px) {
        width: 1200px;
        > ul {
          > li {
            width: 33.3333%;
          }
        }
      }

      > ul {
        display: flex;
        flex-wrap: wrap;

        > li {
          margin: 16px 0;
          display: grid;
          justify-content: start;
          align-content: space-between;
          grid-template-areas:
      "icon title"
      "icon text";

          grid-template-columns: 80px auto;
          grid-template-rows: 1fr auto;

          > svg {
            grid-area: icon;
            width: 64px;
            height: 64px;
          }

          > h3 {
            grid-area: title;
            font-size: 28px
          }

          > p {
            grid-area: text
          }
        }
      }
    }
  }

</style>

<template>
  <div id="app">
    <!-- <router-view name="Header" /> -->
    <!-- <br /> -->
    <div class="container">
      <div class="jumbotron">
        <!-- <transition name="slide">
          <router-view />
        </transition> -->
        <h1>Vuex Setion</h1>
        <hr>
        <Result />
        <br>
        <Counter />
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'

export default {
  name: "App",
  components: {
    Counter, Result
  }
};
</script>

<style>
  .slide-leave-to {
    opacity: 0;
    transition: opacity 1s ease;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(30px);
    }
  }
</style>

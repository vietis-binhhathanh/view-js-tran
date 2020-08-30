<template>
  <div id="app">
    <router-view name="Header" />
    <br />
    <div class="container">
      <div class="jumbotron">
        <transition name="slide">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",  
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

<template>
  <div>
    <button class="btn btn-success" @click="increment">Increment</button>
    <br>
    <br>
    <button class="btn btn-success" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.$store.state.result++;
      this.$store.commit('incrementOp', 30);
    },
    decrement() {
      this.$store.state.result--;
    }
  }
}
</script>

<style>

</style>
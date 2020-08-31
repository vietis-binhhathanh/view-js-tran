<template>
  <div>
    <p>This is result: {{ tenResult }}</p>
    <p>This is name result: {{ nameResult }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
    'tenResult',
    'nameResult'
  ])
    // result() {
    //   // return this.$store.state.result;
    //   return this.$store.getters.tenResult;
    // },
    // nameResult() {
    //   return this.$store.getters.nameResult;
    // }
  },
}
</script>

<style>

</style>
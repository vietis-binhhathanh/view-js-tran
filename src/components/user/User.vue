<template>
  <div>
    <h1>This is User</h1>
    <br />
    <button class="btn btn-info" @click="backHome">Back to home</button>
    <br/>
    <br/>
    <router-view />

    <div style="height: 700px"></div>
    <h3 id="react">Some things</h3>
    <div style="height: 1700px"></div>
  </div>
</template>

<script>
// import UserDetail from './UserDetail'

export default {
  components: {
    // UserDetail
  },
  data() {
    return {
      x: 1,
    }
  },
  methods: {
    backHome() {
      this.$router.push('/');
    },
    
    goDetail() {
      this.$router.push(`/user/${this.x}`);
    }
  }
};
</script>
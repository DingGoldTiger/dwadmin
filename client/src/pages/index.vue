<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/b/:2" >HelloWord</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // this.$router.push({ path: '/test' })
  },
  component: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

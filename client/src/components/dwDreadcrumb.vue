<template>
  <div class="dw-dreadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right" >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" >
        <a :href="item.path" v-if="item.path">{{item.name}}</a>
        <span  v-else>{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'dwDreadcrumb',
  props: ['breadcrumbs'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
  computed: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dw-dreadcrumb{
    padding:20px 0;
  }
</style>

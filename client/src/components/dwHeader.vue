<template>
  <div class="el-row--flex">
    <div class="dw-logo">XXXlogo</div>
    <el-main class="is-justify-space-between el-row--flex dw-p0">
      <div class="dw-padleft-20">
        <el-radio-group v-model="isCollapse" >
          <div v-if="isCollapse"><i class="iconfont dw-icon-outdent"></i></div>
          <div v-else><i class="iconfont dw-icon-indent"></i></div>
        </el-radio-group>
      </div>
      <div class="dw-padright-40">steting</div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'dwHeader',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="scss">
  .dw-header{
    background-color: #3c8ebb;
    color: #fff;
    text-align: center;
    padding:0;
    line-height: 60px;
    .dw-logo{
      width:300px;
      background:#3c8ebb;
    }
    .dw-padleft-20{
      padding-left:20px;
    }
    .dw-padright-40{
      padding-right:40px;
    }
    .dw-p0{
      padding:0;
    }
  }
</style>


<template>
  <div class="navMenu">
    <label v-for="navMenu in navMenus" :key="navMenu.entity.id">
      <el-menu-item class="dw-menu-item" v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" :route="navMenu.entity.value"
                   >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <el-submenu class='dw-submenu' v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
                  :key="navMenu.entity.id" :data="navMenu" index="">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss">
.navMenu{
  text-align: left;
  background: #000;
  color:rgba(184,199,206,1);
  .dw-submenu{
    .el-submenu__title {
      color:rgba(184,199,206,1);
      font-size: 1.25rem;
      font-family: "Microsoft YaHei";
    }
  }
  .el-submenu [class^=el-icon-]{
    color:rgba(184,199,206,1);
  }
  .dw-menu-item{
    color:rgba(184,199,206,1);
    font-size: 1rem;
  }
}
</style>

<template>
  <div id='app'>
    <el-container class='dw-container'>
      <el-header class='dw-header'>
        <dw-header></dw-header>
      </el-header>
      <el-container >
        <el-aside  class='dw-aside ' style='width:300px'>
          <!--左侧菜单组件-->
          <el-menu
            default-active='/'
            class='el-menu-vertical-demo dw-height100'
            background-color='#000'
            active-text-color='#fff'
            router>
            <nav-menu :navMenus='leftMenus'></nav-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-row>
            <dw-dreadcrumb :breadcrumbs="breadcrumbs"></dw-dreadcrumb>
          </el-row>
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dwHeader from '@/components/dwHeader'
import navMenu from '@/components/navMenu'
import dwDreadcrumb from '@/components/dwDreadcrumb'
export default {
  name: 'App',
  components: {
    dwHeader, navMenu, dwDreadcrumb
  },
  data () {
    return {
      breadcrumbs: [],
      leftMenus: [{
        entity: {
          id: 1,
          parentMenuId: 0,
          name: 'systemManage',
          icon: 'el-icon-setting',
          alias: '系统管理',
          state: 'ENABLE',
          sort: 0,
          value: null,
          type: 'NONE',
          discription: '用于系统管理的菜单',
          createUserId: 1
        },
        id: '1',
        'childs': [
          {
            'entity': {
              'id': 3,
              'parentMenuId': 1,
              'name': 'roleManage',
              'icon': 'el-icon-loading',
              'alias': '权限管理',
              'state': 'ENABLE',
              'sort': 0,
              'value': '/system/role',
              'type': 'LINK',
              'discription': '用于权限管理的菜单',
              'createUserId': 1
            },
            'childs': null
          },
          {
            'entity': {
              'id': 4,
              'parentMenuId': 1,
              'name': 'authManage',
              'icon': 'el-icon-bell',
              'alias': '角色管理',
              'state': 'ENABLE',
              'sort': 1,
              'value': '/system/auth',
              'type': 'LINK',
              'discription': '用于角色管理的菜单',
              'createUserId': 1
            },
            'childs': null
          },
          {
            'entity': {
              'id': 2,
              'parentMenuId': 1,
              'name': 'menuManage',
              'icon': 'el-icon-edit',
              'alias': '菜单管理',
              'state': 'ENABLE',
              'sort': 2,
              'value': '/system/menu',
              'type': 'LINK',
              'discription': '用于菜单管理的菜单',
              'createUserId': 1
            },
            'childs': null
          },
          {
            'entity': {
              'id': 5,
              'parentMenuId': 1,
              'name': 'groupManage',
              'icon': 'el-icon-mobile-phone\r\n',
              'alias': '分组管理',
              'state': 'ENABLE',
              'sort': 3,
              'value': '/system/group',
              'type': 'LINK',
              'discription': '用于分组管理的菜单',
              'createUserId': 1
            },
            'childs': null
          }
        ]
      }]

    }
  },
  mounted () {
  },
  methods: {
  },
  watch: {
    $route: function (newV, oldV) {
      this.breadcrumbs = newV.meta
    }
  }
}
</script>

<style lang='scss'>
  html,body{
    width:100%;
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e2e1e1;
  width:100%;
  height:100%;
  .dw-container{
    width:100%;
    height:100%;
    .dw-aside{
      text-align: left;
      background: #000;
    }
  }
}
</style>

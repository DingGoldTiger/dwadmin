
const index = () => import('@/pages/index')
const system = () => import('@/pages/system/index')
const authManage = () => import('@/pages/system/auth')
const roleManage = () => import('@/pages/system/role')
const menuManage = () => import('@/pages/system/menu')
const groupManage = () => import('@/pages/system/group')

const routers = [
  {
    path: '/',
    name: '首页',
    component: index
  },
  {
    path: '/system',
    name: '系统管理',
    component: system,
    children: [
      {
        path: 'auth',
        name: '角色管理',
        component: authManage,
        meta: [
          {
            name: '系统管理',
          },
          {
            name: '角色管理',
            path: '/system/auth'
          }
        ]
      },
      {
        path: 'menu',
        name: '菜单管理',
        component: menuManage,
        meta: [
          {
            name: '系统管理',
          },
          {
            name: '菜单管理',
            path: '/system/menu'
          }
        ]
      },
      {
        path: 'role',
        name: '权限管理',
        component: roleManage,
        meta: [
          {
            name: '系统管理',
          },
          {
            name: '权限管理',
            path: '/system/role'
          }
        ]
      },
      {
        path: 'group',
        name: '分组管理',
        component: groupManage,
        meta: [
          {
            name: '系统管理',
          },
          {
            name: '分组管理',
            path: '/system/group'
          }
        ]
      }
    ]
  }
]
export default routers

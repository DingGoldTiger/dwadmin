
// import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home'
import index from '@/pages/index'

const routers = [
  {
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/home',
    name: 'home',
    component: home,
    props: true,
    alias: '/b'
  }
]

export default routers

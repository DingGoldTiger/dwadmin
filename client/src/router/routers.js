
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'

const routers = [
  {
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/test/:id',
    name: 'HelloWorld',
    component: HelloWorld,
    props: true,
    alias: '/b/:id'
  }
]

export default routers

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: () => import('../components/CreateUserComponent')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../components/ListUserComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditUserComponent')
  },
  {
    path: '/userLogin',
    name: 'userLogin',
    component: () => import('../components/LoginComponent')
  },
  {
    path: '/createProduct',
    name: 'createProduct',
    component: () => import('../components/CreateProductComponent')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/ListProductComponent')
  },
  {
    path: '/editProduct/:id',
    name: 'editProduct',
    component: () => import('../components/EditProductComponent')
  },
  {
    path: '/viewProduct/:id',
    name: 'viewProduct',
    component: () => import('../components/ViewProductComponent')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

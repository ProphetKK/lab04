import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
//import EventDetails from '@/views/EventDetails.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: '/event/:id/register',
        name: 'EventRegister',
        props: true,
        component: EventRegister
      },
      {
        path: '/event/:id/edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

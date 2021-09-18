import { createRouter, createWebHashHistory } from 'vue-router'
import PageOne from '../pages/PageOne.vue'
import PageTwo from '../pages/PageTwo.vue'
import PageThree from '../pages/PageThree.vue'
import PageFour from '../pages/PageFour.vue'
import PageSeven from '../pages/PageSeven.vue'
import CatalogFilms from '../pages/catalogFilm/CatalogFilms'



const routes = [
  {
    path: '/1',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/2',
    name: 'PageTwo',
    component: PageTwo
  },
  {
    path: '/3',
    name: 'PageThree',
    component: PageThree
  },
  {
    path: '/4',
    name: 'PageFour',
    component: PageFour
  },
  {
    path: '/7',
    name: 'PageSeven',
    component: PageSeven
  },
  {
    path: '/CatalogFilms',
    name: 'CatalogFilms',
    component: CatalogFilms,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

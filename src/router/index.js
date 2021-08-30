import { createRouter, createWebHashHistory } from 'vue-router'
// import PageOne from '../pages/PageOne.vue'
import PageTwo from '../pages/PageTwo.vue'
import PageThree from '../pages/PageThree.vue'
// import PageFour from '../pages/PageFour.vue'
// import PageFive from '../pages/PageFive.vue'
// import PageSix from '../pages/PageSix.vue'
// import PageSeven from '../pages/PageSeven.vue'
import CatalogFilms from '../pages/catalogFilm/CatalogFilms'
import CatalogFilmMonth from '../pages/catalogFilm/CatalogFilmMonth'
import CatalogFilmsWeekDay from '../pages/catalogFilm/CatalogFilmsWeekDay'

const routes = [
  // {
  //   path: '/1',
  //   name: 'PageOne',
  //   component: PageOne
  // },
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
  // {
  //   path: '/4',
  //   name: 'PageFour',
  //   component: PageFour
  // },
  // {
  //   path: '/5',
  //   name: 'PageFive',
  //   component: PageFive
  // },
  // {
  //   path: '/6',
  //   name: 'PageSix',
  //   component: PageSix
  // },
  // {
  //   path: '/7',
  //   name: 'PageSeven',
  //   component: PageSeven
  // },
  {
    path: '/CatalogFilms',
    name: 'CatalogFilms',
    component: CatalogFilms
  },
  {
    path: '/CatalogFilmsWeekDay',
    name: 'CatalogFilmsWeekDay',
    component: CatalogFilmsWeekDay
  },
  {
    path: '/CatalogFilmMonth',
    name: 'CatalogFilmMonth',
    component: CatalogFilmMonth
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

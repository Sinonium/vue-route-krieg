import { createRouter, createWebHashHistory } from 'vue-router'
import CatalogFilms from '../pages/catalogFilm/CatalogFilms'
import CatalogFilmMonth from '../pages/catalogFilm/CatalogFilmMonth'
import CatalogFilmsWeekDay from '../pages/catalogFilm/CatalogFilmsWeekDay'

const routes = [
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

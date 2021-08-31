import { createRouter, createWebHashHistory } from 'vue-router'
import CatalogFilms from '../pages/catalogFilm/CatalogFilms'
import CatalogFilmMonthMay from '../pages/catalogFilm/month/CatalogFilmMonthMay'
import CatalogFilmMonthJune from '../pages/catalogFilm/month/CatalogFilmMonthJune'
import CatalogFilmMonthSeptember from '../pages/catalogFilm/month/CatalogFilmMonthSeptember'
import CatalogFilmMonthJuly from '../pages/catalogFilm/month/CatalogFilmMonthJuly'
import CatalogFilmMonthNovember from '../pages/catalogFilm/month/CatalogFilmMonthNovember'
import CatalogFilmMonthOctober from '../pages/catalogFilm/month/CatalogFilmMonthOctober'
import SubscribeSchedule from '../pages/catalogFilm/SubscribeSchedule'
import CatalogFilmsWeekDayFriday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDayFriday'
import CatalogFilmsWeekDayMonday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDayMonday'
import CatalogFilmsWeekDaySaturday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDaySaturday'
import CatalogFilmsWeekDaySunday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDaySunday'
import CatalogFilmsWeekDayTrusday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDayTrusday'
import CatalogFilmsWeekDayTuesday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDayTuesday'
import CatalogFilmsWeekDayWednesday from '../pages/catalogFilm/weekDay/CatalogFilmsWeekDayWednesday'



const routes = [
  {
    path: '/CatalogFilms',
    name: 'CatalogFilms',
    component: CatalogFilms,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthMay',
    name: 'CatalogFilmMonthMay',
    component: CatalogFilmMonthMay,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthJune',
    name: 'CatalogFilmMonthJune',
    component: CatalogFilmMonthJune,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthSeptember',
    name: 'CatalogFilmMonthSeptember',
    component: CatalogFilmMonthSeptember,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthNovember',
    name: 'CatalogFilmMonthNovember',
    component: CatalogFilmMonthNovember,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthJuly',
    name: 'CatalogFilmMonthJuly',
    component: CatalogFilmMonthJuly,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthOctober',
    name: 'CatalogFilmMonthOctober',
    component: CatalogFilmMonthOctober,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDayFriday',
    name: 'CatalogFilmsWeekDayFriday',
    component: CatalogFilmsWeekDayFriday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmMonthMay/CatalogFilmsWeekDayMonday',
    name: 'CatalogFilmsWeekDayMonday',
    component: CatalogFilmsWeekDayMonday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDaySaturday',
    name: 'CatalogFilmsWeekDaySaturday',
    component: CatalogFilmsWeekDaySaturday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDaySunday',
    name: 'CatalogFilmsWeekDaySunday',
    component: CatalogFilmsWeekDaySunday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDayTrusday',
    name: 'CatalogFilmsWeekDayTrusday',
    component: CatalogFilmsWeekDayTrusday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDayTuesday',
    name: 'CatalogFilmsWeekDayTuesday',
    component: CatalogFilmsWeekDayTuesday,
    props: true,
  },
  {
    path: '/CatalogFilms/CatalogFilmsWeekDayWednesday',
    name: 'CatalogFilmsWeekDayWednesday',
    component: CatalogFilmsWeekDayWednesday,
    props: true,
  },
  {
    path: '/CatalogFilms/SubscribeSchedule',
    name: 'SubscribeSchedule',
    component: SubscribeSchedule
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

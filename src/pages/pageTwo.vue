<template>
  <section class="catalog">
      <div class="catalog__panel">
        <div class="catalog__panel-sort">
          <ul>
            <li @click="sort('imdb')">Sort by IMDB rating
            <button>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z" fill="#C3CAD9"/>
              </svg>
            </button>

            </li>
            <li @click="sort('alpha')">Sort Alphabetically
              <button>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z" fill="#C3CAD9"/>
                </svg>
              </button>
            </li>
            <li>Sort By Publication Date
              <button>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z" fill="#C3CAD9"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="catalog__panel-genre">
          <div class="catalog__panel-genre-title">
            <span>Choose a Genre</span>
            <button @click="genresBoollean = !genresBoollean">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z" fill="#C3CAD9"/>
                </svg>
            </button>
          </div>
          <ul v-if="genresBoollean"> 
            <li class="genres__list" @click="selectGenre(index)" v-for="(genre, index) in genres" :key="genre.title">
                <span v-html="genre.img"></span>
                <span class="genres__list-title"> {{genre.title}}</span>
                <span class="genres__list-count"> {{genre.count}} </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="catalog__block">
        <ul v-if="check">
          <li  class="catalog__block__item" v-for="(film, index) in catalog" :key="index">
            <div class="IMDb-rate">
              <img src="../assets/img/Imdb.png" alt="">
              <span>{{film.rate}}</span>
            </div>
            <span class="catalog__block__item-seasons"> {{film.seasons}} Seasons </span>
            <span class="catalog__block__item-title">{{film.title}}</span>
            <button>
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect width="40" height="40" rx="20" fill="#8833FF"/>
             <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z" fill="white"/>
             </svg>
            </button>
            <div class="catalog__block__item-img">
              <img :src="film.imgSource" alt="">
            </div>
          </li>
        </ul>
        <div class="lalala" v-else>
          <hr>
          <p>npx json-server --watch ./public/p2db.json</p>
          <p>В терминал, для отображения контента</p>
          <hr>
        </div>
        
        <div class="catalog__block__pages">
          <ul>
            <li @click="selectPage(index)" class="pages" v-for="(page, index) in pages" :key="page"> {{page}} </li>
          </ul>
        </div>
      </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue'
import Modal from '../components/Modal.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {Header, Modal, Footer},
  data(){
    return{
      genres: [{
        title: 'Fantasy',
        img: `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 22C0 22 0 18.5 2.5 17C5 15.5 8 15 10 14C12 13 13 11 12 10C11 9 9 9.5 8.5 10C8 10.5 7.5 12 6.5 12C5.5 12 5 10.5 5 10.5H6.5L6 10L7.5 9.5V8.5H8.5L7 8V9L6 8.5V9H5L5.5 9.5C5.5 9.5 4 10 3.5 9.5C3 9 3 8 4 7.5C5 7 7 6 7.5 5C8 4 8 4.5 9.5 3.5C11 2.5 12 0 12 0L13 3C13 3 14.5 4.5 17 4C19.5 3.5 22.5 1.5 22.5 1.5C22.5 1.5 21.5 4.5 20 5C18.5 5.5 17 5.5 17 5.5C17 5.5 18 6 18.5 6.5C19 7 22 6 22 6C22 6 19.5 8.5 18 7.5C16.5 6.5 16.5 7 16.5 7C16.5 7 18.5 8 19 9.5C19.5 11 19 12.5 19 12.5C19 12.5 18.5 10 17.5 9.5C16.5 9 18 14 18 15.5C18 17 16 20 16 20C16 20 16.5 17.5 16.5 17C16.5 16.5 16.5 15.5 16.5 15.5C16.5 15.5 16 19 15 20C14 21 13.5 21.5 13.5 21.5C13.5 21.5 14 21 14 20C14 19 13.5 18.5 13.5 18.5C13.5 18.5 12.5 21 10 21C7.5 21 6 20.5 3.5 21C1 21.5 0 22 0 22Z" fill="#C3CAD9"/>
              </svg>`,
        count: 34
      },
      {
        title: 'Action',
        img: `<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4202 4C11.5202 4 12.4202 3.1 12.4202 2C12.4202 0.9 11.5202 0 10.4202 0C9.32022 0 8.42022 0.9 8.42022 2C8.42022 3.1 9.32022 4 10.4202 4ZM7.25022 16L7.82022 13.5L9.92022 15.5V20.5C9.92022 21.05 10.3702 21.5 10.9202 21.5C11.4702 21.5 11.9202 21.05 11.9202 20.5V14.86C11.9202 14.31 11.7002 13.79 11.3002 13.41L9.82022 12L10.4202 9C11.4902 10.24 13.0402 11.13 14.7802 11.41C15.3802 11.5 15.9202 11.02 15.9202 10.41C15.9202 9.92 15.5602 9.51 15.0702 9.43C13.5502 9.18 12.2902 8.28 11.6202 7.1L10.6202 5.5C10.2202 4.9 9.62022 4.5 8.92022 4.5C8.62022 4.5 8.42022 4.6 8.12022 4.6L4.14022 6.28C3.40022 6.6 2.92022 7.32 2.92022 8.13V10.5C2.92022 11.05 3.37022 11.5 3.92022 11.5C4.47022 11.5 4.92022 11.05 4.92022 10.5V8.1L6.72022 7.4L5.12022 15.5L1.20022 14.7C0.660216 14.59 0.130216 14.94 0.0202159 15.48V15.52C-0.0897841 16.06 0.260216 16.59 0.800216 16.7L4.91022 17.52C5.97022 17.73 7.01022 17.06 7.25022 16Z" fill="#C3CAD9"/>
             </svg>`,
        count: 21
      },
      {
        title: 'Comedies',
        img: `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49983 19.996C6.04169 20 3.94242 18.2303 2.20219 14.6909L2.06188 14.4C0.294555 10.6667 -0.336634 6.93333 0.168317 3.2C0.420792 2.13333 1.30446 1.33333 2.81931 0.8C4.33416 0.266667 6.22772 0 8.5 0C10.7723 0 12.6658 0.266667 14.1807 0.8C15.6955 1.33333 16.5792 2.13333 16.8317 3.2C17.3366 6.93333 16.7054 10.6667 14.9381 14.4C13.1708 18.1333 11.0248 20 8.5 20L8.49983 19.996ZM6.27273 14C5.84848 13.5556 5.42424 12.8889 5 12C5.07415 12.0388 5.15261 12.0822 5.2364 12.1285C5.87176 12.4796 6.81335 13 8.5 13C10.1867 13 11.1282 12.4796 11.7636 12.1285C11.8474 12.0822 11.9259 12.0388 12 12C11.5758 12.8889 11.1515 13.5556 10.7273 14C10.303 14.4444 9.45455 15 8.5 15C7.54545 15 6.69697 14.4444 6.27273 14ZM2.44055 7.19998C2.44055 7.19998 3.9554 9.19998 5.47025 8.39998C6.98511 7.59998 7.36382 5.59998 7.36382 5.59998C7.36382 5.59998 5.84897 5.59998 4.71283 5.99998C3.57669 6.39998 2.44055 7.19998 2.44055 7.19998ZM11.5297 8.39998C13.0446 9.19998 14.5594 7.19998 14.5594 7.19998C14.5594 7.19998 13.4233 6.39998 12.2872 5.99998C11.151 5.59998 9.63618 5.59998 9.63618 5.59998C9.63618 5.59998 10.0149 7.59998 11.5297 8.39998Z" fill="#C3CAD9"/>
             </svg>`,
        count: 12
      },
      {
        title: 'Show',
        img: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 13.5V6.5C8 6.09 8.47 5.85 8.8 6.1L13.47 9.6C13.74 9.8 13.74 10.2 13.47 10.4L8.8 13.9C8.47 14.15 8 13.91 8 13.5Z" fill="#C3CAD9"/>
              </svg>`,
        count: 32
      },
      {
        title: 'Thriller',
        img: `<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13698 15.8185C0.729127 15.6146 0.418991 15.257 0.274795 14.8244L0.102633 14.3079C0.0346558 14.104 0 13.8906 0 13.6756V11C0 10.2714 0.79622 7.95042 1.22846 6.74411C1.38522 6.3066 1.22644 5.81763 0.839745 5.55983L0.4453 5.29687C0.167101 5.1114 0 4.79917 0 4.46482V4.0829C0 4.02773 0.00447703 3.97267 0.0160812 3.91873C0.0769336 3.6359 0.324899 2.6751 1 2C1.79961 1.20039 2 1 3 1H14L15 0H17V1H19V2H20V4.5H19V5L18 6H12L11.3825 7.85263C11.1334 8.59974 10.6625 9.25314 10.0325 9.72566C9.36228 10.2283 8.54715 10.5 7.70943 10.5H6.5L5.62634 14.4315C5.54383 14.8028 5.35615 15.1438 5.08719 15.4128C4.71212 15.7879 4.20201 16 3.67157 16H1.90587C1.63896 16 1.37571 15.9379 1.13698 15.8185ZM7.5 8.5C6.94772 8.5 6.5 8.05229 6.5 7.5V7.43426L7.10662 7.83868C7.26441 7.94387 7.44981 8 7.63944 8C8.40664 8 8.86424 7.14497 8.43867 6.50663L8.10093 6H9.19098C9.63779 6 10 6.36221 10 6.80902C10 6.93461 9.97076 7.05848 9.91459 7.17082L9.64907 7.70186C9.55231 7.89539 9.39538 8.05231 9.20186 8.14907L8.71115 8.39443C8.57229 8.46385 8.41918 8.5 8.26393 8.5H7.5ZM7.07569 6.6162L7.23782 6.50812L7.49722 6.89722L7.07569 6.6162Z" fill="#C3CAD9"/>
            </svg>`,
        count: 21
      },
      {
        title: 'Melodrama',
        img: `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z" fill="#C3CAD9"/>
              </svg>`,
        count: 43
      },
      {
        title: 'Horror',
        img: `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22.5C11 22.5 9 22.5 7.5 22C6 21.5 6 21 6 21V18.5C6 18.5 4.5 18.5 3 17.5C1.5 16.5 2.5 14.5 2.5 14.5C2.5 14.5 0.5 13.5 0.5 8C0.5 2.5 5.5 0 11 0C16.5 0 21.5 2.5 21.5 8C21.5 13.5 19.5 14.5 19.5 14.5C19.5 14.5 20.5 16.5 19 17.5C17.5 18.5 16 18.5 16 18.5V21C16 21 16 21.5 14.5 22C13 22.5 11 22.5 11 22.5ZM11.075 15L11.0625 15.0125L11.05 15V15.025L10.075 16C9.57495 16.5 9.57495 17.5 10.075 17.5C10.5286 17.5 10.9822 17.0884 11.0625 17.0121C11.1427 17.0884 11.5963 17.5 12.05 17.5C12.55 17.5 12.55 16.5 12.05 16L11.075 15.025V15ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z" fill="#C3CAD9"/>
              </svg>`,
        count: 34
      },
      {
        title: 'Detective',
        img: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z" fill="#C3CAD9"/>
              </svg>`,
        count: 76
      },
      {
        title: 'Document',
        img: `<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 0C14.55 0 12.45 0.4 11 1.5C9.55 0.4 7.45 0 5.5 0C4.05 0 2.51 0.22 1.22 0.79C0.49 1.12 0 1.83 0 2.64V13.92C0 15.22 1.22 16.18 2.48 15.86C3.46 15.61 4.5 15.5 5.5 15.5C7.06 15.5 8.72 15.76 10.06 16.42C10.66 16.72 11.34 16.72 11.93 16.42C13.27 15.75 14.93 15.5 16.49 15.5C17.49 15.5 18.53 15.61 19.51 15.86C20.77 16.19 21.99 15.23 21.99 13.92V2.64C21.99 1.83 21.5 1.12 20.77 0.79C19.49 0.22 17.95 0 16.5 0ZM20 12.73C20 13.36 19.42 13.82 18.8 13.71C18.05 13.57 17.27 13.51 16.5 13.51C14.8 13.51 12.35 14.16 11 15.01V3.5C12.35 2.65 14.8 2 16.5 2C17.42 2 18.33 2.09 19.2 2.28C19.66 2.38 20 2.79 20 3.26V12.73Z" fill="#C3CAD9"/>
            </svg>`,
        count: 23
      },
      {
        title: 'Drama',
        img: `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49983 19.996C6.04169 20 3.94242 18.2303 2.20219 14.6909L2.06188 14.4C0.294555 10.6667 -0.336634 6.93333 0.168317 3.2C0.420792 2.13333 1.30446 1.33333 2.81931 0.8C4.33416 0.266667 6.22772 0 8.5 0C10.7723 0 12.6658 0.266667 14.1807 0.8C15.6955 1.33333 16.5792 2.13333 16.8317 3.2C17.3366 6.93333 16.7054 10.6667 14.9381 14.4C13.1708 18.1333 11.0248 20 8.5 20L8.49983 19.996ZM6.27273 13C5.84848 13.4444 5.42424 14.1111 5 15C5.07415 14.9612 5.15261 14.9178 5.2364 14.8715C5.87176 14.5204 6.81335 14 8.5 14C10.1867 14 11.1282 14.5204 11.7636 14.8715C11.8474 14.9178 11.9259 14.9612 12 15C11.5758 14.1111 11.1515 13.4444 10.7273 13C10.303 12.5556 9.45455 12 8.5 12C7.54545 12 6.69697 12.5556 6.27273 13ZM2.44055 7.19998C2.44055 7.19998 3.9554 9.19998 5.47025 8.39998C6.98511 7.59998 7.36382 5.59998 7.36382 5.59998C7.36382 5.59998 5.84897 5.59998 4.71283 5.99998C3.57669 6.39998 2.44055 7.19998 2.44055 7.19998ZM11.5297 8.39998C13.0446 9.19998 14.5594 7.19998 14.5594 7.19998C14.5594 7.19998 13.4233 6.39998 12.2872 5.99998C11.151 5.59998 9.63618 5.59998 9.63618 5.59998C9.63618 5.59998 10.0149 7.59998 11.5297 8.39998Z" fill="#C3CAD9"/>
            </svg>`,
        count: 65
      },
      {
        title: 'History',
        img: `<svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447716 2 1 2H2.08648C2.25122 4.09915 2.86466 7.26148 5.00966 8.48826C2.83092 9.69771 2.21062 12.8873 2.04481 15H1C0.447715 15 0 15.4477 0 16C0 16.5523 0.447716 17 1 17H2H12H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11.9552C11.7904 12.9008 11.177 9.73851 9.03201 8.51174C11.2107 7.30229 11.831 4.11268 11.9969 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H12.0417H2.04167H1Z" fill="#C3CAD9"/>
            </svg>`,
        count: 12
      },
      {
        title: 'Biography',
        img: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="#C3CAD9"/>
            </svg>`,
        count: 11
      },



      
      
      
      
      ],
      genresBoollean: false,
      catalog: [],
      check: false,
      pages: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods: {
    sort(by){
      if(by === 'alpha'){
        this.catalog.sort((a,b) =>{
          let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          if(fa < fb) {
            return -1
          }
          if (fb < fa) {
            return 1
          }
          return 0
        })
      }
      if (by === 'imdb') {
        this.catalog.sort((a,b) => b.rate - a.rate)
      }
      
    },
    selectGenre(id){
      const lala = Array.from(document.querySelectorAll('.genres__list'))
      lala.forEach(item => item.classList.remove('active'))
      lala[id].classList.add('active')
    },
    selectPage(id){
      const lala = Array.from(document.querySelectorAll('.pages'))
      lala.forEach(item => item.classList.remove('active'))
      lala[id].classList.add('active')
    }
  },
  mounted(){
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/catalog/pageone/')
      const response = await data.json()
      this.catalog = response.content
    }
    fetchData().then(item => this.check = true).catch(item => this.check = false)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.catalog{
  display: flex;
  &__panel{
    margin-right: 15px;
  }
}
.catalog__panel-sort{
  border: 2px solid #EDEFF2;
  border-radius: 10px;
  max-width: vw(255);
  margin-bottom: vw(30);
  ul {
    li{
      display: flex;
      align-items: center;
      @include font (vw(12), 800, vw(20), $greyBlue70);
      margin-left: vw(35);
      cursor: pointer;
      button{
        margin: 0 vw(26) 0 auto;
        background-color: inherit;
        border: none;
        cursor: pointer;
      }
    }
  }
  ul li:first-child{
    margin: vw(30) vw(0) vw(15) vw(35);
  }
  ul li:last-child{
    margin: vw(15) vw(0) vw(30) vw(35);
  }
}
.catalog__panel-genre{
  border: 2px solid #EDEFF2;
  border-radius: 10px;
  width: vw(255);
  box-sizing: border-box;
  &-title{
    display: flex;
    & span{
      @include font(vw(12), 800, vw(20), $greyBlue50);
    margin: vw(30) auto vw(35) vw(35);
    } 
    & button{
      background-color: inherit;
      border: none;
      margin: vw(34) vw(26);
      cursor: pointer;
    }
  }
  ul{
    margin: 0 vw(15);
    li{
       margin-bottom: vw(10);
    }
    li:last-child{
      margin-bottom: vw(45);
    }
  }
}
.genres__list{
  padding: vw(15) vw(10);
  height: vw(50);
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  &-title{
    @include font(vw(12), 800, vw(20), $greyBlue60);
    display: inline-block;
    margin: auto auto auto vw(15);
  }
  &-count{
    @include font(vw(10), 800, vw(20), $greyBlue60);
    margin: auto 10px;
  }
}
  .active{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.23);
    .genres__list-title{
      @include font(vw(12), 800, vw(20), $purple);
   }
}
.active_svg{
  svg{
    path{
      fill: black;
    }
  }
}
.catalog__block{
  max-width: vw(900);
  display: flex;
  ul{
    display: flex;
    flex-wrap: wrap;
  }
  &__item{
    margin: 0 vw(15) vw(30);
    position: relative;
    &-img{
      img{
        border-radius: vw(10);
        max-width: vw(350);
        height: vw(255);
      }
    }
    &-seasons{
      display: inline-block;
      position: absolute;
      padding: vw(5) vw(16);
      top: 8%;
      right: 5%;
      @include font(vw(10), 800, vw(20), $white);
      background-color: rgba(13, 17, 26, 0.5);
    }
    &-title{
      position: absolute;
      left: 8%;
      bottom: 10%;
      @include font(vw(15), 700, vw(30), $white);
    }
  .IMDb-rate{
    position: absolute;
    display: flex;
    max-width: vw(60);
    left:8%;
    top: 11%;
    img{
      max-width: vw(38);
      height: vw(20);
    }
    span{
      @include font(vw(12), 800, vw(20), $white);
      margin-left: vw(16);
    }
    }
    button{
      position: absolute;
      bottom: 7%;
      right: 5%;
      background-color: inherit;
      border: none;
      cursor: pointer;
      svg{
         max-width: vw(40);
      }
    }
  }
  &__pages{
    ul{
      display: flex;
      flex-direction: column;
      margin: 0 vw(70) 0 vw(5);
      text-align: center;
      li{
        padding: vw(12.92) vw(17.55);
        border: 2px solid $greyBlue95;
        border-radius: vw(10);
        margin-bottom: vw(27);
        cursor: pointer;
        @include font(vw(13), 800, vw(25), $greyBlue50);
      }
    }
    .active{
      background: #FFFFFF;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.23);
    }
  }
}
.lalala{
  width: vw(900);
  p{
    @include font(vw(30), 700, vw(40), $purple);
    text-align: center;
  }
}

@media screen and(max-width:769px) {
  .catalog__panel-sort{
  max-width: vw(350);
  ul {
    li{
      @include font (vw(18), 800, vw(20), $greyBlue70);
      button{
        margin: 0 vw(26) 0 auto;
      }
    }
  }
}
.catalog__panel-genre{
  width: vw(350);
  &-title{
    display: flex;
    & span{
      @include font(vw(20), 800, vw(20), $greyBlue50);
      margin: vw(40) auto vw(40) vw(35);
    } 
  }
  ul{
    li{
       margin-bottom: vw(15);
    }
    li:last-child{
      margin-bottom: vw(45);
    }
  }
}
.genres__list{
  padding: vw(15) vw(10);
  height: vw(75);
  &-title{
    @include font(vw(18), 800, vw(20), $greyBlue60);
    margin: auto auto auto vw(25);
  }
  &-count{
    @include font(vw(17), 800, vw(20), $greyBlue60);
    margin: auto 10px;
  }
}
  .active{
    .genres__list-title{
      @include font(vw(18), 800, vw(20), $purple);
   }
}
  .catalog__block{
  &__item{
    margin: 0 vw(15) vw(30);
    &-img{
      img{
        border-radius: vw(10);
        max-width: vw(686);
        height: vw(500);
      }
    }
    &-seasons{
      padding: vw(7) vw(24);
      @include font(vw(18), 800, vw(20), $white);
    }
    &-title{
      @include font(vw(23), 700, vw(30), $white);
    }
  .IMDb-rate{
    top: 10%;
    img{
      max-width: vw(50);
      height: vw(26);
    }
    span{
      @include font(vw(18), 800, vw(20), $white);
      margin-left: vw(16);
    }
    }
    button{
      svg{
         max-width: vw(60);
      }
    }
  }
}
}
@media screen and(max-width: 571px) {
  .catalog__panel{
    margin-right: 0;
  }
   .catalog__panel-sort{
  max-width: vmin(90);
  ul {
    li{
      @include font (vmin(7), 700, vmin(10), $greyBlue70);
      button{
        margin: 0 vw(26) 0 auto;
      }
    }
  }
}
.catalog__panel-genre{
  width: vmin(90);
  &-title{
    & span{
      @include font(vmin(8), 700, vmin(10), $greyBlue50);
      margin: vw(40) auto vw(40) vw(35);
    } 
  }
  ul{
    li{
       margin-bottom: vmin(4);
    }
    li:last-child{
      margin-bottom: vmin(25);
    }
  }
}
.genres__list{
  padding: vmin(8) vmin(5);
  height: vmin(30);
  &-title{
    @include font(vmin(7), 800, vmin(10), $greyBlue60);
    margin: auto auto auto vw(25);
  }
  &-count{
    @include font(vmin(6), 800, vmin(10), $greyBlue60);
    margin: auto 10px auto vmin(5);
  }
}
  .active{
    .genres__list-title{
      @include font(vmin(7), 800, vmin(10), $purple);
   }
}
  .catalog__block{
  max-width: vmin(160);
  &__item{
    margin: 0 vw(15) vw(30);
    &-img{
      img{
        border-radius: vw(10);
        max-width: vmin(150);
        height: vmin(100);
      }
    }
    &-seasons{
      padding: vmin(4) vmin(6);
      @include font(vmin(7), 700, vw(20), $white);
    }
    &-title{
      @include font(vmin(8), 700, vw(30), $white);
    }
  .IMDb-rate{
    top: 10%;
    img{
      max-width: vmin(17);
      height: vmin(10);
    }
    span{
      margin-top: vmin(2);
      @include font(vmin(6), 800, vw(20), $white);
      margin-left: vw(16);
    }
    }
    button{
      svg{
         max-width: vmin(20);
      }
    }
  }
  &__pages{
    ul{
      margin: 0 0 0 vw(5);
      text-align: center;
      li{
        padding: vw(30.92) vw(19.55);
        border: 2px solid $greyBlue95;
        border-radius: vmin(5);
        margin-bottom: vmin(3);
        cursor: pointer;
        @include font(vmin(9), 700, vw(25), $greyBlue50);
      }
    }
  }
}
}
</style>
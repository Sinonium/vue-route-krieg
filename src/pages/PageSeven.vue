<template>
  <Header />
  <Modal />
  <Footer />
  <PageSevenModal v-if="ShowModal" @closeModal="closeModal" />

  <section class="hero">
    <div class="hero__block">
      <img src="../assets/img/PageSeven/hero.png" alt="" class="heroImg" />
      <ul class="navbar-nav">
        <li v-for="(menu, index) in menuList" :key="index">
          <router-link
            class="nav-link active"
            aria-current="page"
            :to="menu.path"
          >
            {{ menu.name }}
          </router-link>
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.2925 0.293762C-0.0975 0.683762 -0.0975 1.31376 0.2925 1.70376L4.1725 5.58376L0.2925 9.46376C-0.0975 9.85376 -0.0975 10.4838 0.2925 10.8738C0.6825 11.2638 1.3125 11.2638 1.7025 10.8738L6.2925 6.28376C6.6825 5.89376 6.6825 5.26376 6.2925 4.87376L1.7025 0.283762C1.3225 -0.0962378 0.6825 -0.0962378 0.2925 0.293762Z"
              fill="white"
            />
          </svg>
        </li>
      </ul>
      <button class="hero__block-circle">
        <svg
          class="hero__block-icon"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.1" width="60" height="60" rx="30" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 26V22L39 29L32 36V31.9C27 31.9 23.5 33.5 21 37C22 32 25 27 32 26Z"
            fill="white"
          />
        </svg>
      </button>
      <button class="hero__block-circle">
        <svg
          class="hero__block-icon"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.1" width="60" height="60" rx="30" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.6641 22.9907C35.0241 21.1907 31.7641 22.0307 30.0041 24.0907C28.2441 22.0307 24.9841 21.1807 22.3441 22.9907C20.9441 23.9507 20.0641 25.5707 20.0041 27.2807C19.8641 31.1607 23.3041 34.2707 28.5541 39.0407L28.6541 39.1307C29.4141 39.8207 30.5841 39.8207 31.3441 39.1207L31.4541 39.0207C36.7041 34.2607 40.1341 31.1507 40.0041 27.2707C39.9441 25.5707 39.0641 23.9507 37.6641 22.9907ZM30.1041 37.5507L30.0041 37.6507L29.9041 37.5507C25.1441 33.2407 22.0041 30.3907 22.0041 27.5007C22.0041 25.5007 23.5041 24.0007 25.5041 24.0007C27.0441 24.0007 28.5441 24.9907 29.0741 26.3607H30.9441C31.4641 24.9907 32.9641 24.0007 34.5041 24.0007C36.5041 24.0007 38.0041 25.5007 38.0041 27.5007C38.0041 30.3907 34.8641 33.2407 30.1041 37.5507Z"
            fill="white"
          />
        </svg>
      </button>
      <div class="hero__block-logo">
        <div class="hero__block-logo-img">
          <img src="../assets/img/PageSeven/Logo.png" alt="" class="logo" />
        </div>
        <div class="hero__block-logo-icons">
          <span>Game Of Trones</span>
          <svg
            width="30"
            height="13"
            viewBox="0 0 30 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.9997 6.14748C29.9997 9.55899 27.2491 12.3632 23.8786 12.3632V12.3633C20.4679 12.3633 18.7963 9.8823 18.3247 8.898C18.3247 10.4887 16.827 12.3096 14.6965 12.3096H9.46582V0.20211H15.088C16.827 0.20211 18.3247 1.99479 18.3247 3.49161C18.7417 2.4801 20.4679 0 23.8786 0C27.2491 0 29.9997 2.68224 29.9997 6.14748ZM15.1554 3.91044C15.1554 3.37056 14.7648 2.89893 14.2795 2.89893L12.606 2.8989V4.92201H14.2795C14.7648 4.92201 15.1554 4.44855 15.1554 3.91044ZM23.8786 3.07374C22.1796 3.07374 20.8039 4.44858 20.8039 6.14748C20.8039 7.85919 22.1796 9.2358 23.8786 9.2358C25.5784 9.2358 26.9523 7.85919 26.9523 6.14748C26.9523 4.44855 25.5784 3.07374 23.8786 3.07374ZM26.2931 6.14751C26.2931 7.49586 25.186 8.57481 23.8786 8.57481V8.57478C22.5311 8.57478 21.4513 7.49586 21.4513 6.14748C21.4513 4.79904 22.5311 3.7338 23.8786 3.7338C25.186 3.7338 26.2931 4.79904 26.2931 6.14751ZM16.491 6.14748C16.8807 6.11982 17.5153 5.67588 17.7575 5.40636C17.6628 5.72955 17.6628 6.75387 17.7575 7.07799C17.488 6.68739 16.8807 6.21489 16.491 6.14748ZM14.2795 7.44123C14.7648 7.44123 15.1554 7.91382 15.1554 8.45283C15.1554 9.01998 14.7648 9.49074 14.2795 9.49074H12.606V7.44123H14.2795Z"
              fill="white"
            />
            <path
              d="M8.79333 12.3094H5.50287V7.61676H3.37146V12.3094H0V0.201904H3.37146V4.71783H5.50287V0.201934H8.79333V12.3094Z"
              fill="white"
            />
          </svg>
          <div class="lmdb"></div>
          <div class="score"></div>
        </div>
        <p>
          The main epic of our time. A fantasy that speaks of human passions,
          the nature of power, the mechanisms of politics and the structure of
          our world is more accurate and better than any documentary movie. A
          fairy tale from which it is impossible to break away. The most popular
          and expensive series in the world.
        </p>
      </div>
      <div class="hero__block-play">
        <button>
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <rect class="rect"
                x="60"
                y="30"
                width="60"
                height="60"
                rx="30"
                fill="#8833FF"
              />
            </g>
            <path class="path"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M85 55.0014V65.3614C85 66.1514 85.87 66.6314 86.54 66.2014L94.68 61.0214C95.3 60.6314 95.3 59.7314 94.68 59.3314L86.54 54.1614C85.87 53.7314 85 54.2114 85 55.0014Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="180"
                height="180"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="30" />
                <feGaussianBlur stdDeviation="30" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.533333 0 0 0 0 0.2 0 0 0 0 1 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <span class="span">Start Watch</span>
      </div>
      <div class="seasons">
        <span>Seasons: </span>
        <button
          v-for="(season, index) in seasons"
          :key="season"
          @click="jopa(index)"
          class="b"
        >
          {{ season }}
        </button>
      </div>
    </div>
  </section>
  <section class="video">
    <div class="card">
      <button class="vbutton" ref="vd" @click="handleClick()">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">Winter is coming</p>
        <p class="card-text2">1 Season, 1 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video2.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">Wolf and Lion</p>
        <p class="card-text2">1 Season, 5 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video3.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">The Pointy End</p>
        <p class="card-text2">1 Season, 9 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video4.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">The Kingsroad</p>
        <p class="card-text2">1 Season, 2 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video5.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">A Golden Crown</p>
        <p class="card-text2">1 Season, 6 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video6.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">Fire and Blood</p>
        <p class="card-text2">1 Season, 9 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video7.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">Lord Snow</p>
        <p class="card-text2">1 Season, 3 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video8.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">You Win or Die</p>
        <p class="card-text2">1 Season, 7 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video9.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">The Remembers</p>
        <p class="card-text2">2 Season, 1 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video10.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">Broren Things</p>
        <p class="card-text2">1 Season, 4 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video11.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">The Pointy End</p>
        <p class="card-text2">1 Season, 8 Episode</p>
      </div>
    </div>
    <div class="card">
      <button class="vbutton">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z"
            fill="#FFCB33"
          />
        </svg>
      </button>
      <img
        src="../assets/img/PageSeven/video12.png"
        class="card-img-top"
        alt=""
      />
      <span>01:01:41</span>
      <div class="card-body">
        <p class="card-text">The Night Lands</p>
        <p class="card-text2">2 Season, 2 Episode</p>
      </div>
    </div>
  </section>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import PageSevenModal from "./PageSevenModal";

export default {
  components: { PageSevenModal, Modal, Header },
  data() {
    return {
      menuList: [
        { name: "Main", path: "/" },
        { name: "Series", path: "/" },
        { name: "Drama", path: "/" },
        { name: "Game of Trones", path: "/" },
      ],
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      ShowModal: false,
    };
  },
  methods: {
    jopa(id) {
      const button = Array.from(document.querySelectorAll(".b"));
      button.forEach((item) => item.classList.remove("active"));
      button[id].classList.add("active");
    },
    handleClick() {
      this.ShowModal = true;
    },
    closeModal() {
      this.ShowModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.hero {
  margin-left: vw(12);
  max-width: vw(1100);
  height: vw(635);
  &__block {
    display: flex;
    flex-wrap: wrap;

    .navbar-nav {
      padding: vw(63) 0 0 vw(65);
      margin-right: vw(400);
      display: flex;
      li {
        @include font(vw(13), 800, vw(25), $white);
        opacity: 0.6;
        margin-right: vw(26);
        svg {
          margin-left: vw(26);
        }
        a {
          color: inherit;
        }
      }
    }
    &-circle {
      margin-right: vw(15);
      width: vw(60);
      height: vw(60);
      margin-top: vw(30);
      background-color: inherit;
      border: none;
    }
    &-play {
      display: flex;
      button {
        margin-top: vw(15);
        background-color: inherit;
        border: none;
        max-width: vw(60);
        height: vw(60);
        cursor: pointer;
      }
      span {
        margin-top: vw(70);
        margin-left: vw(80);
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: #ffffff;
      }
    }
    &-logo {
      display: flex;
      flex-direction: column;
      margin-left: vw(45);
      svg {
        margin-top: vw(10);
      }
      span {
        @include font(vw(14), 800, vw(30), $white);
        margin-right: vw(20);
      }
      &-icons {
        display: flex;
        margin-top: vw(20);
        margin-left: vw(20);
      }
      p {
        width: 50%;
        height: vw(80);
        margin-left: vw(20);
        margin-top: vw(35);
        @include font(vw(14), 600, vw(25), $white);
        mix-blend-mode: normal;
        opacity: 0.8;
      }
    }
    .hero__block-buttons {
      display: flex;
    }
    .seasons {
      max-width: vw(590);
      margin-top: vw(120);
      margin-left: vw(-190);
      @include font(vw(13), 800, vw(25), $white);
      span {
        color: $white;
      }
      button {
        border-radius: 20%;
        border: 1px solid #ffffff;
        border-radius: 5px;
        @include font(vw(12), 800, vw(20), $white);
        background: none;
        padding: vw(10) vw(17);
        margin-left: vw(10);
        outline: none;
        cursor: pointer;
      }
      .active {
        background-color: $orange;
      }
    }
  }
}

.heroImg {
  position: absolute;
  width: vw(1100);
  height: vw(635);
  left: 3%;
  top: vw(140);
  border-radius: 10px;
  z-index: -1;
}

.lmdb {
  background-image: url("../assets/img/PageSeven/Imdb.png");

  width: 38.14px;
  height: 20px;
  margin-left: vw(20);
  margin-top: vw(5);
}
.video {
  display: flex;
  flex-direction: column;
  max-height: vw(855);
  max-width: vw(855);
  flex-wrap: wrap;
}
.card {
  margin-bottom: vw(30);
  margin-right: vw(30);
  height: vw(255);
  width: vw(255);
  margin-left: vw(10);

  /* White */

  background: #ffffff;
  box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
  border-radius: 10px;
  img {
    width: vw(255);
    height: vw(160);
  }
  button {
    height: vw(40);
    width: vw(40);
    position: absolute;
    margin-left: vw(108);
    margin-top: vw(60);
    background: #0d111a;
    opacity: 0.5;
    border-radius: 30px;
    cursor: pointer;
    border: none;
  }
  span {
    margin-top: vw(115);
    margin-left: vw(-60);
    position: absolute;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height, or 167% */

    /* White */

    color: #ffffff;
  }
}
.card-text {
  width: vw(300);
  height: 20px;

  /* Bold 12 */

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: $greyBlue50;
  margin-left: vw(70);
  margin-top: vw(25);
}
.card-text2 {
  width: vw(300);
  height: 20px;
  margin-left: vw(-30);
  top: vw(215);

  /* Semibold 12 */

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-align: center;

  /* Grey Blue 80 */

  color: #adb8cc;
}
@media screen and (max-width: 1700px) {
  .heroImg {
    top: vw(160);
  }
}
@media screen and (max-width: 1400px) {
  .heroImg {
    top: vw(170);
  }
  .hero__block-play{
    .span{
      margin-left: vw(100);
    }
  }
  .card{
    span{
      margin-left: vw(-90);
    }
    

}
.card-text2 {
  margin-top:vw(-10);}
  }
  

@media screen and (max-width: 1200px) {
  .heroImg {
    top: vmin(270);
  }
  .hero__block-circle {
    margin: 0 vmin(25) 0 0;
  }
  .hero__block-icon {
    width: vmin(80);
    height: vmin(80);
  }
  .hero__block {
    .navbar-nav {
      padding: vmin(33) 0 0 vmin(35);
      margin-right: vmin(500);
      
    }
  }
  .logo{
    width: vmin(400);
  }
.rect{
     width: vmin(80);
    height: vmin(80);
  }
  
}
@media screen and (max-width: 1100px) {
  .heroImg {
    top: vw(200);
  }
  .hero__block {
    .navbar-nav {
      padding: vmin(33) 0 0 vmin(35);
      margin-right: vmin(500);
      
    }
  }
  .hero__block-play{
    .span{
      margin-left: vw(130);
    }
  }
  .card{
    span{ 
      font-size: 13px;
      
    }
}
.card-text{
  font-size: 13px;
  margin-top:vw(15);
  }
  }
.card-text2 {
  font-size: 13px;
  margin-top:vw(-10);
  }
  @media screen and (max-width: 1000px) {
  .heroImg {
    top: vw(220);
  }}
  @media screen and (max-width: 900px) {
  .heroImg {
    top: vw(250);
  }
  .card-text{
  font-size: 10px;
  margin-top:vw(15);
  }
  }
.card-text2 {
  font-size: 10px;
  margin-top:vw(-20);
  }
  .hero__block-play{
    .span{
      font-size: 20px;
    }
  }
  @media screen and (max-width: 800px) {
  .heroImg {
    top: vw(280);
  }
  .hero__block {
    .navbar-nav {
      padding: vmin(33) 0 0 vmin(35);
      margin-right: vmin(400);
      
    }
  }
}


  
</style>





<template>
    <div class="slider"  v-on:click="next">
    <div class="slider__text">
         <div class="slider__icon">
            <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="38.1366" height="20" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00325733 0.00621118)"/>
</pattern>
<image id="image0" width="307" height="161" xlink:href="data:image/png;base64,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"/>
</defs>
            </svg>
            <span>9.5</span>
         </div>
         <span>Returns Tonight at 10:30 PM</span> 
         <h4>Games of Trones</h4>
         <span>Jhon and Sansa face Ramsay Bolton on the fields of Winterfell. Daenerys strikes back at her enemies. Theon and Yara arrive in Meereen.</span>
         <div class="slider__navigation">
           Games of Trones
           <div class="slider__line" >
             <span style="width: 50%" id="vue"></span>
           </div>
         </div>
    </div>
    <splide :options = "options">
        <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide>
        <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide>
        <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide >
         <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide >
         <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide >
         <splide-slide class="back">
            <img src="..\assets\img\PageOneImg\Sldr-img.png" />
        </splide-slide >
    </splide>
    </div>
    <div class="tabs"  id="sort-bar">
      <ul>
      <li @click="filteredRecipes('Now')">Now Watching</li>
      <li @click="filteredRecipes('New')">New Series and Films</li>
      <li @click="filteredRecipes('Popular')">Most Popular</li>
      <li @click="filteredRecipes('Imdb')">Best IMDB</li>
      <li @click="filteredRecipes('Best')">Best for You</li>
    </ul>
    </div>
    <div  class="catalog " id="catalog">
      <div class="catalog__films "  v-for="recipe in recipes" :key="recipe.title">
          <div class="catalog-icons">
                 <svg width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="38.1366" height="20" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0" transform="scale(0.00325733 0.00621118)"/>
                    </pattern>
                    <image id="image0" width="307" height="161" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
                 <span>{{ recipe. imdb }}</span>
                <svg class="catalog-icons__play" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z" fill="white"/>
                </svg>     
          </div>
       <h6 class=""> {{recipe.title }}</h6> 
       <span class="catalog__data">{{recipe.year}}</span>
       <img :src="recipe.img" alt="">
      </div>
      <div class="catalog__genres" >
         <ul> 
            <li class="genres__list" v-for="genre in genres" :key="genre.title">
                <img :src="genre.img" alt="">
                <span class="genres__list-title"> {{genre.name}}</span>
            </li>
          </ul>
     </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
 components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            options: {
                rewind: true,
                gap: "20rem",
                perPage: 1,
		            pagination : false,
                arrows: false,
                // autoplay: true,
                interval: 4000,
                speed: 800,
            },
            counter: true,
            sortBy: '',
            maxCookingTime: null,
            genres: [{
        name: 'Fantasy',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-fantasy.svg'),
      },
      {
        name: 'Action',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-action.svg'),
      },
      {
        name: 'Comedies',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-comedies.svg'),
      },
      {
        name: 'Show',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-show.svg'),
      },
      {
        name: 'Thriller',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-thriller.svg'),
      },
      {
        name: 'Melodrama',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-melodrama.svg'),
      },
      {
        name: 'Horror',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-horror.svg'),
      },
      {
        name: 'Detective',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-detective.svg'),
      },
      {
        name: 'Document',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-document.svg'),
      },
      {
        name: 'Drama',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-drama.svg'),
      },
      {
        name: 'History',
        img:require('@/assets/img/PageOneImg/genres-list-svg/Icon-history.svg'),
      },
      {
        name: 'Biography',
        img: require('@/assets/img/PageOneImg/genres-list-svg/Icon-bio.svg'),
      },
            ],
            recipes: [
              {title: 'Dora & The Lost City of Gold',
              imdb: 8.5,
              year: 2020,
              genre: 'Action',
              popularity: 5,
              img: require('@/assets/img/PageOneImg/catalog-img-1.png')},


              {title: 'Boardwalk Empire, 4 Season 9 Episode',
              imdb: 9.5,
              year: 2021,
              genre: 'Action',
              popularity: 5,
              img: require('@/assets/img/PageOneImg/catalog-img-111.png')},

              
              
              {title: 'Westworld Season 2',
              imdb: 9.5,
              year: 2001,
              genre: 'Action',
              popularity: 4,
              img: require('@/assets/img/PageOneImg/catalog-img-3.png')},


              {title: 'Sherlock',
              imdb: 7.5,
              year: 2009,
              genre: 'Action',
              popularity: 5,
              img: require('@/assets/img/PageOneImg/catalog-img-333.png')},

              {title: 'Dardevil',
              imdb: 8.5,
              year: 2021,
              genre: 'Action',
              popularity: 2,
              img: require('@/assets/img/PageOneImg/catalog-img-222.png')},
            ],
        };
    },
    counter: true,
    methods: {
        next() {
                if (this.counter) {
                  var val = (parseInt(document.getElementById('vue').style.left, 0) || 0) + 50;
                  document.getElementById('vue').style.left = val + '%';
                  this.counter = !this.counter
                } else {
                  var val = (parseInt(document.getElementById('vue').style.left, 0) || 0) - 50;
                document.getElementById('vue').style.left = val + '%';
                this.counter = !this.counter
                }
        },

       filteredRecipes(lala) {
          this.recipes.sort((a, b) => {
            if (lala === 'New') {
              return b.year - a.year
            }
             if (lala === 'Imdb'){
              return b.imdb - a.imdb
            }
              if (lala === 'Popular'){
              return b.popularity - a.popularity
            }
        })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  .slider{
    margin-top: vw(60);
  }
 .back{
  & img{
        width: vw(1100);
        height: vw(635);
      }
  }
  .slider__text{
    position: absolute;
    margin: vw(95) 0 0 vw(72);
    width: vw(450);
    z-index: 20;
     .slider__icon{
       margin-bottom: vw(94);
       & svg{
         margin-bottom:vw(-7);
         margin-right:vw(15) ;
       }
      & span{
        @include font(vw(12),800, vw(20), $white);
      }
    }
    & span{
        opacity: 0.6;
        @include font(vw(14),600, vw(30), $white);
        margin-top: vw(94);
    }
    & h4{
       @include font(vw(36),600, vw(60), $white)
    }
    .slider__navigation{
      margin-top: vw(70);
       @include font(vw(14),600, vw(30), $white);
       .slider__line{
        margin-top: vw(26);
        height: vw(1);
        width: vw(279);
        position: relative;
        background-color: #F0F2F7;
        border-radius: vw(5);
        opacity: 0.34;
        // margin: vw(20) vw(23) vw(15);
        padding: vw(1);
        & span{
            position: relative;
            width: vw(120);
            height: vw(4);
            background-color: #E62E2E;
            opacity: 8;
            z-index: 1;
            border-radius: vw(5);
            display: block;
            margin-top: vw(-1);
            margin-left: vw(-1);
        }
       }
    }
  }
  .tabs{
    & ul{
      display: flex;
      margin: vw(53) 0;
      & li{
         @include font(vw(13),700, vw(25), $greyBlue70);
         margin-right: vw(50);
         cursor: pointer;
         transition: 0.3s;
      }
      :hover{
           color:#8833FF;
         }
    }
  }
.catalog{
  display: grid;
  grid-template-columns: vw(350) vw(350) vw(350);
  grid-template-rows: vw(255) vw(255);
  grid-column-gap: vw(30);
  grid-row-gap: vw(30);
  .catalog__films{
    max-width: vw(350);
    min-height: vw(255);
    position: relative;
    & img{
      max-width: vw(350);
      min-height: vw(255);
    }
    .catalog-icons{
      position: absolute;
      display: flex;
      margin: vw(30) 0  0 vw(30);
      & span{
         @include font(vw(12),800, vw(20), $white);
         margin: vw(5) vw(170) 0 vw(15);
      }
      & svg rect:hover{
        fill: #FF6633;
        cursor: pointer;
        transition: 0.3s;
      }
    }
      & h6{
       @include font(vw(13),700, vw(25), $white);
       position: absolute;
       bottom: 0 ;
       margin: 0 0 vw(60) vw(30);
    }
     & h6:hover{
        color: #FF6633;
        cursor: pointer;
        transition: 0.3s;
      }
    .catalog__data{
      @include font(vw(13),700, vw(25), $white);
      position: absolute;
      bottom: 0;
      margin: 0 0 vw(30) vw(30);
     
    }
  }
  .catalog__genres{
    width: vw(350);
    height: vw(260);
    background-color:$white ;
    border-radius: vw(10);
    box-sizing: border-box;
    padding-left: vw(30);
    & ul{
       column-count: 2;
      .genres__list{
        padding: vw(15) vw(10);
        height: vw(40);
        box-sizing: border-box;
        display: flex;
        cursor: pointer;
          & img{
            width: vw(22) ;
            height: vw(22);
          }
          &-title{
          @include font(vw(12), 800, vw(20), $greyBlue60);
          display: inline-block;
          margin: auto auto auto vw(10);
        }
        .genres__list-title:hover{
          color: $purple;
        }
      }
    }
}
}
@media screen and (max-width: 875px){
  .slider__text{
    .slider__navigation{
       margin-top: vw(50);
    }
  }
  .tabs{
    & ul{
      & li{
        font-size: vw(15);
      }
    }
  }
  .catalog{
     .catalog__films{
       .catalog-icons{
         & svg{
           width: vw(50);
           height: vw(50);
         }
        & span{
            margin: vw(15) vw(170) 0 vw(15);
        }
       }
       & h6{
         font-size: vw(15);
       }
     }
     .catalog__genres{
       & ul{
        .genres__list{
           & img{
             width: vw(25);
             height: vw(25);
           }
           &-title{
             font-size: vw(15);
           }
         }
       }
     }
  }
}
@media screen and (max-width: 768px){
   .slider__text{
    .slider__navigation{
       margin-top: vw(40);
    }
    & span{
      font-size: vw(14);
    }
  }
  .tabs{
    & ul{
      & li{
        font-size: vw(20);
      }
    }
  }
   .catalog{
     .catalog__films{
       & h6{
         font-size: vw(16);
       }
     }
     .catalog__genres{
       & ul{
       .genres__list{
          &-title{
            font-size: vw(15);
          }
           & img{
             width: vw(25);
             height: vw(25);
           }
         }
       }
     }
  }
}
@media screen and (max-width: 578px){
  .back{
  & img{
        width: vmin(335);
        height: vmin(195);
      }
  }
   .slider__text{
     .slider__icon{
       & span{
         font-size: vmin(11);
       }
     }
     & span{
       font-size: vmin(6);
     }
     & h4{
       font-size: vmin(9);
     }
    .slider__navigation{
      font-size: vmin(5);
        .slider__line{
        height: vmin(1);
        width: vmin(100);
        // margin: vw(20) vw(23) vw(15);
        & span{
            height: vmin(1.5);
        }
       }
    }
  }
    .tabs{
      & ul{
        & li{
          font-size: vmin(6);
        }
      }
  }
  .catalog{
  grid-template-columns: vw(450) vw(450) vw(450);
  grid-template-rows: vw(355) vw(355);
   .catalog__films{
    max-width: vw(450);
    min-height: vw(355);
    & img{
      max-width: vw(450);
      min-height: vw(355);
    }
    .catalog-icons{
      margin: vmin(10) 0  0 vw(30);
      & span{
         font-size: vmin(4);
         margin: vw(30) vw(170) 0 vw(15);
      }
      & svg{
        width: vmin(20);
        height: vmin(20);
      }
    }
      & h6{
       font-size: vmin(6);
       margin: 0 0 vw(80) vw(30);
    }
    .catalog__data{
     font-size: vmin(5);
    }
  }
  .catalog__genres{
    & ul{
     .genres__list{
          &-title{
            font-size: vmin(5);
          }
      }
    }  
  }
  }
 
}
 @media screen and (max-width: 425px){
   .tabs{
    & ul{
      & li{
        font-size: vmin(9);
      }
    }
  }
    .back{
  & img{
        width: vmin(360);
        height: vmin(190);
      }
  }
     .slider__text{
       width: vw(900);
      }
  .catalog{
  grid-template-columns: vw(750) vw(750);
  grid-template-rows:34.1875vw  34.125vw  28.125vw;
  grid-column-gap: vw(30);
  grid-row-gap: 3.25vw;
  margin-bottom: vmin(50);
   .catalog__films{
    max-width: vw(750);
    min-height: vw(355);
    & img{
      max-width: vw(750);
      min-height: vw(355);
    }
    .catalog-icons{
      margin: vmin(10) 0  0 vw(30);
      & span{
         font-size: vmin(7);
         margin: vw(50) vmin(80) 0 vw(15);
      }
      & svg{
        width: vmin(30);
        height: vmin(30);
      }
    }
      & h6{
       font-size: vmin(9);
       margin: 0 0 vw(100) vw(30);
    }
    .catalog__data{
     font-size: vmin(7);
    }
  }
  .catalog__genres{
    min-width:46.875vw;
    min-height: 34.1875vw ;
    & ul{
      .genres__list{
        // padding: vmin(9) vw(10);
        height: vmin(20);
          &-title{
            font-size: vmin(8);
             margin: auto auto auto vw(20);
          }
          & img{
          width: vmin(10);
          height: vmin(10);
      }  
      }
    }  
  }
  }
  }
@media screen and (max-width: 320px){
    .back{
    & img{
        width: vmin(350);
        height: vmin(200);
      }
    }
    .tabs{
      & ul{
        & li{
          font-size: vmin(9);
        }
      }
    }
     .slider__text{
       width: vw(900);
       margin-top: vmin(3);
       & h4{
         font-size: vmin(13);
       }
       & span{
         font-size: vmin(7);
       }
        .slider__navigation{
          display: none;
        }
      }
  .catalog{
  grid-template-columns: vw(1110);
  grid-template-rows:50.1875vw  50.125vw  50.125vw 50.1875vw 50.1875vw;
  grid-column-gap: vw(30);
  grid-row-gap: 3.25vw;
  margin-left: 10%;
   .catalog__films{
    max-width: vw(1110);
    min-height: vw(555);
    & img{
      max-width: vw(1110);
      min-height: vw(555);
    }
    .catalog-icons{
      margin: vmin(10) 0  0 vw(30);
      & span{
         font-size: vmin(7);
         margin: vw(80) vmin(140) 0 vw(15);
      }
      & svg{
        width: vmin(40);
        height: vmin(40);
      }
    }
      & h6{
       font-size: vmin(9);
       margin: 0 0 vw(130) vw(30);
    }
    .catalog__data{
     font-size: vmin(7);
     margin-bottom: vmin(10);
    }
  }
 .catalog__genres{
    min-width:vw(1110);
    min-height: vw(755) ;
    & ul{
      margin-top: vw(35);
      .genres__list{
        height: vmin(25);
          &-title{
            font-size: vmin(10);
             margin: auto auto auto vw(30);
          }
          & img{
          width: vmin(20);
          height: vmin(20);
      }  
      }
    }  
  }
  }
}
</style>

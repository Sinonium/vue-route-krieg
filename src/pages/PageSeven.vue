<template>

<section class="hero">
  <div class="container">
    <div class="heroImg"></div>
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(menu,index) in menuList" :key="index">
          <router-link class="nav-link active" aria-current="page" :to="menu.path">
            {{menu.name}}
          </router-link>
        </li>
      </ul>
    <button class="circle">
      <img src="../assets/img/PageSeven/Icon.png" alt="">
    </button>
    <button class="circle2">
      <img src="../assets/img/PageSeven/Icon2.png" alt="">
    </button>
    <div class="logo"></div>
    <div class="gameoftronescopy"></div>
    <div class="h"></div>
    <div class="bo"></div>
    <div class="lmdb"></div>
    <div class="score">
      <img src="../assets/img/PageSeven/9.5.png" alt="">
    </div>
    <p class="text">The main epic of our time. A fantasy that speaks of human passions, the nature of power, the mechanisms of politics and the structure of our world is more accurate and better than any documentary movie. A fairy tale from which it is impossible to break away. The most popular and expensive series in the world.</p>
    <button class="play">
      <img src="../assets/img/PageSeven/play.png" alt="">
    </button>
    <div class="start">
      <h1>Start Watch</h1>
    </div>
    <div class="seasons">
      <h3>Seasons:</h3>
    </div>
    <button class="b1">
      <h3>1</h3>
    </button>
    <button class="b2">
      <h3>2</h3>
    </button>
    <button class="b3">
      <h3>3</h3>
    </button>
    <button class="b4">
      <h3>4</h3>
    </button>
    <button class="b5">
      <h3>5</h3>
    </button>
    <button class="b6">
      <h3>6</h3>
    </button>
    <button class="b7">
      <h3>7</h3>
    </button>
    <button class="b8">
      <h3>8</h3>
    </button>
    <div class="heroVideo">
      <iframe width="445" height="280" src="https://www.youtube.com/embed/BI8vTs5-ZbQ?list=RDBI8vTs5-ZbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="card">
  <iframe width="255" height="160" src="https://www.youtube.com/embed/tlNYHPBYu28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
  <div class="card-body">
    <p class="card-text">Winter Is Coming</p>
  </div>
</div>
<div class="card2">
  <iframe width="255" height="160" src="https://www.youtube.com/embed/tlNYHPBYu28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
  <div class="card-body2">
    <p class="card-text2">Winter Is Coming</p>
  </div>
</div>

    
  </div> 
</section>
        
       

    


  
</template>

<script>
export default {
    data(){
        return{
            menuList:[
                {name: 'Main',path:'/'},
                {name: 'Series',path:'/'},
                {name: 'Drama',path:'/'},
                {name: 'Game of Trones',path:'/'},
            ],
        }
    },

}
</script>

<style>

.heroImg{
  background-image: url('../assets/img/PageSeven/hero.png');
  width: 1100px;
  height: 635px;
left: 0px;
right: 0px;
top: 0px; 
border-radius: 10px;
}
.nav-item{
  margin: 20px;
  
  
  position: absolute;
  top: 63px;
  display: block;
  justify-content: space-between;
  font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 25px;
/* identical to box height, or 192% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.6;
}
.circle{
  top: 50px;
  left: 925px;
  position: absolute;
width: 60px;
height: 60px;
background-color: rgb(230, 147, 147);;
border: 1px solid rgb(230, 147, 147);
opacity: 0.1;
border-radius: 30px;
}


.circle:hover{
  opacity: .8;
  cursor: pointer;

}
.circle2{
  top: 50px;
  left: 1000px;
  position: absolute;
width: 60px;
height: 60px;
background-color: rgb(230, 147, 147);;
border: 1px solid rgb(230, 147, 147);
opacity: 0.1;
border-radius: 30px;
}


.circle2:hover{
  opacity: .8;
  cursor: pointer;

}

.icon{
  
  
width: 28px;
height: 25px;
left: 60px;
top: 0px;

/* White */

background: #FFFFFF;
opacity: 0;

  
}
.icon2{
 
  
width: 28px;
height: 25px;
left: 30px;
top: 0px;

/* White */

background: #FFFFFF;
opacity: 1;

  z-index: 2;
}
.logo{
  background-image: url('../assets/img/PageSeven/Logo.png');
  position: absolute;
width: 400px;
height: 107px;
left: 45px;
top: 125px;

}
.gameoftronescopy{
  background-image: url('../assets/img/PageSeven/Game Of Trones Copy.png');
  position: absolute;
width: 103px;
height: 30px;
left: 65px;
top: 250px;
}
.h{
  background-image: url('../assets/img/PageSeven/H.png');
  position: absolute;
width: 8.79px;
height: 12.11px;
left: 189px;
top: 259.2px;

/* White */

background: #FFFFFF;
}
.bo{
  background-image: url('../assets/img/PageSeven/BO.png');
  position: absolute;
width: 20.53px;
height: 12.36px;
left: 198.47px;
top: 259px;

/* White */

background: #FFFFFF;
}
.lmdb{
  background-image: url('../assets/img/PageSeven/Imdb.png');
  position: absolute;
width: 38.14px;
height: 20px;
left: 244px;
top: 255px;
}
.score{
  border-radius: 10px;
  position: absolute;
width: 19px;
height: 20px;
left: 298px;
top: 255px;
}
.text{position: absolute;
width: 420px;
height: 80px;
left: 65px;
top: 310px;

/* Semibold 12 */

font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
/* or 167% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.8;}
.play{
  position: absolute;
  color: #FFFFFF;
  background-color: purple;
  border: 1px solid purple;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  left: 65px;
top: 430px;
}
.play:hover{
  opacity: .8;
  cursor: pointer;

}
.card{
  padding: 0;
  margin: 0;
  border-radius: 10px;
  background-color: wheat;
  width: 255px;
  height: 255px;
}
.card-text{
  
width: 94px;
height: 20px;

top: 185px;

/* Bold 12 */

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */

text-align: center;
justify-content: center;

/* Grey Blue 50 */

color: #4D5E80;

}
.start{
  position: absolute;
height: 30px;
left: 150px;

top: 430px;

/* Bold 16 */

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 30px;
/* identical to box height, or 187% */


/* White */

color: #FFFFFF;

}
.seasons{
  position: absolute;
height: 25px;
left: 65px;
top: 550px;

/* Bold 13 */

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 25px;
/* identical to box height, or 192% */


/* White */

color: #FFFFFF;

}
.b1{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 165px;
top: 545px;
}
.b1:hover{
  opacity: .8;
  cursor: pointer;

}
.b2{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 215px;
top: 545px;
}
.b2:hover{
  opacity: .8;
  cursor: pointer;

}
.b3{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 265px;
top: 545px;
}
.b3:hover{
  opacity: .8;
  cursor: pointer;

}
.b4{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 315px;
top: 545px;
}
.b4:hover{
  opacity: .8;
  cursor: pointer;

}
.b5{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 365px;
top: 545px;
}
.b5:hover{
  opacity: .8;
  cursor: pointer;

}
.b6{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 415px;
top: 545px;
}
.b6:hover{
  opacity: .8;
  cursor: pointer;

}
.b7{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 465px;
top: 545px;
}
.b7:hover{
  opacity: .8;
  cursor: pointer;

}
.b8{
  position: absolute;
  color: #FFFFFF;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  left: 515px;
top: 545px;
}
.b8:hover{
  opacity: .8;
  cursor: pointer;

}
h3{
  
  margin: 0;
}
.heroVideo{
  position: absolute;

left: 700px;

top: 310px;

border-radius: 10px;
}
.card2{
  padding: 0;
  margin: 0;
  border-radius: 10px;
  background-color: wheat;
  width: 255px;
  height: 255px;
  left: 100px;
}
.card-text2{
  
width: 94px;
height: 20px;

top: 185px;

/* Bold 12 */

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */

text-align: center;
justify-content: center;

/* Grey Blue 50 */

color: #4D5E80;

}


</style>





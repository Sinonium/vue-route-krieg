<template>
    <div class="backdrop"> 
        <div class="modalvideo">
                <iframe src="https://www.youtube.com/embed/tlNYHPBYu28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="modal">
                <span>s2 e1, The North Remembers</span>
                <p>Tyrion arrives at King's Landing to take his father's place as Hand of the King. Stannis Baratheon plans to take the Iron Throne for his own. Robb tries to decide his next move in the war. The Night's Watch arrive at the house of Craster.</p>
                <span class="bio">
                   
                        Director: 
                   
                </span>
                <span class="bio">
                    
                        Writers: 
                    
                </span>
                <span class="bio">
                    
                       Stars: 
                    
                </span>
                
                 </div>
                 <div class="card">
    <button class="vbutton"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z" fill="#FFCB33"/>
</svg>
    </button>
  <img src="../assets/img/PageSeven/video11.png" class="card-img-top" alt="">
  <span>01:01:41</span>
  <div class="card-body">
    <p class="card-text">The Pointy End </p>
    <p class="card-text2">1 Season, 8 Episode</p>
  </div>
</div>
<div class="card2">
    <button class="vbutton2"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.0011V24.2891C16 24.9211 16.696 25.3051 17.232 24.9611L23.744 20.8171C24.24 20.5051 24.24 19.7851 23.744 19.4651L17.232 15.3291C16.696 14.9851 16 15.3691 16 16.0011Z" fill="#FFCB33"/>
</svg>
    </button>
  <img src="../assets/img/PageSeven/video12.png" class="card-img-top2" alt="">
  <span>01:01:41</span>
  <div class="card-body2">
    <p class="card-textt2">The Night Lands </p>
    <p class="card-text22">2 Season, 2 Episode</p>
  </div>
</div>


<div class="closebtn">
    <button @click="closeModal"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.05" width="60" height="60" rx="30" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.8925 23.3025C35.7057 23.1152 35.452 23.01 35.1875 23.01C34.923 23.01 34.6693 23.1152 34.4825 23.3025L29.5925 28.1825L24.7025 23.2925C24.5157 23.1052 24.262 23 23.9975 23C23.733 23 23.4793 23.1052 23.2925 23.2925C22.9025 23.6825 22.9025 24.3125 23.2925 24.7025L28.1825 29.5925L23.2925 34.4825C22.9025 34.8725 22.9025 35.5025 23.2925 35.8925C23.6825 36.2825 24.3125 36.2825 24.7025 35.8925L29.5925 31.0025L34.4825 35.8925C34.8725 36.2825 35.5025 36.2825 35.8925 35.8925C36.2825 35.5025 36.2825 34.8725 35.8925 34.4825L31.0025 29.5925L35.8925 24.7025C36.2725 24.3225 36.2725 23.6825 35.8925 23.3025Z" fill="white"/>
</svg>
</button>
</div>
    </div>
</template>

<script>
export default {
    props:['vd'],
    name:"PageSevenModal",
    methods: {closeModal(){
    this.$emit('closeModal')
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.modal{position: absolute;
    left: vw(245);
    top: vw(800);
    height: vw(500);
    width: vw(825);
    padding: 20px;
    margin: 100px auto;
    background-color: #26334D;
    border-radius:10px;
    
   
span{
    width: 195px;
height: 30px;
margin: 60px;

/* Bold 15 */

font-family: 'SF Pro Display';
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 30px;
/* identical to box height, or 200% */


/* White */

color: #FFFFFF;

}
p{
    height: 75px;   
max-width: vw(582);
margin-left: vw(40);
margin-top: vw(60);
margin-bottom: vw(60);

/* Semibold 13 */

font-family: 'SF Pro Display';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
/* or 192% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.8;
}
.bio{
  display: flex;
  flex-direction: column;
    
        font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
margin-left: vw(40);
font-size: 18px;
line-height: 20px;
margin-bottom: vw(25);
/* identical to box height, or 167% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.3;
}
    
}
.backdrop{

    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    width: vw(1600);
    height: vw(1910);
    z-index: 100000;
    }
iframe{
    width: vw(1110);
    height: vw(825);
    position: absolute;
    margin-top: vw(50);
    margin-left: vw(245);
z-index: 12000000000000000;
}
.card{
    position: absolute;
  margin-bottom: vw(30);
  margin-right: vw(30);
  height: vw(255);
  width: vw(255);
left: vw(1130);
top: vw(915);

/* White */

background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
border-radius: 10px;
img{
  width: vw(255);
  height: vw(160);
}
button{
  height: vw(40);
  width: vw(40);
  position: absolute;
  margin-left: vw(108);
  margin-top: vw(60);
  background: #0D111A;
opacity: 0.5;
border-radius: 30px;
cursor: pointer;
border: none;
}
span{
  margin-top: vw(115);
  margin-left: vw(-80);
  position: absolute;
  font-family: 'SF Pro Display';
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
/* identical to box height, or 167% */


/* White */

color: #FFFFFF;

}
}
.card-text{
  width: vw(300);
height: 20px;

/* Bold 12 */

font-family: 'SF Pro Display';
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
color: $greyBlue50;
margin-left: vw(60);
margin-top: vw(25);
}
.card-text2{
width: vw(300);
height: 20px;
margin-left: vw(-30);
margin-top: vw(-15);

/* Semibold 12 */

font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
/* identical to box height, or 167% */

text-align: center;

/* Grey Blue 80 */

color: #ADB8CC;
}
.card2{
    position: absolute;
  margin-bottom: vw(30);
  margin-right: vw(30);
  height: vw(255);
  width: vw(255);
  left: vw(1130);
  top: vw(1200);

/* White */

background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
border-radius: 10px;
img{
  width: vw(255);
  height: vw(160);
}
button{
  height: vw(40);
  width: vw(40);
  position: absolute;
  margin-left: vw(108);
  margin-top: vw(60);
  background: #0D111A;
opacity: 0.5;
border-radius: 30px;
cursor: pointer;
border: none;
}
span{
  margin-top: vw(115);
  margin-left: vw(-80);
  position: absolute;
  font-family: 'SF Pro Display';
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
/* identical to box height, or 167% */


/* White */

color: #FFFFFF;

}
}
.card-textt2{
  width: vw(300);
height: 20px;

/* Bold 12 */

font-family: 'SF Pro Display';
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
color: $greyBlue50;
margin-left: vw(70);
margin-top: vw(25);
}
.card-text22{
width: vw(300);
height: 20px;
margin-left: vw(-30);
margin-top:vw(-15);

/* Semibold 12 */

font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 20px;
/* identical to box height, or 167% */

text-align: center;

/* Grey Blue 80 */

color: #ADB8CC;
}
.closebtn{
    button{
        position: absolute;
        width:vw(60);
    height:vw(60);
    opacity: 0.5;
    border-radius: 60px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    

/* White */



left: vw(1325);
top: 0px;

    }
    
}
.autor{
  position: absolute;
  display: flex;
  flex-direction: column;
    
        font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
margin-left: vw(300);
font-size: 18px;
line-height: 20px;
margin-bottom: vw(25);
/* identical to box height, or 167% */


/* White */

color: #FFFFFF;

mix-blend-mode: normal;
}

    
 
    


</style>
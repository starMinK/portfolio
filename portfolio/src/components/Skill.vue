<script>

</script>

<template>
  <div class="skill_wrap">
    <div class="page_back"><img src="@/assets/pageBack.png"></div>
    <div class="skill_contents">
      <div class="skill_title">
        <h1>Skills</h1>
        <div class="line line1"></div>
        <div class="line line2"></div>
        <img class="skill_img_container" src="@/assets/book.png"/>
      </div>
      <div class="skill_sub_title">
        front-end
        <img class="skill_sub_title_img" src="@/assets/point.png">
      </div>
      <div class="skills">
        <div class="skill_item">
          <span class="skill_item_title">html, css, js</span>
          <div class="skills-bar_warp">
            <div class="skills_bar" style="width: 100%">100%</div>
          </div>
        </div>

        <div class="skill_item">
          <span class="skill_item_title">Vue.js</span>
          <div class="skills-bar_warp">
            <div class="skills_bar" style="width: 100%">100%</div>
          </div>
        </div>

        <div class="skill_item">
          <span class="skill_item_title">JSP</span>
          <div class="skills-bar_warp">
            <div class="skills_bar" style="width: 90%">90%</div>
          </div>
        </div>

        <div class="skill_item">
          <span class="skill_item_title">bootstrap</span>
          <div class="skills-bar_warp">
            <div class="skills_bar" style="width: 90%">90%</div>
          </div>
        </div>

        <div class="skill_item">
          <span class="skill_item_title">thymeleaf</span>
          <div class="skills-bar_warp">
            <div class="skills_bar" style="width: 100%">100%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page_front"><img src="@/assets/pageFront.png"></div>
  </div>
</template>

<style>
@font-face {
  font-family: 'seolleimcool-SemiBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/seolleimcool-SemiBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.skill_wrap {
  font-family: 'seolleimcool-SemiBold', sans-serif;

  background-color: #6E1511;
  color: white;
  height: 95vh;
  display: flex;
  align-items: center;
}

.skill_contents {
  height: 90%;
  width: 80%;
}

.skill_title {
  display: flex;
  justify-content: center;

  width: 15rem;
  position: relative;
  padding-bottom: 5px;

  font-size: 2rem;
}

.skill_title .line {
  position: absolute;
  height: 10px;
  background-color: white;
  border-radius: 5px;
}

.skill_title .line1 {
  width: 100%;
  bottom: 0;
  right: 0;
}

.skill_title .line2 {
  width: 40%;
  bottom: -15px;
  right: 0;
}

.skill_sub_title {
  display: flex;
  width: 90%;
  margin: 5rem;

  font-size: 2rem;

  position: relative;
}

.skill_sub_title_img {
  position: absolute;
  left:-10%;
  top: -220%;

  width: 237px;
  height: 177px;
}

.skill_img_container {
  position: absolute;
  bottom: -50%;
  left: -50%;

  width: 200px;
  height: 100px;
}

.skills {
  color: white;

  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: start;
}

.skill_item_title{
  margin-right: 10px;
  width: 10%;
  font-size: 1.2rem;
}

.skill_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem 0;
  width: 100%;

  position: relative;
}

.skills-bar_warp {
  background-color: white;
  border-radius: 50px;
  height: 2rem;
  width: 100%;

  position: absolute;
  left: 100px;
}

.skills_bar {
  background-color: #007548;

  border-radius: 50px;
  height: 2rem;

  position: absolute;
  top: 0;
  left: 0;

  text-align: end;
}
</style>
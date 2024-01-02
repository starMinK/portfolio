<script>
export default {
  name: "Nav",
  props: {
    scrollToSectionProps: Function,
  },
  data() {
    return {
      isTop: true,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.scrollToSectionProps(sectionId);
    },
    handleScroll() {
      this.isTop = (window.scrollY === 0);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <div class="nav_contents" :class="{top : isTop}">
      <div class="nav_wrap">
        <h2 class="nav_title" @click="scrollToSection('title')">Gyumin's Portfolio</h2>

        <ul class="nav">
          <li @click="scrollToSection('aboutMe')">About me</li>
          <li @click="scrollToSection('skill')">Skills</li>
          <li @click="scrollToSection('archiving')">Archiving</li>
          <li @click="scrollToSection('project')">Project</li>
          <li @click="scrollToSection('contact')">Contact</li>
        </ul>
      </div>
    </div>
</template>

<style>
@font-face {
  font-family: 'seolleimcool-SemiBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/seolleimcool-SemiBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

/*Nav body*/
.nav_contents {
  font-family: 'seolleimcool-SemiBold', sans-serif;

   /*네비게이션 색상*/
  background-color: #ffffff;
  color: black;

  /*네비게이션 배경 색상 에니메이션 속도*/
  transition: background-color 0.3s ease-in-out;

  /*네비게이션 바 상단 고정*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/*네비게이션 최상단일때 색상*/
.nav_contents.top {
  background-color: #007447;
  color: rgba(241, 241, 241, 0.91);
}

/*네비게이션 객체*/
.nav_wrap {
  /*크기 설정*/
  max-width: 71.25rem;
  height: 60px;

  /*네이게이션 메뉴 정렬*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /*중앙 정렬*/
  margin: 0 auto;
}

/*타이틀*/
.nav_title {
  display: flex;
  text-align: left;
}

/*네비게이션 메뉴들*/
.nav {
  width: 50%;
  list-style: none;

  display: flex;
  align-items: center;
}

/*네비게이션 메뉴 상세*/
.nav li {
  padding: 0 16px 0 16px;
}

</style>
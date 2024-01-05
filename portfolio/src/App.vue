<script>

import Nav from "@/components/Nav.vue";
import Title from "@/components/Title.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skill from "@/components/Skill.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import Archiving from "@/components/Archiving.vue";

export default {
  name: 'App',
  components: {
    Nav,
    Title,
    AboutMe,
    Skill,
    Archiving,
    Project,
    Contact,
  },
  data() {
    return {
      sectionIndex: 0,
      scrollPercentage: 0,
      scrollAbout: false,
    };
  },
  methods: {
    scrollToSection(refName) {
      const section = this.$refs[refName];
      if (section) {
        section.$el.scrollIntoView({behavior: "smooth"});
      }
    },
    scrollPercent() {
      let currY = document.documentElement.scrollTop; //스크롤한 높이
      let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//스크롤 가능한 높이
      this.scrollPercentage = (currY / totalY) * 100;//퍼센트 값

      if (this.scrollPercentage > 12) {
        this.scrollAbout = true;
      }
      console.log(this.scrollPercentage);
      console.log(this.scrollAbout);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollPercent);
  }

}
</script>

<template>
    <Nav :scrollToSectionProps="scrollToSection"></Nav>
    <Title ref="title" sectionId="title"></Title>
    <AboutMe ref="aboutMe" sectionId="aboutMe" :scrollAbout="scrollAbout"></AboutMe>
    <Skill ref="skill" sectionId="skill"></Skill>
    <Archiving ref="archiving" sectionId="archiving"></Archiving>
    <Project ref="project" sectionId="project"></Project>
    <Contact ref="contact" sectionId="contact"></Contact>
</template>

<style>
@font-face {
  font-family: 'yg-jalnan';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0 auto;
  padding: 0;
  scroll-margin-top: 60px;
}

html, body {
  color: #333;

  font-size: 16px;

  overflow-x: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
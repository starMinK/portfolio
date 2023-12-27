<script>
export default {
  name: "Title",
  data() {
    return {
      fullText: "안녕하세요\n끊임없이 도전하고 성장해 나가는 Web Developer 김규민입니다.",
      animatedText: '',
      isAdding: true,
      index: 0,
    }
  },
  watch: {
    animatedText() {
      this.textAnimation();
    },
  },
  mounted() {
    this.textAnimation();
  },
  methods: {
    textAnimation(){
      if (this.isAdding) {
        if (this.index === this.fullText.length) {
          this.isAdding = false;
          setTimeout(this.animatedText, 1000);
        } else {
          this.animatedText = this.fullText.slice(0, ++this.index);
          setTimeout(this.animatedText, 100);
        }
      } else {
        console.log("idAdding == false")
        if (this.index === 0) {
          this.isAdding = true;
          this.animatedText = '';
        } else {
          this.animatedText = this.fullText.slice(0, --this.index);
          setTimeout(this.animatedText, 100);
        }
      }
    }
  }
}
</script>

<template>
  <div class="title_wrap">
    <div class="title_contents">
      <h1 class="title_subject">{{ animatedText }}</h1>
      <div class="title_content">
        초등학교 5학년 때부터 C, C++, Unity를 공부하며 게임 개발에 빠져들었고
        중학생 때는 JAVA와 네트워크를 배워
        마인크래프트 서버를 운영하고 플러그인을 개발했습니다.
        고등학교 때는 메이플스토리에 흥미를 느끼며 메신저 봇 개발과 로블록스 게임 개발에 참여했습니다.
        현재는 풀스택 개발자로서 살아가고 있습니다.
        앞으로도 꾸준히 도전적이고 성장해나가는 개발자가 되고싶습니다!
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'EASTARJET-Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/EASTARJET-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

.title_wrap {
  /*폰트 설정*/
  font-family: 'EASTARJET-Medium', sans-serif;

  /*배경 색 설정*/
  background-color: #007548;

  /*위치 및 크기 설정*/
  margin: 50px auto 0 auto;
  height: 55rem;

  /*내부 객체 중앙 정렬*/
  display: flex;
  align-items: center;
}

.title_subject {
  border-right: 2px solid; /* 커서처럼 보이는 효과 */
  white-space: nowrap; /* 텍스트가 한 줄에 표시되도록 함 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
}

.title_contents {
  max-width: 71.25rem;
}
</style>
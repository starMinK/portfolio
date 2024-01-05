<script>
export default {
  name: "Title",
  data() {
    return {
      texts: ["안녕하세요 :)", "끊임없이 도전하고 성장해 나가는 Web Developer 김규민입니다."],
      textIndex: 0,
      textCharIndex: 0,
      typedText: ``,
      isDeleting: false,
      typingSpeed: 70,
      deletingSpeed: 30,

    }
  },
  mounted() {
    // this.typingAnimation();
    this.startTyping();
  },
  methods: {
    startTyping() {
      if (this.textIndex < this.texts.length) {
        this.addText();
      } else {
        setTimeout(this.startDeleting, 1500);
      }
    },
    addText() {
      let fullText = this.texts[this.textIndex];

      if (this.textCharIndex < fullText.length) {
        this.typedText += fullText[this.textCharIndex];
        this.textCharIndex++;
        setTimeout(this.addText, this.typingSpeed);
      } else {
        this.textIndex++;
        this.textCharIndex = 0;

        if (this.textIndex < this.texts.length) {
          this.typedText += `<br/>`;
        }
        setTimeout(this.startTyping, this.typingSpeed);
      }
    },
    startDeleting() {
      if (this.typedText.length > 0) {
        this.deleteText();
      } else {
        this.textIndex = 0;
        this.textCharIndex = 0;
        this.startTyping();
      }
    },
    deleteText() {
      if (this.typedText.endsWith('<br/>')) {
        this.typedText = this.typedText.slice(0, -5);
      } else {
        this.typedText = this.typedText.slice(0, -1);
      }
      setTimeout(this.startDeleting, this.deletingSpeed);
    },
  }
}
</script>

<template>
  <div class="title_wrap">
    <div class="title_contents">
      <h1 class="title_subject" v-html="typedText"></h1>
      <div class="title_content">
        <h2>
          초등학교 5학년 때부터 C, C++, Unity를 공부하며 게임 개발에 빠져들었고<br/>
          중학생 때는 JAVA와 네트워크 배워 마인크래프트 서버를 운영하고 플러그인을 개발했습니다.<br/>
          고등학교 때는 메이플스토리에 흥미를 느끼며 메신저 봇 개발과 로블록스 게임 개발에 참여했습니다.<br/>
          현재는 풀스택 개발자로서 개발을 하고 있습니다.<br/>
          저는 과거도 지금도 앞으로도 꾸준히 도전적이고 성장하는 개발자입니다.
        </h2>
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

@font-face {
  font-family: 'TAEBAEKmilkyway';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/TAEBAEKmilkyway.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.title_wrap {
  /*폰트 설정*/
  font-family: 'EASTARJET-Medium', sans-serif;

  /*배경 색 설정*/
  background-color: #007548;

  /*위치 및 크기 설정*/
  margin: 50px auto 0 auto;
  height: 70vh;
}

.title_subject {
  //font-family: 'TAEBAEKmilkyway', sans-serif;
  text-align: center;

  width: 80rem;
  height: 8rem;

  color: #171717;
}

.title_contents {
  text-align: center;
  width: 80rem;
  padding-top: 10rem;
  /*자식 요소들이 위치를 상대적으로 조정할 수 있도록 설정*/
  position: relative;
}

.title_subject::after {
  content: '|';
  width: 3px; /* 커서의 너비를 설정합니다 */
  margin-left: 5px; /* 커서와 텍스트 사이의 간격을 설정합니다 */
  height: 1em; /* 커서의 높이를 설정합니다 */
  background-color: #171717; /* 커서의 배경색을 검정색으로 설정합니다 */
  color: transparent; /* 커서의 색상을 투명하게 설정합니다 */
}

.title_content {
  font-family: 'TAEBAEKmilkyway', sans-serif;
  font-size: 1.2rem;

  position: relative;
  z-index: 1;

  line-height: 3rem;
  color: antiquewhite;
}
</style>
<script>

</script>

<template>
  <div class="aboutMe_contents_wrap">
    <div class="aboutMe_title_wrap">
      <img src="@/assets/aboutme.png">
      <h1 class="aboutMe_title">ABOUT ME</h1>
    </div>
    <div class="aboutMe_contents">
      <div class="aboutMe_contents_inner">
        <div class="about">
          <div class="item">
            <img class="item_img" src="@/assets/nameIcon.png">
            <div class="item_content">
              <h1>이름</h1>
              <h2>김규민</h2>
            </div>
          </div>
        </div>

        <div class="about">
          <div class="item">
            <img class="item_img" src="@/assets/phoneNum.png">
            <div class="item_content">
              <h1>연락처</h1>
              <h2>010-5525-3306</h2>
            </div>
          </div>
        </div>

        <div class="about">
          <div class="item">
            <img class="item_img" src="@/assets/birth.png">
            <div class="item_content">
              <h1>생년월일</h1>
              <h2>04.03.29</h2>
            </div>
          </div>
        </div>

        <div class="about">
          <div class="item">
            <img class="item_img" src="@/assets/email.png">
            <div class="item_content">
              <h1>이메일</h1>
              <h2>rbals040329@gmail.com</h2>
            </div>
          </div>
        </div>

        <div class="about">
          <div class="item">
            <img class="item_img" src="@/assets/address.png">
            <div class="item_content">
              <h1>주소지</h1>
              <h2>서울특별시 구로구</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutMe_image-container">
        <img src="@/assets/aboutCookie.png">
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
  font-family: 'seolleimcool-SemiBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/seolleimcool-SemiBold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.aboutMe_contents_wrap {
  font-family: 'seolleimcool-SemiBold', sans-serif;

  background-color: #FDE9CE;

  height: 95vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.aboutMe_contents {
  height: 60%;
  width: 60%;
  background: white;
  margin: 10px auto;
  border-radius: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
}

.aboutMe_contents_inner {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.about:nth-child(odd) {
  height: 6rem;
  display: flex;
  flex-direction: row;
  margin: 0;
}

.about:nth-child(even) {
  height: 6rem;
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
}

.item {
  width: 400px;
  margin: 20px;
  display: flex;
  flex-direction: row;
}

.item_img {
  margin: 0 10px 0 0;
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.aboutMe_title_wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 50%;
}

.aboutMe_title_wrap > img {
  width: 5rem;
  margin: 10px 20px 0 0;
}

.aboutMe_title {
  font-size: 4rem;
  display: flex;
  text-align: center;
  margin: 0;
  text-decoration: underline;
}

.item_content {
  margin: 0;
  text-align: start;
}

.item_content > h2 {
  color: #737373;
}

.aboutMe_image-container {
  position: absolute;
  top: 60%;
  left: -10%;
  z-index: 0;
}

.aboutMe_image-container > img {
  width: 237px;
  height: 240px;
  object-fit: contain;
}
</style>
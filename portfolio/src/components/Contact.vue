<script>

</script>

<template>
  <div class="contact_contents_wrap">
    <div class="contact_contents">
      <div class="contact">
        <h2>Contact</h2>
        <form class="contact-form">
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.contact_contents_wrap {
  background-color: #E5888A;
  height: 95vh;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

.contact-form button {
  background-color: #77dd77;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
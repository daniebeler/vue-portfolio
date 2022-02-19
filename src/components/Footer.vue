<template>
  <section
    class="page_footer d-flex align-items-center justify-content-center panel"
    data-color="transparent"
  >
    <div class="container">
      <div class="contact-background">
        <div class="row">
          <div class="col-xs-12 col-md-6 mb-3">
            <div>
              <h2 class="contact-header">Contact me</h2>
              <p class="contact-text">
                Sonnenstrasse 11a
                <br />
                6890 Lustenau, Austria
                <br />
                <a class="mail-link" href="mailto: hiebeler.daniel@gmail.com"
                  >hiebeler.daniel@gmail.com</a
                >
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/daniebeler/"
                ><img
                  class="not-draggable"
                  src="https://daniebeler.com/assets/img/instagram.svg"
                  alt="Instagram"
                  width="48"
                  height="48"
              /></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="form-group">
              <input
                id="mail-subject"
                type="text"
                class="input_general form-label"
                name="name"
                placeholder="Subject"
                autocomplete="off"
              />
            </div>
            <div class="form-group">
              <textarea
                id="mail-text"
                class="input_general form-label"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="text-center">
              <a
                href=""
                onclick="sendMail(); return false"
                class="btn_general btn_dark"
                >Send Message</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer'
}
</script>

<style scoped>

.page_footer{
  background-color: #222A2F;
}

.footer {
  padding-top: 70px;
  padding-bottom: 70px;
}

.contact-background {
  width: 100%;
  background-color: var(--my_light);
  border-radius: 15px;
  padding: 30px;
  z-index: 2;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
}

.mail-link {
  color: var(--my_dark);
  text-decoration: none;
}

.mail-link:hover {
  color: var(--my_dark);
  text-decoration: underline;
}

.send-button {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: #4b597b;
  border-radius: 4px;
  color: var(--my_light);
  font-size: 1.2rem;
  border: none;
}

.send-button:hover {
  background: rgba(48, 107, 242, 1);
  color: var(--my_light);
  cursor: pointer;
}

.contact-header {
  color: #eb3349;
}

.input_general {
  border: 3px solid var(--my_dark);
  border-radius: 7px;
  padding: 10px;
  width: 100%;
}

.input_general:focus {
  outline: none;
}

.contact-text {
  color: var(--my_dark);
  font-size: 1.5rem;
}

@media screen and (max-width: 768px) {
  .contact-text {
    font-size: 1rem;
  }
}

</style>

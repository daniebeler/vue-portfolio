<template>
  <section class="page_footer d-flex align-items-center justify-content-center panel" data-color="transparent">
    <div class="container">
        <div class="contact-background">
            <div class="row">
                <div class="col-xs-12 col-md-6 mb-3">
                    <div>
                        <h2 class="contact-header">
                            Contact me
                        </h2>
                        <p class="contact-text">
                            Sonnenstrasse 11a
                            <br>
                            6890 Lustenau, Austria
                            <br>
                            <a class="mail-link" href="mailto: hiebeler.daniel@gmail.com">hiebeler.daniel@gmail.com</a>
                        </p>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/daniebeler/"><img class="not-draggable" src="https://daniebeler.com/assets/img/instagram.svg" alt="Instagram" width="48" height="48" /></a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">

                    <div class="form-group">
                        <input id="mail-subject" type="text" class="input_general form-label" name="name" placeholder="Subject" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <textarea id="mail-text" class="input_general form-label" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div class="text-center">
                        <a href="" onclick="sendMail(); return false" class="btn_general btn_dark">Send Message</a>
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

</style>

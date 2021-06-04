<template>
  <div class="contact">
    <div id="form">
      <h1 class="form-h1">Contact us</h1>
      <form id="form-id" class="form" method="post" action="">
        <div class="form-group">
          <label for="Name" class="label">Your name</label>
          <div class="input-group">
            <input type="text" id="name" name="Name" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="Email" class="label">Your email address</label>
            <div class="input-group">
              <input type="email" id="email" name="Email" class="form-control" width=25% maxlength="150" required>
            </div>
          </div>
          <div class="form-group">
            <label for="Message" class="label">Your message</label>
            <div class="input-group">
              <textarea id="message" name="Message" class="form-control" rows="6" maxlength="3000" required></textarea>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" id="form-submit-button" class="form-control, form-button">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Contact form",
  }),
  name: "Contact",
  components: {},
  head: {
    // creates a title tag in header.
    title () {
      return {
        inner: this.title,
      }
    },
    meta: [
      // creates a meta description tag in header.
      { name: 'Contact', content: 'Contact form for My True Nature and Lana Marie' }
    ]
  }
};
</script>

<style scoped src="../styles/css/Contact.css" lang="css"/>
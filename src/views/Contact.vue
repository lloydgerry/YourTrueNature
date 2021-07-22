<template>
  <div class="contact">
    <div>
      <h1 class="form-h1">Contact us</h1>
      <transition name="fade">
        <div v-if="sent">
          <p id="sentMessage">
            Thanks, we will get back to you as soon as possible!
          </p>
        </div>
      </transition>

      <div id="form" v-if="!sent" @submit.prevent="submitForm">
        <form
          id="contact-form"
          class="form"
          method="POST"
          action="sendContactMessage"
        >
          <div class="form-group">
            <label for="Name" class="label">Name</label>
            <div class="input-group">
              <input
                type="text"
                id="name"
                name="Name"
                v-model="form.name"
                class="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="Email" class="label">Email</label>
              <div class="input-group">
                <input
                  type="email"
                  id="email"
                  name="Email"
                  v-model="form.email"
                  class="form-control"
                  width="25%"
                  maxlength="150"
                  placeholder="Your Email Address"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="Message" class="label">Your message</label>
              <div class="input-group">
                <textarea
                  name="Message"
                  class="form-control"
                  v-model="form.message"
                  id="message-box"
                  rows="6"
                  maxlength="3000"
                  required
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <button
                id="form-submit-button"
                class="form-button"
                @submit.prevent="submitForm"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue from "vue";
import axios from "axios";

//Vue.use(axios);

export default {
  name: "Contact",
  data: () => ({
    title: "Contact form",
    sent: false,
    form: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    submitForm: function () {
      try {
        axios.post("http://localhost:3000/sendContactMessage", {
          formData: this.form,
        });
        this.sent = true;
      } catch (error) {
        console.log("Error from submitForm: " + error);
      }
    },
  },
  components: {},
  head: {
    // creates a title tag in header.
    title() {
      return {
        inner: this.title,
      };
    },
    meta: [
      // creates a meta description tag in header.
      {
        name: "Contact",
        content: "Contact form for My True Nature and Lana Marie",
      },
    ],
  },
};
</script>

<style scoped lang="css">
input {
  font-size: 100%;
}

.contact {
  padding-left: 1em;
  margin: 0.75em;
  padding: 0.75em;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  font-size: 1.25vw;
}

.form-control {
  border-radius: 34px;
  border: 2px solid #e6e6e6;
  width: 25%;
  height: 3em;
  margin: 1em;
}

#name {
  padding-left: 0.5em;
}

#email {
  width: 40%;
  padding-left: 0.5em;
}

#message-box {
  width: 40%;
  height: 30%;
  padding-left: 0.5em;
  padding-top: 1.5em;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  font-size: 110%;
}

#form-submit-button {
  background-color: black;
  color: white;
  margin-top: 1.5em;
  padding-left: 0.5em;
  border: 2px solid #e6e6e6;
  border-radius: 25px;
  width: 15em;
  height: 3.5em;
  font-size: 105%;
}

# .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

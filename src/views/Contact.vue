<template>
  <div class="contact">
    <div>
      <transition name="fade" mode="out-in">
        <div v-if="sent">
          <p>Thanks</p>
        </div>
      </transition>
    </div>
    <div id="form" v-if="!sent" @submit.prevent="submitForm">
      <h1 class="form-h1">Contact us</h1>
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
                placeholder="What would you like to say?"
                required
              ></textarea>
            </div>
          </div>
          <div class="form-group">
            <button
              id="form-submit-button"
              class="form-control, form-button"
              @submit.prevent="submitForm"
            >
              Send
            </button>
          </div>
        </div>
      </form>
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
      axios
        .post("http://localhost:3000/sendContactMessage", {
          formData: this.form,
        })
        .then((response) => {
          if (response) {
            this.sent = true;
          }
        })
        .catch((error) => console.log("Error from submitForm: " + error));
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

<style scoped lang="css" > 
h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

input {
  font-size: 110%;
}

.contact {
  padding-left: 1em;
  margin: 0.75em;
  padding: 0.75em;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  font-size: 120%;
}

.form-control {
  border-radius: 34px;
  border: 2px solid #e6e6e6;
  width: 25%;
  height: 3.5em;
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
  padding-top: 1em;
  font-size: 110%;
}

#form-submit-button {
  background-color: blue;
  color: white;
  margin-top: 1.5em;
  padding-left: 0.5em;
  border: 2px solid #e6e6e6;
  border-radius: 25px;
  width: 15em;
  height: 3.5em;
  font-size: 90%;
}
</style>

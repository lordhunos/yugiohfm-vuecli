<template>
  <form @submit.prevent="sendRegister">
    <div class="form-label-group">
      <input v-model="register.username" type="text" id="username" class="form-control" placeholder="Username" required>
      <label for="username">Username</label>
    </div>

    <div class="form-label-group">
      <input v-model="register.email" type="email" id="email" class="form-control" placeholder="Email address" required>
      <label for="email">Email address</label>
    </div>

    <div class="form-label-group">
      <input v-model="register.password" type="password" id="password" class="form-control" placeholder="Password" required>
      <label for="password">Password</label>
    </div>

    <div class="form-label-group">
      <input v-model="register.rpassword" type="password" id="rpassword" class="form-control" placeholder="Rapeat password" required>
      <label for="rpassword">Repeat password</label>
    </div>

    <b-btn block pill type="submit" variant="primary">Register</b-btn>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: '',
        rpassword: ''
      },
    }
  }, 
  methods: {
    async sendRegister() {
      try{
        this.$emit('update:errors', [])
        const registerResponse = await this.axios.post('/user/register', this.register)
        this.$emit('update:res', registerResponse) 
      } catch(e) {
        if(e.response.data.errors){
          for(const error of e.response.data.errors){
            this.errors.push(error.msg)
          }
        }
      }
    }
  },
  props: ['res', 'errors']
}
</script>

<style scoped>
  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .form-label-group input {
    height: auto;
    border-radius: 2rem;
  }

  .form-label-group>input,
  .form-label-group>label {
    padding: var(--input-padding-y) var(--input-padding-x);
  }

  .form-label-group>label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0;
    /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
    padding-bottom: calc(var(--input-padding-y) / 3);
  }

  .form-label-group input:not(:placeholder-shown)~label {
    padding-top: calc(var(--input-padding-y) / 3);
    padding-bottom: calc(var(--input-padding-y) / 3);
    font-size: 10px;
    color: #777;
  }

  /* Fallback for Edge
  -------------------------------------------------- */

  @supports (-ms-ime-align: auto) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input::-ms-input-placeholder {
      color: #777;
    }
  }

  /* Fallback for IE
  -------------------------------------------------- */

  @media all and (-ms-high-contrast: none),
  (-ms-high-contrast: active) {
    .form-label-group>label {
      display: none;
    }
    .form-label-group input:-ms-input-placeholder {
      color: #777;
    }
  }
</style>
<template>
  <section class="w-full h-full flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-300">
    <v-card class="w-4/5 h-4/5 lg:w-2/4 lg:h-3/5 xl:w-2/6 xl:h-3/5 2xl:w-1/6 2xl:h-2/5">
      <div class="h-full flex flex-col justify-between p-5">
        <h1 class="font-bold text-4xl text-center my-5">
          Login to Inmovest!
        </h1>
        <v-form
            class="md:px-20 xl:px-5"
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          >
          </v-text-field>
          <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show = !show"
          ></v-text-field>
        </v-form>
        <div class="w-full flex justify-center">
          <v-btn
              :disabled="!valid"
              color="primary"
              @click="submit"
              outlined
          > Log in </v-btn>
        </div>
        <router-link to="/register" class="text-sm text-blue-500 text-center hover:underline">
          Don't have an account? Sign Up
        </router-link>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      show: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'You must provide a password'
      ]
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate();
      const { email, password } = this.$data
      //TODO POST TO LOGIN
      console.log(email, password)
    }
  }
}
</script>
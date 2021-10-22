<template>
  <v-hover>
    <v-card>
      <v-card-text>
        <v-flex class="mb-4">
          <v-avatar size="96" class="mr-4">
            <!--<img :src="'/avatars/avatar_' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">-->
          </v-avatar>
          <v-btn>Change Avatar</v-btn>
        </v-flex>
        <v-text-field
            v-model="firstName"
            label="FirstName"></v-text-field>
        <v-text-field
            v-model="lastName"
            label="Last Name"></v-text-field>
        <v-text-field
            v-model="email"
            label="Email Address"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <!--<v-btn color="primary" :loading="loading" @click.native="update">
          <v-icon left dark>check</v-icon>
          Save Changes
        </v-btn>-->
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Profile",
  data(){
    return{
      firstName: '',
      lastName: '',
      email: ''
    }
  }
}
</script>

<style scoped>

</style>
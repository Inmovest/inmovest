<template>
  <Layout>
    <v-card class="flex flex-col justify-between items-center h-96 cursor-pointer">
      <div class="w-full" v-if="user">
        <div>
          <v-card-title> Names </v-card-title>
          <v-avatar>
            <v-img
                :src="this.user.avatar"
                class="object-cover h-full"
            ></v-img>
          </v-avatar>
          <v-card-subtitle class="pl-4 p-0 text-gray-400">{{this.user.name}} {{this.user.secondName}}</v-card-subtitle>
        </div>
        <div>
          <v-card-title> Lastnames </v-card-title>
          <v-card-subtitle class="pl-4 p-0 text-gray-400">{{this.user.lastname}} {{this.user.secondLastname}}</v-card-subtitle>
        </div>
        <div>
          <v-card-title> RUC </v-card-title>
          <v-card-subtitle class="pl-4 p-0 text-gray-400">{{this.user.ruc}}</v-card-subtitle>
        </div>
        <div>
          <v-card-title> Email </v-card-title>
          <v-card-subtitle class="pl-4 p-0 text-gray-400">{{this.user.email}}</v-card-subtitle>
        </div>
        <div>
          <v-card-title> Password </v-card-title>
          <v-card-subtitle class="pl-4 p-0 text-gray-400">{{this.user.password}}</v-card-subtitle>
        </div>
      </div>
    </v-card>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import {getUserById} from "@/services/profilesService";

export default {
  name: "UserDetails",
  components: {
    Layout,
  },
  data() {
    return {
      loading: true,
      user: null,
      error: null
    }
  },
  beforeMount() {
    getUserById(this.$route.params.id)
        .then(data => {
          this.$data.user = data;
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>

<style scoped>

</style>
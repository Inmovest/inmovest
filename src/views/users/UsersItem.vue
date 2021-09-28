<template>
  <Layout>
    <div v-if="user">
      <div>
        <h2>Names</h2>
        <p>{{ user.name }}</p>
        <p>{{ user.secondName }}</p>
        <h2>LastNames</h2>
        <p>{{ user.lastname }}</p>
        <p>{{ user.secondLastname }}</p>
        <h2>RUC</h2>
        <p>{{ user.ruc }}</p>
        <h2>Email</h2>
        <p>{{ user.email }}</p>
        <h2>Password</h2>
        <p>{{ user.password }}</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import {getUserById} from "@/services/profilesService";
import Profile from "@/components/Profile";

export default {
  name: "UserDetails",
  components: {
    Layout,
    Profile
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
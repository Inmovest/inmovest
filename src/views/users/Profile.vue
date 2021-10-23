<template>
  <Layout>
    <div class="marginated">
      <v-card class = "semi center">
        <v-row dense>
          <v-col>
            <v-avatar
                class="ma-3"
                size="125"
                tile
            >
              <v-img :src=this.user.avatar></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <h3>Name</h3>
          </v-col>
          <v-col>
            <input type="text" id="iName" name="iName" :value=this.user.name>
          </v-col>
          <v-col>
            <h3>Lastname</h3>
          </v-col>
          <v-col>
            <input type="text" id="iLastname" name="iLastname" :value=this.user.lastname>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <h3>RUC</h3>
          </v-col>
          <v-col>
            <input type="text" id="iRuc" name="iRuc" :value="this.user.ruc">
          </v-col>
          <v-col>
            <h3>Email</h3>
          </v-col>
          <v-col>
            <input type="text" id="iEmail" name="iEmail" :value="this.user.email">
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <h3>Password</h3>
          </v-col>
          <v-col>
            <input type="password" id="iPassword" name="iPassword" :value="this.user.password">
          </v-col>
          <v-col>
            <h3>Confirm Password</h3>
          </v-col>
          <v-col>
            <input type="password" id="iCP" name="iCP">
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
                elevation="3"
                color = "warning"
                v-on:click="updateInformation"
            >
              Update Information
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </Layout>
</template>

<script>
import {getUserById, updateUserInfo} from "@/services/profileService";
import Layout from "../../components/common/Layout";

export default {
  name: "UserDetails",
  components: {
    Layout
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
  },
  methods: {
    updateInformation() {
      this.user.name = document.getElementById("iName").innerText;
      this.user.lastname = document.getElementById("iLastname").innerText;
      this.user.ruc = document.getElementById("iRuc").innerText;
      this.user.email = document.getElementById("iEmail").innerText;
      if(document.getElementById("iPassword") === document.getElementById("ICP")) {
        this.user.password = document.getElementById("iPassword").innerText;
      }
      updateUserInfo(1, {name:"ronaldiño"});
    }
  }
}
</script>

<style scoped>
th, td {
  padding: 20px;
}
.center {
  text-align: center;
  margin: auto;
}
.semi {
  width: calc(50%);
}
.marginated {
  margin-top: 2rem;
}
</style>
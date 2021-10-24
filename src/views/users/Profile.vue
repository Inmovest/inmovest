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
            </v-btn >


            <v-card-actions>
<v-dialog v-model="dialog" width="500">
  <template v-slot:activator="{on,attrs}">
    <v-btn class="semi center" color="primary" v-bind="attrs" v-on="on">
      Add a new Card
    </v-btn>
  </template>
  <v-card >
    <v-card-title class="headline info">
      Add a new credit card
    </v-card-title>
    <v-card-text>
      <form>
        <v-text-field v-model="CardNumber" label="Card Number" ></v-text-field>
        <v-text-field v-model="FullName" label="Full Name"></v-text-field>
        <v-text-field v-model="DueDate" label="MM/AA"></v-text-field>
        <v-text-field v-model="SecurityCode" label="CVV"></v-text-field>
        <v-text-field v-model="PostalCode" label="Postal Code"></v-text-field>
        <v-btn large>
          <v-icon>mdi-check </v-icon>
          Save and Confirm
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</v-dialog>
            </v-card-actions>



<v-card-actions>
<v-dialog v-model="dialog" width="500">
  <template v-slot:activator="{on,attrs}">
    <v-btn class="semi center" color="primary" v-bind="attrs" v-on="on">
      Add Balance
    </v-btn>
  </template>

  <v-card >
    <v-card-title class="headline info">
      Add Balance
    </v-card-title>
    <v-card-text>
      <form>

        <v-radio-group v-model="radioGroup">
          <v-radio
              v-for="n in 3"
              :key="n"
              :label="`Tarjeta Visa ${n}`"
              :value="n"
          ></v-radio>
          <v-text>How much balance do you want to recharge?</v-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-slider
              v-model="value"
              step="200"
              max="5000"
              min="500"
              thumb-label
              ticks
          ></v-slider>

        </v-radio-group>

        <v-btn large>
          <v-icon>mdi-check </v-icon>
          Confirm
        </v-btn>
      </form>
    </v-card-text>
  </v-card>

</v-dialog>
</v-card-actions>




          </v-col>
        </v-row>
      </v-card>







    </div>
  </Layout>
</template>

<script>
import {getUserById, updateUserInfo} from "@/services/profilesService";
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
    getUserById(1)
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
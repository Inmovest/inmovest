<template>
  <div>
    <div v-for="investment in investments" :key="investment.id">
      <br>
      <v-card>
        <v-card-title>
          <v-avatar size="56">
            <img
                alt="user"
                :src="investment.user.avatar"
            >
          </v-avatar>
          <p class="ml-3">
            {{investment.user.name}}
            {{investment.user.lastname}}
            {{investment.user.secondLastname}}
          </p>
        </v-card-title>
        <v-card-text>
          {{investment.user.email}}
          <p>s/.{{investment.value}}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { getInvestmentById } from "@/services/investmentService";

export default {
  name: 'InvestorList',
  components: {},
  data (){
    return {
      loading: true,
      investments: null,
      error: null
    }
  },
  beforeMount() {
    getInvestmentById(this.$route.params.id)
        .then(data => {
          this.$data.investments = data;
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>
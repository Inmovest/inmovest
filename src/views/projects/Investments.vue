<template>
  <Layout>
    <div class="w-full h-full bg-green-50">
      <h1 class="text-2xl lg:text-5xl p-5">Your Investments</h1>
      <div v-if="loading" class="loading">
        Loading...
      </div>
      <div v-if="error" class="error">
        <ServerError/>
      </div>
      <div v-if="investments">
        <div v-for="investment in investments" :key="investment.id">
          <Investment :investment="{...investment}"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "@/components/common/Layout";
import {getInvestmentsById} from "@/services/investmentsService";
import Investment from "@/components/Investment";

export default {
  name: "InvestmentList",
  data() {
    return {
      projects: [],
      investments: [],
      loading: true,
      error: null,
    }
  },
  components: {
    Investment,
    Layout,
  },
  beforeMount() {
    getInvestmentsById(1)
        .then(data => {
          this.$data.investments = data;
          console.log("data", this.$data.investments);
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>

<style scoped>

</style>
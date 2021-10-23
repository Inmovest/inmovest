<template>
  <Layout>
    <div class="container">
      <h1 class="font-bold text-4xl text-center my-5">Your Investment Statistics</h1>
        <div class="w-full" v-if="user">
          <div>
            <h2 class="text-start ml-1 p-5"> Graph based on years and thousands of dollars </h2>
          </div>
        </div>
      <GChart
          type="LineChart"
          :options="options"
          :data="collectionData"
      />
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import {GChart} from 'vue-google-charts';
import {getUserById} from "@/services/profilesService";

export default {
  name: "InvestmentStatistics",
  components: {
    GChart,
    Layout
  },
  data() {
    return {
      collectionData: [],
      loading: true,
      user: null,
      error: null
    };
  },
  beforeMount() {
    getUserById(1)
        .then(data => {
          this.collectionData = data.collectionData
          this.$data.user = data;
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>

<style scoped>

</style>
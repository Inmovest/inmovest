<template>
  <Layout domain='Developer'>
    <v-data-table
        :headers="headers"
        :items="investments"
        :items-per-page="20"
        :sort-by="['amount']"
        :loading="loading"
        loading-text="Loading.. Please wait"
    ></v-data-table>
  </Layout>
</template>
<script>
import Layout from '../../components/common/Layout.vue'
import { getInvestmentsOfProject } from "@/services/investmentsService";
export default {
  components: { Layout },
  data () {
    return {
      investments: [],
      loading: false,
      error: false,
      project: {},
      headers: [
        { text: "ID", value: "id"},
        { text: "Amount", value: "amount"},
        { text: "User ID", value: "userId"}
      ]
    }
  },
  beforeMount() {
    getInvestmentsOfProject(this.$route.params.projectId)
        .then(data => this.$data.investments = data)
        .catch(e => this.$data.error = e)
  }

}
</script>

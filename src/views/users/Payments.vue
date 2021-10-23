<template>
  <Layout>
    <div class="w-full">
      <h1>Payment History</h1>
      <v-data-table
          dense
          :headers="dataSource.headers"
          :items="dataSource.payments"
          item-key="id"
      >
        <template v-slot:item.amount="{ item }">
          S/. {{ item.amount }}
        </template>
      </v-data-table>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import { getPayments } from "@/services/paymentsService";
export default {
  name: "Payments.vue",
  components: {
    Layout
  },
  data() {
    return {
      payments: [],
      loading: false,
      error: null,
      dataSource: {
        headers: [
          { text: 'Identifier', value: 'id' },
          { text: 'Amount', value: 'amount', sortable: true },
          { text: 'Comments', value: 'comment' }
        ],
        payments: [],
        loading: false,
        error: null
      }
    }
  },
  beforeMount() {
    getPayments()
        .then(data => this.$data.dataSource.payments = data)
        .catch(e => this.$data.dataSource.error = e)
  }
}
</script>
<template>
  <Layout>
    <div v-if="messages" class="container">
      <div v-for="message in messages" :key="message.id">
        <Message :message="{...message}"/>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import {getMessageById} from "@/services/messagesService";
import Message from "@/components/Message";

export default {
  name: "Messages",
  data() {
    return {
      messages:[],
      loading: true,
      error: null
    }
  },
  components: {
    Message,
    Layout
  },
  beforeMount() {
    getMessageById(1)
        .then(data => {
          this.$data.messages = data;
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>

<style scoped>

</style>
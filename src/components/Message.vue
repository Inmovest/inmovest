<template>
  <v-hover>
    <v-card class="p-5 m-1">
      <div class="w-full">
        <v-card-title> {{this.message.title}} </v-card-title>
        <v-card-subtitle class="py-0">
            {{this.message.content}}
        </v-card-subtitle>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    message:{
      id: Number,
      userId: Number,
      title: String,
      content: String,
      sentAt: String
    }
  },
  name: "Message"
}
</script>

<style scoped>

</style>
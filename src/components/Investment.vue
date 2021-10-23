<template>
  <v-hover>
    <v-card class="p-5 m-1">
      <div class="row">
        <div class="w-full col-sm-1">
          <img class="object-cover h-full rounded" :src="investment.project.photoUrl" style="width: 100px; height: 100px">
        </div>
        <div class="col">
          <v-card-title> {{ investment.project.name }}</v-card-title>
          <v-card-subtitle>
            {{ investment.project.description }}
          </v-card-subtitle>
        </div>
        <div class="col-2 container" style="margin: auto">
          <p class="text-sm">{{investment.sentAt.substring(0,8)}}</p>
          <p class="text-sm">Time: {{investment.sentAt.substring(8)}}</p>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Investment",
  props: {
    investment: {
      id: Number,
      userId: Number,
      projectId: Number,
      sentAt: String,
      project: {
        id: Number,
        name: String,
        description: String,
        photoUrl: String,
        developerId: Number,
        districtId: Number
      }
    },
  },
}
</script>

<style scoped>

</style>
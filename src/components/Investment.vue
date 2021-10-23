<template>
  <v-hover>
    <v-card class="p-5 m-1">
      <div class="row">
        <div class="w-full col-sm-1">
          <img class="object-cover h-full rounded" :src="investment.project.photoUrl" height="100" width="100" alt="project">
        </div>
        <div class="col">
          <v-card-title> {{ investment.project.name }}</v-card-title>
          <v-card-subtitle>
            {{ investment.project.description }}
          </v-card-subtitle>
        </div>
        <div class="col flex items-center">
          S/. {{investment.amount }}
        </div>
        <div class="col-2 container flex items-center">
          <span>{{ formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }) }}</span>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import { formatDistance, subDays } from 'date-fns'
export default {
  name: "Investment",
  data() {
    return {
      formatDistance,
      subDays
    }
  },
  props: {
    investment: {
      id: Number,
      userId: Number,
      projectId: Number,
      sentAt: String,
      amount: Number,
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
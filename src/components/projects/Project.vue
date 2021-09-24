<template>
  <v-card>
    <div class="flex flex-col justify-between items-center h-96">
      <div>
        <v-card-title> {{this.project.name}} </v-card-title>
        <v-card-text>{{this.project.developer.name}}</v-card-text>
        <v-card-text>{{this.project.district.name}}</v-card-text>
      </div>
      <div class="w-full h-40">
        <v-img
            :src="this.project.photoUrl"
            class="object-cover h-full"
        ></v-img>
      </div>

      <div class="flex w-full p-5">
        <v-btn
            @click="goToDetails"
            class="w-1/2"
            small
            outlined
        >
          <span class="text-xs">More Information</span>
        </v-btn>
        <v-btn
            @click="goToInvest"
            class="w-1/2"
            small
            outlined
            color="primary"
        > I want to invest!
        </v-btn>
      </div>
    </div>


  </v-card>
</template>

<script>
import router from "@/router";

export default {
  name: 'Project',
  props: ['project'],
  methods: {
    goToDetails () {
      router.push(`projects/${this.project.id}`)
    },
    goToInvest () {
      router.push(`projects/${this.project.id}/invest`)
    }
  }
}
</script>
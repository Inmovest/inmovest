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
        >
          <template v-slot:placeholder>
            <v-row
                class="h-full m-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="green"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>

      <div class="flex w-full p-5 justify-center items-center">
        <v-btn
            @click="goToDetails"
            class="w-2/5 mr-5"
            color="teal"
            outlined
        >
          <span class="text-xs">Information</span>
        </v-btn>
        <v-btn
            @click="goToInvest"
            class="w-2/5"
            color="teal"
        > <span class="text-white">Invest</span>
        </v-btn>
      </div>
    </div>


  </v-card>
</template>

<script>
import router from "@/router";

export default {
  props: {
    project:{
      id: Number,
      name: String,
      description: String,
      photoUrl: String,
      developer: {
        id: Number,
        name: String
      },
      district: {
        id: Number,
        name: String
      }
    }
  },
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
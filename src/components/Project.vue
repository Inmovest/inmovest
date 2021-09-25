<template>
  <v-hover>
    <v-card class="flex flex-col justify-between items-center h-96 cursor-pointer">
      <div class="w-full">
        <v-card-title> {{this.project.name}} </v-card-title>
        <v-card-subtitle class="pl-4 p-0 text-gray-400">Campaign 1 - By {{this.project.developer.name}}</v-card-subtitle>
        <v-card-subtitle class="py-0">
          <v-list-item-icon><v-icon>mdi-map-marker</v-icon>
            {{this.project.district.name}}
          </v-list-item-icon>
        </v-card-subtitle>
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
    </v-card>
  </v-hover>
</template>

<script>
import router from "@/routes";

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
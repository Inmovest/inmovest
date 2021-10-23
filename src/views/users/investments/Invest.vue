<template>
  <Layout>
    <section class="w-full h-full p-5 bg-gray-200">
      <span class="text-h3">Invest on {{project.name}}</span>
      <div class="flex flex-col justify-center lg:flex-row mt-5">
        <v-card class="w-100 flex flex-col items-center justify-center lg:w-1/5">
          <v-card-title>{{project.name}}</v-card-title>
          <v-card-subtitle>Campaign 1</v-card-subtitle>
          <img :src="project.photoUrl" alt="project.name">
          <p>{{project.description}}</p>
        </v-card>
        <v-card class="mt-20 lg:w-4/5 lg:ml-5 lg:mt-0">
          <v-card-title>
            Start Investing!
          </v-card-title>
          <div class="p-5 lg:p-20">
            <v-slider
                v-model="slider"
                prepend-icon="mdi-hand-coin"
                always-dirty
                min="500"
                max="5000"
                step="200"
                thumb-color="teal"
                track-color="green"
                thumb-label="always"
            ></v-slider>
          </div>
        </v-card>
      </div>
    </section>
  </Layout>
</template>

<script>
import { getProjectById } from "@/services/projectsService";
import Layout from "@/components/common/Layout";
export default {
  name: "Invest",
  data() {
    return {
      project: {},
      min: 0,
      max: 10000,
      slider: 40
    }
  },
  components: {
    Layout
  },
  beforeMount() {
    getProjectById(this.$route.params.id).then(data => {
      console.log(data)
      this.$data.project = data
    })
  }
}
</script>
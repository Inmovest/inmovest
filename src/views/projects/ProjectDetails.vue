<template>
  <Layout>
    <div v-if="project">
      <div>
        <span>{{project.developer.name}}</span>
        <span>{{project.district.name}}</span>
      </div>
      <h1>{{project.name}}</h1>
      <p>{{project.description}}</p>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  name: 'ProjectDetails',
  components: {
    Layout
  },
  data (){
    return {
      project: null
    }
  },
  beforeMount() {
    this.fetchProject()
        .then(data => this.$data.project = data)
  },
  methods: {
    async fetchProject() {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/projects/${this.$route.params.id}?_expand=developer&_expand=district`)
      return response.ok ? response.json() : response.error()
    }
  }
}
</script>
<template>
  <Layout>
    <div class="w-full h-full bg-green-50">
      <h1 class="text-2xl lg:text-5xl p-5">Opportunities to invest</h1>
      <div v-if="loading" class="loading">
        Loading...
      </div>
      <div v-if="error" class="error">
        {{error}}
      </div>
      <div v-if="projects" class="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 grid-rows-auto gap-4">
        <div v-for="project in projects" :key="project.id">
          <Project :project="{...project}"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "@/components/Layout";
import Project from "@/components/Project";
export default {
  name: 'Projects',
  components: {
    Project,
    Layout
  },
  data () {
    return {
      loading: false,
      projects: [],
      error: null
    }
  },
  beforeMount() {
    this.fetchProjects()
        .then(data => this.$data.projects = data)
  },
  methods: {
    async fetchProjects () {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/projects?_expand=developer&_expand=district`)
      return response.ok ? response.json() : response.error()
    }
  }
}
</script>
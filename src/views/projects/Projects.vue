<template>
  <Layout>
    <div class="w-full h-full bg-green-50">
      <h1 class="text-2xl lg:text-5xl p-5">Opportunities to invest</h1>
      <div v-if="loading" class="loading">
        Loading...
      </div>
      <div v-if="error" class="error">
        <ServerError/>
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
import Layout from "@/components/common/Layout";
import Project from "@/components/ProjectCard";
import ServerError from "@/views/common/ServerError";
import { getProjects } from "@/services/projectsService";

export default {
  name: 'Projects',
  components: {
    ServerError,
    Project,
    Layout
  },
  data () {
    return {
      projects: [],
      loading: false,
      error: null
    }
  },
  beforeMount() {
    getProjects()
        .then(data => this.$data.projects = data)
        .catch(e => this.$data.error = e)
  }
}
</script>
<template>
  <Layout>
    <div v-if="project">
      <div>
        <span>{{project.developer.name}} - </span>
        <span>{{project.district.name}}</span>
      </div>
      <h1>{{project.name}}</h1>
      <p>{{project.description}}</p>
    </div>
    <div>
      <InvestorList></InvestorList>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
import InvestorList from "@/components/InvestorList";
import { getProjectById } from "@/services/projectsService";

export default {
  name: 'ProjectDetails',
  components: {
    Layout,
    InvestorList
  },
  data (){
    return {
      loading: false,
      project: null,
      error: null
    }
  },
  beforeMount() {
    getProjectById(this.$route.params.id)
        .then(data => {
          console.log(data)
          this.$data.project = data;
          this.$data.loading = false;
        })
        .catch(e => this.$data.error = e)
  }
}
</script>
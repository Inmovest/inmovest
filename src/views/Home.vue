<template>
  <Layout>
    <h1>test</h1>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";

export default {
  name: 'Home',
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        console.log(from)
        document.title = to.meta.title || "Inmovest | Invest on Real State";
      }
    }
  },
  components: {
    Layout
  }
}
</script>

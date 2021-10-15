<template>
  <Layout>
    <div class="center-big">
      <h1>Welcome</h1>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/common/Layout";

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

<style>
 .center-big{
   text-align: center;
   font-size: 8rem;
 }
</style>
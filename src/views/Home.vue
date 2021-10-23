<template>
  <Layout>
    <section class="h-full">
      <h1 class="text-6xl p-5">Invest on Real State!</h1>
      <div class="w-full flex justify-start items-center">
        <img src="@/assets/images/home.jpg" alt="home" class="mr-5 rounded-lg opacity-70">
        <router-link to="/projects">
          <v-btn color="secondary">
            Start investing!
          </v-btn>
        </router-link>
      </div>

    </section>
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

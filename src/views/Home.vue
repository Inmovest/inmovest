<template>
  <Layout>
    <section class="h-full">
      <div class="pl-6">
        <div class="text-h3 p-2">Welcome back!</div>
        <div class="text-h7 p-2">This is the start of building something great!</div>
      </div>
      <div class="w-full flex flex-col justify-start items-center lg:flex-row ">
        <img src="@/assets/images/home.jpg" alt="home" class="p-7 rounded-lg opacity-70">
        <router-link to="/projects">
          <v-btn color="secondary" class="p-5">
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

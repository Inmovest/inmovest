<template>
  <section class="w-full h-full">
    <nav>
      <v-app-bar
          color="green"
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Inmovest</v-toolbar-title>
      </v-app-bar>
    </nav>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list-item>
        Home
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <slot></slot>
  </section>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard'}
      ]
    }
  },
  name: 'Layout'
}
</script>
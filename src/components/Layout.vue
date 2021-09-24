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
        class="px-5"
    >
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Inmovest
        </v-list-item-title>
        <v-divider></v-divider>
        <div v-for="item in items" :key="item.title">
          <router-link :to="item.route">
            <v-list-item link>
              <v-list-item-icon> <v-icon>{{item.icon}}</v-icon> </v-list-item-icon>
              <v-list-item-title> {{item.title}} </v-list-item-title>
            </v-list-item>
          </router-link>
        </div>
      </v-list-item-content>
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
        { title: 'Home', icon: 'mdi-home', route: '/'},
        { title: 'Projects', icon: 'mdi-chart-line-variant', route: '/projects'},
        { title: 'Statistics', icon: 'mdi-chart-line', route: '/statistics'}
      ]
    }
  },
  name: 'Layout'
}
</script>
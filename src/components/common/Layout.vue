<template>
  <section class="w-full h-full">
    <nav class="h-nav-ns">
      <v-app-bar
          :color="domain ? 'blue' : 'teal' + ' lighten-3'"
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <router-link to="/">
          <div class="flex items-center text-black hover:text-green-800 ">
            <v-img
                src="@/assets/logo.svg"
                width="20"
                class="mr-1 bg-black hover:bg-green-800 transition"
            />
            <v-app-bar-title>
              Inmovest {{ domain }}
            </v-app-bar-title>
          </div>
        </router-link>
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
          Inmovest {{ domain }}
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
    <section id="content">
      <slot></slot>
    </section>
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
        { title: 'Statistics', icon: 'mdi-chart-line', route: '/statistics'},
        { title: 'Profile', icon: 'mdi-account', route: '/users/1'}, //hardcode user/id
      ]
    }
  },
  name: 'Layout',
  props: ['domain']
}
</script>

<style>
#content {
  /* Firefox */
  height: -moz-calc(100% - 64px);
  /* WebKit */
  height: -webkit-calc(100% - 64px);
  /* Opera */
  height: -o-calc(100% - 64px);
  /* Standard */
  height: calc(100% - 64px);
}
</style>
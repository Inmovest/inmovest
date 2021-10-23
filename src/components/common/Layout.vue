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
            <div class="text-h6">
              Inmovest {{ domain }}
            </div>
          </div>
        </router-link>
        <v-spacer></v-spacer>
        <router-link v-if="!domain" to="/messages">
          <v-btn icon class= "ml-1 p-5">
            <v-icon>mdi-message</v-icon>
          </v-btn>
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
    <section class="content">
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
        { title: 'My Investments', icon: 'mdi-hand-coin', route: '/investments'},
        { title: 'Statistics', icon: 'mdi-chart-line', route: '/statistics'},
        { title: 'Payments History', icon: 'mdi-cash-refund', route: '/payments'},
        { title: 'My Profile', icon: 'mdi-account', route: '/profile'}
      ]
    }
  },
  name: 'Layout',
  props: ['domain']
}
</script>
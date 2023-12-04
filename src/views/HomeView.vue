<template>
  <div>
    <v-app-bar absolute color="#A7B9A1" dark shrink-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>DAGBOK</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fa-brands fa-facebook-f</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fa-brands fa-github-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green text--accent-4">
          <v-list-item to="/home/notas">
            <v-list-item-icon>
              <v-icon>fa-solid fa-clipboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="drawer = false">Notas</v-list-item-title>
          </v-list-item>

          <v-list-item to="/home/chat">
            <v-list-item-icon>
              <v-icon>fa-solid fa-comments</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Chat </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <DashboardView />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import DashboardView from "./DashboardView.vue";
export default {
  name: "HomeView",
  components: {
    DashboardView,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
* {
  width: 100%;
  height: auto;
}
</style>

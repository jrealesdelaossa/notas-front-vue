<template>
  <div>
    <v-app-bar
      absolute
      color="#A7B9A1"
      dark
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
    >
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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="drawer = false">Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

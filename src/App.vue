<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(145deg, #a7b9a1, #fff, #e8d276);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

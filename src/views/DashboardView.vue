<template>
  <div class="pt-12 my-12">
    <v-card :loading="loading" class="mx-auto my-12" max-width="800">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" src="../assets/user-male.svg"></v-img>

      <v-card-title>{{
        this.$store.getters.getUserInfo.nombreUsuario
      }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>{{
        `${this.$store.getters.getUserInfo.nombres} ${this.$store.getters.getUserInfo.apellidos}`
      }}</v-card-title>

      <v-card-text>
        {{ this.$store.getters.getUserInfo._id }}
      </v-card-text>
      <v-card-text>
        {{ this.$store.getters.getUserInfo.correo }}
      </v-card-text>
      <v-card-text>
        {{ this.$store.getters.getUserInfo.genero }}
      </v-card-text>

      <v-card-actions>
        <v-dialog v-model="openUpdateInfo" width="700">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              color="#A7B9A1"
              @click="openUpdateInfo = true"
            >
              Editar Información
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="openUpdateInfo = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DashboardView",

  data: () => ({
    loading: false,
    selection: 1,
    openUpdateInfo: false,

    // user data
    userInfo: null,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

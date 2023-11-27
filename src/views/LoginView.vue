<template>
  <v-app class="container">
    <v-card
      :loading="loading"
      color="#F5F7F4"
      class="mx-auto my-auto pa-12"
      max-width="400"
    >
      <v-img width="120" src="@/assets/notepad.svg" class="mx-auto mb-8">
      </v-img>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Usuario"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="showEye ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
          :rules="[rules.required, rules.min]"
          :type="showEye ? 'text' : 'password'"
          label="Contraseña"
          counter
          @click:append="showEye = !showEye"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || '!Debes aceptar los términos y condiciones!']"
          label="¿Estas de acuerdo con los términos y condiciones?"
          required
        ></v-checkbox>

        <v-row class="mx-auto mt-6">
          <v-btn
            :disabled="!valid"
            color="#A7B9A1"
            class="mr-4"
            @click="validate"
          >
            Iniciar
          </v-btn>

          <v-btn color="#E8D276" class="mr-4" @click="reset"> Registro </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Nombre de usuario es requerido."],
    password: "Password",
    showEye: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Mínimo ocho (8) caracteres",
      emailMatch: () => `The email and password you entered don't match`,
    },
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}

* {
  font-family: "Montserrat", sans-serif;
}
</style>

<template>
  <v-app class="container">
    <v-card color="#F5F7F4" class="mx-auto my-auto pa-12" max-width="400">
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

          <v-dialog v-model="dialog" persistent max-width="800">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#E8D276" v-bind="attrs" v-on="on" class="mr-4">
                Registro
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5"> Registro de usuario </v-card-title>
              <v-card-text>
                <RegistrationForm @closeDialog="dialog = false" />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#DC8686" @click="dialog = false">
                  Cancelar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";
import axios from "axios";

export default {
  name: "LoginView",
  data: () => ({
    dialog: false,
    valid: true,
    name: "julián",
    nameRules: [(v) => !!v || "Nombre de usuario es requerido."],
    password: "1234567811",
    showEye: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Mínimo ocho (8) caracteres",
      emailMatch: () => `The email and password you entered don't match`,
    },
    checkbox: false,
  }),
  methods: {
    async validate() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        await axios
          .post("http://localhost:3000/usuario/login", {
            nombre: this.name,
            password: this.password,
          })
          .then((response) => {
            console.log(response);
            this.$store.dispatch("setUserInfoAction", response.data);
            this.$router.push("/home");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  components: { RegistrationForm },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: auto;
}

* {
  font-family: "Montserrat", sans-serif;
}
</style>

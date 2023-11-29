<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="names"
      :counter="50"
      :rules="namesRules"
      label="Nombres"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastNames"
      :counter="50"
      :rules="namesRules"
      label="Apellidos"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Correo electrónico"
      required
    ></v-text-field>

    <v-text-field
      v-model="userName"
      :rules="userNameRules"
      label="Nombre de usuario"
      counter
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

    <v-select
      v-model="gender"
      :items="items"
      :rules="[(v) => !!v || 'Por favor seleccione un genero']"
      label="Genero"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || '¡Debes aceptar los términos y condiciones!']"
      label="¿Estas de acuerdo con los términos y condiciones?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="createUser">
      Registrar usuario
    </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    names: "julián",
    namesRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 50) || "Nombres no puede superar los 50 caracteres",
    ],
    lastNames: "reales",
    lastNamesRules: [
      (v) => !!v || "Apellidos es requerido",
      (v) =>
        (v && v.length <= 50) || "Apellidos no puede superar los 50 caracteres",
    ],
    userName: "julián",
    userNameRules: [
      (v) => !!v || "Nombre de usuario es requerido",
      (v) =>
        (v && v.length >= 5) ||
        "Nombre de usuario debe tener mínimo 5 caracteres",
    ],
    email: "test@test.com",
    emailRules: [
      (v) => !!v || "Correo electrónico es requerido",
      (v) =>
        /.+@.+\..+/.test(v) || "Debe ingresar un correo electrónico valido.",
    ],
    password: 12345678,
    showEye: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 7 || "Mínimo ocho (8) caracteres",
    },
    gender: "Masculino",
    items: ["Masculino", "Femenino", "Prefiero no decir"],
    checkbox: false,
  }),

  methods: {
    createUser() {
      this.$refs.form.validate();
      const newUser = {
        nombres: this.names,
        apellidos: this.lastNames,
        nombreUsuario: this.userName,
        genero: this.gender,
        correo: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:3000/usuario/crear", newUser)
        .then((response) => {
          if (response.status != null && response.status === 201) {
            console.log(response.data);
            this.$emit("closeDialog");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <v-form ref="form" v-model="valid" lazy-validation class="pt-4">
    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="Titulo"
      required
      class="mb-4"
    ></v-text-field>

    <v-textarea
      outlined
      name="input-7-4"
      label="Outlined textarea"
      v-model="note"
      :rules="noteRules"
    ></v-textarea>

    <v-btn
      rounded
      :disabled="!valid"
      color="#F7E9E0"
      class="mr-4 mb-4"
      @click="createNote"
    >
      <span class="btnText">Crear nota</span>
    </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateNote",
  data: () => ({
    valid: false,
    title: "",
    titleRules: [(v) => !!v || "Titulo es requerido"],
    note: "",
    noteRules: [(v) => !!v || "Cuerpo de nota es requerido"],
  }),

  methods: {
    async createNote() {
      const isValid = this.$refs.form.validate();

      if (isValid) {
        await axios
          .post("http://localhost:3000/nota/crear", {
            titulo: this.title,
            nota: this.note,
            usuario: this.$store.getters.getUserInfo._id,
          })
          .then((response) => {
            if (response.status === 201) {
              this.$emit("updateNotes");
            }
            this.resetForm();
            this.$emit("closeCreateNote");
          });
      }
    },

    resetForm() {
      this.title = "";
      this.note = "";
    },
  },
};
</script>

<style scoped>
.btnText {
  font-size: 1.2em;
  font-weight: 600;
}
</style>

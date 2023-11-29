<template>
  <div>
    <v-card max-width="1600" class="mx-auto">
      <v-card-title class="text-h2"> Notas </v-card-title>
      <v-card-actions class="mx-4">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#A7B9A1" rounded v-bind="attrs" v-on="on">
              Crear nota</v-btn
            >
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Nueva nota
            </v-card-title>

            <v-card-text>
              <CreateNote @closeCreateNote="closeCreateNote" />
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#DC8686" rounded @click="dialog = false">
                <span class="btnText">Cancelar</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
      <v-card-text>
        <v-row>
          <v-col class="notes-container">
            <div v-for="note in notes" :key="note._id">
              <NotaComponent :note="note" />
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CreateNote from "@/components/CreateNote.vue";
import NotaComponent from "@/components/NotaComponent.vue";
import axios from "axios";
export default {
  name: "NotasView",
  components: {
    NotaComponent,
    CreateNote,
  },

  data: () => ({
    dialog: false,
    newNote: {
      titulo: "",
      nota: "",
    },
    notes: [],
  }),

  methods: {
    async getNotesOfUser() {
      await axios
        .get(
          `http://localhost:3000/nota/obtener-por-id/${this.$store.getters.getUserInfo._id}`
        )
        .then((response) => {
          if (response.status === 200) {
            this.notes = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async closeCreateNote() {
      await this.getNotesOfUser();
      this.dialog = false;
    },
  },

  async mounted() {
    await this.getNotesOfUser();
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  word-spacing: 0.2em;
}

.notes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
}

.btnText {
  font-size: 1.2em;
  font-weight: 600;
}
</style>
